/**
 * SOURDEN — /services/supplier-verification
 * ---------------------------------------------------------------------------
 * Every editable word on the Supplier Verification detail page. Part of the
 * five-page architecture documented in `service-detail.js` and based on the
 * five-page brief (PAGE 2).
 *
 * WHAT IS NOT IN THIS FILE
 *   · Service names, numbers, URLs — merged from `services.js`.
 *   · The primary CTA ("Start a Sourcing Request" → `/sourcing-request`) and
 *     the secondary CTA ("View All Services" → `/services`) — declared once in
 *     `service-detail.js`, because cross-page requirement §2 fixes both.
 *   · The two cross-service links in §06 and the two comparison labels —
 *     derived from the registry via `serviceLink()` and `chainLabel()`.
 *
 * ── COPY THE BRIEF DID NOT SUPPLY ──────────────────────────────────────────
 * The brief for this page gives headings for §02, §03 and §05–§07 but no
 * eyebrow for most sections, no heading for §04, and no answers for the FAQ
 * (only the questions). Those gaps are filled to the minimum the page
 * architecture needs, using page 1's vocabulary, and each one is marked
 * 〔added〕 below so it can be reviewed rather than discovered:
 *   · §04 heading — the process band needs an H2 like every other section.
 *   · §05 and §06 eyebrows — page 1 uses a label eyebrow on every section.
 *   · §06 heading — the section had a label but no sentence.
 *   · All seven FAQ answers — the brief lists the questions and says only that
 *     answers must be factual and avoid absolute guarantees.
 * Eyebrows for §02 (the service name) and §04 (`HOW IT WORKS`) are NOT
 * additions: they are the pattern page 1 already established for those two
 * section types.
 *
 * ── CLAIMS RULE (cross-page requirement §4) ────────────────────────────────
 * §03's brief bans "guaranteed supplier", "100% safe", "risk-free", "fully
 * trustworthy" and "guaranteed factory", and §04 states outright that
 * verification cannot eliminate every risk. Nothing here asserts a supplier
 * count, a success rate, years in business, a certification or a testimonial,
 * and the FAQ says "no" plainly where the honest answer is no.
 *
 * ── TONE PER SECTION ───────────────────────────────────────────────────────
 * Stated on every section so the ivory → white → … → ink rhythm is visible
 * here rather than buried in a stylesheet. Hero ivory, process band ink, FAQ
 * ivory, and the rest alternate.
 * ---------------------------------------------------------------------------
 */

import { chainLabel, serviceLink } from './service-links.js';

export const slug = 'supplier-verification';

/* ===========================================================================
   SEO — brief PAGE 2 §SEO. Both strings are mandated verbatim.
   =========================================================================== */

export const meta = {
  title: 'China Supplier Verification | SOURDEN',
  description:
    'SOURDEN helps evaluate Chinese suppliers based on product fit, capabilities, MOQ, pricing, lead times and relevant supplier information.',
};

/* ===========================================================================
   01 — HERO
   =========================================================================== */

export const hero = {
  eyebrow: 'SUPPLIER VERIFICATION',
  title: 'Know more about the supplier before you move forward.',
  description:
    'Finding a supplier is only the beginning. We help evaluate supplier information, product fit, capabilities, pricing, MOQ and other relevant factors before you commit to an order.',
  /**
   * Image direction (brief): a real factory, production floor, supplier
   * facility, worker inspecting products, factory samples or documentation.
   * Art direction and crop note live with the slot in `media.js`.
   */
  image: {
    key: 'serviceSupplierVerificationHero',
    caption: 'SUPPLIER CAPABILITY REVIEW',
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
    eyebrow: 'SUPPLIER VERIFICATION',
    title: "A supplier listing doesn't tell you everything.",
    paragraphs: [
      "Online supplier listings can provide useful information, but they don't always tell you whether a supplier is the right fit for your particular product and order.",
      'Supplier verification helps you look beyond the listing and understand the information that matters before moving forward.',
    ],
  },

  /* ---------------------------------------------------------------- 03 --- */
  {
    type: 'reviewGrid',
    tone: 'ivory',
    eyebrow: 'WHAT WE REVIEW',
    title: 'The supplier factors we look at.',
    /**
     * Eight factors — four per column at desktop. Every item is phrased as
     * something reviewed, assessed or clarified, never as something guaranteed:
     * the brief bans "guaranteed supplier", "100% safe", "risk-free", "fully
     * trustworthy" and "guaranteed factory" on this section specifically.
     */
    items: [
      {
        title: 'Supplier Identity & Information',
        description: 'Review available supplier information and relevant business details.',
      },
      {
        title: 'Product Capability',
        description: 'Assess whether the supplier appears suitable for the product and specifications you require.',
      },
      {
        title: 'Production Capability',
        description: "Consider production capabilities, order requirements and the supplier's stated capacity.",
      },
      {
        title: 'MOQ',
        description: "Understand the supplier's minimum order requirements.",
      },
      {
        title: 'Pricing',
        description: 'Review quotations in the context of product specifications and order quantity.',
      },
      {
        title: 'Lead Time',
        description: 'Understand stated production and preparation timelines.',
      },
      {
        title: 'Communication',
        description: 'Evaluate how clearly the supplier responds to product, pricing and order questions.',
      },
      {
        title: 'Customization',
        description: 'Check whether the supplier supports relevant customization, packaging or branding requirements.',
      },
    ],
  },

  /* ---------------------------------------------------------------- 04 --- */
  {
    type: 'process',
    tone: 'ink',
    eyebrow: 'HOW IT WORKS',
    /** 〔added〕 — the brief gave the five steps but no heading for the band. */
    title: 'How the verification process works.',
    /** Numbers derive from array order (01…05), never typed. */
    steps: [
      { label: 'Collect', description: 'Gather supplier information and available documentation.' },
      { label: 'Review', description: 'Review the supplier against your product and order requirements.' },
      { label: 'Clarify', description: 'Ask relevant questions about products, pricing, MOQ, production and other requirements.' },
      { label: 'Compare', description: 'Compare the supplier with other relevant options where appropriate.' },
      { label: 'Decide', description: 'Provide the available information so you can make an informed sourcing decision.' },
    ],
    /**
     * The brief's own "Important" line for this page. It belongs on the process
     * band rather than in the FAQ because it qualifies the whole method, not one
     * question — and it is the sentence that keeps this page honest.
     */
    note: 'Supplier verification reduces uncertainty, but it cannot eliminate every sourcing risk.',
  },

  /* ---------------------------------------------------------------- 05 --- */
  {
    type: 'checkList',
    tone: 'ivory',
    /** 〔added〕 eyebrow. */
    eyebrow: 'WHEN IT HELPS',
    /** The brief's section label, written as a sentence. */
    title: 'When verification is particularly useful.',
    items: [
      'First-time supplier',
      'Larger order',
      'Custom product',
      'Private-label product',
      'New product category',
      'Significant upfront payment',
      'Long-term supplier relationship',
      'Complex specifications',
    ],
  },

  /* ---------------------------------------------------------------- 06 --- */
  {
    type: 'split',
    tone: 'white',
    /** 〔added〕 eyebrow. */
    eyebrow: 'THE DIFFERENCE',
    /** 〔added〕 — the brief named the section but gave no sentence for it. */
    title: 'Verification vs. product sourcing.',
    /**
     * The two labels are the registry's chain words, not typed here, so this
     * comparison cannot end up calling a service something the rail above it
     * does not.
     */
    columns: [
      {
        label: chainLabel('product-sourcing').toUpperCase(),
        note: 'Focus:',
        text: 'Finding suitable products and suppliers.',
      },
      {
        label: chainLabel('supplier-verification').toUpperCase(),
        note: 'Focus:',
        text: 'Evaluating a supplier before moving forward.',
      },
    ],
    note: 'You can use either service independently or combine them as part of a complete sourcing process.',
    links: [serviceLink('product-sourcing'), serviceLink('purchasing-order-management')],
  },

  /* ---------------------------------------------------------------- 07 --- */
  {
    type: 'faq',
    eyebrow: 'FAQ',
    title: 'Questions about supplier verification.',
    /**
     * The brief lists the seven questions and requires the answers to be
     * factual and free of absolute guarantees. Two of them therefore answer
     * "no" outright — see Q5 and Q4, which says what can be confirmed rather
     * than promising a determination.
     */
    items: [
      {
        question: 'What does supplier verification include?',
        answer:
          'It can include reviewing available supplier information, product and production capability, MOQ, pricing, lead times and communication, depending on the product and the order. The scope is agreed with you before the review begins.',
      },
      {
        question: 'Can you verify a supplier I already found?',
        answer:
          'Yes. Share the supplier information you have and we can review it against your product and order requirements.',
      },
      {
        question: 'Can you verify a supplier from Alibaba or another platform?',
        answer:
          'Yes. A platform listing is a starting point; we review the information available and clarify the relevant product, pricing and order details with the supplier.',
      },
      {
        question: 'Can you check whether a supplier is a factory or trading company?',
        answer:
          'We can ask the supplier and review the information available to clarify the nature of the business. What can be established depends on the information the supplier provides, so the answer reflects what can be confirmed rather than what is assumed.',
      },
      {
        question: 'Does supplier verification guarantee the supplier is reliable?',
        answer:
          'No. Verification reduces uncertainty by clarifying the information available, but it cannot eliminate every sourcing risk or predict how a supplier will perform on every future order.',
      },
      {
        question: 'Can you compare several suppliers?',
        answer:
          'Yes. Suppliers can be compared on product fit, capabilities, MOQ, pricing, lead times and other factors relevant to your order.',
      },
      {
        question: 'Can you continue managing the order after verification?',
        answer:
          'Yes. Depending on what you need, we can continue with purchasing, quality control and shipping.',
      },
    ],
  },
];

/* ===========================================================================
   08 — FINAL CTA
   =========================================================================== */

export const finalCta = {
  eyebrow: 'START WITH A REQUEST',
  title: "Have a supplier you're considering?",
  description:
    "Share the supplier information and your requirements. We'll help you evaluate what needs to be checked before you move forward.",
};

/* ===========================================================================
   THE PAGE OBJECT
   =========================================================================== */

export const supplierVerification = { slug, meta, hero, sections, finalCta };
