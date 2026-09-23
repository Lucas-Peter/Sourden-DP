/**
 * SOURDEN — /services/quality-control
 * ---------------------------------------------------------------------------
 * Every editable word on the Quality Control detail page. Part of the
 * five-page architecture documented in `service-detail.js` and based on the
 * five-page brief (PAGE 4).
 *
 * ── THE SECTION THIS PAGE IS REALLY ABOUT ──────────────────────────────────
 * §05 is the "can and cannot" comparison, and it is the load-bearing section of
 * the page: the brief requires it to stay factual and understated, and §02
 * separately forbids claiming that inspection can detect every possible defect.
 * The five "cannot guarantee" items are therefore as prominent as the six "can
 * help" items — same component, same weight, two columns. A page that listed
 * only the left column would be the kind of claim this site does not make.
 *
 * ── COPY THE BRIEF DID NOT SUPPLY ──────────────────────────────────────────
 * Marked 〔added〕 below. The brief gave headings for §02, §05 and §06 but no
 * eyebrows for §03–§07, no sentences for §03, §04 and §07, and no FAQ answers
 * (only eight questions). Eyebrows for §02 (the service name) and §04
 * (`HOW IT WORKS`) follow page 1's established pattern.
 *
 * ── CLAIMS RULE (cross-page requirement §4) ────────────────────────────────
 * No inspection statistic, no defect rate, no pass rate, no certification and
 * no guarantee — the brief permits none of them, and §05 exists precisely to
 * say so in the page's own words.
 *
 * ── TONE PER SECTION ───────────────────────────────────────────────────────
 * Hero ivory, process band ink, FAQ ivory, the rest alternating.
 * ---------------------------------------------------------------------------
 */

export const slug = 'quality-control';

/* ===========================================================================
   SEO — brief PAGE 4 §SEO. Both strings are mandated verbatim.
   =========================================================================== */

export const meta = {
  title: 'China Product Quality Control & Inspection | SOURDEN',
  description:
    'SOURDEN can arrange product quality checks in China before shipment, including quantity, appearance, specifications and packaging checks.',
};

/* ===========================================================================
   01 — HERO
   =========================================================================== */

export const hero = {
  eyebrow: 'QUALITY CONTROL',
  title: 'Check your order before it leaves China.',
  description:
    'We can arrange product checks before shipment to identify issues and confirm that the order matches the agreed requirements.',
  /** Image direction (brief): real product inspection, measuring products,
   *  checking cartons, factory QC, inspection documentation or product samples.
   *  The brief bans staged laboratory imagery unless it is genuinely relevant.
   *  Art direction and crop note live with the slot in `media.js`. */
  image: {
    key: 'serviceQualityControlHero',
    caption: 'PRE-SHIPMENT PRODUCT CHECK',
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
    eyebrow: 'QUALITY CONTROL',
    title: 'Problems are easier to address before the goods leave China.',
    /**
     * The brief's instruction on this section is that it must not claim
     * inspection can detect every possible defect — so the second paragraph
     * lists what a check can actually surface (visible issues, quantity
     * discrepancies, specification differences, packaging problems) and stops
     * there.
     */
    paragraphs: [
      'A quality issue discovered after the goods arrive at their destination can be difficult and expensive to resolve.',
      'Pre-shipment checks provide an opportunity to identify visible issues, quantity discrepancies, specification differences or packaging problems before the shipment leaves China.',
    ],
  },

  /* ---------------------------------------------------------------- 03 --- */
  {
    type: 'reviewGrid',
    tone: 'ivory',
    /** The brief's section label, used as the eyebrow. */
    eyebrow: 'WHAT CAN BE CHECKED',
    /** 〔added〕 — the brief named the section but gave no sentence for it. */
    title: 'The checks an inspection can cover.',
    /** Six items — three per column at desktop. */
    items: [
      { title: 'Quantity', description: 'Check whether the shipment quantity matches the agreed order.' },
      { title: 'Appearance', description: 'Check visible appearance and workmanship against agreed requirements.' },
      { title: 'Specifications', description: 'Check relevant dimensions, materials, colors, functions or other agreed specifications where practical.' },
      { title: 'Packaging', description: 'Check packaging, labels, cartons and other agreed packaging requirements.' },
      { title: 'Defects', description: 'Identify visible defects or discrepancies according to the agreed inspection criteria.' },
      { title: 'Photos & Evidence', description: 'Provide photographs or other inspection evidence where appropriate.' },
    ],
  },

  /* ---------------------------------------------------------------- 04 --- */
  {
    type: 'process',
    tone: 'ink',
    eyebrow: 'HOW IT WORKS',
    /** 〔added〕 — the brief gave the five steps but no heading for the band. */
    title: 'From agreed criteria to a decision before shipment.',
    /** Numbers derive from array order (01…05), never typed. */
    steps: [
      { label: 'Define', description: 'Confirm what needs to be checked and the agreed requirements.' },
      { label: 'Arrange', description: 'Coordinate the inspection with the supplier.' },
      { label: 'Inspect', description: 'Carry out the agreed product checks before shipment.' },
      { label: 'Report', description: 'Document relevant findings and provide available evidence.' },
      { label: 'Decide', description: 'Review the findings and determine the next step before shipment.' },
    ],
  },

  /* ---------------------------------------------------------------- 05 --- */
  {
    type: 'split',
    tone: 'white',
    /** 〔added〕 eyebrow. */
    eyebrow: 'THE LIMITS',
    title: 'A practical check — not a guarantee.',
    /**
     * The brief's copy for this section sits in the lead rather than after the
     * columns: it is the framing that makes the two lists readable, and a
     * caveat placed under the lists reads as a footnote instead of a premise.
     */
    description:
      'Quality control is designed to identify issues based on agreed inspection criteria. It can reduce the chance of receiving an order with obvious discrepancies, but no inspection process can guarantee that every possible issue will be identified.',
    /**
     * Two columns, same component, same weight. The right-hand list is the
     * reason this section exists — the brief asks for it explicitly and asks
     * for the section to stay understated.
     */
    columns: [
      {
        label: 'QUALITY CONTROL CAN HELP',
        items: [
          'Identify visible defects',
          'Confirm quantities',
          'Check agreed specifications',
          'Review packaging',
          'Provide inspection evidence',
          'Identify discrepancies before shipment',
        ],
      },
      {
        label: 'QUALITY CONTROL CANNOT GUARANTEE',
        items: [
          'Zero defects',
          'Perfect long-term product performance',
          'Every hidden manufacturing issue',
          'Every issue that may occur after inspection',
          'Future product performance',
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- 06 --- */
  {
    type: 'checkList',
    tone: 'ivory',
    /** 〔added〕 eyebrow. */
    eyebrow: 'WHEN IT HELPS',
    /** The brief's section label, written as a sentence. */
    title: 'When to consider quality control.',
    items: [
      'First order from a new supplier',
      'Large orders',
      'Custom products',
      'Private-label products',
      'Products with detailed specifications',
      'Products where appearance matters',
      'Orders with strict packaging requirements',
      'Orders where returning goods would be difficult or expensive',
    ],
  },

  /* ---------------------------------------------------------------- 07 --- */
  {
    type: 'chain',
    tone: 'white',
    /** The brief's section label, used as the eyebrow. */
    eyebrow: 'CONNECTED SERVICES',
    /** 〔added〕 — the brief gave the rail but no sentence heading. */
    title: 'Inspection is the stage before shipment.',
    description:
      'A check is most useful when it is connected to what comes before and after it — the supplier, the purchase and the shipment it clears the way for.',
    /** Stages come from `chainFor(slug)`; this page never names a service. */
  },

  /* ---------------------------------------------------------------- 08 --- */
  {
    type: 'faq',
    eyebrow: 'FAQ',
    title: 'Questions about quality control.',
    /**
     * The brief lists eight questions and requires that answers avoid absolute
     * guarantees. Q6 therefore answers "no", and Q7 describes a process rather
     * than promising an outcome.
     */
    items: [
      {
        question: 'What does your quality control service check?',
        answer:
          'Depending on what is agreed, checks can cover quantity, visible appearance and workmanship, specifications, packaging and visible defects. The criteria are confirmed with you before the inspection.',
      },
      {
        question: 'Can you inspect products before shipment?',
        answer:
          'Yes. Pre-shipment inspection is the main purpose of this service — it is the point at which a discrepancy can still be acted on before the goods leave China.',
      },
      {
        question: 'Can you inspect a supplier I already use?',
        answer: 'Yes. The supplier does not need to have been sourced through Sourden.',
      },
      {
        question: 'Can you check quantity and packaging?',
        answer:
          'Yes. Quantity and packaging are among the standard checks, including cartons, labels and other agreed packaging requirements.',
      },
      {
        question: 'Can you provide inspection photos?',
        answer:
          'Photographs and other available evidence are provided where appropriate, so you can see what the inspection recorded.',
      },
      {
        question: 'Does inspection guarantee product quality?',
        answer:
          'No. Inspection identifies issues against agreed criteria. It cannot guarantee zero defects, and it cannot predict how a product will perform over time.',
      },
      {
        question: 'What happens if an issue is found?',
        answer:
          'The findings are documented and shared so the next step can be decided before shipment — which may mean discussing corrections or replacements with the supplier, or reviewing the order.',
      },
      {
        question: 'Can you arrange shipping after inspection?',
        answer: 'Yes. Shipping can be coordinated as the next stage once the goods are checked.',
      },
    ],
  },
];

/* ===========================================================================
   09 — FINAL CTA
   =========================================================================== */

export const finalCta = {
  eyebrow: 'START WITH A REQUEST',
  title: 'Want your order checked before shipment?',
  description:
    "Tell us what you're buying and what needs to be checked. We'll help determine the appropriate inspection requirements.",
};

/* ===========================================================================
   THE PAGE OBJECT
   =========================================================================== */

export const qualityControl = { slug, meta, hero, sections, finalCta };
