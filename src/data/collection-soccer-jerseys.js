/**
 * SOURDEN — PRODUCT COLLECTION: SOCCER JERSEYS
 * ---------------------------------------------------------------------------
 * The data file for `/products/apparel-footwear-bags/soccer-jerseys`. Its shape
 * is documented in `src/data/product-collections.js`; this file only supplies
 * the words and the
 * reference list. Every sentence here is written for THIS category — the brief
 * is explicit that a collection must not be the same text with the title
 * swapped, so the introduction and SEO metadata below were written for soccer
 * jerseys, not for "a product".
 *
 * ── THE REFERENCE LIST ─────────────────────────────────────────────────────
 * Sixteen national-team home styles, each `code` unique and stable. The code
 * is the product's identity: it survives re-sorting, re-pagination and future
 * additions. The order in this array is the catalogue order (by `sortOrder`),
 * and the image slots are registered in `media.js` under
 * `soccerJersey01`…`soccerJersey16`.
 *
 * ── NO PRICE / STOCK / MOQ / LEAD TIME ─────────────────────────────────────
 * The cards show only what a sourcing buyer can point at: the garment, its
 * reference code, and one line on its construction. Nothing that could be read
 * as an offer.
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
      'SOURDEN helps you source a wide range of soccer jerseys from China, including national team jerseys and club jerseys featuring some of the world\'s most popular teams.',
      '<strong>National Team Jerseys:</strong> such as France, Spain, Argentina, Germany, Brazil, Portugal, Italy and England.',
      '<strong>Club Jerseys:</strong> Well-known clubs such as Real Madrid, FC Barcelona, Atlético Madrid, Manchester United, Manchester City, Arsenal, Chelsea, Liverpool, Paris Saint-Germain and Bayern Munich.',
	  '<strong>Personalization & Customization:</strong> Personalization options may include player names, numbers and sleeve patches, depending on the selected style and supplier. Adult and youth sizes are available in a range of options, subject to product availability.',
	  '<strong>Looking for jerseys for your own team or a custom sportswear collection?</strong> We can help you explore customization options for fabrics, colors, patterns, team logos, sizes and more, based on your requirements.'
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
      name: 'Argentina Home Jersey',
      imageKey: 'soccerJersey01',
      shortDescription: 'White and sky-blue vertical stripes with the three-star crest on the chest.',
      altText: 'Front view of an Argentina home soccer jersey with white and sky-blue vertical stripes on a mannequin.',
      sortOrder: 1,
    },
    {
      id: 'soccer-jersey-02',
      code: 'SJ-002',
      name: 'Belgium Home Jersey',
      imageKey: 'soccerJersey02',
      shortDescription: 'Red tonal jacquard body with black-and-gold trim and the national crest.',
      altText: 'Front view of a Belgium home soccer jersey in red with black and gold trim on a mannequin.',
      sortOrder: 2,
    },
    {
      id: 'soccer-jersey-03',
      code: 'SJ-003',
      name: 'Brazil Home Jersey',
      imageKey: 'soccerJersey03',
      shortDescription: 'Classic yellow with a green collar and a tonal jacquard pattern.',
      altText: 'Front view of a Brazil home soccer jersey in yellow with a green collar on a mannequin.',
      sortOrder: 3,
    },
    {
      id: 'soccer-jersey-04',
      code: 'SJ-004',
      name: 'Canada Home Jersey',
      imageKey: 'soccerJersey04',
      shortDescription: 'Deep red body with a subtle jacquard weave and the maple-leaf crest.',
      altText: 'Front view of a Canada home soccer jersey in red on a mannequin.',
      sortOrder: 4,
    },
    {
      id: 'soccer-jersey-05',
      code: 'SJ-005',
      name: 'Colombia Home Jersey',
      imageKey: 'soccerJersey05',
      shortDescription: 'Bright yellow jacquard with red and navy shoulder stripes.',
      altText: 'Front view of a Colombia home soccer jersey in yellow with red and blue shoulder stripes on a mannequin.',
      sortOrder: 5,
    },
    {
      id: 'soccer-jersey-06',
      code: 'SJ-006',
      name: 'Croatia Home Jersey',
      imageKey: 'soccerJersey06',
      shortDescription: 'The classic red-and-white checkerboard across the body and sleeves.',
      altText: 'Front view of a Croatia home soccer jersey with a red and white checkerboard pattern on a mannequin.',
      sortOrder: 6,
    },
    {
      id: 'soccer-jersey-07',
      code: 'SJ-007',
      name: 'England Home Jersey',
      imageKey: 'soccerJersey07',
      shortDescription: 'White tonal jacquard with a navy crew collar and the Three Lions crest.',
      altText: 'Front view of an England home soccer jersey in white with a navy collar on a mannequin.',
      sortOrder: 7,
    },
    {
      id: 'soccer-jersey-08',
      code: 'SJ-008',
      name: 'France Home Jersey',
      imageKey: 'soccerJersey08',
      shortDescription: 'Navy with diagonal tonal stripes and a contrasting white polo collar.',
      altText: 'Front view of a France home soccer jersey in navy with a white polo collar on a mannequin.',
      sortOrder: 8,
    },
    {
      id: 'soccer-jersey-09',
      code: 'SJ-009',
      name: 'Germany Home Jersey',
      imageKey: 'soccerJersey09',
      shortDescription: 'White body with a black, red and gold chevron across the chest.',
      altText: 'Front view of a Germany home soccer jersey in white with a black, red and gold chest band on a mannequin.',
      sortOrder: 9,
    },
    {
      id: 'soccer-jersey-10',
      code: 'SJ-010',
      name: 'Italy Home Jersey',
      imageKey: 'soccerJersey10',
      shortDescription: 'Azzurri blue with a leaf jacquard and gold shoulder trim.',
      altText: 'Front view of an Italy home soccer jersey in blue with a tonal leaf pattern on a mannequin.',
      sortOrder: 10,
    },
    {
      id: 'soccer-jersey-11',
      code: 'SJ-011',
      name: 'Mexico Home Jersey',
      imageKey: 'soccerJersey11',
      shortDescription: 'Green with an Aztec-inspired tonal pattern and red-and-white trim.',
      altText: 'Front view of a Mexico home soccer jersey in green with a tonal geometric pattern on a mannequin.',
      sortOrder: 11,
    },
    {
      id: 'soccer-jersey-12',
      code: 'SJ-012',
      name: 'Netherlands Home Jersey',
      imageKey: 'soccerJersey12',
      shortDescription: 'Oranje orange with a tonal jacquard and black collar trim.',
      altText: 'Front view of a Netherlands home soccer jersey in orange with a black collar on a mannequin.',
      sortOrder: 12,
    },
    {
      id: 'soccer-jersey-13',
      code: 'SJ-013',
      name: 'Norway Home Jersey',
      imageKey: 'soccerJersey13',
      shortDescription: 'Red with the national cross in navy and white across the front.',
      altText: 'Front view of a Norway home soccer jersey in red with a navy and white cross design on a mannequin.',
      sortOrder: 13,
    },
    {
      id: 'soccer-jersey-14',
      code: 'SJ-014',
      name: 'Portugal Home Jersey',
      imageKey: 'soccerJersey14',
      shortDescription: 'Deep red with a tonal wave pattern and green V-neck trim.',
      altText: 'Front view of a Portugal home soccer jersey in deep red with a green collar on a mannequin.',
      sortOrder: 14,
    },
    {
      id: 'soccer-jersey-15',
      code: 'SJ-015',
      name: 'Spain Home Jersey',
      imageKey: 'soccerJersey15',
      shortDescription: 'Red with tonal vertical stripes and navy raglan sleeves.',
      altText: 'Front view of a Spain home soccer jersey in red with navy raglan sleeves on a mannequin.',
      sortOrder: 15,
    },
    {
      id: 'soccer-jersey-16',
      code: 'SJ-016',
      name: 'USA Home Jersey',
      imageKey: 'soccerJersey16',
      shortDescription: 'Red-and-white wavy stripes inspired by the national flag, with a navy collar.',
      altText: 'Front view of a USA home soccer jersey with red and white wavy stripes on a mannequin.',
      sortOrder: 16,
    },
    {
      id: 'soccer-jerseys-17',
      code: 'SJ-017',
      name: 'Barcelona Home Jersey',
      imageKey: 'soccerJerseys17',
      shortDescription: 'Customization of names and numbers available.',
      altText: 'Barcelona home jersey.',
      sortOrder: 17,
    },
    {
      id: 'soccer-jerseys-18',
      code: 'SJ-018',
      name: 'PSG Home Jersey',
      imageKey: 'soccerJerseys18',
      shortDescription: 'Customization of names and numbers available.',
      altText: 'PSG home jersey.',
      sortOrder: 18,
    },
  ],
};
