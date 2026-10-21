/**
 * SOURDEN — PRODUCT COLLECTION: SOCCER JERSEYS
 * ---------------------------------------------------------------------------
 * The data file for `/products/apparel-footwear-bags/soccer-jerseys`. Its shape
 * is documented in `src/data/product-collections.js`; this file only supplies
 * the words and the
 * reference list. Every sentence here is written for THIS category — the brief
 * is explicit that a collection must not be the same text with the title
 * swapped, so the introduction, customization copy and SEO metadata below were
 * written for soccer jerseys, not for "a product".
 *
 * ── THE REFERENCE LIST ─────────────────────────────────────────────────────
 * Twelve styles, each `code` unique and stable. The code is the product's
 * identity: it survives re-sorting, re-pagination and future additions. The
 * order in this array is the catalogue order (by `sortOrder`), and the image
 * slots are registered in `media.js` under `soccerJersey01`…`soccerJersey12`.
 *
 * ── NO PRICE / STOCK / MOQ / LEAD TIME ─────────────────────────────────────
 * The cards show only what a sourcing buyer can point at: the garment, its
 * reference code, and one line on its construction. Nothing that could be read
 * as an offer, and no brand or club name anywhere (the Apparel constraint in
 * `product-collections.js`).
 * ---------------------------------------------------------------------------
 */

import { primaryCta } from './cta.js';
import { services } from './services.js';
import { industries } from './industries.js';

const serviceHref = (slug) => services.find((s) => s.slug === slug)?.href ?? '/services';
const industryHref = (slug) => industries.find((i) => i.slug === slug)?.href ?? '/industries';

export const soccerJerseys = {
  slug: 'soccer-jerseys',
  /** Parent category (大类) — a slug in `industries.js`. Drives the URL segment
   *  and the breadcrumb crumb above the collection. */
  industrySlug: 'apparel-footwear-bags',
  categoryName: 'Soccer Jerseys',
  seoTitle: 'Soccer Jerseys: Custom Sourcing from China | SOURDEN',
  metaDescription:
    'Source custom soccer jerseys from China — sublimation, name and number printing, team crests, fit and size runs to your specifications. Browse reference styles and request more.',
  cardDescription:
    'Custom match, training and fan jerseys — sublimated artwork, name and number printing, and team identity to your specification.',

  eyebrow: 'PRODUCT COLLECTION',
  h1: 'Soccer Jerseys.',

  introduction: {
    paragraphs: [
      'Soccer jerseys are one of the apparel categories we source most often — for clubs, school and academy programmes, fan merchandise and promotional runs. Almost every order is custom: colours, crests, names and numbers are produced to your artwork rather than picked from a stock catalogue.',
      'The reference styles below show the construction details that matter in this category — fabric weight and breathability, collar and sleeve finishes, how a number or a name sits on the back, how the panel seams run. Send us a design, a sample to match, or just a description, and we will work from there.',
    ],
  },

  customization: {
    eyebrow: 'CUSTOMIZATION',
    title: 'What can be customized',
    intro:
      'These are the choices a soccer-jersey order is usually built around. Each one is confirmed against your artwork and your target market before anything is produced.',
    options: [
      { label: 'Fabric', detail: 'Polyester mesh, interlock and moisture-wicking knits, in a range of weights.' },
      { label: 'Fit', detail: 'Slim, regular and youth cuts, plus women’s sizing on request.' },
      { label: 'Sleeves & collar', detail: 'Short or long sleeve; round, V or polo collar.' },
      { label: 'Colours', detail: 'Full sublimation allows any colourway; screen print suits solid panels.' },
      { label: 'Numbers & names', detail: 'Heat transfer, screen print, embroidery or sublimation.' },
      { label: 'Crests & logos', detail: 'Woven, embroidered or printed team crests and sponsor marks.' },
      { label: 'Sizes', detail: 'From youth to adult extended sizes, with size-set sampling.' },
      { label: 'Packaging', detail: 'Individual polybags, hangers or export cartons.' },
    ],
  },

  catalogNotice:
    'The styles shown are a partial reference set. We can source additional designs, colours and constructions on request — if you do not see what you need, describe it and we will look for it.',

  cta: {
    label: 'Request More Styles',
    href: primaryCta.href,
  },

  relatedLinks: [
    { label: 'Apparel, Footwear & Bags', href: industryHref('apparel-footwear-bags') },
    { label: 'Product Sourcing', href: serviceHref('product-sourcing') },
    { label: 'Quality Control', href: serviceHref('quality-control') },
    { label: 'Shipping from China', href: serviceHref('shipping-from-china') },
  ],

  catalog: {
    eyebrow: 'REFERENCE CATALOGUE',
    title: 'Product catalogue',
  },

  products: [
    {
      id: 'soccer-jersey-01',
      code: 'SJ-001',
      name: 'Round-Neck Training Jersey',
      imageKey: 'soccerJersey01',
      shortDescription: 'Plain breathable body with a taped round neck and contrast shoulder trim.',
      altText: 'Footballer in a plain royal-blue short-sleeve soccer jersey holding a ball on a pitch.',
      sortOrder: 1,
    },
    {
      id: 'soccer-jersey-02',
      code: 'SJ-002',
      name: 'Match Jersey with Name & Number',
      imageKey: 'soccerJersey02',
      shortDescription: 'Short-sleeve match jersey shown with a full name-and-number back print.',
      altText: 'White short-sleeve soccer jersey with a green name and number hanging on a garment rack.',
      sortOrder: 2,
    },
    {
      id: 'soccer-jersey-03',
      code: 'SJ-003',
      name: 'Full-Sublimation Camo Jersey',
      imageKey: 'soccerJersey03',
      shortDescription: 'All-over sublimated artwork, dyed into the fabric rather than printed on top.',
      altText: 'Front view of a red and black camouflage-pattern soccer jersey with the number 10.',
      sortOrder: 3,
    },
    {
      id: 'soccer-jersey-04',
      code: 'SJ-004',
      name: 'Sublimated Back-Print Detail',
      imageKey: 'soccerJersey04',
      shortDescription: 'A close-up of a name-and-number back print on a smooth knit face.',
      altText: 'Close-up of a printed name and number on the back of a royal-blue soccer jersey.',
      sortOrder: 4,
    },
    {
      id: 'soccer-jersey-05',
      code: 'SJ-005',
      name: 'Classic White Home Jersey',
      imageKey: 'soccerJersey05',
      shortDescription: 'White match jersey with a two-colour name and number across the back.',
      altText: 'Back view of a white soccer jersey with a player name and the number 8 printed in navy.',
      sortOrder: 5,
    },
    {
      id: 'soccer-jersey-06',
      code: 'SJ-006',
      name: 'Team-Identity Jersey',
      imageKey: 'soccerJersey06',
      shortDescription: 'Red short-sleeve jersey carrying a team name and number on the back.',
      altText: 'Back view of a red short-sleeve soccer jersey with a white team name and the number 22.',
      sortOrder: 6,
    },
    {
      id: 'soccer-jersey-07',
      code: 'SJ-007',
      name: 'Dark Patterned Jersey',
      imageKey: 'soccerJersey07',
      shortDescription: 'Charcoal patterned jersey with tonal artwork across the body and sleeves.',
      altText: 'Back view of a black and grey patterned soccer jersey with a white name and the number 18.',
      sortOrder: 7,
    },
    {
      id: 'soccer-jersey-08',
      code: 'SJ-008',
      name: 'Contrast-Sleeve Club Jersey',
      imageKey: 'soccerJersey08',
      shortDescription: 'Purple body with black raglan sleeves and a white number set.',
      altText: 'Back view of a purple soccer jersey with black sleeves, a white number 10 and a club name above.',
      sortOrder: 8,
    },
    {
      id: 'soccer-jersey-09',
      code: 'SJ-009',
      name: 'Sky-Blue Match Jersey',
      imageKey: 'soccerJersey09',
      shortDescription: 'Sky-blue jersey with a white number and a sponsor panel below the back neck.',
      altText: 'Back view of a sky-blue soccer jersey with a white number 8 and sponsor print below.',
      sortOrder: 9,
    },
    {
      id: 'soccer-jersey-10',
      code: 'SJ-010',
      name: 'Hoop-Stripe Jersey',
      imageKey: 'soccerJersey10',
      shortDescription: 'Red and black hoop stripes with a white name-and-number set on the back.',
      altText: 'Back view of a red and black striped soccer jersey with a white name and the number 22.',
      sortOrder: 10,
    },
    {
      id: 'soccer-jersey-11',
      code: 'SJ-011',
      name: 'Youth-Size Jersey',
      imageKey: 'soccerJersey11',
      shortDescription: 'Youth cut with the same name-and-number back print as the adult styles.',
      altText: 'Back view of a child wearing a yellow and green soccer jersey with a name and the number 10.',
      sortOrder: 11,
    },
    {
      id: 'soccer-jersey-12',
      code: 'SJ-012',
      name: 'Relaxed-Fit Jersey',
      imageKey: 'soccerJersey12',
      shortDescription: 'Loose-fit jersey layered over a long-sleeve base, shown from the back.',
      altText: 'Back view of a royal-blue soccer jersey with a white name and the number 10, worn over a long-sleeve shirt.',
      sortOrder: 12,
    },
  ],
};
