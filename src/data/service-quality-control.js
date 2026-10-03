/**
 * SOURDEN — /services/quality-control
 * ---------------------------------------------------------------------------
 * Every editable word on the Quality Control detail page. Part of the five-page
 * architecture documented in `service-detail.js`, with copy mandated verbatim
 * by the five-page brief (PAGE 4).
 *
 * ── THE UNIFIED STRUCTURE (2026-10-03) ─────────────────────────────────────
 * Same eight-section sequence as the other four pages, service-specific copy.
 * The older "can help / cannot guarantee" comparison was folded into a single
 * What You Can Expect note; the brief's own caveat stays verbatim there.
 *
 * ── WHAT IS NOT IN THIS FILE ───────────────────────────────────────────────
 *   · Service names, numbers, URLs — merged from `services.js`.
 *   · The primary and secondary CTAs — declared once in `service-links.js`.
 *   · The four Related Services links — derived by `relatedServices(slug)`.
 *
 * ── CLAIMS RULE (cross-page requirement §4) ────────────────────────────────
 * No inspection statistic, no defect rate, no pass rate, no certification and
 * no guarantee. The FAQ answers "no" plainly to the guarantee question, and the
 * What You Can Expect note says an inspection cannot detect every defect.
 *
 * ── COPY THE BRIEF DID NOT SUPPLY ──────────────────────────────────────────
 * Marked 〔added〕: the headings for What We Handle, How It Works, Related
 * Services, the FAQ band, and the closing band's eyebrow.
 * ---------------------------------------------------------------------------
 */

export const slug = 'quality-control';

/* ===========================================================================
   SEO — brief PAGE 4 §SEO. Both strings are mandated verbatim.
   =========================================================================== */

export const meta = {
  title: 'China Quality Control & Pre-Shipment Inspection | SOURDEN',
  description:
    'SOURDEN can arrange product checks in China before shipment, including quantity, specifications, appearance, packaging and other agreed requirements.',
};

/* ===========================================================================
   01 — HERO
   =========================================================================== */

export const hero = {
  eyebrow: 'QUALITY CONTROL',
  title: 'Check the order before it leaves China.',
  description:
    'We can arrange product checks before shipment to identify issues and confirm that the order matches the agreed requirements.',
  /** Documentary photograph — inspection table, measuring tools, samples.
      Art direction and crop note live with the slot in `media.js`. */
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
    eyebrow: 'WHAT WE DO',
    title: 'A check before shipment can reveal problems earlier.',
    paragraphs: [
      'Once products have been manufactured, discovering a problem after the goods arrive can be more difficult and costly to resolve.',
      'Where appropriate, we can arrange checks before shipment so potential issues can be identified while the goods are still in China.',
    ],
  },

  /* ---------------------------------------------------------------- 03 --- */
  {
    type: 'reviewGrid',
    tone: 'ivory',
    eyebrow: 'WHAT WE HANDLE',
    /** 〔added〕 — the brief gives the checks but no heading for the section. */
    title: 'The checks an inspection can cover.',
    items: [
      {
        title: 'Quantity',
        description: 'Check whether the quantity appears to match the agreed order.',
      },
      {
        title: 'Product Specifications',
        description: 'Check relevant dimensions, materials, colors, models or other agreed specifications.',
      },
      {
        title: 'Appearance',
        description: 'Look for visible defects, damage, inconsistencies or other agreed appearance requirements.',
      },
      {
        title: 'Function',
        description: 'Where applicable, perform basic functional checks based on the product and agreed requirements.',
      },
      {
        title: 'Packaging',
        description: 'Check packaging condition, labeling and other agreed packaging requirements.',
      },
      {
        title: 'Inspection Findings',
        description: 'Document relevant findings and provide inspection information such as photos when applicable.',
      },
    ],
  },

  /* ---------------------------------------------------------------- 04 --- */
  {
    type: 'process',
    tone: 'ink',
    eyebrow: 'HOW IT WORKS',
    /** 〔added〕 — the brief gives the five steps but no heading for the band. */
    title: 'From agreed criteria to a decision before shipment.',
    /** Numbers derive from array order (01…05), never typed. */
    steps: [
      { label: 'Define the Requirements', description: 'We confirm what should be checked before the inspection.' },
      { label: 'Coordinate the Inspection', description: 'We arrange the inspection with the supplier or relevant inspection resource.' },
      { label: 'Check the Products', description: 'The agreed product and order requirements are checked.' },
      { label: 'Review Findings', description: 'Relevant findings are documented and shared for review.' },
      { label: 'Decide the Next Step', description: 'If an issue is identified, you can decide whether to request correction, rework or another appropriate action.' },
    ],
  },

  /* ---------------------------------------------------------------- 05 --- */
  {
    type: 'checkList',
    tone: 'white',
    eyebrow: 'WHEN YOU NEED THIS',
    title: 'Consider quality control when the order matters.',
    items: [
      'You are placing a larger order.',
      'You are working with a new supplier.',
      'The product has important specifications.',
      'The product is customized.',
      'Packaging or labeling must meet specific requirements.',
      'You want to identify obvious issues before shipment.',
    ],
  },

  /* ---------------------------------------------------------------- 06 --- */
  {
    type: 'checkList',
    tone: 'ivory',
    eyebrow: 'WHAT YOU CAN EXPECT',
    title: 'Visibility before shipment.',
    items: [
      'Agreed inspection points',
      'Quantity checks',
      'Specification checks',
      'Appearance checks',
      'Packaging checks',
      'Inspection findings and photos when applicable',
    ],
    note: 'Quality inspection can help identify problems, but no inspection can guarantee that every defect will be detected.',
  },

  /* ---------------------------------------------------------------- 07 --- */
  {
    type: 'relatedServices',
    tone: 'white',
    eyebrow: 'RELATED SERVICES',
    /** 〔added〕 — the brief gives the links but no heading for the section. */
    title: 'Need support beyond quality control?',
  },

  /* ---------------------------------------------------------------- 08 --- */
  {
    type: 'faq',
    eyebrow: 'FAQ',
    /** 〔added〕 — the brief gives the questions but no heading for the band. */
    title: 'Questions about quality control.',
    items: [
      {
        question: 'Do you inspect every product?',
        answer:
          'The inspection scope depends on the order and the requirements agreed for the project. We can determine the appropriate inspection approach based on the product.',
      },
      {
        question: 'What can you check?',
        answer:
          'Depending on the product, checks may include quantity, specifications, appearance, function, packaging and other agreed requirements.',
      },
      {
        question: 'Can you provide inspection photos?',
        answer: 'Photos can be included when appropriate to the inspection arrangement and requirements.',
      },
      {
        question: 'Does inspection guarantee product quality?',
        answer: 'No. Inspection can help identify issues before shipment, but it cannot guarantee that every defect will be detected.',
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
  title: 'Want your order checked before shipment?',
  description: 'Tell us about the product and the requirements you want checked.',
};

/* ===========================================================================
   THE PAGE OBJECT
   =========================================================================== */

export const qualityControl = { slug, meta, hero, sections, finalCta };
