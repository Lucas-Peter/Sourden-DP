#!/usr/bin/env node
/**
 * SOURDEN — add-collection
 * ---------------------------------------------------------------------------
 * Turns a content file + a folder of photos into a full product-collection
 * page, with no hand-written data file, no manual `media.js` edit and no
 * registry edit. The whole flow the owner asked for in one command:
 *
 *   node scripts/add-collection.mjs incoming/<slug> [--dry-run]
 *
 * ── INPUT (one folder per collection) ──────────────────────────────────────
 *   incoming/<slug>/collection.md   the copy (see the `_TEMPLATE` folder)
 *   incoming/<slug>/01.jpg ...      one photo per product, any name
 *
 * ── WHAT IT DOES ───────────────────────────────────────────────────────────
 *   1. Parses `collection.md` (a `label: value` template with repeating
 *      `paragraph:` / `product:` rows).
 *   2. Crops every photo to the card's 4:5 frame (1000 × 1250, centre cover),
 *      encodes WebP ~78%, and writes `public/images/<slug>-NN.webp`.
 *   3. Writes `src/data/collection-<slug>.js` — SEO, intro, the catalogue
 *      notice and the product list, all from the template.
 *   4. Registers the image slots in `src/data/media.js` and the collection in
 *      `src/data/product-collections.js`, so the `[industry]/[slug]` route
 *      picks the new page up on the next build with no route-file edit.
 *
 * The page's URL, breadcrumb and "Products" nav entry are all derived from the
 * `industrySlug` you put in the template — no other wiring to touch.
 *
 * ── SAFETY ─────────────────────────────────────────────────────────────────
 * Refuses to run if the slug already exists. `--dry-run` writes only to
 * `incoming/<slug>/.preview/` and prints the `media.js` / registry insertions
 * instead of editing them, so the result can be reviewed before committing.
 * ---------------------------------------------------------------------------
 */
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { industries } from '../src/data/industries.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const ARGS = process.argv.slice(2);
const DRY = ARGS.includes('--dry-run');
const incomingArg = ARGS.find((a) => !a.startsWith('--'));

function fail(msg) {
  console.error(`\n[add-collection] ${msg}\n`);
  process.exit(1);
}

if (!incomingArg) {
  console.error('用法: node scripts/add-collection.mjs <incoming/<slug>> [--dry-run]');
  process.exit(1);
}

const dir = path.resolve(ROOT, incomingArg);
if (!fs.existsSync(dir)) fail(`目录不存在: ${dir}`);
const mdPath = path.join(dir, 'collection.md');
if (!fs.existsSync(mdPath)) fail(`缺少 collection.md: ${mdPath}`);

/* =========================================================== template parse */

const SINGLE = new Set([
  'slug',
  'industrySlug',
  'categoryName',
  'seoTitle',
  'metaDescription',
  'cardDescription',
  'eyebrow',
  'h1',
  'catalogEyebrow',
  'catalogTitle',
  'catalogNotice',
  'ctaLabel',
]);

const data = { paragraph: [], product: [] };
for (const rawLine of fs.readFileSync(mdPath, 'utf8').split(/\r?\n/)) {
  const line = rawLine.trim();
  if (!line || line.startsWith('#')) continue;
  const m = line.match(/^([A-Za-z][A-Za-z0-9]*):\s*(.*)$/);
  if (!m) continue;
  const key = m[1];
  const value = m[2].trim();
  if (SINGLE.has(key)) data[key] = value;
  else if (key === 'paragraph' || key === 'product') data[key].push(value);
}

/* ============================================================== validation */

const REQUIRED = [...SINGLE];
for (const key of REQUIRED) {
  if (!data[key]) fail(`模板缺字段 "${key}"`);
}
if (!/^[a-z0-9-]+$/.test(data.slug)) fail(`slug 只能用小写字母/数字/连字符，收到 "${data.slug}"`);
if (data.paragraph.length === 0) fail('至少填一行 paragraph:（介绍段落）');
if (data.product.length === 0) fail('至少填一行 product:（产品）');

const industry = industries.find((i) => i.slug === data.industrySlug);
if (!industry) {
  fail(
    `industrySlug "${data.industrySlug}" 不在 industries.js。可用: ` +
      industries.map((i) => i.slug).join(', ')
  );
}

/* ======================================================== derived identities */

const slug = data.slug;
const camelSlug = slug.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());
const NN = (n) => String(n).padStart(2, '0');

const products = data.product.map((row, idx) => {
  const parts = row.split(' | ').map((p) => p.trim());
  if (parts.length < 5) {
    fail(`product 行缺字段（需 code | name | 一句话描述 | alt | 图片文件名）: "${row}"`);
  }
  const [code, name, shortDescription, altText, imageFile] = parts;
  const n = idx + 1;
  return {
    id: `${slug}-${NN(n)}`,
    code,
    name,
    imageKey: `${camelSlug}${NN(n)}`,
    shortDescription,
    altText,
    imageFile,
    sortOrder: n,
  };
});

/* ================================================================= images */

const outDir = DRY ? path.join(dir, '.preview') : path.join(ROOT, 'public', 'images');
fs.mkdirSync(outDir, { recursive: true });

for (const p of products) {
  const src = path.join(dir, p.imageFile);
  if (!fs.existsSync(src)) fail(`找不到产品图: ${src}`);
  const out = path.join(outDir, `${slug}-${NN(p.sortOrder)}.webp`);

  let meta;
  try {
    meta = await sharp(src).metadata();
  } catch (e) {
    fail(`图片打不开 ${p.imageFile}: ${e.message}`);
  }
  if ((meta.width || 0) < 1000 || (meta.height || 0) < 1250) {
    console.warn(
      `  ⚠ ${p.imageFile} 为 ${meta.width}×${meta.height}，小于 1000×1250，放大后可能偏糊。`
    );
  }

  await sharp(src)
    .rotate()
    .resize(1000, 1250, { fit: 'cover', position: 'centre' })
    .webp({ quality: 78 })
    .toFile(out);
  p.outputFile = `${slug}-${NN(p.sortOrder)}.webp`;
  console.log(`  ✓ 图 ${p.imageFile} → ${path.relative(ROOT, out)}`);
}

/* ======================================================= collection data file */

const collectionJs = `/**
 * SOURDEN — PRODUCT COLLECTION: ${data.categoryName.toUpperCase()}
 * AUTO-GENERATED by scripts/add-collection.mjs from incoming/${slug}/collection.md.
 * Do not hand-edit — re-run the script to regenerate. The shape is documented
 * in src/data/product-collections.js.
 */
import { primaryCta } from './cta.js';
import { services } from './services.js';
import { industries } from './industries.js';

const serviceHref = (slug) => services.find((s) => s.slug === slug)?.href ?? '/services';
const industryHref = (slug) => industries.find((i) => i.slug === slug)?.href ?? '/industries';

export const ${camelSlug} = {
${JSON.stringify(
  {
    slug,
    industrySlug: data.industrySlug,
    categoryName: data.categoryName,
    seoTitle: data.seoTitle,
    metaDescription: data.metaDescription,
    cardDescription: data.cardDescription,
    eyebrow: data.eyebrow,
    h1: data.h1,
    introduction: { paragraphs: data.paragraph },
    catalogNotice: data.catalogNotice,
    catalog: { eyebrow: data.catalogEyebrow, title: data.catalogTitle },
    products: products.map(({ id, code, name, imageKey, shortDescription, altText, sortOrder }) => ({
      id,
      code,
      name,
      imageKey,
      shortDescription,
      altText,
      sortOrder,
    })),
  },
  null,
  2
)
  .slice(1, -1)
  .trimEnd()},

  cta: { label: ${JSON.stringify(data.ctaLabel)}, href: primaryCta.href },

  relatedLinks: [
    { label: ${JSON.stringify(industry.title)}, href: industryHref(${JSON.stringify(data.industrySlug)}) },
    { label: 'Product Sourcing', href: serviceHref('product-sourcing') },
    { label: 'Quality Control', href: serviceHref('quality-control') },
    { label: 'Shipping from China', href: serviceHref('shipping-from-china') },
  ],
};
`;

const collectionJsPath = DRY
  ? path.join(outDir, `collection-${slug}.js`)
  : path.join(ROOT, 'src', 'data', `collection-${slug}.js`);
fs.writeFileSync(collectionJsPath, collectionJs);
console.log(`  ✓ 数据文件 → ${path.relative(ROOT, collectionJsPath)}`);

/* ================================================ media.js slot registration */

const slotBlock =
  `  /* ${data.categoryName} product slots (added by add-collection.mjs) */\n` +
  products
    .map(
      (p) =>
        `  ${p.imageKey}: {
    file: '${p.outputFile}', width: 1000, height: 1250, ratio: '4:5',
    label: '${data.categoryName.toUpperCase()} ${NN(p.sortOrder)}',
    alt: ${JSON.stringify(p.altText)},
    role: /** @type {ImageRole} */ ('product'),
    placeholder: false,
    artDirection: 'One product photo from the ${data.categoryName} category, subject complete and centred. Provided by the owner (self-uploaded). Not AI-generated.',
  },`
    )
    .join('\n');

const mediaPath = path.join(ROOT, 'src', 'data', 'media.js');
const socialMarker = '  /* -------------------------------------------------------------- social -- */';
let media = fs.readFileSync(mediaPath, 'utf8');
if (!media.includes(socialMarker)) fail('media.js 找不到 social 标记，无法定位插入点');
if (media.includes(`${camelSlug}01:`)) fail(`media.js 已有 "${camelSlug}01" 槽，slug 可能重复`);

const mediaInsertion = `${slotBlock}\n\n${socialMarker}`;

const regPath = path.join(ROOT, 'src', 'data', 'product-collections.js');
const importMarker = `import { soccerJerseys } from './collection-soccer-jerseys.js';`;
const registryMarker = `'soccer-jerseys': soccerJerseys,`;
let reg = fs.readFileSync(regPath, 'utf8');
if (!reg.includes(importMarker) || !reg.includes(registryMarker)) {
  fail('product-collections.js 找不到 soccer-jerseys 锚点');
}
if (reg.includes(`'${slug}':`)) fail(`注册表已有 "${slug}"`);

const importInsertion = `${importMarker}\nimport { ${camelSlug} } from './collection-${slug}.js';`;
const registryInsertion = `${registryMarker}\n  '${slug}': ${camelSlug},`;

if (DRY) {
  console.log('\n── dry-run：以下插入未写入，供核对 ──\n');
  console.log('【media.js】在 social 标记前插入:\n' + slotBlock + '\n');
  console.log('【product-collections.js】import:\n' + importInsertion + '\n');
  console.log('【product-collections.js】注册:\n  ' + registryInsertion + '\n');
  console.log(
    '[add-collection] dry-run 完成，未写入正式文件。确认无误后，去掉 --dry-run 重跑即可正式生成。\n'
  );
} else {
  fs.writeFileSync(mediaPath, media.replace(socialMarker, mediaInsertion));
  console.log('  ✓ media.js 已登记 ' + products.length + ' 个图槽');
  fs.writeFileSync(regPath, reg.replace(importMarker, importInsertion).replace(registryMarker, registryInsertion));
  console.log('  ✓ product-collections.js 已注册 "' + slug + '"');

  console.log('\n[add-collection] 正式生成完成。\n');
  console.log('【下一步】本地验证：CODEBUDDY_SAFE_DELETE_ENABLED=0 npm run verify\n');
  console.log('【要上传到 GitHub 的文件】\n');
  console.log('  新增（每个都要传）：');
  console.log('    src/data/collection-' + slug + '.js');
  for (const p of products) console.log('    public/images/' + p.outputFile);
  console.log('  修改（传新版覆盖）：');
  console.log('    src/data/media.js');
  console.log('    src/data/product-collections.js');
  console.log('\n  不要上传：');
  console.log('    public/images/' + slug + '-*@*.webp  ← 响应式变体，Cloudflare 构建时自动生成');
  console.log('    incoming/' + slug + '/             ← 你的原始图和填好的表（本地原料）');
  console.log('    dist/ 、 .srcset-manifest.json');
  console.log('');
}
