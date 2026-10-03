/**
 * SOURDEN — /industries/consumer-products
 * ---------------------------------------------------------------------------
 * Category page 01 of 09, from the Industries child-pages brief (§4).
 *
 * ── 2026-10-03 内容精简（松霖指令）────────────────────────────────────────
 * The page used to carry ten sections: a review grid of six buyer needs, a
 * six-stage "How We Approach" sequence, a "What We Can Help With" list, a
 * six-stage ink rail and a five-question FAQ. Those are gone — "less
 * explanation, more product clarity, more direct path to inquiry" is the whole
 * brief. What remains is: one large range image beside the product categories,
 * a short buyer-needs list, the shared six-word approach flow, four
 * considerations, four related services, the five buyer groups, the MOQ
 * statement and a short FAQ.
 *
 * ── WHAT THIS FILE AUTHORS ─────────────────────────────────────────────────
 * The category-specific copy: the sourceable products, the buyer needs, the
 * sourcing considerations and the FAQ. Everything shared lives once in
 * `industry-standard.js` (approach, related services, audience, MOQ, closing
 * band). The category's name, number, route and image key come from
 * `industries.js` via the shell.
 *
 * ── CLAIMS RULE ────────────────────────────────────────────────────────────
 * Nothing here states a client or supplier count, years in business, a success
 * rate, a certification, a testimonial or a case study; nothing promises
 * guaranteed quality, guaranteed delivery, the lowest price or that Sourden can
 * source anything. Consumer Products carries no extra per-category constraint.
 * ---------------------------------------------------------------------------
 */

import {
  approachSection,
  audienceSection,
  moqSection,
  relatedServicesSection,
  standardFinalCta,
} from './industry-standard.js';

export const slug = 'consumer-products';

/* ===========================================================================
   SEO
   =========================================================================== */

export const meta = {
  title: 'Consumer Products Sourcing from China | SOURDEN',
  description:
    'Sourcing everyday consumer products from China — supplier research, quotation comparison, purchasing, quality control and shipping.',
};

/* ===========================================================================
   HERO
   =========================================================================== */

export const hero = {
  eyebrow: 'INDUSTRIES / CONSUMER PRODUCTS',
  title: 'Everyday products, sourced around your requirements.',
  description:
    'From simple household goods to everyday consumer products, Sourden helps buyers identify suitable suppliers, compare options and coordinate the sourcing process from China.',
  image: {
    key: 'industryConsumerProducts',
    caption: 'CONSUMER GOODS IN PRODUCTION AND PACKING',
  },
};

/* ===========================================================================
   SECTIONS — in render order
   =========================================================================== */

export const sections = [
  /* ------------------------------------------------- §2 What we can source -- */
  {
    type: 'source',
    /** 〔added〕 tone. */
    tone: 'white',
    eyebrow: 'WHAT WE CAN SOURCE',
    /** 〔added〕 heading and lead. */
    title: 'Everyday goods, from household basics to seasonal lines.',
    description:
      'Consumer products cover a wider range than any other category on this site. These are the kinds of items buyers most often ask us to look at.',
    items: [
      'Household accessories',
      'Storage and organization products',
      'Kitchen accessories',
      'Personal-use accessories',
      'Travel accessories',
      'Small consumer goods',
      'Promotional and gift items',
      'Seasonal products',
    ],
    /** The brief's note, verbatim — the site's position on every category. */
    note: "These are examples, not a fixed catalog. If you have a specific product in mind, tell us what you need and we'll assess the sourcing options.",
    image: {
      key: 'sourceConsumerProducts',
      /** 〔added〕 — the brief specifies the image but not its caption. */
      caption: 'A RANGE OF CONSUMER PRODUCTS',
    },
  },

  /* ------------------------------------------------ §3 What buyers need ---- */
  {
    type: 'checkList',
    /** 〔added〕 tone. */
    tone: 'ivory',
    eyebrow: 'WHAT BUYERS USUALLY NEED',
    /** 〔added〕 heading and lead. */
    title: 'Most requests start from one of these.',
    description:
      'A consumer product brief rarely arrives complete. It usually begins as one of these, and the first piece of work is turning it into something a supplier can quote against.',
    items: [
      'A specific product',
      'An equivalent based on a reference image',
      'A customized version',
      'A better supplier for an existing product',
      'A lower-MOQ option',
      'A supplier for repeat production',
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
    title: 'What shapes the options you get back.',
    description:
      'These are the details that decide which suppliers are relevant and how their quotations compare with each other.',
    items: ['Material', 'Packaging', 'Quantity', 'Target price'],
    note: 'Most of these are open at the start, and that is normal. Where something is not decided, we will say so rather than assume a value and quote against it.',
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
    title: 'Questions about sourcing consumer products.',
    items: [
      {
        question: 'Can you source a product from a photo?',
        answer:
          'Yes. A photo, a link or a written description can all be a starting point, and an image is often the fastest way to explain what you mean. What helps most is anything you can add about dimensions, material, quantity and destination.',
      },
      {
        question: 'Can you help with small quantities?',
        answer:
          'Sourden does not impose its own minimum order quantity, and finding suppliers whose MOQ fits your stage is part of the work. The practical minimum is set by the supplier and the product: some everyday items are only made in large runs, while others can be produced in smaller batches at a higher unit cost.',
        link: { label: 'Explore product sourcing', href: '/services/product-sourcing' },
      },
      {
        question: 'Can you find customized versions?',
        answer:
          'Often, yes. What can be changed — material, dimensions, colour, printing, packaging — depends on the product and on how a supplier is set up to produce it. We will tell you which changes a supplier can make and which would mean developing something new.',
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

export const consumerProducts = { slug, meta, hero, sections, finalCta };
