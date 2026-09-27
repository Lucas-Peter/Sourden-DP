/**
 * SOURDEN — /industries/consumer-products
 * ---------------------------------------------------------------------------
 * Category page 01 of 09, from the Industries child-pages brief (§4).
 *
 * ── WHAT THE BRIEF SUPPLIED, AND WHAT THIS FILE AUTHORS ─────────────────────
 * The brief writes this category out in full for the other eight to follow:
 * the eyebrow, the H1, the intro, the ten example product types, the note after
 * them, the six buyer needs, the seven approach topics, the seven capabilities,
 * the ten sourcing considerations, the six process stages and the five FAQ
 * questions are all its wording, verbatim or near-verbatim.
 *
 * Everything marked 〔added〕 is authored here: the section headings and leads
 * (the brief gives section titles in only a few places), the FAQ answers, the
 * image caption, and the per-section `tone` values — a design decision, not copy.
 *
 * ── WHAT IS NOT IN THIS FILE ───────────────────────────────────────────────
 *   · The category's name, number, route and image key — merged from
 *     `industries.js` by the shell.
 *   · "Related Services", "Who We Work With", "Explore More", "What We Can Help
 *     With", the sourcing process and the closing band — these are the same on
 *     all nine pages and live once in `industry-standard.js`.
 *   · The primary and secondary hero actions — `site.js` and
 *     `industry-links.js`.
 *
 * ── CLAIMS RULE ────────────────────────────────────────────────────────────
 * Nothing here states a client or supplier count, years in business, a success
 * rate, a certification, a testimonial or a case study; nothing promises
 * guaranteed quality, guaranteed delivery, the lowest price or that Sourden can
 * source anything. Sourcing a product is never described as certification of it.
 * Consumer Products carries no extra per-category constraint in the brief.
 *
 * ── TONE PER SECTION ───────────────────────────────────────────────────────
 * Hero ivory; §2 white → §3 ivory → §4 white → §5 ivory → §6 white → the ink
 * rail → white rows → ivory audience → white index → ivory FAQ. Each section
 * states its own `tone` so the rhythm is readable in the data.
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

export const slug = 'consumer-products';

/* ===========================================================================
   SEO
   ---------------------------------------------------------------------------
   〔added〕 The brief asks for clean content and structure now and SEO later, so
   the title follows the site's existing pattern rather than a keyword formula:
   what the page is, then the brand.
   =========================================================================== */

export const meta = {
  title: 'Consumer Products Sourcing from China | SOURDEN',
  description:
    'Sourcing everyday consumer products from China — supplier research, quotation comparison, purchasing, quality control and shipping.',
};

/* ===========================================================================
   HERO  (brief §3 and §4)
   =========================================================================== */

export const hero = {
  eyebrow: 'INDUSTRIES / CONSUMER PRODUCTS',
  title: 'Everyday products, sourced around your requirements.',
  description:
    'From simple household goods to everyday consumer products, Sourden helps buyers identify suitable suppliers, compare options and coordinate the sourcing process from China.',
  /**
   * The image slot already exists on the homepage's category grid, so the same
   * key is reused rather than a second slot being created for the same category
   * — see `media.js`. Its art direction is the Consumer Products slot's:
   * finished consumer goods in a production or packing environment.
   */
  image: {
    key: 'industryConsumerProducts',
    /** 〔added〕 — the brief specifies the image but not its caption. */
    caption: 'CONSUMER GOODS IN PRODUCTION AND PACKING',
  },
};

/* ===========================================================================
   SECTIONS — in render order
   ---------------------------------------------------------------------------
   The brief's order §2 (What We Can Source) → §6 (Sourcing Considerations),
   then the six shared bands from `industry-standard.js` in their own places.
   =========================================================================== */

export const sections = [
  /* ------------------------------------------------- §2 What we can source -- */
  {
    type: 'checkList',
    /** 〔added〕 tone. */
    tone: 'white',
    eyebrow: 'WHAT WE CAN SOURCE',
    /** 〔added〕 heading and lead — the brief supplies only the list. */
    title: 'Everyday goods, from household basics to seasonal lines.',
    description:
      'Consumer products cover a wider range than any other category on this site. These are the kinds of items buyers most often ask us to look at.',
    items: [
      'Household accessories',
      'Everyday lifestyle products',
      'Storage and organization products',
      'Kitchen accessories',
      'Personal-use accessories',
      'Travel accessories',
      'Small consumer goods',
      'Promotional and gift items',
      'Seasonal products',
      'General merchandise',
    ],
    /**
     * The brief's note, verbatim. It is not a caveat about this category — it is
     * the site's position on every category, and it is the reason the list above
     * is described as examples rather than as a catalogue. The brief's US
     * spellings ("catalog", "organization") are the site's own — its visible copy
     * uses them throughout.
     */
    note: "These are examples, not a fixed catalog. If you have a specific product in mind, tell us what you need and we'll assess the sourcing options.",
  },

  /* ------------------------------------------------ §3 What buyers need ---- */
  {
    type: 'reviewGrid',
    /** 〔added〕 tone. */
    tone: 'ivory',
    eyebrow: 'WHAT BUYERS USUALLY NEED',
    /** 〔added〕 heading and lead. */
    title: 'Most requests start from one of these.',
    description:
      'A consumer product brief rarely arrives complete. It usually begins as one of these six, and the first piece of work is turning it into something a supplier can quote against.',
    /**
     * The brief's six needs, in its order. The sentences are 〔added〕: the brief
     * says to "explain that buyers may be looking for" these six, and a bare
     * fragment does not explain anything. Each sentence says what the request
     * actually means for the sourcing work — which is also what makes this page
     * different from the other eight, whose needs are not these.
     */
    items: [
      {
        title: 'A specific product',
        description:
          'You know the item, roughly the size and the price you want to land at, and you are looking for suppliers who already make it.',
      },
      {
        title: 'A similar product based on a reference image',
        description:
          "You have seen something that works — in a shop, online, or in a competitor's range — and want an equivalent rather than a copy.",
      },
      {
        title: 'A customized version',
        description:
          'A product close to what you need exists, and something about it has to change: dimensions, colour, material, packaging, or a feature added or removed.',
      },
      {
        title: 'A better supplier for an existing product',
        description:
          'You already buy the item and are comparing alternatives — on price, consistency, communication or production capacity.',
      },
      {
        title: 'A lower-MOQ sourcing option',
        description:
          'The product is right but the order quantities are not. This is a search for suppliers who can work at your scale rather than theirs.',
      },
      {
        title: 'A supplier capable of repeat production',
        description:
          'The first order is a test. What matters is whether the same item can be produced again, later, to the same specification.',
      },
    ],
    note: 'Not every request fits one of these. If yours does not, describing it in your own words is enough to start.',
  },

  /* --------------------------------------------- §4 How we approach it ----- */
  {
    type: 'sequence',
    /** 〔added〕 tone. */
    tone: 'white',
    eyebrow: 'HOW WE APPROACH THIS CATEGORY',
    /** 〔added〕 heading and lead. */
    title: 'Start with the product, then work outwards.',
    description:
      'Everyday products look simple to source and usually are not. Two suppliers can quote the same item at very different prices because they are not quoting the same thing — so the work starts by pinning down what the product actually is.',
    /**
     * The brief's seven approach topics, condensed to six stages — the fourth
     * and sixth each absorb two of the brief's bullets ("Checking MOQ and lead
     * time" + "Reviewing customization possibilities"; "Coordinating samples" +
     * "Managing purchasing and quality control"). The topics are all here; the
     * descent is six deep rather than seven, which is what keeps it readable as a
     * sequence. The sentences are 〔added〕.
     */
    steps: [
      {
        label: 'Understanding the product',
        description:
          'Material, dimensions, function, how it is used and what it has to survive. A vague brief produces quotes that cannot be compared with each other.',
      },
      {
        label: 'Finding suitable suppliers',
        description:
          'Looking for manufacturers whose existing range already includes this kind of item, rather than anyone who answers yes to everything.',
      },
      {
        label: 'Comparing specifications and quotations',
        description:
          'Putting the options side by side against the same specification, so a cheaper quote is visibly cheaper for a reason you can name.',
      },
      {
        label: 'Checking MOQ, lead time and customization',
        description:
          'What the supplier will actually accept, how long production takes, and which changes they can make without developing a new product.',
      },
      {
        label: 'Coordinating samples where useful',
        description:
          'Where the product justifies the cost and the time, getting a physical sample in hand before committing to volume.',
      },
      {
        label: 'Managing purchasing and quality control',
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
    title: 'What shapes the options you get back.',
    description:
      'These are the details that decide which suppliers are relevant and how their quotations compare with each other. The more of them you can answer, the more useful the first round of options is.',
    /** The brief's ten considerations, in its order. */
    items: [
      'Material',
      'Size',
      'Function',
      'Packaging',
      'Quantity',
      'Target market',
      'Target price',
      'Customization',
      'MOQ',
      'Production lead time',
    ],
    /**
     * 〔added〕 The closing line the section needs, and the one this category
     * needs most: a buyer looking at a ten-item list can reasonably conclude
     * they cannot start. Most of these are open at the beginning, and the honest
     * position is that they get settled by the options rather than before them.
     */
    note: 'Most of these are open at the start, and that is normal. Where something is not decided, we will say so rather than assume a value and quote against it.',
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
    title: 'Questions about sourcing consumer products.',
    /**
     * The brief's five questions for this category, with 〔added〕 answers of two
     * to four sentences each. Three of the five carry a link to the service that
     * answers the question properly — the same device `/industries` uses, and the
     * same reasoning: a reader who has just asked that question is the reader
     * most likely to want the page behind it.
     */
    items: [
      {
        question: 'Can you source a product from a photo?',
        answer:
          'Yes. A photo, a link or a written description can all be a starting point, and an image is often the fastest way to explain what you mean. What helps most is anything you can add about dimensions, material, quantity and destination, because those decide which suppliers are even relevant.',
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
      {
        question: 'Can you compare several suppliers?',
        answer:
          'Yes, and the comparison is most of the value. We put the options side by side against the same specification — product, MOQ, price, lead time and customization — so you are comparing what each supplier is actually offering rather than comparing prices alone.',
        link: { label: 'Product Sourcing', href: '/services/product-sourcing' },
      },
      {
        question: 'Can you arrange quality control before shipment?',
        answer:
          'Yes, where it is part of the project. Quality control checks the agreed requirements before the goods leave: quantity, appearance, packaging and the details that were specified. What can be checked depends on what was agreed with the supplier beforehand.',
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

export const consumerProducts = { slug, meta, hero, sections, finalCta };
