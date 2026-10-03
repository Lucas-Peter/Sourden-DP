/**
 * SOURDEN — /industries/packaging
 * ---------------------------------------------------------------------------
 * Category page 04 of 09, from the Industries child-pages brief (§7).
 *
 * ── 2026-10-03 内容精简（松霖指令）────────────────────────────────────────
 * Same pass as every category page: the review grid, the approach sequence, the
 * capability list, the ink rail and the long FAQ are gone. One range image,
 * short buyer needs, the six-word approach flow, four considerations, four
 * related services, the buyer groups, the MOQ statement, a short FAQ.
 *
 * ── THE PER-CATEGORY INSTRUCTION (brief §7) ────────────────────────────────
 * "Explain that packaging quotations can vary significantly based on material,
 * size, printing, finishing and quantity." That is the §6 `note` — the reason
 * two quotes for "the same box" can be three times apart.
 * ---------------------------------------------------------------------------
 */

import {
  approachSection,
  audienceSection,
  moqSection,
  relatedServicesSection,
  standardFinalCta,
} from './industry-standard.js';

export const slug = 'packaging';

/* ===========================================================================
   SEO
   =========================================================================== */

export const meta = {
  title: 'Packaging Sourcing from China | SOURDEN',
  description:
    'Sourcing product, retail and shipping packaging from China — boxes, pouches, labels and printed packaging specified around your product and brand.',
};

/* ===========================================================================
   HERO
   =========================================================================== */

export const hero = {
  eyebrow: 'INDUSTRIES / PACKAGING',
  title: 'Packaging sourced around your product and brand.',
  description:
    'Packaging is often part of the product itself. Sourden helps buyers source packaging based on dimensions, materials, quantities, printing, finishing and application.',
  image: {
    key: 'industryPackaging',
    caption: 'PRINTING AND FINISHED RETAIL PACKAGING',
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
    title: 'Boxes, bags, pouches, labels and the inserts inside them.',
    description:
      'Packaging is the one category on this site that is not sold to an end customer as a product — it is the thing the product arrives in.',
    items: [
      'Product boxes',
      'Mailer boxes',
      'Shipping cartons',
      'Poly bags',
      'Paper bags',
      'Gift packaging',
      'Pouches',
      'Labels',
    ],
    note: 'These are examples rather than a fixed list, and this is the one category where the list is genuinely open. If you can describe what the packaging has to hold, how it is filled and where it is sold, that is usually enough to start.',
    image: {
      key: 'sourcePackaging',
      /** 〔added〕 — the brief specifies the image but not its caption. */
      caption: 'PACKAGING TYPES AND SAMPLES',
    },
  },

  /* ------------------------------------------------ §3 What buyers need ---- */
  {
    type: 'checkList',
    /** 〔added〕 tone. */
    tone: 'ivory',
    eyebrow: 'WHAT BUYERS USUALLY NEED',
    /** 〔added〕 heading and lead. */
    title: 'Replacing something, or starting from nothing.',
    description:
      'Most packaging requests are one of these two: replacing existing packaging is a comparison exercise; packaging for a new product is a design exercise.',
    items: [
      'Existing packaging replacement',
      'Custom dimensions',
      'Printed or branded packaging',
      'Small production runs',
      'Bulk packaging orders',
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
    title: 'The five things a packaging quotation is built from.',
    description:
      'Four items, but they are the ones that move the price — everything else is what makes the packaging fit for use.',
    items: ['Material', 'Printing', 'Finishing', 'Quantity'],
    note: 'Packaging quotations can vary significantly with material, size, printing, finishing and quantity — and quantity is usually the largest single factor, because plates, dies and setup are one-off costs that are spread across the whole run.',
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
    title: 'Questions about sourcing packaging.',
    items: [
      {
        question: 'Can you source custom packaging?',
        answer:
          'Yes — in this category most requests are custom. Custom packaging usually starts from dimensions, material and the print, and it normally means a tooling cost and a minimum quantity. Describing what the packaging has to hold and how it is filled is enough to begin.',
        link: { label: 'Product Sourcing', href: '/services/product-sourcing' },
      },
      {
        question: 'Can I send you a sample or design?',
        answer:
          'Yes. A sample of the packaging you use now is the most useful thing you can send, because it carries the material, the thickness and the structure without anyone having to describe them. Artwork and design files can be passed to a supplier to quote against; a print-ready file is normally needed before plates are made.',
      },
      {
        question: 'Can you help with low quantities?',
        answer:
          'For some packaging types, yes; for others the setup cost makes it impractical. Plates, dies and machine setup are one-off costs, so a small run carries the same setup across fewer units. Where a small run is possible we will say so, and where it is not we will say that instead.',
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

export const packaging = { slug, meta, hero, sections, finalCta };
