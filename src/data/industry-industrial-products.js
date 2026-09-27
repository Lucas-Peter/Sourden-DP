/**
 * SOURDEN — /industries/industrial-products
 * ---------------------------------------------------------------------------
 * Category page 06 of 09, from the Industries child-pages brief (§9).
 *
 * ── WHAT THE BRIEF SUPPLIED, AND WHAT THIS FILE AUTHORS ─────────────────────
 * Eyebrow, H1 and intro are the brief's; the ten product types, the nine buyer
 * needs, the ten sourcing considerations, the engineering-validation statement
 * and the five FAQ questions are the brief's. This category's brief gives no
 * approach section, so §4's six stages are authored — built from the items the
 * brief itself lists (drawings, material, tolerance, surface treatment, sample
 * requirements).
 *
 * ── THE PER-CATEGORY CONSTRAINT (brief §9) ─────────────────────────────────
 * "Do not claim engineering certification or technical validation unless the
 * buyer provides it and the supplier confirms it."
 *
 * The wording here is built so that no such claim is even possible:
 *   · §4's stage 3 searches for manufacturers rather than for "verified"
 *     ones, and its stage 5 confirms a sample against the buyer's own
 *     requirement — it validates nothing on Sourden's behalf.
 *   · §6 carries the brief's statement verbatim, in which the specification and
 *     the engineering validation are both the buyer's.
 *   · FAQ answer 5 states the boundary in a sentence ("that is the buyer's to
 *     obtain — sourcing does not provide it") rather than leaving it implied.
 *
 * No material grade, tolerance, load or process is presented as suitable for any
 * application anywhere on this page.
 *
 * ── TONE PER SECTION ───────────────────────────────────────────────────────
 * Hero ivory; §2 white → §3 ivory → §4 white → §5 ivory → §6 white → the ink
 * rail → white rows → ivory audience → white index → ivory FAQ.
 * ---------------------------------------------------------------------------
 */

import {
  audienceSection,
  exploreMoreSection,
  helpSection,
  processSection,
  relatedServicesSection,
  standardFinalCta,
} from './industry-standard.js';

export const slug = 'industrial-products';

/* ===========================================================================
   SEO
   =========================================================================== */

export const meta = {
  title: 'Industrial Products Sourcing from China | SOURDEN',
  description:
    'Sourcing industrial components, hardware, tools and custom parts from China against your drawings, materials and tolerances.',
};

/* ===========================================================================
   HERO  (brief §3 and §9)
   =========================================================================== */

export const hero = {
  eyebrow: 'INDUSTRIES / INDUSTRIAL PRODUCTS',
  title: 'Industrial products sourced to specification.',
  description:
    'Industrial sourcing often depends on exact specifications, materials, tolerances, quantities and application requirements. Sourden helps buyers identify suitable suppliers and coordinate the sourcing process around those requirements.',
  image: {
    key: 'industryIndustrialProducts',
    /** 〔added〕 — the brief specifies the image but not its caption. */
    caption: 'MACHINED COMPONENTS AND INDUSTRIAL PRODUCTION',
  },
};

/* ===========================================================================
   SECTIONS
   =========================================================================== */

export const sections = [
  /* ------------------------------------------------- §2 What we can source -- */
  {
    type: 'checkList',
    /** 〔added〕 tone. */
    tone: 'white',
    eyebrow: 'WHAT WE CAN SOURCE',
    /** 〔added〕 heading and lead. */
    title: 'Components, hardware, tools and made-to-order parts.',
    description:
      'This is the category where the description of the product matters most. A component is defined by its drawing, its material and its tolerance rather than by its name, and those are what a brief has to carry.',
    /** The brief's ten product types, in its order. */
    items: [
      'Industrial components',
      'Hardware',
      'Tools',
      'Machinery accessories',
      'Metal products',
      'Plastic components',
      'Fasteners',
      'Manufacturing supplies',
      'Workshop equipment',
      'Custom parts',
    ],
    /**
     * 〔added〕 — the brief gives no note for this category. The point worth
     * making is about the shape of the brief, not about the products: in this
     * category a document beats a description.
     */
    note: 'These are examples rather than a fixed list. Here a requirement is usually carried by a drawing, a specification sheet or a physical part, and any of those three is a better starting point than a product name.',
  },

  /* ------------------------------------------------ §3 What buyers need ---- */
  {
    type: 'reviewGrid',
    /** 〔added〕 tone. */
    tone: 'ivory',
    eyebrow: 'WHAT BUYERS USUALLY NEED',
    /** 〔added〕 heading and lead. */
    title: 'Nine starting points, one of which is yours.',
    description:
      'Industrial requests are unusually specific about where they begin. Some arrive with a drawing, some with a physical part, and some with nothing but a problem to solve — and the work is different in each case.',
    /** The brief's nine needs, in its order. The sentences are 〔added〕. */
    items: [
      {
        title: 'Exact product specifications',
        description:
          'The requirement is precise and the search is for a supplier who can meet it, not for something close to it.',
      },
      {
        title: 'Custom manufacturing',
        description:
          'Nothing off the shelf fits and the part has to be made, normally from a drawing.',
      },
      {
        title: 'OEM/ODM sourcing',
        description:
          'You have the product or the design and want it produced for you, rather than sourced from someone else’s range.',
      },
      {
        title: 'Material requirements',
        description:
          'The material is specified — grade, temper, composition — and it is a fixed part of the brief rather than a variable.',
      },
      {
        title: 'Dimensions',
        description:
          'The part has to fit something, and its dimensions and tolerances are what decide whether it will.',
      },
      {
        title: 'Drawings',
        description:
          'The documentation exists, and the task is getting it read accurately by manufacturers who can quote against it.',
      },
      {
        title: 'Samples',
        description:
          'A physical part exists, standing in for the drawing or used alongside it.',
      },
      {
        title: 'Repeat production',
        description:
          'The part is already in use, and the question is whether it can be produced again, to the same drawing, later.',
      },
      {
        title: 'Supplier replacement',
        description:
          'You buy the part now and want alternatives, usually on cost, delivery or consistency between batches.',
      },
    ],
    note: 'Where a drawing exists, send it. A quotation answered against a document is worth several answered against a description.',
  },

  /* --------------------------------------------- §4 How we approach it ----- */
  {
    type: 'sequence',
    /** 〔added〕 tone. */
    tone: 'white',
    eyebrow: 'HOW WE APPROACH THIS CATEGORY',
    /** 〔added〕 heading and lead. */
    title: 'The drawing is the brief, and the process follows from it.',
    description:
      'Material, tolerance, quantity and surface treatment usually decide which production processes can make a part at all — so it is worth working that out before manufacturers are approached, rather than discovering it in the quotations.',
    /**
     * Authored — this category's brief gives no approach section. The stages
     * follow the brief's own list of considerations (drawings, material,
     * tolerance, surface treatment, sample requirements, inspection
     * requirements) in the order that work actually happens, and the shape
     * matches every other category page.
     */
    steps: [
      {
        label: 'Starting from the drawing or the part',
        description:
          'A drawing, a specification sheet or a physical sample. Everything after this depends on how exactly the requirement was stated, so this stage is worth more time than it usually gets.',
      },
      {
        label: 'Reading the process out of the requirement',
        description:
          'Material, tolerance, quantity and surface treatment narrow down which processes can produce the part — and which cannot, which is worth knowing before the search starts.',
      },
      {
        label: 'Finding manufacturers rather than intermediaries',
        description:
          'This category has a lot of trading companies between the buyer and the machine. The useful search is for the factories that actually run the process, and whose existing work is closest to yours.',
      },
      {
        label: 'Comparing quotations against the drawing',
        description:
          'Quotations are only comparable if they answer the same document. Where two differ, the difference is usually in material, tolerance or treatment, and that is pulled out rather than averaged away.',
      },
      {
        label: 'Confirming a sample or first article',
        description:
          'Where the project allows for it, a sample confirms the part against the requirement before the full quantity is produced.',
      },
      {
        label: 'Managing production, inspection and shipping',
        description:
          'The order, the communication through production, the inspection against the agreed requirements, and the movement of the goods from China.',
      },
    ],
  },

  /* ------------------------------------------ §5 What we can help with ------ */
  helpSection,

  /* ------------------------------------------- §6 Sourcing considerations -- */
  {
    type: 'checkList',
    /** 〔added〕 tone. */
    tone: 'white',
    eyebrow: 'SOURCING CONSIDERATIONS',
    /** 〔added〕 heading and lead. */
    title: 'What a manufacturer needs before quoting.',
    description:
      'Most of this list is documentation. That is not a formality in this category — it is the difference between quotations that can be compared and quotations that have to be re-done.',
    /** The brief's ten considerations, in its order. */
    items: [
      'Material',
      'Dimensions',
      'Tolerance',
      'Surface treatment',
      'Production process',
      'Drawings',
      'Sample requirements',
      'Quantity',
      'Packaging',
      'Inspection requirements',
    ],
    /**
     * The brief's statement, verbatim (§9). It is the sentence this page exists
     * to carry: for a technical or safety-critical component, both the complete
     * specification and the engineering or compliance validation are the buyer's,
     * and sourcing neither supplies nor substitutes for either.
     */
    note: 'For technical or safety-critical components, buyers should provide complete specifications and obtain appropriate professional engineering or compliance validation before use.',
  },

  /* --------------------------------------------------- §7 the process ------- */
  processSection,

  /* ----------------------------------------------- §8 related services ----- */
  relatedServicesSection,

  /* --------------------------------------------- §9 who this works for ----- */
  audienceSection,

  /* --------------------------------------------------- §16 explore more --- */
  exploreMoreSection,

  /* ------------------------------------------------------ §10 the FAQ ------ */
  {
    type: 'faq',
    eyebrow: 'FAQ',
    /** 〔added〕 heading. */
    title: 'Questions about sourcing industrial products.',
    /** The brief's five questions, with 〔added〕 answers. */
    items: [
      {
        question: 'Can you source custom industrial parts?',
        answer:
          'Yes — in this category that is the common case rather than the exception. Custom parts are normally quoted from a drawing, a specification or a sample, and the first step is confirming that the requirement is complete enough for a manufacturer to quote against.',
        link: { label: 'Product Sourcing', href: '/services/product-sourcing' },
      },
      {
        question: 'Can I provide drawings?',
        answer:
          'Yes, and it is the most useful thing you can provide. A drawing can be passed to manufacturers to quote against, and it also makes the quotations comparable, because each one is answering the same document rather than an interpretation of it.',
      },
      {
        question: 'Can you source based on a physical sample?',
        answer:
          'Yes. A physical part can stand in for a drawing, and manufacturers will often work from it directly. What a sample does not always carry is the material and the tolerance, so those usually have to be stated separately — which is worth doing before quotations are compared.',
      },
      {
        question: 'Can you help compare manufacturers?',
        answer:
          'Yes. We compare the options against the same requirement — material, tolerance, surface treatment, quantity and lead time — and where two quotations differ, the difference is identified rather than averaged out.',
      },
      {
        question: 'Can you arrange inspection before shipment?',
        answer:
          'Yes, where it is part of the project. A check before shipment can cover dimensions, quantity, finish and packaging against the agreed specification. Where a part is safety-critical or needs formal engineering validation, that is the buyer’s to obtain — sourcing does not provide it.',
        link: { label: 'Quality Control', href: '/services/quality-control' },
      },
    ],
  },
];

/* ===========================================================================
   §15 — FINAL CTA  (shared, verbatim)
   =========================================================================== */

export const finalCta = standardFinalCta;

/* ===========================================================================
   THE PAGE OBJECT
   =========================================================================== */

export const industrialProducts = { slug, meta, hero, sections, finalCta };
