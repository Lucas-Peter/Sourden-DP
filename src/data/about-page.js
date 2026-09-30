/**
 * SOURDEN — /about  (About SOURDEN | China Sourcing Partner)
 * ---------------------------------------------------------------------------
 * Every editable word on the About page, from the About brief (18 numbered
 * sections). This page is a BRAND POSITIONING AND TRUST page, not another
 * services page: it says what Sourden is, why it exists, what problem it is
 * built around, who it is for, and what it will not claim — in the brief's own
 * words.
 *
 * ── WHAT THIS PAGE MUST NOT DO (brief "Page Purpose" + "IMPORTANT") ─────────
 *   · It must not repeat the full service descriptions already on `/services`.
 *     §15 lists the five services in one line each and hands the reader on; it
 *     does not explain any of them.
 *   · It must not repeat `/how-it-works`. §10 names the six stages in five
 *     words each and links there; the deep version of the process stays on the
 *     process page.
 *   · It must not attack or criticise sourcing agents, procurement companies or
 *     competitors (§03 is explicit). §03 therefore describes the three
 *     positions — buying directly, a large sourcing organisation, Sourden —
 *     with the same weight and no judgement.
 *   · It must not present Sourden as owning or manufacturing anything (§08).
 *     The §08 flow ends at "Your Destination" precisely because Sourden
 *     coordinates a chain it does not own.
 *
 * ── THE HARD RULE ON THIS PAGE: NO FABRICATED COMPANY FACTS ─────────────────
 * The brief's §16 and its closing section forbid, by name: founding year,
 * founder biography, team size, offices, countries served, annual order
 * volume, customer numbers, revenue, certifications, awards, partnerships,
 * client logos, testimonials and case studies. None of those appear anywhere
 * below, and none of them may be added by inference — the About page is where
 * that kind of copy is most tempting and least evidenced. §16 describes the
 * business through what it does, which is the only thing that can be stated
 * without inventing a fact.
 *
 * The same applies to the banned marketing register: "world's best", "#1",
 * "guaranteed savings", "guaranteed quality", "zero risk", "cheapest
 * suppliers", "lowest prices", "100% reliable factories", "unlimited sourcing
 * capability". §09 exists to say the opposite of most of those, in the
 * business's own words.
 *
 * ── EVERY SERVICE NAME AND ROUTE IS DERIVED, NEVER TYPED ────────────────────
 * §15 lists the five services, and the brief writes the third one as
 * "Purchasing & Order Management". The site publishes that service as
 * "Purchasing Management" (`services.js`; renamed, and confirmed as the
 * site-wide wording on 2026-09-23). So §15's number, name and href come from
 * the registry and this file supplies only the one-line sentence — the same
 * arrangement `/how-it-works` uses for its own service list. Typing the
 * brief's name would publish a service that does not exist and link it under a
 * name the registry does not use.
 *
 * ── WHAT THIS FILE AUTHORS, AND WHAT IT DOES NOT ────────────────────────────
 * Every eyebrow, heading, paragraph, item, statement and FAQ answer below is
 * the brief's own wording, verbatim — including its straight ASCII
 * apostrophes, which is the convention every other page file follows. The
 * strings this file authors are marked 〔added〕: the section `tone` values, the
 * hero image caption, and the statement-position flags. The five §15 sentences
 * are the brief's; the service names beside them are the registry's.
 *
 * ── TONE PER SECTION ───────────────────────────────────────────────────────
 * Hero ivory, then §02…§16 alternate without any two adjacent sections sharing
 * a ground, §17's FAQ is ivory (fixed by the shared sheet) and §18's closing
 * band is ink. §08 is the page's one deliberate ink band: it is the structural
 * centre of the page — the chain from a requirement to a destination — and
 * giving it the dark ground marks it as the page's spine rather than one more
 * editorial section. Each section states its own `tone` so the rhythm is
 * readable in the data rather than only in the stylesheet.
 * ---------------------------------------------------------------------------
 */

import { serviceForSlug, serviceLink } from './service-links.js';
import { services } from './services.js';
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
    'Sourden helps businesses and individual buyers navigate sourcing from China — from finding suitable suppliers to purchasing, quality control and shipping.',
  /**
   * The brief's §01 "Secondary line". It is the site's own tagline, declared
   * once in `site.js` (spec §41) — so it is read from there rather than typed,
   * and it can never drift from the footer's copy of the same line.
   */
  tagline: site.tagline,
  /** The site-wide primary action, declared once in `site.js` (spec §34). */
  primaryCta,
  /** The brief's §01 secondary. */
  secondaryCta: { label: 'How It Works', href: '/how-it-works' },
  /**
   * Image direction (brief §01): a documentary sourcing image — factory floor,
   * product samples, supplier meeting, inspection, materials, packaging,
   * warehouse or hands reviewing products — "authentic and operational rather
   * than corporate", and explicitly not a handshake, a boardroom, a landmark,
   * a flag or a stock "international business" scene. Art direction and crop
   * note live with the slot in `media.js`.
   */
  image: {
    key: 'aboutHero',
    /** 〔added〕 — the brief specifies the image but not its caption. It names
     *  the page's own subject rather than describing the photograph, so it
     *  stays true when the real image replaces the placeholder. */
    caption: 'THE WORK BEHIND A SOURCING ORDER',
  },
};

/* ===========================================================================
   15 — OUR SERVICES
   ---------------------------------------------------------------------------
   The five one-line sentences the brief writes for §15. Keyed by slug so the
   registry supplies number, name and route and this map supplies only the
   sentence — a service renamed in `services.js` therefore cannot leave a stale
   name here, and a renamed slug fails the build instead of silently dropping
   out of the list.

   These are deliberately NOT the descriptions in `services.js`: that file's
   text explains what each service covers, which is `/services`' job. §15's
   sentences are one line each, because this page hands the reader on rather
   than explaining the work.
   =========================================================================== */

const serviceBlurbs = {
  'product-sourcing': 'Find suitable products and suppliers.',
  'supplier-verification': 'Evaluate supplier fit before moving forward.',
  'purchasing-order-management': 'Coordinate purchasing and supplier-side execution.',
  'quality-control': 'Check agreed requirements before shipment.',
  'shipping-from-china': 'Coordinate the movement of goods to their destination.',
};

/** @param {string} slug */
function requireBlurb(slug) {
  const blurb = serviceBlurbs[slug];
  if (!blurb) {
    throw new Error(
      `[about-page.js] No §15 sentence for the service "${slug}". ` +
        `The services list is merged from services.js — add its sentence here.`
    );
  }
  return blurb;
}

/* ---------------------------------------------------------------------------
   THE FIVE §15 ROWS — AND WHY THEY ARE DECLARED HERE, NOT AT THE TOP
   ---------------------------------------------------------------------------
   Number, name and route come from `services.js`; only the sentence comes from
   `serviceBlurbs` above. Exported so the page's JSON-LD declares each service
   from the same record §15 renders, which is what stops a structured-data
   claim describing a service the page does not show.

   The position is load-bearing. `serviceBlurbs` is a `const`, so it is in the
   temporal dead zone until its declaration runs; a list built near the top of
   the file would call `requireBlurb()` → read `serviceBlurbs` → `ReferenceError:
   Cannot access 'serviceBlurbs' before initialization`, reported from a line
   that looks fine. Wrapping the read in a hoisted `function` does not help —
   the TDZ is on the `const`, not on the function. So the derived list lives
   below everything it derives from.

   @param {string} slug
   --------------------------------------------------------------------------- */
const serviceRow = (slug) => {
  const service = serviceForSlug(slug);
  return {
    number: service.number,
    title: service.title,
    href: service.href,
    description: requireBlurb(slug),
  };
};

/** All five, in registry order — the order the process runs in. */
export const relatedServices = services.map((service) => serviceRow(service.slug));

/* ===========================================================================
   SECTIONS — in render order (brief §02 … §16)
   ---------------------------------------------------------------------------
   `type` selects the device; `tone` is the section ground. The hero (§01), the
   FAQ (§17) and the closing CTA (§18) are not in this list — they are fixed
   devices with their own places on the page, exactly as on `/how-it-works` and
   the service pages.

   `type` vocabulary for this page:
     prose      — heading + paragraphs + an optional brass closing line
     statement  — heading + one prominent statement + paragraphs (§04, §13)
     reviewGrid — N titled items with a sentence each (a 2-column editorial list)
     stages     — a ruled list beside its heading (§06 unnumbered, §10 numbered)
     growth     — copy + a progression of bare words + a closing line (§05)
     flow       — a labelled node chain (§08 vertical, §14 horizontal)
     linkRows   — ruled rows (§09 unnumbered statements, §15 numbered services)
   =========================================================================== */

export const sections = [
  /* ---------------------------------------------------------------- 02 --- */
  {
    type: 'prose',
    /** 〔added〕 tone. */
    tone: 'white',
    eyebrow: 'WHY SOURDEN',
    title: 'China has the suppliers. Finding the right one is the hard part.',
    /**
     * The brief's four paragraphs, in order. The first two set up the
     * contrast — an advantage for an experienced buyer, a barrier for
     * everyone else — and the fourth is the one-sentence reason the business
     * exists, so it stays a paragraph of its own rather than being folded into
     * the third.
     */
    paragraphs: [
      'China has an enormous manufacturing and supplier ecosystem. For an experienced buyer with established supplier relationships, that can be a major advantage.',
      'For a small wholesaler, independent retailer, local shop, growing brand or individual buyer, the same ecosystem can be difficult to navigate.',
      'There are thousands of supplier listings, different factories and trading companies, varying product specifications, MOQs, quotations, communication challenges and logistics decisions.',
      'Sourden exists to make that process more practical.',
    ],
    /** The brief's closing statement, set in brass as the section's own
     *  conclusion rather than a fifth paragraph. */
    emphasis: "You don't need to be a large company to source from China.",
  },

  /* ---------------------------------------------------------------- 03 --- */
  {
    type: 'reviewGrid',
    /** 〔added〕 tone. */
    tone: 'ivory',
    eyebrow: 'THE GAP',
    title: 'Not everyone needs a large sourcing department.',
    /**
     * The three positions the brief sets out, in its order. Titles are title
     * case in the data; the brief writes them uppercase, but uppercase is a
     * stylesheet decision on this site (see `/how-it-works` §06) — a page
     * never spells it into the copy.
     *
     * WHY ALL THREE GET THE SAME TREATMENT
     *   The brief forbids attacking or criticising sourcing agents, procurement
     *   companies or competitors. Nothing here compares or ranks them: each
     *   column describes a way of working, and the third describes Sourden's.
     *   Making the "Sourden" column visually heavier would turn a description
     *   into a claim about the other two.
     */
    items: [
      {
        title: 'Buying Directly',
        description:
          'You find suppliers yourself, communicate directly, compare quotations, manage production, arrange quality control and coordinate shipping.',
      },
      {
        title: 'Large Sourcing Organizations',
        description:
          'Traditional sourcing structures may be designed around larger businesses, larger order volumes and more established purchasing processes.',
      },
      {
        title: 'Sourden',
        description:
          'Sourden is designed to provide practical sourcing support without requiring you to build a purchasing team in China.',
      },
    ],
    /** The brief's closing line — the section's point, so it is a note under
     *  the list rather than a fourth entry. */
    note: "The goal isn't to make sourcing complicated. It's to make the complicated parts easier to manage.",
  },

  /* ---------------------------------------------------------------- 04 --- */
  {
    type: 'statement',
    /** 〔added〕 tone. */
    tone: 'white',
    eyebrow: 'OUR APPROACH',
    title: 'Good sourcing is more than finding the lowest price.',
    /**
     * The brief says "Use this statement prominently", so it is a display line
     * of its own rather than a paragraph in the body — the page's core belief
     * (spec §41) and the one sentence a reader should leave with.
     *
     * `before` because the brief puts it between the heading and the
     * supporting copy: it is the claim, and the three paragraphs are the
     * argument for it.
     */
    statement: "Good sourcing isn't about finding the cheapest supplier. It's about finding the right supplier for the job.",
    statementPosition: 'before',
    paragraphs: [
      'Price matters. But so do product specifications, quality, MOQ, production capability, communication, lead time, packaging and shipping.',
      'A supplier with the lowest quotation may not be the most practical option once the complete order is considered.',
      'Our role is to help evaluate the relevant factors and make the sourcing process more workable.',
    ],
  },

  /* ---------------------------------------------------------------- 05 --- */
  {
    type: 'growth',
    /** 〔added〕 tone. */
    tone: 'ivory',
    eyebrow: 'OUR PHILOSOPHY',
    title: "You don't need to start big.",
    paragraphs: [
      'We believe sourcing from China should not be limited to companies with large purchasing teams or large order volumes.',
    ],
    /**
     * The brief's six words, in order — one more than the five-stage path
     * `/how-it-works` and `/industries` render, because this one starts at the
     * individual rather than at the first order. Rendered uppercase by the
     * stylesheet, like every other progression on the site.
     */
    progression: ['Individual', 'First Order', 'Test', 'Repeat', 'Grow', 'Scale'],
    /**
     * The brief puts its two "Supporting copy" lines AFTER the progression,
     * which is why this device needed a `closingParagraphs` array: `paragraphs`
     * renders before the path and `emphasis` is a single brass line. Both
     * sentences stay where the brief puts them, and the second one is not
     * promoted to brass — the brief does not single it out, and turning a
     * supporting sentence into the section's conclusion would give it a weight
     * the copy does not carry.
     */
    closingParagraphs: [
      'Your first order may be small. Your requirements may change. Your sourcing needs may become more sophisticated as your business grows.',
      "Sourden is built to work with you at the stage you're actually in.",
    ],
  },

  /* ---------------------------------------------------------------- 06 --- */
  {
    type: 'stages',
    /** 〔added〕 tone. */
    tone: 'white',
    eyebrow: 'SOURCE AT YOUR SCALE',
    title: 'Start where you are. Grow from there.',
    /**
     * The brief's two copy lines, in its order. `paragraphs` renders both
     * before the list, which is where the brief puts them — the claim first,
     * then the qualifier, then the five stages they apply to.
     *
     * The second line is the MOQ qualifier this site never lets stand alone:
     * "Sourden does not impose its own fixed minimum order quantity" is a
     * statement about Sourden, and "the practical MOQ will always depend on the
     * product and supplier" is what keeps it true. The same pair appears on the
     * homepage, in `/services`, in `/industries`, in `/how-it-works` and in
     * this page's own FAQ.
     */
    description: 'Sourden does not impose its own fixed minimum order quantity.',
    paragraphs: [
      'The practical MOQ will always depend on the product and supplier, but our role is to help identify sourcing options that make sense for your current requirements.',
    ],
    /**
     * The brief's five stages. Unnumbered: they describe the stage a buyer is
     * AT, not a procedure with a first step — the same reasoning that keeps
     * `/how-it-works` §06's four purchasing parts unnumbered while its §11
     * sequence is numbered.
     *
     * The brief's note on this section ("Do not imply that Sourden guarantees
     * suppliers at every stage") is a constraint on the copy, not a sentence to
     * print: every line below says what the buyer does or what Sourden helps
     * with, and none of them promises that a suitable supplier exists.
     */
    items: [
      { label: 'First Order', description: 'Start with a product you want to test.' },
      {
        label: 'Test the Market',
        description: 'Understand whether the product works for your customers.',
      },
      {
        label: 'Repeat Orders',
        description: 'Build a relationship with suitable suppliers.',
      },
      {
        label: 'Growing Volume',
        description: 'Adjust purchasing and quality-control requirements as volume increases.',
      },
      {
        label: 'Scale Sourcing',
        description: 'Develop a more structured sourcing process as your business grows.',
      },
    ],
  },

  /* ---------------------------------------------------------------- 07 --- */
  {
    type: 'reviewGrid',
    /** 〔added〕 tone. */
    tone: 'ivory',
    eyebrow: 'WHO WE SERVE',
    title: 'Different buyers. The same need for practical sourcing.',
    /**
     * The brief's five groups, in its order. This is the same five the homepage
     * and `/services` render (including Individual Consumers), deliberately:
     * a reader who meets the audience twice should meet the same audience, not
     * a second list that happens to be one entry different.
     */
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
        description: 'Brands developing products, private-label lines or a more reliable supply chain.',
      },
      {
        title: 'Individual Consumers',
        description:
          'People looking for specific products, custom items or sourcing solutions that may be difficult to find locally.',
      },
    ],
    note: "The common factor isn't company size. It's having something you need to source.",
    /** The brief's §07 closing action. */
    foot: { label: 'Explore Our Industries', href: '/industries' },
  },

  /* ---------------------------------------------------------------- 08 --- */
  {
    type: 'flow',
    /** 〔added〕 tone — the page's one ink band. See the file header. */
    tone: 'ink',
    eyebrow: 'WHAT WE DO',
    title: 'We coordinate the work between your requirement and the supplier.',
    /** The brief's one-line position statement. */
    paragraphs: ['Sourden sits between the buyer and the China-side sourcing process.'],
    /**
     * The brief's relationship diagram, top to bottom, exactly as written. Six
     * plain labels and no descriptions, because the brief gives none: the shape
     * IS the content — a requirement enters, a destination comes out, and
     * Sourden is one link in the chain rather than the owner of any of it.
     *
     * That is why this section carries no verb and no claim: the brief warns
     * that Sourden must never read as a manufacturer or as the owner of the
     * goods, and a diagram of a coordinated chain says that more clearly than a
     * sentence could.
     */
    orientation: 'vertical',
    nodes: [
      { label: 'Your Requirement' },
      { label: 'Sourden' },
      { label: 'Supplier' },
      { label: 'Quality Control' },
      { label: 'Shipping' },
      { label: 'Your Destination' },
    ],
    /** The brief's supporting copy, rendered after the diagram it describes. */
    note: 'We research suppliers, communicate requirements, coordinate purchasing, follow orders, arrange quality checks where required and connect the order with shipping.',
    foot: { label: 'Explore Our Services', href: '/services' },
  },

  /* ---------------------------------------------------------------- 09 --- */
  {
    type: 'linkRows',
    /** 〔added〕 tone. */
    tone: 'ivory',
    eyebrow: 'A PRACTICAL APPROACH',
    title: 'Sourcing always involves variables.',
    description:
      "We don't believe good sourcing means pretending that every risk can be eliminated or every order will go exactly as planned.",
    /**
     * The brief's four statements. These are the page's credibility section,
     * and the brief asks for it to be "visually restrained, not presented as a
     * negative marketing section" — which is why the device is a plain ruled
     * list rather than four cards, and why nothing here is a cross or a
     * warning. Each line states a limit of the business, in the business's own
     * words.
     *
     * Rendered through the same rows device §15 uses, unnumbered and with no
     * destinations: a row here is a statement, not a place to go.
     */
    items: [
      {
        title: 'No "Lowest Price" Promises',
        description: "The cheapest quotation isn't always the best sourcing option.",
      },
      {
        title: 'No "Zero Risk" Promises',
        description: 'Supplier, production, logistics and market conditions can all introduce variables.',
      },
      {
        title: 'No "One Size Fits All"',
        description:
          'The right sourcing approach depends on the product, quantity, requirements and destination.',
      },
      {
        title: 'No Fake Certainty',
        description:
          "We'll distinguish between what has been confirmed, what needs to be checked and what depends on the supplier or destination.",
      },
    ],
    note: 'Clear information is more useful than false certainty.',
  },

  /* ---------------------------------------------------------------- 10 --- */
  {
    type: 'stages',
    /** 〔added〕 tone. */
    tone: 'white',
    eyebrow: 'HOW WE WORK',
    title: 'One point of contact. A connected process.',
    /**
     * The brief's six stages, and it numbers them — so `numbered` is set. That
     * flag is what reserves the number column in the desktop grid; without it
     * the number and the label are placed in the same cell and paint over each
     * other, which is a bug this project has already shipped once. The numbers
     * themselves derive from array order, never from the data.
     *
     * Unlike §06's five, these ARE a sequence with a first step, which is the
     * whole difference between the two sections: §06 says where a buyer is,
     * §10 says what happens in order.
     */
    numbered: true,
    items: [
      {
        label: 'Understand',
        description: "Understand what you need and what you're trying to achieve.",
      },
      { label: 'Research', description: 'Research relevant products and suppliers.' },
      { label: 'Verify', description: 'Review supplier information and practical fit.' },
      {
        label: 'Coordinate',
        description: 'Manage purchasing, supplier communication and production progress.',
      },
      { label: 'Check', description: 'Arrange quality control where required.' },
      { label: 'Ship', description: 'Coordinate the movement of goods from China.' },
    ],
    /** The brief's §10 closing action — the page's one hand-off to the process
     *  page, since §16's own CTA is the closing band. */
    foot: { label: 'See How It Works', href: '/how-it-works' },
  },

  /* ---------------------------------------------------------------- 11 --- */
  {
    type: 'reviewGrid',
    /** 〔added〕 tone. */
    tone: 'ivory',
    eyebrow: 'THE SOURDEN STANDARD',
    title: 'Practical. Transparent. Built around the requirement.',
    /**
     * The brief's four principles. The heading names three of them, so the
     * fourth (Connected) is the one that explains why the other three hold
     * together across a project rather than per stage.
     */
    items: [
      {
        title: 'Practical',
        description: 'Focus on what actually matters for the order rather than unnecessary process.',
      },
      {
        title: 'Clear',
        description: 'Communicate what is known, what needs to be confirmed and what happens next.',
      },
      {
        title: 'Flexible',
        description: 'Adapt the sourcing process to the product, quantity and stage of the buyer.',
      },
      {
        title: 'Connected',
        description:
          'Keep supplier research, purchasing, quality control and shipping connected when the project requires it.',
      },
    ],
  },

  /* ---------------------------------------------------------------- 12 --- */
  {
    type: 'prose',
    /** 〔added〕 tone. */
    tone: 'white',
    eyebrow: 'LOCAL KNOWLEDGE MATTERS',
    title: "China's supplier landscape is diverse.",
    /**
     * The brief's two paragraphs plus its "Add:" line. The brief is explicit
     * that this section must NOT make unsupported claims about specific cities,
     * supplier concentrations or manufacturing dominance — so the copy says
     * only that categories concentrate in different regions, and that
     * researching the landscape is what narrows a search. No city, no province
     * and no industry cluster is named anywhere in it.
     */
    paragraphs: [
      'Different product categories are concentrated in different manufacturing regions, supplier clusters and business ecosystems.',
      'A supplier search is therefore not simply a matter of finding a product online. Understanding where and how a product is commonly produced can help narrow the sourcing process.',
      'Our approach is based on researching the relevant supplier landscape for the product rather than treating China as a single, uniform supplier market.',
    ],
  },

  /* ---------------------------------------------------------------- 13 --- */
  {
    type: 'statement',
    /** 〔added〕 tone. */
    tone: 'ivory',
    eyebrow: 'OUR MINDSET',
    title: 'Good sourcing should look simple from the outside.',
    paragraphs: [
      'There can be a lot happening behind a successful sourcing order: supplier research, product questions, quotations, negotiation, purchasing, production follow-up, quality checks, packaging and logistics.',
      "The customer's experience, however, should not have to feel complicated.",
    ],
    /**
     * The brief's closing statement — "This should be a strong brand
     * statement" — so it is the display line of the section rather than a
     * third paragraph.
     *
     * `after` because the brief places it last: the two paragraphs describe
     * the work, and this is the promise about it. §04 runs the other way round
     * (claim first, argument after), which is why the position is data.
     */
    statement:
      'Our job is to handle the coordination behind the scenes and keep you informed about the decisions that matter.',
    statementPosition: 'after',
  },

  /* ---------------------------------------------------------------- 14 --- */
  {
    type: 'flow',
    /** 〔added〕 tone. */
    tone: 'white',
    eyebrow: 'THE RELATIONSHIP',
    title: 'A sourcing partner should understand the order — not just the supplier.',
    /**
     * The brief's two copy paragraphs, in order: the first sets up the two
     * sides, the second says what the partner does between them.
     */
    paragraphs: [
      'The supplier knows how to make the product. You know what you want to buy and why you want it.',
      "The sourcing partner's role is to connect those two sides: understand the requirement, communicate it clearly, identify suitable suppliers, coordinate the process and help keep the order moving.",
    ],
    /**
     * The brief's three-way relationship, with each party's own question. Unlike
     * §08's downward chain this is a correspondence, so it is horizontal and
     * the gaps carry a two-way mark rather than an arrow — nobody here is a
     * step after anybody else.
     *
     * The three sub-lines are the brief's, and they are what makes the diagram
     * an argument rather than a logo strip: each party is defined by what it
     * knows, which is why the visiting buyer's own question is printed on their
     * own node.
     */
    orientation: 'horizontal',
    nodes: [
      { label: 'Buyer', sub: 'What do I need?' },
      { label: 'Sourden', sub: 'How do we source it?' },
      { label: 'Supplier', sub: 'How can it be made?' },
    ],
    note: "That's the role we aim to play.",
  },

  /* ---------------------------------------------------------------- 15 --- */
  {
    type: 'linkRows',
    /** 〔added〕 tone. */
    tone: 'ivory',
    eyebrow: 'FROM REQUIREMENT TO SHIPMENT',
    title: 'The services behind the Sourden approach.',
    /**
     * The same device §09 uses, numbered and with exactly one destination per
     * row — which is the difference between the two lists: §09's rows are
     * statements with nowhere to go, these are the five services in registry
     * order, numbered 01–05, each row its own link.
     *
     * Number, name and route come from `services.js`; only the sentence comes
     * from the map at the top of this file. The link label is the service's own
     * name, so the row reads "01  Product Sourcing  →" and the visitor meets
     * the same five names they will meet on `/services`, in the rail and in the
     * footer.
     *
     * `numbered` is a LIST-level flag, not a per-item one: it is what reserves
     * the number column. It is set here for the same reason it is set on §10.
     */
    items: relatedServices,
    numbered: true,
    foot: { label: 'View All Services', href: '/services' },
  },

  /* ---------------------------------------------------------------- 16 --- */
  {
    type: 'prose',
    /** 〔added〕 tone. */
    tone: 'white',
    eyebrow: 'A DIFFERENT KIND OF SOURCING PARTNER',
    title: 'Built around real sourcing work.',
    /**
     * The brief's three paragraphs. This is the section the brief attaches its
     * list of forbidden facts to (§16: no employees, suppliers, years, offices,
     * countries, order volume or customer numbers), so the copy describes the
     * business entirely through what it does — experience of products,
     * suppliers, quotations, purchasing, quality control and shipping — and
     * through a design intention, neither of which requires a number.
     */
    paragraphs: [
      'Sourden is built from practical experience working with products, suppliers, quotations, purchasing, quality control and shipping.',
      "The business is intentionally designed around a simple idea: make China's supplier network more accessible to buyers who may not have the scale, local team or experience to navigate it alone.",
      'That means starting with the requirement, researching the options, coordinating the process and staying focused on what actually needs to get done.',
    ],
  },
];

/* ===========================================================================
   17 — FAQ
   ---------------------------------------------------------------------------
   Eight questions, each with the brief's own answer. The brief attaches one
   action to the section rather than to an individual answer ("Start a Sourcing
   Request → /sourcing-request"), so it is the FAQ's closing link.

   No answer states a timeline, a figure, a certification or a guarantee — the
   brief's answers are written that way, and this page must not improve on them.

   STRUCTURED DATA NOTE
   The brief asks for FAQ structured data "if supported by the existing
   project". It is not: `schema.js` has no FAQ builder and no page emits a
   FAQPage node. Inventing one here would make `/about` the only page on the
   site with it — the other three FAQ-bearing pages would still be without it —
   so it is left as a deliberate follow-up: add the builder to `schema.js` and
   apply it to every FAQ section in one change, rather than special-casing this
   page.
   =========================================================================== */

export const faqIntro = {
  eyebrow: 'FAQ',
  title: 'Questions about SOURDEN.',
};

export const faqItems = [
  {
    question: 'What is SOURDEN?',
    answer:
      'Sourden is a China sourcing and procurement coordination service that helps businesses and individual buyers find suppliers, purchase products, arrange quality control and coordinate shipping from China.',
  },
  {
    question: 'Who is SOURDEN for?',
    answer:
      'Sourden primarily supports small wholesalers, independent retailers, local shops and growing brands. Individual consumers can also use the service for specific sourcing requirements.',
  },
  {
    question: 'Is SOURDEN a manufacturer?',
    answer:
      'No. Sourden is a sourcing and coordination partner. We research and work with suitable suppliers rather than manufacturing the products ourselves.',
  },
  {
    question: 'Do you have a minimum order quantity?',
    answer:
      'Sourden does not impose its own fixed minimum order quantity. The practical MOQ depends on the product and supplier.',
  },
  {
    question: 'Can you source custom products?',
    answer:
      'Depending on the product, we can research suppliers that support customization, private labeling, packaging and other specific requirements.',
  },
  {
    question: 'Do you only find suppliers?',
    answer:
      'No. Depending on the project, Sourden can support supplier research, verification, purchasing, quality control and shipping.',
  },
  {
    question: 'Can I work with a supplier I already found?',
    answer:
      'Yes. If you already have a supplier, we can support supplier verification, purchasing, quality control, shipping or another relevant stage of the process.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Start by submitting a sourcing request. Tell us what you are looking for, your approximate quantity and destination, and include any product references you have.',
  },
];

/** The brief's §17 closing action. */
export const faqFoot = primaryCta;

/* ===========================================================================
   18 — FINAL CTA
   =========================================================================== */

export const finalCta = {
  eyebrow: 'START WHERE YOU ARE',
  title: 'Have something you need to source?',
  description:
    "You don't need to know the supplier. You don't need to have every detail figured out. Start with what you know.",
  cta: primaryCta,
  /**
   * The brief's §18 names a secondary action too ("See How It Works" →
   * `/how-it-works`). `<FinalCTA>` renders exactly ONE control by design (site
   * spec §19 forbids competing buttons in the closing band), so the brief's
   * secondary lives in the hero — where the same label and the same destination
   * are the brief's §01 secondary — and again as §10's closing link. Nothing is
   * lost and no second button was invented.
   */
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
 * it makes three gates crash on `PAGE.aboutPage` being undefined. Scan the
 * harness directory too.
 */
export const aboutPage = {
  slug,
  meta,
  breadcrumbs,
  hero,
  sections,
  faqIntro,
  faqItems,
  faqFoot,
  finalCta,
};

