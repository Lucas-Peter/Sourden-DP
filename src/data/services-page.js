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
 * The MOQ wording (§14) is deliberate: SOURDEN does not impose its own minimum
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
    'SOURDEN helps you source from China through supplier research, verification, purchasing, quality control and shipping — coordinated through one partner.',
  primaryCta: { ...primaryCta },
  secondaryCta: { label: 'How It Works', href: '/how-it-works' },
  image: {
    key: 'servicesHero',
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
  eyebrow: 'HOW THE SERVICES CONNECT',
  title: 'One process. One point of coordination.',
  note: 'Not every project needs every service. You can use SOURDEN for the full process or for specific stages where you need support.',
};

/** @type {Array<{ slug: string, verb: string }>} */
const processStageCopy = [
  {
    slug: 'product-sourcing',
    verb: 'Find',
  },
  {
    slug: 'supplier-verification',
    verb: 'Verify',
  },
  {
    slug: 'purchasing-order-management',
    verb: 'Purchase',
  },
  {
    slug: 'quality-control',
    verb: 'Check',
  },
  {
    slug: 'shipping-from-china',
    verb: 'Ship',
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
  /** §22 — the page is the hub for the category pages. */
  foot: { label: 'Explore What We Source', href: '/industries' },
};

/**
 * Only the parts that differ from the registry are declared here — in this
 * simplified form, just the one-line description and the image slot.
 * `number`, `title`, `href`, the eyebrow and the CTA label are derived.
 *
 * @type {Array<{ slug: string, description: string, imageKey: string, imageCaption: string }>}
 */
const overviewSectionCopy = [
  {
    slug: 'product-sourcing',
    description:
      'Find suitable suppliers based on your product requirements, specifications, target pricing, quantity and sourcing goals.',
    imageKey: 'serviceProductSourcing',
    imageCaption: 'PRODUCT SAMPLES',
  },
  {
    slug: 'supplier-verification',
    description:
      'Review supplier capabilities, product fit, MOQ, pricing, lead times and other key factors before you move forward.',
    imageKey: 'serviceSupplierVerification',
    imageCaption: 'SUPPLIER ASSESSMENT',
  },
  {
    slug: 'purchasing-order-management',
    description:
      'Coordinate quotations, purchasing, supplier communication, production progress and order details.',
    imageKey: 'servicePurchasingManagement',
    imageCaption: 'ORDER & PACKAGING',
  },
  {
    slug: 'quality-control',
    description:
      'Arrange product checks before shipment to identify issues and confirm that the order meets agreed requirements.',
    imageKey: 'serviceQualityControl',
    imageCaption: 'PRE-SHIPMENT CHECK',
  },
  {
    slug: 'shipping-from-china',
    description:
      'Coordinate shipping from China and connect the sourcing process with an appropriate logistics solution.',
    imageKey: 'serviceShippingFromChina',
    imageCaption: 'SHIPMENT PREPARATION',
  },
];

/* ===========================================================================
   FAQ — spec §17
   ---------------------------------------------------------------------------
   Rendered as a native <details> disclosure group, so it works with no
   JavaScript at all and is keyboard-operable for free. The first item starts
   open: a list of three closed rows gives a visitor nothing to read.

   Every answer stays inside what the business can actually state. The MOQ
   answer in particular repeats the §14 wording rule.
   =========================================================================== */

export const faqIntro = {
  eyebrow: 'FAQ',
  title: 'Questions about sourcing with SOURDEN.',
  cta: { label: 'View All FAQs', href: '/faq' },
};

export const faqItems = [
  {
    question: 'Can you help with small orders?',
    answer:
      "We don't impose a fixed minimum order quantity. However, individual suppliers may have their own MOQ requirements.",
  },
  {
    question: 'Can I use only one of your services?',
    answer:
      'Yes. You can use SOURDEN for the full sourcing process or for specific stages such as supplier sourcing, purchasing, quality control or shipping.',
  },
  {
    question: 'How do I get started?',
    answer:
      "Submit a sourcing request with your product requirements, quantity and destination. We'll review the information and follow up on the next steps.",
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
  title: 'Need help sourcing from China?',
  description: "Tell us what you need. We'll help you determine the right sourcing approach.",
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
    eyebrow: service.number,
    cta: 'Learn More',
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
