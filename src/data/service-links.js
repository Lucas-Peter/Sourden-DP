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
 * `detailPages`. A page file that needs a derived link therefore has to reach
 * back for it — and if that helper lived in `service-detail.js`, the two would
 * import each other. ES modules tolerate the cycle by handing the importer a
 * partially-initialised namespace, but `relatedServices()` is declared after
 * the page imports, so a page file calling it at module top level would hit
 * the temporal dead zone and throw
 * `Cannot access 'relatedServices' before initialization` — at build time,
 * with a message that points at the wrong file.
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
 * A cross-service link, labelled and pointed by the registry.
 *
 * The brief hands a page a hand-written label for a neighbouring service
 * ("Purchasing & Order Management →"). Typed into several files, those labels
 * are more places the service display name can drift — and service 03 has
 * already been renamed once (`Purchasing & Order Management` →
 * `Purchasing Management`). So a page asks for the link and the registry
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
 * The four services OTHER than the page being read, in process order.
 *
 * The detail pages' "Related Services" section hands the reader to the four
 * neighbouring services. Derived from the registry rather than typed per page,
 * so a page can never mis-name a neighbour or leave one out — and the four
 * links on page 1 are the same four on page 5, just with the current service
 * removed.
 *
 * @param {string} currentSlug
 * @returns {{ label: string, href: string }[]}
 */
export function relatedServices(currentSlug) {
  requireService(currentSlug);
  return services
    .filter((service) => service.slug !== currentSlug)
    .map((service) => ({ label: service.title, href: service.href }));
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
