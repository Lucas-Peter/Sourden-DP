/**
 * SOURDEN — INSIGHTS
 * ---------------------------------------------------------------------------
 * Spec §18. This is a professional knowledge section, not a company-news blog.
 *
 * PURPOSE (in priority order): SEO → demonstrate sourcing expertise → answer
 * customer questions → build long-term organic traffic.
 *
 * HOMEPAGE SHOWS 1 featured + 2 secondary articles. Never six or eight cards.
 *
 * ARTICLE STATUS
 * The three V1 articles are given by the brief (title, category, excerpt). The
 * article *bodies* do not exist yet, so /insights/[slug] renders a reservation
 * page rather than invented content. `published: false` is what drives that —
 * flip it to `true` only once a real, substantive article is written.
 * ---------------------------------------------------------------------------
 */

/**
 * @typedef {Object} Article
 * @property {string}      slug
 * @property {string}      title
 * @property {string}      category
 * @property {string}      excerpt
 * @property {string|null} imageKey
 * @property {string|null} publishedAt  ISO date. null until actually published.
 * @property {boolean}     published
 * @property {string|null} readingTime
 */

/** @type {Article} */
export const featuredArticle = {
  slug: 'how-to-find-reliable-suppliers-in-china',
  title: 'How to Find Reliable Suppliers in China',
  category: 'SOURCING GUIDE',
  excerpt:
    'A practical guide to finding, comparing and evaluating Chinese suppliers before placing an order.',
  imageKey: 'insightSupplierResearch',
  publishedAt: null,
  published: false,
  readingTime: null,
};

/** @type {Article[]} */
export const secondaryArticles = [
  {
    slug: 'how-to-verify-a-chinese-supplier-before-you-order',
    title: 'How to Verify a Chinese Supplier Before You Order',
    category: 'SUPPLIER VERIFICATION',
    excerpt:
      'What to check beyond a supplier’s online profile, including product capability, MOQ, pricing, lead time and production requirements.',
    imageKey: 'insightSupplierVerification',
    publishedAt: null,
    published: false,
    readingTime: null,
  },
  {
    slug: 'china-supplier-vs-trading-company',
    title: 'China Supplier vs. Trading Company: What’s the Difference?',
    category: 'SUPPLIER KNOWLEDGE',
    excerpt:
      'Understanding the differences between manufacturers and trading companies, and when each may be suitable for your sourcing needs.',
    imageKey: 'insightTradingCompany',
    publishedAt: null,
    published: false,
    readingTime: null,
  },
];

export const allArticles = [featuredArticle, ...secondaryArticles];

/** §18 section header copy. The heading is deliberately two lines. */
export const insightsIntro = {
  eyebrow: 'INSIGHTS',
  title: 'Practical knowledge\nfor sourcing from China.',
  supporting:
    'Practical guides, sourcing knowledge and insights to help you make better decisions when buying from China.',
};

/* ---------------------------------------------------------------------------
   CONTENT BACKLOG — spec §18 "Future SEO Topics"
   ---------------------------------------------------------------------------
   Declared here so the content architecture is ready before the writing is.
   These entries are intentionally NOT rendered on the homepage: a topic is
   published only when the article exists. `status: 'planned'` is the guard.
   --------------------------------------------------------------------------- */

export const plannedTopics = [
  {
    group: 'Supplier',
    status: 'planned',
    topics: [
      'How to Find Reliable Suppliers in China',
      'How to Verify a Chinese Manufacturer',
      'China Supplier vs. Trading Company',
      'Alibaba Supplier vs. Factory',
      'How to Compare Chinese Suppliers',
      'What to Ask a Chinese Supplier Before Ordering',
    ],
  },
  {
    group: 'MOQ / Pricing',
    status: 'planned',
    topics: [
      'How MOQ Works in China Manufacturing',
      'Why Chinese Supplier Prices Can Vary So Much',
      'How to Negotiate With Chinese Suppliers',
      'What Is a Reasonable MOQ?',
    ],
  },
  {
    group: 'Quality Control',
    status: 'planned',
    topics: [
      'How Product Inspection Works in China',
      'What Should Be Checked Before Shipment?',
      'Pre-Shipment Inspection vs. Production Inspection',
      'How to Reduce Quality Problems When Buying From China',
    ],
  },
  {
    group: 'Shipping',
    status: 'planned',
    topics: [
      'How to Ship Products From China to Canada',
      'China to USA Shipping: What Buyers Should Know',
      'Air Freight vs. Sea Freight From China',
      'What Does DDP Shipping From China Mean?',
    ],
  },
  {
    group: 'Small Business',
    status: 'planned',
    topics: [
      'Can Small Businesses Source Directly From China?',
      'How Much Do You Need to Order From China?',
      'How to Start Sourcing From China With a Small Budget',
      'Do You Need a China Sourcing Agent?',
      'How to Source From China Without a Purchasing Team',
    ],
  },
];
