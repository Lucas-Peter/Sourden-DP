/**
 * SOURDEN — /services/purchasing-order-management
 * ---------------------------------------------------------------------------
 * Every editable word on the Purchasing Management detail page. Part of the
 * five-page architecture documented in `service-detail.js` and based on the
 * five-page brief (PAGE 3).
 *
 * ── THE ONE PLACE THIS PAGE DELIBERATELY DIFFERS FROM THE BRIEF ────────────
 * The brief writes the service name as "Purchasing & Order Management" — in the
 * hero eyebrow and in the link label on other pages. The site was renamed to
 * **Purchasing Management** before this page was written, because the longer
 * name wrapped at 390px, pushed the arrow to the end of the line and broke the
 * five-arrow alignment on `/services`. The slug, the URL and the SEO title are
 * unchanged; only the display layer follows the rename.
 *
 *   · Hero eyebrow      → `PURCHASING MANAGEMENT` (the site's display name)
 *   · SEO title         → the brief's string, verbatim. A title tag is a search
 *                         string, not a display name, and it carries the
 *                         "order management" wording a buyer actually types.
 *   · Cross-service links → labelled by the registry, so they read
 *                         "Purchasing Management" here and everywhere else.
 *
 * ── COPY THE BRIEF DID NOT SUPPLY ──────────────────────────────────────────
 * Marked 〔added〕 below. The brief gave labels and body copy for §02, §05, §07
 * and §08 but no eyebrows for §03–§06, no sentence headings for §03, §04 and
 * §07, and no FAQ answers. Chapter 3's eyebrows for §02 (the service name) and
 * §04 (`HOW IT WORKS`) are the pattern page 1 established, not additions.
 *
 * ── CLAIMS RULE (cross-page requirement §4) ────────────────────────────────
 * The brief's specific instruction for this page is to avoid promising
 * real-time tracking or guaranteed production schedules. Nothing here asserts a
 * client count, an order volume, a success rate or a certification, and no
 * answer in the FAQ promises a date.
 *
 * ── TONE PER SECTION ───────────────────────────────────────────────────────
 * Hero ivory, process band ink, FAQ ivory, the rest alternating.
 * ---------------------------------------------------------------------------
 */

export const slug = 'purchasing-order-management';

/* ===========================================================================
   SEO — brief PAGE 3 §SEO. Both strings are mandated verbatim.
   =========================================================================== */

export const meta = {
  title: 'China Purchasing & Order Management | SOURDEN',
  description:
    'SOURDEN coordinates purchasing, supplier communication, production follow-up and order management for products sourced from China.',
};

/* ===========================================================================
   01 — HERO
   =========================================================================== */

export const hero = {
  eyebrow: 'PURCHASING MANAGEMENT',
  title: 'Keep your China orders moving.',
  description:
    "Once the supplier is chosen, we can coordinate purchasing, supplier communication, production progress and order details so you don't have to manage every step from overseas.",
  /** Image direction (brief): production follow-up, order documents, warehouse,
   *  packaging, goods preparation, factory communication. Art direction and
   *  crop note live with the slot in `media.js`. */
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
    eyebrow: 'PURCHASING MANAGEMENT',
    title: 'Choosing the supplier is not the end of the process.',
    paragraphs: [
      'Once a supplier has been selected, the order still needs to be coordinated. Specifications need to be confirmed, purchasing details need to be communicated, production needs to be followed up and shipment preparation needs to be organized.',
      'Sourden can act as the coordination point between you and the supplier throughout this process.',
    ],
  },

  /* ---------------------------------------------------------------- 03 --- */
  {
    type: 'reviewGrid',
    tone: 'ivory',
    /** The brief's section label, used as the eyebrow. */
    eyebrow: 'WHAT WE HANDLE',
    /** 〔added〕 — the brief named the section but gave no sentence for it. */
    title: 'The parts of the order we take on.',
    /**
     * Eight items — four per column at desktop. Each is a coordination task,
     * phrased as something followed up or confirmed, never as something
     * guaranteed to complete on a given day.
     */
    items: [
      { title: 'Quotation Coordination', description: 'Confirm product details, quantities and supplier quotations.' },
      { title: 'Purchase Coordination', description: 'Coordinate purchasing based on the agreed order requirements.' },
      { title: 'Supplier Communication', description: 'Communicate with suppliers regarding product and order details.' },
      { title: 'Production Follow-Up', description: 'Follow up on production progress and relevant timing.' },
      { title: 'Specification Confirmation', description: 'Confirm agreed product specifications, packaging and other order details.' },
      { title: 'Packaging Coordination', description: 'Coordinate packaging requirements where applicable.' },
      { title: 'Order Progress', description: 'Keep track of important order milestones and communicate relevant updates.' },
      { title: 'Pre-Shipment Coordination', description: 'Coordinate the information and preparation needed before goods are shipped.' },
    ],
  },

  /* ---------------------------------------------------------------- 04 --- */
  {
    type: 'process',
    tone: 'ink',
    eyebrow: 'HOW IT WORKS',
    /** 〔added〕 — the brief gave the five steps but no heading for the band. */
    title: 'From confirmation through to shipment.',
    /** Numbers derive from array order (01…05), never typed. */
    steps: [
      { label: 'Confirm', description: 'Confirm supplier, product specifications, quantity and pricing.' },
      { label: 'Purchase', description: 'Coordinate the purchase order with the supplier.' },
      { label: 'Follow Up', description: 'Track production progress and communicate relevant updates.' },
      { label: 'Check', description: 'Coordinate quality control or other pre-shipment requirements where needed.' },
      { label: 'Prepare', description: 'Coordinate shipment preparation and move the order into the shipping stage.' },
    ],
  },

  /* ---------------------------------------------------------------- 05 --- */
  {
    type: 'prose',
    tone: 'white',
    /** The brief's section label, used as the eyebrow. */
    eyebrow: 'ONE POINT OF CONTACT',
    title: 'One point of contact across the order.',
    paragraphs: [
      'Managing suppliers from overseas can create unnecessary communication and coordination work. Sourden provides one point of contact for the sourcing process, helping keep supplier communication, purchasing and order progress organized.',
    ],
  },

  /* ---------------------------------------------------------------- 06 --- */
  {
    type: 'checkList',
    tone: 'ivory',
    /** 〔added〕 eyebrow. */
    eyebrow: 'WHEN IT HELPS',
    /** The brief's section label, written as a sentence. */
    title: 'When this service is useful.',
    items: [
      'You already have a supplier',
      'You have multiple suppliers',
      'You are placing repeat orders',
      "You don't have a China-based purchasing team",
      'You need someone to communicate with suppliers locally',
      'You need production follow-up',
      'You want purchasing connected with QC and shipping',
    ],
  },

  /* ---------------------------------------------------------------- 07 --- */
  {
    type: 'chain',
    tone: 'white',
    /** The brief's section label, used as the eyebrow. */
    eyebrow: 'CONNECTED SERVICES',
    /** 〔added〕 — the brief gave the links but no sentence heading. */
    title: 'Purchasing sits between verification and inspection.',
    description:
      'Purchasing is often one part of a larger sourcing process. Sourden can coordinate the stages before and after the purchase where required.',
    /**
     * The five stages come from `chainFor(slug)`; the page never names another
     * service. The brief lists four destinations for this section, and the rail
     * shows exactly those four as links — the fifth stage is this page, marked
     * current rather than linked to itself.
     */
  },

  /* ---------------------------------------------------------------- 08 --- */
  {
    type: 'faq',
    eyebrow: 'FAQ',
    title: 'Questions about purchasing and order management.',
    /**
     * The brief lists the seven questions and requires that nothing promises
     * real-time tracking or a guaranteed production schedule. Every date-shaped
     * answer below is therefore about what is communicated, not when.
     */
    items: [
      {
        question: 'Can you purchase from a supplier I already use?',
        answer:
          'Yes. If you already have a supplier, we can work with them directly and coordinate the order from there.',
      },
      {
        question: 'Can you communicate directly with my supplier?',
        answer:
          'Yes. Supplier communication is one of the main parts of this service — product details, order requirements, production progress and shipment preparation.',
      },
      {
        question: 'Can you manage repeat orders?',
        answer:
          'Yes. Repeat orders are usually simpler because the product, specifications and supplier are already established.',
      },
      {
        question: 'Can you follow production progress?',
        answer:
          'Yes. We follow up on production progress and pass on relevant updates. Updates depend on what the supplier reports, so this is not real-time tracking.',
      },
      {
        question: 'Can you handle several suppliers in one order?',
        answer:
          'Depending on the order, several suppliers can be coordinated. It is worth telling us at the start so the requirements and the preparation can be planned together.',
      },
      {
        question: 'Can you arrange quality control before shipment?',
        answer:
          'Yes. Product checks can be coordinated before shipment where you need them.',
      },
      {
        question: 'Can you also arrange shipping?',
        answer:
          'Yes. Shipment preparation and shipping can be coordinated as the next stage of the order.',
      },
    ],
  },
];

/* ===========================================================================
   09 — FINAL CTA
   =========================================================================== */

export const finalCta = {
  eyebrow: 'START WITH A REQUEST',
  title: 'Need someone to coordinate your China order?',
  description: "Tell us what you're purchasing, where the supplier is and what support you need.",
};

/* ===========================================================================
   THE PAGE OBJECT
   =========================================================================== */

export const purchasingOrderManagement = { slug, meta, hero, sections, finalCta };
