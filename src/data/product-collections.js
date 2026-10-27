/**
 * SOURDEN — PRODUCT COLLECTIONS: SHARED ARCHITECTURE
 * ---------------------------------------------------------------------------
 * The `/products/<industry>/<slug>` pages are one page architecture with N sets
 * of copy. This file owns WHICH collections exist; each collection's words live
 * in its own `collection-<slug>.js` file, and the page shell that renders them
 * is `src/components/collections/CollectionPage.astro`.
 *
 * ── WHY ONE ARCHITECTURE ───────────────────────────────────────────────────
 * The brief is explicit: the collection page is a reusable template — "adding
 * a new product category should mainly involve adding data and images, not
 * rewriting the page layout" — while every category's introduction and SEO
 * metadata must be independently written, not the same text with the title
 * swapped. The architecture is how both are met: the
 * MODULE STRUCTURE (introduction → catalogue, pagination, card fields) is
 * fixed in the shell; every sentence inside it comes from the data file.
 *
 * Adding a collection is a data file plus one line in `collectionPages` — no
 * new markup, no new CSS, no new route file.
 *
 * ── THE DATA SHAPE (brief §5) ──────────────────────────────────────────────
 * Every collection file exports one object:
 *
 *   slug, categoryName        identity — the slug is the route, the name is
 *                             the H1 and the breadcrumb's last crumb
 *   industrySlug              the parent 大类 — a slug in `industries.js`, used
 *                             for the URL's category segment and the breadcrumb
 *                             crumb above the collection
 *   seoTitle, metaDescription per-page SEO, written for THIS category
 *   eyebrow, h1               the intro band's label and title
 *   introduction.paragraphs   what this category is and how SOURDEN sources it;
 *                             the customization options are written into these
 *                             paragraphs, not a separate block
 *   catalogNotice             the "partial reference set" statement
 *   cta                       the one primary action (href is always
 *                             `primaryCta.href` from site.js)
 *   relatedLinks              parent category + related services, hrefs built
 *                             from the registries
 *   catalog                   module two's section header
 *   products[]                id, code, name, imageKey, shortDescription,
 *                             altText, sortOrder
 *
 * ── THE PRODUCT CODE IS THE STABLE IDENTITY ────────────────────────────────
 * `code` (e.g. `SJ-004`) is unique within a collection and never changes:
 * not when the sort order changes, not when the page size changes, not when
 * products are added around it. `id` is the record key for future use (a
 * detail page, an enquiry form pre-fill); `sortOrder` is the catalogue order,
 * and pagination slices the sortOrder-sorted array — so a product's page can
 * move, its code cannot.
 *
 * ── CLAIMS RULE ────────────────────────────────────────────────────────────
 * Nothing in a collection file may assert a client count, a supplier count,
 * years in business, a success rate, a certification, a testimonial or an
 * award; nothing may promise guaranteed quality, compliance or delivery, the
 * lowest price, or "we can source anything". No product record may carry a
 * price, a stock level, an MOQ or a lead time — the brief forbids every one
 * of those on the card, and a number the business cannot honour is worse
 * than no number.
 *
 * ── WHERE A SLUG IS NOT FOUND ──────────────────────────────────────────────
 * Unlike `/industries/<slug>`, a collection slug that is not in the registry
 * generates NO route at all — the collection routes were never published as
 * reservations, because there is no content to reserve. A link to a slug with
 * no data file is a 404 the audit's internal-link check will catch, which is
 * the loud failure a typo deserves.
 * ---------------------------------------------------------------------------
 */

import { soccerJerseys } from './collection-soccer-jerseys.js';
import { sportShoes } from './collection-sport-shoes.js';
import { basketballJerseys } from './collection-basketball-jerseys.js';
import { industries } from './industries.js';

/* ===========================================================================
   THE REGISTRY
   ---------------------------------------------------------------------------
   One line per collection, in registry order. The hub directory, the header
   nav (through `collections` below) and the sitemap all read this.
   =========================================================================== */

/** @type {Record<string, typeof soccerJerseys>} */
export const collectionPages = {
  'soccer-jerseys': soccerJerseys,
  'sport-shoes': sportShoes,
  'basketball-jerseys': basketballJerseys,
};

/** @param {string} slug */
export function collectionFor(slug) {
  return collectionPages[slug] ?? null;
}

/** Every collection, in registry order. */
export const collections = Object.values(collectionPages);

/**
 * Root-relative paths of the collections.
 *
 * These routes were never reservations, so there is no noindex list to
 * subtract from — a collection in this registry is a real page and belongs in
 * sitemap.xml the moment it exists. Page 2+ URLs
 * (`/products/<industry>/<slug>/<n>`) are generated by the route file and
 * are indexable too; the sitemap picks them up from the built pages.
 */
export const builtCollectionPaths = Object.keys(collectionPages).map(
  (slug) => collectionPath(slug)
);

/* ===========================================================================
   CATALOGUE PAGING — one vocabulary, shared by every collection
   ---------------------------------------------------------------------------
   Every visible word the pagination and the count line print lives here, so
   twelve collections cannot end up with three wordings for "Next". The
   {from}, {to}, {total} tokens are substituted in `CollectionPage.astro`.
   =========================================================================== */

export const COLLECTION_PAGE_SIZE = 24;

export const collectionPaging = {
  navLabel: 'Catalogue pages',
  prev: 'Previous',
  next: 'Next',
  gap: '…',
  countSingle: '{total} reference styles',
  countPaged: 'Showing {from}–{to} of {total} reference styles',
};

/* ===========================================================================
   LOOKUP + DERIVATION HELPERS
   =========================================================================== */

/**
 * The industry (大类) a collection belongs to, resolved from `industries.js`.
 * The collection stores only the slug; the display name and href come from the
 * registry so a renamed category moves every breadcrumb and link with it.
 * @param {{ slug: string, industrySlug: string }} collection
 */
function industryFor(collection) {
  const industry = industries.find((entry) => entry.slug === collection.industrySlug);
  if (!industry) {
    throw new Error(
      `[product-collections.js] Collection "${collection.slug}" declares industrySlug ` +
        `"${collection.industrySlug}", which is not in industries.js. ` +
        `Add the category, or correct the slug.`
    );
  }
  return industry;
}

/** @param {string} slug */
function requireCollection(slug) {
  const page = collectionFor(slug);
  if (!page) {
    throw new Error(
      `[product-collections.js] No collection registered for "${slug}". ` +
        `Add its data file to collectionPages.`
    );
  }
  return page;
}

/**
 * The collection's clean (page-1) address: `/products/<industry>/<slug>`.
 * The industry segment is the parent 大类 — the brief requires the URL to carry
 * it, so a collection URL reads `/products/apparel-footwear-bags/soccer-jerseys`.
 * @param {string} slug
 */
export function collectionPath(slug) {
  const page = requireCollection(slug);
  return `/products/${page.industrySlug}/${slug}`;
}

/**
 * The trail BELOW Home for a collection: Products → the 大类 → the collection.
 * The 大类 crumb links to the existing industry detail page (owner decision:
 * "跳现有行业页"), so the reader can climb up into the broader category.
 * `Breadcrumbs.astro` prepends "Home" itself, and `breadcrumbItems()` does
 * the same for the JSON-LD — one rule, one place.
 * @param {string} slug
 */
export function collectionBreadcrumbs(slug) {
  const page = requireCollection(slug);
  const industry = industryFor(page);
  return [
    { label: 'Products', href: '/products' },
    { label: industry.title, href: industry.href },
    { label: page.categoryName },
  ];
}

/**
 * A catalogue page's address. Page 1 is the clean collection URL; later
 * pages append `/N` (e.g. `/soccer-jerseys/2`), matching the static route
 * `src/pages/products/[industry]/[slug]/[page].astro`, which emits
 * `/products/<industry>/<slug>/<n>` — no `/page/` segment.
 * @param {string} slug
 * @param {number} page 1-based
 */
export function collectionPageHref(slug, page) {
  const base = collectionPath(slug);
  return page <= 1 ? base : `${base}/${page}`;
}

/**
 * The pagination maths, as a pure function so it can be verified without a
 * build: sort by `sortOrder`, clamp the requested page into range, slice.
 *
 * Out-of-range pages clamp to the last page rather than rendering empty —
 * the same call `pageFromLocation()` makes on `/insights`. (The route file
 * only generates valid pages, so this clamp guards the helper's other
 * callers, not the built site.)
 * @param {Array<{ sortOrder: number }>} products
 * @param {number} page 1-based
 * @param {number} [size]
 */
export function paginateProducts(products, page, size = COLLECTION_PAGE_SIZE) {
  const sorted = [...products].sort((a, b) => a.sortOrder - b.sortOrder);
  const total = sorted.length;
  const totalPages = Math.max(1, Math.ceil(total / size));
  const current = Math.min(Math.max(1, Math.trunc(page) || 1), totalPages);
  const start = (current - 1) * size;
  return {
    products: sorted.slice(start, start + size),
    current,
    totalPages,
    total,
  };
}
