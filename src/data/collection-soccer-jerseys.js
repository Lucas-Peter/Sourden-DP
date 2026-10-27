/**
 * SOURDEN — PRODUCT COLLECTION: SOCCER JERSEYS
 * ---------------------------------------------------------------------------
 * The data file for `/products/fashion-accessories/soccer-jerseys`. Its shape
 * is documented in `src/data/product-collections.js`; this file only supplies
 * the words and the
 * reference list. Every sentence here is written for THIS category — the brief
 * is explicit that a collection must not be the same text with the title
 * swapped, so the introduction and SEO metadata below were written for soccer
 * jerseys, not for "a product".
 *
 * ── THE REFERENCE LIST ─────────────────────────────────────────────────────
 * Thirty-six styles — national teams first, then club and commemorative
 * shirts. Each `code` is unique and stable: it is the product's identity and
 * survives re-sorting, re-pagination and future additions. The order in this
 * array is the catalogue order (by `sortOrder`), and the image slots are
 * registered in `media.js` under `soccerJerseys01`…`soccerJerseys36`.
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
  industrySlug: 'fashion-accessories',
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
      'Source national team and club soccer jerseys from China, with adult and youth sizes available. Customization options include names, numbers, and sleeve patches. Custom team jerseys can also be developed to match your designs.'
    ],
  },

  catalogNotice:
    'The styles shown are a partial reference set. We can source additional designs, colours and constructions on request — if you do not see what you need, describe it and we will look for it.',

  cta: {
    label: 'Request More Styles',
    href: primaryCta.href,
  },

  relatedLinks: [
    { label: 'Fashion & Accessories', href: industryHref('fashion-accessories') },
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
      id: 'soccer-jerseys-01',
      code: 'SJ-001',
      name: 'Messi Argentina Commemorative Jersey',
      imageKey: 'soccerJerseys01',
      shortDescription: 'Customization of names and numbers available.',
      altText: 'Messi Argentina Commemorative Jersey',
      sortOrder: 1,
    },
    {
      id: 'soccer-jerseys-02',
      code: 'SJ-002',
      name: 'Argentina Home Jersey',
      imageKey: 'soccerJerseys02',
      shortDescription: 'White and sky-blue vertical stripes with the three-star crest on the chest.',
      altText: 'Front view of an Argentina home soccer jersey with white and sky-blue vertical stripes on a mannequin.',
      sortOrder: 2,
    },
    {
      id: 'soccer-jerseys-03',
      code: 'SJ-003',
      name: 'Belgium Home Jersey',
      imageKey: 'soccerJerseys03',
      shortDescription: 'Red tonal jacquard body with black-and-gold trim and the national crest.',
      altText: 'Front view of a Belgium home soccer jersey in red with black and gold trim on a mannequin.',
      sortOrder: 3,
    },
    {
      id: 'soccer-jerseys-04',
      code: 'SJ-004',
      name: 'Brazil Home Jersey',
      imageKey: 'soccerJerseys04',
      shortDescription: 'Classic yellow with a green collar and a tonal jacquard pattern.',
      altText: 'Front view of a Brazil home soccer jersey in yellow with a green collar on a mannequin.',
      sortOrder: 4,
    },
    {
      id: 'soccer-jerseys-05',
      code: 'SJ-005',
      name: 'Canada Home Jersey',
      imageKey: 'soccerJerseys05',
      shortDescription: 'Deep red body with a subtle jacquard weave and the maple-leaf crest.',
      altText: 'Front view of a Canada home soccer jersey in red on a mannequin.',
      sortOrder: 5,
    },
    {
      id: 'soccer-jerseys-06',
      code: 'SJ-006',
      name: 'Colombia Home Jersey',
      imageKey: 'soccerJerseys06',
      shortDescription: 'Bright yellow jacquard with red and navy shoulder stripes.',
      altText: 'Front view of a Colombia home soccer jersey in yellow with red and blue shoulder stripes on a mannequin.',
      sortOrder: 6,
    },
    {
      id: 'soccer-jerseys-07',
      code: 'SJ-007',
      name: 'Croatia Home Jersey',
      imageKey: 'soccerJerseys07',
      shortDescription: 'The classic red-and-white checkerboard across the body and sleeves.',
      altText: 'Front view of a Croatia home soccer jersey with a red and white checkerboard pattern on a mannequin.',
      sortOrder: 7,
    },
    {
      id: 'soccer-jerseys-08',
      code: 'SJ-008',
      name: 'England Home Jersey',
      imageKey: 'soccerJerseys08',
      shortDescription: 'White tonal jacquard with a navy crew collar and the Three Lions crest.',
      altText: 'Front view of an England home soccer jersey in white with a navy collar on a mannequin.',
      sortOrder: 8,
    },
    {
      id: 'soccer-jerseys-09',
      code: 'SJ-009',
      name: 'France Home Jersey',
      imageKey: 'soccerJerseys09',
      shortDescription: 'Navy with diagonal tonal stripes and a contrasting white polo collar.',
      altText: 'Front view of a France home soccer jersey in navy with a white polo collar on a mannequin.',
      sortOrder: 9,
    },
    {
      id: 'soccer-jerseys-10',
      code: 'SJ-010',
      name: 'Germany Home Jersey',
      imageKey: 'soccerJerseys10',
      shortDescription: 'White body with a black, red and gold chevron across the chest.',
      altText: 'Front view of a Germany home soccer jersey in white with a black, red and gold chest band on a mannequin.',
      sortOrder: 10,
    },
    {
      id: 'soccer-jerseys-11',
      code: 'SJ-011',
      name: 'Italy Home Jersey',
      imageKey: 'soccerJerseys11',
      shortDescription: 'Azzurri blue with a leaf jacquard and gold shoulder trim.',
      altText: 'Front view of an Italy home soccer jersey in blue with a tonal leaf pattern on a mannequin.',
      sortOrder: 11,
    },
    {
      id: 'soccer-jerseys-12',
      code: 'SJ-012',
      name: 'Mexico Home Jersey',
      imageKey: 'soccerJerseys12',
      shortDescription: 'Green with an Aztec-inspired tonal pattern and red-and-white trim.',
      altText: 'Front view of a Mexico home soccer jersey in green with a tonal geometric pattern on a mannequin.',
      sortOrder: 12,
    },
    {
      id: 'soccer-jerseys-13',
      code: 'SJ-013',
      name: 'Netherlands Home Jersey',
      imageKey: 'soccerJerseys13',
      shortDescription: 'Oranje orange with a tonal jacquard and black collar trim.',
      altText: 'Front view of a Netherlands home soccer jersey in orange with a black collar on a mannequin.',
      sortOrder: 13,
    },
    {
      id: 'soccer-jerseys-14',
      code: 'SJ-014',
      name: 'Norway Home Jersey',
      imageKey: 'soccerJerseys14',
      shortDescription: 'Red with the national cross in navy and white across the front.',
      altText: 'Front view of a Norway home soccer jersey in red with a navy and white cross design on a mannequin.',
      sortOrder: 14,
    },
    {
      id: 'soccer-jerseys-15',
      code: 'SJ-015',
      name: 'Portugal Home Jersey',
      imageKey: 'soccerJerseys15',
      shortDescription: 'Deep red with a tonal wave pattern and green V-neck trim.',
      altText: 'Front view of a Portugal home soccer jersey in deep red with a green collar on a mannequin.',
      sortOrder: 15,
    },
    {
      id: 'soccer-jerseys-16',
      code: 'SJ-016',
      name: 'Spain Home Jersey',
      imageKey: 'soccerJerseys16',
      shortDescription: 'Red with tonal vertical stripes and navy raglan sleeves.',
      altText: 'Front view of a Spain home soccer jersey in red with navy raglan sleeves on a mannequin.',
      sortOrder: 16,
    },
    {
      id: 'soccer-jerseys-17',
      code: 'SJ-017',
      name: 'USA Home Jersey',
      imageKey: 'soccerJerseys17',
      shortDescription: 'Red-and-white wavy stripes inspired by the national flag, with a navy collar.',
      altText: 'Front view of a USA home soccer jersey with red and white wavy stripes on a mannequin.',
      sortOrder: 17,
    },
    {
      id: 'soccer-jerseys-18',
      code: 'SJ-018',
      name: 'Barcelona Home Jersey',
      imageKey: 'soccerJerseys18',
      shortDescription: 'Customization of names and numbers available.',
      altText: 'Barcelona home jersey.',
      sortOrder: 18,
    },
    {
      id: 'soccer-jerseys-19',
      code: 'SJ-019',
      name: 'PSG Home Jersey',
      imageKey: 'soccerJerseys19',
      shortDescription: 'Customization of names and numbers available.',
      altText: 'PSG home jersey.',
      sortOrder: 19,
    },
    {
      id: 'soccer-jerseys-20',
      code: 'SJ-020',
      name: '26 AS Monaco Home Jersey',
      imageKey: 'soccerJerseys20',
      shortDescription: 'Customization of names and numbers available.',
      altText: '26 AS Monaco Home Jersey',
      sortOrder: 20,
    },
    {
      id: 'soccer-jerseys-21',
      code: 'SJ-021',
      name: '26 Atlético Madrid Home Jersey',
      imageKey: 'soccerJerseys21',
      shortDescription: 'Customization of names and numbers available.',
      altText: '26 Atlético Madrid Home Jersey',
      sortOrder: 21,
    },
    {
      id: 'soccer-jerseys-22',
      code: 'SJ-022',
      name: '26 Al-Nassr Home Jersey',
      imageKey: 'soccerJerseys22',
      shortDescription: 'Customization of names and numbers available.',
      altText: '26 Al-Nassr Home Jersey',
      sortOrder: 22,
    },
    {
      id: 'soccer-jerseys-23',
      code: 'SJ-023',
      name: '26 AC Milan Home Jersey',
      imageKey: 'soccerJerseys23',
      shortDescription: 'Customization of names and numbers available.',
      altText: '26 AC Milan Home Jersey',
      sortOrder: 23,
    },
    {
      id: 'soccer-jerseys-24',
      code: 'SJ-024',
      name: '26 Arsenal Home Jersey',
      imageKey: 'soccerJerseys24',
      shortDescription: 'Customization of names and numbers available.',
      altText: '26 Arsenal Home Jersey',
      sortOrder: 24,
    },
    {
      id: 'soccer-jerseys-25',
      code: 'SJ-025',
      name: '26 AS Roma Home Jersey',
      imageKey: 'soccerJerseys25',
      shortDescription: 'Customization of names and numbers available.',
      altText: '26 AS Roma Home Jersey',
      sortOrder: 25,
    },
    {
      id: 'soccer-jerseys-26',
      code: 'SJ-026',
      name: '26 Bayern Munich Home Jersey',
      imageKey: 'soccerJerseys26',
      shortDescription: 'Customization of names and numbers available.',
      altText: '26 Bayern Munich Home Jersey',
      sortOrder: 26,
    },
    {
      id: 'soccer-jerseys-27',
      code: 'SJ-027',
      name: '26 Borussia Dortmund Home Jersey',
      imageKey: 'soccerJerseys27',
      shortDescription: 'Customization of names and numbers available.',
      altText: '26 Borussia Dortmund Home Jersey',
      sortOrder: 27,
    },
    {
      id: 'soccer-jerseys-28',
      code: 'SJ-028',
      name: '26 Chelsea Home Jersey',
      imageKey: 'soccerJerseys28',
      shortDescription: 'Customization of names and numbers available.',
      altText: '26 Chelsea Home Jersey',
      sortOrder: 28,
    },
    {
      id: 'soccer-jerseys-29',
      code: 'SJ-029',
      name: '26 Inter Miami Home Jersey',
      imageKey: 'soccerJerseys29',
      shortDescription: 'Customization of names and numbers available.',
      altText: '26 Inter Miami Home Jersey',
      sortOrder: 29,
    },
    {
      id: 'soccer-jerseys-30',
      code: 'SJ-030',
      name: '26 Juventus Home Jersey',
      imageKey: 'soccerJerseys30',
      shortDescription: 'Customization of names and numbers available.',
      altText: '26 Juventus Home Jersey',
      sortOrder: 30,
    },
    {
      id: 'soccer-jerseys-31',
      code: 'SJ-031',
      name: '26 Liverpool Home Jersey',
      imageKey: 'soccerJerseys31',
      shortDescription: 'Customization of names and numbers available.',
      altText: '26 Liverpool Home Jersey',
      sortOrder: 31,
    },
    {
      id: 'soccer-jerseys-32',
      code: 'SJ-032',
      name: '26 Manchester City Home Jersey',
      imageKey: 'soccerJerseys32',
      shortDescription: 'Customization of names and numbers available.',
      altText: '26 Manchester City Home Jersey',
      sortOrder: 32,
    },
    {
      id: 'soccer-jerseys-33',
      code: 'SJ-033',
      name: '26 Manchester United Home Jersey',
      imageKey: 'soccerJerseys33',
      shortDescription: 'Customization of names and numbers available.',
      altText: '26 Manchester United Home Jersey',
      sortOrder: 33,
    },
    {
      id: 'soccer-jerseys-34',
      code: 'SJ-034',
      name: '26 Real Madrid Home Jersey',
      imageKey: 'soccerJerseys34',
      shortDescription: 'Customization of names and numbers available.',
      altText: '26 Real Madrid Home Jersey',
      sortOrder: 34,
    },
    {
      id: 'soccer-jerseys-35',
      code: 'SJ-035',
      name: '26 Sporting Lisbon Home Jersey',
      imageKey: 'soccerJerseys35',
      shortDescription: 'Customization of names and numbers available.',
      altText: '26 Sporting Lisbon Home Jersey',
      sortOrder: 35,
    },
    {
      id: 'soccer-jerseys-36',
      code: 'SJ-036',
      name: '26 Tottenham Hotspur Home Jersey',
      imageKey: 'soccerJerseys36',
      shortDescription: 'Customization of names and numbers available.',
      altText: '26 Tottenham Hotspur Home Jersey',
      sortOrder: 36,
    },

  ],
};
