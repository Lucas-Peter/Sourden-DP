/**
 * SOURDEN — /how-it-works  (content simplification pass, 2026-10-02)
 * ---------------------------------------------------------------------------
 * Every editable word on the How It Works page. This file was a sixteen-section
 * deep dive (brief §01–§16): a five-stage rail, six further sections that
 * opened each stage, a growth path, a worked example, a services list and a
 * nine-question FAQ. That version answered questions the reader was not asking
 * on this page and re-told the homepage's, /services' and /about's content.
 *
 * The owner's simplification brief collapses it to one clear operational
 * explanation: what happens from a request to a shipment, and who does what.
 * The final structure is six sections — Hero, a SIX-step process rail, "Who
 * Does What?", "What Happens After You Submit?", "You Don't Have to Use Every
 * Service", and the closing CTA — with no FAQ, no growth path, no worked
 * example and no duplicated brand or MOQ copy. Those topics stay on the pages
 * that already own them (/faq, /about, /services, the homepage).
 *
 * ── WHAT WAS REMOVED, AND WHERE IT STILL LIVES ─────────────────────────────
 *   · the per-stage deep sections (§03–§08) → the services detail pages
 *   · the growth path + MOQ statement (§12)   → /about §05, /industries §08
 *   · the worked example (§13)                → the homepage's three examples
 *   · the five-service list (§14)             → /services
 *   · the nine-question FAQ (§15)             → /faq (a text link remains here)
 *
 * ── WHY THE RAIL HAS SIX STEPS NOW ─────────────────────────────────────────
 * The brief's §02 rewrites the process as six steps rather than five, and names
 * them as full phrases ("Find Suitable Suppliers") rather than the old verbs.
 * The rail device already supports six columns (`sec-stages--6`) and
 * phrase-length labels — the `/industries/<slug>` pages render the same shape —
 * so this is a data change, not a layout change. The `.hi-process` label floor
 * in `how-it-works.css` already reserves two lines for exactly this wrapping.
 *
 * ── WHY NO SERVICE NAME AND NO SERVICE ROUTE IS TYPED ──────────────────────
 * The six rail steps and the four "Use the support you need" rows describe
 * activities, not services, so none of them links to a service page; the
 * section's only destination is "View All Services" → /services. That removes
 * the registry-derivation helpers this file used to carry — no service name can
 * drift here because none is typed. (The brief's §05 names "View All Services"
 * as the single onward link.)
 *
 * ── CLAIMS RULE ────────────────────────────────────────────────────────────
 * No invented timelines, no guaranteed results, no fixed response time, no MOQ
 * promise. The brief's copy keeps the qualified register and the page's gate
 * harness still asserts the banned phrases never reach the build.
 * ---------------------------------------------------------------------------
 */

import { primaryCta } from './site.js';

export const slug = 'how-it-works';

/* ===========================================================================
   SEO — title, meta description and H1 are mandated verbatim.
   =========================================================================== */

export const meta = {
  title: 'How China Sourcing Works | SOURDEN',
  description:
    "See how SOURDEN's China sourcing process works, from your initial request and supplier research to purchasing, quality control and international shipping.",
};

/** The trail below "Home" — one crumb deep for a top-level page. */
export const breadcrumbs = [{ label: 'How It Works' }];

/* ===========================================================================
   01 — HERO
   =========================================================================== */

export const hero = {
  eyebrow: 'HOW IT WORKS',
  title: 'From your first request to final shipment.',
  /** Brief §01, verbatim. "SOURDEN" in caps follows the brief and the
   *  `/services` simplification that preceded this one. */
  description:
    'See how SOURDEN works with you from the initial sourcing request through supplier research, purchasing, quality control and shipping.',
  primaryCta,
  secondaryCta: { label: 'View Our Services', href: '/services' },
  image: {
    key: 'howItWorksHero',
  },
};

/* ===========================================================================
   SECTIONS — in render order (brief §02 … §05)
   ---------------------------------------------------------------------------
   `type` selects the device; `tone` is the section ground. The hero (§01) and
   the closing CTA (§06) are fixed devices outside this list, as on every page.
   =========================================================================== */

export const sections = [
  /* ---------------------------------------------------------------- 02 --- */
  {
    type: 'process',
    /** The rail always owns the ink band. */
    tone: 'ink',
    eyebrow: 'THE SOURCING JOURNEY',
    title: 'One process. Six connected stages.',
    description:
      'Every sourcing project is different, but the underlying process usually follows the same basic path.',
    /**
     * The brief's six steps, in order, numbers derived from array order. Each
     * step is a label plus one sentence — no links, no long paragraphs. The
     * labels are phrases, so the rail renders them uppercase (in CSS) and the
     * `.hi-process` floor holds all six to the same height.
     */
    steps: [
      {
        label: 'Tell Us What You Need',
        description: 'Share your product, specifications, quantity, target price and destination.',
      },
      {
        label: 'Find Suitable Suppliers',
        description: 'We research suppliers that match your product requirements and sourcing goals.',
      },
      {
        label: 'Verify & Compare',
        description:
          'We compare product fit, supplier capabilities, MOQ, pricing, lead times and other relevant factors.',
      },
      {
        label: 'Choose & Order',
        description: 'Review the options, confirm the supplier and move forward with the order.',
      },
      {
        label: 'Quality Control',
        description:
          'When required, we arrange product checks before shipment to identify issues and confirm the order against agreed requirements.',
      },
      {
        label: 'Shipping',
        description:
          'We coordinate shipping from China and connect the order with an appropriate logistics solution.',
      },
    ],
  },

  /* ---------------------------------------------------------------- 03 --- */
  {
    type: 'split',
    tone: 'ivory',
    eyebrow: 'WHO DOES WHAT?',
    title: 'You stay in control. We handle the coordination.',
    description:
      'You make the key decisions. SOURDEN manages the sourcing work and coordination around them.',
    /**
     * Two columns at equal weight — the customer's six decisions beside the
     * seven things Sourden coordinates, so the page cannot read as Sourden
     * taking control away from the customer. The labels are CSS-uppercased
     * (`sec-split__label`), so the data writes them in sentence case.
     */
    columns: [
      {
        label: 'You',
        items: [
          'Tell us what you need',
          'Confirm product requirements',
          'Review supplier options',
          'Approve samples and quotations',
          'Confirm the order',
          'Provide destination details',
        ],
      },
      {
        label: 'Sourden',
        items: [
          'Research suitable suppliers',
          'Compare sourcing options',
          'Communicate with suppliers',
          'Coordinate purchasing',
          'Follow up production',
          'Arrange quality checks',
          'Coordinate shipping',
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- 04 --- */
  {
    type: 'stages',
    tone: 'white',
    eyebrow: 'AFTER YOU SUBMIT',
    title: 'What happens next?',
    /**
     * A sequence with a first step, so it is numbered. The brief's four stages,
     * each one sentence. No note and no CTA: the brief gives neither, and the
     * section's job is to answer "what happens after I submit" — not to make a
     * response-time promise, which the brief forbids.
     */
    numbered: true,
    items: [
      {
        label: 'Request Review',
        description: 'We review your product requirements and sourcing details.',
      },
      {
        label: 'Requirement Confirmation',
        description:
          "If needed, we'll clarify specifications, quantity, target pricing or other important details.",
      },
      {
        label: 'Supplier Research',
        description: 'We research and evaluate suitable sourcing options based on your requirements.',
      },
      {
        label: 'Next Steps',
        description: "We share the relevant options and discuss how you'd like to proceed.",
      },
    ],
  },

  /* ---------------------------------------------------------------- 05 --- */
  {
    type: 'linkRows',
    tone: 'ivory',
    eyebrow: 'USE THE SUPPORT YOU NEED',
    title: "You don't have to use every service.",
    description:
      'Some projects need the full sourcing process. Others only need help with one or two stages.',
    /**
     * Four reader situations, each one sentence. Rows carry neither `href` nor
     * `links` — they describe needs, not destinations — so the single onward
     * action is the section's closing link below.
     */
    items: [
      {
        title: 'Need a Supplier?',
        description: 'We can research and compare suitable sourcing options.',
      },
      {
        title: 'Already Have a Supplier?',
        description: 'We can help communicate with the supplier and manage the order.',
      },
      {
        title: 'Need Quality Control?',
        description: 'We can arrange product checks before shipment.',
      },
      {
        title: 'Need Shipping?',
        description: 'We can coordinate shipping from China.',
      },
    ],
    foot: { label: 'View All Services', href: '/services' },
  },
];

/* ===========================================================================
   06 — FINAL CTA
   =========================================================================== */

export const finalCta = {
  eyebrow: 'READY TO START?',
  title: "Tell us what you're looking for.",
  description: "Share your sourcing requirements and we'll help you determine the next step.",
  cta: primaryCta,
};

/* ===========================================================================
   THE PAGE OBJECT
   =========================================================================== */

/**
 * The whole page as one object.
 *
 * ⚠ NOT DEAD CODE — do not remove this as "unused". The page imports the named
 * pieces above individually, so nothing in `src/` reads this; its ONE consumer
 * is the harness `hi-geo.mjs` (`PAGE.howItWorksPage`). The harnesses live in the
 * SESSION directory, so a dead-export scan limited to the repo reports this as
 * unused — see the same warning in `about-page.js`.
 */
export const howItWorksPage = {
  slug,
  meta,
  breadcrumbs,
  hero,
  sections,
  finalCta,
};
