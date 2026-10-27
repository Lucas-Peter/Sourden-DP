/**
 * SOURDEN — /industries/fashion-accessories
 * ---------------------------------------------------------------------------
 * Category page 09 of 09, from the Industries child-pages brief (§12).
 *
 * ── THE CATEGORY'S NAME, AND ITS TWO REVISIONS ──────────────────────────────
 * The brief writes this category as "Clothing, Shoes & Bags" at the route
 * `/industries/clothing-shoes-bags`. The business published it site-wide as
 * "Apparel, Footwear & Bags" on 2026-09-23, then renamed it to
 * "Fashion & Accessories" at `/industries/fashion-accessories` on 2026-10-27 —
 * the rename was made before launch, so no redirect is published for the old
 * route. The registry (`industries.js`) is the single source of the name; this
 * page follows it.
 *
 * ── 2026-10-03 内容精简（松霖指令）────────────────────────────────────────
 * Same pass as every category page: the review grid, the approach sequence, the
 * capability list, the ink rail and the long FAQ are gone. One range image,
 * short buyer needs, the six-word approach flow, four considerations, four
 * related services, the buyer groups, the MOQ statement, a short FAQ.
 * ---------------------------------------------------------------------------
 */

import {
  approachSection,
  audienceSection,
  moqSection,
  relatedServicesSection,
  standardFinalCta,
} from './industry-standard.js';

export const slug = 'fashion-accessories';

/* ===========================================================================
   SEO
   =========================================================================== */

export const meta = {
  title: 'Fashion & Accessories Sourcing from China | SOURDEN',
  description:
    'Sourcing fashion and accessories from China to your specifications — apparel, footwear, bags and jewellery, from material and construction through to size charts, samples and packaging.',
};

/* ===========================================================================
   HERO
   =========================================================================== */

export const hero = {
  eyebrow: 'INDUSTRIES / FASHION & ACCESSORIES',
  /** The registry's name for this category — see the header note above. */
  title: 'Fashion and accessories, sourced to your specifications.',
  description:
    'SOURDEN helps buyers source apparel, footwear, bags, jewellery and other fashion accessories from China based on materials, dimensions, construction, quantity, customization and target market.',
  image: {
    key: 'industryFashionAccessories',
    caption: 'FASHION AND ACCESSORIES, WORN AND CARRIED',
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
    title: 'Clothing, footwear, bags and the accessories around them.',
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
    image: {
      key: 'sourceFashionAccessories',
      /** 〔added〕 — the brief specifies the image but not its caption. */
      caption: 'FASHION & ACCESSORIES',
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
    title: 'Questions about sourcing fashion and accessories.',
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

export const fashionAccessories = { slug, meta, hero, sections, finalCta };
