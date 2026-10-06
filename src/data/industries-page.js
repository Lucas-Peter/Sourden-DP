/**
 * SOURDEN — /industries  (Industries & Product Categories)
 * ---------------------------------------------------------------------------
 * Every editable word on the Industries overview page. Like `/services`, this
 * page is a HUB: the centre of it is a nine-entry directory that points at the
 * nine `/industries/<slug>` category pages.
 *
 * ── 2026-10-02 内容精简（松霖指令 + Industries brief §01–§16）──────────────
 * The page used to be a 13-section editorial essay (intro prose, four sourcing
 * strategies, a five-stage flow, a five-stage rail, related services, an
 * eight-question FAQ). That content belongs on the nine detail pages and on
 * `/how-it-works` / `/services` / `/about` / `/faq`; the hub's one job is to
 * answer "what can SOURDEN source from China?" and route onward. It is now six
 * sections:
 *    01 Hero                       §01  eyebrow, H1, one-line copy, two actions
 *    02 The category directory     §02  nine entries, name + one description +
 *                                       "Learn More", plus the scope note
 *    03 Not sure where it fits?    §03  the "tell us anyway" exit
 *    04 Our approach               §04  short prose + "How It Works →"
 *    05 Who we source for          §05  the five buyer types
 *    06 No fixed MOQ               §   the MOQ position, one statement + one
 *                                       qualifier (no growth path)
 *    +   Final CTA                 §11  one primary action
 *
 * ── THE PAGE FILE DECLARES NO CATEGORY AND NO SERVICE ──────────────────────
 * Titles, numbers, slugs and hrefs come from `industries.js`. The brief writes
 * the ninth category as "Clothing, Shoes & Bags" with the route
 * `/industries/clothing-shoes-bags`; the site already publishes that category
 * as "Apparel, Footwear & Bags" at `/industries/apparel-footwear-bags` and the
 * business confirmed on 2026-09-23 that the site's name is the one to use
 * site-wide. So this file maps the brief's ninth entry onto the registry's
 * record instead of typing a second name for the same category.
 *
 * ── SCOPE OF THE NINE CATEGORIES ───────────────────────────────────────────
 * The directory is a navigation framework, not a claim of exclusivity. The
 * brief (§15) and 松霖 both require this to be legible: the nine are the
 * categories SOURDEN sources most often or has established supplier networks
 * in, and a product outside them can still be submitted. That is said once,
 * as `scopeNote` under the directory, and again more directly in §03's "Not
 * sure?" section — never as "we can source anything", which is a banned
 * over-claim.
 *
 * ── CLAIMS RULE (brief §"Content Accuracy Requirements") ───────────────────
 * Nothing here may assert that China is the cheapest, that SOURDEN can source
 * anything, a lowest price, guaranteed quality, that every supplier is
 * verified, that every factory accepts small orders, guaranteed compliance,
 * guaranteed customs clearance or guaranteed delivery. The copy uses the
 * qualified register ("can", "may", "depending on the product").
 *
 * ── THE MOQ POSITION (brief §08 + 松霖) ────────────────────────────────────
 * "NO FIXED MOQ FROM SOURDEN" / "Source at your scale." is one statement plus
 * one qualifier, and the qualifier is what keeps the statement honest: SOURDEN
 * imposes no fixed minimum order quantity of its own, and that is NOT the same
 * as "every supplier accepts small orders". The qualifier stays — without it
 * the statement becomes a claim this site must never make.
 *
 * ── TONE PER SECTION ───────────────────────────────────────────────────────
 * Hero ivory, the closing band dark; everything between alternates. Each
 * section states its own `tone` so the rhythm is readable in the data.
 * ---------------------------------------------------------------------------
 */

import { industries } from './industries.js';
import { primaryCta } from './site.js';

export const slug = 'industries';

/* ===========================================================================
   SEO — brief §14. Title, meta description and H1 are mandated.
   =========================================================================== */

export const meta = {
  title: 'Industries & Product Categories | China Sourcing | SOURDEN',
  description:
    'Explore the product categories SOURDEN can source from China, from consumer products and beauty to packaging, electronics, industrial products, sports, pets and fashion.',
};

/**
 * The trail below "Home" — `<Breadcrumbs>` and `breadcrumbItems()` prepend the
 * rest. `/industries` is a top-level page, so this is one crumb deep.
 */
export const breadcrumbs = [{ label: 'Industries' }];

/* ===========================================================================
   01 — HERO
   =========================================================================== */

export const hero = {
  eyebrow: 'WHAT WE SOURCE',
  title: 'Products worth sourcing. Categories worth exploring.',
  /** Brief §01's supporting line, verbatim — one line, no long China-sourcing
   *  explanation (the brief removes the old two-sentence version). */
  description:
    'We source across a wide range of product categories, working from your specifications, target market and business requirements.',
  /** The site-wide primary action, declared once in `site.js`. */
  primaryCta,
  /** The existing hero secondary — hands the visitor to the process page. */
  secondaryCta: { label: 'How It Works', href: '/how-it-works' },
  /** Image direction (brief §01): a documentary sourcing image. Art direction
   *  and crop note live with the slot in `media.js`. */
  image: {
    key: 'industriesHero',
  },
};

/* ===========================================================================
   02 — THE CATEGORY DIRECTORY
   ---------------------------------------------------------------------------
   The brief gives each of the nine categories one concise description. Those
   live HERE, keyed by the registry slug, and the directory is built by merging
   them onto `industries.js`.

   WHY A MAP AND NOT A SECOND LIST
   `industries.js` owns number, title, slug and href; this map owns only the
   one sentence the directory adds. Merging the two means a category that is
   renamed, reordered or added in the registry cannot end up with a stale twin
   here — and `requireCategory()` fails the build instead of rendering
   `undefined` into the directory.
   =========================================================================== */

const categoryDescriptions = {
  'consumer-products':
    'Everyday products for retail, wholesale and direct-to-consumer businesses.',
  'beauty-personal-care':
    'Beauty tools, accessories, personal care products and related consumer goods.',
  'wood-products':
    'Wooden products, packaging, storage, furniture components and custom-made items sourced from experienced manufacturers in China.',
  packaging: 'Product packaging, boxes, bags, labels and other packaging solutions.',
  'electronics-accessories':
    'Consumer electronics, accessories, components and related products.',
  'industrial-products':
    'Components, tools, equipment and products for commercial and industrial applications.',
  'sports-outdoors':
    'Sports equipment, outdoor products, fitness accessories and related goods.',
  'pet-supplies':
    'Pet accessories, supplies, toys and everyday products for pet businesses and buyers.',
  'apparel-footwear-bags':
    'Apparel, footwear, bags, accessories and related fashion products.',
};

/** @param {string} slug */
function requireCategory(slug) {
  const description = categoryDescriptions[slug];
  if (!description) {
    throw new Error(
      `[industries-page.js] No directory copy for the category "${slug}". ` +
        `Either it was added to industries.js without an entry here, or its slug changed — ` +
        `the directory is merged from the registry and never re-typed.`
    );
  }
  return description;
}

/**
 * The nine directory entries, in registry order. Each entry carries only what
 * the brief asks for: the registry name and route, one concise description and
 * a "Learn More" action (the arrow is drawn by `<ArrowLink>`, the label never
 * carries one of its own).
 */
export const categories = industries.map((category) => ({
  ...category,
  description: requireCategory(category.slug),
  /** 〔added〕 the brief §02's uniform action label. */
  ctaLabel: 'Learn More',
}));

/* ===========================================================================
   SECTIONS — in render order (brief §02 … §05, then the MOQ position)
   ---------------------------------------------------------------------------
   `type` selects the device; `tone` is the section ground. The hero (§01), the
   closing CTA (§11) and the scope note (inside §02) are not separate array
   entries — they have their own fixed places, exactly as on the service pages.
   =========================================================================== */

export const sections = [
  /* ---------------------------------------------------------------- 02 --- */
  {
    type: 'directory',
    /** 〔added〕 tone — ivory, so the directory sits on the page's own ground. */
    tone: 'ivory',
    eyebrow: 'EXPLORE OUR CATEGORIES',
    title: 'What can we source from China?',
    /** Nine entries, merged from `industries.js` — see `categories` above. */
    items: categories,
    /** 松霖's scope clarification, verbatim — the nine are common/established
     *  categories, NOT the business's boundary. Rendered as ordinary
     *  supporting text under the list, not as a new card or section. */
    scopeNote:
      'These are some of the categories we source most often or have established supplier networks in. If your product falls outside these categories, we can still help.',
  },

  /* ---------------------------------------------------------------- 03 --- */
  {
    type: 'prose',
    /** 〔added〕 tone. */
    tone: 'white',
    eyebrow: 'NOT SURE?',
    title: "Don't see your product category?",
    /** The brief's body, verbatim — the "these categories are not a limit"
     *  message, said directly. */
    paragraphs: [
      "These categories are only a starting point. If your product doesn't fit neatly into one of them, tell us what you're looking for. We can review the requirements and determine the right sourcing approach.",
    ],
    foot: { label: 'Tell Us What You Need', href: '/sourcing-request' },
  },

  /* ---------------------------------------------------------------- 04 --- */
  {
    type: 'prose',
    /** 〔added〕 tone. */
    tone: 'ivory',
    eyebrow: 'OUR APPROACH',
    title: 'Different products require different sourcing approaches.',
    /** The brief's two sentences, verbatim. No nine-category examples, no
     *  strategies — the detail lives on the child pages and /how-it-works. */
    paragraphs: [
      'Product specifications, order quantities, customization, supplier capabilities, quality requirements and destination can all affect how a sourcing project should be handled.',
      'We start with your requirements and determine the appropriate sourcing approach from there.',
    ],
    foot: { label: 'How It Works', href: '/how-it-works' },
  },

  /* ---------------------------------------------------------------- 05 --- */
  {
    type: 'people',
    /** 〔added〕 tone. */
    tone: 'white',
    eyebrow: 'WHO WE SOURCE FOR',
    title: 'Built for buyers at different stages.',
    /** The brief's supporting line, verbatim. */
    description: "You don't need to be a large company to start sourcing from China.",
    /** The five audiences. Each carries its one-line explanation — the same
     *  five the homepage and `/about` render, so a reader who meets them twice
     *  meets the same audience. */
    items: [
      {
        title: 'Small Wholesalers',
        description: 'Looking for reliable products and practical supplier options for resale.',
      },
      {
        title: 'Independent Retailers',
        description: "Need access to Chinese suppliers without building a purchasing team in China.",
      },
      {
        title: 'Local Shops',
        description: 'Looking for products that fit a specific local market or customer base.',
      },
      {
        title: 'Growing Brands',
        description: 'Developing products, private-label lines or a more reliable supply chain.',
      },
      {
        title: 'Individual Consumers',
        description:
          'Looking for a specific product, custom item or sourcing solution that is difficult to find locally.',
      },
    ],
    /** Brief §06: the old "Related Services" band is replaced by one link. */
    foot: { label: 'Explore Our Services', href: '/services' },
  },

  /* ------------------------------------------------------- No MOQ --------- */
  {
    type: 'scale',
    /** 〔added〕 tone. */
    tone: 'ivory',
    /** 松霖 §2: a small eyebrow / label, then one short statement. */
    eyebrow: 'NO FIXED MOQ FROM SOURDEN',
    statement: 'Source at your scale.',
    /** The qualifier that keeps the statement honest — SOURDEN imposes no
     *  fixed MOQ of its own, which is NOT the same as "every supplier accepts
     *  small orders". One line, not a long explanation. */
    qualifier:
      'The practical MOQ will depend on the product and supplier. Not every supplier will accept small quantities.',
  },
];

/* ===========================================================================
   11 — FINAL CTA
   =========================================================================== */

export const finalCta = {
  eyebrow: 'START WITH A REQUEST',
  title: 'Looking for something specific?',
  description:
    "Tell us what you're looking for, including your product requirements, quantity and destination.",
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
 * is the harness `in-geo.mjs` (`PAGE.industriesPage`). The harnesses live in the
 * SESSION directory, so a dead-export scan limited to the repo reports this as
 * unused — see the same warning in `about-page.js`.
 */
export const industriesPage = {
  slug,
  meta,
  breadcrumbs,
  hero,
  sections,
  finalCta,
};
