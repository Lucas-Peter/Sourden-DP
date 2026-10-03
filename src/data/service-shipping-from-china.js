/**
 * SOURDEN — /services/shipping-from-china
 * ---------------------------------------------------------------------------
 * Every editable word on the Shipping from China detail page. Part of the
 * five-page architecture documented in `service-detail.js`, with copy mandated
 * verbatim by the five-page brief (PAGE 5).
 *
 * ── THE UNIFIED STRUCTURE (2026-10-03) ─────────────────────────────────────
 * Same eight-section sequence as the other four pages, service-specific copy.
 * The older cost-factors and shipping-vs-customs sections were folded into the
 * What You Can Expect note and the FAQ — the destination's rules stay with the
 * destination.
 *
 * ── WHAT IS NOT IN THIS FILE ───────────────────────────────────────────────
 *   · Service names, numbers, URLs — merged from `services.js`.
 *   · The primary and secondary CTAs — declared once in `service-links.js`.
 *   · The four Related Services links — derived by `relatedServices(slug)`.
 *
 * ── CLAIMS RULE (cross-page requirement §4) ────────────────────────────────
 * No shipment volume, transit-time average, carrier partner list or
 * certification, and no delivery date — transit timing depends on the method,
 * route and destination. The FAQ states that duties and taxes depend on the
 * shipping arrangement.
 *
 * ── COPY THE BRIEF DID NOT SUPPLY ──────────────────────────────────────────
 * Marked 〔added〕: the headings for What We Handle, How It Works, Related
 * Services, the FAQ band, and the closing band's eyebrow.
 * ---------------------------------------------------------------------------
 */

export const slug = 'shipping-from-china';

/* ===========================================================================
   SEO — brief PAGE 5 §SEO. Both strings are mandated verbatim.
   =========================================================================== */

export const meta = {
  title: 'Shipping from China | International Shipping Coordination | SOURDEN',
  description:
    'SOURDEN helps coordinate shipping from China, including shipping method selection, supplier pickup, consolidation and international delivery arrangements.',
};

/* ===========================================================================
   01 — HERO
   =========================================================================== */

export const hero = {
  eyebrow: 'SHIPPING FROM CHINA',
  title: 'Move your products from China to your destination.',
  description:
    'We can help coordinate the shipping stage after your products are ready, connecting suppliers, shipments and logistics providers.',
  /** Documentary photograph — prepared cartons, packaging, shipping documents.
      Art direction and crop note live with the slot in `media.js`. */
  image: {
    key: 'serviceShippingFromChinaHero',
    caption: 'FREIGHT PREPARATION',
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
    title: 'Connect the sourcing process to shipping.',
    paragraphs: [
      'Getting products produced is only part of the process. Once an order is ready, the shipment needs to be coordinated from the supplier to its final destination.',
      'We can help organize the shipping process based on the products, shipment size, destination and available logistics options.',
    ],
  },

  /* ---------------------------------------------------------------- 03 --- */
  {
    type: 'reviewGrid',
    tone: 'ivory',
    eyebrow: 'WHAT WE HANDLE',
    /** 〔added〕 — the brief gives the tasks but no heading for the section. */
    title: 'The parts of the shipment we coordinate.',
    items: [
      {
        title: 'Shipping Method',
        description: 'Help evaluate appropriate shipping options based on the shipment and destination.',
      },
      {
        title: 'Supplier Coordination',
        description: 'Coordinate with suppliers regarding pickup, packing and shipment readiness.',
      },
      {
        title: 'Consolidation',
        description: 'When appropriate, coordinate products from multiple suppliers for consolidated shipping.',
      },
      {
        title: 'Shipment Information',
        description: 'Collect relevant shipment details needed for the logistics process.',
      },
      {
        title: 'Logistics Coordination',
        description: 'Coordinate with the relevant logistics provider for the shipment.',
      },
      {
        title: 'Delivery Arrangement',
        description: 'Depending on the available service, shipments may be arranged for delivery to the specified destination.',
      },
    ],
  },

  /* ---------------------------------------------------------------- 04 --- */
  {
    type: 'process',
    tone: 'ink',
    eyebrow: 'HOW IT WORKS',
    /** 〔added〕 — the brief gives the five steps but no heading for the band. */
    title: 'From preparation to the destination side.',
    /** Numbers derive from array order (01…05), never typed. */
    steps: [
      { label: 'Confirm the Shipment', description: 'Confirm products, quantities, dimensions, weight and destination information.' },
      { label: 'Review Shipping Options', description: 'Consider available shipping methods and logistics arrangements.' },
      { label: 'Prepare the Goods', description: 'Coordinate with suppliers regarding packing and shipment readiness.' },
      { label: 'Arrange Shipment', description: 'Coordinate pickup and shipment with the relevant logistics provider.' },
      { label: 'Track the Process', description: 'Follow up on relevant shipment information and updates.' },
    ],
  },

  /* ---------------------------------------------------------------- 05 --- */
  {
    type: 'checkList',
    tone: 'white',
    eyebrow: 'WHEN YOU NEED THIS',
    title: 'Need help moving goods out of China?',
    items: [
      'Your products are ready to ship.',
      'You have multiple suppliers and want to consolidate shipments.',
      'You are not familiar with shipping options from China.',
      'You need help coordinating supplier pickup.',
      'You want one partner to connect sourcing and logistics.',
    ],
  },

  /* ---------------------------------------------------------------- 06 --- */
  {
    type: 'checkList',
    tone: 'ivory',
    eyebrow: 'WHAT YOU CAN EXPECT',
    title: 'A more organized shipping process.',
    items: [
      'Shipping option coordination',
      'Supplier pickup coordination',
      'Shipment consolidation when applicable',
      'Shipment information coordination',
      'Logistics provider coordination',
      'Relevant shipping updates',
    ],
    note: 'Shipping costs and transit times depend on factors such as product type, shipment size, destination, route and logistics provider.',
  },

  /* ---------------------------------------------------------------- 07 --- */
  {
    type: 'relatedServices',
    tone: 'white',
    eyebrow: 'RELATED SERVICES',
    /** 〔added〕 — the brief gives the links but no heading for the section. */
    title: 'Need support beyond shipping?',
  },

  /* ---------------------------------------------------------------- 08 --- */
  {
    type: 'faq',
    eyebrow: 'FAQ',
    /** 〔added〕 — the brief gives the questions but no heading for the band. */
    title: 'Questions about shipping from China.',
    items: [
      {
        question: 'Can you ship directly to my country?',
        answer:
          'Shipping arrangements depend on the product, destination and available logistics services. We can review the requirements and discuss suitable options.',
      },
      {
        question: 'Can you consolidate products from different suppliers?',
        answer: 'When the products, timing and logistics arrangements allow, consolidation may be possible.',
      },
      {
        question: 'Can you arrange door-to-door shipping?',
        answer: 'Door-to-door arrangements may be available depending on the destination, product and logistics provider.',
      },
      {
        question: 'How long does shipping take?',
        answer: 'Transit times vary depending on the shipping method, route, destination, shipment and logistics provider.',
      },
      {
        question: 'Are customs duties and taxes included?',
        answer:
          'That depends on the specific shipping arrangement. Duties, taxes and other destination charges should be confirmed as part of the shipping quotation.',
      },
    ],
    foot: { label: 'View All FAQs', href: '/faq' },
  },
];

/* ===========================================================================
   09 — FINAL CTA
   =========================================================================== */

export const finalCta = {
  /** 〔added〕 — the brief gives the heading and text but no eyebrow. */
  eyebrow: 'START WITH A REQUEST',
  title: 'Ready to move your products from China?',
  description: "Tell us what you're shipping, where it needs to go and what support you need.",
};

/* ===========================================================================
   THE PAGE OBJECT
   =========================================================================== */

export const shippingFromChina = { slug, meta, hero, sections, finalCta };
