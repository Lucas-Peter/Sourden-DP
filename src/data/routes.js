/**
 * SOURDEN — ROUTE REGISTRY + RESERVATION PAGE CONTENT
 * ---------------------------------------------------------------------------
 * Single source of truth for two things:
 *
 *   1. WHICH ROUTES EXIST. The spec (§33) reserves the full URL architecture up
 *      front, so no internal link ever has to be rewritten later.
 *
 *   2. WHICH ROUTES ARE INDEXABLE. Every route below `/` currently renders a
 *      reservation page with real copy but no page-specific content. Those
 *      pages carry `noindex` and are excluded from sitemap.xml — pointing
 *      search engines at thin pages is worse than not pointing them at all.
 *
 * WHEN A PAGE IS BUILT FOR REAL
 *   Delete its entry from `reservedTopLevel` (or remove the reservation page
 *   from `src/pages/`). It then drops out of `noindexPaths` automatically and
 *   reappears in the sitemap. Nothing else needs editing.
 *
 *   Done so far: /sourcing-request, /services, the five `/services/<slug>`
 *   detail pages, /industries, the nine `/industries/<slug>` category pages,
 *   /how-it-works, /about and /faq. Their copy lives in
 *   `src/data/sourcing-request.js`, `services-page.js`, `service-<slug>.js`,
 *   `industries-page.js`, `industry-<slug>.js`, `how-it-works-page.js`,
 *   `about-page.js` and `faq-page.js` respectively, and all of those routes are
 *   indexable.
 *
 *   IN PROGRESS: /privacy-policy and /terms-of-service. Their device, stylesheet
 *   and routes are built; the copy is not, because the brief they were to be
 *   written from turned out to contain the `/services` brief instead (see
 *   `legal-page.js`). They are the only reservation entries whose listing here
 *   is NOT how they leave `noindexPaths` — publishing one is a single data edit,
 *   because the page's indexability and the sitemap are both derived from the
 *   same `null`-or-not condition. Read the note on `noindexPaths` below before
 *   changing anything about them.
 *
 *   The five `/services/<slug>` detail pages moved out of `detailRoutePaths` by
 *   being added to `detailPages` in `service-detail.js`, and the nine
 *   `/industries/<slug>` category pages by being added to `industryDetailPages`
 *   in `industry-detail.js` — the route registry reads the built paths from
 *   those registries rather than keeping a second list, so publishing a page is
 *   one line, not two edits.
 *
 *   A slug that is in no registry still resolves, still has every link to it
 *   live, and still carries `noindex` until its copy exists.
 *
 * This module is intentionally free of any import that depends on Vite, so
 * `astro.config.mjs` can import it at build time.
 * ---------------------------------------------------------------------------
 */

import { services } from './services.js';
import { industries } from './industries.js';
import { allCaseStudies } from './caseStudies.js';
import { allArticles } from './insights.js';
import { builtDetailPaths } from './service-detail.js';
import { builtIndustryPaths } from './industry-detail.js';
import { builtLegalPaths } from './legal-page.js';

/** Page copy shared by every reservation page. */
export const reservationNotice = {
  label: 'In development',
  body: 'This page is part of the Sourden website structure and is being written. Everything you need in the meantime is on the homepage, or you can send your sourcing request and we will take it from there.',
};

/**
 * @typedef {Object} ReservationPage
 * @property {string}   path
 * @property {string}   label         Used in breadcrumbs and the sitemap.
 * @property {string}   seoTitle
 * @property {string}   seoDescription
 * @property {string}   eyebrow
 * @property {string}   h1
 * @property {string}   summary
 * @property {string[]} [planned]     What the finished page will contain.
 * @property {{ title: string, items: Array<{ label: string, href: string }> }} [linkList]
 */

/** @type {ReservationPage[]} */
export const reservedTopLevel = [
  {
    path: '/insights',
    label: 'Insights',
    seoTitle: 'Sourcing Insights and Guides | Sourden',
    seoDescription:
      'Practical guides, sourcing knowledge and insights to help you make better decisions when buying from China.',
    eyebrow: 'INSIGHTS',
    h1: 'Practical knowledge for sourcing from China.',
    summary:
      'Practical guides, sourcing knowledge and insights to help you make better decisions when buying from China.',
    planned: [
      'Sourcing guides: finding, comparing and evaluating suppliers',
      'Supplier verification: what to check before you order',
      'Quality control: inspection and pre-shipment checks',
      'Shipping: freight options, timelines and terms',
      'Small business sourcing: ordering from China at a smaller scale',
    ],
    linkList: {
      title: 'Articles',
      items: allArticles.map((article) => ({
        label: article.title,
        href: `/insights/${article.slug}`,
      })),
    },
  },
  {
    path: '/case-studies',
    label: 'Case Studies',
    seoTitle: 'Case Studies | Sourden',
    seoDescription:
      'Sourcing projects handled by Sourden — real requirements, supplier research, quality control and shipping.',
    eyebrow: 'CASE STUDIES',
    h1: 'Real sourcing. Real requirements.',
    summary:
      'Every sourcing project starts with a specific requirement. Each case is published here once the requirement, process and outcome are confirmed.',
    planned: [
      'The original requirement and its constraints',
      'How suppliers were researched and compared',
      'What was verified before the order was placed',
      'How the order was managed, checked and shipped',
    ],
  },
  /* The two legal documents. Unlike every other entry in this list, these keep
     their entry after the page is finished: it is what renders while the copy
     does not exist, and `noindexPaths` below filters them out by asking
     `builtLegalPaths` rather than by their being deleted. See the note there. */
  {
    path: '/privacy-policy',
    label: 'Privacy Policy',
    seoTitle: 'Privacy Policy | Sourden',
    seoDescription: 'How Sourden collects, uses and stores the information you provide.',
    eyebrow: 'LEGAL',
    h1: 'Privacy Policy.',
    summary:
      'This policy is being prepared and will describe what information Sourden collects, why it is collected, how long it is kept and how to request its removal.',
    planned: [
      'What information is collected through sourcing requests and enquiries',
      'How that information is used and who it is shared with',
      'How long information is retained',
      'How to request access, correction or deletion',
    ],
  },
  {
    path: '/terms-of-service',
    label: 'Terms of Service',
    seoTitle: 'Terms of Service | Sourden',
    seoDescription: 'The terms that apply when you use Sourden services.',
    eyebrow: 'LEGAL',
    h1: 'Terms of Service.',
    summary:
      'These terms are being prepared and will set out the basis on which Sourden provides sourcing and procurement coordination services.',
    planned: [
      'The scope of services Sourden provides',
      'Quotations, pricing and payment terms',
      'Responsibilities of Sourden and of the customer',
      'Quality control, shipping and dispute handling',
    ],
  },
];

/* ---------------------------------------------------------------------------
   PATHS THAT MUST NOT BE INDEXED
   Includes every reservation page plus every reserved detail page derived from
   the data files. `astro.config.mjs` filters sitemap.xml with this list.
   --------------------------------------------------------------------------- */

export const detailRoutePaths = [
  ...services.map((item) => item.href),
  ...industries.map((item) => item.href),
  ...allArticles.map((item) => `/insights/${item.slug}`),
  ...allCaseStudies
    .filter((item) => item.slug)
    .map((item) => `/case-studies/${item.slug}`),
  /**
   * A detail page that has actually been written is a real, indexable page, so
   * it is subtracted here and re-enters sitemap.xml. `builtDetailPaths` is
   * derived from the page registry in `service-detail.js` and
   * `builtIndustryPaths` from the one in `industry-detail.js` — the same
   * registries their `[slug]` routes use to decide whether to render the real
   * page or the reservation shell — so the two can never disagree.
   *
   * This is the subtraction that is easy to forget, and forgetting it fails
   * quietly: the page renders, every internal link to it works, and it is simply
   * absent from search.
   */
]
  .filter((path) => !builtDetailPaths.includes(path))
  .filter((path) => !builtIndustryPaths.includes(path));

export const noindexPaths = [
  '/404',
  /**
   * The legal documents are the ONE case where an entry staying in this list is
   * not a mistake. While `legal-privacy.js` / `legal-terms.js` exports `null`
   * they are ordinary reservations; the moment one exports a real page object it
   * leaves this list AND becomes indexable on the page itself, because both
   * sides read that same condition (`builtLegalPaths` below). Publishing a
   * document is therefore a single data edit, and the two contradictory-signal
   * checks in `npm run audit` — "noindex but in the sitemap", "indexable but
   * absent from the sitemap" — cannot be made to disagree by forgetting a second
   * one.
   *
   * Every other finished page left this list by having its entry deleted, which
   * is right when the reservation copy has been REPLACED. These two keep theirs
   * because the reservation shell is still the branch that renders until the
   * copy arrives — deleting the entry now would make `reservationFor()` throw on
   * a route that still needs it.
   */
  ...reservedTopLevel
    .filter((page) => !builtLegalPaths.includes(page.path))
    .map((page) => page.path),
  ...detailRoutePaths,
];

/** Route groups whose detail pages are generated from a data file. */
export const detailRouteGroups = {
  services: services.map((item) => ({
    slug: item.slug,
    kind: 'service',
    parent: { label: 'Services', href: '/services' },
    item,
  })),
  industries: industries.map((item) => ({
    slug: item.slug,
    kind: 'industry',
    parent: { label: 'Industries', href: '/industries' },
    item,
  })),
  insights: allArticles.map((item) => ({
    slug: item.slug,
    kind: 'insight',
    parent: { label: 'Insights', href: '/insights' },
    item,
  })),
  'case-studies': allCaseStudies
    .filter((item) => item.slug)
    .map((item) => ({
      slug: item.slug,
      kind: 'caseStudy',
      parent: { label: 'Case Studies', href: '/case-studies' },
      item,
    })),
};

/* ---------------------------------------------------------------------------
   LOOKUP HELPERS
   Used by the page files so route registration lives in exactly one place.
   --------------------------------------------------------------------------- */

/** @param {string} path */
export function reservationFor(path) {
  const page = reservedTopLevel.find((entry) => entry.path === path);
  if (!page) {
    throw new Error(
      `[routes.js] No reservation page registered for "${path}". Add it to reservedTopLevel.`
    );
  }
  return page;
}

/**
 * Per-kind copy for the reserved detail routes.
 * `summary` for services and insights comes from the data file, because those
 * descriptions are real; industries and case studies fall back to neutral copy
 * rather than inventing detail.
 */
const detailCopy = {
  service: {
    eyebrow: 'OUR SERVICES',
    planned: [
      'What this service covers, step by step',
      'What we need from you to start',
      'How it connects to the rest of the sourcing process',
      'What you receive at the end of this stage',
    ],
  },
  industry: {
    eyebrow: 'WHAT WE SOURCE',
    planned: [
      'What we typically look for in this category',
      'Common specifications, materials and packaging considerations',
      'Typical sourcing questions in this category',
      'How to request something that is not listed here',
    ],
  },
  insight: {
    planned: [
      'A practical, step-by-step guide rather than a general overview',
      'What to check, in the order you would actually check it',
      'Common mistakes and how to avoid them',
      'Where Sourden can help, and where it cannot',
    ],
  },
  caseStudy: {
    eyebrow: 'CASE STUDIES',
    planned: [
      'The original requirement and its constraints',
      'How suppliers were researched and compared',
      'What was verified before the order was placed',
      'How the order was managed, checked and shipped',
    ],
  },
};

/**
 * Build the full prop set for a reserved detail route.
 * @param {'service'|'industry'|'insight'|'caseStudy'} kind
 * @param {Record<string, any>} item
 * @param {{ label: string, href: string }} parent
 */
export function reservationForDetail(kind, item, parent) {
  const copy = detailCopy[kind];
  const path =
    kind === 'service'
      ? item.href
      : kind === 'industry'
        ? item.href
        : `/${kind === 'insight' ? 'insights' : 'case-studies'}/${item.slug}`;

  const summary =
    kind === 'service'
      ? item.description
      : kind === 'insight'
        ? item.excerpt
        : kind === 'industry'
          ? // `summaryNoun` exists because a few category titles do not slot
            // into this sentence naturally ("sources sports & outdoors").
            // Categories that read fine omit it and fall back to the title.
            `Sourden sources ${item.summaryNoun ?? item.title.toLowerCase()} from China according to your specifications, target market and business needs — from supplier research through to shipping.`
          : 'This case is published only once the real requirement, process and outcome are confirmed. Details are being prepared.';

  const eyebrow = kind === 'insight' ? item.category : copy.eyebrow;

  return {
    path,
    seoTitle: `${item.title} | Sourden`,
    seoDescription: summary,
    eyebrow,
    h1: item.title,
    summary,
    planned: copy.planned,
    breadcrumbs: [{ label: parent.label, href: parent.href }, { label: item.title }],
  };
}
