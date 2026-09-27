/**
 * SOURDEN — /industries/electronics-accessories
 * ---------------------------------------------------------------------------
 * Category page 05 of 09, from the Industries child-pages brief (§8).
 *
 * ── WHAT THE BRIEF SUPPLIED, AND WHAT THIS FILE AUTHORS ─────────────────────
 * Eyebrow, H1 and intro are the brief's; the ten product types, the seven buyer
 * needs, the ten sourcing considerations, the regulatory wording block and the
 * five FAQ questions are the brief's. This category's brief gives no approach
 * section, so §4's six stages are authored — built from the specification items
 * the brief itself lists (voltage, power, plug type, battery).
 *
 * ── THE PER-CATEGORY CONSTRAINT (brief §8) ─────────────────────────────────
 * "Be careful not to make certification or compliance guarantees."
 *
 * Sourcing a product is not certification of it, and this page never lets those
 * two run together:
 *   1. §6 carries the brief's own wording verbatim, and that wording puts the
 *      requirement on the buyer's product and market.
 *   2. §4's fourth and sixth stages describe checking samples against the
 *      requirement the buyer wrote and coordinating an inspection — not testing,
 *      approving or certifying anything.
 *   3. The FAQ answers say what sourcing does (a requirement is written down,
 *      passed to a supplier, acknowledged back) and state plainly what it is not
 *      ("we do not provide engineering design or validation"; formal testing is
 *      "arranged separately and is not something sourcing itself provides").
 *
 * The page also makes no statement about what any product can do electrically —
 * no rating, no compatibility, no performance claim appears anywhere in it.
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
   HERO  (brief §3 and §8)
   =========================================================================== */

export const hero = {
  eyebrow: 'INDUSTRIES / ELECTRONICS & ACCESSORIES',
  title: 'Electronics and accessories, sourced with specifications in focus.',
  description:
    'Sourcing electronics requires more than comparing prices. Sourden helps buyers communicate technical requirements, compare suppliers and coordinate sourcing based on the intended product and market.',
  image: {
    key: 'industryElectronicsAccessories',
    /** 〔added〕 — the brief specifies the image but not its caption. */
    caption: 'ASSEMBLY AND TESTING OF ELECTRONIC ACCESSORIES',
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
    title: 'Cables, chargers, adapters, audio and small devices.',
    description:
      'In most categories a product name is enough to start a search. Here it is not: a cable or a charger is defined by its specification, so the specification is what a brief has to carry.',
    /** The brief's ten product types, in its order. */
    items: [
      'Consumer electronics accessories',
      'Charging accessories',
      'Cables',
      'Adapters',
      'Phone accessories',
      'Computer accessories',
      'Audio accessories',
      'LED products',
      'Small electronic devices',
      'Electronic components and accessories',
    ],
    /**
     * 〔added〕 — the brief gives no note for this category. Written to be a note
     * about the list and the brief, and deliberately silent about what any
     * product does or is approved for.
     */
    note: 'These are examples rather than a fixed list. If you can describe the requirement — what it connects to, what it has to fit, and what market it is going to — that is usually a better starting point in this category than a product name.',
  },

  /* ------------------------------------------------ §3 What buyers need ---- */
  {
    type: 'reviewGrid',
    /** 〔added〕 tone. */
    tone: 'ivory',
    eyebrow: 'WHAT BUYERS USUALLY NEED',
    /** 〔added〕 heading and lead. */
    title: 'Either a product to match, or a requirement to satisfy.',
    description:
      'Requests in this category come in two directions. One starts from a product and looks for suppliers; the other starts from a technical requirement and looks for whatever product satisfies it. The second is usually the more precise brief.',
    /** The brief's seven needs, in its order. The sentences are 〔added〕. */
    items: [
      {
        title: 'Product matching',
        description:
          'You have a product in mind and want suppliers making something equivalent, described precisely enough that the comparison means something.',
      },
      {
        title: 'Specification matching',
        description:
          'The technical requirement is the brief — voltage, connector, rating, dimensions — and the product is whatever satisfies it.',
      },
      {
        title: 'Customization',
        description:
          'A cable length, a connector type, a colour, a printed logo or a packaging change has to be made to something that already exists.',
      },
      {
        title: 'Packaging',
        description:
          'Retail packaging, a bundle, or a carton sized for a particular sales channel — often as much of the brief as the product is.',
      },
      {
        title: 'Supplier comparison',
        description:
          'Several suppliers list the same product, and the real differences are in the specification rather than in the description.',
      },
      {
        title: 'Sample sourcing',
        description:
          'You want physical samples before committing, usually to check that the product does what the description says it does.',
      },
      {
        title: 'Production coordination',
        description:
          'An option has been chosen, and the work becomes following it through production, inspection and shipping.',
      },
    ],
    note: 'In this category the specification does the work a photograph does elsewhere. Two suppliers with identical listings can be making two different products.',
  },

  /* --------------------------------------------- §4 How we approach it ----- */
  {
    type: 'sequence',
    /** 〔added〕 tone. */
    tone: 'white',
    eyebrow: 'HOW WE APPROACH THIS CATEGORY',
    /** 〔added〕 heading and lead. */
    title: 'Write the requirement down before looking for suppliers.',
    description:
      'A charging or connection requirement described in a sentence produces quotations that cannot be compared, because each supplier resolves the ambiguity their own way. So the requirement becomes a written specification first, and the specification is what goes to suppliers.',
    /**
     * Authored — this category's brief gives no approach section. The stages are
     * built from the specification items the brief itself lists (voltage, power,
     * plug type, materials, technical specifications, battery requirements) so
     * nothing here is invented, and the shape matches the other category pages.
     */
    steps: [
      {
        label: 'Writing the requirement down',
        description:
          'Voltage, power, plug type, connector, battery, materials and function. Whatever the buyer knows is put in writing, and whatever is unknown is marked as unknown rather than filled in.',
      },
      {
        label: 'Matching the specification to what exists',
        description:
          'Most requests are for something close to a product that already exists. The useful question is how close, and which of the differences actually matter to the application.',
      },
      {
        label: 'Comparing suppliers on capability',
        description:
          'What each one produces, whether the component is made in-house or bought in, and whether the specification was understood or quietly assumed.',
      },
      {
        label: 'Checking samples against the requirement',
        description:
          'A sample is the only way to see whether a connector fits or a product matches its own listing. Where the project warrants it, that check happens before volume rather than after.',
      },
      {
        label: 'Settling packaging and labeling',
        description:
          'How the product is packed and what has to appear on it — which in this category is decided by the destination market rather than by preference.',
      },
      {
        label: 'Coordinating production and inspection',
        description:
          'The order itself, the communication through production, and the check before the goods leave, against the specification that was agreed.',
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
    title: 'What has to be decided before a supplier can quote.',
    description:
      'Half of this list is the product and half of it is the market it is going to. Both matter, and the second half is the part buyers most often leave until later.',
    /** The brief's ten considerations, in its order. */
    items: [
      'Voltage',
      'Power',
      'Plug type',
      'Materials',
      'Technical specifications',
      'Battery requirements',
      'Packaging',
      'Quantity',
      'Destination market',
      'Applicable certifications and regulations',
    ],
    /**
     * The brief's wording, verbatim (§8, "Important note"). This is the page's
     * load-bearing paragraph, and it is deliberately the brief's rather than a
     * paraphrase: it names the categories of requirement that may apply, puts
     * the confirmation on the buyer and the market, and claims nothing about the
     * product. Passing a requirement to a supplier is not the same as the
     * product meeting it, and this paragraph does not blur the two.
     */
    note: 'Electrical and electronic products may be subject to destination-market safety, EMC, labeling, environmental or other regulatory requirements. Buyers should confirm the requirements applicable to their product and market before placing an order.',
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
    title: 'Questions about sourcing electronics and accessories.',
    /** The brief's five questions, with 〔added〕 answers. */
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
      {
        question: 'Can you source products with custom packaging?',
        answer:
          'Yes. Packaging can be specified alongside the product, and in this category it is often where market-related information has to appear. What goes on the packaging is the buyer’s decision for their market; the packaging can be produced to that instruction.',
      },
      {
        question: 'Can you help coordinate product inspection?',
        answer:
          'Yes, where it is part of the project. A pre-shipment check can cover quantity, appearance, packaging, labeling and the functional checks that were agreed in advance. Where a market requires formal testing or certification, that is arranged separately — sourcing itself does not provide it.',
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

export const electronicsAccessories = { slug, meta, hero, sections, finalCta };
