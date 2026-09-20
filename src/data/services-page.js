/**
 * SOURDEN — /services PAGE COPY
 * ---------------------------------------------------------------------------
 * Every editable word on the Services Overview page lives here (spec §3, §4–§18
 * of the services brief). No copy is written into markup.
 *
 * ── THE ONE RULE THAT MATTERS ──────────────────────────────────────────────
 * Service names, numbers and URLs are NOT repeated in this file. They are read
 * from `src/data/services.js` and merged in at the bottom, because the same
 * five services also render on the homepage and in the footer. Declaring the
 * title a second time here is exactly how a rename drifts out of sync — and it
 * already has once: service 03 was shortened from "Purchasing & Order
 * Management" to "Purchasing Management", so this page's eyebrows and CTAs now
 * read "03 — PURCHASING MANAGEMENT" / "Explore Purchasing Management" while the
 * URL contract stays `/services/purchasing-order-management`.
 *
 * ── CLAIMS RULE (spec §20) ─────────────────────────────────────────────────
 * Nothing in this file may assert a number, a testimonial, a certification, a
 * saving, a success rate or a guaranteed outcome. The tone is experienced,
 * practical, calm, direct, professional — no superlatives.
 *
 * The MOQ wording (§14) is deliberate: Sourden does not impose its own minimum
 * order quantity. It is NOT a claim that Chinese factories have no MOQ.
 * ---------------------------------------------------------------------------
 */

import { services } from './services.js';
import { primaryCta } from './site.js';

/* ===========================================================================
   PAGE SEO — spec §3 (values are mandated verbatim; do not paraphrase)
   =========================================================================== */

export const servicesPageMeta = {
  title: 'China Sourcing Services | SOURDEN',
  description:
    'SOURDEN provides product sourcing, supplier verification, purchasing, quality control and shipping services from China.',
};

export const breadcrumbs = [{ label: 'Services' }];

/* ===========================================================================
   HERO — spec §4
   =========================================================================== */

export const hero = {
  eyebrow: 'OUR SERVICES',
  title: 'From supplier discovery to final shipment.',
  description:
    'Sourden helps businesses source products from China through one coordinated process — from finding suitable suppliers and comparing options to purchasing, quality control and shipping.',
  primaryCta: { ...primaryCta },
  secondaryCta: { label: 'How It Works', href: '/how-it-works' },
  image: {
    key: 'servicesHero',
    caption: 'SAMPLE & SUPPLIER REVIEW',
  },
};

/* ===========================================================================
   THE SOURCING PROCESS — spec §5
   ---------------------------------------------------------------------------
   Five connected stages. The verb (FIND / VERIFY / PURCHASE / INSPECT / SHIP)
   is the connective tissue the brief asks for — it is what turns five services
   into one process, so it must not be dropped in favour of the service name
   alone.

   Only the stage descriptions live here; `title` and `href` are merged in from
   the service registry below.
   =========================================================================== */

export const processIntro = {
  eyebrow: 'THE SOURCING PROCESS',
  title: 'One process. From finding to shipping.',
  description:
    "Sourcing doesn't stop when you find a supplier. Each stage affects the next. Sourden coordinates the process from initial supplier research through purchasing, quality control and shipment.",
};

/** @type {Array<{ slug: string, verb: string, description: string }>} */
const processStageCopy = [
  {
    slug: 'product-sourcing',
    verb: 'Find',
    description: 'Research suitable suppliers and sourcing options based on your requirements.',
  },
  {
    slug: 'supplier-verification',
    verb: 'Verify',
    description:
      'Evaluate supplier capability, product fit, pricing, MOQ, lead times and other relevant factors.',
  },
  {
    slug: 'purchasing-order-management',
    verb: 'Purchase',
    description: 'Coordinate quotations, purchasing, supplier communication and production progress.',
  },
  {
    slug: 'quality-control',
    verb: 'Inspect',
    description:
      'Arrange product checks before shipment to identify issues and confirm the order against agreed requirements.',
  },
  {
    slug: 'shipping-from-china',
    verb: 'Ship',
    description:
      'Coordinate shipping from China and connect the sourcing process with an appropriate logistics solution.',
  },
];

/* ===========================================================================
   SERVICES OVERVIEW — spec §6–§11
   ---------------------------------------------------------------------------
   Five alternating image/text sections. Each keeps the eight "key areas" the
   brief specifies; they are what make these sections substantive rather than
   marketing. Order matches the process above (Find → Verify → Purchase →
   Inspect → Ship), so the two sections reinforce each other.
   =========================================================================== */

export const overviewIntro = {
  eyebrow: 'WHAT WE DO',
  title: 'The services behind a complete sourcing process.',
  description:
    'You can work with us across the full process or start with the specific sourcing support you need.',
  /** Spec §22 — the page is the hub for the category pages. */
  foot: { label: 'Browse what we source', href: '/industries' },
};

/**
 * Only the parts that differ from the registry are declared here.
 * `number`, `title`, `href`, the eyebrow and the CTA label are derived.
 *
 * @type {Array<{ slug: string, heading: string, description: string, keyAreas: string[], imageKey: string, imageCaption: string }>}
 */
const overviewSectionCopy = [
  {
    slug: 'product-sourcing',
    heading: 'Find products and suppliers that fit your requirements.',
    description:
      'We research suitable suppliers based on your product specifications, target pricing, quantity, market and sourcing goals — rather than simply sending you a list of supplier links.',
    keyAreas: [
      'Product research',
      'Supplier research',
      'Product specifications',
      'Target pricing',
      'MOQ considerations',
      'Supplier comparison',
      'Sample sourcing',
      'Custom product requirements',
    ],
    imageKey: 'serviceProductSourcing',
    imageCaption: 'PRODUCT SAMPLES',
  },
  {
    slug: 'supplier-verification',
    heading: 'Look beyond the supplier listing.',
    description:
      'Finding a supplier is only the beginning. We help evaluate whether a supplier is suitable for your product, order size and requirements before you move forward.',
    keyAreas: [
      'Supplier capability',
      'Product fit',
      'MOQ',
      'Pricing',
      'Lead times',
      'Production capability',
      'Communication',
      'Relevant supplier information',
    ],
    imageKey: 'serviceSupplierVerification',
    imageCaption: 'SUPPLIER ASSESSMENT',
  },
  {
    slug: 'purchasing-order-management',
    heading: 'Keep the order moving after the supplier is chosen.',
    description:
      "We coordinate quotations, purchasing, supplier communication, production progress and order details so you don't have to manage every step directly from overseas.",
    keyAreas: [
      'Quotation coordination',
      'Purchase orders',
      'Supplier communication',
      'Production follow-up',
      'Order progress',
      'Specification confirmation',
      'Packaging coordination',
      'Pre-shipment coordination',
    ],
    imageKey: 'servicePurchasingManagement',
    imageCaption: 'ORDER & PACKAGING',
  },
  {
    slug: 'quality-control',
    heading: 'Check the order before it leaves China.',
    description:
      'We can arrange product checks before shipment to identify issues and confirm that the order matches the agreed requirements.',
    keyAreas: [
      'Product inspection',
      'Quantity checks',
      'Appearance checks',
      'Specifications',
      'Packaging',
      'Defect identification',
      'Photo/video evidence where appropriate',
      'Pre-shipment checks',
    ],
    imageKey: 'serviceQualityControl',
    imageCaption: 'PRE-SHIPMENT CHECK',
  },
  {
    slug: 'shipping-from-china',
    heading: 'Connect sourcing with the right shipping solution.',
    description:
      'Once your goods are ready, we coordinate shipping from China and help connect the sourcing process with a practical logistics solution for your destination and shipment.',
    keyAreas: [
      'International shipping coordination',
      'Air freight',
      'Sea freight',
      'Courier / express',
      'LCL / FCL where appropriate',
      'Shipment preparation',
      'Documentation coordination',
      'Destination considerations',
    ],
    imageKey: 'serviceShippingFromChina',
    imageCaption: 'SHIPMENT PREPARATION',
  },
];

/* ===========================================================================
   HOW THE SERVICES WORK TOGETHER — spec §12
   ---------------------------------------------------------------------------
   Two paths, neither presented as better than the other. The short path must
   not read as the entry-level option — that is why its flow ends on
   "You decide how to proceed." rather than stopping short of a conclusion.
   =========================================================================== */

export const pathsIntro = {
  eyebrow: 'ONE PARTNER. THE WHOLE PROCESS.',
  title: 'Use one service or connect the whole process.',
  description:
    'Not every sourcing project needs the same level of support. You can start with a specific requirement or work with Sourden across the full sourcing process.',
};

export const paths = [
  {
    number: '01',
    label: 'Start with one need',
    flow: ['Product Sourcing', 'Supplier Verification'],
    closing: 'You decide how to proceed.',
    description:
      'Already know what you need? Start with the specific sourcing support that makes sense for your project.',
  },
  {
    number: '02',
    label: 'Manage the full process',
    flow: ['Product Sourcing', 'Supplier Verification', 'Purchasing', 'Quality Control', 'Shipping'],
    closing: null,
    description:
      'Need someone to coordinate the process from supplier research through shipment? We can work across the full sourcing cycle.',
  },
];

/* ===========================================================================
   WHO WE WORK WITH — spec §13
   ---------------------------------------------------------------------------
   Five groups. The fifth is deliberately a consumer: Sourden's primary focus
   is businesses, and the note below says so, so the section never reads as a
   consumer shopping service.
   =========================================================================== */

export const audienceIntro = {
  eyebrow: 'WHO WE WORK WITH',
  title: 'Sourcing support for different stages and needs.',
  description:
    "You don't need a large purchasing team or huge order volumes to start sourcing from China.",
  /**
   * Positioning line required by spec §13. It sits with the eyebrow rather than
   * under the heading, because as a footnote it read as a disclaimer instead of
   * the framing statement it is.
   */
  note: 'Our primary focus is supporting businesses. Individual consumers are welcome too.',
};

export const audienceGroups = [
  {
    number: '01',
    title: 'Small Wholesalers',
    description:
      'Looking for reliable products without committing to unnecessarily large order volumes.',
  },
  {
    number: '02',
    title: 'Independent Retailers',
    description: "Need a better source but don't have a dedicated purchasing team.",
  },
  {
    number: '03',
    title: 'Local Shops',
    description: 'Want access to Chinese suppliers without navigating the sourcing process alone.',
  },
  {
    number: '04',
    title: 'Growing Brands',
    description: 'Building a more reliable supply chain as your business grows.',
  },
  {
    number: '05',
    title: 'Individual Consumers',
    description:
      'Looking for a specific product, custom item or sourcing solution for personal use.',
  },
];

/* ===========================================================================
   SOURCE AT YOUR SCALE — spec §14
   ---------------------------------------------------------------------------
   MOQ WORDING IS LOAD-BEARING. The only truthful statement available is that
   SOURDEN does not impose its own MOQ. It must never become "No MOQ from
   Chinese factories", "MOQ: 0" or anything implying every factory takes small
   orders. See the same rule documented in `src/data/audiences.js`.
   =========================================================================== */

export const scale = {
  eyebrow: 'SOURCE AT YOUR SCALE',
  title: 'Start with the quantity that makes sense for you.',
  description:
    "We don't impose our own minimum order quantity. We'll work with you to find sourcing options that fit your current stage and requirements.",
};

/* ===========================================================================
   WHAT YOU CAN EXPECT — spec §15
   ---------------------------------------------------------------------------
   Five statements, all of them descriptions of how Sourden works. None is a
   measurable claim, and none may become one.
   =========================================================================== */

export const expectationsIntro = {
  eyebrow: 'WHAT YOU CAN EXPECT',
  title: 'Practical sourcing, without unnecessary complexity.',
  foot: { label: 'See how it works', href: '/how-it-works' },
};

export const expectations = [
  {
    title: 'Clear Communication',
    description: 'One point of contact for sourcing coordination and supplier communication.',
  },
  {
    title: 'Practical Research',
    description: 'Supplier research based on your actual product and business requirements.',
  },
  {
    title: 'Relevant Options',
    description:
      'Focus on suppliers and products that fit the project rather than overwhelming you with generic listings.',
  },
  {
    title: 'Process Coordination',
    description:
      'Support across purchasing, production follow-up, quality control and shipping where required.',
  },
  {
    title: 'Transparent Next Steps',
    description:
      'Clear communication about what we know, what needs to be checked and what happens next.',
  },
];

/* ===========================================================================
   THE SOURDEN APPROACH — spec §16
   ---------------------------------------------------------------------------
   Dark editorial band. The second heading line carries the point of the whole
   section ("It's about finding the right supplier for the job.") and is set in
   brass, so it reads as the conclusion rather than a subtitle.
   =========================================================================== */

export const approach = {
  eyebrow: 'THE SOURDEN APPROACH',
  title: "Good sourcing isn't about finding the cheapest supplier.",
  emphasis: "It's about finding the right supplier for the job.",
  description:
    "The lowest quotation doesn't always mean the lowest total cost. Product quality, communication, MOQ, lead time, production capability and shipping all matter. Our role is to help you evaluate those factors and make the sourcing process more workable.",
  foot: { label: 'More about Sourden', href: '/about' },
};

/* ===========================================================================
   FAQ — spec §17
   ---------------------------------------------------------------------------
   Rendered as a native <details> disclosure group, so it works with no
   JavaScript at all and is keyboard-operable for free. The first item starts
   open: a list of eight closed rows gives a visitor nothing to read.

   Every answer stays inside what the business can actually state. The MOQ
   answer in particular repeats the §14 wording rule.
   =========================================================================== */

export const faqIntro = {
  eyebrow: 'FAQ',
  title: 'Questions about sourcing with Sourden.',
  cta: { label: 'Start a Sourcing Request', href: primaryCta.href },
};

export const faqItems = [
  {
    question: 'Do you have a minimum order quantity?',
    answer:
      "Sourden does not impose its own fixed minimum order quantity. The practical MOQ will depend on the supplier, product and requirements, and we'll help you look for sourcing options that fit your situation.",
  },
  {
    question: "Can you source a product if I don't know the supplier?",
    answer:
      "Yes. You can start with the product itself. Share what you know about the product, specifications, quantity and destination, and we'll research suitable sourcing options.",
  },
  {
    question: 'Can you work with small businesses?',
    answer:
      'Yes. Sourden is built to support small wholesalers, retailers, local shops and growing businesses that may not have their own supplier network in China.',
  },
  {
    question: 'Do you only work with businesses?',
    answer:
      'No. While our primary focus is supporting businesses, we also work with individual consumers who need help sourcing specific products or custom items from China.',
  },
  {
    question: 'Can you inspect products before shipping?',
    answer:
      'Yes. Quality control can be arranged before shipment to check agreed product requirements, quantity, appearance, packaging and other relevant details.',
  },
  {
    question: 'Can you handle shipping from China?',
    answer:
      'Yes. We can coordinate shipping from China and help connect the sourcing process with an appropriate logistics solution based on the shipment and destination.',
  },
  {
    question: 'Can you source custom or private-label products?',
    answer:
      'Yes. Depending on the product, we can research suppliers that support customization, branding, packaging or other specific requirements.',
  },
  {
    question: 'How do I start?',
    answer:
      "Start by submitting a sourcing request. Tell us what you're looking for, your approximate quantity and destination, and include any product references you have. We'll review the request and come back to you with the next steps.",
  },
];

/* ===========================================================================
   FINAL CTA — spec §18
   Exactly one primary action. The copy differs from the homepage's closing
   band on purpose: a visitor who has just read the whole service list has a
   different question in mind than one who has only seen the hero.
   =========================================================================== */

export const finalCta = {
  eyebrow: 'START WITH A REQUEST',
  title: 'Have something specific in mind?',
  description: "Tell us what you're looking for. We'll take it from there.",
  cta: { ...primaryCta },
};

/* ===========================================================================
   MERGE — registry + page copy
   ---------------------------------------------------------------------------
   A missing slug throws at build time rather than rendering a section with
   `undefined` in it. Service pages are not built yet (spec §23), so this is the
   only place the two lists are held in agreement.
   =========================================================================== */

/** @param {string} slug */
function requireService(slug) {
  const service = services.find((entry) => entry.slug === slug);
  if (!service) {
    throw new Error(
      `[services-page.js] No service registered with slug "${slug}". ` +
        `Add it to services.js — this page never declares a service name of its own.`
    );
  }
  return service;
}

/** §5 — connected stages: VERB + canonical service title + link. */
export const processStages = processStageCopy.map((stage) => {
  const service = requireService(stage.slug);
  return {
    number: service.number,
    verb: stage.verb,
    title: service.title,
    description: stage.description,
    href: service.href,
  };
});

/** §6–§11 — alternating sections, named and linked from the registry. */
export const overviewSections = overviewSectionCopy.map((section) => {
  const service = requireService(section.slug);
  return {
    ...section,
    number: service.number,
    title: service.title,
    href: service.href,
    eyebrow: `${service.number} — ${service.title.toUpperCase()}`,
    cta: `Explore ${service.title}`,
    /**
     * Drives the alternating composition. The image sits on the LEFT for
     * 01 / 03 / 05 and on the RIGHT for 02 / 04, so consecutive sections mirror
     * each other. The markup keeps text-before-image in the DOM at every width
     * — the flip is done with grid placement only, never with `order`, so the
     * mobile reading order stays text → image regardless.
     */
    mediaLeft: Number(service.number) % 2 === 1,
  };
});
