/**
 * SOURDEN — /industries/pet-supplies
 * ---------------------------------------------------------------------------
 * Category page 08 of 09, from the Industries child-pages brief (§11).
 *
 * ── WHAT THE BRIEF SUPPLIED, AND WHAT THIS FILE AUTHORS ─────────────────────
 * Eyebrow, H1 and intro are the brief's, as are the ten product types, the nine
 * sourcing considerations, the animal-use wording block and the five FAQ
 * questions.
 *
 * THIS CATEGORY'S BRIEF, LIKE CATEGORY 07, OMITS TWO SECTIONS, and both are
 * authored here:
 *   · §3 "What Buyers Usually Need" — not listed. The seven needs are written
 *     from what this category actually turns on: branded retail packaging, and
 *     material/construction changes.
 *   · §4 "How We Approach This Category" — not listed. The six stages are built
 *     from the considerations the brief does name (materials, size, durability,
 *     product construction).
 *
 * ── THE PER-CATEGORY CONSTRAINT (brief §11) ────────────────────────────────
 * "Avoid medical, veterinary or health claims."
 *
 * The whole page is written about the PRODUCT and never about the animal:
 * material, weight, stitching, hardware, construction, sizes, packaging. Nowhere
 * does it say a product is safe, suitable, harmless, durable in the animal's
 * hands, or good for an animal — and §4's opening line says explicitly that the
 * useful description in this category is about the product rather than about
 * what it is for, which is what keeps every later section on the right side of
 * the line.
 *   · §6 carries the brief's own wording verbatim; "market-specific requirements"
 *     is kept as written and never restated as a product claim.
 *   · FAQ answer 3 draws the packaging boundary the same way the site draws it
 *     elsewhere: producing an instruction is not deciding it.
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

export const slug = 'pet-supplies';

/* ===========================================================================
   SEO
   =========================================================================== */

export const meta = {
  title: 'Pet Supplies Sourcing from China | SOURDEN',
  description:
    'Sourcing pet products and accessories from China — supplier research, quotation comparison, purchasing, quality coordination and branded packaging.',
};

/* ===========================================================================
   HERO  (brief §3 and §11)
   =========================================================================== */

export const hero = {
  eyebrow: 'INDUSTRIES / PET SUPPLIES',
  title: 'Pet products sourced around your requirements.',
  description:
    'Sourden helps buyers source everyday pet products and accessories from China, with supplier research, quotation comparison, purchasing and quality coordination.',
  image: {
    key: 'industryPetSupplies',
    /** 〔added〕 — the brief specifies the image but not its caption. */
    caption: 'PET PRODUCTS IN MOULDING, ASSEMBLY AND PACKAGING',
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
    title: 'Toys, beds, collars, feeding and grooming products.',
    description:
      'This category is mostly textiles, moulded parts and hardware, and it moves quickly at retail — ranges change, sizes change and packaging changes with them. These are the groups buyers ask about most.',
    /** The brief's ten product types, in its order. */
    items: [
      'Pet toys',
      'Pet beds',
      'Collars and leashes',
      'Feeding accessories',
      'Grooming tools',
      'Pet travel accessories',
      'Pet storage',
      'Pet clothing',
      'Training accessories',
      'Pet household products',
    ],
    /**
     * 〔added〕 — the brief gives no note for this category. It says what the
     * page is about, which in this category needs saying: product groups and
     * materials, not behaviour.
     */
    note: 'These are examples rather than a fixed list, and they describe product groups and materials rather than how a product behaves. Where a product is subject to market-specific requirements, those are the buyer’s to confirm — see Sourcing Considerations below.',
  },

  /* ------------------------------------------------ §3 What buyers need ---- */
  {
    type: 'reviewGrid',
    /** 〔added〕 tone. */
    tone: 'ivory',
    eyebrow: 'WHAT BUYERS USUALLY NEED',
    /**
     * 〔added〕 heading, lead and items — this category's brief does not list
     * buyer needs. Written from the two things that distinguish it: branded
     * retail packaging, and the material or construction change that most
     * follow-up orders turn into.
     */
    title: 'The product is half of it; the packaging is the other half.',
    description:
      'Pet supplies are sold on a shelf or a listing, often to an owner choosing between several near-identical items. That puts more weight on branded packaging than most categories carry, and it is a common second half of the brief.',
    items: [
      {
        title: 'Product sourcing',
        description:
          'Starting from the product itself — usually because nothing suitable is available locally at the price the market supports.',
      },
      {
        title: 'Existing product matching',
        description:
          'You already sell the item and want suppliers making something equivalent, usually to compare against your current cost or supply.',
      },
      {
        title: 'Customization',
        description:
          'Sizes, colours, materials or a printed design has to change from what is currently available.',
      },
      {
        title: 'Branded packaging',
        description:
          'The packaging carries your brand at retail, which usually means printing, a label or a printed bag rather than plain bulk packing.',
      },
      {
        title: 'Material and construction changes',
        description:
          'A material is too heavy, too light or does not hold its shape, and the product has to be built differently.',
      },
      {
        title: 'Small quantities',
        description:
          'A first order, a test line or a modest retail run, where the useful question is what a supplier will accept.',
      },
      {
        title: 'Repeat production',
        description:
          'The first order sold through, and the question is whether the same product can be produced again to the same construction.',
      },
    ],
    note: 'A material or construction change sounds like a small request and usually is not — it can change the supplier, the tooling and the minimum quantity at once.',
  },

  /* --------------------------------------------- §4 How we approach it ----- */
  {
    type: 'sequence',
    /** 〔added〕 tone. */
    tone: 'white',
    eyebrow: 'HOW WE APPROACH THIS CATEGORY',
    /**
     * 〔added〕 — this category's brief does not list an approach section. The six
     * stages are built from the considerations the brief does name (materials,
     * size, durability, product construction) and follow the same shape as every
     * other category page.
     */
    title: 'Describe the product, not what it is for.',
    description:
      'In this category the useful description is about the product itself — its material, its weight, how the parts are joined and what it has to survive — because that is what can be compared between suppliers. Two suppliers can describe the same item identically and be making different products.',
    steps: [
      {
        label: 'Establishing what the product has to withstand',
        description:
          'How it is used, how it is handled and what it is made of — stated as properties of the product rather than as expectations of it.',
      },
      {
        label: 'Looking at materials and construction',
        description:
          'Fabric weight, filling, stitching, hardware and fittings. The part that fails first is usually a seam, a clasp or a filling that shifts, so construction is what the comparison turns on.',
      },
      {
        label: 'Finding suppliers for your volume',
        description:
          'Simple items are made in very large runs and more specific ones in smaller batches. The search follows the quantity and the product type together.',
      },
      {
        label: 'Comparing on material and construction',
        description:
          'The same item from several suppliers is compared on what it is made of and how it is assembled, because the descriptions are often identical and the products are not.',
      },
      {
        label: 'Settling sizes and branded packaging',
        description:
          'Size ranges, and the packaging the product is sold in — which for a retail brand is often as much of the brief as the product is.',
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
    title: 'What decides the options you get back.',
    description:
      'The first four items here are about the product and the rest are about the order and the market. In this category the product items are where two similar quotations usually turn out to differ.',
    /** The brief's nine considerations, in its order. */
    items: [
      'Materials',
      'Size',
      'Durability',
      'Product construction',
      'Packaging',
      'Quantity',
      'Customization',
      'Intended market',
      'Applicable product requirements',
    ],
    /**
     * The brief's wording, verbatim (§11, "Important note"). Kept exactly as
     * written: it says which products may carry requirements, what those
     * requirements depend on, and whose job confirming them is — and it makes no
     * statement about any product or about any animal.
     */
    note: 'Products intended for animal use may be subject to market-specific requirements depending on their materials, function and destination. Buyers should confirm any applicable requirements before placing an order.',
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
    title: 'Questions about sourcing pet products.',
    /** The brief's five questions, with 〔added〕 answers. */
    items: [
      {
        question: 'Can you source pet products from photos?',
        answer:
          'Yes. A photo, a link or a sample works as a starting point, and for a bed, a toy or a harness the construction usually has to be described in words alongside it — the material, the weight and how the parts are joined.',
        link: { label: 'Product Sourcing', href: '/services/product-sourcing' },
      },
      {
        question: 'Can you find custom pet products?',
        answer:
          'Yes. Customization here is usually sizes, colours, materials or a printed design, and often the packaging as well. What a supplier can change depends on how the product is made and on the order quantity.',
      },
      {
        question: 'Can you help with branded packaging?',
        answer:
          'Yes. Branded packaging can be sourced alongside the product or separately, and it usually comes down to the pack type, the material, the printing and the quantity. Where a market requires particular information on the packaging, deciding what that is stays with the buyer — the packaging can be produced to that instruction.',
        link: { label: 'Supplier Verification', href: '/services/supplier-verification' },
      },
      {
        question: 'Can you source small quantities?',
        answer:
          'Sourden does not impose its own minimum order quantity, and finding suppliers whose MOQ fits your stage is part of the work. Practical minimums vary widely in this category: simple items are often made in large runs, while some products can be produced in smaller batches.',
      },
      {
        question: 'Can you arrange quality inspection?',
        answer:
          'Yes, where it is part of the project. A check before shipment can cover quantity, appearance, materials, sizes, construction and packaging against what was agreed. What counts as a defect is decided against the specification agreed with the supplier beforehand, not against a general impression.',
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

export const petSupplies = { slug, meta, hero, sections, finalCta };
