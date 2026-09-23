/**
 * SOURDEN — SERVICE DETAIL PAGES: SHARED ARCHITECTURE
 * ---------------------------------------------------------------------------
 * The five `/services/<slug>` pages are one page architecture with five sets of
 * copy. This file owns everything they have in common; each page's words live
 * in its own `service-<slug>.js` file.
 *
 * WHY ONE ARCHITECTURE
 *   The brief for these pages is explicit: they must feel like one website, not
 *   five independently designed landing pages. So the section vocabulary below
 *   is fixed, and a page is a list of sections in order. Adding page 2 is a data
 *   file plus one line in `detailPages` — no new markup, no new CSS.
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
 *   · Service names, numbers or URLs — read from `services.js` below.
 *   · The primary CTA. Every page's primary action is `primaryCta` from
 *     `site.js` (cross-page requirement §2: "Start a Sourcing Request →" is the
 *     one primary CTA site-wide). Declaring it per page is how five pages end
 *     up with four different labels.
 *   · The secondary CTA ("View All Services →" → `/services`) — same for all
 *     five, so it is declared once here.
 *   · The process chain's labels — declared once in `CHAIN_LABELS` below.
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
 * A slug with no page file still renders its reservation page — the route was
 * published before the content existed and every link to it is already live. A
 * slug *typo* inside a page file throws at build time instead of rendering a
 * section with `undefined` in it.
 * ---------------------------------------------------------------------------
 */

import { primaryCta } from './site.js';
import { services } from './services.js';

import { productSourcing } from './service-product-sourcing.js';

/* ===========================================================================
   FIXED ACROSS ALL FIVE PAGES
   =========================================================================== */

/**
 * Cross-page requirement §2 — the secondary action in every hero.
 * Declared once so the five pages cannot disagree about it.
 */
export const secondaryCta = { label: 'View All Services', href: '/services' };

/**
 * The process chain's vocabulary.
 *
 * This is a THIRD naming of the same five services, and it needs its own
 * declaration for a reason: the brief writes the chain as the short process
 * words (PRODUCT SOURCING → SUPPLIER VERIFICATION → PURCHASING → QUALITY
 * CONTROL → SHIPPING), which are neither the display titles in `services.js`
 * ("Purchasing Management") nor the footer's `shortTitle`. Left to each page,
 * page 1 would say SHIPPING and page 5 could say FREIGHT, in a section whose
 * entire job is to show that these five are one sequence.
 *
 * Keyed by slug, so a service that is renamed in `services.js` keeps its chain
 * label and a renamed slug fails the build rather than silently dropping out of
 * the chain.
 */
const CHAIN_LABELS = {
  'product-sourcing': 'Product Sourcing',
  'supplier-verification': 'Supplier Verification',
  'purchasing-order-management': 'Purchasing',
  'quality-control': 'Quality Control',
  'shipping-from-china': 'Shipping',
};

/* ===========================================================================
   THE REGISTRY
   ---------------------------------------------------------------------------
   One line per built page. A slug absent from here renders its reservation
   page (see `src/pages/services/[slug].astro`).
   =========================================================================== */

export const detailPages = {
  'product-sourcing': productSourcing,
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

/* ===========================================================================
   DERIVED FROM THE SERVICE REGISTRY
   =========================================================================== */

/**
 * Look up a service, or fail the build.
 * @param {string} slug
 */
function requireService(slug) {
  const service = services.find((entry) => entry.slug === slug);
  if (!service) {
    throw new Error(
      `[service-detail.js] No service registered with slug "${slug}". ` +
        `Add it to services.js — a detail page never declares a service name of its own.`
    );
  }
  return service;
}

/**
 * The registry record for a slug: number, title, canonical href and the
 * description the homepage and footer already use.
 *
 * Exported so a page shell can build its `Service` JSON-LD node from the same
 * record the page renders — a structured-data claim can then never describe a
 * service the page does not show.
 *
 * @param {string} slug
 */
export function serviceForSlug(slug) {
  return requireService(slug);
}

/**
 * The five services in process order.
 *
 * The order is not re-declared: `services.js` already lists them 01–05 in the
 * order the process runs (Find → Verify → Purchase → Inspect → Ship), and that
 * order is what the homepage, the footer column and `/services` all render. A
 * second ordering here is exactly how two lists drift.
 */
export const serviceChain = services.map((service) => ({
  number: service.number,
  label: CHAIN_LABELS[service.slug] ?? service.title,
  href: service.href,
}));

/**
 * The chain with one stage marked as the page the visitor is on.
 *
 * The current stage is not a link to itself. It keeps `aria-current="page"` so
 * assistive technology announces "current page" rather than reading it as
 * another destination.
 *
 * @param {string} currentSlug
 */
export function chainFor(currentSlug) {
  requireService(currentSlug);
  return serviceChain.map((stage) => ({
    ...stage,
    current: stage.href === `/services/${currentSlug}`,
  }));
}

/**
 * Breadcrumb trail for a detail page, excluding "Home" (prepended by
 * `<Breadcrumbs>` and by `breadcrumbItems()`), so the visible trail and the
 * JSON-LD BreadcrumbList come from this one array.
 *
 * @param {string} slug
 */
export function detailBreadcrumbs(slug) {
  const service = requireService(slug);
  return [{ label: 'Services', href: '/services' }, { label: service.title }];
}

export { primaryCta };
