/**
 * SOURDEN — /services/purchasing-order-management
 * ---------------------------------------------------------------------------
 * Every editable word on the Purchasing Management detail page. Part of the
 * five-page architecture documented in `service-detail.js`, with copy mandated
 * verbatim by the five-page brief (PAGE 3).
 *
 * ── THE ONE PLACE THIS PAGE DELIBERATELY DIFFERS FROM THE BRIEF ────────────
 * The brief writes the hero eyebrow as "PURCHASING & ORDER MANAGEMENT". The
 * site's display name is **Purchasing Management** — the longer name wrapped at
 * 390px and broke the arrow alignment on `/services`, so the site was renamed
 * and only the display layer follows it. The SEO title keeps the long wording,
 * because a title tag is a search string, not a display name.
 *
 * ── THE UNIFIED STRUCTURE (2026-10-03) ─────────────────────────────────────
 * Same eight-section sequence as the other four pages, service-specific copy.
 *
 * ── WHAT IS NOT IN THIS FILE ───────────────────────────────────────────────
 *   · Service names, numbers, URLs — merged from `services.js`.
 *   · The primary and secondary CTAs — declared once in `service-links.js`.
 *   · The four Related Services links — derived by `relatedServices(slug)`.
 *
 * ── CLAIMS RULE (cross-page requirement §4) ────────────────────────────────
 * No client count, order volume, success rate or certification; nothing
 * promises a production date or real-time tracking. The What You Can Expect
 * note keeps approval responsibility with the buyer.
 *
 * ── COPY THE BRIEF DID NOT SUPPLY ──────────────────────────────────────────
 * Marked 〔added〕: the headings for What We Handle, How It Works, Related
 * Services, the FAQ band, and the closing band's eyebrow.
 * ---------------------------------------------------------------------------
 */

export const slug = 'purchasing-order-management';

/* ===========================================================================
   SEO — brief PAGE 3 §SEO. Both strings are mandated verbatim.
   =========================================================================== */

export const meta = {
  title: 'Purchasing & Order Management in China | SOURDEN',
  description:
    'SOURDEN coordinates purchasing and supplier communication in China, from quotation confirmation and order placement to production follow-up and order management.',
};

/* ===========================================================================
   01 — HERO
   =========================================================================== */

export const hero = {
  /* The site's display name, not the brief's "PURCHASING & ORDER MANAGEMENT" —
     see the header note. */
  eyebrow: 'PURCHASING MANAGEMENT',
  title: 'Let us manage the order with your supplier.',
  description:
    "Once you've chosen a supplier, SOURDEN can coordinate purchasing, supplier communication, production follow-up and order details from China.",
  /** Documentary photograph — order documents, packaging, coordination workspace.
      Art direction and crop note live with the slot in `media.js`. */
  image: {
    key: 'servicePurchasingManagementHero',
    caption: 'PRODUCTION FOLLOW-UP',
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
    title: 'One partner between you and the supplier.',
    paragraphs: [
      'Managing a China order can involve repeated communication, changing details, production follow-up and coordination between different parties.',
      "We help organize that process so you don't have to manage every supplier interaction yourself.",
    ],
  },

  /* ---------------------------------------------------------------- 03 --- */
  {
    type: 'reviewGrid',
    tone: 'ivory',
    eyebrow: 'WHAT WE HANDLE',
    /** 〔added〕 — the brief gives the tasks but no heading for the section. */
    title: 'The parts of the order we take on.',
    items: [
      {
        title: 'Quotation Confirmation',
        description: 'Confirm product details, quantities, pricing and other order information before purchasing.',
      },
      {
        title: 'Supplier Communication',
        description: 'Communicate with suppliers regarding product and order requirements.',
      },
      {
        title: 'Order Placement',
        description: 'Coordinate the purchasing process once the order details have been confirmed.',
      },
      {
        title: 'Production Follow-Up',
        description: 'Follow up with suppliers on production progress and relevant order updates.',
      },
      {
        title: 'Packaging & Labeling',
        description: 'Coordinate agreed packaging, labeling or other order requirements when applicable.',
      },
      {
        title: 'Issue Coordination',
        description: 'Help communicate with the supplier when questions or issues arise during the order process.',
      },
    ],
  },

  /* ---------------------------------------------------------------- 04 --- */
  {
    type: 'process',
    tone: 'ink',
    eyebrow: 'HOW IT WORKS',
    /** 〔added〕 — the brief gives the five steps but no heading for the band. */
    title: 'From confirmation through to shipment.',
    /** Numbers derive from array order (01…05), never typed. */
    steps: [
      { label: 'Confirm', description: 'Confirm the supplier, product specifications, quantity and quotation.' },
      { label: 'Place the Order', description: 'Coordinate the order with the supplier.' },
      { label: 'Follow Up', description: 'Monitor production progress and communicate relevant updates.' },
      { label: 'Confirm Before Shipment', description: 'Coordinate agreed product, quantity, packaging or quality requirements before shipment.' },
      { label: 'Ship', description: 'Once the order is ready, coordinate the next shipping step.' },
    ],
  },

  /* ---------------------------------------------------------------- 05 --- */
  {
    type: 'checkList',
    tone: 'white',
    eyebrow: 'WHEN YOU NEED THIS',
    title: 'You already have a supplier. You just need someone to manage the process.',
    items: [
      'You already have a supplier in China.',
      "You don't want to communicate with the supplier directly.",
      'You need help following up production.',
      'You have multiple order details that need coordination.',
      'You need someone in China to help manage the purchasing process.',
    ],
  },

  /* ---------------------------------------------------------------- 06 --- */
  {
    type: 'checkList',
    tone: 'ivory',
    eyebrow: 'WHAT YOU CAN EXPECT',
    title: 'Less supplier communication for you.',
    items: [
      'Order detail coordination',
      'Supplier communication',
      'Purchasing coordination',
      'Production follow-up',
      'Packaging and labeling follow-up when applicable',
      'Communication around order issues',
    ],
    note: 'You remain responsible for approving the product, specifications, quotation and order. SOURDEN coordinates the sourcing work around those decisions.',
  },

  /* ---------------------------------------------------------------- 07 --- */
  {
    type: 'relatedServices',
    tone: 'white',
    eyebrow: 'RELATED SERVICES',
    /** 〔added〕 — the brief gives the links but no heading for the section. */
    title: 'Need support beyond purchasing?',
  },

  /* ---------------------------------------------------------------- 08 --- */
  {
    type: 'faq',
    eyebrow: 'FAQ',
    /** 〔added〕 — the brief gives the questions but no heading for the band. */
    title: 'Questions about purchasing and order management.',
    items: [
      {
        question: 'Can you work with a supplier I already have?',
        answer:
          "Yes. You don't have to use SOURDEN to find the supplier. If you already have a suitable supplier, we can discuss helping with purchasing and order coordination.",
      },
      {
        question: 'Can you follow up production?',
        answer: 'Yes. We can communicate with the supplier and follow up on production progress and relevant order details.',
      },
      {
        question: 'Can you handle packaging or labeling requirements?',
        answer: 'Yes, when the supplier is able to provide the requested packaging or labeling, we can help coordinate those requirements.',
      },
      {
        question: 'Who approves the final order?',
        answer: 'You do. We coordinate the process, but you remain responsible for approving the product, specifications, quotation and order.',
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
  title: 'Already have a supplier?',
  description: "Tell us what you need managed, and we'll help determine how we can support the order.",
};

/* ===========================================================================
   THE PAGE OBJECT
   =========================================================================== */

export const purchasingOrderManagement = { slug, meta, hero, sections, finalCta };
