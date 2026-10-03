/**
 * SOURDEN — /industries/home-living
 * ---------------------------------------------------------------------------
 * Category page 03 of 09, from the Industries child-pages brief (§6).
 *
 * ── 2026-10-03 内容精简（松霖指令）────────────────────────────────────────
 * Same pass as every category page: the review grid, the approach sequence, the
 * capability list, the ink rail and the long FAQ are gone. One range image,
 * short buyer needs, the six-word approach flow, four considerations, four
 * related services, the buyer groups, the MOQ statement, a short FAQ.
 *
 * ── THE PER-CATEGORY INSTRUCTION (brief §6) ────────────────────────────────
 * "For larger or fragile products, explain that shipping cost can be strongly
 * affected by dimensions, weight and packaging." That explanation is the §6
 * `note` — it names the mechanism (packing volume is part of landed cost), not
 * a freight rate.
 * ---------------------------------------------------------------------------
 */

import {
  approachSection,
  audienceSection,
  moqSection,
  relatedServicesSection,
  standardFinalCta,
} from './industry-standard.js';

export const slug = 'home-living';

/* ===========================================================================
   SEO
   =========================================================================== */

export const meta = {
  title: 'Home & Living Sourcing from China | SOURDEN',
  description:
    'Sourcing home, living and household products from China — suppliers matched to your product, quantity, packaging and shipping requirements.',
};

/* ===========================================================================
   HERO
   =========================================================================== */

export const hero = {
  eyebrow: 'INDUSTRIES / HOME & LIVING',
  title: 'Home and living products, sourced from the right suppliers.',
  description:
    'From practical household products to decorative and lifestyle items, Sourden helps buyers find suppliers that fit their product, quantity, pricing and packaging requirements.',
  image: {
    key: 'industryHomeLiving',
    caption: 'HOMEWARES ON THE ASSEMBLY BENCH',
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
    title: 'From storage and kitchenware to decor and lighting.',
    description:
      'This is the widest category on the site by physical size — the range runs from something that fits in a hand to something that needs a pallet.',
    items: [
      'Home organization',
      'Storage products',
      'Kitchenware and accessories',
      'Home decor',
      'Lighting products',
      'Bathroom accessories',
      'Garden and outdoor home products',
      'Furniture accessories',
    ],
    note: 'These are examples rather than a fixed list. Larger items — furniture, lighting, garden products — are worth describing early, because their dimensions and weight decide which suppliers and which shipping options are realistic.',
    image: {
      key: 'sourceHomeLiving',
      /** 〔added〕 — the brief specifies the image but not its caption. */
      caption: 'HOME AND LIVING PRODUCTS',
    },
  },

  /* ------------------------------------------------ §3 What buyers need ---- */
  {
    type: 'checkList',
    /** 〔added〕 tone. */
    tone: 'ivory',
    eyebrow: 'WHAT BUYERS USUALLY NEED',
    /** 〔added〕 heading and lead. */
    title: 'The same product, at a very different volume.',
    description:
      'Home and living requests are usually about scale in one direction or the other: a first small order, a repeat at volume, or a move away from a supplier who is not working out.',
    items: [
      'Product sourcing',
      'Customization',
      'Custom packaging',
      'Bulk purchasing',
      'Small-batch sourcing',
      'Repeat orders and supplier replacement',
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
    title: 'What decides the options — and the eventual cost.',
    description:
      'In this category the list below is not only about the product. Size, weight and packing volume move the total cost more than most buyers expect.',
    items: ['Dimensions', 'Weight', 'Packaging', 'Shipping volume'],
    note: 'For larger or fragile products, shipping cost can be strongly affected by dimensions, weight and packaging — not only by the weight of the goods. A carton a few centimetres larger than it needs to be is paid for on every unit shipped, which is why packing is decided while the product is still being specified.',
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
    title: 'Questions about sourcing home and living products.',
    items: [
      {
        question: 'Can you source furniture and larger home products?',
        answer:
          'Yes, but dimensions and weight drive everything, so they are the first questions rather than the last. A larger item narrows the range of suppliers that can produce and pack it and changes which shipping options are realistic. It is workable — it just leaves less room for a late change.',
        link: { label: 'Product Sourcing', href: '/services/product-sourcing' },
      },
      {
        question: 'Can you source products based on photos?',
        answer:
          'Yes. Photos of a product, or of the space it has to fit, are a useful starting point. With home products the measurements matter as much as the picture, because a design that looks right and a design that fits are two different things.',
      },
      {
        question: 'Can you help with packaging?',
        answer:
          'Yes. Packaging here has two jobs: protecting the item in transit and presenting it in the shop or online. Sometimes one carton does both and sometimes the shipping carton and the retail packaging are separate, and that difference shows up in the total cost.',
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

export const homeLiving = { slug, meta, hero, sections, finalCta };
