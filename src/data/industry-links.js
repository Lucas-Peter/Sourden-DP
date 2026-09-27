/**
 * SOURDEN — INDUSTRY LINKS & DERIVED LABELS
 * ---------------------------------------------------------------------------
 * Everything an `/industries/<slug>` page file may need to REFER TO a
 * category, a service or the site's own actions — built from the registries
 * rather than typed into nine page files.
 *
 * ── WHY THIS IS A LEAF, AND WHY IT EXISTS AT ALL ───────────────────────────
 * `industry-detail.js` imports the nine page files in order to build
 * `detailPages`. A page file that needs a derived label therefore has to reach
 * back for it — and if that helper lived in `industry-detail.js`, the two would
 * import each other. ES modules tolerate the cycle by handing the importer a
 * partially-initialised namespace, but `SERVICE_BLURBS` below is a `const`
 * declared after the page imports, so a page file calling `relatedServices` at
 * module top level would hit the temporal dead zone and throw
 * `Cannot access 'SERVICE_BLURBS' before initialization` — at build time, with a
 * message that points at the wrong file.
 *
 * This is the same trap `service-links.js` was created to avoid, and the same
 * fix: keep the registry-derived helpers in a module that imports only
 * registries. So this file imports `industries.js`, `services.js` and `site.js`
 * and NOTHING else. `industry-detail.js` re-exports from here.
 *
 * ── WHAT BELONGS DOWN HERE ─────────────────────────────────────────────────
 * Anything derived from those three registries alone, plus the one piece of
 * shared copy that is not a page's own word: the sentence attached to each of
 * the five services in the "Related Services" band. That sentence used to live
 * in `industries-page.js`; it moved here because the nine child pages render the
 * same five links with the same five sentences, and a second copy of it in nine
 * page files is nine places for a service description to drift.
 *
 * `industries-page.js` re-exports it, so `/industries` keeps rendering the
 * record it always did and its output is byte-identical.
 *
 * ── WHAT A PAGE FILE MUST NOT DECLARE ─────────────────────────────────────
 *   · A category's name, number, slug or href — read from `industries.js`.
 *   · A service's name or href — read from `services.js` via `serviceLink()` /
 *     `relatedServices`. Service 03 is published as "Purchasing Management"
 *     (renamed from "Purchasing & Order Management"); a typed label is how the
 *     nine pages would end up publishing the old name.
 *   · The primary CTA. Every page's primary action is `primaryCta` from
 *     `site.js` — "Start a Sourcing Request" is the one primary action
 *     site-wide, and declaring it per page is how ten pages end up with four
 *     different labels.
 * ---------------------------------------------------------------------------
 */

import { industries } from './industries.js';
import { services } from './services.js';
import { primaryCta } from './site.js';

export { primaryCta };

/**
 * The hero's secondary action on every `/industries/<slug>` page.
 *
 * The industries equivalent of `secondaryCta` in `service-links.js`
 * ("View All Services"), declared once so the nine pages cannot disagree about
 * it. The label carries no arrow: `<ArrowLink>` draws that, and a label with an
 * arrow in it renders two.
 */
export const secondaryCta = { label: 'View All Industries', href: '/industries' };

/* ===========================================================================
   LOOK UP A CATEGORY, OR FAIL THE BUILD
   =========================================================================== */

/**
 * @param {string} slug
 * @returns {{ number: string, title: string, slug: string, href: string }}
 */
export function requireIndustry(slug) {
  const category = industries.find((entry) => entry.slug === slug);
  if (!category) {
    throw new Error(
      `[industry-links.js] No category registered with slug "${slug}". ` +
        `Add it to industries.js — an industry page never declares its own name.`
    );
  }
  return category;
}

/** @param {string} slug */
export function industryForSlug(slug) {
  return requireIndustry(slug);
}

/**
 * Breadcrumb trail for a category page, excluding "Home" (prepended by
 * `<Breadcrumbs>` and by `breadcrumbItems()`), so the visible trail and the
 * JSON-LD BreadcrumbList come from this one array.
 *
 * @param {string} slug
 */
export function industryBreadcrumbs(slug) {
  const category = requireIndustry(slug);
  return [{ label: 'Industries', href: '/industries' }, { label: category.title }];
}

/* ===========================================================================
   THE NINE CATEGORIES, WITH THIS PAGE MARKED
   ---------------------------------------------------------------------------
   The page's own internal navigation (brief §16). All nine are returned, not
   the other eight: the brief asks for the other eight as LINKS and for the
   current page to be "visually distinguished from the other categories", and a
   list that omits the current page has nothing for the reader to distinguish it
   from — the reader's own category would simply be missing from a navigation
   that claims to list the categories.
   =========================================================================== */

/**
 * @param {string} currentSlug
 * @returns {Array<{ number: string, title: string, href: string, current: boolean }>}
 */
export function industryNavFor(currentSlug) {
  requireIndustry(currentSlug);
  return industries.map((category) => ({
    number: category.number,
    title: category.title,
    href: category.href,
    /**
     * Compared by href against the registry's own value, so a page cannot mark
     * itself current twice or mark a neighbour current by typo.
     */
    current: category.slug === currentSlug,
  }));
}

/* ===========================================================================
   THE FIVE SERVICES, WITH THE SENTENCE EACH ONE CARRIES
   ---------------------------------------------------------------------------
   Brief §13 links to the five service pages; the row device needs a sentence
   per row, and the brief supplies the link labels but not the sentences. Those
   sentences are the ones `/industries` §11 already publishes, so they are
   declared once here and both consumers read the same record — service 03 in
   particular is published as "Purchasing Management", and the link label comes
   from the registry rather than from this file.

   `requireBlurb` fails the build rather than rendering `undefined` into a row,
   which is the one failure mode a merged list has: a sixth service added to
   `services.js` without a sentence here would otherwise ship a ROW WITH NO
   DESCRIPTION on ten pages.
   =========================================================================== */

const SERVICE_BLURBS = {
  'product-sourcing': 'Find suitable products and suppliers based on your requirements.',
  'supplier-verification': 'Evaluate supplier fit before moving forward.',
  'purchasing-order-management':
    'Coordinate purchasing, supplier communication and production progress.',
  'quality-control': 'Check agreed product requirements before shipment.',
  'shipping-from-china': 'Coordinate the movement of goods from China to their destination.',
};

/** @param {string} slug */
function requireBlurb(slug) {
  const blurb = SERVICE_BLURBS[slug];
  if (!blurb) {
    throw new Error(
      `[industry-links.js] No description for the service "${slug}". ` +
        `The related-services band is merged from services.js — add its sentence here.`
    );
  }
  return blurb;
}

/**
 * The five services in process order, each with the sentence the related
 * services band renders. Order is `services.js`' order — the same order the
 * homepage, the footer and `/services` all use.
 */
export const relatedServices = services.map((service) => ({
  number: service.number,
  title: service.title,
  href: service.href,
  description: requireBlurb(service.slug),
}));
