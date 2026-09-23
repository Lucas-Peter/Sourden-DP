/**
 * SOURDEN — SERVICE DETAIL PAGES: SHARED ARCHITECTURE
 * ---------------------------------------------------------------------------
 * The five `/services/<slug>` pages are one page architecture with five sets of
 * copy. This file owns which pages exist; each page's words live in its own
 * `service-<slug>.js` file, and everything derived from the service registry
 * lives in `service-links.js`.
 *
 * WHY ONE ARCHITECTURE
 *   The brief for these pages is explicit: they must feel like one website, not
 *   five independently designed landing pages. So the section vocabulary below
 *   is fixed, and a page is a list of sections in order. Adding a page was a
 *   data file plus one line in `detailPages` — no new markup, no new CSS.
 *
 * ── THE SECTION VOCABULARY ─────────────────────────────────────────────────
 *   hero        eyebrow, H1, lead, two actions, one documentary image
 *   prose       a heading and one or two paragraphs (optional emphasis line)
 *   reviewGrid  N named factors, each with a sentence — the "what we look at"
 *               shape (4–8 items, two columns at desktop)
 *   checkList   N short items, no descriptions — the "what we can source" /
 *               "what you need to provide" / "shipping cost factors" shape
 *   process     five numbered stages on the rail (label + sentence)
 *   split       two labelled columns, each with a note, a paragraph, a bullet
 *               list or a link — the comparison / can-and-cannot shape
 *   chain       the five services in process order, the current one marked
 *   faq         the disclosure group
 *   cta         the closing band (top level, see below)
 *
 * Each section is `{ type, tone, … }`. `tone` is required on every section this
 * file does not fix: `'ivory' | 'white' | 'ink'`. The hero is always ivory, the
 * process band is always ink and the FAQ is always ivory, because those three
 * devices own their own ground; everything else states its tone so the page's
 * rhythm is visible in the data rather than buried in a stylesheet.
 *
 * ── WHAT A PAGE FILE MUST NOT DECLARE ─────────────────────────────────────
 *   · Service names, numbers or URLs — read from `services.js`.
 *   · The primary CTA. Every page's primary action is `primaryCta` from
 *     `site.js` (cross-page requirement §2: "Start a Sourcing Request →" is the
 *     one primary CTA site-wide). Declaring it per page is how five pages end
 *     up with four different labels.
 *   · The secondary CTA ("View All Services →" → `/services`) — same for all
 *     five, so it is declared once in `service-links.js`.
 *   · The process chain's labels — declared once in `service-links.js`.
 *   · A hand-typed label for a NEIGHBOURING service — ask
 *     `serviceLink(slug)` / `chainLabel(slug)` instead.
 *
 * ── CLAIMS RULE (cross-page requirement §4) ────────────────────────────────
 * Nothing in a page file may assert a client count, a supplier count, years in
 * business, a success rate, an inspection statistic, a testimonial, a
 * certification, a case study, a logo or an award — and no page may promise
 * guaranteed quality, risk-free sourcing, 100% reliable suppliers, the cheapest
 * supplier, guaranteed customs clearance, guaranteed delivery, zero risk or
 * defect-free products. The tone is experienced, practical, calm, direct.
 *
 * ── WHERE A SLUG IS NOT FOUND ──────────────────────────────────────────────
 * A slug with no page file would still render its reservation page — the routes
 * were published before the content existed and every link to them is live. A
 * slug *typo* inside a page file throws at build time instead of rendering a
 * section with `undefined` in it. As of the five-page brief all five slugs have
 * a page file, so this now only guards a future sixth service.
 * ---------------------------------------------------------------------------
 */

import { productSourcing } from './service-product-sourcing.js';
import { supplierVerification } from './service-supplier-verification.js';
import { purchasingOrderManagement } from './service-purchasing-order-management.js';
import { qualityControl } from './service-quality-control.js';
import { shippingFromChina } from './service-shipping-from-china.js';

/* ===========================================================================
   RE-EXPORTED so a page shell has one import.
   Defined in `service-links.js` because page files need them too, and a page
   file importing them from here would close an import cycle — see the header
   of that file for what that costs.
   =========================================================================== */

export {
  chainFor,
  chainLabel,
  detailBreadcrumbs,
  primaryCta,
  secondaryCta,
  serviceChain,
  serviceForSlug,
  serviceLink,
  requireService,
} from './service-links.js';

/* ===========================================================================
   THE REGISTRY
   ---------------------------------------------------------------------------
   One line per built page, in process order. Every slug here is subtracted
   from the noindex list by `src/data/routes.js`, which is what moves its route
   into sitemap.xml — publishing a page is adding a line, not editing two
   files.
   =========================================================================== */

export const detailPages = {
  'product-sourcing': productSourcing,
  'supplier-verification': supplierVerification,
  'purchasing-order-management': purchasingOrderManagement,
  'quality-control': qualityControl,
  'shipping-from-china': shippingFromChina,
};

/** @param {string} slug */
export function detailPageFor(slug) {
  return detailPages[slug] ?? null;
}

/** Slugs whose detail page has been written. */
export const builtDetailSlugs = Object.keys(detailPages);

/**
 * Root-relative paths of the built detail pages.
 * `src/data/routes.js` subtracts these from the noindex list, which is what
 * moves them into sitemap.xml.
 */
export const builtDetailPaths = builtDetailSlugs.map((slug) => `/services/${slug}`);
