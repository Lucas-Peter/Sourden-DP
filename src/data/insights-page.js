/**
 * SOURDEN — /insights  (Practical knowledge for sourcing from China)
 * ---------------------------------------------------------------------------
 * Every editable word on the Insights hub.
 *
 * ── WHAT THIS PAGE IS ──────────────────────────────────────────────────────
 * The central content library: a hub, not a blog. §1 is explicit about what it
 * must NOT look like — a generic company blog, a news site, an SEO article
 * directory, a fake industry publication, or a page of dozens of empty cards.
 * What it says instead is "practical knowledge for people who actually buy from
 * China", so the page is a hero, one directory of the twelve planned articles,
 * and the two bands that close it.
 *
 * ── IT USED TO BE SEVEN BANDS. IT IS NOW THREE PLUS THE CLOSING CTA ─────────
 * The original build followed the brief band by band. The page was then
 * simplified — the presentation, not the content underneath it — to the shape
 * the directory page was designed for in the project's own static prototype:
 * a compact hero, the listing, and the closing bands. What that removed, named
 * so that nobody later reads the absence as an oversight:
 *
 *   · §3's FEATURED BAND. Its article still leads the page: it is card 01 of the
 *     directory and the first record in `insights-articles.js`, which is what
 *     §14's "only the featured article needs to be treated as the first
 *     priority" asks for. The band's longer §3 sentence went with the band —
 *     every card, that one included, prints §5's `description`.
 *   · §4's CATEGORY FILTER. The categories are still the taxonomy: each card
 *     prints its category's uppercase tag. What is gone is the chip row and the
 *     `?category=` state.
 *   · §8 WHY SOURDEN WRITES and §9 EXPLORE BY TOPIC, both whole.
 *   · The hero's image, and with it §2's reading that a hub hero carries a frame.
 *     §2's own last line — "Do not make the hero overly large" — is what the
 *     hero now follows.
 *
 * §10 is KEPT: it is the page's five links into the service detail pages and
 * §15 asks the page to link to all five by name. §11's closing band is kept.
 * The brief still holds every removed band's copy (§3, §4, §8, §9), so bringing
 * one back is a re-read of the brief rather than a reconstruction.
 *
 * ── WHAT THIS FILE AUTHORS, AND WHAT IT DOES NOT ───────────────────────────
 * Every eyebrow, heading and paragraph below is the brief's own wording,
 * verbatim, in its straight ASCII apostrophes — the convention every other page
 * file follows.
 *
 * The strings this file authors are marked 〔added〕: the pagination's control
 * labels and the count line's three templates, none of which the brief supplies.
 * Nothing else. In particular:
 *   · every service name and href in §10 comes from `service-links.js`, and the
 *     sentence beside it is the registry's own `description` — the brief gives
 *     the five names and routes and no sentences, and this file does not invent
 *     five. The brief writes service 03 as "Purchasing & Order Management"; the
 *     site publishes it as "Purchasing Management", so the registry wins. See
 *     the same decision recorded in `about-page.js`.
 *   · every category word and every article comes from `insights-articles.js`.
 *
 * ── THE TWO CONFLICTS WITH THE SITE'S OWN RULES, AND HOW THEY RESOLVED ─────
 * 1. §11 names a SECONDARY action in the closing band ("How It Works →").
 *    `<FinalCTA>` renders exactly one control by design — site spec §19 forbids
 *    competing buttons there — and that rule has now been held four times
 *    (`/industries` §13, `/how-it-works` §16, `/about` §18, and the five detail
 *    pages). The same resolution is used here: the destination moves to the
 *    hero as the secondary action. That is also load-bearing rather than
 *    decorative — §15 names `/how-it-works` as a page this hub must link to, and
 *    the hero's secondary action is its only occurrence in the page body.
 *
 * 2. §2 gives the hero four things — eyebrow, H1, supporting text and ONE
 *    primary CTA. `<ServicesHero>` takes a required secondary action and every
 *    other hub page passes one, so the hero carries `How It Works →` as well.
 *    That is not a fifth invented element: it is the destination §11 named and
 *    §15 listed, and it is the string `/industries`, `/about` and `/faq` all use.
 *
 * ── NO FABRICATED METADATA ─────────────────────────────────────────────────
 * §6 and §14 forbid, by name: author names, reading statistics, view counts,
 * comment counts, publication dates, "Coming soon" and "we have no articles
 * yet". The article records carry those fields as `null` (see
 * `insights-articles.js`) and the card renders no markup for them, so there is
 * nothing to fake and nothing to remove later. The count line reports how many
 * articles the library holds — §14 states plainly that the initial twelve cards
 * ARE the planned content library, so the number is a count of what is on the
 * page, not a statistic about the business.
 *
 * ── PAGINATION IS AN ENHANCEMENT, NOT A DEPENDENCY ─────────────────────────
 * The server renders all twelve cards. The script in `InsightsDirectory.astro`
 * then shows one page of them at a time and builds the controls, which do not
 * appear at all while the library fits on a single page — so with today's twelve
 * articles against a page size of twelve, the control band is hidden, and a
 * thirteenth article is what makes it appear.
 *
 * With scripting off nothing is hidden and the whole library is on the page:
 * the honest fallback, and the one a crawler sees. `pageSize` and the control
 * words live here rather than in the script so that the page and its gate read
 * the same strings — see the tokens each template accepts.
 * ---------------------------------------------------------------------------
 */

import { insightArticles } from './insights-articles.js';
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
  title: 'Sourcing Insights and Guides | SOURDEN',
  description:
    'Practical guides, sourcing knowledge and insights to help you make better decisions when buying from China.',
};

/** Trail BELOW "Home" — `<Breadcrumbs>` prepends that. The last crumb has no href. */
export const breadcrumbs = [{ label: 'Insights' }];

/* ===========================================================================
   §2 — HERO
   ---------------------------------------------------------------------------
   The data is unchanged since the page shipped: the brief's four elements plus
   the §11 secondary action. What changed on 2026-10-02 is the PRESENTATION —
   the owner asked the hero photograph back as a full-bleed background with
   this copy overlaid on it, a named override of §2's "Do not make the hero
   overly large". The slot (`insightsHero`) had been deleted rather than left
   unused when the hero went text-only; its re-addition, and the full history,
   live in `media.js`. The device itself is `InsightsHero.astro` — not
   `ServicesHero`, whose split-column shape this page no longer renders.
   =========================================================================== */

export const hero = {
  eyebrow: 'INSIGHTS',
  title: 'Practical knowledge for sourcing from China.',
  description:
    'Guides, sourcing knowledge and practical insights to help you find suppliers, evaluate options and manage purchasing from China with greater clarity.',
  /** The site-wide primary action, declared once in `site.js`. */
  primaryCta,
  /**
   * §11's secondary ("How It Works →"), placed here because `<FinalCTA>` renders
   * one control — see the header. §15 also names `/how-it-works` as a page the
   * hub should link to, and this is where that link lives.
   */
  secondaryCta: { label: 'How It Works', href: '/how-it-works' },
};

/* ===========================================================================
   §5 — ARTICLE DIRECTORY
   =========================================================================== */

export const directory = {
  eyebrow: 'LATEST INSIGHTS',
  title: 'Useful knowledge, without the noise.',
  description:
    "We focus on the practical side of sourcing — the questions that matter when you're actually trying to find, buy and move products from China.",
  /**
   * 〔added〕 §6 requires a "read link" on every card but does not word one. This
   * is the wording the directory was designed with, and it lives here rather
   * than in `InsightCard.astro` because every visible word on the site lives in
   * a data file — a component that types its own copy is how one control ends up
   * with two wordings.
   */
  readLabel: 'Read Article',
  /** Order is display order — see `insights-articles.js`. */
  articles: insightArticles,

  /**
   * Paging, and every word the paging controls can print.
   *
   * 〔added〕 The brief specifies neither a page size nor any control label, and
   * §12 only asks that the structure make future articles easy to add. Twelve per
   * page is the number the project's directory prototype settled on, and it is
   * also the size of the whole library today — which is why no control appears
   * until a thirteenth article exists.
   *
   * The templates carry tokens because the same three sentences are produced
   * twice: once here at build time for the state the page ships in, and once in
   * the browser when the visitor changes page. `{count}` / `{shown}` / `{total}`
   * are substituted with numbers by both. Keeping the words here rather than in
   * the script is what stops the two renderers from drifting into two different
   * sentences for the same state.
   *
   * `countOne` exists so that a one-article library cannot print "1 articles".
   * It is unreachable today and stays because the day it becomes reachable is
   * the day a wrong plural would be published.
   */
  paging: {
    pageSize: 12,
    /** Accessible name for the control band. */
    navLabel: 'Insights pagination',
    prev: '← Prev',
    next: 'Next →',
    /** Printed between distant page numbers, and inert. */
    gap: '…',
    /** Accessible name for each page number. `{n}` is the page. */
    pageLabel: 'Page {n}',
    /** `{count}` — the library fits on one page. */
    countMany: '{count} articles',
    /** The one-article form of `countMany`. */
    countOne: '1 article',
    /** `{shown}` / `{total}` — the library is longer than one page. */
    countPaged: 'Showing {shown} of {total} articles',
  },
};

/* ===========================================================================
   THE BANDS
   ---------------------------------------------------------------------------
   Order and tones live here so the composition is data, not markup — the
   architecture `/industries` and `/about` use. `type` selects the device in the
   route; an unknown type throws at build time rather than rendering an empty
   band.

   Two bands: the directory, then §10. Tones alternate ivory/white against the
   hero, which is ivory itself (`.sec-hero`).
   =========================================================================== */

export const sections = [
  {
    type: 'directory',
    tone: 'white',
    titleId: 'in-directory',
    directory,
  },

  /* ---- §10 CONNECTION TO SERVICES --------------------------------------- */
  {
    type: 'linkRows',
    tone: 'ivory',
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
