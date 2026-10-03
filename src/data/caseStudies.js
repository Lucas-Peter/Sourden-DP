/**
 * SOURDEN — CASE STUDIES (homepage section)
 * ---------------------------------------------------------------------------
 * HOMEPAGE-ONLY MODULE (2026-10-02 decision): three representative sourcing
 * scenarios shown on the homepage. There are no /case-studies pages — this
 * section is the whole feature, and no entry links anywhere.
 *
 * ── THE HARD RULE ──────────────────────────────────────────────────────────
 * Never fabricate any of the following, for any reason, to make the section
 * look fuller:
 *   ✗ customer names        ✗ company logos        ✗ project values
 *   ✗ savings percentages   ✗ delivery improvements ✗ order quantities
 *   ✗ customer testimonials ✗ success rates        ✗ project counts
 * These entries describe the KIND of requirement SOURDEN handles. They are
 * not customer projects: no market, no figures, no outcomes, no quotes.
 * ───────────────────────────────────────────────────────────────────────────
 */

/**
 * @typedef {Object} CaseStudy
 * @property {string}   number   Display index, e.g. '01'.
 * @property {string}   title    Scenario title.
 * @property {string}   summary  One sentence: what defines this requirement.
 * @property {Array<{key: string, caption: string|null}>} images
 * @property {string[]} scope    Capability tag shown on the card (one each).
 */

/** @type {CaseStudy} — featured entry (the large card). */
export const featuredCaseStudy = {
  number: '01',
  title: 'World Cup Jerseys',
  summary:
    'Time-sensitive sports products sourced and coordinated around a seasonal selling window.',
  images: [{ key: 'caseStudyWorldCupJerseys', caption: null }],
  scope: ['Seasonal Sourcing'],
};

/** @type {CaseStudy[]} — secondary entries (the two smaller cards). */
export const secondaryCaseStudies = [
  {
    number: '02',
    title: 'Custom Logo Products',
    summary: 'Standard products customized with branding and packaging requirements.',
    images: [{ key: 'caseStudyCustomLogoProducts', caption: null }],
    scope: ['Custom Sourcing'],
  },
  {
    number: '03',
    title: 'Multi-Product Shipment',
    summary: 'Multiple products and suppliers coordinated into one organized shipment.',
    images: [{ key: 'caseStudyMultiProductShipment', caption: null }],
    scope: ['Consolidated Sourcing'],
  },
];

/** Section header copy. */
export const caseStudiesIntro = {
  eyebrow: 'CASE STUDIES',
  title: 'Real sourcing. Real requirements.',
  supporting: [
    'Every sourcing project starts with a specific requirement.',
    'From product research and supplier selection to purchasing, quality control and shipping, we work through the details that turn a sourcing request into a workable order.',
  ],
  /** Honest framing: scenarios, not customer projects (spec §39, §43). */
  notice:
    'Typical sourcing scenarios, shown as examples of how a requirement becomes a workable order.',
};
