/**
 * SOURDEN — /industries/industrial-products
 * ---------------------------------------------------------------------------
 * Category page 06 of 09, from the Industries child-pages brief (§9).
 *
 * ── 2026-10-03 内容精简（松霖指令）────────────────────────────────────────
 * Same pass as every category page: the review grid, the approach sequence, the
 * capability list, the ink rail and the long FAQ are gone. One range image,
 * short buyer needs, the six-word approach flow, four considerations, four
 * related services, the buyer groups, the MOQ statement, a short FAQ.
 *
 * ── THE PER-CATEGORY CONSTRAINT (brief §9) ─────────────────────────────────
 * "Do not claim engineering certification or technical validation unless the
 * buyer provides it and the supplier confirms it." The considerations `note`
 * carries the brief's statement verbatim: for a technical or safety-critical
 * component, the specification and the validation are both the buyer's.
 * ---------------------------------------------------------------------------
 */

import {
  approachSection,
  audienceSection,
  moqSection,
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
   HERO
   =========================================================================== */

export const hero = {
  eyebrow: 'INDUSTRIES / INDUSTRIAL PRODUCTS',
  title: 'Industrial products sourced to specification.',
  description:
    'Industrial sourcing often depends on exact specifications, materials, tolerances, quantities and application requirements. Sourden helps buyers identify suitable suppliers and coordinate the sourcing process around those requirements.',
  image: {
    key: 'industryIndustrialProducts',
    caption: 'MACHINED COMPONENTS AND INDUSTRIAL PRODUCTION',
  },
};

/* ===========================================================================
   SECTIONS
   =========================================================================== */

export const sections = [
  /* ------------------------------------------------- §2 What we can source -- */
  {
    type: 'source',
    /** 〔added〕 tone. */
    tone: 'white',
    eyebrow: 'WHAT WE CAN SOURCE',
    /** 〔added〕 heading and lead. */
    title: 'Components, hardware, tools and made-to-order parts.',
    description:
      'This is the category where the description of the product matters most. A component is defined by its drawing, its material and its tolerance rather than by its name.',
    items: [
      'Industrial components',
      'Hardware',
      'Tools',
      'Machinery accessories',
      'Metal products',
      'Plastic components',
      'Fasteners',
      'Custom parts',
    ],
    note: 'These are examples rather than a fixed list. Here a requirement is usually carried by a drawing, a specification sheet or a physical part, and any of those three is a better starting point than a product name.',
    image: {
      key: 'sourceIndustrialProducts',
      /** 〔added〕 — the brief specifies the image but not its caption. */
      caption: 'INDUSTRIAL COMPONENTS AND PARTS',
    },
  },

  /* ------------------------------------------------ §3 What buyers need ---- */
  {
    type: 'checkList',
    /** 〔added〕 tone. */
    tone: 'ivory',
    eyebrow: 'WHAT BUYERS USUALLY NEED',
    /** 〔added〕 heading and lead. */
    title: 'A specification, a drawing, or a part.',
    description:
      'Industrial requests are unusually specific about where they begin — some arrive with a drawing, some with a physical part, some with nothing but a problem to solve.',
    items: [
      'Exact product specifications',
      'Custom manufacturing',
      'OEM/ODM sourcing',
      'Drawings and samples',
      'Material requirements',
      'Repeat production',
    ],
  },

  /* -------------------------------------------------- §4 our approach ------ */
  approachSection,

  /* ------------------------------------------- §6 Sourcing considerations -- */
  {
    type: 'checkList',
    /** 〔added〕 tone. */
    tone: 'ivory',
    eyebrow: 'SOURCING CONSIDERATIONS',
    /** 〔added〕 heading and lead. */
    title: 'What a manufacturer needs before quoting.',
    description:
      'Most of this list is documentation. That is not a formality in this category — it is the difference between quotations that can be compared and quotations that have to be re-done.',
    items: ['Material', 'Dimensions', 'Tolerance', 'Drawings'],
    note: 'For technical or safety-critical components, buyers should provide complete specifications and obtain appropriate professional engineering or compliance validation before use.',
  },

  /* ----------------------------------------------- §8 related services ----- */
  relatedServicesSection,

  /* --------------------------------------------- §9 who this works for ----- */
  audienceSection,

  /* --------------------------------------------------- no fixed MOQ ------ */
  moqSection,

  /* ------------------------------------------------------ §10 the FAQ ------ */
  {
    type: 'faq',
    eyebrow: 'FAQ',
    /** 〔added〕 heading. */
    title: 'Questions about sourcing industrial products.',
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
    ],
  },
];

/* ===========================================================================
   FINAL CTA  (shared, verbatim)
   =========================================================================== */

export const finalCta = standardFinalCta;

/* ===========================================================================
   THE PAGE OBJECT
   =========================================================================== */

export const industrialProducts = { slug, meta, hero, sections, finalCta };
