/**
 * SOURDEN — /services/shipping-from-china
 * ---------------------------------------------------------------------------
 * Every editable word on the Shipping from China detail page. Part of the
 * five-page architecture documented in `service-detail.js` and based on the
 * five-page brief (PAGE 5).
 *
 * ── THE SECTION THIS PAGE IS REALLY ABOUT ──────────────────────────────────
 * §07 draws the line the brief cares most about: shipping is not the same as
 * customs clearance. Duties, taxes, product regulations and import
 * requirements depend on the destination and are outside anyone's control, so
 * the page says that plainly. The brief bans "guaranteed customs clearance",
 * "zero duties", "tax-free delivery", "guaranteed delivery time" and
 * "guaranteed final shipping cost" — along with the same ban on promising that
 * one freight method is always the cheapest or fastest (§03) or a delivery date
 * at all (§05). All five are absent, and §03 carries a short note saying so in
 * the page's own voice rather than relying on the reader not to infer it.
 *
 * ── COPY THE BRIEF DID NOT SUPPLY ──────────────────────────────────────────
 * Marked 〔added〕 below. The brief gave headings for §02, §03, §06 and §07, all
 * seven FAQ answers, and the section labels — but no eyebrows for §03–§08, no
 * sentences for §04, §05 and §08, and a heading for §03 without a supporting
 * sentence. Eyebrows for §02 (the service name) and §05 (`HOW IT WORKS`) follow
 * page 1's established pattern.
 *
 * ── CLAIMS RULE (cross-page requirement §4) ────────────────────────────────
 * No client count, no shipment volume, no transit-time average, no carrier
 * partner list, no certification. "Delivery" appears only as the name of a
 * stage, never as a promise.
 *
 * ── TONE PER SECTION ───────────────────────────────────────────────────────
 * Hero ivory, process band ink, FAQ ivory, the rest alternating.
 * ---------------------------------------------------------------------------
 */

export const slug = 'shipping-from-china';

/* ===========================================================================
   SEO — brief PAGE 5 §SEO. Both strings are mandated verbatim.
   =========================================================================== */

export const meta = {
  title: 'Shipping from China | International Freight Coordination | SOURDEN',
  description:
    'SOURDEN coordinates shipping from China by air, sea, courier and other suitable logistics solutions based on the shipment and destination.',
};

/* ===========================================================================
   01 — HERO
   =========================================================================== */

export const hero = {
  eyebrow: 'SHIPPING FROM CHINA',
  title: 'Move your goods from China to where they need to go.',
  description:
    'Once your goods are ready, we coordinate shipping from China and help connect the sourcing process with a practical logistics solution for your destination and shipment.',
  /** Image direction (brief): a real warehouse, packed cartons, palletized
   *  goods, loading, freight preparation, port or logistics operation. The
   *  brief bans cliché cargo-container hero shots. Art direction and crop note
   *  live with the slot in `media.js`. */
  image: {
    key: 'serviceShippingFromChinaHero',
    caption: 'FREIGHT PREPARATION',
  },
};

/* ===========================================================================
   SECTIONS — in render order
   =========================================================================== */

export const sections = [
  /* ---------------------------------------------------------------- 02 --- */
  {
    type: 'prose',
    tone: 'white',
    eyebrow: 'SHIPPING FROM CHINA',
    title: "The sourcing process doesn't end at the factory.",
    paragraphs: [
      'Getting the right product from the right supplier is only part of the job. The goods still need to be prepared, documented and moved from China to their destination.',
      'Sourden can coordinate the shipping stage and connect it with the purchasing and quality-control process.',
    ],
  },

  /* ---------------------------------------------------------------- 03 --- */
  {
    type: 'reviewGrid',
    tone: 'ivory',
    /** The brief's section label, used as the eyebrow. */
    eyebrow: 'SHIPPING OPTIONS',
    title: 'Different shipments require different solutions.',
    /** Four items — two per column at desktop. */
    items: [
      { title: 'Air Freight', description: 'Suitable for shipments where transit time and shipment size make air freight practical.' },
      { title: 'Sea Freight', description: 'Suitable for larger or heavier shipments where ocean freight is appropriate.' },
      { title: 'Courier / Express', description: 'Suitable for smaller shipments and situations where express delivery is practical.' },
      { title: 'LCL / FCL', description: 'Depending on shipment volume, goods may move as less-than-container-load or full-container-load cargo.' },
    ],
    /** 〔added〕 — the brief's "Important" for this section, said in the page's
     *  own words so the reader is not left to infer a ranking of the four. */
    note: 'Which method suits a shipment depends on its size, weight, timing and destination — no single option is always the cheapest or the fastest.',
  },

  /* ---------------------------------------------------------------- 04 --- */
  {
    type: 'checkList',
    tone: 'white',
    /** The brief's section label, used as the eyebrow. */
    eyebrow: 'WHAT WE COORDINATE',
    /** 〔added〕 — the brief gave the list but no sentence for it. */
    title: 'The parts of the shipment we coordinate.',
    items: [
      'Shipment preparation',
      'Freight coordination',
      'Pickup from supplier',
      'Cargo information',
      'Packaging requirements',
      'Shipping documentation',
      'Air / sea / courier options',
      'LCL / FCL coordination where appropriate',
      'Destination considerations',
      'Communication between supplier and logistics provider',
    ],
  },

  /* ---------------------------------------------------------------- 05 --- */
  {
    type: 'process',
    tone: 'ink',
    eyebrow: 'HOW IT WORKS',
    /** 〔added〕 — the brief gave the five steps but no heading for the band. */
    title: 'From preparation to the destination side.',
    /** Numbers derive from array order (01…05), never typed. */
    steps: [
      { label: 'Prepare', description: 'Confirm product, quantity, dimensions, weight and shipment requirements.' },
      { label: 'Quote', description: 'Review appropriate shipping options and available quotations.' },
      { label: 'Arrange', description: 'Coordinate cargo pickup and shipment preparation.' },
      { label: 'Ship', description: 'Coordinate the shipment with the selected logistics solution.' },
      { label: 'Deliver', description: 'Connect the shipment with the destination-side delivery process where applicable.' },
    ],
    /**
     * The brief's instruction for this stage is that no delivery date may be
     * promised. Saying why is more useful than saying nothing.
     */
    note: 'Transit timing depends on the method, the route and the destination, so the process is coordinated stage by stage rather than against a promised date.',
  },

  /* ---------------------------------------------------------------- 06 --- */
  {
    type: 'checkList',
    tone: 'white',
    /** 〔added〕 eyebrow. */
    eyebrow: 'COST FACTORS',
    title: 'Shipping cost depends on more than distance.',
    description: 'The final logistics cost depends on the shipment and destination.',
    items: [
      'Weight',
      'Volume',
      'Product type',
      'Packaging',
      'Shipping method',
      'Origin',
      'Destination',
      'Delivery address',
      'Shipment timing',
      'Customs and destination requirements',
    ],
    note: "We'll help identify the relevant factors before choosing a shipping solution.",
  },

  /* ---------------------------------------------------------------- 07 --- */
  {
    type: 'prose',
    tone: 'ivory',
    /** The brief's section label, used as the eyebrow. */
    eyebrow: 'SHIPPING & CUSTOMS',
    title: 'Shipping is not the same as customs clearance.',
    /**
     * The brief bans "guaranteed customs clearance", "zero duties" and
     * "tax-free delivery" on this section. The wording below states the
     * boundary once and leaves the destination's rules where they belong — with
     * the destination.
     */
    paragraphs: [
      'International shipments may involve customs procedures, duties, taxes, product regulations and destination-specific requirements. These requirements vary by country and product.',
      'Sourden can coordinate shipping information and work with logistics partners where appropriate, but customs treatment and import requirements depend on the shipment, destination and applicable regulations.',
    ],
  },

  /* ---------------------------------------------------------------- 08 --- */
  {
    type: 'chain',
    tone: 'white',
    /** The brief's section label, used as the eyebrow. */
    eyebrow: 'CONNECTED SERVICES',
    /** 〔added〕 — the brief gave the rail and the copy but no sentence heading. */
    title: 'Shipping is the last stage of the process.',
    description:
      'When the sourcing, purchasing, quality control and shipping stages are coordinated together, fewer details are left disconnected between supplier and logistics provider.',
    /** Stages come from `chainFor(slug)`; this page never names a service.
     *  Shipping is the last stage, so it is the one marked current. */
  },

  /* ---------------------------------------------------------------- 09 --- */
  {
    type: 'faq',
    eyebrow: 'FAQ',
    title: 'Questions about shipping from China.',
    /** All seven answers are the brief's own text, verbatim. */
    items: [
      {
        question: 'Can you ship products from China to my country?',
        answer:
          'In many cases, yes. Available shipping solutions depend on the product, shipment size, destination and applicable logistics requirements.',
      },
      {
        question: 'Can you ship small quantities?',
        answer:
          'Depending on the shipment, courier, express, air freight or other suitable options may be available. The appropriate method depends on the actual shipment.',
      },
      {
        question: 'Do you offer sea freight?',
        answer: 'Yes. Sea freight can be coordinated for appropriate shipments, including LCL or FCL where applicable.',
      },
      {
        question: 'Can you arrange pickup from the supplier?',
        answer: 'Pickup can be coordinated depending on the shipping arrangement and logistics provider.',
      },
      {
        question: 'Can you handle customs clearance?',
        answer:
          "Customs procedures depend on the destination, product and shipping arrangement. We can coordinate with logistics providers where appropriate, but import requirements remain subject to the destination country's regulations.",
      },
      {
        question: 'How is the shipping cost calculated?',
        answer:
          'Shipping cost depends on factors such as weight, volume, product type, origin, destination, shipping method and delivery requirements.',
      },
      {
        question: 'Can you ship goods after quality inspection?',
        answer: 'Yes. Quality control can be coordinated before shipment, followed by the appropriate shipping arrangement.',
      },
    ],
  },
];

/* ===========================================================================
   10 — FINAL CTA
   =========================================================================== */

export const finalCta = {
  eyebrow: 'START WITH A REQUEST',
  title: 'Ready to move your goods from China?',
  description:
    "Tell us what you're sourcing, how much you need and where it needs to go. We'll help coordinate the next step.",
};

/* ===========================================================================
   THE PAGE OBJECT
   =========================================================================== */

export const shippingFromChina = { slug, meta, hero, sections, finalCta };
