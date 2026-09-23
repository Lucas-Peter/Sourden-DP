/**
 * SOURDEN — /services/product-sourcing
 * ---------------------------------------------------------------------------
 * Every editable word on the Product Sourcing detail page. Part of the five-page
 * architecture documented in `service-detail.js` and required verbatim by the
 * five-page brief (PAGE 1).
 *
 * WHAT IS NOT IN THIS FILE
 *   · Service names, numbers, URLs — merged from `services.js` by
 *     `detailBreadcrumbs()` and `chainFor()`.
 *   · The primary CTA ("Start a Sourcing Request" → `/sourcing-request`) and
 *     the secondary CTA ("View All Services" → `/services`) — declared once in
 *     `service-detail.js`, because cross-page requirement §2 fixes both.
 *   · The nine category names in §03 — merged from `industries.js`, see the
 *     note on that section below.
 *   · The chain labels in §08 — declared once in `service-detail.js`.
 *
 * ── CLAIMS RULE (cross-page requirement §4) ────────────────────────────────
 * Nothing here asserts a client or supplier count, years in business, a success
 * rate, an inspection statistic, a testimonial, a certification, a case study,
 * a logo or an award. No guaranteed quality, no risk-free sourcing, no "100%
 * reliable suppliers", no "cheapest supplier", no guaranteed delivery, no zero
 * risk. The MOQ wording is the §07 rule: Sourden does not impose its OWN
 * minimum order quantity — it is NOT a claim that Chinese factories have none.
 *
 * ── TONE PER SECTION ───────────────────────────────────────────────────────
 * Stated on every section so the page's ivory → white → … → ink rhythm is
 * visible here rather than buried in a stylesheet. The hero is always ivory,
 * the process band always ink and the FAQ always ivory (those three devices own
 * their own ground — see `service-detail.js`). The order below alternates.
 * ---------------------------------------------------------------------------
 */

import { industries } from './industries.js';

export const slug = 'product-sourcing';

/* ===========================================================================
   SEO — brief PAGE 1 §SEO. Both strings are mandated verbatim.
   =========================================================================== */

export const meta = {
  title: 'Product Sourcing from China | SOURDEN',
  description:
    'SOURDEN helps businesses source products from China through supplier research, product comparison, quotation and sourcing coordination.',
};

/* ===========================================================================
   01 — HERO
   =========================================================================== */

export const hero = {
  eyebrow: 'PRODUCT SOURCING',
  title: 'Find the right products and suppliers in China.',
  description:
    'We research suitable products and suppliers based on your specifications, target pricing, quantity, destination and business requirements — so you can move from an idea to practical sourcing options.',
  /**
   * Image direction (brief): a documentary photograph of product sourcing,
   * supplier samples, product inspection, factory materials, product
   * development, or someone reviewing products. NOT a generic handshake.
   * The art direction and crop note live with the slot in `media.js`.
   */
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
    eyebrow: 'PRODUCT SOURCING',
    title: 'Finding a supplier is only the beginning.',
    paragraphs: [
      'Product sourcing is about more than finding a product that looks right online. The supplier, specifications, pricing, quantity, customization requirements and production capabilities all affect whether a sourcing option actually works for your business.',
      'Sourden researches and compares suitable sourcing options based on the requirements you provide, helping you move from a product idea to suppliers you can evaluate and work with.',
    ],
  },

  /* ---------------------------------------------------------------- 03 --- */
  {
    type: 'checkList',
    tone: 'ivory',
    eyebrow: 'WHAT WE SOURCE',
    title: 'From standard products to specific requirements.',
    description:
      'We work across a wide range of product categories and can research both standard products and more specific sourcing requirements.',
    /**
     * NINE CATEGORIES, MERGED FROM `industries.js`.
     *
     * The brief lists them with the same nine names in the same order, with one
     * exception: it writes the last one as "Clothing, Shoes & Bags" where the
     * rest of the site (homepage grid, footer column, `/industries`) says
     * "Apparel, Footwear & Bags". Two names for one category on two pages of
     * one site is exactly the drift this project merges data to avoid, and the
     * category registry is the older, published name. Flagged to the business —
     * if "Clothing, Shoes & Bags" is preferred, rename it in `industries.js`
     * and every surface follows.
     *
     * Deriving also keeps this page's promise honest: the copy above says
     * Sourden works beyond the list, and the note below invites a specific
     * enquiry. This is a set of entry points, not a catalogue.
     */
    items: industries.map((category) => category.title),
    note: 'Looking for something specific? Tell us what you need.',
    foot: { label: 'Start a Sourcing Request', href: '/sourcing-request' },
  },

  /* ---------------------------------------------------------------- 04 --- */
  {
    type: 'reviewGrid',
    tone: 'white',
    eyebrow: 'OUR SOURCING CRITERIA',
    title: 'The right supplier depends on more than price.',
    description: 'When researching suppliers, we consider the factors that matter to the specific project.',
    /**
     * The brief's instruction on this section is that it must NOT imply every
     * factor can always be independently verified. So these are written as the
     * questions we ask of a supplier, never as things already confirmed — which
     * is also why no item says "verified", "checked" or "confirmed".
     */
    items: [
      {
        title: 'Product Fit',
        description: 'Does the supplier offer the product, specifications or customization requirements you need?',
      },
      {
        title: 'Target Pricing',
        description: "How does the supplier's quotation compare with your target price and expected order volume?",
      },
      {
        title: 'MOQ',
        description: 'What minimum order quantity does the supplier require, and does it fit your current stage?',
      },
      {
        title: 'Production Capability',
        description:
          'Can the supplier support the product type, specifications, quantity and production requirements?',
      },
      {
        title: 'Lead Time',
        description: 'What production and preparation timeline should you expect?',
      },
      {
        title: 'Communication',
        description:
          'Can the supplier communicate clearly about specifications, pricing, production and order details?',
      },
      {
        title: 'Customization',
        description:
          'If you need private labeling, packaging, materials, dimensions or other changes, can the supplier support them?',
      },
    ],
  },

  /* ---------------------------------------------------------------- 05 --- */
  {
    type: 'process',
    tone: 'ink',
    eyebrow: 'HOW IT WORKS',
    title: 'From product idea to sourcing options.',
    /**
     * Numbers are derived from the array order (01…05), never typed — a step
     * cannot be numbered wrongly or duplicated.
     */
    steps: [
      { label: 'Understand', description: 'We review your product requirements, quantity, target price, destination and other relevant information.' },
      { label: 'Research', description: 'We research suppliers and products that match the project requirements.' },
      { label: 'Compare', description: 'We compare relevant options based on product fit, pricing, MOQ, capabilities and other practical factors.' },
      { label: 'Quote', description: 'We collect and organize supplier quotations and relevant sourcing information.' },
      { label: 'Move Forward', description: 'You decide which option makes sense, and we can continue with verification, purchasing and the next stages of the process.' },
    ],
  },

  /* ---------------------------------------------------------------- 06 --- */
  {
    type: 'checkList',
    tone: 'white',
    eyebrow: 'STARTING A REQUEST',
    title: 'The more specific the brief, the better.',
    description:
      "You don't need to know the supplier or the exact sourcing solution. Start with what you know.",
    items: [
      'Product name or description',
      'Product images or reference links',
      'Specifications or dimensions',
      'Material requirements',
      'Estimated quantity',
      'Target price, if available',
      'Customization or branding requirements',
      'Destination country and city',
      'Expected order frequency, if known',
    ],
    note: "Don't have all the information yet? That's okay. Start with the basics and we can clarify the requirements with you.",
    foot: { label: 'Start a Sourcing Request', href: '/sourcing-request' },
  },

  /* ---------------------------------------------------------------- 07 --- */
  {
    type: 'prose',
    tone: 'ivory',
    eyebrow: 'SOURCE AT YOUR SCALE',
    title: 'Start with the quantity that makes sense for your business.',
    /**
     * MOQ WORDING IS LOAD-BEARING. The only truthful statement available is
     * that Sourden does not impose its OWN minimum. It must never become "no
     * MOQ from Chinese factories", "MOQ: 0", or anything implying every Chinese
     * supplier accepts small quantities — the brief says so explicitly for this
     * section. Same rule as `audiences.js` and `services-page.js`.
     */
    paragraphs: [
      "Sourden does not impose its own fixed minimum order quantity. The practical MOQ will depend on the product and supplier, but we'll work with you to identify sourcing options that fit your current requirements.",
    ],
  },

  /* ---------------------------------------------------------------- 08 --- */
  {
    type: 'chain',
    tone: 'white',
    eyebrow: 'AFTER SOURCING',
    title: 'Sourcing can continue beyond the first quotation.',
    description:
      'Once suitable sourcing options have been identified, you can choose to continue with supplier verification, purchasing, quality control and shipping through Sourden.',
    /**
     * The five stages are built by `chainFor(slug)` from `services.js`, so this
     * page never names another service and the current stage is marked for it.
     * The section deliberately does not present the chain as a required
     * sequence (cross-page requirement §1): a client may start at any stage.
     */
  },

  /* ---------------------------------------------------------------- 09 --- */
  {
    type: 'faq',
    eyebrow: 'FAQ',
    title: 'Questions about product sourcing.',
    items: [
      {
        question: 'Can you source a product if I only have a picture?',
        answer:
          'Yes. Product images, links or basic descriptions can be useful starting points. The more information you can provide about specifications, quantity and destination, the more precise the sourcing research can be.',
      },
      {
        question: 'Do I need to know the supplier before contacting you?',
        answer:
          'No. You can start with the product itself. We can research suitable suppliers based on your requirements.',
      },
      {
        question: 'Can you source custom products?',
        answer:
          'Yes. Depending on the product, we can research suppliers that support customization, private labeling, packaging and other specific requirements.',
      },
      {
        question: 'Can you source products with a small order quantity?',
        answer:
          "Sourden does not impose its own fixed MOQ. However, the practical MOQ depends on the product and supplier. We'll look for options that fit your requirements where possible.",
      },
      {
        question: 'Can you help compare multiple suppliers?',
        answer:
          'Yes. Supplier comparison can include product fit, pricing, MOQ, lead time, capabilities and other relevant sourcing factors.',
      },
      {
        question: 'What happens after you find a supplier?',
        answer:
          'Depending on your needs, we can continue with supplier verification, purchasing, quality control and shipping.',
      },
    ],
  },
];

/* ===========================================================================
   10 — FINAL CTA
   ---------------------------------------------------------------------------
   One primary action (the site-wide `primaryCta`). The copy differs from the
   `/services` page's closing band on purpose: a visitor who has just read one
   service in depth has a different question in mind than one who has only seen
   the service list.
   =========================================================================== */

export const finalCta = {
  eyebrow: 'START WITH A REQUEST',
  title: 'Have a product in mind?',
  description: "Tell us what you're looking for. We'll research the sourcing options and take it from there.",
};

/* ===========================================================================
   THE PAGE OBJECT
   ---------------------------------------------------------------------------
   What `ServiceDetailPage` consumes and what `detailPages` in
   `service-detail.js` registers. Assembled here so the shape the shell expects
   is stated next to the copy that fills it, and so the parts above stay
   individually importable by tooling.
   =========================================================================== */

export const productSourcing = { slug, meta, hero, sections, finalCta };
