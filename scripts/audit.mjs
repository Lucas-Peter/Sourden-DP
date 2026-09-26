/**
 * SOURDEN — post-build audit
 * ---------------------------------------------------------------------------
 * Run with:  npm run audit   (after `npm run build`)
 *
 * Verifies the parts of the spec §43 quality checklist that can be checked
 * mechanically, against the ACTUAL build output rather than the source. Run it
 * before every push; a failing check means do not deploy.
 *
 * What it checks
 *   1. Every internal link and asset reference resolves to a real file.
 *   2. Every page has exactly one <h1> and no skipped heading levels.
 *   3. Every page has a title, a meta description, a canonical URL and an
 *      Open Graph image.
 *   4. No page accidentally exposes a `noindex` page as indexable, and no
 *      page in the sitemap is marked noindex (contradictory signals).
 *   5. Every image declares width and height (layout-shift protection).
 *   6. No inline `style="` attributes and no render-blocking third-party
 *      requests.
 * ---------------------------------------------------------------------------
 */

import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');

const errors = [];
const warnings = [];
const notes = [];

const fail = (page, message) => errors.push(`${page}  ${message}`);
const warn = (page, message) => warnings.push(`${page}  ${message}`);

/* ------------------------------------------------------------------ helpers */

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

/** Map a root-relative URL onto the file Astro/Cloudflare would serve. */
function resolveUrl(url) {
  const clean = url.split('#')[0].split('?')[0];
  if (!clean.startsWith('/')) return null;

  const candidates = [
    join(DIST, clean),
    join(DIST, `${clean}.html`),
    join(DIST, clean, 'index.html'),
  ];

  return candidates.find((c) => existsSync(c) && statSync(c).isFile()) || null;
}

/* -------------------------------------------------------------------- start */

if (!existsSync(DIST)) {
  console.error('\n  dist/ not found — run `npm run build` first.\n');
  process.exit(1);
}

const htmlFiles = walk(DIST).filter((f) => f.endsWith('.html'));
const sitemapXml = existsSync(join(DIST, 'sitemap-0.xml'))
  ? readFileSync(join(DIST, 'sitemap-0.xml'), 'utf8')
  : '';

const sitemapPaths = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) =>
  new URL(m[1]).pathname.replace(/\/$/, '') || '/'
);

if (htmlFiles.length === 0) {
  console.error('\n  No HTML output found in dist/.\n');
  process.exit(1);
}

let linkCount = 0;
let assetCount = 0;

for (const file of htmlFiles) {
  const page = relative(DIST, file).replace(/\\/g, '/');
  const html = readFileSync(file, 'utf8');

  const is404 = page === '404.html';
  const noindex = /<meta name="robots" content="noindex/.test(html);
  const path = '/' + page.replace(/index\.html$/, '').replace(/\.html$/, '');

  /* --- 1. links ----------------------------------------------------------- */

  const hrefs = [...html.matchAll(/\shref="([^"]+)"/g)].map((m) => m[1]);
  for (const href of hrefs) {
    if (/^(https?:|mailto:|tel:|#|data:)/.test(href)) continue;
    linkCount += 1;
    if (!resolveUrl(href)) fail(page, `broken internal link → ${href}`);
  }

  /* --- 1b. assets --------------------------------------------------------- */

  const srcs = [...html.matchAll(/\s(?:src|srcset)="([^"]+)"/g)].flatMap((m) =>
    m[1]
      .split(',')
      .map((part) => part.trim().split(/\s+/)[0])
  );

  for (const src of srcs) {
    if (!src || /^(https?:|data:)/.test(src)) continue;
    assetCount += 1;
    if (!resolveUrl(src)) fail(page, `missing asset → ${src}`);
  }

  /* --- 2. headings -------------------------------------------------------- */

  const headings = [...html.matchAll(/<h([1-6])[^>]*>/g)].map((m) => Number(m[1]));
  const h1Count = headings.filter((h) => h === 1).length;

  if (!is404 && h1Count !== 1) {
    fail(page, `expected exactly one <h1>, found ${h1Count}`);
  }

  if (headings.length > 0 && headings[0] !== 1) {
    fail(page, `<h1> is not the first heading (starts at h${headings[0]})`);
  }

  let previous = 0;
  for (const level of headings) {
    if (previous && level > previous + 1) {
      fail(page, `heading level skipped: h${previous} → h${level}`);
      break;
    }
    previous = level;
  }

  /* --- 3. head metadata --------------------------------------------------- */

  if (!/<title>[^<]+<\/title>/.test(html)) fail(page, 'missing <title>');
  if (!/<meta name="description" content="[^"]+"/.test(html)) {
    fail(page, 'missing meta description');
  }
  if (!/<link rel="canonical" href="[^"]+"/.test(html)) fail(page, 'missing canonical');
  if (!/<meta property="og:image" content="[^"]+"/.test(html)) fail(page, 'missing og:image');
  if (!/<script type="application\/ld\+json">/.test(html)) fail(page, 'missing JSON-LD');
  if (!/<html lang="/.test(html)) fail(page, 'missing <html lang>');
  if (/<img (?![^>]*\salt=)[^>]*>/.test(html)) fail(page, 'an <img> is missing alt text');

  /* --- 4. indexability consistency ---------------------------------------- */

  if (path === '/404') {
    if (!noindex) fail(page, '404 page must be noindex');
  } else {
    const inSitemap = sitemapPaths.includes(path);
    if (noindex && inSitemap) {
      fail(page, 'marked noindex but listed in sitemap — contradictory signals');
    }
    if (!noindex && !inSitemap) {
      warn(page, 'indexable but absent from sitemap.xml');
    }
  }

  /* --- 5. image dimensions ------------------------------------------------ */

  for (const match of html.matchAll(/<img\b[^>]*>/g)) {
    const tag = match[0];
    if (!/\swidth="/.test(tag) || !/\sheight="/.test(tag)) {
      fail(page, `image without width/height → ${tag.slice(0, 90)}…`);
    }
    if (!/alt="/.test(tag)) fail(page, 'image without alt');
  }

  /* --- 6. hygiene --------------------------------------------------------- */

  if (/\sstyle="/.test(html)) fail(page, 'contains an inline style="" attribute');

  for (const thirdParty of [/fonts\.googleapis\.com/, /fonts\.gstatic\.com/, /cdn\.jsdelivr/, /unpkg\.com/]) {
    if (thirdParty.test(html)) {
      fail(page, `third-party render-blocking request → ${thirdParty}`);
    }
  }

  /* --- progressive enhancement contract ---------------------------------- */

  if (/data-reveal/.test(html) && !/js-reveal/.test(html)) {
    fail(page, 'uses data-reveal but the js-reveal flag script is absent — content could stay hidden');
  }
}

/* ------------------------------------------------------- CSS integrity ---- */

/**
 * A `var(--token)` with no fallback and no definition resolves to nothing: the
 * whole declaration is dropped and the element silently inherits. That class of
 * bug is invisible in the source and obvious in the browser, so it is checked
 * here rather than left to manual review.
 *
 * `var(--token, fallback)` is exempt on purpose — that is the documented way to
 * express an optional value (e.g. `var(--hero-text-span, 7)`).
 */
const cssFiles = walk(DIST).filter((f) => f.endsWith('.css'));
const allCss = cssFiles.map((f) => readFileSync(f, 'utf8')).join('\n');

const definedTokens = new Set([...allCss.matchAll(/(--[a-z0-9-]+)\s*:/gi)].map((m) => m[1]));
const requiredTokens = new Set([...allCss.matchAll(/var\((--[a-z0-9-]+)\s*\)/gi)].map((m) => m[1]));

const missingTokens = [...requiredTokens].filter((token) => !definedTokens.has(token));

if (missingTokens.length > 0) {
  fail('(global css)', `undefined custom properties used without a fallback → ${missingTokens.join(', ')}`);
}

/* ------------------------------------------------- CSS output compatibility */

/**
 * Media Queries Level 4 range syntax (`@media (width>=768px)`) is the default
 * output of the CSS minifier but only exists in Chrome 104+ / Firefox 102+ /
 * Safari 16.4+. Older engines do not partially apply such a query — they drop
 * the ENTIRE block. One regression here silently collapses the whole
 * responsive layout on Safari 15/16.0-16.3 with no error surfaced anywhere, so
 * it is asserted on every build.
 *
 * The guard lives in `astro.config.mjs` → `vite.build.cssTarget`. If this check
 * fails, that setting has been lost or overridden — do not "fix" it by editing
 * the compiled CSS.
 */
const rangeSyntax = [...allCss.matchAll(/@media[^{]*\(\s*(?:width|height)\s*(>=|<=|>|<)\s*[\d.]+(?:px|em|rem)/g)];

if (rangeSyntax.length > 0) {
  fail(
    '(global css)',
    `${rangeSyntax.length} media quer${rangeSyntax.length === 1 ? 'y' : 'ies'} use Level 4 range syntax ` +
      `(e.g. "${rangeSyntax[0][0].trim()}") — these are DROPPED by Safari < 16.4, collapsing the ` +
      `responsive layout. Check \`vite.build.cssTarget\` in astro.config.mjs.`
  );
}

// Reported for visibility: the number of classic min-/max-width breakpoints
// still present in the output. A sudden drop to zero means the browser floor
// was lost somewhere upstream.
const classicBreakpoints = (allCss.match(/@media[^{]*(?:min|max)-width\s*:/g) || []).length;

/* ------------------------------------------------------- CSS layer safety  */

/**
 * The site splits styling into a SHARED CORE (`index.css` — tokens, base,
 * layout, components, plus the site chrome that every page renders) and one
 * stylesheet per page type (`home.css`, `inner-pages.css`).
 *
 * The trap: Astro guarantees import order for the HOMEPAGE, but the CSS chunk
 * order it emits for a page that renders its layout through a wrapper
 * component (`ReservationPage`) is not guaranteed — `inner-pages.css` is linked
 * BEFORE the shared core. If a page stylesheet redefined a core class, whether
 * the override applied would depend on that chunking, i.e. it would work
 * locally and break in production, or vice versa.
 *
 * So the rule is enforced rather than trusted: a page stylesheet may only
 * define selectors the core does not. Need a different look for a core
 * component on one page? Add a modifier class (`.btn--ghost`, `.hero__cta`),
 * or — if the rule is genuinely shared — move it into `components.css`.
 *
 * This reads the SOURCE stylesheets, not `dist/`, because by build time the
 * origin of a conflicting rule is no longer recoverable.
 */
const STYLE_DIR = join(ROOT, 'src', 'styles');
const CORE_SHEETS = ['base.css', 'layout.css', 'components.css'];
const PAGE_SHEETS = [
  'home.css',
  'inner-pages.css',
  'sourcing-request.css',
  'services-shared.css',
  'services.css',
  'service-detail.css',
  'industries.css',
];

/** Rough selector extraction — comments stripped, at-rules skipped, lists split. */
function extractSelectors(css) {
  const stripped = css.replace(/\/\*[\s\S]*?\*\//g, '');
  const out = new Set();
  for (const match of stripped.matchAll(/([^{}]+)\{/g)) {
    const selector = match[1].trim();
    if (!selector || selector.startsWith('@') || selector.startsWith(':root')) continue;
    for (const part of selector.split(',')) {
      const trimmed = part.trim();
      if (trimmed && !trimmed.startsWith('from') && !trimmed.startsWith('to')) out.add(trimmed);
    }
  }
  return out;
}

if (existsSync(STYLE_DIR)) {
  const coreSelectors = new Set();
  for (const sheet of CORE_SHEETS) {
    const path = join(STYLE_DIR, sheet);
    if (!existsSync(path)) continue;
    for (const selector of extractSelectors(readFileSync(path, 'utf8'))) coreSelectors.add(selector);
  }

  for (const sheet of PAGE_SHEETS) {
    const path = join(STYLE_DIR, sheet);
    if (!existsSync(path)) continue;
    const collisions = [...extractSelectors(readFileSync(path, 'utf8'))].filter((s) =>
      coreSelectors.has(s)
    );
    if (collisions.length > 0) {
      fail(
        `styles/${sheet}`,
        `${collisions.length} selector(s) also defined in the shared core — the winning rule would ` +
          `depend on CSS chunk order, which Astro does not guarantee. Use a modifier class or move the ` +
          `rule into components.css → ${collisions.slice(0, 6).join(', ')}`
      );
    }
  }
}

/**
 * Stylesheet link order.
 *
 * The shared core must be linked BEFORE any page stylesheet. Astro does not
 * derive this from the source alone: `cssOrder()` in Astro's build runtime
 * sorts the shared CSS chunk last, so a page stylesheet pulled in at a
 * shallower import depth than the layout silently loses every same-specificity
 * conflict. That is not hypothetical — it was the mechanism behind a header CTA
 * that stayed visible on mobile and a footer that rendered unstyled off the
 * homepage.
 *
 * Getting it right means: import the LAYOUT first, then the page stylesheet —
 * either in the page itself (`index.astro`, `404.astro`) or in the shell
 * component the page renders (`ReservationPage.astro`). This check is what
 * keeps that from regressing.
 */
let outOfOrderPages = [];
for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const links = [...html.matchAll(/<link rel="stylesheet" href="([^"]+)"/g)].map((m) => m[1]);
  if (links.length < 2) continue;
  const coreIndex = links.findIndex((href) => /BaseLayout[.-]/.test(href));
  if (coreIndex > 0) outOfOrderPages.push(relative(DIST, file).replace(/\\/g, '/'));
}

if (outOfOrderPages.length > 0) {
  fail(
    '(stylesheet order)',
    `${outOfOrderPages.length} page(s) link a page stylesheet before the shared core, so page rules ` +
      `silently lose same-specificity conflicts. Import the layout before the page stylesheet. → ` +
      outOfOrderPages.slice(0, 5).join(', ') +
      (outOfOrderPages.length > 5 ? ` (+${outOfOrderPages.length - 5} more)` : '')
  );
}

/* ------------------------------------------------- Cloudflare deploy config */

/**
 * The deploy configuration is part of the build contract, so it is asserted
 * here rather than left to the first failed deploy in CI.
 *
 * The failure this guards against is specific and was observed for real:
 * the project is a Cloudflare WORKER WITH STATIC ASSETS, but `wrangler.toml`
 * was written for Pages (`pages_build_output_dir = "dist"`). Workers Builds
 * runs `wrangler deploy`, which does not know that key — it finds neither a
 * script entry point nor an assets directory and aborts the whole build with
 * "If there is code to deploy, you can either: Specify an entry-point …".
 * The local `npm run verify` passed the entire time, because nothing local
 * reads this file.
 */
const WRANGLER = join(ROOT, 'wrangler.toml');

/** Minimal TOML reader — enough for flat keys and single-level [tables]. */
function parseWrangler(text) {
  const top = {};
  const tables = {};
  let current = null;

  for (const raw of text.split(/\r?\n/)) {
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;

    const header = line.match(/^\[([^\]]+)\]$/);
    if (header) {
      current = header[1].trim();
      tables[current] ??= {};
      continue;
    }

    const pair = line.match(/^([A-Za-z0-9_.-]+)\s*=\s*(.+)$/);
    if (!pair) continue;

    const value = pair[2].trim().replace(/^["']|["']$/g, '');
    if (current) tables[current][pair[1]] = value;
    else top[pair[1]] = value;
  }

  return { top, tables };
}

let deployName = '—';
let deployHandler = '—';

if (!existsSync(WRANGLER)) {
  fail('wrangler.toml', 'missing — Cloudflare has nothing to deploy');
} else {
  const raw = readFileSync(WRANGLER, 'utf8');
  const { top, tables } = parseWrangler(raw);
  const assets = tables.assets ?? {};

  /**
   * Key lookups go against the RAW text, not the parsed result.
   *
   * Reason: TOML scopes every key that follows a `[table]` header into that
   * table, so a misplaced top-level key would land in `tables.assets` and a
   * parsed-only check would miss it. (Found by fault injection — appending
   * `pages_build_output_dir` to the end of the file slipped past the first
   * version of this guard.) `^\s*key\s*=` cannot match a commented-out
   * example, which is what the RESERVED blocks are made of.
   */
  const hasTopLevelKey = (key) => new RegExp(`^\\s*${key}\\s*=`, 'm').test(raw);

  /* A Pages-only key silently disables the Workers deploy path. */
  if (hasTopLevelKey('pages_build_output_dir')) {
    fail(
      'wrangler.toml',
      'contains `pages_build_output_dir` — that is a Cloudflare PAGES key. Workers Builds runs ' +
        '`wrangler deploy`, which ignores it and then fails with "no entry point, no assets". ' +
        'Use `[assets] directory` instead (see the migration note in the file).'
    );
  }

  if (!top.name) fail('wrangler.toml', 'missing `name` — must match the Cloudflare Worker project');
  else deployName = top.name;

  /* A `main` entry point that does not exist fails the deploy, not the build. */
  if (hasTopLevelKey('main')) {
    const entry = (raw.match(/^\s*main\s*=\s*["']([^"']+)["']/m) || [])[1];
    if (entry && !existsSync(join(ROOT, entry.replace(/^\.\//, '')))) {
      fail('wrangler.toml', `\`main\` points at "${entry}", which does not exist`);
    }
  }

  if (!top.compatibility_date) {
    warn('wrangler.toml', 'missing `compatibility_date` — Cloudflare requires it');
  }

  if (!assets.directory) {
    fail(
      'wrangler.toml',
      'missing `[assets] directory` — without it Cloudflare has no build output to serve'
    );
  } else {
    /* The directory is relative to the config file, so trailing slashes are ok. */
    const assetsDir = join(ROOT, assets.directory.replace(/^\.\//, '').replace(/\/$/, ''));

    if (!existsSync(assetsDir)) {
      fail('wrangler.toml', `assets.directory "${assets.directory}" does not exist after the build`);
    } else {
      /* These three files are what the URL shape and the security headers
         depend on. `_headers` and `_redirects` are copied out of public/ at
         build time; if either is missing, Cloudflare serves the site with no
         security headers and no redirects, silently. */
      for (const required of ['index.html', '_headers', '_redirects']) {
        if (!existsSync(join(assetsDir, required))) {
          fail(
            'wrangler.toml',
            `assets.directory "${assets.directory}" does not contain ${required} — ` +
              (required === 'index.html'
                ? 'the build output looks wrong.'
                : `it should be copied from public/${required}; without it Cloudflare drops ` +
                  `its ${required === '_headers' ? 'security headers' : 'redirect rules'}.`)
          );
        }
      }
      deployHandler = assets.html_handling || 'auto-trailing-slash (default)';
    }
  }

  /* `binding` is only legal next to a Worker script. */
  if ((assets.binding || top.binding) && !hasTopLevelKey('main')) {
    fail(
      'wrangler.toml',
      'sets `assets.binding` without `main` — the binding only exists to let a Worker script read ' +
        'assets, so Cloudflare rejects it on an assets-only Worker.'
    );
  }
}

/* ------------------------------------------------------ GitHub Pages guard */

/**
 * `.nojekyll` is one line of insurance against a confusing failure.
 *
 * The repo is hosted on Cloudflare; GitHub is only the source of truth. But if
 * GitHub Pages is ever switched on for this repository, GitHub runs Jekyll over
 * whatever branch it is pointed at. Astro page files open with `---`, which
 * Jekyll reads as YAML front matter, so it aborts the build with
 *
 *   YAML Exception reading …/BaseLayout.astro: mapping values are not allowed
 *   Invalid YAML front matter in …/src/pages/services/index.astro
 *
 * — a hosting setting masquerading as a code bug, and one that local `verify`
 * could not see before this check existed. An empty `.nojekyll` at the repo
 * root makes Jekyll skip the tree entirely.
 *
 * A warning, not an error: the real fix is to keep Pages OFF, and its absence
 * does not affect the Cloudflare deploy at all.
 */
const noJekyllPresent = existsSync(join(ROOT, '.nojekyll'));

if (!noJekyllPresent) {
  warn(
    '.nojekyll',
    'missing — if GitHub Pages is ever enabled on this repo, GitHub will run Jekyll over the ' +
      '.astro sources and fail with "Invalid YAML front matter". Keep Pages off and add the empty ' +
      'file back. See README → 部署 → 排错：推送后 GitHub 报 "Build with Jekyll" 失败'
  );
}

/* ------------------------------------------------------------------ summary */

notes.push(`HTML pages:        ${htmlFiles.length}`);
notes.push(`internal links:    ${linkCount}`);
notes.push(`asset references:  ${assetCount}`);
notes.push(`css files:         ${cssFiles.length}`);
notes.push(`css tokens:        ${definedTokens.size} defined · ${requiredTokens.size} required`);
notes.push(`css breakpoints:   ${classicBreakpoints} classic min/max-width · range-syntax ${rangeSyntax.length} (must be 0)`);
notes.push(`indexable pages:   ${sitemapPaths.length}`);
notes.push(`sitemap entries:   ${sitemapPaths.map((p) => p).join(', ')}`);
notes.push(`cloudflare:        worker "${deployName}" · html_handling ${deployHandler}`);
notes.push(
  `github pages:      ${noJekyllPresent ? '.nojekyll present → Jekyll disabled (Cloudflare hosts the site)' : 'guard missing'}`
);

console.log('\nSOURDEN — build audit\n');
console.log(notes.join('\n'));

if (warnings.length > 0) {
  console.log(`\n${warnings.length} warning(s):`);
  for (const message of warnings) console.log(`  ⚠  ${message}`);
}

if (errors.length > 0) {
  console.log(`\n${errors.length} error(s):`);
  for (const message of errors) console.log(`  ✗  ${message}`);
  console.log('\n✗ AUDIT FAILED — do not deploy.\n');
  process.exit(1);
}

console.log('\n✓ AUDIT PASSED — all internal links resolve, headings are ordered,');
console.log('  metadata is complete, and indexability signals agree.\n');
