/**
 * SOURDEN — /insights  (Practical knowledge for sourcing from China)
 * ---------------------------------------------------------------------------
 * Every editable word on the Insights hub, from the Insights brief (§2–§11).
 *
 * ── WHAT THIS PAGE IS ──────────────────────────────────────────────────────
 * The central content library: a hub, not a blog. §1 is explicit about what it
 * must NOT look like — a generic company blog, a news site, an SEO article
 * directory, a fake industry publication, or a page of dozens of empty cards.
 * What it says instead is "practical knowledge for people who actually buy from
 * China", so the page is three things and nothing more: one featured piece, a
 * filterable directory of the twelve planned articles, and the reasons the
 * library exists.
 *
 * ── WHAT THIS FILE AUTHORS, AND WHAT IT DOES NOT ───────────────────────────
 * Every eyebrow, heading, paragraph, article title, article description and
 * principle below is the brief's own wording, verbatim, in its straight ASCII
 * apostrophes — the convention every other page file follows.
 *
 * The strings this file authors are marked 〔added〕: the hero image caption and
 * the section `tone` values. Nothing else. In particular:
 *   · every service name and href in §10 comes from `service-links.js`, and the
 *     sentence beside it is the registry's own `description` — the brief gives
 *     the five names and routes and no sentences, and this file does not invent
 *     five. The brief writes service 03 as "Purchasing & Order Management"; the
 *     site publishes it as "Purchasing Management", so the registry wins. See
 *     the same decision recorded in `about-page.js`.
 *   · every category word comes from `insights-articles.js`.
 *   · every article comes from `insights-articles.js`.
 *
 * ── THE TWO CONFLICTS WITH THE SITE'S OWN RULES, AND HOW THEY RESOLVED ─────
 * 1. §11 names a SECONDARY action in the closing band ("How It Works →").
 *    `<FinalCTA>` renders exactly one control by design — site spec §19 forbids
 *    competing buttons there — and that rule has now been held four times
 *    (`/industries` §13, `/how-it-works` §16, `/about` §18, and the five detail
 *    pages). The same resolution is used here: the destination moves to the
 *    hero as the secondary action, which §15 also asks the page to link to. So
 *    nothing is lost and the closing band still has one action.
 *
 * 2. §2 gives the hero exactly four things — eyebrow, H1, supporting text and
 *    ONE primary CTA. `<ServicesHero>` requires a secondary action and every
 *    other hub page passes one, so the hero carries `How It Works →`. That is
 *    not a fifth invented element: it is the destination §11 named and §15
 *    listed, and it is the string `/industries`, `/about` and `/faq` all use.
 *
 * ── NO FABRICATED METADATA ─────────────────────────────────────────────────
 * §6 and §14 forbid, by name: author names, reading statistics, view counts,
 * comment counts, publication dates, "Coming soon" and "we have no articles
 * yet". The article records carry those fields as `null` (see
 * `insights-articles.js`) and the card renders a field only when it is a real
 * string, so there is nothing to fake and nothing to remove later.
 *
 * ── WHY THE PAGE HAS SEVEN BANDS AND NOT TWELVE ────────────────────────────
 * §4 (category navigation) and §5 (article directory) are one device: the
 * filter sits under §5's section header and above §5's grid. §6 and §7 are not
 * sections at all — §6 is the card spec and §7 is image direction. So the brief's
 * §2–§11 become: hero → featured → directory (+ filter) → why → topics →
 * services → closing band.
 * ---------------------------------------------------------------------------
 */

import {
  insightArticles,
  insightCategories,
  topicCategories,
  articleHref,
  categoryFor,
} from './insights-articles.js';
import { serviceForSlug } from './service-links.js';
import { primaryCta } from './site.js';

export const slug = 'insights';

/* ===========================================================================
   SEO
   ---------------------------------------------------------------------------
   Carried over VERBATIM from the `/insights` entry that `routes.js` held while
   this route was a reservation page. §"SEO optimization will be handled
   separately later" means the search metadata is deliberately not rewritten in
   this task, and keeping the strings identical means publishing the page does
   not move anything a search engine has already seen. `/faq` and both legal
   documents made the same call.
   =========================================================================== */

export const meta = {
  title: 'Sourcing Insights and Guides | Sourden',
  description:
    'Practical guides, sourcing knowledge and insights to help you make better decisions when buying from China.',
};

/** Trail BELOW "Home" — `<Breadcrumbs>` prepends that. The last crumb has no href. */
export const breadcrumbs = [{ label: 'Insights' }];

/* ===========================================================================
   §2 — HERO
   =========================================================================== */

export const hero = {
  eyebrow: 'INSIGHTS',
  title: 'Practical knowledge for sourcing from China.',
  description:
    'Guides, sourcing knowledge and practical insights to help you find suppliers, evaluate options and manage purchasing from China with greater clarity.',
  /** The site-wide primary action, declared once in `site.js`. */
  primaryCta,
  /**
   * The brief's §11 secondary ("How It Works →"), placed here because
   * `<FinalCTA>` renders one control — see the header. §15 also names
   * `/how-it-works` as a page the hub should link to.
   */
  secondaryCta: { label: 'How It Works', href: '/how-it-works' },
  image: {
    key: 'insightsHero',
    /**
     * 〔added〕 Image direction is brief §7 entirely, including its banned list;
     * the caption is written here because the brief does not supply one and
     * every hero on the site has one.
     */
    caption: 'Supplier research and product samples compared against a specification.',
  },
};

/* ===========================================================================
   §3 — FEATURED INSIGHT
   ---------------------------------------------------------------------------
   The record is looked up rather than re-declared, so the featured band and the
   article's own card cannot disagree about its title or its category. §3 gives
   this one article a LONGER description than §5 does, and that is why the
   record carries `featuredSummary` beside `description` instead of one field
   being made to serve both.
   =========================================================================== */

const FEATURED_SLUG = 'how-to-find-reliable-suppliers-in-china';

const featuredArticle = insightArticles.find((article) => article.slug === FEATURED_SLUG);

if (!featuredArticle) {
  throw new Error(
    `[insights-page.js] No article registered with slug "${FEATURED_SLUG}", so the featured ` +
      `section would render empty. Fix the slug or the article list in insights-articles.js.`
  );
}

export const featured = {
  article: featuredArticle,
  category: categoryFor(featuredArticle.categorySlug),
  /**
   * The featured band's frame.
   *
   * This lives HERE rather than on the article record, and the reason is a real
   * defect the gate caught: the featured article is also card 01 of the
   * directory, because §19.4 requires all twelve cards. With one `imageKey` on
   * the record, the same photograph rendered twice on the same page — once in
   * the band and once in the card directly below it. So the frame is a
   * presentation choice of this surface; `article.imageKey` remains §12's data
   * slot for the article's own photograph.
   */
  imageKey: 'insightSupplierResearch',
  /** §3's CTA label, verbatim. The grid's cards use "Read Article" instead —
   *  see `InsightCard.astro` — because only this one is called a guide. */
  cta: { label: 'Read the Guide', href: articleHref(featuredArticle) },
};

/* ===========================================================================
   §5 — ARTICLE DIRECTORY  (+ §4's filter, which is its control)
   =========================================================================== */

export const directory = {
  eyebrow: 'LATEST INSIGHTS',
  title: 'Useful knowledge, without the noise.',
  description:
    "We focus on the practical side of sourcing — the questions that matter when you're actually trying to find, buy and move products from China.",
  /** Accessible name for the filter. 〔added〕 — §4 names the categories, not the control. */
  filterLabel: 'Filter insights by category',
  articles: insightArticles,
  /**
   * All SEVEN entries, "All" included — the filter needs the default state as
   * a chip, and §4 lists it first in the category list. §9's topic section
   * renders the six real categories only, from `topicCategories`.
   */
  categories: insightCategories,
};

/* ===========================================================================
   THE BANDS
   ---------------------------------------------------------------------------
   Order, tones and content live here so the composition is data, not markup —
   the architecture `/industries` and `/about` use. `type` selects the device in
   the route; an unknown type throws at build time rather than rendering an
   empty band.

   TONES alternate ivory/white against the hero, which is ivory itself
   (`.sv-hero`). §8/§9/§10 use three DEVICES THE SITE ALREADY HAS — the review
   grid and the two ruled-row lists — rather than three new ones, which is what
   "the page feels like part of the existing website" (§19.14) asks for.
   =========================================================================== */

export const sections = [
  {
    type: 'featured',
    tone: 'white',
    titleId: 'in-featured',
    featured,
  },

  {
    type: 'directory',
    tone: 'ivory',
    titleId: 'in-directory',
    directory,
  },

  /* ---- §8 WHY SOURDEN WRITES -------------------------------------------- */
  {
    type: 'reviewGrid',
    tone: 'white',
    titleId: 'in-why',
    eyebrow: 'WHY THESE INSIGHTS',
    title: 'Written for people who actually buy.',
    description:
      "Sourcing advice can become complicated very quickly. We focus on the practical questions that come up when you're actually researching suppliers, comparing quotations, placing orders and moving products from China.",
    /**
     * The brief's three principles. §8 says this section "should reinforce the
     * SOURDEN brand without becoming another sales section", so there is no
     * link and no call to action here — the section states a position and stops.
     */
    items: [
      {
        title: 'Practical',
        description: 'Focus on decisions buyers actually need to make.',
      },
      {
        title: 'Clear',
        description: 'Explain sourcing concepts without unnecessary jargon.',
      },
      {
        title: 'Realistic',
        description: 'No promises of perfect suppliers, guaranteed savings or risk-free sourcing.',
      },
    ],
  },

  /* ---- §9 EXPLORE BY TOPIC ---------------------------------------------- */
  {
    type: 'linkRows',
    tone: 'ivory',
    titleId: 'in-topics',
    numbered: false,
    eyebrow: 'EXPLORE BY TOPIC',
    title: 'Find the information you need.',
    /**
     * §9's six topics, derived from the category registry rather than typed —
     * name, one-line description and `?category=` destination all come from
     * there, so a topic and its filter chip can never describe different things.
     *
     * §9 allows the fallback: "if query-parameter filtering is not implemented,
     * use the same category state/filter mechanism already used on the page."
     * The `?category=` links ARE that mechanism — the page's filter script reads
     * the query string on load — so both forms work and neither is a dead end.
     */
    items: topicCategories.map((category) => ({
      title: category.label,
      description: category.description,
      href: `/insights?category=${category.slug}`,
    })),
    /** §9: "Do not create unnecessary separate category pages at this stage." */
  },

  /* ---- §10 CONNECTION TO SERVICES --------------------------------------- */
  {
    type: 'linkRows',
    tone: 'white',
    titleId: 'in-services',
    numbered: true,
    eyebrow: 'FROM KNOWLEDGE TO ACTION',
    title: 'Need help with a real sourcing project?',
    description:
      "Reading about sourcing is a good place to start. When you're ready to find suppliers, compare options or manage an order, SOURDEN can help with the practical work.",
    /**
     * `number`, `title` and `href` come from `services.js`; the sentence is the
     * registry's own `description`. The brief gives the five names and routes
     * and no sentences, and typing five here would be five invented sentences
     * that also drift from the homepage's wording for the same services.
     *
     * `numbered` follows every other listing of the five services on the site
     * (the homepage list, `/about` §15, `/industries` §11, the process rail) —
     * the same five names should not be numbered in four places and unnumbered
     * in a fifth.
     */
    items: [
      'product-sourcing',
      'supplier-verification',
      'purchasing-order-management',
      'quality-control',
      'shipping-from-china',
    ].map((serviceSlug) => {
      const service = serviceForSlug(serviceSlug);
      return {
        number: service.number,
        title: service.title,
        description: service.description,
        href: service.href,
      };
    }),
    /** §10: "Do not make this section overly promotional." No extra link. */
  },
];

/* ===========================================================================
   §11 — FINAL CTA
   =========================================================================== */

export const finalCta = {
  eyebrow: 'START WITH A REQUEST',
  title: 'Ready to source from China?',
  description:
    "Tell us what you're looking for, what you already know and where the products need to go. We'll take it from there.",
  cta: primaryCta,
  /**
   * The brief's §11 secondary action ("How It Works →", `/how-it-works`) is the
   * hero's secondary CTA. `<FinalCTA>` renders exactly one control by design —
   * see the header for the four precedents that set this rule.
   */
};
