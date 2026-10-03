/**
 * SOURDEN — /industries/apparel-footwear-bags
 * ---------------------------------------------------------------------------
 * Category page 09 of 09, from the Industries child-pages brief (§12).
 *
 * ── THE CATEGORY'S NAME, AND ONE DELIBERATE DEVIATION FROM THE BRIEF ────────
 * The brief writes this category as "Clothing, Shoes & Bags" at the route
 * `/industries/clothing-shoes-bags`. The site publishes it as
 * "Apparel, Footwear & Bags" at `/industries/apparel-footwear-bags`, confirmed
 * by the business on 2026-09-23 site-wide. So this page follows the registry.
 *
 * ── 2026-10-03 内容精简（松霖指令）────────────────────────────────────────
 * Same pass as every category page: the review grid, the approach sequence, the
 * capability list, the ink rail and the long FAQ are gone. One range image,
 * short buyer needs, the six-word approach flow, four considerations, four
 * related services, the buyer groups, the MOQ statement, a short FAQ.
 *
 * ── THE PER-CATEGORY CONSTRAINT (brief §12) ────────────────────────────────
 * "Do not mention or suggest counterfeit branded goods." No brand is named
 * anywhere, and the source `note` states the position directly: sourcing is for
 * the buyer's own product, design or label, not another company's branded
 * goods.
 * ---------------------------------------------------------------------------
 */

import {
  approachSection,
  audienceSection,
  moqSection,
  relatedServicesSection,
  standardFinalCta,
} from './industry-standard.js';

export const slug = 'apparel-footwear-bags';

/* ===========================================================================
   SEO
   =========================================================================== */

export const meta = {
  title: 'Apparel, Footwear & Bags Sourcing from China | SOURDEN',
  description:
    'Sourcing apparel, footwear and bags from China to your specifications — materials, construction, size charts, samples, customization and packaging.',
};

/* ===========================================================================
   HERO
   =========================================================================== */

export const hero = {
  eyebrow: 'INDUSTRIES / APPAREL, FOOTWEAR & BAGS',
  /** The registry's name for this category — see the header note above. */
  title: 'Apparel, footwear and bags, sourced to your specifications.',
  description:
    'SOURDEN helps buyers source fashion and apparel-related products from China based on materials, dimensions, construction, quantity, customization and target market.',
  image: {
    key: 'industryApparelFootwearBags',
    caption: 'CUTTING, STITCHING AND FINISHING',
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
    title: 'Clothing, footwear, bags and the hardware around them.',
    description:
      'This category has more variables per product than any other on the site: the material, the cut, the construction, the size range and the hardware all have to be settled before a sample is right.',
    items: [
      'Clothing',
      'Apparel accessories',
      'Shoes',
      'Sneakers',
      'Bags',
      'Backpacks',
      'Wallets',
      'Fashion accessories',
    ],
    note: 'These are examples rather than a fixed list. The work in this category is on your own product, your own design or your own label — sourcing is not a route to another company’s branded goods.',
    image: {
      key: 'sourceApparelFootwearBags',
      /** 〔added〕 — the brief specifies the image but not its caption. */
      caption: 'APPAREL, FOOTWEAR AND BAGS',
    },
  },

  /* ------------------------------------------------ §3 What buyers need ---- */
  {
    type: 'checkList',
    /** 〔added〕 tone. */
    tone: 'ivory',
    eyebrow: 'WHAT BUYERS USUALLY NEED',
    /** 〔added〕 heading and lead. */
    title: 'Most requests start from the material.',
    description:
      'In this category the design is usually the easy part — it is the material, the sizing and the sampling that decide whether a bulk order ends up matching the sample.',
    items: [
      'Product matching',
      'Custom designs',
      'Material sourcing',
      'Custom colors and branding',
      'Size specifications',
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
    title: 'What has to be settled before a sample is right.',
    description:
      'Four items, and they are the ones that most often send a sample back for a second attempt: material, construction, the size chart and the quantity.',
    items: ['Material', 'Construction', 'Size chart', 'Quantity'],
    note: 'For clothing and footwear, samples and size specifications matter more than in most categories. A sample confirms the material, the construction and the fit before a bulk order, and the size chart is what keeps that bulk order matching the sample — which is why both are settled before production rather than during it.',
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
    title: 'Questions about sourcing apparel, footwear and bags.',
    items: [
      {
        question: 'Can you source clothing from a photo?',
        answer:
          'Yes, and a photo is usually only the beginning in this category. The design can be read from an image, but the material, the construction and the size range have to come from you or from a sample, because those are what a factory actually quotes against.',
        link: { label: 'Product Sourcing', href: '/services/product-sourcing' },
      },
      {
        question: 'Can you source custom bags?',
        answer:
          'Yes. Bags are often the most straightforward item in this category to have made, because the construction is usually simpler than a garment while the hardware and the finish carry most of the look. Material, dimensions, hardware and any branding are the four things a supplier needs.',
      },
      {
        question: 'Can you work with my size chart?',
        answer:
          'Yes, and it is better to send one than not. A size chart can be passed to a supplier and used as the basis for the sizing, so the bulk order matches the sizes you actually sell. Where no chart exists, measurements taken from a sample are the usual starting point.',
      },
      {
        question: 'Can you arrange a sample before bulk production?',
        answer:
          'Yes, and in this category it is worth doing wherever the project allows. A sample confirms the material, the construction, the fit and the size before the full quantity is produced, which is why it is normally the stage before a bulk order rather than part of it.',
        link: { label: 'Product Sourcing', href: '/services/product-sourcing' },
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

export const apparelFootwearBags = { slug, meta, hero, sections, finalCta };
