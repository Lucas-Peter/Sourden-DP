/**
 * SOURDEN — /industries/home-living
 * ---------------------------------------------------------------------------
 * Category page 03 of 09, from the Industries child-pages brief (§6).
 *
 * ── WHAT THE BRIEF SUPPLIED, AND WHAT THIS FILE AUTHORS ─────────────────────
 * Eyebrow, H1 and intro are the brief's; the ten product types, the eight buyer
 * needs, the nine sourcing considerations and the five FAQ questions are the
 * brief's. This category's brief does NOT give an approach section, so §4's six
 * stages are authored here — built from the factors the brief does name
 * (dimensions, weight, fragility, shipping volume) rather than invented.
 * Everything marked 〔added〕 is written here.
 *
 * ── THE PER-CATEGORY INSTRUCTION (brief §6) ────────────────────────────────
 * "For larger or fragile products, explain that shipping cost can be strongly
 * affected by dimensions, weight and packaging."
 *
 * That explanation is the §6 `note`, because §6 is the section that lists
 * Weight, Fragility and Shipping volume in the first place — a disclaimer
 * anywhere else would be answering a question the reader has not asked yet. The
 * point it makes is a sourcing point, not a shipping-services pitch: packing
 * volume is part of the landed cost, and it is decided by the product and its
 * carton rather than by the freight rate alone.
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
   HERO  (brief §3 and §6)
   =========================================================================== */

export const hero = {
  eyebrow: 'INDUSTRIES / HOME & LIVING',
  title: 'Home and living products, sourced from the right suppliers.',
  description:
    'From practical household products to decorative and lifestyle items, Sourden helps buyers find suppliers that fit their product, quantity, pricing and packaging requirements.',
  image: {
    key: 'industryHomeLiving',
    /** 〔added〕 — the brief specifies the image but not its caption. */
    caption: 'HOMEWARES ON THE ASSEMBLY BENCH',
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
    title: 'From storage and kitchenware to decor and lighting.',
    description:
      'This is the widest category on the site by physical size — the range runs from something that fits in a hand to something that needs a pallet. These are the groups buyers ask about most.',
    /** The brief's ten product types, in its order. */
    items: [
      'Home organization',
      'Storage products',
      'Kitchenware and accessories',
      'Home decor',
      'Lighting products',
      'Bathroom accessories',
      'Garden and outdoor home products',
      'Furniture accessories',
      'Household tools',
      'Seasonal home products',
    ],
    /**
     * 〔added〕 — the brief gives no note for this category. The one thing worth
     * saying here is the thing that catches people out: in this category the
     * size of the product is part of the sourcing brief, not a detail of it.
     */
    note: 'These are examples rather than a fixed list. Larger items — furniture, lighting, garden products — are worth describing early, because their dimensions and weight decide which suppliers and which shipping options are realistic.',
  },

  /* ------------------------------------------------ §3 What buyers need ---- */
  {
    type: 'reviewGrid',
    /** 〔added〕 tone. */
    tone: 'ivory',
    eyebrow: 'WHAT BUYERS USUALLY NEED',
    /** 〔added〕 heading and lead. */
    title: 'The same product, at a very different volume.',
    description:
      'Home and living requests are usually about scale in one direction or the other: a first small order, a repeat at volume, or a move away from a supplier who is not working out.',
    /** The brief's eight needs, in its order. The sentences are 〔added〕. */
    items: [
      {
        title: 'Product sourcing',
        description:
          'Starting from the product itself — the piece, its dimensions, and the look it needs to have.',
      },
      {
        title: 'Material alternatives',
        description:
          'You have a material in mind and want to know whether the same result is possible in something lighter, more durable or less expensive.',
      },
      {
        title: 'Customization',
        description:
          'Dimensions, finish, colour or packaging needs to change from what is currently available off the shelf.',
      },
      {
        title: 'Packaging',
        description:
          'The packaging has to survive the journey and then present the product, which for larger items is a design problem as much as a cost one.',
      },
      {
        title: 'Bulk purchasing',
        description:
          'You have a volume in mind and want suppliers whose production setup suits it, rather than one who takes the order and passes the work on.',
      },
      {
        title: 'Small-batch sourcing',
        description:
          'The opposite case: a first order, a test run, or a seasonal line where the quantities are deliberately small.',
      },
      {
        title: 'Repeat orders',
        description:
          'The first pallet or container worked, and the question is whether the same item can be produced again to the same standard.',
      },
      {
        title: 'Supplier replacement',
        description:
          'You already buy the item and want alternatives — for consistency, for price, or because the current supply is not holding up.',
      },
    ],
    note: 'A first small order and a repeat at volume are different sourcing problems, and it helps to say which one you are solving.',
  },

  /* --------------------------------------------- §4 How we approach it ----- */
  {
    type: 'sequence',
    /** 〔added〕 tone. */
    tone: 'white',
    eyebrow: 'HOW WE APPROACH THIS CATEGORY',
    /** 〔added〕 heading and lead. */
    title: 'Find out how it travels before deciding who makes it.',
    description:
      'In most categories the product is the whole brief. Here it is only part of it: a home product is also a size, a weight and a carton, and those decide which suppliers can help and what the whole thing costs to move.',
    /**
     * Authored — this category's brief gives no approach section. The six stages
     * are built from the factors the brief does name (dimensions, weight,
     * fragility, shipping volume, MOQ) so nothing here is invented, and they
     * follow the same six-stage shape as every other category page so the
     * architecture stays constant.
     */
    steps: [
      {
        label: 'Sizing up the product',
        description:
          'Dimensions, weight, materials and how the item behaves in transit. It is better to find out that a piece is awkward to pack before a supplier is chosen than after.',
      },
      {
        label: 'Looking at materials and finishes',
        description:
          'What the item is made of and how it is finished, and whether the same look is achievable in a lighter, flatter or better-protected option.',
      },
      {
        label: 'Finding suppliers for the volume you need',
        description:
          'Some home products are made in very large runs and some are made to order. The search follows the quantity, not the other way round.',
      },
      {
        label: 'Comparing quotations across the whole cost',
        description:
          'Unit price, packaging, carton dimensions and shipping volume together — a lower unit price in a heavier carton is not always the lower landed cost.',
      },
      {
        label: 'Reviewing packaging and protection',
        description:
          'Whether the item survives the journey, and whether the carton it travels in can also be the packaging it is sold in.',
      },
      {
        label: 'Coordinating production, checks and shipping',
        description:
          'The order itself, the pre-shipment check where the project calls for one, and the movement of the goods from China.',
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
    title: 'What decides the options — and the eventual cost.',
    description:
      'In this category the list below is not only about the product. Three of these nine are about what happens after the item is made, and they move the total cost more than most buyers expect.',
    /** The brief's nine considerations, in its order. */
    items: [
      'Materials',
      'Dimensions',
      'Weight',
      'Packaging',
      'Fragility',
      'MOQ',
      'Production time',
      'Shipping volume',
      'Destination requirements',
    ],
    /**
     * 〔added〕, and written because the brief asks for exactly this explanation
     * (§6). The claim is deliberately narrow: it is about packing volume and the
     * carton, not about freight rates, which depend on the route and the carrier
     * and are not something this page can state.
     */
    note: 'For larger or fragile products, shipping cost can be strongly affected by dimensions, weight and packaging — not only by the weight of the goods. A carton a few centimetres larger than it needs to be is paid for on every unit shipped, which is why packing is decided while the product is still being specified.',
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
    title: 'Questions about sourcing home and living products.',
    /** The brief's five questions, with 〔added〕 answers. */
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
      {
        question: 'Can you compare suppliers?',
        answer:
          'Yes. We put the options side by side against the same specification — product, dimensions, MOQ, price and lead time — and for larger items we include carton size, because packing volume is part of what you are paying for.',
        link: { label: 'Product Sourcing', href: '/services/product-sourcing' },
      },
      {
        question: 'Can you arrange pre-shipment inspection?',
        answer:
          'Yes, where it is part of the project. For furniture and larger products a check before shipment usually covers the agreed dimensions, finish, hardware and packaging. What can be checked depends on what was specified with the supplier beforehand.',
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

export const homeLiving = { slug, meta, hero, sections, finalCta };
