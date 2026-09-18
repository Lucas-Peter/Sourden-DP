/**
 * SOURDEN — CASE STUDIES
 * ---------------------------------------------------------------------------
 * Spec §17. This is a PROOF section, not a marketing-statistics section.
 *
 * ── THE HARD RULE ──────────────────────────────────────────────────────────
 * Never fabricate any of the following, for any reason, to make the section
 * look fuller:
 *   ✗ customer names        ✗ company logos        ✗ project values
 *   ✗ savings percentages   ✗ delivery improvements ✗ order quantities
 *   ✗ customer testimonials ✗ success rates        ✗ project counts
 *
 * Every field below is `null` until a real, customer-cleared fact exists. The
 * component architecture is built now so real cases can be dropped in without
 * touching a single template. `null` renders as an explicit placeholder — it
 * never renders as invented content.
 * ───────────────────────────────────────────────────────────────────────────
 *
 * Field contract (spec §17):
 *   category · title · market · summary · images · requirement · sourcing
 *   · verification · coordination · qualityControl · shipping · slug
 */

/**
 * @typedef {Object} CaseStudy
 * @property {string}      number       Display index, e.g. '01'.
 * @property {string|null} slug         URL segment under /case-studies/.
 * @property {string|null} category     Top-level classification.
 * @property {string}      title        Project title.
 * @property {string|null} market       Destination market, e.g. 'Canada'.
 * @property {string|null} summary      One or two sentences. Must be factual.
 * @property {Array<{key: string, caption: string|null}>} images
 * @property {string|null} requirement  What the customer needed.
 * @property {string|null} sourcing     How suppliers were researched.
 * @property {string|null} verification How suppliers were assessed.
 * @property {string|null} coordination How the order was managed.
 * @property {string|null} qualityControl What was checked before shipment.
 * @property {string|null} shipping     How the goods were shipped.
 * @property {string[]}    scope        Short scope tags shown on the card.
 * @property {boolean}     isPlaceholder True until real information is added.
 */

/** @type {CaseStudy} — spec §17: spec's featured example. Title and market are
 *  given by the brief; every other field is intentionally empty. */
export const featuredCaseStudy = {
  number: '01',
  slug: 'custom-commercial-christmas-tree',
  category: null,
  title: 'Custom Commercial Christmas Tree',
  market: 'Canada',
  summary: null,
  images: [{ key: 'caseStudyChristmasTree', caption: null }],
  requirement: null,
  sourcing: null,
  verification: null,
  coordination: null,
  qualityControl: null,
  shipping: null,
  scope: [
    'Factory Sourcing',
    'Custom Requirements',
    'Quality Control',
    'Shipping',
  ],
  isPlaceholder: true,
};

/** @type {CaseStudy[]} — secondary entries. Item 03 is a reserved slot, not a
 *  fabricated project (spec §17: "Do not fabricate a third project"). */
export const secondaryCaseStudies = [
  {
    number: '02',
    slug: 'sports-jerseys',
    category: null,
    title: 'Sports Jerseys',
    market: 'Canada',
    summary: null,
    images: [{ key: 'caseStudySportsJerseys', caption: null }],
    requirement: null,
    sourcing: null,
    verification: null,
    coordination: null,
    qualityControl: null,
    shipping: null,
    scope: [],
    isPlaceholder: true,
  },
  {
    number: '03',
    slug: null,
    category: null,
    title: 'Case Study to Be Added',
    market: null,
    summary: null,
    images: [],
    requirement: null,
    sourcing: null,
    verification: null,
    coordination: null,
    qualityControl: null,
    shipping: null,
    scope: [],
    isPlaceholder: true,
    /** Renders as a reserved, non-linked slot. */
    reservedSlot: true,
  },
];

export const allCaseStudies = [featuredCaseStudy, ...secondaryCaseStudies];

/** §17 section header copy. */
export const caseStudiesIntro = {
  eyebrow: 'CASE STUDIES',
  title: 'Real sourcing. Real requirements.',
  supporting: [
    'Every sourcing project starts with a specific requirement.',
    'From product research and supplier selection to purchasing, quality control and shipping, we work through the details that turn a sourcing request into a workable order.',
  ],
  /** Always visible while every entry is still a placeholder (spec §39). */
  placeholderNotice:
    'Project details are being prepared. Each case is published only once the real requirement, process and outcome are confirmed.',
};
