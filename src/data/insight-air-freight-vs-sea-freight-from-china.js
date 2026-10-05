/**
 * SOURDEN — /insights/air-freight-vs-sea-freight-from-china
 * ---------------------------------------------------------------------------
 * Article 09 of 12, transcribed from `SOURDEN_Insights_Articles_4-12.docx`.
 *
 * ── THE COPY IS THE DOCUMENT'S, VERBATIM ───────────────────────────────────
 * Every sentence below is the document's own text, transcribed rather than
 * rewritten, exactly as articles 01–08 treat their sources.
 *
 * ── REUSES ARTICLE 01'S SHAPE, ADAPTS TO THIS CONTENT ─────────────────────
 * No new page style, no new markup, no new CSS. One array of `sections`, each
 * holding typed blocks, rendered by the same `InsightArticlePage.astro` shell.
 * The document is a flat run of paragraphs with no heading of its own, so the
 * three titled sections below are NAVIGATION the document does not contain —
 * the same kind of addition `tocHeading` is. The document introduces air and sea
 * with two parallel paragraphs, which is why each has its own section rather
 * than sharing one; the link to a sibling article sits in the closing chapter,
 * where the document itself widens from "one method" to "no single best method".
 *
 * ── WHAT THIS FILE DOES NOT DECLARE ────────────────────────────────────────
 * The article's TITLE, listing sentence and category live in
 * `insights-articles.js`. Every link is derived: `primaryCta` from `site.js`,
 * `serviceLink('shipping-from-china')` from the service registry, and
 * `articleFor('what-affects-shipping-cost-from-china')` so the link label is
 * that article's real title rather than a retyped one. No transit time, rate or
 * carrier is named anywhere here.
 * ---------------------------------------------------------------------------
 */

import { articleFor, articleHref } from './insights-articles.js';
import { serviceLink } from './service-links.js';
import { primaryCta } from './site.js';

/** The one article this one links to in "Choosing Between the Two". */
const shippingCostArticle = articleFor('what-affects-shipping-cost-from-china');

/** @type {{ tocHeading: string, sections: Array<Record<string, any>> }} */
export const page = {
  tocHeading: 'In this guide',

  sections: [
    {
      type: 'lead',
      blocks: [
        {
          type: 'p',
          text: 'Choosing between air freight and sea freight is not simply a question of which method is cheaper. The right option depends on shipment size, urgency, product characteristics, destination, and the total cost you are willing to accept.',
        },
      ],
    },

    {
      type: 'section',
      id: 'air-freight',
      heading: 'Air Freight',
      blocks: [
        {
          type: 'p',
          text: 'Air freight is generally faster and can be useful for urgent or relatively small shipments. Its main advantage is speed, while the cost per kilogram is usually higher.',
        },
      ],
    },

    {
      type: 'section',
      id: 'sea-freight',
      heading: 'Sea Freight',
      blocks: [
        {
          type: 'p',
          text: 'Sea freight is commonly used for larger or heavier shipments. It can offer a lower cost for larger volumes, but transit is slower and planning is usually more important.',
        },
      ],
    },

    {
      type: 'section',
      id: 'choosing-a-method',
      heading: 'Choosing Between the Two',
      blocks: [
        {
          type: 'p',
          text: 'Consider shipment weight and volume, required delivery date, product value, destination, available services, duties and taxes, and whether consolidation is possible.',
        },
        {
          type: 'p',
          text: 'Small shipments do not always need to go by air. Depending on the destination and available services, courier, postal, consolidated sea freight, or other options may be suitable.',
        },
        {
          type: 'p',
          text: 'Shipping should be considered before the goods are finished. Carton dimensions, weights, packaging, and other information may affect the final logistics choice.',
        },
        {
          type: 'p',
          text: 'There is no single best shipping method. The right choice balances cost, speed, shipment size, and destination. SOURDEN can help coordinate shipping options from China as part of the sourcing process.',
        },
        { type: 'p', text: 'The other half of that decision:' },
        {
          type: 'links',
          items: [{ label: shippingCostArticle.title, href: articleHref(shippingCostArticle) }],
        },
      ],
    },

    /* =====================================================================
       THE CLOSING BAND — the site's article closing device, applied to this
       article's subject. `inToc: false`.
       ===================================================================== */
    {
      type: 'section',
      id: 'need-help',
      heading: 'Want Help Weighing Up Shipping Options?',
      inToc: false,
      blocks: [
        {
          type: 'p',
          text: 'Tell us the shipment size, the destination and the date you need the goods to arrive, and we can compare the shipping options that are actually available for that order.',
        },
        {
          type: 'p',
          text: 'Packaging, carton dimensions and weight all feed into the choice, so the earlier we see them the more options there are to compare.',
        },
        {
          type: 'links',
          items: [primaryCta, serviceLink('shipping-from-china')],
        },
      ],
    },
  ],
};
