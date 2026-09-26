/**
 * SOURDEN — /industries  (Industries & Product Categories)
 * ---------------------------------------------------------------------------
 * Every editable word on the Industries overview page, from the Industries
 * brief (13 numbered sections). Like `/services`, this page is a HUB: the
 * centre of it is a nine-entry directory that points at the future
 * `/industries/<slug>` category pages.
 *
 * ── THE PAGE FILE DECLARES NO CATEGORY AND NO SERVICE ──────────────────────
 * Titles, numbers, slugs and hrefs come from `industries.js` / `services.js`.
 * The brief writes the ninth category as "Clothing, Shoes & Bags" with the
 * route `/industries/clothing-shoes-bags`; the site already publishes that
 * category as "Apparel, Footwear & Bags" at `/industries/apparel-footwear-bags`
 * and the business confirmed on 2026-09-23 that the site's name is the one to
 * use site-wide. So this file maps the brief's ninth entry onto the registry's
 * record instead of typing a second name for the same category — the same
 * decision `service-product-sourcing.js` made for its §03 list.
 *
 * Editing a category title or route therefore happens in `industries.js` and
 * this page follows. Typing them here is how a 10th category gets a directory
 * entry that 404s.
 *
 * ── WHAT THE BRIEF SUPPLIED, AND WHAT IT DID NOT ───────────────────────────
 * Unlike the five service-detail briefs, this one is almost fully specified:
 * every eyebrow, heading, paragraph, list item and FAQ answer below is the
 * brief's own wording, verbatim. The only strings this file authors are the
 * section `tone` values (a design decision, not copy), the hero image caption,
 * and the per-category `exploreLabel` suffix — all marked 〔added〕.
 *
 * ── CLAIMS RULE (brief §"Content Accuracy Requirements") ───────────────────
 * Nothing here may assert that China is the cheapest, that Sourden can source
 * anything, a lowest price, guaranteed quality, that every supplier is
 * verified, that every factory accepts small orders, guaranteed compliance,
 * guaranteed customs clearance or guaranteed delivery. The brief names those
 * exact phrases; the copy below uses its qualified register instead ("can",
 * "may", "depending on the product", "where appropriate", "where required").
 *
 * The brief also carries four per-category writing constraints — no medical /
 * therapeutic / cosmetic regulatory claim (Beauty & Personal Care, Pet
 * Supplies), no implication of certification or technical suitability
 * (Electronics & Accessories, Industrial Products) and no counterfeit or
 * trademark-infringing example (Apparel, Footwear & Bags). Those are satisfied
 * by the wording of the relevant entry rather than by an extra caveat, EXCEPT
 * Electronics, where the brief supplies an explicit note string — see
 * `categoryDetails` below.
 *
 * ── TONE PER SECTION ───────────────────────────────────────────────────────
 * Hero ivory, the process band ink, the FAQ ivory; everything between them
 * alternates. Each section states its own `tone` so the rhythm is readable in
 * the data rather than only in the stylesheet.
 * ---------------------------------------------------------------------------
 */

import { industries } from './industries.js';
import { services } from './services.js';
import { primaryCta } from './site.js';

export const slug = 'industries';

/* ===========================================================================
   SEO — brief §SEO. Title, meta description and H1 are mandated verbatim.
   =========================================================================== */

export const meta = {
  title: 'Industries & Product Categories | China Sourcing | SOURDEN',
  description:
    'Explore the product categories SOURDEN can source from China, from consumer products and beauty to packaging, electronics, industrial products, sports, pets and fashion.',
};

/**
 * The trail below "Home" — `<Breadcrumbs>` and `breadcrumbItems()` prepend the
 * rest. `/industries` is a top-level page, so this is one crumb deep.
 * `href` is omitted on the last item: it is the page being read.
 */
export const breadcrumbs = [{ label: 'Industries' }];

/* ===========================================================================
   01 — HERO
   =========================================================================== */

export const hero = {
  eyebrow: 'WHAT WE SOURCE',
  title: 'Products worth sourcing. Categories worth exploring.',
  description:
    'Sourden helps businesses and individual buyers source products from China across a wide range of categories. Whether you know exactly what you need or are still exploring options, we can research suppliers and sourcing solutions based on your requirements.',
  /** The site-wide primary action, declared once in `site.js` (spec §34). */
  primaryCta,
  /**
   * The brief's hero secondary. Not the `secondaryCta` from `service-links.js`
   * ("View All Services") — this page hands the visitor to the process page
   * instead, which is what the brief asks for.
   */
  secondaryCta: { label: 'How It Works', href: '/how-it-works' },
  /** Image direction (brief §01): a documentary sourcing image showing a
   *  variety of real products, samples, production or inspection — breadth and
   *  real-world sourcing, not corporate imagery. The brief bans landmarks,
   *  flags, generic handshakes, generic world maps, artificial product
   *  collages and AI-looking factory imagery. Art direction and crop note live
   *  with the slot in `media.js`. */
  image: {
    key: 'industriesHero',
    /** 〔added〕 — the brief specifies the image but not its caption. */
    caption: 'PRODUCT SAMPLES ACROSS CATEGORIES',
  },
};

/* ===========================================================================
   03 — THE CATEGORY DIRECTORY
   ---------------------------------------------------------------------------
   The brief gives each of the nine categories a short description and a list
   of example product types. Those live HERE, keyed by the registry slug, and
   the directory itself is built by merging them onto `industries.js`.

   WHY A MAP AND NOT A SECOND LIST
   `industries.js` owns number, title, slug and href; this map owns only the
   copy the directory adds. Merging the two means a category that is renamed,
   reordered or added in the registry cannot end up with a stale twin here —
   and `requireCategory()` fails the build instead of rendering `undefined`
   into the directory, which is the one failure mode a merged list has.
   =========================================================================== */

const categoryDetails = {
  'consumer-products': {
    description:
      'Everyday products, practical goods and consumer-focused items for retailers, wholesalers and growing businesses.',
    productTypes: [
      'Everyday consumer goods',
      'Household accessories',
      'Lifestyle products',
      'Personal-use products',
      'Promotional products',
      'General merchandise',
    ],
  },
  'beauty-personal-care': {
    /**
     * Brief constraint: no medical, therapeutic or cosmetic regulatory claim.
     * The description and the example types therefore name product groups
     * only — nothing here states or implies an effect, an approval or a
     * compliance status.
     */
    description:
      'Beauty, personal care and related products for brands, retailers and businesses looking for flexible sourcing options.',
    productTypes: [
      'Beauty accessories',
      'Hair and beauty products',
      'Personal care accessories',
      'Salon products',
      'Cosmetic packaging',
      'Beauty tools',
    ],
  },
  'home-living': {
    description:
      'Products for homes, interiors and everyday living, from practical household items to decorative products.',
    productTypes: [
      'Home accessories',
      'Storage products',
      'Kitchen items',
      'Home organization',
      'Decorative products',
      'Household goods',
      'Seasonal products',
    ],
  },
  packaging: {
    description:
      'Packaging solutions for products, brands, retailers and businesses, including custom packaging requirements.',
    productTypes: [
      'Boxes',
      'Bags',
      'Pouches',
      'Labels',
      'Printed packaging',
      'Gift packaging',
      'Retail packaging',
      'Custom packaging',
    ],
  },
  'electronics-accessories': {
    description:
      'Consumer electronics, accessories and related products sourced according to technical and market requirements.',
    productTypes: [
      'Consumer electronics',
      'Mobile accessories',
      'Computer accessories',
      'Charging products',
      'Small electronic devices',
      'Electronic accessories',
    ],
    /**
     * The one category the brief equips with an explicit note, and the reason
     * it exists: sourcing a product must never be read as a statement that the
     * product meets the destination country's certification or regulatory
     * requirements. The string is the brief's, verbatim.
     */
    note: 'Product-specific technical, safety and regulatory requirements should be confirmed according to the destination market.',
  },
  'industrial-products': {
    /**
     * Brief constraint: no implication of engineering certification, compliance
     * or technical suitability without verification. The entry lists product
     * groups and states that requirements are the buyer's — it certifies
     * nothing.
     */
    description:
      'Industrial components, tools, equipment and specialized products for businesses with specific technical requirements.',
    productTypes: [
      'Industrial components',
      'Tools',
      'Hardware',
      'Machinery-related products',
      'Manufacturing supplies',
      'Commercial equipment',
      'Custom industrial parts',
    ],
  },
  'sports-outdoors': {
    description:
      'Sports, fitness and outdoor products for retailers, wholesalers, brands and other businesses.',
    productTypes: [
      'Sports equipment',
      'Fitness accessories',
      'Outdoor gear',
      'Camping products',
      'Training accessories',
      'Team sports products',
    ],
  },
  'pet-supplies': {
    /** Brief constraint: avoid medical or veterinary claims. */
    description:
      'Pet products and accessories for retailers, wholesalers and businesses serving the growing pet market.',
    productTypes: [
      'Pet accessories',
      'Pet toys',
      'Feeding products',
      'Grooming accessories',
      'Pet travel products',
      'Pet household products',
    ],
  },
  'apparel-footwear-bags': {
    /**
     * Brief constraint: no counterfeit branded product and no
     * trademark-infringing sourcing example. Every entry here is a legal
     * product group — the two customization routes are the buyer's own
     * ("Custom apparel", "Private-label products"), and no brand is named.
     *
     * The registry title is "Apparel, Footwear & Bags"; the brief's
     * "Clothing, Shoes & Bags" is not used anywhere on the live site.
     */
    description:
      'Apparel, footwear, bags and related fashion products for retailers, wholesalers and growing brands.',
    productTypes: [
      'Clothing',
      'Shoes',
      'Handbags',
      'Backpacks',
      'Travel bags',
      'Accessories',
      'Custom apparel',
      'Private-label products',
    ],
  },
};

/** @param {string} slug */
function requireCategory(slug) {
  const detail = categoryDetails[slug];
  if (!detail) {
    throw new Error(
      `[industries-page.js] No directory copy for the category "${slug}". ` +
        `Either it was added to industries.js without an entry here, or its slug changed — ` +
        `the directory is merged from the registry and never re-typed.`
    );
  }
  return detail;
}

/**
 * The nine directory entries, in registry order.
 *
 * `exploreLabel` is derived, not typed: the brief's nine CTAs are
 * "Explore <category> →" in every case, so deriving the label means renaming a
 * category renames its link, and the arrow is drawn by `<ArrowLink>` (the label
 * never carries one of its own).
 */
export const categories = industries.map((category) => ({
  ...category,
  ...requireCategory(category.slug),
  /** 〔added〕 derived — the arrow itself is the component's. */
  exploreLabel: `Explore ${category.title}`,
}));

/* ===========================================================================
   11 — RELATED SERVICES
   ---------------------------------------------------------------------------
   Same merging rule: the registry supplies number, title and href; this map
   supplies the one sentence the brief writes for each. Service 03 is published
   as "Purchasing Management" (renamed from "Purchasing & Order Management"),
   so the link label comes from the registry and reads "Purchasing Management" —
   see the note in `services.js`.
   =========================================================================== */

const serviceBlurbs = {
  'product-sourcing': 'Find suitable products and suppliers based on your requirements.',
  'supplier-verification': 'Evaluate supplier fit before moving forward.',
  'purchasing-order-management':
    'Coordinate purchasing, supplier communication and production progress.',
  'quality-control': 'Check agreed product requirements before shipment.',
  'shipping-from-china': 'Coordinate the movement of goods from China to their destination.',
};

/** @param {string} slug */
function requireBlurb(slug) {
  const blurb = serviceBlurbs[slug];
  if (!blurb) {
    throw new Error(
      `[industries-page.js] No description for the service "${slug}". ` +
        `The related-services section is merged from services.js — add its sentence here.`
    );
  }
  return blurb;
}

export const relatedServices = services.map((service) => ({
  number: service.number,
  title: service.title,
  href: service.href,
  description: requireBlurb(service.slug),
}));

/* ===========================================================================
   SECTIONS — in render order (brief §02 … §11)
   ---------------------------------------------------------------------------
   `type` selects the device; `tone` is the section ground. The hero (§01), the
   closing CTA (§13) and the FAQ (§12) are not in this list — they are fixed
   devices with their own places on the page, exactly as on the service pages.
   =========================================================================== */

export const sections = [
  /* ---------------------------------------------------------------- 02 --- */
  {
    type: 'prose',
    /** 〔added〕 tone. */
    tone: 'white',
    eyebrow: 'SOURCING ACROSS CATEGORIES',
    title: 'The product category matters. So does the sourcing approach.',
    /** The brief's first line is a standalone statement, so it is its own
     *  paragraph rather than being folded into the one that follows. */
    paragraphs: [
      'Different products require different sourcing considerations.',
      'A simple consumer product may depend mainly on price, specifications and packaging. A custom product may require supplier development, samples and production follow-up. Electronics can involve technical specifications and compliance considerations, while packaging may depend heavily on materials, dimensions, printing and minimum order quantities.',
      "That's why Sourden doesn't use a one-size-fits-all sourcing process. We start with the product and the actual requirements, then research suppliers and sourcing options that fit the project.",
    ],
  },

  /* ---------------------------------------------------------------- 03 --- */
  {
    type: 'directory',
    /** 〔added〕 tone — ivory, so the directory sits on the page's own ground
     *  rather than on the white used by the prose on either side of it. */
    tone: 'ivory',
    eyebrow: 'EXPLORE OUR CATEGORIES',
    title: 'What can we source from China?',
    description:
      'Our sourcing work covers a broad range of products. Explore a category below to understand the types of products and sourcing requirements we can support.',
    /** Nine entries, merged from `industries.js` — see `categories` above. */
    items: categories,
  },

  /* ---------------------------------------------------------------- 04 --- */
  {
    type: 'prose',
    /** 〔added〕 tone. */
    tone: 'white',
    eyebrow: 'NOT SURE WHERE IT FITS?',
    title: "Your product doesn't need to fit neatly into a category.",
    paragraphs: [
      'These categories are designed to make sourcing easier to explore, not to limit what we can source.',
      "If your product doesn't clearly belong to one category, simply tell us what you're looking for. We'll review the requirements and determine the appropriate sourcing approach.",
    ],
    foot: { label: 'Tell Us What You Need', href: '/sourcing-request' },
  },

  /* ---------------------------------------------------------------- 05 --- */
  {
    type: 'reviewGrid',
    /** 〔added〕 tone. */
    tone: 'ivory',
    eyebrow: 'THE SOURCING APPROACH',
    title: 'The same category can require very different sourcing strategies.',
    /** The brief's four editorial examples, verbatim. The closing sentence goes
     *  in `note` rather than becoming a fifth item: it is a conclusion about
     *  the four, not another strategy. */
    items: [
      {
        title: 'Standard Products',
        description:
          'For straightforward products, the main considerations may be supplier options, specifications, MOQ, pricing and lead time.',
      },
      {
        title: 'Custom Products',
        description:
          'Custom products may require supplier development, samples, technical specifications, packaging and production follow-up.',
      },
      {
        title: 'Private Label',
        description:
          'Private-label projects may involve branding, packaging, labeling, customization and supplier capability.',
      },
      {
        title: 'Specialized Products',
        description:
          'More technical or specialized products may require additional specification review, supplier verification and destination-market considerations.',
      },
    ],
    note: 'The category is only the starting point. The actual sourcing approach depends on what you need to buy and how you plan to use it.',
    foot: { label: 'Explore Product Sourcing', href: '/services/product-sourcing' },
  },

  /* ---------------------------------------------------------------- 06 --- */
  {
    type: 'sequence',
    /** 〔added〕 tone. */
    tone: 'white',
    eyebrow: 'BEYOND THE PRODUCT',
    title: "We don't just search for products. We look for suitable sourcing options.",
    description:
      'A product search can produce hundreds of supplier listings. The useful part is understanding which options are relevant to your requirements.',
    /** Five stages, in the brief's order. The arrows between them are drawn by
     *  the component — they belong to the gap, not to the labels. */
    steps: [
      { label: 'Product', description: 'What exactly are you looking for?' },
      {
        label: 'Requirements',
        description:
          'What specifications, quantity, target price or customization do you need?',
      },
      {
        label: 'Suppliers',
        description: 'Which suppliers appear suitable for those requirements?',
      },
      {
        label: 'Comparison',
        description:
          'How do the options differ in product fit, MOQ, pricing, capability and lead time?',
      },
      {
        label: 'Next Step',
        description: 'Which option should be investigated or developed further?',
      },
    ],
    foot: { label: 'See Our Sourcing Services', href: '/services' },
  },

  /* ---------------------------------------------------------------- 07 --- */
  {
    type: 'people',
    /** 〔added〕 tone. */
    tone: 'ivory',
    eyebrow: 'WHO WE WORK WITH',
    title: 'Sourcing support for different types of buyers.',
    description:
      "You don't need a large purchasing department or huge order volume to start sourcing from China.",
    /** The brief's five groups. Note that these sentences are DIFFERENT from
     *  the homepage's and from `/services`' — the brief writes the same five
     *  audiences a third way, and the page must not re-publish either earlier
     *  wording (brief §"FINAL CHECK": no duplicate homepage sections). */
    items: [
      {
        title: 'Small Wholesalers',
        description: 'Looking for reliable products and practical supplier options for resale.',
      },
      {
        title: 'Independent Retailers',
        description:
          'Need access to Chinese suppliers without building a purchasing team in China.',
      },
      {
        title: 'Local Shops',
        description: 'Looking for products that fit a specific local market or customer base.',
      },
      {
        title: 'Growing Brands',
        description:
          'Developing products, private-label lines or a more reliable supply chain.',
      },
      {
        title: 'Individual Consumers',
        description:
          'Looking for a specific product, custom item or sourcing solution that is difficult to find locally.',
      },
    ],
    foot: { label: 'See How Sourden Works', href: '/services' },
  },

  /* ---------------------------------------------------------------- 08 --- */
  {
    type: 'scale',
    /** 〔added〕 tone. */
    tone: 'white',
    eyebrow: 'SOURCE AT YOUR SCALE',
    title: "You don't need to start big.",
    paragraphs: [
      "Sourden does not impose its own fixed minimum order quantity. We'll work with you to identify sourcing options that fit your current stage and requirements.",
    ],
    /**
     * The clarification is not a second paragraph — it is the qualifier that
     * keeps the paragraph above honest, which is why it is set as the section's
     * emphasis line rather than as body copy. The same rule is stated on the
     * homepage, in `/services` and in the FAQ below: Sourden imposes no fixed
     * MOQ, and that is NOT the same as "every supplier accepts small orders".
     */
    emphasis:
      'The practical MOQ will depend on the product and supplier. Not every supplier will accept small quantities.',
    /** The brief's growth path, in its order. */
    progression: ['First Order', 'Test', 'Repeat', 'Grow', 'Scale'],
    note: 'Your sourcing needs can change as your business grows. The sourcing approach can change with them.',
  },

  /* ---------------------------------------------------------------- 09 --- */
  {
    type: 'prose',
    /** 〔added〕 tone. */
    tone: 'ivory',
    eyebrow: 'WHY CHINA SOURCING',
    title: 'Access to a broad supplier base — with the right process behind it.',
    /**
     * The brief is explicit that this must not become "China is the cheapest"
     * marketing: the second paragraph turns the section back onto the process,
     * which is the point of the section.
     */
    paragraphs: [
      'China offers a broad manufacturing and supplier ecosystem across consumer products, industrial goods, packaging, electronics, textiles and many other categories.',
      "But access alone isn't enough. Finding the right supplier, understanding requirements, comparing options, managing production and coordinating quality and shipping are all part of making the sourcing process work.",
    ],
    /** Two closing links, both from the brief. */
    links: [
      { label: 'Why Sourden', href: '/about' },
      { label: 'Our Services', href: '/services' },
    ],
  },

  /* ---------------------------------------------------------------- 10 --- */
  {
    type: 'process',
    /** The rail always owns the ink band, on every page that renders it. */
    tone: 'ink',
    eyebrow: 'FROM PRODUCT TO SHIPMENT',
    title: 'A sourcing process built around the actual requirement.',
    /** Numbers derive from array order (01…05) — never typed. */
    steps: [
      {
        label: 'Tell Us What You Need',
        description:
          'Share the product, specifications, quantity, destination and any reference materials you have.',
      },
      {
        label: 'Research',
        description: 'We research suitable products and suppliers based on your requirements.',
      },
      {
        label: 'Verify & Compare',
        description: 'We evaluate relevant supplier information and compare available options.',
      },
      {
        label: 'Purchase & Check',
        description: 'We can coordinate purchasing and arrange quality control where required.',
      },
      {
        label: 'Ship',
        description:
          'We coordinate shipping from China and connect the sourcing process with the appropriate logistics solution.',
      },
    ],
    foot: primaryCta,
  },

  /* ---------------------------------------------------------------- 11 --- */
  {
    type: 'services',
    /** 〔added〕 tone. */
    tone: 'white',
    eyebrow: 'FROM PRODUCT TO DELIVERY',
    title: 'Category knowledge is only one part of sourcing.',
    description:
      'Once you know what you want to source, the next question is how much support you need to get it from supplier to destination.',
    items: relatedServices,
    foot: { label: 'View All Services', href: '/services' },
  },
];

/* ===========================================================================
   12 — FAQ
   ---------------------------------------------------------------------------
   Eight questions, each with the brief's own answer. Three of them carry a link
   to the service that answers the question properly — the brief specifies
   exactly which three.
   =========================================================================== */

export const faqIntro = {
  eyebrow: 'FAQ',
  title: 'Questions about sourcing products from China.',
};

export const faqItems = [
  {
    question: 'What types of products can Sourden source?',
    answer:
      'We source across a broad range of categories, including consumer products, beauty and personal care, home and living, packaging, electronics and accessories, industrial products, sports and outdoors, pet supplies, and clothing, shoes and bags.',
  },
  {
    question: "Can you source a product that isn't listed on your website?",
    answer:
      "Yes. The categories on this page are not a fixed product list. If you have a specific product in mind, send us the details and we'll review the sourcing requirements.",
  },
  {
    question: 'Can you source custom products?',
    answer:
      'Depending on the product, we can research suppliers that support customization, private labeling, custom packaging and other specific requirements.',
  },
  {
    question: 'Can you source products for a small business?',
    answer:
      'Yes. Sourden works with small wholesalers, independent retailers, local shops and growing brands, as well as individual consumers with specific sourcing requirements.',
  },
  {
    question: 'Do you have a minimum order quantity?',
    answer:
      "Sourden does not impose its own fixed minimum order quantity. The practical MOQ depends on the product and supplier, and we'll help identify sourcing options that fit your requirements where possible.",
  },
  {
    question: 'Can you verify the supplier?',
    answer:
      'Yes. Supplier verification can be provided as a separate service or as part of a broader sourcing project.',
    /** The brief attaches this link to the answer. */
    link: { label: 'Supplier Verification', href: '/services/supplier-verification' },
  },
  {
    question: 'Can you arrange quality control?',
    answer:
      'Yes. Quality control can be arranged before shipment to check agreed product requirements, quantity, appearance, packaging and other relevant details.',
    link: { label: 'Quality Control', href: '/services/quality-control' },
  },
  {
    question: 'Can you ship the products internationally?',
    answer:
      'We can coordinate shipping from China and help connect the sourcing process with an appropriate logistics solution based on the product, shipment and destination.',
    link: { label: 'Shipping from China', href: '/services/shipping-from-china' },
  },
];

/* ===========================================================================
   13 — FINAL CTA
   =========================================================================== */

export const finalCta = {
  eyebrow: 'START WITH A REQUEST',
  title: 'Know what you want to source?',
  description:
    "Tell us what you're looking for, how much you need and where it needs to go. We'll take it from there.",
  cta: primaryCta,
  /**
   * The brief's final section names a secondary action too. `<FinalCTA>`
   * renders exactly ONE control by design (site spec §19 forbids competing
   * buttons in the closing band), so the brief's "View How It Works →" lives in
   * the hero instead — where the same link is the brief's §01 secondary. The
   * destination is one click away from the top of the page and again from
   * §10's rail, so nothing is lost.
   */
};

/* ===========================================================================
   THE PAGE OBJECT
   =========================================================================== */

export const industriesPage = { slug, meta, breadcrumbs, hero, sections, faqIntro, faqItems, finalCta };
