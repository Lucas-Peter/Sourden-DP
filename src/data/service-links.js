/**
 * SOURDEN — SERVICE LINKS & DERIVED LABELS
 * ---------------------------------------------------------------------------
 * Everything a page file may need to REFER TO another service, built from the
 * registry rather than typed. A leaf module: it imports `services.js` and
 * `site.js` and nothing else, and in particular it does NOT import the page
 * files.
 *
 * ── WHY THIS IS A SEPARATE FILE FROM `service-detail.js` ───────────────────
 * `service-detail.js` imports the five page files in order to build
 * `detailPages`. A page file that needs a derived label therefore has to reach
 * back for it — and if that helper lived in `service-detail.js`, the two would
 * import each other. ES modules tolerate the cycle by handing the importer a
 * partially-initialised namespace, but `CHAIN_LABELS` is a `const` declared
 * after the page imports, so a page file calling `chainLabel()` at module top
 * level would hit the temporal dead zone and throw
 * `Cannot access 'CHAIN_LABELS' before initialization` — at build time, with a
 * message that points at the wrong file.
 *
 * Moving the registry-derived helpers down here breaks the cycle: page files
 * import this module, `service-detail.js` re-exports from it, and neither
 * imports the other.
 *
 * ── WHAT BELONGS DOWN HERE ─────────────────────────────────────────────────
 * Anything derived from `services.js` / `site.js` alone. What stays in
 * `service-detail.js` is what needs the page files: `detailPages`,
 * `detailPageFor`, `builtDetailSlugs`, `builtDetailPaths`.
 * ---------------------------------------------------------------------------
 */

import { primaryCta } from './site.js';
import { services } from './services.js';

export { primaryCta };

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

/**
 * Look up a service, or fail the build.
 * @param {string} slug
 */
export function requireService(slug) {
  const service = services.find((entry) => entry.slug === slug);
  if (!service) {
    throw new Error(
      `[service-links.js] No service registered with slug "${slug}". ` +
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
 * The chain word for one service — the uppercase device vocabulary, not the
 * display title.
 *
 * Used where a page has to NAME another service inside its own prose or in a
 * comparison column ("PRODUCT SOURCING" / "SUPPLIER VERIFICATION"). Deriving it
 * here rather than typing it means the same rename that updates the chain rail
 * updates these labels too.
 *
 * @param {string} slug
 */
export function chainLabel(slug) {
  return CHAIN_LABELS[slug] ?? requireService(slug).title;
}

/**
 * A cross-service link, labelled and pointed by the registry.
 *
 * The brief hands each page a hand-written label for its neighbouring services
 * ("Purchasing & Order Management →"). Typed into five page files, those labels
 * are five more places the service display name can drift — and service 03 has
 * already been renamed once (`Purchasing & Order Management` →
 * `Purchasing Management`). So a page file asks for the link and the registry
 * supplies both halves.
 *
 * @param {string} slug
 * @returns {{ label: string, href: string }}
 */
export function serviceLink(slug) {
  const service = requireService(slug);
  return { label: service.title, href: service.href };
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
