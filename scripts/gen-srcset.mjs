/**
 * SOURDEN — build-time responsive image variant generator
 * ---------------------------------------------------------------------------
 * Runs as an npm `prebuild` (and `predev`) step, so Cloudflare generates the
 * variants at build time from the committed originals. The variants are NEVER
 * committed to the repo.
 *
 * For every source WebP in `public/images/` (except `og-default.png` and any
 * already-suffixed `@Nw.webp` variant) it emits width-bounded variants at
 * [640, 960, 1280, 1600] that are strictly smaller than the source width. Page
 * components pair the resulting `<img srcset>` with a `sizes` attribute so a
 * phone downloads a ~25 KB file instead of the ~100 KB desktop original.
 *
 * Output filename:  `<basename>@<width>w.webp`   e.g. `hero-sourcing@640w.webp`
 *
 * The variant WIDTH list MUST stay in sync with `VARIANT_WIDTHS` in
 * `src/data/media.js` (`srcsetFor`) — that helper derives the `srcset` string
 * from the same list without reading the filesystem.
 *
 * Determinism: same input + same sharp/libvips → byte-identical output, so
 * re-running is safe. Idempotent: overwrites in place.
 */
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const IMAGES_DIR = path.resolve(__dirname, '../public/images');
const WIDTHS = [640, 960, 1280, 1600];
const SKIP = new Set(['og-default.png']);

const isVariant = (file) => /@\d+w\.webp$/.test(file);

async function main() {
  if (!fs.existsSync(IMAGES_DIR)) {
    console.error('[gen-srcset] public/images not found — run from project root');
    process.exit(1);
  }

  const sources = fs
    .readdirSync(IMAGES_DIR)
    .filter((f) => f.endsWith('.webp') && !SKIP.has(f) && !isVariant(f));

  /** file → { widths: number[] (variants actually written), intrinsic: number }
   *  Consumed by `srcsetFor` in src/data/media.js so the srcset it emits can
   *  never point at a variant that does not exist — even when a slot's declared
   *  `width` in media.js has drifted from the real file. */
  const manifest = {};
  let written = 0;
  for (const file of sources) {
    const srcPath = path.join(IMAGES_DIR, file);
    const base = file.replace(/\.webp$/, '');

    let srcW;
    try {
      ({ width: srcW } = await sharp(srcPath).metadata());
    } catch (e) {
      console.error(`[gen-srcset] skip ${file}: ${e.message}`);
      continue;
    }
    if (!srcW) continue;

    const variantWidths = WIDTHS.filter((target) => target < srcW);
    for (const w of variantWidths) {
      const out = path.join(IMAGES_DIR, `${base}@${w}w.webp`);
      await sharp(srcPath)
        .resize({ width: w, withoutEnlargement: true })
        .webp({ quality: 75 })
        .toFile(out);
      written += 1;
    }
    manifest[file] = { widths: variantWidths, intrinsic: srcW };
  }

  const manifestPath = path.resolve(process.cwd(), '.srcset-manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest));
  console.log(
    `[gen-srcset] wrote ${written} responsive variant(s) from ${sources.length} source image(s)`
  );
}

main().catch((e) => {
  console.error('[gen-srcset] failed:', e);
  process.exit(1);
});
