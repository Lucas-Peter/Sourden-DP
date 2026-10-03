/**
 * SOURDEN — /industries/beauty-personal-care
 * ---------------------------------------------------------------------------
 * Category page 02 of 09, from the Industries child-pages brief (§5).
 *
 * ── 2026-10-03 内容精简（松霖指令）────────────────────────────────────────
 * Same pass as every category page: the review grid, the approach sequence, the
 * capability list, the ink rail and the long FAQ are gone. One range image,
 * short buyer needs, the six-word approach flow, four considerations, four
 * related services, the buyer groups, the MOQ statement, a short FAQ.
 *
 * ── THE PER-CATEGORY CONSTRAINT (brief §5) ─────────────────────────────────
 * "Do not imply that Sourden provides medical approval, cosmetic regulatory
 * approval, or product safety certification."
 *
 * Met in two places: the product groups name no formulation, ingredient or
 * effect, and the considerations `note` carries the brief's own wording
 * verbatim — sourcing a product is not certifying it, and passing a
 * requirement on is not the same as the product meeting it.
 * ---------------------------------------------------------------------------
 */

import {
  approachSection,
  audienceSection,
  moqSection,
  relatedServicesSection,
  standardFinalCta,
} from './industry-standard.js';

export const slug = 'beauty-personal-care';

/* ===========================================================================
   SEO
   =========================================================================== */

export const meta = {
  title: 'Beauty & Personal Care Sourcing from China | SOURDEN',
  description:
    'Sourcing beauty and personal care products from China around your specifications, materials, packaging, quantities and destination market.',
};

/* ===========================================================================
   HERO
   =========================================================================== */

export const hero = {
  eyebrow: 'INDUSTRIES / BEAUTY & PERSONAL CARE',
  title: 'Beauty and personal care products, sourced with the details in mind.',
  description:
    'Sourden helps buyers source beauty and personal care products from China based on product specifications, materials, packaging, quantity and market requirements.',
  image: {
    key: 'industryBeautyPersonalCare',
    caption: 'FILLING AND PACKAGING OF BEAUTY PRODUCTS',
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
    title: 'Tools, accessories, packaging and everything around the product.',
    description:
      'Most of what this category covers is equipment and packaging rather than a formulated product, and that is where the sourcing questions usually sit.',
    items: [
      'Hair accessories',
      'Hair styling accessories',
      'Beauty tools',
      'Personal care accessories',
      'Makeup accessories',
      'Cosmetic packaging',
      'Salon accessories',
      'Manicure and nail accessories',
    ],
    note: 'These are product groups rather than brands, and they are examples rather than a fixed list. If what you have in mind is not here, describe it — often it can be sourced, and sometimes it cannot, and both answers are worth having early.',
    image: {
      key: 'sourceBeautyPersonalCare',
      /** 〔added〕 — the brief specifies the image but not its caption. */
      caption: 'BEAUTY AND PERSONAL CARE PRODUCTS',
    },
  },

  /* ------------------------------------------------ §3 What buyers need ---- */
  {
    type: 'checkList',
    /** 〔added〕 tone. */
    tone: 'ivory',
    eyebrow: 'WHAT BUYERS USUALLY NEED',
    /** 〔added〕 heading and lead. */
    title: 'A product looking for a supplier — or a specification looking for a product.',
    description:
      'Requests in this category arrive in one of those two shapes. They start the same way — with the specification agreed.',
    items: [
      'Product sourcing',
      'Existing product matching',
      'Customization and private label',
      'Custom packaging',
      'Supplier comparison',
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
    title: 'What this category asks you to decide before ordering.',
    description:
      'Specification and packaging carry more weight here than in most categories, because the product is often sold on how it looks and how it is described.',
    items: ['Materials', 'Packaging', 'Customization', 'Target market'],
    /**
     * The brief's wording, verbatim (§5). Sourcing a product is not a statement
     * that the product is approved anywhere, and this draws where the
     * responsibility for that sits.
     */
    note: 'Where products are subject to regulatory, safety, labeling or market-specific requirements, buyers should confirm the applicable requirements for their destination market. Sourden can help communicate requirements with suppliers, but does not replace qualified regulatory or legal advice.',
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
    title: 'Questions about sourcing beauty and personal care products.',
    items: [
      {
        question: 'Can you source beauty products from photos?',
        answer:
          'Yes. Photos, links or a physical sample all work as a starting point, and in this category a sample is often the clearest way to describe a finish or a texture. Specifications, materials, quantity and packaging details are what turn that into something a supplier can respond to.',
        link: { label: 'Product Sourcing', href: '/services/product-sourcing' },
      },
      {
        question: 'Can you find custom packaging?',
        answer:
          'Yes. Packaging can be sourced alongside a product order or on its own, and it usually comes down to dimensions, material, printing and finishing. What a supplier can produce depends on the quantity as much as on the design.',
      },
      {
        question: 'Can you help with private-label sourcing?',
        answer:
          "Often, yes. Private label usually means the product or its packaging carries your own name, which can involve labelling only or changes to the product itself. What is possible depends on the supplier, the product and the order quantity.",
      },
      {
        question: 'Can you help communicate product requirements to suppliers?',
        answer:
          'That is a large part of the work. Requirements, specifications and packaging instructions can be passed to a supplier and confirmed back, so both sides are working from the same document. Where a requirement comes from regulation in your market, confirming it stays with you: passing a requirement on and having it acknowledged is not the same as certifying it.',
        link: { label: 'Supplier Verification', href: '/services/supplier-verification' },
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

export const beautyPersonalCare = { slug, meta, hero, sections, finalCta };
