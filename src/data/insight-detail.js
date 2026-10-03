/**
 * SOURDEN — INSIGHT ARTICLE PAGES: SHARED ARCHITECTURE
 * ---------------------------------------------------------------------------
 * The twelve `/insights/<slug>` routes share one page architecture. This file
 * owns WHICH articles have a written body; each article's words live in its own
 * `insight-<slug>.js` file.
 *
 * ── WHY THIS IS A SEPARATE FILE FROM `insights-articles.js` ────────────────
 * `insights-articles.js` is the HUB's registry: it is what the directory renders
 * its cards from, and what `routes.js` builds the twelve reserved routes from.
 * It says nothing about whether an article's body has been written — all twelve
 * are reservation shells by default, which is what the hub brief (§13) asked
 * for.
 *
 * This registry is that second fact, kept separate for the same reason
 * `industry-detail.js` is separate from `industries.js`: `/insights` must keep
 * rendering twelve cards whether or not any of them has a body, and a hub that
 * imported the article bodies would ship all of that prose in the directory's
 * own bundle.
 *
 * ── PUBLISHING AN ARTICLE IS ONE LINE ──────────────────────────────────────
 * Add the slug here, and three things move together because all three ask this
 * one record:
 *   · `src/pages/insights/[slug].astro` renders `InsightArticlePage` instead of
 *     the reservation shell — the branch asks `insightPageFor()`;
 *   · `builtInsightPaths` below subtracts the path from `detailRoutePaths` in
 *     `routes.js`, so it leaves `noindexPaths` and re-enters sitemap.xml;
 *   · the page itself becomes indexable, because the sitemap filter and the
 *     page's `<meta name="robots">` both derive from that same subtraction.
 *
 * ⚠ THIS IS THE SUBTRACTION THAT DID NOT EXIST FOR INSIGHTS UNTIL NOW, and
 * forgetting it is the one failure nothing catches. A written, linked, complete
 * article that never reaches search is silent: `npm run audit` fails only when
 * the two signals CONTRADICT ("noindex but in the sitemap"), and a page that is
 * noindex AND unlisted is a perfectly consistent pair. The same warning is
 * recorded in `industry-detail.js` and in `routes.js`.
 *
 * ── WHAT A BODY FILE MUST NOT DECLARE ──────────────────────────────────────
 *   · Its title, listing sentence or category — the shell reads all three from
 *     `insights-articles.js`, which is also what the hub's card renders.
 *   · Any href to another page — `primaryCta` from `site.js`,
 *     `serviceLink()` from `service-links.js`, `articleHref()` from
 *     `insights-articles.js`. Article 01's body does exactly this; see its
 *     header.
 *   · The primary CTA. Every page's primary action is `primaryCta` from
 *     `site.js` — "Start a Sourcing Request" is the one primary action
 *     site-wide.
 * ---------------------------------------------------------------------------
 */

import { insightArticles } from './insights-articles.js';

/* The body of article 01. Renamed on import so the registry's value reads as
   the article rather than as a generic `page`. */
import { page as howToFindReliableSuppliersInChina } from './insight-how-to-find-reliable-suppliers-in-china.js';

/* The body of article 02 — same shape, its own words. */
import { page as howToVerifyAChineseSupplierBeforeYouOrder } from './insight-how-to-verify-a-chinese-supplier-before-you-order.js';

/* The body of article 03 — same shape, its own words. */
import { page as chinaSupplierVsTradingCompany } from './insight-china-supplier-vs-trading-company.js';

/**
 * One line per written article, keyed by the slug used in `insights-articles.js`.
 *
 * A slug here must ALSO exist there: `insightPageFor()` is only ever asked
 * about slugs the hub knows, so a typo here is a body that never renders rather
 * than a route that fails — which is why every key is checked against the
 * article registry at build time below.
 */
export const insightDetailPages = {
  'how-to-find-reliable-suppliers-in-china': howToFindReliableSuppliersInChina,
  'how-to-verify-a-chinese-supplier-before-you-order': howToVerifyAChineseSupplierBeforeYouOrder,
  'china-supplier-vs-trading-company': chinaSupplierVsTradingCompany,
};

/* ---------------------------------------------------------------------------
   EVERY KEY HERE MUST ALSO BE AN ARTICLE THE HUB KNOWS
   ---------------------------------------------------------------------------
   `insightPageFor()` is only ever asked about slugs that came from
   `insightArticles`, so a key typed wrong in this file does not produce a bad
   route — it produces a body that is never rendered, while the article quietly
   stays a reservation shell. The route still resolves and every link to it
   works, so nothing surfaces the mistake.
   =========================================================================== */

const knownSlugs = new Set(insightArticles.map((article) => article.slug));

for (const slug of Object.keys(insightDetailPages)) {
  if (!knownSlugs.has(slug)) {
    throw new Error(
      `[insight-detail.js] "${slug}" has a written body but is not registered in ` +
        `insightArticles. Add it there first — the hub's directory and the route ` +
        `registry both read that file, and a body keyed to an unlisted slug never renders.`
    );
  }
}

/** @param {string} slug */
export function insightPageFor(slug) {
  return insightDetailPages[slug] ?? null;
}

/** Slugs whose article body has been written. */
const builtInsightSlugs = Object.keys(insightDetailPages);

/**
 * Root-relative paths of the written articles.
 *
 * `src/data/routes.js` subtracts these from the noindex list, which is what
 * moves them into sitemap.xml — the one line that publishes an article.
 */
export const builtInsightPaths = builtInsightSlugs.map((slug) => `/insights/${slug}`);
