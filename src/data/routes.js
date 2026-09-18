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
 * This module is intentionally free of any import that depends on Vite, so
 * `astro.config.mjs` can import it at build time.
 * ---------------------------------------------------------------------------
 */

import { services } from './services.js';
import { industries } from './industries.js';
import { allCaseStudies } from './caseStudies.js';
import { allArticles } from './insights.js';

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
    path: '/services',
    label: 'Services',
    seoTitle: 'Sourcing Services | Sourden',
    seoDescription:
      'Product sourcing, supplier verification, purchasing and order management, quality control and shipping from China.',
    eyebrow: 'OUR SERVICES',
    h1: 'Services',
    summary:
      'One partner across the sourcing process — from researching suppliers to coordinating the final shipment.',
    planned: [
      'What each service covers, and where it starts and stops',
      'What we need from you at each stage',
      'How supplier verification and quality control are actually carried out',
      'How shipping from China connects to the rest of the process',
    ],
    linkList: {
      title: 'Service pages',
      items: services.map((service) => ({ label: service.title, href: service.href })),
    },
  },
  {
    path: '/industries',
    label: 'Industries',
    seoTitle: 'What We Source | Sourden',
    seoDescription:
      'Product categories Sourden sources from China, from consumer products and packaging to electronics and industrial products.',
    eyebrow: 'WHAT WE SOURCE',
    h1: 'Industries',
    summary:
      'Sourden works across a range of product categories, sourcing according to your specifications, target market and business needs.',
    planned: [
      'What we typically look for in each category',
      'Common specifications, materials and packaging considerations',
      'Typical sourcing questions in each category',
      'How to request a category that is not listed here',
    ],
    linkList: {
      title: 'Category pages',
      items: industries.map((industry) => ({ label: industry.title, href: industry.href })),
    },
  },
  {
    path: '/how-it-works',
    label: 'How It Works',
    seoTitle: 'How It Works | Sourden',
    seoDescription:
      'A straightforward sourcing process, from your first request through supplier research, verification, order management, inspection and shipping.',
    eyebrow: 'HOW IT WORKS',
    h1: 'From need to done.',
    summary:
      'A straightforward sourcing process, from your first request to final shipment.',
    planned: [
      'Each step in detail, including what you receive and what happens next',
      'Typical information we ask for before starting a search',
      'How quotations and supplier comparisons are presented',
      'Where quality control and shipping sit in the timeline',
    ],
  },
  {
    path: '/about',
    label: 'About',
    seoTitle: 'About Sourden | China Sourcing. Done.',
    seoDescription:
      'Sourden is a China sourcing and procurement service for small wholesalers, independent retailers, local shops and growing brands.',
    eyebrow: 'ABOUT',
    h1: 'Sourcing without the barriers.',
    summary:
      'Sourden helps businesses source products from China without needing a large purchasing team, huge order volumes or years of experience in the market.',
    planned: [
      'How Sourden works and who it is built for',
      'How suppliers are researched, contacted and assessed',
      'What we will and will not take on',
      'How to start, and what the first request looks like',
    ],
  },
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
  {
    path: '/faq',
    label: 'FAQ',
    seoTitle: 'Frequently Asked Questions | Sourden',
    seoDescription:
      'Common questions about sourcing from China with Sourden, including minimum order quantities, pricing, verification and shipping.',
    eyebrow: 'FAQ',
    h1: 'Frequently asked questions.',
    summary:
      'Straight answers about how sourcing through Sourden works, from the first request through to shipping.',
    planned: [
      'Minimum order quantities and how they actually apply',
      'Pricing, quotations and what is included',
      'Supplier verification and quality control',
      'Shipping options, timelines and destination markets',
    ],
  },
  {
    path: '/sourcing-request',
    label: 'Start a Sourcing Request',
    seoTitle: 'Start a Sourcing Request | Sourden',
    seoDescription:
      'Tell Sourden what you are looking to source from China — product, specifications, quantity, target price and destination.',
    eyebrow: 'START WITH A REQUEST',
    h1: 'Start a sourcing request.',
    summary:
      'Tell us what you are looking for and we will take it from there. A sourcing request takes a few minutes and there is no obligation.',
    planned: [
      'Your details: name, company, email, WhatsApp and country',
      'Your request: product, description, quantity and target price',
      'Destination market and reference URLs',
      'Optional reference files, such as drawings, photos or existing product links',
    ],
  },
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
];

export const noindexPaths = [
  '/404',
  ...reservedTopLevel.map((page) => page.path),
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
