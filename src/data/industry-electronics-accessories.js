/**
 * SOURDEN — /industries/electronics-accessories
 * ---------------------------------------------------------------------------
 * Category page 05 of 09, from the Industries child-pages brief (§8).
 *
 * ── 2026-10-03 内容精简（松霖指令）────────────────────────────────────────
 * Same pass as every category page: the review grid, the approach sequence, the
 * capability list, the ink rail and the long FAQ are gone. One range image,
 * short buyer needs, the six-word approach flow, four considerations, four
 * related services, the buyer groups, the MOQ statement, a short FAQ.
 *
 * ── THE PER-CATEGORY CONSTRAINT (brief §8) ─────────────────────────────────
 * "Be careful not to make certification or compliance guarantees." Sourcing a
 * product is not certification of it; the considerations `note` carries the
 * brief's own wording, which puts the requirement on the buyer's product and
 * market. No rating, compatibility or performance claim appears anywhere.
 * ---------------------------------------------------------------------------
 */

import {
  approachSection,
  audienceSection,
  moqSection,
  relatedServicesSection,
  standardFinalCta,
} from './industry-standard.js';

export const slug = 'electronics-accessories';

/* ===========================================================================
   SEO
   =========================================================================== */

export const meta = {
  title: 'Electronics & Accessories Sourcing from China | SOURDEN',
  description:
    'Sourcing electronics and accessories from China against a written specification — supplier comparison, sample coordination, production and inspection.',
};

/* ===========================================================================
   HERO
   =========================================================================== */

export const hero = {
  eyebrow: 'INDUSTRIES / ELECTRONICS & ACCESSORIES',
  title: 'Electronics and accessories, sourced with specifications in focus.',
  description:
    'Sourcing electronics requires more than comparing prices. SOURDEN helps buyers communicate technical requirements, compare suppliers and coordinate sourcing based on the intended product and market.',
  image: {
    key: 'industryElectronicsAccessories',
    caption: 'ASSEMBLY AND TESTING OF ELECTRONIC ACCESSORIES',
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
    title: 'Cables, chargers, adapters, audio and small devices.',
    description:
      'In most categories a product name is enough to start a search. Here it is not: a cable or a charger is defined by its specification, so the specification is what a brief has to carry.',
    items: [
      'Consumer electronics accessories',
      'Charging accessories',
      'Cables',
      'Adapters',
      'Phone accessories',
      'Computer accessories',
      'Audio accessories',
      'LED products',
    ],
    note: 'These are examples rather than a fixed list. If you can describe the requirement — what it connects to, what it has to fit, and what market it is going to — that is usually a better starting point in this category than a product name.',
    image: {
      key: 'sourceElectronicsAccessories',
      /** 〔added〕 — the brief specifies the image but not its caption. */
      caption: 'ELECTRONICS AND ACCESSORIES',
    },
  },

  /* ------------------------------------------------ §3 What buyers need ---- */
  {
    type: 'checkList',
    /** 〔added〕 tone. */
    tone: 'ivory',
    eyebrow: 'WHAT BUYERS USUALLY NEED',
    /** 〔added〕 heading and lead. */
    title: 'A product to match, or a requirement to satisfy.',
    description:
      'Requests in this category come in two directions: one starts from a product, the other from a technical requirement that whatever product satisfies it.',
    items: [
      'Product matching',
      'Specification matching',
      'Customization and packaging',
      'Supplier comparison',
      'Sample and production coordination',
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
    title: 'What has to be decided before a supplier can quote.',
    description:
      'Half of this list is the product and half of it is the market it is going to. Both matter, and the second half is the part buyers most often leave until later.',
    items: ['Technical specifications', 'Plug type', 'Packaging', 'Destination market'],
    note: 'Electrical and electronic products may be subject to destination-market safety, EMC, labeling, environmental or other regulatory requirements. Buyers should confirm the requirements applicable to their product and market before placing an order.',
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
    title: 'Questions about sourcing electronics and accessories.',
    items: [
      {
        question: 'Can you source electronics based on a sample?',
        answer:
          'Yes, and a physical sample is often the most efficient brief in this category, because it carries the specification without anyone having to transcribe it. The work then becomes finding suppliers who can produce something equivalent and confirming the details a sample does not show — materials, internal components and how it is assembled.',
        link: { label: 'Product Sourcing', href: '/services/product-sourcing' },
      },
      {
        question: 'Can you find products with specific voltage or plug requirements?',
        answer:
          'Yes. Voltage, plug type and connector are specification items, and they can be put to a supplier directly. What a supplier can offer depends on their existing range and on the quantity, since some variants are standard and others mean a change to the assembly or the tooling.',
      },
      {
        question: 'Can you help communicate technical specifications?',
        answer:
          'That is most of the work in this category. A specification can be written out, passed to a supplier and confirmed back item by item, so a misunderstanding becomes visible before production instead of after it. We do not provide engineering design or technical validation — the job here is making sure the requirement you wrote reaches the supplier intact.',
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

export const electronicsAccessories = { slug, meta, hero, sections, finalCta };
