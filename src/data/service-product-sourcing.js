/**
 * SOURDEN — /services/product-sourcing
 * ---------------------------------------------------------------------------
 * Every editable word on the Product Sourcing detail page. Part of the five-page
 * architecture documented in `service-detail.js`, with copy mandated verbatim
 * by the five-page brief (PAGE 1).
 *
 * ── THE UNIFIED STRUCTURE (2026-10-03) ─────────────────────────────────────
 * All five pages now share one section sequence — What We Do → What We Handle →
 * How It Works → When You Need This → What You Can Expect → Related Services →
 * FAQ — each filled with service-specific copy. The older "what we source",
 * "starting a request", MOQ-prose and process-chain sections were removed
 * because they repeated `/services`, `/industries` and `/how-it-works`.
 *
 * ── WHAT IS NOT IN THIS FILE ───────────────────────────────────────────────
 *   · Service names, numbers, URLs — merged from `services.js` by
 *     `detailBreadcrumbs()`.
 *   · The primary CTA ("Start a Sourcing Request" → `/sourcing-request`) and
 *     the secondary CTA ("View All Services" → `/services`) — declared once in
 *     `service-links.js`, because cross-page requirement §2 fixes both.
 *   · The four Related Services links — derived by `relatedServices(slug)`,
 *     which reads the registry and excludes this page.
 *
 * ── CLAIMS RULE (cross-page requirement §4) ────────────────────────────────
 * Nothing here asserts a client or supplier count, years in business, a success
 * rate, an inspection statistic, a testimonial, a certification, a case study,
 * a logo or an award. No guaranteed quality, no risk-free sourcing, no "100%
 * reliable suppliers", no "cheapest supplier", no guaranteed delivery. The one
 * MOQ wording is the §07 rule: SOURDEN does not impose its OWN minimum — it is
 * NOT a claim that Chinese factories have none.
 *
 * ── TONE PER SECTION ───────────────────────────────────────────────────────
 * Stated on every section so the page's ivory → white → … → ink rhythm is
 * visible here rather than buried in a stylesheet. Hero ivory, process band ink,
 * FAQ ivory — those three devices own their own ground; the rest alternate.
 * ---------------------------------------------------------------------------
 */

export const slug = 'product-sourcing';

/* ===========================================================================
   SEO — brief PAGE 1 §SEO. Both strings are mandated verbatim.
   =========================================================================== */

export const meta = {
  title: 'Product Sourcing from China | SOURDEN',
  description:
    'SOURDEN helps businesses and buyers source products from China by researching suitable suppliers, comparing options and matching products to their requirements.',
};

/* ===========================================================================
   01 — HERO
   =========================================================================== */

export const hero = {
  eyebrow: 'PRODUCT SOURCING',
  title: 'Find the right products and suppliers in China.',
  description:
    "Tell us what you need, and we'll research suitable sourcing options based on your product requirements, quantity, target pricing and other priorities.",
  /** Documentary photograph — samples, comparison materials, sourcing workspace.
      Art direction and crop note live with the slot in `media.js`. */
  image: {
    key: 'serviceProductSourcingHero',
    caption: 'SAMPLE & SPECIFICATION REVIEW',
  },
};

/* ===========================================================================
   SECTIONS — in render order
   =========================================================================== */

export const sections = [
  /* ---------------------------------------------------------------- 02 --- */
  {
    type: 'prose',
    tone: 'white',
    eyebrow: 'WHAT WE DO',
    title: 'From product requirements to suitable sourcing options.',
    paragraphs: [
      'Finding a product in China is only the beginning. The right supplier also needs to fit your specifications, quantity, quality expectations, target pricing and sourcing goals.',
      'We research and compare suitable options so you can make a more informed decision before moving forward.',
    ],
  },

  /* ---------------------------------------------------------------- 03 --- */
  {
    type: 'reviewGrid',
    tone: 'ivory',
    eyebrow: 'WHAT WE HANDLE',
    title: 'What we look at when sourcing a product.',
    items: [
      {
        title: 'Product Requirements',
        description: 'We work from your product specifications, materials, dimensions, functions, colors, packaging and other requirements.',
      },
      {
        title: 'Supplier Research',
        description: 'We research suppliers that appear suitable for the product and requirements you provide.',
      },
      {
        title: 'Product & Price Comparison',
        description: 'We compare available products, specifications, quotations, MOQ and other relevant factors.',
      },
      {
        title: 'Customization',
        description: 'When required, we look for suppliers that can support custom specifications, branding, packaging or other modifications.',
      },
      {
        title: 'Samples',
        description: 'When a sample is appropriate, we can coordinate sample requests before a larger order.',
      },
      {
        title: 'Sourcing Options',
        description: 'We organize the relevant information so you can review and compare the available options.',
      },
    ],
  },

  /* ---------------------------------------------------------------- 04 --- */
  {
    type: 'process',
    tone: 'ink',
    eyebrow: 'HOW IT WORKS',
    title: 'A practical sourcing process.',
    /** Numbers derive from array order (01…05), never typed. */
    steps: [
      { label: 'Understand', description: 'You tell us what you want to source, including specifications, quantity, target pricing and destination.' },
      { label: 'Research', description: 'We research suppliers and products that match your requirements.' },
      { label: 'Compare', description: 'We compare relevant sourcing options, including product fit, pricing, MOQ and lead times.' },
      { label: 'Confirm', description: 'You review the options and decide which direction you want to take.' },
      { label: 'Move Forward', description: 'If you proceed, we can help with purchasing, quality control and shipping as needed.' },
    ],
  },

  /* ---------------------------------------------------------------- 05 --- */
  {
    type: 'checkList',
    tone: 'white',
    eyebrow: 'WHEN YOU NEED THIS',
    title: "You know what you want to buy, but don't know where to start.",
    description:
      "Product sourcing is useful when you have a product idea, specification or existing product reference but don't have the supplier network or time to research the China market yourself.",
    items: [
      'You have a product idea but no supplier.',
      'You found a product but want alternative suppliers.',
      'You need a manufacturer for a customized product.',
      'You want to compare several sourcing options before ordering.',
    ],
  },

  /* ---------------------------------------------------------------- 06 --- */
  {
    type: 'checkList',
    tone: 'ivory',
    eyebrow: 'WHAT YOU CAN EXPECT',
    title: 'Clearer options before you commit.',
    description:
      'Our role is to help you understand the available sourcing options and the factors that matter before you place an order.',
    items: [
      'Relevant supplier options',
      'Product and specification information',
      'Quotation comparisons',
      'MOQ and lead-time information',
      'Customization information when applicable',
      'Guidance on the next sourcing step',
    ],
  },

  /* ---------------------------------------------------------------- 07 --- */
  {
    type: 'relatedServices',
    tone: 'white',
    eyebrow: 'RELATED SERVICES',
    title: 'Need support beyond product sourcing?',
    /** The four links are derived by `relatedServices(slug)` in the shell. */
  },

  /* ---------------------------------------------------------------- 08 --- */
  {
    type: 'faq',
    eyebrow: 'FAQ',
    /** 〔added〕 — the brief gives the questions but no heading for the band. */
    title: 'Questions about product sourcing.',
    items: [
      {
        question: 'Can you source a product from a photo?',
        answer:
          'Yes. A product photo, existing product, reference link or detailed description can be a useful starting point. The more specifications you can provide, the more accurately we can research suitable options.',
      },
      {
        question: 'Can you find customized products?',
        answer:
          'Yes. We can research suppliers that may support custom specifications, branding, packaging or other modifications. Custom requirements can affect MOQ, pricing and production time.',
      },
      {
        question: 'Can I start with a small order?',
        answer:
          'Yes. SOURDEN does not impose a fixed MOQ. However, individual suppliers may have their own minimum order requirements.',
      },
      {
        question: 'Can you source products that are not listed on your website?',
        answer:
          'Yes. The product categories shown on our website are examples of areas we commonly source. You can submit a request for products outside those categories as well.',
      },
    ],
    foot: { label: 'View All FAQs', href: '/faq' },
  },
];

/* ===========================================================================
   09 — FINAL CTA
   ---------------------------------------------------------------------------
   One primary action (the site-wide `primaryCta`). The copy differs from the
   `/services` page's closing band on purpose: a visitor who has just read one
   service in depth has a different question in mind than one who has only seen
   the service list.
   =========================================================================== */

export const finalCta = {
  eyebrow: 'START WITH A REQUEST',
  title: 'Looking for a product in China?',
  description: "Tell us what you're looking for, and we'll help you determine the right sourcing approach.",
};

/* ===========================================================================
   THE PAGE OBJECT
   =========================================================================== */

export const productSourcing = { slug, meta, hero, sections, finalCta };
