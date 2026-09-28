/**
 * SOURDEN — LEGAL PAGE FAMILY  (/privacy-policy, /terms-of-service)
 * ---------------------------------------------------------------------------
 * The registry for the site's two legal documents, and the one place that
 * records why they are built the way they are.
 *
 * ── STATUS: THE COPY DOES NOT EXIST YET, AND THAT IS THE POINT ─────────────
 * Both routes currently render the reservation shell (`ReservationPage`), which
 * is the site's honest state for "this route exists and its content is not
 * written". They publish a real SEO title, a real H1 and a plain statement of
 * what is still to come, carry `noindex`, and are absent from sitemap.xml.
 *
 * The brief these pages were meant to be written from — the file named
 * `SOURDEN Privacy Policy & Terms of Service.md` — contains the `/services`
 * brief instead. It is byte-for-byte identical to `SOURDEN service.md` (16,561
 * bytes, both), so the file was copied and its content was not replaced, and no
 * other legal brief exists anywhere in the project directory. Rather than invent
 * a legal document, the structure was built and the copy was left out.
 *
 * ── WHAT IS ALREADY DONE, AND WHAT ONE EDIT REMAINS ────────────────────────
 * Done: the device (`src/components/legal/LegalDocument.astro`), its stylesheet
 * (`src/styles/legal.css`), the shape below, and both routes wired through the
 * site's one-route-two-branches pattern.
 *
 * Remaining: write the page object in `legal-privacy.js` / `legal-terms.js`.
 * While it is `null` the route renders the reservation shell; the moment it is a
 * real object the route renders the document, and the route leaves `noindex`
 * and enters sitemap.xml **by itself** — because the page's own meta and
 * `sitemap.xml` are both derived from the same condition (`page !== null`, via
 * `builtLegalPaths` below). There is no second edit to forget.
 *
 * ── THE SHAPE A PAGE MODULE MUST PRODUCE ──────────────────────────────────
 * ```js
 * export const page = {
 *   meta: { title, description },                    // <BaseLayout>
 *   breadcrumbs: [{ label: 'Privacy Policy' }],      // trail BELOW "Home"
 *   hero: { eyebrow, title, description },           // the H1 is `hero.title`
 *   sections: [                                       // the clauses
 *     { anchor, heading, paragraphs: [ … ], items: [ … ]? },
 *   ],
 *   finalCta: { eyebrow, title, description, cta },   // <FinalCTA>
 * };
 * ```
 * `sections` is the only part whose content cannot be inferred. The number of
 * each clause is generated from its position in the list, so inserting one in
 * the middle renumbers the rest with no data edit — do NOT put a number in
 * `heading`.
 *
 * ── FOUR CLAUSE TYPES THAT ARE DELIBERATELY ABSENT ────────────────────────
 * These four carry facts about the business that only the business can supply,
 * and a fabricated one is a statement a reader can check and find false — which
 * the site's honesty rule forbids everywhere and which is worse on a legal page
 * than anywhere else. The owner's decision (2026-09-27) was to leave them out
 * rather than fill them with placeholders, so the device has no slot for them:
 *
 *   · the trading entity name (who the policy is with)
 *   · governing law / jurisdiction / venue for disputes
 *   · an effective or "last updated" date
 *   · data retention periods
 *
 * If any of these is ever to be added, it needs the real fact first, and the
 * device needs a slot for it — not a guess.
 *
 * ── WHAT THE COPY CAN BE BUILT FROM: THE SITE'S ACTUAL DATA PRACTICE ──────
 * Recorded here because it is the input both documents need, and because it was
 * established by reading the code rather than by assuming:
 *
 *   1. The only information the site collects is what a visitor types into the
 *      sourcing request form (`/sourcing-request`) or sends by email. The form's
 *      fields are: name, email, country, city/postcode, website, WhatsApp,
 *      business type, product name, specifications, quantity, target price,
 *      currency, customization, stage, order frequency, preferred contact
 *      method, additional information, and any reference files attached.
 *
 *   2. Reference files are uploaded one at a time to `POST /api/upload`. The
 *      backend does not exist yet — `functions/` is a placeholder and the Worker
 *      serves static assets only — so today nothing is stored server-side at all
 *      and the form fails honestly rather than pretending to succeed (see
 *      `functions/README.md`).
 *
 *   3. There is NO analytics provider, NO advertising pixel, NO social embed,
 *      and the site's own code sets no cookie and writes nothing to local or
 *      session storage — the upload field holds a chosen file in memory only,
 *      and says so. `src/lib/inquiry.ts` has a `track()` seam and states in as
 *      many words that no provider is installed: it calls nothing unless a
 *      global `gtag` already exists, which on this site it never does. (This is
 *      a claim about the SITE's code. Cloudflare's edge may set its own
 *      infrastructure cookie regardless of what the site ships, so any cookie
 *      clause written later has to be worded as "the site sets none", not as
 *      "this website sets none".)
 *
 *   4. Cloudflare Turnstile is the ONE third-party request the site can make,
 *      and only when `PUBLIC_TURNSTILE_SITE_KEY` is configured at build time.
 *      With no key the component renders nothing and loads nothing.
 *
 *   5. Hosting is Cloudflare — the Worker `sourden-dp`, serving the built site
 *      as static assets from the edge (`wrangler.toml` has no script at all).
 *      The source is on GitHub, which is where the build reads it from.
 *
 *   6. The published contact channel is service@sourden.com, declared once in
 *      `site.js`. There is no telephone contact route and no postal address, so
 *      neither may be written into either document.
 *
 * Anything beyond the above is not established, and a legal document is the
 * worst place on the site to guess.
 * ---------------------------------------------------------------------------
 */

import { page as privacy } from './legal-privacy.js';
import { page as terms } from './legal-terms.js';

/**
 * The two legal documents by route. A path maps to the finished page object, or
 * to `null` while its copy is unwritten.
 * @type {Record<string, Record<string, unknown> | null>}
 */
export const legalPages = {
  '/privacy-policy': privacy,
  '/terms-of-service': terms,
};

/**
 * The legal routes whose copy exists, and which are therefore indexable and
 * listed in sitemap.xml.
 *
 * `routes.js` subtracts this from `noindexPaths`, and each route's own branch
 * reads the same `null`-or-not condition to decide whether to render the
 * document or the reservation shell. Both sides derive from one fact, so
 * `npm run audit`'s "marked noindex but listed in sitemap" and "indexable but
 * absent from sitemap.xml" checks cannot be made to disagree by publishing a
 * document. This mirrors how `builtDetailPaths` and `builtIndustryPaths` work:
 * the registry is asked, rather than a second list being kept in step.
 *
 * It is empty today, which is why adding the whole family changes no existing
 * page's output by a single byte.
 * @type {string[]}
 */
export const builtLegalPaths = Object.entries(legalPages)
  .filter(([, page]) => page !== null)
  .map(([path]) => path);
