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
 * the four services in the "Related Services" band. That sentence used to live
 * in `industries-page.js`; it moved here because the nine child pages render the
 * same four links with the same four sentences, and a second copy of it in nine
 * page files is nine places for a service description to drift.
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
   THE FOUR SERVICES, WITH THE SENTENCE EACH ONE CARRIES
   ---------------------------------------------------------------------------
   The category pages' "Related Services" band links four service pages; the
   row device needs a sentence per row, and the brief supplies the link labels
   but not the sentences. Those sentences are the ones `/industries` §11
   already publishes, so they are declared once here and both consumers read
   the same record — service 03 in particular is published as "Purchasing
   Management", and the link label comes from the registry rather than from
   this file.

   `requireBlurb` fails the build rather than rendering `undefined` into a row,
   which is the one failure mode a merged list has: a service added to
   `services.js` without a sentence here would otherwise ship a ROW WITH NO
   DESCRIPTION on the category pages.

   ── WHY FOUR AND NOT FIVE ─────────────────────────────────────────────────
   The band was trimmed from five services to four in the 2026-10-03 pass:
   "Shipping from China" is dropped, so the four remaining rows keep their
   registry numbers 01–04 unbroken. Shipping stays reachable through the
   "View All Services" foot and the FAQ, and its own concerns (carton size,
   packing volume) live in each category's "Sourcing Considerations" — so it is
   represented on the page without a fifth row. The blurb for it is kept below
   in case a page needs it again; `requireBlurb` stays complete for that
   reason.
   =========================================================================== */

const SERVICE_BLURBS = {
  'product-sourcing': 'Find suitable products and suppliers based on your requirements.',
  'supplier-verification': 'Evaluate supplier fit before moving forward.',
  'purchasing-order-management':
    'Coordinate purchasing, supplier communication and production progress.',
  'quality-control': 'Check agreed product requirements before shipment.',
  'shipping-from-china': 'Coordinate the movement of goods from China to their destination.',
};

/** The four services the category pages' related-services band renders. */
const RELATED_SERVICE_SLUGS = [
  'product-sourcing',
  'supplier-verification',
  'purchasing-order-management',
  'quality-control',
];

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
 * The four services in process order, each with the sentence the related
 * services band renders. Order is `services.js`' order — the same order the
 * homepage, the footer and `/services` all use.
 */
export const relatedServices = services
  .filter((service) => RELATED_SERVICE_SLUGS.includes(service.slug))
  .map((service) => ({
    number: service.number,
    title: service.title,
    href: service.href,
    description: requireBlurb(service.slug),
  }));
