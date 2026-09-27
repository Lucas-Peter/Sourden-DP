/**
 * SOURDEN — THE SECTIONS EVERY `/industries/<slug>` PAGE SHARES
 * ---------------------------------------------------------------------------
 * The nine category pages are one architecture with nine sets of copy. Seven of
 * their sections are genuinely category-specific and are written in each
 * `industry-<slug>.js` file. The six below are not: their content does not
 * change with the product category, so they are declared ONCE here and spread
 * into each page's `sections` array in the brief's order.
 *
 * ── WHAT THIS FILE OWNS, AND WHERE THE BRIEF PUTS IT ───────────────────────
 *   RELATED SERVICES   §13, given verbatim for all nine pages ("Every industry
 *                      page should contain a section near the bottom … THE
 *                      STANDARD 'RELATED SERVICES' SECTION").
 *   WHO WE WORK WITH   §14, same — "Use a compact section on every page".
 *   START WITH A      §15, same — "Every page should end with".
 *     REQUEST
 *   WHAT WE CAN HELP   Listed once, under §4 for Consumer Products, and never
 *     WITH             varied for the other eight: these seven items are what
 *                      Sourden does, not what a category needs. Nine copies
 *                      would be nine places for the list to drift.
 *   TYPICAL SOURCING   Same: §4 gives the six stages once and never varies
 *     PROCESS          them. It is one process, and a category page that showed
 *                      a different process would be describing a different
 *                      company.
 *   EXPLORE MORE       §16, the nine-category index.
 *
 * ── WHY HERE AND NOT IN `industry-links.js` ─────────────────────────────────
 * That file is the leaf the REGISTRY-derived helpers live in, and it is also
 * imported by `/industries`' own data file. These six are copy for the nine
 * category pages, so they get their own module: `industry-links.js` supplies the
 * five service records this file's related-services band renders, and nothing
 * else. Both are leaves, so neither can close an import cycle with
 * `industry-detail.js` — see that file's header and `industry-links.js`' for why
 * that matters.
 *
 * ── THE CLAIMS RULE STILL APPLIES ──────────────────────────────────────────
 * Nothing below asserts a client or supplier count, years in business, a success
 * rate, a certification, a testimonial, a case study or a logo, and nothing
 * promises guaranteed quality, guaranteed compliance, guaranteed delivery, the
 * lowest price or that Sourden can source anything. The register is the site's:
 * "can", "where appropriate", "depending on the product".
 * ---------------------------------------------------------------------------
 */

import { relatedServices } from './industry-links.js';

/* ===========================================================================
   §13 — RELATED SERVICES  (brief, verbatim)
   ---------------------------------------------------------------------------
   The five services, numbered, each with the sentence `/industries` §11 already
   publishes for it — read from `industry-links.js`, so this band and the hub's
   cannot show two descriptions of one service. Service 03 reads "Purchasing
   Management", the name the site publishes; the brief's "Purchasing & Order
   Management" is not used on the live site.
   =========================================================================== */

export const relatedServicesSection = {
  type: 'rows',
  /** 〔added〕 tone — white, so the ink rail above it and the ivory audience
   *  band below it both read as separate sections. */
  tone: 'white',
  eyebrow: 'RELATED SERVICES',
  title: "The sourcing process doesn't stop at finding a supplier.",
  description:
    'Depending on your project, Sourden can support different parts of the sourcing process — from supplier research and verification to purchasing, quality control and shipping.',
  items: relatedServices,
  foot: { label: 'View All Services', href: '/services' },
};

/* ===========================================================================
   §14 — WHO WE WORK WITH  (brief, verbatim)
   ---------------------------------------------------------------------------
   Five buyer groups and the brief's supporting paragraph, on every page. The
   device is the site's dense check-list rather than `/industries` §07's editorial
   rows, because the brief asks for "a compact section on every page" and does
   not give a sentence per group here.

   The five names are the site's own vocabulary — the same five the homepage,
   `/services` and `/industries` §07 use — and they are the brief's five
   ("Small Wholesalers / Independent Retailers / Local Shops / Growing Brands /
   Individual Consumers").
   =========================================================================== */

export const audienceSection = {
  type: 'checkList',
  /** 〔added〕 tone. */
  tone: 'ivory',
  eyebrow: 'WHO WE WORK WITH',
  title: 'Built for buyers at different stages.',
  description:
    "You don't need a large purchasing team or huge order volumes to explore sourcing from China. Sourden works with buyers based on their actual requirements and current stage.",
  items: [
    'Small Wholesalers',
    'Independent Retailers',
    'Local Shops',
    'Growing Brands',
    'Individual Consumers',
  ],
  foot: { label: 'Learn About Sourden', href: '/about' },
};

/* ===========================================================================
   §16 — EXPLORE MORE  (brief, verbatim)
   ---------------------------------------------------------------------------
   No items here: the band reads the nine categories from the registry in the
   page shell (`industryNavFor`), because which entries exist, what they are
   called and which one is current are not a page's business to declare.
   =========================================================================== */

export const exploreMoreSection = {
  type: 'nav',
  /** 〔added〕 tone. */
  tone: 'white',
  eyebrow: 'EXPLORE MORE',
  title: 'Other sourcing categories',
};

/* ===========================================================================
   WHAT WE CAN HELP WITH  (brief §4, listed once)
   ---------------------------------------------------------------------------
   The seven capabilities, in the brief's order. The eyebrow, the heading and the
   lead are 〔added〕 — the brief supplies only the list. The heading is written to
   work over any category: on a packaging page the first item is the whole job,
   on an industrial page it may be the last three that matter.
   =========================================================================== */

export const helpSection = {
  type: 'checkList',
  /** 〔added〕 tone. */
  tone: 'ivory',
  eyebrow: 'WHAT WE CAN HELP WITH',
  title: 'The parts of sourcing you can hand over.',
  description:
    'Sourcing does not mean the same thing on every project. Some need supplier research, some need purchasing and quality control, and some need the whole sequence — these are the parts Sourden can cover, separately or together.',
  items: [
    'Product sourcing',
    'Supplier verification',
    'Quotation comparison',
    'Sample coordination',
    'Purchasing',
    'Quality control',
    'Shipping from China',
  ],
  /**
   * 〔added〕 The brief's §19 asks each page to link naturally to the relevant
   * service detail pages, and gives "Explore supplier verification →" as its own
   * example of the wording. This band is where the seven capabilities are named,
   * so this is where the reader is most likely to want the service behind one of
   * them. The related-services band further down links the same pages by their
   * display names; this one goes deeper into the first stage.
   */
  foot: { label: 'Explore product sourcing', href: '/services/product-sourcing' },
};

/* ===========================================================================
   TYPICAL SOURCING PROCESS  (brief §4, listed once)
   ---------------------------------------------------------------------------
   The six stages, in the brief's order and with the brief's labels. Numbers are
   derived from the array order by the rail device, never typed, so re-ordering
   the stages renumbers them.

   The band is the page's ink section. The rail device always owns the dark
   ground, on every page that renders it, which is also what gives these pages
   their colour rhythm: ivory hero, alternating body, one dark band, then back to
   white for the related-services rows.

   `foot` — the brief's §15 closing section names a secondary action
   ("How It Works →" → `/how-it-works`), and `<FinalCTA>` renders exactly ONE
   control by design (site spec §19 forbids competing buttons in the closing
   band). The rail is the honest home for it: it is the section that summarises
   the process, so the link that explains the process belongs at the end of it.
   §19's internal-linking list asks for `/how-it-works` on every page as well.
   =========================================================================== */

export const processSection = {
  type: 'process',
  tone: 'ink',
  /** 〔added〕 eyebrow, heading and lead — the brief gives only the six stages. */
  eyebrow: 'HOW THE PROCESS RUNS',
  title: 'Six stages, from your request to your destination.',
  description:
    'The same six stages apply whatever the category is. What changes is how much of each one a product needs — a stock item may move through in days, a custom part may spend weeks in the first two.',
  steps: [
    {
      label: 'Tell Us What You Need',
      description:
        'Share the product, the specifications you have, the quantity, the destination and any reference material — photos, drawings, a sample, or a link to something similar.',
    },
    {
      label: 'Find Suitable Suppliers',
      description:
        'We research suppliers whose product range, capability and order requirements appear to fit what you have described.',
    },
    {
      label: 'Compare & Verify',
      description:
        'We compare the options that come back — specification, price, MOQ, lead time, customization — and check the supplier information that matters for your product.',
    },
    {
      label: 'Confirm & Purchase',
      description:
        'Once you have chosen an option, we can coordinate the purchase, the payment terms and the communication with the supplier through production.',
    },
    {
      label: 'Check Before Shipping',
      description:
        'Where quality control is part of the project, we check the agreed requirements before the goods leave — quantity, appearance, packaging and the details you specified.',
    },
    {
      label: 'Ship',
      description:
        'We coordinate the movement of the goods from China and connect the shipment to a logistics option that suits the product, the volume and the destination.',
    },
  ],
  foot: { label: 'See how our sourcing process works', href: '/how-it-works' },
};

/* ===========================================================================
   §15 — START WITH A REQUEST  (brief, verbatim)
   ---------------------------------------------------------------------------
   The closing band. `<FinalCTA>` renders one control, and that control is the
   site-wide primary action, declared once in `site.js` — see the shell, which
   passes `primaryCta` rather than reading it from here.
   =========================================================================== */

export const standardFinalCta = {
  eyebrow: 'START WITH A REQUEST',
  title: 'Looking for something specific?',
  description:
    "Tell us what you're looking for, what you need it to do, how much you expect to buy and where it needs to go. We'll take it from there.",
};
