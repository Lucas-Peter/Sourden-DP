/**
 * SOURDEN — /industries/pet-supplies
 * ---------------------------------------------------------------------------
 * Category page 08 of 09, from the Industries child-pages brief (§11).
 *
 * ── 2026-10-03 内容精简（松霖指令）────────────────────────────────────────
 * Same pass as every category page: the review grid, the approach sequence, the
 * capability list, the ink rail and the long FAQ are gone. One range image,
 * short buyer needs, the six-word approach flow, four considerations, four
 * related services, the buyer groups, the MOQ statement, a short FAQ.
 *
 * ── THE PER-CATEGORY CONSTRAINT (brief §11) ────────────────────────────────
 * "Avoid medical, veterinary or health claims." The whole page is written about
 * the PRODUCT and never about the animal — material, weight, stitching,
 * hardware, construction, sizes, packaging. The considerations `note` carries
 * the brief's own wording verbatim.
 * ---------------------------------------------------------------------------
 */

import {
  approachSection,
  audienceSection,
  moqSection,
  relatedServicesSection,
  standardFinalCta,
} from './industry-standard.js';

export const slug = 'pet-supplies';

/* ===========================================================================
   SEO
   =========================================================================== */

export const meta = {
  title: 'Pet Supplies Sourcing from China | SOURDEN',
  description:
    'Sourcing pet products and accessories from China — supplier research, quotation comparison, purchasing, quality coordination and branded packaging.',
};

/* ===========================================================================
   HERO
   =========================================================================== */

export const hero = {
  eyebrow: 'INDUSTRIES / PET SUPPLIES',
  title: 'Pet products sourced around your requirements.',
  description:
    'Sourden helps buyers source everyday pet products and accessories from China, with supplier research, quotation comparison, purchasing and quality coordination.',
  image: {
    key: 'industryPetSupplies',
    caption: 'PET PRODUCTS IN MOULDING, ASSEMBLY AND PACKAGING',
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
    title: 'Toys, beds, collars, feeding and grooming products.',
    description:
      'This category is mostly textiles, moulded parts and hardware, and it moves quickly at retail — ranges change, sizes change and packaging changes with them.',
    items: [
      'Pet toys',
      'Pet beds',
      'Collars and leashes',
      'Feeding accessories',
      'Grooming tools',
      'Pet travel accessories',
      'Pet clothing',
      'Training accessories',
    ],
    note: 'These are examples rather than a fixed list, and they describe product groups and materials rather than how a product behaves. Where a product is subject to market-specific requirements, those are the buyer’s to confirm — see Sourcing Considerations below.',
    image: {
      key: 'sourcePetSupplies',
      /** 〔added〕 — the brief specifies the image but not its caption. */
      caption: 'PET PRODUCTS',
    },
  },

  /* ------------------------------------------------ §3 What buyers need ---- */
  {
    type: 'checkList',
    /** 〔added〕 tone. */
    tone: 'ivory',
    eyebrow: 'WHAT BUYERS USUALLY NEED',
    /** 〔added〕 heading and lead. */
    title: 'The product is half of it; the packaging is the other half.',
    description:
      'Pet supplies are sold on a shelf or a listing, often to an owner choosing between several near-identical items. That puts more weight on branded packaging than most categories carry.',
    items: [
      'Product sourcing',
      'Customization',
      'Branded packaging',
      'Material and construction changes',
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
    title: 'What decides the options you get back.',
    description:
      'The first three items here are about the product and the rest are about the order and the market. In this category the product items are where two similar quotations usually turn out to differ.',
    items: ['Materials', 'Product construction', 'Packaging', 'Intended market'],
    note: 'Products intended for animal use may be subject to market-specific requirements depending on their materials, function and destination. Buyers should confirm any applicable requirements before placing an order.',
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
    title: 'Questions about sourcing pet products.',
    items: [
      {
        question: 'Can you source pet products from photos?',
        answer:
          'Yes. A photo, a link or a sample works as a starting point, and for a bed, a toy or a harness the construction usually has to be described in words alongside it — the material, the weight and how the parts are joined.',
        link: { label: 'Product Sourcing', href: '/services/product-sourcing' },
      },
      {
        question: 'Can you find custom pet products?',
        answer:
          'Yes. Customization here is usually sizes, colours, materials or a printed design, and often the packaging as well. What a supplier can change depends on how the product is made and on the order quantity.',
      },
      {
        question: 'Can you help with branded packaging?',
        answer:
          'Yes. Branded packaging can be sourced alongside the product or separately, and it usually comes down to the pack type, the material, the printing and the quantity. Where a market requires particular information on the packaging, deciding what that is stays with the buyer — the packaging can be produced to that instruction.',
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

export const petSupplies = { slug, meta, hero, sections, finalCta };
