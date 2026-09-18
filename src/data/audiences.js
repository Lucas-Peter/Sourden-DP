/**
 * SOURDEN — WHO WE'RE BUILT FOR
 * ---------------------------------------------------------------------------
 * Spec §13 (audience rows), §14 (no-fixed-MOQ block), §15 (grow with the
 * customer progression).
 *
 * ── MOQ WORDING RULE (spec §14) — READ BEFORE EDITING ──────────────────────
 * The MOQ copy may NEVER become any of the following:
 *   ✗ "No MOQ on all products."
 *   ✗ "MOQ: 0" / "No minimum order."
 *   ✗ Anything implying that every factory accepts small orders.
 *
 * The only thing Sourden can truthfully state is that *Sourden itself* does
 * not impose a fixed MOQ. Factory and product MOQs are set by the supplier and
 * still apply. The approved copy below is worded to carry exactly that
 * meaning — keep it that way.
 * ───────────────────────────────────────────────────────────────────────────
 */

export const audienceIntro = {
  eyebrow: 'WHO WE’RE BUILT FOR',
  /** Uppercase statement heading — must be one of the most visually prominent
   *  lines on the homepage (spec §13). */
  title: 'SOURCING WITHOUT THE BARRIERS.',
  /** Large editorial statement — visually prominent. */
  statement:
    'You don’t need a large purchasing team, huge order volumes or years of experience in China to source good products.',
};

export const audienceGroups = [
  {
    number: '01',
    title: 'Small Wholesalers',
    description:
      'Looking for reliable products without committing to large order volumes.',
  },
  {
    number: '02',
    title: 'Independent Retailers',
    description:
      'Need a better source but don’t have a dedicated purchasing team.',
  },
  {
    number: '03',
    title: 'Local Shops',
    description:
      'Want to access Chinese suppliers without navigating the sourcing process alone.',
  },
  {
    number: '04',
    title: 'Growing Brands',
    description:
      'Ready to build a more reliable supply chain as your business grows.',
  },
];

/** §14 — distinct editorial block. Approved wording only. */
export const scaleBlock = {
  eyebrow: 'SOURCE AT YOUR SCALE.',
  copy: 'We don’t impose our own minimum order quantity. We’ll work with you to find sourcing options that fit your current stage and requirements.',
};

/** §15 — "Start where you are." progression. Keep the visual simple: no
 *  growth charts, no cartoon graphics. */
export const growBlock = {
  title: 'START WHERE YOU ARE.',
  supporting:
    'Your sourcing needs change as your business grows. Sourden is built to grow with you.',
  progression: [
    'FIRST ORDER',
    'TEST THE MARKET',
    'REPEAT ORDERS',
    'GROWING VOLUME',
    'SCALE SOURCING',
  ],
};
