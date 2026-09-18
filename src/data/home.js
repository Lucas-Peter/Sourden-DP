/**
 * SOURDEN — HOMEPAGE COPY
 * ---------------------------------------------------------------------------
 * Hero content and page-level SEO values for `/`.
 *
 * Everything editable about the homepage hero lives here rather than in markup.
 * The three stanzas and their line breaks are intentional (spec §7) — do not
 * collapse `lines` into a single string, and do not remove the blank stanzas.
 * ---------------------------------------------------------------------------
 */

import { primaryCta } from './site.js';

export const homeMeta = {
  /** spec §26 */
  title: 'Sourden | China Sourcing. Done.',
  description:
    'Sourden helps businesses source products from China with supplier research, verification, purchasing, quality control and shipping.',
};

export const hero = {
  eyebrow: 'CHINA SOURCING. DONE.',

  /**
   * spec §7 — one H1, three visually separated stanzas. Each `lines` entry is
   * rendered as a hard line break inside the stanza. Reading the H1 end to end
   * yields the exact spec §26 sentence:
   *   "Find the right suppliers. Manage the process. Get your products moving."
   */
  stanzas: [
    { lines: ['Find the right', 'suppliers.'] },
    { lines: ['Manage the process.'] },
    { lines: ['Get your products', 'moving.'] },
  ],

  /** spec §7 — measure capped at ~540px. */
  description:
    'Sourden helps businesses source products from China with supplier research, quotation, purchasing, quality control and shipping — handled by one experienced partner.',

  primaryCta: {
    label: primaryCta.label,
    href: primaryCta.href,
  },

  secondaryCta: {
    label: 'How It Works',
    href: '/how-it-works',
  },

  image: {
    key: 'heroSourcing',
    /** Optional tiny editorial caption (spec §7). */
    caption: 'Sourcing in China',
  },
};
