// @ts-check
/**
 * SOURDEN — Astro configuration
 * ---------------------------------------------------------------------------
 * Deployment target : Cloudflare Pages (static output) + GitHub
 * Build command     : npm run build
 * Output directory  : dist
 *
 * WHY `format: 'file'` + `trailingSlash: 'never'`
 * The site architecture (spec §33) lists clean, extension-less, slash-less
 * routes such as `/services/product-sourcing`. `format: 'file'` emits
 * `dist/services/product-sourcing.html`, which Cloudflare Pages serves at
 * exactly `/services/product-sourcing`. This keeps the production URL shape
 * identical to the documented route table, with no redirect hop.
 */
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Route registry is pure data (no Vite-only imports), so the build can consume
// it directly. This keeps the sitemap and the pages' `noindex` flag in sync
// from a single source of truth.
import { noindexPaths } from './src/data/routes.js';

/**
 * Canonical origin of the production site.
 * Set PUBLIC_SITE_URL in Cloudflare Pages → Settings → Environment variables.
 * Falls back to the brand domain so local builds stay valid.
 */
const SITE_URL = (process.env.PUBLIC_SITE_URL || 'https://sourden.com').replace(/\/$/, '');

export default defineConfig({
  site: SITE_URL,

  // Static-first output: no server runtime required, deploys as pure assets.
  output: 'static',

  build: {
    format: 'file',
    // Inline the handful of tiny CSS/JS chunks Astro cannot split further,
    // shaving two round-trips off the critical path.
    inlineStylesheets: 'auto',
  },

  trailingSlash: 'never',

  // Compression is handled by Cloudflare at the edge (Brotli). Keeping Astro's
  // own compression off avoids shipping duplicate .gz/.br artefacts into `dist`.
  compressHTML: true,

  integrations: [
    sitemap({
      /**
       * Only genuinely published pages belong in a sitemap. Every route in
       * `noindexPaths` renders a reservation page and carries
       * `<meta name="robots" content="noindex">`; listing them here too would
       * send search engines two contradictory signals.
       *
       * As pages are built for real they leave the registry and re-enter the
       * sitemap automatically.
       */
      filter: (page) => {
        const path = new URL(page).pathname.replace(/\/$/, '') || '/';
        if (path === '/404') return false;
        return !noindexPaths.includes(path);
      },
      changefreq: 'monthly',
      priority: 0.7,
      // Homepage is the single highest-priority URL on the site.
      serialize(item) {
        const path = new URL(item.url).pathname.replace(/\/$/, '') || '/';
        if (path === '/') {
          return { ...item, priority: 1.0, changefreq: 'weekly' };
        }
        return item;
      },
    }),
  ],

  vite: {
    build: {
      // Fonts and placeholder art are served from /public, so keep Vite from
      // inlining them into JS/CSS bundles.
      assetsInlineLimit: 2048,

      /**
       * Browser floor for CSS output — this is the switch that keeps the
       * responsive layout working on older Safari.
       *
       * WHY THIS MATTERS: CSS is minified with Lightning CSS, which rewrites
       * `@media (min-width: 768px)` into the compact Media Queries Level 4
       * range form `@media (width>=768px)`. That syntax only exists in
       * Chrome 104+ / Firefox 102+ / Safari 16.4+, and a browser that does not
       * understand it DROPS THE ENTIRE BLOCK — so on Safari 15 / 16.0-16.3 the
       * whole responsive grid would silently collapse into the mobile
       * single-column stack, with no error anywhere.
       *
       * Declaring `cssTarget` makes Lightning CSS lower that range syntax back
       * to `min-width`, which every browser since IE9 understands. Nothing is
       * lost: the genuinely modern features this site uses (container queries,
       * `text-wrap: pretty`, `:has()`) are all wrapped in `@supports` or are
       * pure enhancements that degrade harmlessly.
       *
       * IMPORTANT — do not move this to `vite.css.lightningcss.targets`.
       * Vite's CSS minifier hard-overrides that field with
       * `convertTargets(build.cssTarget)`, so a value set there is silently
       * discarded. `build.cssTarget` is the only reliable lever.
       */
      cssTarget: ['chrome87', 'edge88', 'firefox78', 'safari14'],
    },
  },
});
