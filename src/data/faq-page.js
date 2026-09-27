/**
 * SOURDEN — /faq  (Frequently Asked Questions)
 * ---------------------------------------------------------------------------
 * Every editable word on the FAQ page, from the FAQ brief (§2, §3, §5, §12,
 * §13). The brief supplies the questions and answers as FINAL CONTENT —
 * "Use the following questions and answers as the final page content. Do not
 * rewrite them into generic SEO copy." Everything below is that wording,
 * verbatim, with its straight ASCII apostrophes, which is the convention every
 * other page file follows.
 *
 * ── THE PAGE'S JOB (brief §1) ───────────────────────────────────────────────
 * This is the page a buyer reads BEFORE submitting a request. It exists to
 * remove uncertainty about MOQ, suppliers, samples, customisation, purchasing,
 * quality control, shipping, fees and whether they need to be a company at
 * all. The brief names six registers it must NOT slide into: an SEO keyword
 * article, a legal document, a sales pitch, a generic China sourcing article,
 * an ecommerce FAQ, a supplier marketplace FAQ. Nothing here sells, and
 * nothing here promises.
 *
 * ── TWO PLACES THE BRIEF AND THE SITE DISAGREE, AND HOW THEY RESOLVE ────────
 * Both are the same class of problem the About and Industries pages already
 * resolved, and both are recorded in the gate (`fq-geo.mjs`) as RENAMED so the
 * substitution is asserted rather than hidden:
 *
 *   1. Q01's list of categories is the site's nine-category list written as
 *      prose ("consumer products, beauty and personal care items, home and
 *      living products, …"), and the brief ends it "clothing, shoes and bags".
 *      The site publishes that category as "Apparel, Footwear & Bags"
 *      (`industries.js`; confirmed as the site-wide name on 2026-09-23), so the
 *      prose says "apparel, footwear and bags". The brief's OTHER eight are
 *      left exactly as written — they are prose forms, not labels, and only the
 *      ninth has a decided divergence from the brief.
 *
 *   2. Q15's link label is "Purchasing & Order Management →". The site
 *      publishes that service as "Purchasing Management" (`services.js`), so
 *      the link is built with `serviceLink()` from the registry and the
 *      registry supplies both halves — see `service-links.js`, which exists
 *      precisely so this rename cannot leak back in through a hand-typed label.
 *      None of the other seven answer links is renamed: their brief labels
 *      already match the site ("Learn about Product Sourcing", "Learn About
 *      Quality Control", …).
 *
 * ── THE ANSWER LINKS ────────────────────────────────────────────────────────
 * The brief attaches a destination under eight of the thirty-three answers, and
 * each one is the page that does that job: /industries (§14 "Industries"),
 * /services/product-sourcing, /about, /services/supplier-verification,
 * /services/purchasing-order-management, /services/quality-control,
 * /services/shipping-from-china and /sourcing-request. They are per-item rather
 * than per-section because eight different questions point at eight different
 * pages, and a reader who has just asked that question is the reader most
 * likely to want it. §14 says "Do not over-link every answer" — twenty-five of
 * the thirty-three carry no link at all.
 *
 * ── WHY THE ANSWERS ARE ARRAYS ──────────────────────────────────────────────
 * The brief writes almost every answer as two or three separate paragraphs
 * (Q20, Q29, Q30 and Q33 as three). Flattening them into one string would lose
 * the brief's own paragraphing, so `answer` is `string[]` and the shared FAQ
 * device renders one <p> per entry. The device accepted a single string until
 * this page; arrays are additive and every existing caller is unchanged.
 *
 * ── THE TWO SECTIONS THAT ARE NOT A FAQ ─────────────────────────────────────
 * §12 is deliberately NOT a ninth category — the brief says so in as many
 * words ("add a small informational block after the main FAQ sections rather
 * than creating another large FAQ category"), so it is one prose section with
 * two actions. §13 is the site's shared closing band.
 *
 * §13 names a secondary action ("See How It Works →"), and it is not rendered
 * here: `<FinalCTA>` emits exactly ONE control by design (site spec §19 forbids
 * competing buttons in the closing band), and the same destination is already
 * this page's §2 secondary — one click from the top. `/industries` hit the same
 * collision and resolved it the same way.
 *
 * ── THE CATEGORY NAVIGATION (§3) AND ITS TWO ORPHANS ────────────────────────
 * §3 lists NINE navigation categories; §5 supplies SEVEN category sections.
 * "Custom Products" has a real destination (§12's block) and "Individual
 * Buyers" does not — the only content about individual buyers is Q05 ("Do I
 * need to have a company to work with SOURDEN?"), which lives in Getting
 * Started and hands off to /about. Rather than invent a section the brief does
 * not contain (§16 forbids inventing content), the nav keeps all nine entries
 * and points "Individual Buyers" at Getting Started, which is where the answer
 * actually is. Two entries therefore share one anchor; `fq-geo` asserts all
 * nine anchors resolve to a real element, and that the two intentional
 * duplicates are exactly those two.
 *
 * ── TONE PER SECTION ────────────────────────────────────────────────────────
 * Hero ivory, then no two adjacent sections share a ground: the category nav is
 * white, the seven categories alternate ivory / white, §12 is white, and §13 is
 * the shared ink band. Each section states its own `tone` so the rhythm is
 * readable in the data rather than only in the stylesheet — the same
 * arrangement `about-page.js` and `industries-page.js` use.
 *
 * ── WHAT THIS FILE AUTHORS, AND WHAT IT DOES NOT ────────────────────────────
 * Every eyebrow, heading, question, answer paragraph and CTA label below is the
 * brief's. The strings this file authors are marked 〔added〕: the section
 * `tone` values, the anchor ids, the hero image caption, and the meta
 * title/description (carried over unchanged from the reserved route so the
 * page's search metadata does not change as it goes live).
 * ---------------------------------------------------------------------------
 */

import { serviceLink } from './service-links.js';
import { primaryCta } from './site.js';

export const slug = 'faq';

/* ===========================================================================
   SEO
   ---------------------------------------------------------------------------
   Title and description are the ones the reserved route already declared, so
   taking this page live does not change what search engines had indexed.
   =========================================================================== */

export const meta = {
  title: 'Frequently Asked Questions | Sourden',
  description:
    'Common questions about sourcing from China with Sourden, including minimum order quantities, pricing, verification and shipping.',
};

/**
 * The trail below "Home" — `<Breadcrumbs>` and `breadcrumbItems()` prepend the
 * rest. `/faq` is a top-level page, so this is one crumb deep. `href` is
 * omitted on the last item: it is the page being read.
 */
export const breadcrumbs = [{ label: 'FAQ' }];

/* ===========================================================================
   02 — HERO  (brief §2, verbatim)
   =========================================================================== */

export const hero = {
  eyebrow: 'FAQ',
  title: 'Questions about sourcing from China?',
  description:
    'Here are answers to some of the questions buyers commonly have about sourcing, suppliers, orders, quality control and shipping from China.',
  /** The site-wide primary action, declared once in `site.js` (spec §34). */
  primaryCta,
  /** The brief's §2 secondary. */
  secondaryCta: { label: 'How It Works', href: '/how-it-works' },
  /**
   * The brief §2 describes the hero's copy and names no image. Every other page
   * hero on the site carries a documentary photograph, so the alternative was a
   * second hero design; art direction and crop note live with the slot in
   * `media.js`, including the list of symbols this page must not use.
   */
  image: {
    key: 'faqHero',
    /** 〔added〕 — the brief specifies no image, so no caption either. It names
     *  what the frame shows rather than what the page is about, matching the
     *  register of every other caption on the site. */
    caption: 'SUPPLIER AND SAMPLE COMPARISON',
  },
};

/* ===========================================================================
   03 — CATEGORY NAVIGATION  (brief §3)
   ---------------------------------------------------------------------------
   All nine entries the brief lists, in the brief's order. Two point at one
   anchor on purpose — see the header note; `fq-geo` asserts the duplicate set
   is exactly those two and that every other anchor is distinct.

   Hrefs are in-page fragments. They are written here rather than derived from
   `sections` because the nav's order is the brief's §3 order and is NOT the
   page's section order ("Custom Products" is eighth in the nav and the §12
   block it points at comes after all seven categories).
   =========================================================================== */

export const categoryNav = [
  { label: 'Getting Started', href: '#faq-getting-started' },
  { label: 'MOQ & Order Size', href: '#faq-moq-order-size' },
  { label: 'Suppliers & Sourcing', href: '#faq-suppliers-sourcing' },
  { label: 'Quality & Inspection', href: '#faq-quality-inspection' },
  { label: 'Purchasing & Orders', href: '#faq-purchasing-orders' },
  { label: 'Shipping', href: '#faq-shipping' },
  { label: 'Pricing & Payment', href: '#faq-pricing-payment' },
  { label: 'Custom Products', href: '#faq-custom-sourcing' },
  /**
   * The brief lists "Individual Buyers" as a category and writes no section for
   * it. The answer that exists is Q05 in Getting Started, which is also the
   * question that hands off to /about. Pointing here is the honest option:
   * inventing an eighth answer set would be fabricating content, and dropping
   * the entry would remove a topic the brief's §1 names explicitly.
   */
  { label: 'Individual Buyers', href: '#faq-getting-started' },
];

/* ===========================================================================
   THE SEVEN FAQ CATEGORIES  (brief §5, verbatim)
   ---------------------------------------------------------------------------
   Rendered in this order, inside `sections` below. `anchor` is the id the
   section's HEADING carries, and therefore the target of the matching nav
   entry and of the `aria-labelledby` that names the section. It is on the
   heading rather than on the <section> because a jump list wants to land on
   the category's title: landing on the section would scroll past the section's
   own top padding and leave the heading a couple of hundred pixels down the
   viewport. `tone` alternates so no two adjacent bands share a ground.
   =========================================================================== */

const faqSections = [
  /* ------------------------------------------------------- 04 — category 01 -- */
  {
    type: 'faq',
    anchor: 'faq-getting-started',
    tone: 'ivory',
    eyebrow: 'GETTING STARTED',
    title: 'Start with the basics.',
    items: [
      {
        question: 'What can SOURDEN help me source from China?',
        answer: [
          /* 〔RENAMED〕 the brief's ninth category reads "clothing, shoes and
             bags"; the site publishes it as "Apparel, Footwear & Bags". See the
             file header. */
          'SOURDEN can help source a wide range of products, including consumer products, beauty and personal care items, home and living products, packaging, electronics and accessories, industrial products, sports and outdoor products, pet supplies, and apparel, footwear and bags.',
          'If you have a specific product in mind that is not listed on our website, you can still send us a sourcing request. We assess each project based on the product, requirements, quantity and destination.',
        ],
        link: { label: 'Explore What We Source', href: '/industries' },
      },
      {
        question: 'I already know what product I want. Can you find the supplier for me?',
        answer: [
          'Yes. You can provide the product name, specifications, reference photos, samples, drawings or any other information you have.',
          'We can research suitable suppliers, compare available options and help you evaluate factors such as product fit, pricing, MOQ, lead time and supplier capability.',
        ],
        link: { label: 'Learn about Product Sourcing', href: '/services/product-sourcing' },
      },
      {
        question: 'Can you source a product based on a photo or existing product?',
        answer: [
          'Yes. A reference photo, product sample or existing product can be a useful starting point for sourcing.',
          'The more information you can provide about the product, materials, dimensions, function, quantity and target price, the easier it is to identify suitable sourcing options. A photo alone may not provide enough information to confirm exact specifications.',
        ],
      },
      {
        question: "I don't know exactly what product I need yet. Can you still help?",
        answer: [
          'Yes, depending on how clearly the sourcing goal can be defined.',
          'You can tell us what you are trying to achieve, the type of product you are looking for, your target market, expected quantity or budget, and any examples you have seen. We can then help clarify the sourcing requirements before looking for suitable suppliers.',
        ],
      },
      {
        question: 'Do I need to have a company to work with SOURDEN?',
        answer: [
          'No. SOURDEN works with different types of buyers, including small wholesalers, independent retailers, local shops, growing brands and individual buyers.',
          'The appropriate sourcing approach depends on your product, quantity, requirements and destination rather than simply the size of your business.',
        ],
        link: { label: 'Learn Who SOURDEN Is Built For', href: '/about' },
      },
    ],
  },

  /* ------------------------------------------------------- 05 — category 02 -- */
  {
    type: 'faq',
    anchor: 'faq-moq-order-size',
    tone: 'white',
    eyebrow: 'MOQ & ORDER SIZE',
    title: 'Source at your scale.',
    items: [
      {
        question: 'Do you have a minimum order quantity?',
        answer: [
          'SOURDEN does not impose its own fixed minimum order quantity.',
          'However, individual suppliers may have their own MOQ requirements depending on the product, customization, production process and order quantity. We can help identify sourcing options that fit your current requirements where possible.',
        ],
      },
      {
        question: 'Can you help with small orders?',
        answer: [
          'Yes. We work with buyers who are testing products, starting small or operating at lower volumes.',
          'The available options depend on the specific product and supplier. Some products can be sourced in relatively small quantities, while others may require a larger production run.',
        ],
      },
      {
        question: 'Can I start with a sample or small trial order?',
        answer: [
          'In many cases, yes.',
          'A sample or trial order can be useful for checking product quality, specifications, packaging and suitability before placing a larger order. Whether a sample is available depends on the supplier and product.',
        ],
      },
      {
        question: 'Can you help if I need to reorder the same product later?',
        answer: [
          'Yes. We can help coordinate repeat orders and communicate with the supplier about the existing product specifications, quantity, packaging and other requirements.',
          'For repeat orders, keeping clear records of the original specifications and approved samples can help maintain consistency.',
        ],
      },
    ],
  },

  /* ------------------------------------------------------- 06 — category 03 -- */
  {
    type: 'faq',
    anchor: 'faq-suppliers-sourcing',
    tone: 'ivory',
    eyebrow: 'SUPPLIERS & SOURCING',
    title: 'Finding the right supplier matters.',
    items: [
      {
        question: 'How do you find suppliers in China?',
        answer: [
          'We research suppliers based on the specific product and sourcing requirements rather than simply providing a generic supplier list.',
          'Depending on the project, we may consider product fit, manufacturing capability, MOQ, pricing, lead time, customization requirements, communication and other relevant factors.',
        ],
      },
      {
        question: 'How do you compare different suppliers?',
        answer: [
          'Supplier comparison can include product specifications, quotation, MOQ, production capability, lead time, customization options, packaging, communication and other project-specific requirements.',
          'The cheapest quotation is not always the most suitable option. The goal is to identify suppliers that fit the overall requirements of the project.',
        ],
        link: { label: 'Learn About Supplier Verification', href: '/services/supplier-verification' },
      },
      {
        question: 'Can you verify whether a supplier is suitable for my product?',
        answer: [
          'We can review available supplier information and assess factors relevant to your sourcing requirements, such as product fit, capabilities, MOQ, pricing, lead time and communication.',
          'Supplier verification reduces uncertainty, but it cannot eliminate every sourcing risk or guarantee future performance.',
        ],
      },
      {
        question: 'Can you communicate with suppliers on my behalf?',
        answer: [
          'Yes. Supplier communication can include product specifications, quotations, customization requirements, packaging, production progress, order details and other sourcing-related matters.',
          'This allows you to have one point of contact while we coordinate with suppliers in China.',
        ],
      },
      {
        question: 'Can you find a supplier that can customize a product?',
        answer: [
          'Yes, where suitable suppliers and production capabilities are available.',
          'Customization can include materials, dimensions, colors, packaging, labeling, product construction or other specifications. The feasibility, MOQ, cost and production time depend on the specific product and supplier.',
        ],
      },
      {
        question: 'Can I use my existing supplier and have SOURDEN manage the order?',
        answer: [
          'Yes. You do not necessarily need to use a supplier sourced by SOURDEN.',
          'If you already have a supplier, we may be able to assist with purchasing, supplier communication, production follow-up, quality control and shipping, depending on the requirements of your project.',
        ],
        /* 〔RENAMED〕 the brief writes "Purchasing & Order Management"; the
           registry publishes "Purchasing Management". Built from the registry
           so the label and the href cannot drift. */
        link: serviceLink('purchasing-order-management'),
      },
    ],
  },

  /* ------------------------------------------------------- 07 — category 04 -- */
  {
    type: 'faq',
    anchor: 'faq-quality-inspection',
    tone: 'white',
    eyebrow: 'QUALITY & INSPECTION',
    title: 'Check before the goods leave China.',
    items: [
      {
        question: 'Can I get a sample before placing a larger order?',
        answer: [
          'In many cases, yes. We can communicate with the supplier about sample availability and coordinate the sample process.',
          'For products where specifications, materials, construction or appearance are important, reviewing a sample before bulk production can be useful.',
        ],
      },
      {
        question: 'Can SOURDEN inspect my products before shipment?',
        answer: [
          'Yes. We can arrange pre-shipment quality checks depending on the product, order and inspection requirements.',
          'The inspection can help identify issues before the goods leave China and provide evidence such as photos or inspection findings.',
        ],
        link: { label: 'Learn About Quality Control', href: '/services/quality-control' },
      },
      {
        question: 'What does your quality control process include?',
        answer: [
          'The inspection scope depends on the product and the agreed requirements.',
          'Checks may include quantity, appearance, dimensions, specifications, packaging, labeling and visible defects. Additional checks can be discussed when the product requires specific inspection criteria.',
        ],
      },
      {
        question: 'Can you check product quantity, specifications and packaging?',
        answer: [
          'Yes. These are common areas that can be included in a pre-shipment inspection.',
          'The inspection criteria should be agreed based on the product requirements and order details so that the relevant points can be checked before shipment.',
        ],
      },
      {
        question: 'Does an inspection guarantee that every product will be perfect?',
        answer: [
          'No. An inspection can help identify problems before shipment, but it cannot guarantee that every possible defect or issue will be detected.',
          'The scope, sampling method, inspection conditions and product characteristics all affect what an inspection can identify.',
          'This is why clear product specifications and agreed quality requirements are important before production.',
        ],
      },
    ],
  },

  /* ------------------------------------------------------- 08 — category 05 -- */
  {
    type: 'faq',
    anchor: 'faq-purchasing-orders',
    tone: 'ivory',
    eyebrow: 'PURCHASING & ORDERS',
    title: 'One point of contact through the order.',
    items: [
      {
        question: 'Can SOURDEN place the order with the supplier for me?',
        answer: [
          'Yes. Depending on the project, SOURDEN can coordinate purchasing with the supplier based on the agreed product specifications, quantity, pricing and other order requirements.',
          'We can also coordinate supplier communication and order progress during the purchasing process.',
        ],
      },
      {
        question: 'Can you follow up with the supplier during production?',
        answer: [
          'Yes. We can communicate with the supplier regarding production progress, specifications, packaging, timing and other agreed order details.',
          'The level of follow-up depends on the requirements and scope of the project.',
        ],
      },
      {
        question: 'Can you manage packaging or labeling requirements?',
        answer: [
          'Yes, where the supplier is able to provide the requested packaging or labeling.',
          'We can communicate requirements such as packaging specifications, labels, inserts, cartons and other order details with the supplier and coordinate them as part of the purchasing process.',
        ],
      },
      {
        question: 'What happens if the supplier cannot meet the agreed requirements?',
        answer: [
          'If an issue is identified during the sourcing or production process, we will communicate with the supplier and work through the available options.',
          'Depending on the situation, this may involve clarification, adjustment, replacement, correction or another agreed solution. The appropriate outcome depends on the supplier, product and specific order terms.',
        ],
      },
    ],
  },

  /* ------------------------------------------------------- 09 — category 06 -- */
  {
    type: 'faq',
    anchor: 'faq-shipping',
    tone: 'white',
    eyebrow: 'SHIPPING',
    title: 'From China to your destination.',
    items: [
      {
        question: 'Can SOURDEN arrange shipping from China?',
        answer: [
          'Yes. We can coordinate shipping from China as part of the sourcing process and help identify a suitable logistics option based on the shipment and destination.',
          'Available options depend on the product, shipment size, destination and current logistics conditions.',
        ],
        link: { label: 'Learn About Shipping from China', href: '/services/shipping-from-china' },
      },
      {
        question: 'What shipping methods can you arrange?',
        answer: [
          'Depending on the shipment, available options may include courier, air freight, sea freight, LCL or FCL.',
          'The appropriate method depends on factors such as product type, weight, volume, urgency, destination and total shipping cost.',
        ],
      },
      {
        question: 'Can you ship directly to my country?',
        answer: [
          'In many cases, yes. We can coordinate international shipping from China to the destination you provide.',
          'The available shipping method and delivery arrangement depend on the country, product, shipment details and logistics provider.',
        ],
      },
      {
        question: 'Can you arrange door-to-door shipping?',
        answer: [
          'Door-to-door shipping may be available depending on the destination, product, shipping method and logistics service selected.',
          'Before shipping, we can clarify the available options, shipping terms and any applicable charges.',
        ],
      },
      {
        question: 'How long does shipping usually take?',
        answer: [
          'Shipping time varies significantly depending on the destination, shipping method, shipment size, product and current logistics conditions.',
          'Courier and air freight are generally used when speed is more important, while sea freight is often considered for larger shipments where transit time is less critical.',
          'Any estimated transit time should be treated as an estimate rather than a guaranteed delivery date.',
        ],
      },
      {
        question: 'Are customs duties and taxes included in the shipping cost?',
        answer: [
          'It depends on the shipping method and terms quoted for the shipment.',
          'Some shipping options may include certain duties or taxes, while others may require the recipient to pay them separately. We will clarify the applicable shipping terms and charges when quoting the shipment.',
          'Customs requirements and taxes are determined by the destination country and applicable authorities.',
        ],
      },
      {
        question: 'Can you help me choose between air and sea shipping?',
        answer: [
          'Yes. We can help compare available shipping options based on factors such as weight, volume, destination, urgency and cost.',
          'The final choice depends on your priorities and the shipping terms available for the specific shipment.',
        ],
      },
    ],
  },

  /* ------------------------------------------------------- 10 — category 07 -- */
  {
    type: 'faq',
    anchor: 'faq-pricing-payment',
    tone: 'ivory',
    eyebrow: 'PRICING & PAYMENT',
    title: 'Understand the costs before you proceed.',
    items: [
      {
        question: 'How much does SOURDEN charge for sourcing services?',
        answer: [
          'Service fees depend on the scope and complexity of the sourcing project.',
          'Some projects may involve supplier sourcing only, while others may include purchasing, quality control, order management and shipping. We will explain the applicable service costs before you proceed.',
        ],
      },
      {
        question: 'What information do I need to provide to get started?',
        answer: [
          'Start with whatever information you already have.',
          'Useful details include the product you are looking for, reference photos or links, specifications, estimated quantity, target price if available, destination country and any customization requirements.',
          'You do not need to have every detail finalized before submitting a request. We can clarify the requirements with you as the project develops.',
        ],
        link: { label: 'Start a Sourcing Request', href: '/sourcing-request' },
      },
    ],
  },
];

/* ===========================================================================
   11 — CUSTOM SOURCING  (brief §12)
   ---------------------------------------------------------------------------
   The brief is explicit that this is NOT a ninth category: "add a small
   informational block after the main FAQ sections rather than creating another
   large FAQ category". So it is one prose section — the same shared device the
   detail pages use for a heading plus body copy — carrying the brief's two
   actions.
   =========================================================================== */

export const customSourcingSection = {
  type: 'prose',
  anchor: 'faq-custom-sourcing',
  tone: 'white',
  eyebrow: 'CUSTOM SOURCING',
  title: 'Have something specific in mind?',
  paragraphs: [
    "Not every sourcing project fits neatly into a category. If you have a product idea, an existing product, a sample, drawings, reference images or specific requirements, send us the details and we'll assess the available sourcing options.",
  ],
  links: [
    { label: 'Tell Us What You Need', href: '/sourcing-request' },
    { label: 'Explore Our Industries', href: '/industries' },
  ],
};

/* ===========================================================================
   12 — FINAL CTA  (brief §13)
   ---------------------------------------------------------------------------
   Copy verbatim. Only the primary action is rendered — see the file header for
   why the brief's secondary is not, and where that destination already sits.
   =========================================================================== */

export const finalCta = {
  eyebrow: 'START WITH A REQUEST',
  title: 'Still have questions?',
  description:
    "You don't need to have everything figured out before you contact us. Tell us what you're looking for and what you already know. We'll help clarify the sourcing requirements from there.",
  cta: primaryCta,
};

/* ===========================================================================
   THE PAGE BODY, IN RENDER ORDER  (brief §15)
   ---------------------------------------------------------------------------
   The brief's own hierarchy: hero → category navigation → the seven categories
   → the Custom Sourcing block → the closing band. The hero and the closing band
   are rendered directly by the page (they are shared devices with their own
   props); everything BETWEEN them is this array, so the order is a data edit
   rather than a markup edit and an unknown `type` fails the build instead of
   silently dropping a band.

   Declared here, after the parts it composes, because `const` bindings are
   evaluated in order and referencing one before its declaration throws.
   =========================================================================== */

export const sections = [
  /* §3 — the navigation comes first, immediately below the introduction. Its
     nine entries are listed in the brief's order, which is NOT the order of the
     sections below ("Custom Products" is the eighth nav entry and points at the
     block that renders after all seven categories). */
  { type: 'categories', tone: 'white', label: 'CATEGORIES', items: categoryNav },

  ...faqSections,

  customSourcingSection,
];

/**
 * Every question on the page, in render order — the input to the FAQPage
 * structured-data node.
 *
 * Derived from the sections rather than written out again, so the node can
 * never describe a question the page does not render. The Custom Sourcing
 * block contributes nothing: it is prose with two actions, not a question.
 */
export const faqItems = faqSections.flatMap((section) => section.items);
