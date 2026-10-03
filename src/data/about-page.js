/**
 * SOURDEN — /about  (About SOURDEN | China Sourcing Partner)
 * ---------------------------------------------------------------------------
 * Every editable word on the About page. This is a content optimisation and
 * simplification pass (2026-10-02): the page used to be an eighteen-section
 * brand-positioning deep dive, and the owner's brief asked for it to become a
 * concise, credible company page — why SOURDEN exists, the gap it fills, how
 * it works, who it works with, how fees are handled, and how to get in touch.
 *
 * FINAL STRUCTURE (brief §13)
 *   01 Hero                    eyebrow, H1, copy, tagline, two actions, image
 *   02 Why SOURDEN             prose — two short paragraphs
 *   03 The Gap We Solve        prose — two short paragraphs
 *   04 Our Approach            a six-word → chain, one support line, one link
 *   05 What We Actually Do     a five-node ↓ chain on the ink band
 *   06 Who We Work With        five audience groups
 *   07 How Our Fees Work       prose + the fee statement + one link
 *   08 Get In Touch            email (mailto) + WhatsApp (wa.me)
 *   —  "View FAQ" text link    one centred link, not a section
 *   09 Final CTA               one primary action
 *
 * ── WHAT THIS PAGE MUST NOT DO (brief "CONTENT AND CLAIMS RULES") ───────────
 *   · It must not invent a founding year, founder, team size, offices, supplier
 *     or customer numbers, countries served, order volume, revenue,
 *     certifications, awards, testimonials, client logos, success rates,
 *     savings percentages or delivery guarantees.
 *   · It must not claim to eliminate sourcing risk, to always find the lowest
 *     price, that verification guarantees reliability, or that inspection
 *     guarantees defect-free products.
 *   · It must not publish fixed commission percentages or fixed/minimum fees.
 *
 * ── WHAT THIS PAGE MUST NOT REPEAT (brief §10) ──────────────────────────────
 *   The SOURDEN Standard, "China is not one supply chain", "experience without
 *   the show", the good-partner breakdown, the full services list, the full
 *   FAQ, the growth progression, the large "sourcing without the barriers"
 *   section, the long MOQ explanation and the repeated process section are all
 *   gone. `/services`, `/how-it-works`, `/industries` and `/faq` own those.
 *
 * ── THE HARD RULE: NO FABRICATED COMPANY FACTS ─────────────────────────────
 *   The old §16 and its closing section forbid, by name, founding year, founder
 *   biography, team size, offices, countries served, order volume, customer
 *   numbers, revenue, certifications, awards, partnerships, client logos,
 *   testimonials and case studies. None appear below, and none may be added by
 *   inference. The only digits on the page are the WhatsApp number, which is a
 *   real published contact fact, not a company metric.
 *
 * ── TONE PER SECTION ───────────────────────────────────────────────────────
 *   Hero ivory, then §02…§08 alternate without any two adjacent sections
 *   sharing a ground; §05 is the page's one ink band — the five-node chain is
 *   the structural spine. §09's closing band is ink, as on every page.
 *   ---------------------------------------------------------------------------
 */

import { primaryCta, site } from './site.js';

export const slug = 'about';

/* ===========================================================================
   SEO — brief §SEO. Title, meta description and H1 are mandated verbatim.
   =========================================================================== */

export const meta = {
  title: 'About SOURDEN | China Sourcing Partner',
  description:
    'Learn about SOURDEN, a practical China sourcing partner helping businesses and individual buyers find suppliers, manage orders and source products from China.',
};

/**
 * The trail below "Home" — `<Breadcrumbs>` and `breadcrumbItems()` prepend the
 * rest. `/about` is a top-level page, so this is one crumb deep. `href` is
 * omitted on the last item: it is the page being read.
 */
export const breadcrumbs = [{ label: 'About' }];

/* ===========================================================================
   01 — HERO
   =========================================================================== */

export const hero = {
  eyebrow: 'ABOUT SOURDEN',
  title: 'China sourcing, without the barriers.',
  description:
    'SOURDEN helps businesses and individual buyers navigate sourcing from China — from finding suitable suppliers to purchasing, quality control and shipping.',
  /** The brief's §01 "Secondary statement". Read from `site.js` (spec §41) so
   *  the hero and the footer's copy of the same line can never drift. */
  tagline: site.tagline,
  /** The site-wide primary action, declared once in `site.js` (spec §34). */
  primaryCta,
  /** The brief's §01 secondary. */
  secondaryCta: { label: 'How It Works', href: '/how-it-works' },
  /** Image slot — the documentary sourcing photograph, art-directed in
   *  `media.js`. */
  image: {
    key: 'aboutHero',
  },
};

/* ===========================================================================
   SECTIONS — in render order (brief §02 … §08)
   ---------------------------------------------------------------------------
   `type` selects the device; `tone` is the section ground. The hero (§01) and
   the closing CTA (§09) are not in this list — they are fixed devices with
   their own places on the page, exactly as on `/how-it-works` and `/services`.

   `type` vocabulary for this page:
     prose      — heading + paragraphs + an optional brass closing line
     flow       — a labelled node chain (horizontal → / vertical ↓)
     reviewGrid — N titled items with a sentence each (a 2-column editorial list)
     contact    — the email + WhatsApp block (device lives in AboutContact.astro)
   =========================================================================== */

export const sections = [
  /* ---------------------------------------------------------------- 02 --- */
  {
    type: 'prose',
    /** 〔added〕 tone. */
    tone: 'white',
    eyebrow: 'WHY SOURDEN',
    title: 'China has the suppliers. Finding the right one is the hard part.',
    /** The brief's two paragraphs, verbatim. */
    paragraphs: [
      'China offers a vast supplier base, but finding a supplier that actually fits your product, quantity, quality requirements and business goals can take time and local coordination.',
      "SOURDEN exists to make that process more accessible to businesses and buyers who don't have their own sourcing team in China.",
    ],
  },

  /* ---------------------------------------------------------------- 03 --- */
  {
    type: 'prose',
    /** 〔added〕 tone. */
    tone: 'ivory',
    eyebrow: 'THE GAP WE SOLVE',
    title: 'Not everyone needs a large sourcing department.',
    /** The brief's two paragraphs, verbatim. */
    paragraphs: [
      'You may know what you want to buy without knowing where to find it, how to evaluate suppliers, or how to manage the process from China.',
      'SOURDEN provides practical sourcing support without requiring you to build a purchasing team of your own.',
    ],
  },

  /* ---------------------------------------------------------------- 04 --- */
  {
    type: 'flow',
    /** 〔added〕 tone. */
    tone: 'white',
    eyebrow: 'OUR APPROACH',
    title: 'Practical sourcing, from research to shipment.',
    /** The brief's supporting line, verbatim. */
    paragraphs: [
      'We adapt the level of support to the project rather than forcing every customer into the same process.',
    ],
    /**
     * Horizontal because the six words are a SEQUENCE with a first step — the
     * reader walks left to right. The default horizontal mark is `↔` (a
     * correspondence); a method sequence is a one-way walk, so the mark is
     * `→`. Rendered uppercase by the stylesheet, like every other node chain.
     *
     * The brief asks for the process as bare words, and forbids reproducing
     * `/how-it-works`'s six detailed step explanations — so the nodes carry no
     * `sub` line and no descriptions.
     */
    orientation: 'horizontal',
    marker: '→',
    nodes: [
      { label: 'Understand' },
      { label: 'Research' },
      { label: 'Verify' },
      { label: 'Coordinate' },
      { label: 'Check' },
      { label: 'Ship' },
    ],
    foot: { label: 'See How It Works', href: '/how-it-works' },
  },

  /* ---------------------------------------------------------------- 05 --- */
  {
    type: 'flow',
    /** 〔added〕 tone — the page's one ink band. See the file header. */
    tone: 'ink',
    eyebrow: 'WHAT WE ACTUALLY DO',
    /** The brief gives no heading for this section, only a supporting line. The
     *  line is split at its natural seam so the first half can carry the
     *  section's <h2> and the second half reads as its body — every word is the
     *  brief's. */
    title: 'We connect the different parts of the sourcing process.',
    paragraphs: ['So you have one partner coordinating the work in China.'],
    /**
     * The brief's chain, top to bottom: YOU → SOURDEN → SUPPLIER → QUALITY
     * CONTROL → SHIPPING. Five plain labels, no descriptions, because the shape
     * IS the content — SOURDEN is one link in a chain it coordinates rather than
     * the owner of it. Vertical, so the descent reads as a spine; the default
     * `↓` mark is the right one.
     */
    orientation: 'vertical',
    nodes: [
      { label: 'You' },
      { label: 'SOURDEN' },
      { label: 'Supplier' },
      { label: 'Quality Control' },
      { label: 'Shipping' },
    ],
    foot: { label: 'Explore Our Services', href: '/services' },
  },

  /* ---------------------------------------------------------------- 06 --- */
  {
    type: 'reviewGrid',
    /** 〔added〕 tone. */
    tone: 'ivory',
    eyebrow: 'WHO WE WORK WITH',
    title: "You don't need to be a large company to start sourcing from China.",
    /** The brief's supporting line, verbatim. */
    description:
      'We work with buyers at different stages, from those testing a first order to businesses looking for ongoing sourcing support.',
    /** The brief's five groups, in its order — the same five the homepage and
     *  `/services` render, so a reader who meets the audience twice meets the
     *  same audience. Each carries its one-line explanation. */
    items: [
      {
        title: 'Small Wholesalers',
        description:
          'Businesses looking for products and supplier options without committing to unnecessarily large sourcing structures.',
      },
      {
        title: 'Independent Retailers',
        description:
          "Retailers that need access to suppliers but don't have their own purchasing team in China.",
      },
      {
        title: 'Local Shops',
        description:
          'Smaller businesses looking for specific products or better sourcing options without navigating the process alone.',
      },
      {
        title: 'Growing Brands',
        description:
          'Brands developing products, private-label lines or a more reliable supply chain.',
      },
      {
        title: 'Individual Consumers',
        description:
          'People looking for specific products, custom items or sourcing solutions that may be difficult to find locally.',
      },
    ],
  },

  /* ---------------------------------------------------------------- 07 --- */
  {
    type: 'prose',
    /** 〔added〕 tone. */
    tone: 'white',
    eyebrow: 'HOW OUR FEES WORK',
    title: 'Our service fee depends on the project.',
    /**
     * The brief's three paragraphs, verbatim. The section explains the pricing
     * APPROACH transparently and must not publish any fixed commission, project
     * fee or minimum — none appears here.
     */
    paragraphs: [
      'Every sourcing project is different. Our service fee depends on the scope and complexity of the work involved.',
      'This may include supplier research, supplier communication, purchasing, order management, quality control and other sourcing support.',
      "Once we understand your requirements, we'll explain the applicable service fee before you proceed.",
    ],
    /** The brief's supporting statement, set in brass as the section's own
     *  conclusion rather than a fourth paragraph. */
    emphasis: 'We explain the applicable service fee before you proceed.',
    /** The brief's CTA — same destination as the site-wide primary action,
     *  different label. */
    foot: { label: 'Tell Us What You Need', href: primaryCta.href },
  },

  /* ---------------------------------------------------------------- 08 --- */
  {
    type: 'contact',
    /** 〔added〕 tone. */
    tone: 'ivory',
    eyebrow: 'GET IN TOUCH',
    title: 'Have a sourcing question?',
    /** The brief's supporting line, verbatim. The email and WhatsApp values are
     *  NOT in this data file — they are the site's published contact facts in
     *  `site.js`, and `AboutContact` reads them from there so they can never
     *  disagree with the footer. Facebook is deliberately absent (no official
     *  page yet). */
    description:
      "Tell us what you're looking for. You can contact us directly or submit a sourcing request with your requirements.",
  },
];

/* ===========================================================================
   09 — FINAL CTA
   =========================================================================== */

export const finalCta = {
  eyebrow: 'READY TO START?',
  title: 'Ready to source from China?',
  description: "Tell us what you're looking for. We'll take it from there.",
  cta: primaryCta,
};

/* ===========================================================================
   THE PAGE OBJECT
   =========================================================================== */

/**
 * The whole page as one object.
 *
 * ⚠ NOT DEAD CODE — do not remove this as "unused".
 *
 * No `.astro` file imports it; the page imports the named pieces above
 * individually. Its ONE consumer is the harness `ab-geo.mjs`, which imports this
 * module's namespace and reads `PAGE.aboutPage` so that every expected heading
 * and string is derived from the data rather than hard-coded a second time.
 *
 * The harnesses live in the SESSION directory, not in the repo — so a
 * dead-export scan that only walks `src/` reports this as unused, and deleting
 * it makes the gate crash on `PAGE.aboutPage` being undefined. Scan the
 * harness directory too.
 */
export const aboutPage = {
  slug,
  meta,
  breadcrumbs,
  hero,
  sections,
  finalCta,
};
