/**
 * SOURDEN — /industries/sports-outdoors
 * ---------------------------------------------------------------------------
 * Category page 07 of 09, from the Industries child-pages brief (§10).
 *
 * ── WHAT THE BRIEF SUPPLIED, AND WHAT THIS FILE AUTHORS ─────────────────────
 * Eyebrow, H1 and intro are the brief's, as are the ten product types, the ten
 * sourcing considerations and the five FAQ questions.
 *
 * THIS CATEGORY'S BRIEF IS THINNER THAN THE OTHERS, and two sections are
 * therefore authored here:
 *   · §3 "What Buyers Usually Need" — the brief does not list it at all, so the
 *     seven needs are written from the two things this category actually turns
 *     on: intended use, and the club/team/event order that retail categories do
 *     not have.
 *   · §4 "How We Approach This Category" — also not listed. The six stages are
 *     built from the considerations the brief does name (intended use, material,
 *     weight, durability, customization, size).
 * Everything marked 〔added〕 is written here.
 *
 * ── THE PER-CATEGORY CONSTRAINT (brief §10) ────────────────────────────────
 * "Avoid making safety claims for products where safety certification may
 * apply."
 *
 * The page therefore never says a product is safe, suitable or approved for any
 * activity, and it never says Sourden checks that:
 *   · §6's `note` names the categories of product where safety requirements
 *     commonly apply and puts confirming them on the buyer, while stating what
 *     passing a requirement to a supplier is not.
 *   · §2's `note` and FAQ answers 1 and 5 repeat the same boundary where the
 *     reader is most likely to be looking for the opposite.
 *   · §4 compares products on material, weight and durability as sourcing
 *     criteria — what they are made of — rather than as performance ratings.
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
   HERO  (brief §3 and §10)
   =========================================================================== */

export const hero = {
  eyebrow: 'INDUSTRIES / SPORTS & OUTDOORS',
  title: 'Sports and outdoor products, sourced for real-world use.',
  description:
    'From sports accessories to outdoor equipment and recreational products, Sourden helps buyers source products based on intended use, specifications, materials, quantity and target market.',
  image: {
    key: 'industrySportsOutdoors',
    /** 〔added〕 — the brief specifies the image but not its caption. */
    caption: 'SPORTS AND OUTDOOR GEAR IN PRODUCTION',
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
    title: 'Fitness, camping, cycling and everything carried outdoors.',
    description:
      'This category runs from something that fits in a pocket to something that has to be carried, and it has one thing in common across all of it: the product is judged by how it holds up in use rather than how it looks on a shelf.',
    /** The brief's ten product types, in its order. */
    items: [
      'Fitness accessories',
      'Training equipment',
      'Sports accessories',
      'Outdoor accessories',
      'Camping products',
      'Hiking accessories',
      'Cycling accessories',
      'Recreation products',
      'Team and event merchandise',
      'Outdoor storage and gear',
    ],
    /**
     * 〔added〕 — the brief gives no note for this category. It carries the
     * safety boundary into the first section because this is where a reader
     * recognises their own product in the list and starts thinking about it.
     */
    note: 'These are examples rather than a fixed list. Where a product may be subject to safety requirements in your market — protective equipment, helmets, climbing or water-sports gear — confirming them is the buyer’s, and it is worth doing before a supplier is chosen rather than after.',
  },

  /* ------------------------------------------------ §3 What buyers need ---- */
  {
    type: 'reviewGrid',
    /** 〔added〕 tone. */
    tone: 'ivory',
    eyebrow: 'WHAT BUYERS USUALLY NEED',
    /**
     * 〔added〕 heading, lead and items — this category's brief does not list
     * buyer needs at all. Written from what distinguishes this category from the
     * others: kit that is judged in use, and the club, team or event order that
     * has no equivalent in the retail categories.
     */
    title: 'Retail volumes — and club, team and event orders.',
    description:
      'Sports and outdoor sourcing has a second kind of customer that most categories do not: a club, a school, an event or a team buying one batch, with branding that matters and a quantity that is not a retail run.',
    items: [
      {
        title: 'Product sourcing',
        description:
          'Starting from the product — a piece of kit you have seen, or one you want made.',
      },
      {
        title: 'Existing product matching',
        description:
          'You already sell the item and want suppliers making something equivalent, usually to compare against your current cost or supply.',
      },
      {
        title: 'Customization',
        description:
          'Sizes, colours, materials, branding or a carrying option has to change from what is available.',
      },
      {
        title: 'Club and team orders',
        description:
          'A single batch for a club, a school or a team, where the quantity is modest and the branding is specific to them.',
      },
      {
        title: 'Team and event merchandise',
        description:
          'Items made to be sold or given away around a season, a competition or an event, where the branding carries the design.',
      },
      {
        title: 'Small orders',
        description:
          'A first order or a trial run, where the useful question is which suppliers will accept the quantity at all.',
      },
      {
        title: 'Repeat production',
        description:
          'The kit was right the first time, and the question is whether the same item can be produced again to the same standard.',
      },
    ],
    note: 'A club order and a retail line are different sourcing problems even when the product is identical, and it helps to say which one you are solving.',
  },

  /* --------------------------------------------- §4 How we approach it ----- */
  {
    type: 'sequence',
    /** 〔added〕 tone. */
    tone: 'white',
    eyebrow: 'HOW WE APPROACH THIS CATEGORY',
    /**
     * 〔added〕 — this category's brief does not list an approach section. The six
     * stages are built from the considerations the brief does name (intended use,
     * material, size, weight, durability requirements, customization) and follow
     * the same shape as every other category page.
     */
    title: 'Start from what the product has to survive.',
    description:
      'Intended use is the first specification in this category, not a secondary one. Kit built for occasional use and kit built for daily use can carry the same name, and telling them apart is what the comparison is for.',
    steps: [
      {
        label: 'Establishing what the product has to do',
        description:
          'Where it is used, how hard, by whom and for how long. In this category that question decides more about the product than the picture does.',
      },
      {
        label: 'Looking at the material and the construction',
        description:
          'What it is made from and how it is put together — because the point that fails first is usually a joint, a seam or a fitting rather than the main material.',
      },
      {
        label: 'Finding suppliers for the volume you need',
        description:
          'Some sports products are made in very large runs and some are assembled in smaller batches. A club or event order sits in a different part of the market from a retail line.',
      },
      {
        label: 'Comparing on material, weight and construction',
        description:
          'The same item described by several suppliers is compared on what it is made of, what it weighs and how it is built — rather than on the description, which is often identical.',
      },
      {
        label: 'Settling sizing, branding and packaging',
        description:
          'Sizes or size ranges, any club or event branding, and how the item is packed for retail or for handing out to a team.',
      },
      {
        label: 'Managing production, checks and shipping',
        description:
          'The order itself, the communication through production, the check before the goods leave, and the movement of the goods from China.',
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
    title: 'What decides whether the product is right for the job.',
    description:
      'The first item on this list is the one that carries the rest. Intended use decides the material, the weight, the construction and the sizes — and it is also what makes two suppliers’ descriptions of “the same” product stop matching.',
    /** The brief's ten considerations, in its order. */
    items: [
      'Intended use',
      'Material',
      'Size',
      'Weight',
      'Durability requirements',
      'Packaging',
      'Quantity',
      'Customization',
      'Destination market',
      'Applicable safety requirements',
    ],
    /**
     * 〔added〕 — the brief gives no note for this category, but its constraint
     * requires the safety position to be stated rather than implied, and the
     * consideration list above ends on it. The last sentence draws the boundary
     * the brief draws: passing a requirement on is not certifying the product.
     */
    note: 'Where a product may be subject to safety requirements, the applicable requirements depend on the product and on the destination market, and confirming them is the buyer’s. Sourden can pass a requirement to a supplier and have it confirmed back — which is not the same as certifying the product.',
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
    title: 'Questions about sourcing sports and outdoor products.',
    /** The brief's five questions, with 〔added〕 answers. */
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
      {
        question: 'Can you help with small orders?',
        answer:
          'Sourden does not impose its own minimum order quantity, and finding suppliers whose MOQ fits the order is part of the work. In this category the practical minimum varies widely by product: some items are only produced in large runs, and some are assembled to order.',
      },
      {
        question: 'Can you arrange quality checks?',
        answer:
          'Yes, where it is part of the project. A check before shipment can cover quantity, appearance, sizes, materials and packaging against what was agreed. Where a product needs formal safety testing in your market, that is arranged separately and is not something sourcing provides.',
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

export const sportsOutdoors = { slug, meta, hero, sections, finalCta };
