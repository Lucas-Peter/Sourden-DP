/**
 * SOURDEN — /industries/wood-products
 * ---------------------------------------------------------------------------
 * Category page 03 of 09, from the Industries child-pages brief (§6).
 *
 * ── 2026-10-06 类别替换（松霖指令）─────────────────────────────────────────
 * "Home & Living" became "Wood Products": the sourcing region has an established
 * wood-products industrial belt, so this category states a real part of the
 * supply chain rather than a broad "homeware" label that also read as
 * overlapping Consumer Products. The page keeps the same nine-section
 * architecture as every other category page; only the words change.
 *
 * ── THE PER-CATEGORY INSTRUCTION (brief §6) ────────────────────────────────
 * "For larger or fragile products, explain that shipping cost can be strongly
 * affected by dimensions, weight and packaging." That explanation is the §6
 * `note` — it names the mechanism (packing volume is part of landed cost), not
 * a freight rate.
 *
 * ── CLAIMS RULE ────────────────────────────────────────────────────────────
 * Nothing here asserts a client count, a supplier count, years in business, a
 * success rate, an inspection statistic, a testimonial, a certification or an
 * award, and nothing promises guaranteed quality, guaranteed compliance,
 * guaranteed delivery, the lowest price or that SOURDEN can source anything.
 * Where a market has specific requirements around timber treatment, packaging
 * or labelling, the page says those are discussed with the supplier — it never
 * presents them as already satisfied.
 * ---------------------------------------------------------------------------
 */

import {
  approachSection,
  audienceSection,
  moqSection,
  relatedServicesSection,
  standardFinalCta,
} from './industry-standard.js';

export const slug = 'wood-products';

/* ===========================================================================
   SEO
   =========================================================================== */

export const meta = {
  title: 'Wood Products Sourcing from China | SOURDEN',
  description:
    'SOURDEN helps businesses source wooden products from China, including pallets, crates, storage products, packaging, pet products and custom wooden items.',
};

/* ===========================================================================
   HERO
   =========================================================================== */

export const hero = {
  eyebrow: 'WOOD PRODUCTS',
  title: 'Source wooden products from experienced manufacturers in China.',
  description:
    'From wooden pallets and storage products to custom-made wooden items, SOURDEN helps buyers find suitable suppliers, compare options and manage the sourcing process from China.',
  image: {
    key: 'industryWoodProducts',
    caption: 'WOODEN PRODUCTS ON THE WORKSHOP BENCH',
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
    title: 'Pallets, crates, storage, packaging and finished wooden goods.',
    description:
      'Wooden products run from a single machined component to a full pallet load, and the suppliers behind each end of that range are different.',
    items: [
      'Wooden Pallets & Crates',
      'Wooden Storage & Organization',
      'Wooden Boxes & Gift Packaging',
      'Wooden Pet Products',
      'Wooden Furniture Components',
      'Wooden Displays & Fixtures',
      'Custom Wooden Products',
      'Wooden Packaging',
      'Funeral & Memorial Products',
    ],
    note: 'These are examples rather than a fixed list. Wood type, dimensions, thickness and surface finish change which factory can make the product at all, so the sooner those are shared, the sooner the supplier search can be narrowed.',
    image: {
      key: 'sourceWoodProducts',
      /** 〔added〕 — the brief specifies the image but not its caption. */
      caption: 'WOODEN PRODUCTS',
    },
  },

  /* ------------------------------------------------ §3 What buyers need ---- */
  {
    type: 'checkList',
    /** 〔added〕 tone. */
    tone: 'ivory',
    eyebrow: 'WHAT BUYERS USUALLY NEED',
    /** 〔added〕 heading and lead. */
    title: 'The same requirements, whatever the end product.',
    description:
      'Most wood requests come with a specification already in mind; what varies is how much of it is fixed and how it should be presented.',
    items: [
      'Competitive pricing',
      'Flexible quantities',
      'Custom dimensions',
      'Custom designs',
      'Private labeling',
      'Packaging requirements',
      'Consistent quality',
      'Production lead times',
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
    title: 'The details that decide the product — and its cost.',
    description:
      'Wood behaves differently from plastics or metals: it moves with moisture, is cut to a stated thickness, and arrives in a grade that is chosen rather than assumed.',
    items: [
      'Wood type and material',
      'Dimensions and thickness',
      'Weight and load requirements',
      'Surface treatment',
      'Moisture requirements',
      'Custom design',
      'Packaging',
      'Labeling',
      'Quality standards',
      'Production lead time',
      'Shipping volume and weight',
      'Destination requirements',
    ],
    note: 'Where a destination market has specific requirements around timber treatment, packaging or labelling, those are discussed with the supplier before an order is confirmed. SOURDEN does not present regulatory or certification compliance as something automatically guaranteed.',
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
    title: 'Questions about sourcing wood products from China.',
    items: [
      {
        question: 'Can you source custom wooden products?',
        answer:
          'Yes. We can help source wooden products based on drawings, dimensions, photos, samples or other specifications. Custom designs may affect MOQ, pricing and production time.',
        link: { label: 'Product Sourcing', href: '/services/product-sourcing' },
      },
      {
        question: 'Can you source wooden pallets and crates?',
        answer:
          'Yes. We can help source different types of wooden pallets, crates and other wooden packaging products based on dimensions, load requirements and destination.',
      },
      {
        question: 'Can you source wooden products with custom logos or packaging?',
        answer:
          'Yes. Custom branding, engraving, printing and packaging can be discussed with suitable suppliers depending on the product.',
      },
      {
        question: 'Can I order a small quantity?',
        answer:
          'SOURDEN does not impose a fixed MOQ. However, individual suppliers may have their own minimum order requirements depending on the product and customization.',
      },
      {
        question: 'How do wood type and moisture content affect the order?',
        answer:
          'They decide how stable the finished product is in your climate. A different wood, or a different target moisture content, changes the weight, the dimensions and the way the product moves after it arrives — so both are confirmed with the supplier before production starts.',
      },
      {
        question: 'Why do wooden products cost more to ship than expected?',
        answer:
          'Timber is dense and often packed to the outside of a container rather than compressed into it, so freight is usually charged on a mix of actual weight and volume. Describing the final packing early avoids discovering that in the shipping quote.',
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

export const woodProducts = { slug, meta, hero, sections, finalCta };
