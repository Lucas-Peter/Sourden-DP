/**
 * SOURDEN — PROCESS DATA
 * ---------------------------------------------------------------------------
 * Three distinct devices, three distinct label vocabularies. They must not be
 * merged or auto-generated from one another: the spec deliberately uses
 * slightly different wording in each, and collapsing them would produce a
 * repetitive page.
 *
 *   capabilities  §8  Short nouns  — dark strip, 96px, no icons, no detail
 *   whatWeDo      §9  Editorial vertical list of the sourcing workflow
 *   howItWorks    §11 Customer-facing five-step timeline
 * ---------------------------------------------------------------------------
 */

/** §8 — Dark capabilities strip. Five items, thin dividers, brass numbers. */
export const capabilities = [
  { number: '01', label: 'Supplier Sourcing' },
  { number: '02', label: 'Factory Verification' },
  { number: '03', label: 'Purchasing' },
  { number: '04', label: 'Quality Control' },
  { number: '05', label: 'Global Shipping' },
];

/** §9 — "What We Do" section copy + editorial process list. */
export const whatWeDoIntro = {
  eyebrow: 'SOURCING, SIMPLIFIED',
  title: 'Sourcing is more than finding a supplier.',
  supporting:
    'Finding a supplier is only the beginning. We help you navigate the process from supplier research and quotation to purchasing, quality control and shipping.',
};

export const whatWeDoSteps = [
  { number: '01', title: 'Supplier Research' },
  { number: '02', title: 'Quotation' },
  { number: '03', title: 'Purchasing' },
  { number: '04', title: 'Quality Control' },
  { number: '05', title: 'Shipping' },
];

/** §11 — "How It Works" five-step timeline. */
export const howItWorksIntro = {
  eyebrow: 'HOW IT WORKS',
  title: 'FROM NEED TO DONE.',
  supporting:
    'A straightforward sourcing process, from your first request to final shipment.',
  /** Small visual phrase under the timeline. `DONE` renders in brass. */
  visualPhrase: { from: 'FROM NEED', to: 'DONE' },
};

export const howItWorksSteps = [
  {
    number: '01',
    title: 'Tell Us What You Need',
    description:
      'Share your product, specifications, quantity, target price and destination.',
  },
  {
    number: '02',
    title: 'Find Suitable Suppliers',
    description:
      'Research suppliers that match your requirements and sourcing goals.',
  },
  {
    number: '03',
    title: 'Verify & Compare',
    description:
      'Compare capabilities, quotations, MOQ, lead times and other relevant factors.',
  },
  {
    number: '04',
    title: 'Manage the Order',
    description:
      'Coordinate purchasing, supplier communication, production and order progress.',
  },
  {
    number: '05',
    title: 'Inspect & Ship',
    description: 'Arrange quality checks and coordinate shipping from China.',
  },
];
