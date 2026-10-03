/**
 * SOURDEN — THE SECTIONS EVERY `/industries/<slug>` PAGE SHARES
 * ---------------------------------------------------------------------------
 * The nine category pages are one architecture with nine sets of copy. The
 * category-specific sections — "What We Can Source", "What Buyers Usually
 * Need", "Sourcing Considerations" and the FAQ — are written in each
 * `industry-<slug>.js` file, because their words change with the product
 * category. The five below do not change with the category, so they are
 * declared ONCE here and spread into each page's `sections` array in the
 * brief's order.
 *
 * ── WHAT THIS FILE OWNS, AND WHERE THE BRIEF PUTS IT ───────────────────────
 *   OUR APPROACH       One process, stated as a six-word horizontal flow.
 *                      Identical on all nine pages: sourcing follows one
 *                      sequence whatever the product is.
 *   RELATED SERVICES   The four core services, given verbatim for all nine
 *                      pages. Service 03 reads "Purchasing Management" — the
 *                      name the site publishes.
 *   WHO WE SOURCE FOR  The five buyer groups, as a compact check-list.
 *   NO FIXED MOQ       The MOQ position: one statement, one honest qualifier.
 *   START WITH A       The closing band's copy.
 *     REQUEST
 *
 * ── 2026-10-03 内容精简（松霖指令）────────────────────────────────────────
 * The pages used to carry ten sections: a long "How We Approach" sequence, a
 * six-stage ink rail, a "What We Can Help With" list, a "Who We Work With"
 * band, an "Explore More" index and five-question FAQs. Those are gone —
 * "less explanation, more product clarity, more direct path to inquiry" is the
 * whole brief. The six-stage rail now lives only on `/how-it-works`; the
 * category pages state the process as a short horizontal flow instead.
 *
 * ── WHY HERE AND NOT IN `industry-links.js` ─────────────────────────────────
 * That file is the leaf the REGISTRY-derived helpers live in, and it is also
 * imported by `/industries`' own data file. These five are copy for the nine
 * category pages, so they get their own module: `industry-links.js` supplies
 * the four service records this file's related-services band renders, and
 * nothing else. Both are leaves, so neither can close an import cycle with
 * `industry-detail.js` — see that file's header and `industry-links.js`' for
 * why that matters.
 *
 * ── THE CLAIMS RULE STILL APPLIES ──────────────────────────────────────────
 * Nothing below asserts a client or supplier count, years in business, a
 * success rate, a certification, a testimonial, a case study or a logo, and
 * nothing promises guaranteed quality, guaranteed compliance, guaranteed
 * delivery, the lowest price or that Sourden can source anything. The register
 * is the site's: "can", "where appropriate", "depending on the product".
 * ---------------------------------------------------------------------------
 */

import { relatedServices } from './industry-links.js';

/* ===========================================================================
   OUR APPROACH  (brief, shortened from the old six-stage sequence)
   ---------------------------------------------------------------------------
   Six words, six columns, read left to right. The same process on every page
   because the process does not change with the product. Descriptions are one
   short sentence each — the brief asks for a short flow, not an essay.
   =========================================================================== */

export const approachSection = {
  type: 'approach',
  /** 〔added〕 tone. */
  tone: 'white',
  eyebrow: 'OUR APPROACH',
  /** 〔added〕 heading and lead — the brief supplies only the six stages. */
  title: 'One process, whatever the product.',
  description:
    'Sourcing follows the same sequence from your first requirement to the shipment. The category changes the details — not the route.',
  steps: [
    {
      label: 'Requirements',
      description: 'Share the product, specifications, quantity and destination.',
    },
    {
      label: 'Supplier Research',
      description: 'Find suppliers whose product range and capability fit.',
    },
    {
      label: 'Comparison',
      description: 'Compare specification, price, MOQ and lead time.',
    },
    {
      label: 'Order',
      description: 'Coordinate the purchase and production communication.',
    },
    {
      label: 'Quality Check',
      description: 'Check the agreed requirements before the goods leave.',
    },
    {
      label: 'Shipping',
      description: 'Coordinate the movement from China to your destination.',
    },
  ],
};

/* ===========================================================================
   RELATED SERVICES  (brief, verbatim)
   ---------------------------------------------------------------------------
   The four core services, numbered, each with the sentence `/industries` §11
   already publishes for it — read from `industry-links.js`, so this band and
   the hub's cannot show two descriptions of one service. Service 03 reads
   "Purchasing Management", the name the site publishes; the brief's
   "Purchasing & Order Management" is not used on the live site.
   =========================================================================== */

export const relatedServicesSection = {
  type: 'rows',
  /** 〔added〕 tone — white, so the ivory bands either side read as separate
   *  sections. */
  tone: 'white',
  eyebrow: 'RELATED SERVICES',
  title: "The sourcing process doesn't stop at finding a supplier.",
  description:
    'Depending on your project, Sourden can support different parts of the sourcing process — from supplier research and verification to purchasing and quality control.',
  items: relatedServices,
  foot: { label: 'View All Services', href: '/services' },
};

/* ===========================================================================
   WHO WE SOURCE FOR  (brief, verbatim)
   ---------------------------------------------------------------------------
   Five buyer groups and the brief's supporting paragraph, on every page. The
   device is the site's dense check-list rather than the hub's editorial rows,
   because the brief asks for "a compact section on every page" and does not
   give a sentence per group here.

   The five names are the site's own vocabulary — the same five the homepage,
   `/services` and `/industries` §05 use — and they are the brief's five
   ("Small Wholesalers / Independent Retailers / Local Shops / Growing Brands /
   Individual Consumers").

   The old "Learn About Sourden →" foot is gone: the hub's own "Who We Source
   For" band already links onward, and a second copy of that link on every
   category page is nine more places for a cross-link to drift.
   =========================================================================== */

export const audienceSection = {
  type: 'checkList',
  /** 〔added〕 tone. */
  tone: 'ivory',
  eyebrow: 'WHO WE SOURCE FOR',
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
};

/* ===========================================================================
   NO FIXED MOQ  (松霖 §2, brief)
   ---------------------------------------------------------------------------
   Rendered by the shared `<IndustryScale>` device (no H2 — it is a statement,
   not a section with a heading). One eyebrow, one statement, one qualifier.

   The qualifier is the load-bearing sentence: Sourden imposes no fixed MOQ of
   its own, and that is NOT the same as "every supplier accepts small orders".
   =========================================================================== */

export const moqSection = {
  type: 'moq',
  /** 〔added〕 tone. */
  tone: 'white',
  eyebrow: 'NO FIXED MOQ FROM SOURDEN',
  statement: 'Source at your scale.',
  qualifier:
    'The practical MOQ will depend on the product and supplier. Not every supplier will accept small quantities.',
};

/* ===========================================================================
   START WITH A REQUEST  (brief §11, verbatim)
   ---------------------------------------------------------------------------
   The closing band. `<FinalCTA>` renders one control, and that control is the
   site-wide primary action, declared once in `site.js` — see the shell, which
   passes `primaryCta` rather than reading it from here.
   =========================================================================== */

export const standardFinalCta = {
  eyebrow: 'START WITH A REQUEST',
  title: 'Looking for something specific?',
  description:
    "Tell us what you're looking for, including your product requirements, quantity and destination.",
};
