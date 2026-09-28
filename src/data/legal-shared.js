/**
 * SOURDEN — FACTS SHARED BY THE TWO LEGAL DOCUMENTS
 * ---------------------------------------------------------------------------
 * A leaf module for the legal pair: it imports nothing at all, so both page
 * files may import it without creating a cycle. It deliberately does NOT live in
 * `legal-page.js`, which imports both page files — a constant declared there and
 * read by a page file would be a cycle, and a `const` reached before its
 * declaration throws `Cannot access 'X' before initialization` at build time
 * with a message pointing at the wrong file. `service-links.js` is the same
 * arrangement for the service family, for the same reason.
 *
 * ── WHY THE DATE IS A WRITTEN FACT AND NOT THE BUILD DATE ──────────────────
 * "Last updated" is a statement about the document, not about the deploy. If it
 * were derived from the build it would silently claim the policy had been
 * revised every time the site was rebuilt — including for a change to an
 * unrelated page — which is the one thing a "last updated" line must never say.
 * So it is declared here, once, and both documents carry the same date by
 * construction (the brief requires exactly that: both pages use September 2026
 * as the initial date, and requires the real current month rather than an
 * invented earlier one — September 2026 is when these documents were written).
 *
 * TO REVISE EITHER DOCUMENT: change the month below. Both documents move
 * together, which is the intent — the pair is meant to read as one set.
 * ---------------------------------------------------------------------------
 */

/** The month the current text of both legal documents was last revised. */
export const LEGAL_LAST_UPDATED = 'September 2026';

/**
 * The complete metadata line, label included, so the two documents cannot
 * disagree about its wording — only about nothing at all.
 */
export const legalUpdatedLine = `Last updated: ${LEGAL_LAST_UPDATED}`;
