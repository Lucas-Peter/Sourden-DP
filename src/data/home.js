/**
 * SOURDEN — HOMEPAGE COPY
 * ---------------------------------------------------------------------------
 * Hero content and page-level SEO values for `/`.
 *
 * Everything editable about the homepage hero lives here rather than in markup.
 * The three stanzas and their line breaks are intentional (spec §7) — do not
 * collapse `lines` into a single string, and do not remove the blank stanzas.
 * (On desktop, CSS joins a stanza's lines back onto one line — see Hero.astro
 * / home.css — but the DATA keeps the two-line form, because small screens
 * still need the five mandated breaks.)
 * ---------------------------------------------------------------------------
 */

import { primaryCta } from './site.js';

export const homeMeta = {
  /** spec §26 */
  title: 'SOURDEN | China Sourcing. Done.',
  description:
    'SOURDEN helps businesses source products from China with supplier research, verification, purchasing, quality control and shipping.',
};

export const hero = {
  eyebrow: 'CHINA SOURCING. DONE.',

  /**
   * spec §7 — one H1, three visually separated stanzas. Each `lines` entry is
   * a hard line break on small screens; at desktop width CSS joins a stanza's
   * lines onto one line (Hero.astro wraps each in a `.bg-hero__line` span).
   * Reading the H1 end to end yields the exact spec §26 sentence:
   *   "Find the right suppliers. Manage the process. Get your products moving."
   */
  stanzas: [
    { lines: ['Find the right', 'suppliers.'] },
    { lines: ['Manage the process.'] },
    { lines: ['Get your products', 'moving.'] },
  ],

  /** spec §7 — measure capped at ~540px. */
  description:
    'SOURDEN helps businesses source products from China with supplier research, quotation, purchasing, quality control and shipping — handled by one experienced partner.',

  primaryCta: {
    label: primaryCta.label,
    href: primaryCta.href,
  },

  secondaryCta: {
    label: 'How It Works',
    href: '/how-it-works',
  },

  /**
   * The hero's full-bleed background photograph. No `caption`: a photograph
   * behind the copy has no figure to caption (the caption went with the old
   * split-column frame), and the slot's `alt` is empty because the image is
   * decorative there — see `media.js`.
   */
  image: {
    key: 'heroSourcing',
  },
};

/**
 * §19 — the closing band.
 *
 * This copy used to be hard-coded inside `FinalCTA.astro`, which is the one
 * place in the project where editable text lived in markup. It moved here when
 * `/services` started rendering the same band with its own wording: the
 * component now takes the copy as props, so both pages read theirs from data
 * and neither can silently inherit the other's.
 */
export const finalCta = {
  eyebrow: 'START WITH A REQUEST',
  title: 'Ready to source from China?',
  /** "\n" is a deliberate line break (see SectionHeader for the convention). */
  description: 'Tell us what you’re looking for.\nWe’ll take it from there.',
  cta: { ...primaryCta },
};
