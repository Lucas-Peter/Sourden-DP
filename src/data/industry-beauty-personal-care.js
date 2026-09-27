/**
 * SOURDEN — /industries/beauty-personal-care
 * ---------------------------------------------------------------------------
 * Category page 02 of 09, from the Industries child-pages brief (§5).
 *
 * ── WHAT THE BRIEF SUPPLIED, AND WHAT THIS FILE AUTHORS ─────────────────────
 * The eyebrow, H1 and intro are the brief's. The ten product types, the eight
 * buyer needs, the nine approach topics, the eight sourcing considerations, the
 * one regulatory wording block and the five FAQ questions are the brief's too.
 * Everything marked 〔added〕 — section headings, leads, the FAQ answers, the image
 * caption and the `tone` values — is authored here.
 *
 * ── THE PER-CATEGORY CONSTRAINT (brief §5) ─────────────────────────────────
 * "Do not imply that Sourden provides medical approval, cosmetic regulatory
 * approval, or product safety certification."
 *
 * Met in three places rather than by one shared disclaimer:
 *   1. §2 lists PRODUCT GROUPS — "Hair accessories", "Beauty tools", "Cosmetic
 *      packaging" — with no formulation, ingredient or effect named anywhere.
 *   2. §6 carries the brief's own wording verbatim, in the section about what a
 *      buyer has to know before ordering, because that is where the reader is
 *      actually asking the question.
 *   3. The FAQ answers say what can be done (requirements passed to a supplier
 *      and acknowledged) and state plainly what that is not (certification),
 *      which is also the site's existing register on `/services`.
 *
 * Nothing here claims an approval of any kind, and nothing states that a product
 * meets the requirements of any market.
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
   HERO  (brief §3 and §5)
   =========================================================================== */

export const hero = {
  eyebrow: 'INDUSTRIES / BEAUTY & PERSONAL CARE',
  title: 'Beauty and personal care products, sourced with the details in mind.',
  description:
    'Sourden helps buyers source beauty and personal care products from China based on product specifications, materials, packaging, quantity and market requirements.',
  image: {
    key: 'industryBeautyPersonalCare',
    /** 〔added〕 — the brief specifies the image but not its caption. */
    caption: 'FILLING AND PACKAGING OF BEAUTY PRODUCTS',
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
    title: 'Tools, accessories, packaging and everything around the product.',
    description:
      'Most of what this category covers is equipment and packaging rather than a formulated product, and that is where the sourcing questions usually sit. The ten groups below are the ones buyers ask about most.',
    /** The brief's ten product types, in its order. */
    items: [
      'Hair accessories',
      'Hair styling accessories',
      'Beauty tools',
      'Personal care accessories',
      'Makeup accessories',
      'Cosmetic packaging',
      'Salon accessories',
      'Manicure and nail accessories',
      'Beauty storage and organization',
      'Personal care tools',
    ],
    /**
     * 〔added〕 — the brief supplies a note for category 01 and not for this one.
     * Kept deliberately in the same register, and deliberately free of any
     * statement about the product: it is a note about the LIST, not about what
     * any item in it is approved to do.
     */
    note: 'These are product groups rather than brands, and they are examples rather than a fixed list. If what you have in mind is not here, describe it — often it can be sourced, and sometimes it cannot, and both answers are worth having early.',
  },

  /* ------------------------------------------------ §3 What buyers need ---- */
  {
    type: 'reviewGrid',
    /** 〔added〕 tone. */
    tone: 'ivory',
    eyebrow: 'WHAT BUYERS USUALLY NEED',
    /** 〔added〕 heading and lead. */
    title: 'A product looking for a supplier, or a specification looking for a product.',
    description:
      'Requests in this category arrive in one of those two shapes. They start the same way — with the specification agreed — and diverge only at the point where a supplier is chosen.',
    /** The brief's eight needs, in its order. The sentences are 〔added〕. */
    items: [
      {
        title: 'Product sourcing',
        description:
          'You are starting from the product rather than from a supplier, and want the options researched against what you described.',
      },
      {
        title: 'Existing product matching',
        description:
          'You already sell the item and want suppliers making something equivalent — usually to compare against your current cost or your current supply.',
      },
      {
        title: 'Customization',
        description:
          'A detail has to change: a colour, a finish, a dimension, a component, or the way the product is presented.',
      },
      {
        title: 'Private-label possibilities',
        description:
          'The product would carry your own name, which usually means changes to labelling and packaging at a minimum.',
      },
      {
        title: 'Packaging',
        description:
          'The packaging is part of the offer — retail-ready, gift-oriented, or built around a specific shelf, shipping or storage requirement.',
      },
      {
        title: 'MOQ',
        description:
          'The product is right and the quantity is not. The question is what a supplier will actually accept at your stage.',
      },
      {
        title: 'Supplier comparison',
        description:
          'Several suppliers appear to offer the same thing, and you want them compared on one basis rather than chosen on price alone.',
      },
      {
        title: 'Repeat production',
        description:
          'The first order is a test. What matters is whether the same product and the same packaging can be produced again later.',
      },
    ],
    note: 'A private-label or customized project can involve all eight at once. It is still one brief, and it is easier to answer as one.',
  },

  /* --------------------------------------------- §4 How we approach it ----- */
  {
    type: 'sequence',
    /** 〔added〕 tone. */
    tone: 'white',
    eyebrow: 'HOW WE APPROACH THIS CATEGORY',
    /** 〔added〕 heading and lead. */
    title: 'Specification first, then the supplier.',
    description:
      'In this category two suppliers can offer "the same" product and be making different things — a different material, a different component, a different presentation. So the specification is settled before suppliers are compared, not after.',
    /**
     * The brief's nine approach topics, condensed to six stages — the first
     * absorbs specification, material, dimensions and function; the fifth
     * absorbs customization; the sixth carries production lead time. All nine
     * topics are present; the sentences are 〔added〕.
     */
    steps: [
      {
        label: 'Specifying the product',
        description:
          'Material, dimensions, components and what the product has to do. This is usually the longest part of a beauty brief, and it is the part that decides everything after it.',
      },
      {
        label: 'Reviewing packaging and presentation',
        description:
          'How the product is packed, labelled and presented — retail, gift or bulk. On a private-label project this is often where the work actually starts.',
      },
      {
        label: 'Comparing suppliers on capability',
        description:
          'What each one produces, which components they make themselves and which they buy in, and whether what they make matches the specification.',
      },
      {
        label: 'Checking quantity and MOQ',
        description:
          'What order quantity the supplier will accept, and how that quantity changes the unit cost and the packaging options.',
      },
      {
        label: 'Confirming customization and labelling',
        description:
          'Which changes are possible without new tooling, and which information has to appear on the product or its packaging in your market.',
      },
      {
        label: 'Managing production and lead time',
        description:
          'Once an option is chosen: the order itself, the communication through production, and the check before the goods leave.',
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
    title: 'What this category asks you to decide before ordering.',
    description:
      'Specification and packaging carry more weight here than in most categories, because the product is often sold on how it looks and how it is described. These are the details that decide what comes back.',
    /** The brief's eight considerations, in its order. */
    items: [
      'Materials',
      'Product specifications',
      'Packaging',
      'Customization',
      'Labeling',
      'MOQ',
      'Target market',
      'Applicable compliance requirements',
    ],
    /**
     * The brief's wording, verbatim (§5, "Important wording"). It is the most
     * load-bearing paragraph on this page: sourcing a product is not a statement
     * that the product is approved anywhere, and the two sentences say where the
     * responsibility for that sits — with the buyer and their market, while
     * Sourden can carry a requirement to a supplier. "Can help communicate …
     * does not replace qualified regulatory or legal advice" is the boundary the
     * brief draws, and it is kept exactly as written.
     */
    note: 'Where products are subject to regulatory, safety, labeling or market-specific requirements, buyers should confirm the applicable requirements for their destination market. Sourden can help communicate requirements with suppliers, but does not replace qualified regulatory or legal advice.',
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
    title: 'Questions about sourcing beauty and personal care products.',
    /** The brief's five questions, with 〔added〕 answers. */
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
          "Often, yes. Private label usually means the product or its packaging carries your own name, which can involve labelling only or changes to the product itself. What is possible depends on the supplier, the product and the order quantity, and we will tell you which parts are straightforward and which are not.",
      },
      {
        question: 'Can you source salon and professional-use products?',
        answer:
          'Yes, where the products are tools, accessories or consumables. Professional-use products are often specified more tightly than retail equivalents, so the requirements matter more rather than less — and they are worth writing down before suppliers are compared.',
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
   §15 — FINAL CTA  (shared, verbatim)
   =========================================================================== */

export const finalCta = standardFinalCta;

/* ===========================================================================
   THE PAGE OBJECT
   =========================================================================== */

export const beautyPersonalCare = { slug, meta, hero, sections, finalCta };
