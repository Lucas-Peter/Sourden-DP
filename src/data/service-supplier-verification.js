/**
 * SOURDEN — /services/supplier-verification
 * ---------------------------------------------------------------------------
 * Every editable word on the Supplier Verification detail page. Part of the
 * five-page architecture documented in `service-detail.js`, with copy mandated
 * verbatim by the five-page brief (PAGE 2).
 *
 * ── THE UNIFIED STRUCTURE (2026-10-03) ─────────────────────────────────────
 * Same eight-section sequence as the other four pages, service-specific copy.
 * The older "verification vs. sourcing" comparison and the eight-factor
 * review grid were folded into the standard What We Handle shape.
 *
 * ── WHAT IS NOT IN THIS FILE ───────────────────────────────────────────────
 *   · Service names, numbers, URLs — merged from `services.js`.
 *   · The primary and secondary CTAs — declared once in `service-links.js`.
 *   · The four Related Services links — derived by `relatedServices(slug)`.
 *
 * ── CLAIMS RULE (cross-page requirement §4) ────────────────────────────────
 * The brief bans "guaranteed supplier", "100% safe", "risk-free", "fully
 * trustworthy" and "guaranteed factory". Nothing here asserts a supplier count,
 * a success rate, years in business, a certification or a testimonial, and the
 * FAQ says "no" plainly where the honest answer is no. The What You Can Expect
 * note states that verification cannot guarantee future performance.
 *
 * ── COPY THE BRIEF DID NOT SUPPLY ──────────────────────────────────────────
 * Marked 〔added〕: the headings for What We Handle, How It Works, Related
 * Services and the FAQ band. They are filled to the minimum the page needs,
 * reusing the prior reviewed headings.
 * ---------------------------------------------------------------------------
 */

export const slug = 'supplier-verification';

/* ===========================================================================
   SEO — brief PAGE 2 §SEO. Both strings are mandated verbatim.
   =========================================================================== */

export const meta = {
  title: 'China Supplier Verification | SOURDEN',
  description:
    'SOURDEN helps buyers evaluate Chinese suppliers by reviewing supplier capabilities, product fit, pricing, MOQ, lead times and other relevant sourcing factors.',
};

/* ===========================================================================
   01 — HERO
   =========================================================================== */

export const hero = {
  eyebrow: 'SUPPLIER VERIFICATION',
  title: 'Know more about a supplier before you order.',
  description:
    'We help you evaluate whether a supplier appears suitable for your product, requirements and order before you move forward.',
  /** Documentary photograph — supplier documents, samples, measuring tools.
      Art direction and crop note live with the slot in `media.js`. */
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
    eyebrow: 'WHAT WE DO',
    title: 'Look beyond the product listing.',
    paragraphs: [
      'A supplier may have the right product photos and an attractive price, but that does not necessarily mean they are the right supplier for your order.',
      'We review practical factors that can affect supplier suitability and help you compare your options before making a purchasing decision.',
    ],
  },

  /* ---------------------------------------------------------------- 03 --- */
  {
    type: 'reviewGrid',
    tone: 'ivory',
    eyebrow: 'WHAT WE HANDLE',
    /** 〔added〕 — the brief gives the factors but no heading for the section. */
    title: 'The supplier factors we look at.',
    items: [
      {
        title: 'Supplier Capability',
        description: "Review available information about the supplier's products, capabilities and business focus.",
      },
      {
        title: 'Product Fit',
        description: 'Assess whether the supplier appears capable of meeting your product specifications and requirements.',
      },
      {
        title: 'MOQ & Pricing',
        description: 'Compare minimum order quantities, quotations and relevant pricing conditions.',
      },
      {
        title: 'Lead Time',
        description: 'Check expected production or preparation times when this information is available.',
      },
      {
        title: 'Customization',
        description: 'Confirm whether the supplier can support requested customization, branding or packaging requirements.',
      },
      {
        title: 'Communication',
        description: 'Communicate with suppliers to clarify product and order requirements when needed.',
      },
    ],
  },

  /* ---------------------------------------------------------------- 04 --- */
  {
    type: 'process',
    tone: 'ink',
    eyebrow: 'HOW IT WORKS',
    /** 〔added〕 — the brief gives the five steps but no heading for the band. */
    title: 'How the verification process works.',
    /** Numbers derive from array order (01…05), never typed. */
    steps: [
      { label: 'Define Your Requirements', description: 'We first understand what you need the supplier to provide.' },
      { label: 'Review Supplier Information', description: 'We research and collect relevant supplier and product information.' },
      { label: 'Ask the Right Questions', description: 'Where necessary, we communicate with suppliers to clarify important details.' },
      { label: 'Compare', description: 'We compare suppliers based on the factors relevant to your project.' },
      { label: 'Decide', description: 'You review the information and decide whether and how to proceed.' },
    ],
  },

  /* ---------------------------------------------------------------- 05 --- */
  {
    type: 'checkList',
    tone: 'white',
    eyebrow: 'WHEN YOU NEED THIS',
    title: 'Not sure whether a supplier is the right fit?',
    items: [
      'You found a supplier online but want more information before ordering.',
      'You have several suppliers and need to compare them.',
      "A supplier's product looks right, but you need to clarify specifications.",
      'You need a supplier capable of customization.',
      'You want to reduce uncertainty before placing an order.',
    ],
  },

  /* ---------------------------------------------------------------- 06 --- */
  {
    type: 'checkList',
    tone: 'ivory',
    eyebrow: 'WHAT YOU CAN EXPECT',
    title: 'A more informed supplier decision.',
    items: [
      'Supplier information',
      'Product suitability information',
      'MOQ and pricing details',
      'Lead-time information',
      'Customization information when applicable',
      'Relevant comparison points',
    ],
    note: 'Supplier verification can help reduce uncertainty, but it does not guarantee future supplier performance or eliminate all sourcing risks.',
  },

  /* ---------------------------------------------------------------- 07 --- */
  {
    type: 'relatedServices',
    tone: 'white',
    eyebrow: 'RELATED SERVICES',
    /** 〔added〕 — the brief gives the links but no heading for the section. */
    title: 'Need support beyond supplier verification?',
  },

  /* ---------------------------------------------------------------- 08 --- */
  {
    type: 'faq',
    eyebrow: 'FAQ',
    /** 〔added〕 — the brief gives the questions but no heading for the band. */
    title: 'Questions about supplier verification.',
    items: [
      {
        question: 'Can you verify a supplier I already found?',
        answer:
          'Yes. If you already have a supplier, you can provide the supplier information and tell us what you want to understand or verify.',
      },
      {
        question: 'Can you confirm whether a supplier is a factory or trading company?',
        answer:
          'We can review available information and communicate with the supplier to better understand its business and supply capabilities. However, the available evidence may vary by supplier.',
      },
      {
        question: 'Does supplier verification guarantee the supplier?',
        answer:
          'No. Verification can help reduce uncertainty, but it cannot guarantee supplier performance, product quality or future business conduct.',
      },
      {
        question: 'Can you compare multiple suppliers?',
        answer:
          'Yes. Comparing multiple suppliers can be useful when pricing, MOQ, product specifications or production capabilities differ.',
      },
    ],
    foot: { label: 'View All FAQs', href: '/faq' },
  },
];

/* ===========================================================================
   09 — FINAL CTA
   =========================================================================== */

export const finalCta = {
  eyebrow: 'BEFORE YOU ORDER',
  title: 'Want to understand your supplier options?',
  description: "Send us the product and supplier information you have, and we'll help you determine what needs to be checked.",
};

/* ===========================================================================
   THE PAGE OBJECT
   =========================================================================== */

export const supplierVerification = { slug, meta, hero, sections, finalCta };
