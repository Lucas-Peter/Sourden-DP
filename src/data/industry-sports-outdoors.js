/**
 * SOURDEN — /industries/sports-outdoors
 * ---------------------------------------------------------------------------
 * Category page 07 of 09, from the Industries child-pages brief (§10).
 *
 * ── 2026-10-03 内容精简（松霖指令）────────────────────────────────────────
 * Same pass as every category page: the review grid, the approach sequence, the
 * capability list, the ink rail and the long FAQ are gone. One range image,
 * short buyer needs, the six-word approach flow, four considerations, four
 * related services, the buyer groups, the MOQ statement, a short FAQ.
 *
 * ── THE PER-CATEGORY CONSTRAINT (brief §10) ────────────────────────────────
 * "Avoid making safety claims for products where safety certification may
 * apply." The page never says a product is safe, suitable or approved for any
 * activity; the considerations `note` names where safety requirements commonly
 * apply and puts confirming them on the buyer.
 * ---------------------------------------------------------------------------
 */

import {
  approachSection,
  audienceSection,
  moqSection,
  relatedServicesSection,
  standardFinalCta,
} from './industry-standard.js';

export const slug = 'sports-outdoors';

/* ===========================================================================
   SEO
   =========================================================================== */

export const meta = {
  title: 'Sports & Outdoors Sourcing from China | SOURDEN',
  description:
    'Sourcing sports, fitness and outdoor products from China based on intended use, materials, sizes, quantities and destination market.',
};

/* ===========================================================================
   HERO
   =========================================================================== */

export const hero = {
  eyebrow: 'INDUSTRIES / SPORTS & OUTDOORS',
  title: 'Sports and outdoor products, sourced for real-world use.',
  description:
    'From sports accessories to outdoor equipment and recreational products, SOURDEN helps buyers source products based on intended use, specifications, materials, quantity and target market.',
  image: {
    key: 'industrySportsOutdoors',
    caption: 'SPORTS AND OUTDOOR GEAR IN PRODUCTION',
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
    title: 'Fitness, camping, cycling and everything carried outdoors.',
    description:
      'This category runs from something that fits in a pocket to something that has to be carried, and it has one thing in common: the product is judged by how it holds up in use.',
    items: [
      'Fitness accessories',
      'Training equipment',
      'Sports accessories',
      'Outdoor accessories',
      'Camping products',
      'Hiking accessories',
      'Cycling accessories',
      'Team and event merchandise',
    ],
    note: 'These are examples rather than a fixed list. Where a product may be subject to safety requirements in your market — protective equipment, helmets, climbing or water-sports gear — confirming them is the buyer’s, and it is worth doing before a supplier is chosen rather than after.',
    image: {
      key: 'sourceSportsOutdoors',
      /** 〔added〕 — the brief specifies the image but not its caption. */
      caption: 'SPORTS AND OUTDOOR GEAR',
    },
  },

  /* ------------------------------------------------ §3 What buyers need ---- */
  {
    type: 'checkList',
    /** 〔added〕 tone. */
    tone: 'ivory',
    eyebrow: 'WHAT BUYERS USUALLY NEED',
    /** 〔added〕 heading and lead. */
    title: 'Retail volumes — and club, team and event orders.',
    description:
      'Sports and outdoor sourcing has a second kind of customer that most categories do not: a club, a school, an event or a team buying one batch, with branding that matters.',
    items: [
      'Product sourcing',
      'Customization and branding',
      'Club, team and event orders',
      'Small orders',
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
    title: 'What decides whether the product is right for the job.',
    description:
      'Intended use is the first specification in this category — it decides the material, the weight and the construction, and it is what makes two suppliers’ descriptions of “the same” product stop matching.',
    items: ['Intended use', 'Material', 'Durability requirements', 'Destination market'],
    note: 'Where a product may be subject to safety requirements, the applicable requirements depend on the product and on the destination market, and confirming them is the buyer’s. SOURDEN can pass a requirement to a supplier and have it confirmed back — which is not the same as certifying the product.',
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
    title: 'Questions about sourcing sports and outdoor products.',
    items: [
      {
        question: 'Can you source sports products from photos?',
        answer:
          'Yes. A photo, a link or a sample works as a starting point, and for equipment a sample is often the clearer description. What a picture cannot show — material, weight, construction, and what the product is expected to withstand — has to come from you.',
        link: { label: 'Product Sourcing', href: '/services/product-sourcing' },
      },
      {
        question: 'Can you find customized sports products?',
        answer:
          'Yes. Customization in this category is usually sizes, colours, materials or club and event branding — sometimes on the product and sometimes on the packaging. What a supplier can change depends on how the product is made and on the order quantity.',
      },
      {
        question: 'Can you source products for clubs or teams?',
        answer:
          'Yes, and a club or team order is its own kind of sourcing. The quantity is modest and the branding is specific, so the useful question is which suppliers work at that scale rather than which ones offer the best large-run price.',
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

export const sportsOutdoors = { slug, meta, hero, sections, finalCta };
