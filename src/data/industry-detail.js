/**
 * SOURDEN — INDUSTRY DETAIL PAGES: SHARED ARCHITECTURE
 * ---------------------------------------------------------------------------
 * The nine `/industries/<slug>` category pages are one page architecture with
 * nine sets of copy. This file owns WHICH pages exist; each page's words live
 * in its own `industry-<slug>.js` file, and everything derived from the category
 * or service registries lives in `industry-links.js`.
 *
 * ── WHY ONE ARCHITECTURE ───────────────────────────────────────────────────
 * The brief is explicit: "Each page should use the same overall content
 * architecture, but the actual content must be customized for that industry"
 * and "Do NOT simply replace the industry name in the same generic text." Those
 * two requirements pull against each other, and the architecture is how both
 * are met: the SECTION VOCABULARY and their order are fixed, so the nine pages
 * are one section of the site; every sentence inside those sections is written
 * for its own category.
 *
 * Adding a tenth category is a data file plus one line in `detailPages` — no new
 * markup and no new CSS.
 *
 * ── THE SECTION VOCABULARY ─────────────────────────────────────────────────
 * Mapped to the brief's eleven numbered sections. The hero, the FAQ and the
 * closing CTA are NOT in the `sections` array — they are fixed devices that own
 * their own place on the page, exactly as on the service pages; the FAQ is a
 * section type here only so it keeps the brief's order.
 *
 *   checkList   eyebrow, H2, lead, N short fragments, optional note and foot
 *               → §2 "What We Can Source", §5 "What We Can Help With",
 *                 §6 "Sourcing Considerations", §9 "Who This Category Can
 *                 Work For"
 *   reviewGrid  eyebrow, H2, N named topics, each with a sentence
 *               → §3 "What Buyers Usually Need"
 *   sequence    eyebrow, H2, N unnumbered stages read downwards
 *               → §4 "How We Approach This Category"
 *   process     eyebrow, H2, N numbered stages on the ink rail
 *               → §7 "Typical Sourcing Process"
 *   rows        eyebrow, H2, N rows, optionally numbered and optionally links
 *               → §8 "Related Services"
 *   nav         eyebrow, H2, the nine categories with this page marked
 *               → §16 "Industry page navigation"
 *   faq         eyebrow, H2, the disclosure group  → §10
 *
 * Each section is `{ type, tone, … }`. `tone` is required on every section this
 * file does not fix: `'ivory' | 'white' | 'ink'`. The hero is always ivory and
 * the rail is always ink, because those two devices own their own ground;
 * everything else states its tone so the page's rhythm is visible in the data
 * rather than buried in a stylesheet.
 *
 * ── WHY THE SECTIONS ARE IN THIS ORDER ────────────────────────────────────
 * The brief's order is kept, with one deliberate insertion: the internal
 * navigation (§16) sits between §9 and the FAQ rather than after the closing
 * CTA, so the FAQ and the request band still close the page. Putting a
 * cross-link band between the last objection-handler and the final action is
 * how a page loses its ending.
 *
 * ── WHAT A PAGE FILE MUST NOT DECLARE ─────────────────────────────────────
 *   · The category's name, number, slug or href — read from `industries.js`
 *     through `industryForSlug()` / `industryNavFor()`.
 *   · Service names, numbers or hrefs — read from `services.js` through
 *     `relatedServices`.
 *   · The primary CTA. Every page's primary action is `primaryCta` from
 *     `site.js` ("Start a Sourcing Request" is the one primary action
 *     site-wide). The secondary hero action is `secondaryCta` from
 *     `industry-links.js`. Declaring either per page is how nine pages end up
 *     with four different labels.
 *
 * ── CLAIMS RULE ────────────────────────────────────────────────────────────
 * Nothing in a page file may assert a client count, a supplier count, years in
 * business, a success rate, an inspection statistic, a testimonial, a
 * certification, a case study, a logo or an award; nothing may promise
 * guaranteed quality, guaranteed compliance, guaranteed delivery, the lowest
 * price, guaranteed savings or "we can source anything".
 *
 * The brief adds FOUR per-category constraints, which are met by the wording of
 * the page itself rather than by a shared caveat:
 *   · Beauty & Personal Care, Pet Supplies — no medical, therapeutic,
 *     veterinary, cosmetic-regulatory or safety-certification claim.
 *   · Electronics & Accessories, Industrial Products — sourcing is never
 *     described as certification, technical validation or regulatory approval.
 *   · Sports & Outdoors — no safety claim for products where safety
 *     certification may apply.
 *   · Apparel, Footwear & Bags — no counterfeit or trademark-infringing
 *     example, and no brand named.
 *
 * ── WHERE A SLUG IS NOT FOUND ──────────────────────────────────────────────
 * A slug with no page file still renders its reservation page — the routes were
 * published before the content existed and every link to them is live. A slug
 * *typo* inside a page file throws at build time instead of rendering a section
 * with `undefined` in it.
 * ---------------------------------------------------------------------------
 */

import { consumerProducts } from './industry-consumer-products.js';
import { beautyPersonalCare } from './industry-beauty-personal-care.js';
import { homeLiving } from './industry-home-living.js';
import { packaging } from './industry-packaging.js';
import { electronicsAccessories } from './industry-electronics-accessories.js';
import { industrialProducts } from './industry-industrial-products.js';
import { sportsOutdoors } from './industry-sports-outdoors.js';
import { petSupplies } from './industry-pet-supplies.js';
import { apparelFootwearBags } from './industry-apparel-footwear-bags.js';

/* ===========================================================================
   RE-EXPORTED so a page shell has one import.
   Defined in `industry-links.js` because page files need them too, and a page
   file importing them from here would close an import cycle — see the header
   of that file for what that costs.
   =========================================================================== */

export {
  industryBreadcrumbs,
  industryForSlug,
  industryNavFor,
  primaryCta,
  relatedServices,
  requireIndustry,
  secondaryCta,
} from './industry-links.js';

/* ===========================================================================
   THE REGISTRY
   ---------------------------------------------------------------------------
   One line per built page, in registry order. Every slug here is subtracted
   from the noindex list by `src/data/routes.js`, which is what moves its route
   into sitemap.xml — publishing a page is adding a line, not editing two files.
   =========================================================================== */

export const industryDetailPages = {
  'consumer-products': consumerProducts,
  'beauty-personal-care': beautyPersonalCare,
  'home-living': homeLiving,
  packaging,
  'electronics-accessories': electronicsAccessories,
  'industrial-products': industrialProducts,
  'sports-outdoors': sportsOutdoors,
  'pet-supplies': petSupplies,
  'apparel-footwear-bags': apparelFootwearBags,
};

/** @param {string} slug */
export function industryPageFor(slug) {
  return industryDetailPages[slug] ?? null;
}

/** Slugs whose category page has been written. */
const builtIndustrySlugs = Object.keys(industryDetailPages);

/**
 * Root-relative paths of the built category pages.
 * `src/data/routes.js` subtracts these from the noindex list, which is what
 * moves them into sitemap.xml.
 */
export const builtIndustryPaths = builtIndustrySlugs.map((slug) => `/industries/${slug}`);
