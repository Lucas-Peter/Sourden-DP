/**
 * SOURDEN — /industries/apparel-footwear-bags
 * ---------------------------------------------------------------------------
 * Category page 09 of 09, from the Industries child-pages brief (§12).
 *
 * ── THE CATEGORY'S NAME, AND ONE DELIBERATE DEVIATION FROM THE BRIEF ────────
 * The brief writes this category as "Clothing, Shoes & Bags" at the route
 * `/industries/clothing-shoes-bags`. The site publishes it as
 * "Apparel, Footwear & Bags" at `/industries/apparel-footwear-bags`, and the
 * business confirmed on 2026-09-23 that the site's name is the one to use
 * site-wide — the registry in `industries.js`, the homepage grid, the footer
 * column and the `/industries` directory all already read that way.
 *
 * So this page follows the registry. It also means the H1 is written as
 * "Apparel, footwear and bags, sourced to your specifications." rather than the
 * brief's "Clothing, shoes and bags…": every other category page's H1 names the
 * category in the registry's own words, and one page in nine naming itself
 * something else is how a reader concludes there are two categories. The route
 * is the registry's too — a page at the brief's slug would 404, because the nine
 * links on `/industries` all point at the registry's hrefs.
 *
 * ── WHAT THE BRIEF SUPPLIED, AND WHAT THIS FILE AUTHORS ─────────────────────
 * The intro is the brief's, as are the twelve product types, the nine buyer
 * needs, the twelve sourcing considerations and the five FAQ questions. This
 * category's brief gives no approach section, so §4's six stages are authored —
 * built from the considerations the brief does name (material, fabric,
 * construction, size chart, hardware, samples).
 *
 * ── THE PER-CATEGORY CONSTRAINT (brief §12) ────────────────────────────────
 * "Do not mention or suggest counterfeit branded goods."
 *
 * No brand is named anywhere on this page, and no entry describes a copy of
 * another company's product:
 *   · §2's `note` states the position directly rather than leaving it to be
 *     inferred — sourcing here is for the buyer's own product, design or label.
 *   · §3's branding item says "your own branding … within your own design",
 *     which is customization and nothing else.
 *   · The twelve product types are generic groups, and the two customization
 *     routes are the buyer's own ("Custom apparel", "Packaging and accessories").
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

export const slug = 'apparel-footwear-bags';

/* ===========================================================================
   SEO
   =========================================================================== */

export const meta = {
  title: 'Apparel, Footwear & Bags Sourcing from China | SOURDEN',
  description:
    'Sourcing apparel, footwear and bags from China to your specifications — materials, construction, size charts, samples, customization and packaging.',
};

/* ===========================================================================
   HERO  (brief §3 and §12)
   =========================================================================== */

export const hero = {
  eyebrow: 'INDUSTRIES / APPAREL, FOOTWEAR & BAGS',
  /** The registry's name for this category — see the header note above. */
  title: 'Apparel, footwear and bags, sourced to your specifications.',
  description:
    'Sourden helps buyers source fashion and apparel-related products from China based on materials, dimensions, construction, quantity, customization and target market.',
  image: {
    key: 'industryApparelFootwearBags',
    /** 〔added〕 — the brief specifies the image but not its caption. */
    caption: 'CUTTING, STITCHING AND FINISHING',
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
    title: 'Clothing, footwear, bags and the hardware around them.',
    description:
      'This category has more variables per product than any other on the site: the material, the cut, the construction, the size range and the hardware all have to be settled before a sample is right. These are the groups buyers ask about most.',
    /** The brief's twelve product types, in its order. */
    items: [
      'Clothing',
      'Apparel accessories',
      'Shoes',
      'Sneakers',
      'Bags',
      'Backpacks',
      'Wallets',
      'Travel bags',
      'Fashion accessories',
      'Hats and caps',
      'Custom apparel',
      'Packaging and accessories',
    ],
    /**
     * 〔added〕 — the brief gives no note for this category, and its constraint
     * makes one worth having. Stated plainly rather than implied, because the
     * reader who needs to know will not infer it from a product list.
     */
    note: 'These are examples rather than a fixed list. The work in this category is on your own product, your own design or your own label — sourcing is not a route to another company’s branded goods.',
  },

  /* ------------------------------------------------ §3 What buyers need ---- */
  {
    type: 'reviewGrid',
    /** 〔added〕 tone. */
    tone: 'ivory',
    eyebrow: 'WHAT BUYERS USUALLY NEED',
    /** 〔added〕 heading and lead. */
    title: 'Nine needs, and most of them are about the material.',
    description:
      'In this category the design is usually the easy part — it is the material, the sizing and the sampling that decide whether a bulk order ends up matching the sample.',
    /** The brief's nine needs, in its order. The sentences are 〔added〕. */
    items: [
      {
        title: 'Product matching',
        description:
          'You have a product in mind and want suppliers making something equivalent in the same material and to the same standard.',
      },
      {
        title: 'Custom designs',
        description:
          'You have the design and the pattern, and need it produced rather than sourced from an existing range.',
      },
      {
        title: 'Material sourcing',
        description:
          'The fabric, the leather or the hardware is the requirement, and finding it is the first step rather than the last.',
      },
      {
        title: 'Custom colors',
        description:
          'The design exists and the colourway has to change, which brings dyeing, batch consistency and minimum quantities into the brief.',
      },
      {
        title: 'Logo/branding where appropriate',
        description:
          'Your own branding goes on the product, the hardware or the label — which is ordinary customization, and it stays within your own design.',
      },
      {
        title: 'Packaging',
        description:
          'How the item is packed for retail or for shipping, which for bags and footwear is often part of how it presents.',
      },
      {
        title: 'Size specifications',
        description:
          'The size range and the size chart have to match your market rather than a generic scale.',
      },
      {
        title: 'Small-batch sourcing',
        description:
          'A first order, a capsule line or a test run, where the useful question is what a supplier will accept.',
      },
      {
        title: 'Repeat production',
        description:
          'The first run sold, and the question is whether the same item can be produced again in the same material and to the same size chart.',
      },
    ],
    note: 'A size chart and a sample together are worth more than any description of a garment, and they are the two things that make a repeat order possible.',
  },

  /* --------------------------------------------- §4 How we approach it ----- */
  {
    type: 'sequence',
    /** 〔added〕 tone. */
    tone: 'white',
    eyebrow: 'HOW WE APPROACH THIS CATEGORY',
    /**
     * 〔added〕 — this category's brief does not list an approach section. The six
     * stages are built from the considerations the brief does name (material,
     * fabric, construction, dimensions, size chart, hardware, sample
     * requirements) and follow the same shape as every other category page.
     */
    title: 'Read the product as a construction, not as a picture.',
    description:
      'A photograph shows the design. What decides which factories can make it is the construction — the material, the way it is cut and joined, the hardware and the size range. That is what is settled first here.',
    steps: [
      {
        label: 'Reading the product as a construction',
        description:
          'Material, the way the item is cut and joined, the hardware and the size range. In this category these decide who can make it, which is a different question from what it looks like.',
      },
      {
        label: 'Establishing the size specification',
        description:
          'A size chart, measurements taken from a sample, or the sizing the product already sells in. Sizing is the single thing most likely to go wrong between a sample and a bulk order.',
      },
      {
        label: 'Sourcing the material or matching it',
        description:
          'Whether the fabric, leather or hardware is available as it is or has to be matched — and how close the match has to be for the product to still be the same product.',
      },
      {
        label: 'Finding suppliers whose existing work is closest',
        description:
          'The useful search is for factories already making this class of item, because construction and finishing are where the capability actually differs.',
      },
      {
        label: 'Confirming a sample before bulk',
        description:
          'A sample or counter-sample in the agreed material, at the agreed size, before the production run. In this category this is the stage that prevents the most expensive mistakes.',
      },
      {
        label: 'Managing production, checks and shipping',
        description:
          'The order itself, the communication through production, the check against the agreed specification, and the movement of the goods from China.',
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
    title: 'What has to be settled before a sample is right.',
    description:
      'Twelve items, and the first four are the ones that most often send a sample back for a second attempt: material, fabric, construction and dimensions. The rest are what turn an approved sample into a repeatable order.',
    /** The brief's twelve considerations, in its order. */
    items: [
      'Material',
      'Fabric',
      'Construction',
      'Dimensions',
      'Size chart',
      'Color',
      'Hardware',
      'Logo/customization',
      'Packaging',
      'Quantity',
      'MOQ',
      'Production lead time',
    ],
    /**
     * 〔added〕, and written because the brief asks for exactly this explanation
     * (§12). It says why sampling and sizing matter here rather than in other
     * categories, without claiming that a sample guarantees anything — a sample
     * reduces the risk, it does not remove it, and the wording keeps that
     * distinction.
     */
    note: 'For clothing and footwear, samples and size specifications matter more than in most categories. A sample confirms the material, the construction and the fit before a bulk order, and the size chart is what keeps that bulk order matching the sample — which is why both are settled before production rather than during it.',
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
    title: 'Questions about sourcing apparel, footwear and bags.',
    /** The brief's five questions, with 〔added〕 answers. */
    items: [
      {
        question: 'Can you source clothing from a photo?',
        answer:
          'Yes, and a photo is usually only the beginning in this category. The design can be read from an image, but the material, the construction and the size range have to come from you or from a sample, because those are what a factory actually quotes against.',
        link: { label: 'Product Sourcing', href: '/services/product-sourcing' },
      },
      {
        question: 'Can you source custom bags?',
        answer:
          'Yes. Bags are often the most straightforward item in this category to have made, because the construction is usually simpler than a garment while the hardware and the finish carry most of the look. Material, dimensions, hardware and any branding are the four things a supplier needs.',
      },
      {
        question: 'Can you work with my size chart?',
        answer:
          'Yes, and it is better to send one than not. A size chart can be passed to a supplier and used as the basis for the sizing, so the bulk order matches the sizes you actually sell. Where no chart exists, measurements taken from a sample are the usual starting point.',
      },
      {
        question: 'Can you help with custom packaging?',
        answer:
          'Yes. Packaging can be sourced alongside the product or on its own — a printed bag, a box, a hang tag or a label. What is possible depends on the material and the quantity as much as on the design.',
      },
      {
        question: 'Can you arrange a sample before bulk production?',
        answer:
          'Yes, and in this category it is worth doing wherever the project allows. A sample confirms the material, the construction, the fit and the size before the full quantity is produced, which is why it is normally the stage before a bulk order rather than part of it.',
        link: { label: 'Product Sourcing', href: '/services/product-sourcing' },
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

export const apparelFootwearBags = { slug, meta, hero, sections, finalCta };
