/**
 * SOURDEN — /insights/what-affects-shipping-cost-from-china
 * ---------------------------------------------------------------------------
 * Article 10 of 12, transcribed from `SOURDEN_Insights_Articles_4-12.docx`.
 *
 * ── THE COPY IS THE DOCUMENT'S, VERBATIM ───────────────────────────────────
 * Every sentence below is the document's own text, transcribed rather than
 * rewritten, exactly as articles 01–09 treat their sources.
 *
 * ── REUSES ARTICLE 01'S SHAPE, ADAPTS TO THIS CONTENT ─────────────────────
 * No new page style, no new markup, no new CSS. One array of `sections`, each
 * holding typed blocks, rendered by the same `InsightArticlePage.astro` shell.
 * The document is a flat run of paragraphs with no heading of its own, so the
 * two titled sections below are NAVIGATION the document does not contain —
 * the same kind of addition `tocHeading` is. The link to article 09 is also
 * an addition: it sits where the document's own third paragraph points
 * ("Shipping method also matters"), so it is placed rather than invented.
 *
 * ── WHAT THIS FILE DOES NOT DECLARE ────────────────────────────────────────
 * The article's TITLE, listing sentence and category live in
 * `insights-articles.js`. Every link is derived: `primaryCta` from `site.js`,
 * `serviceLink('shipping-from-china')` from the service registry, and
 * `articleFor('air-freight-vs-sea-freight-from-china')` so the link label is
 * that article's real title rather than a retyped one.
 *
 * ── THE ONE SENTENCE THAT IS NOT THE DOCUMENT'S ───────────────────────────
 * The document states only what raises a freight quote. Nothing here promises
 * a lowest delivered price, a fixed freight rate, or a duty estimate: duties,
 * taxes and local charges are described exactly as the document does, as
 * separate from freight and dependent on the destination.
 * ---------------------------------------------------------------------------
 */

import { articleFor, articleHref } from './insights-articles.js';
import { serviceLink } from './service-links.js';
import { primaryCta } from './site.js';

/** The one article this one links to in "Shipping Method". */
const freightModesArticle = articleFor('air-freight-vs-sea-freight-from-china');

/** @type {{ tocHeading: string, sections: Array<Record<string, any>> }} */
export const page = {
  tocHeading: 'In this guide',

  sections: [
    {
      type: 'lead',
      blocks: [
        {
          type: 'p',
          text: 'Shipping costs from China can vary significantly between orders, even when the products themselves have similar prices. Shipment size, weight, shipping method, destination, packaging, and service level can all make a difference.',
        },
      ],
    },

    {
      type: 'section',
      id: 'weight-and-volume',
      heading: 'Weight and Volume',
      blocks: [
        {
          type: 'p',
          text: 'Weight and volume both matter. Some shipments are charged based on actual weight, while others are affected by dimensional or volumetric weight. Bulky products can therefore cost more to transport than their actual weight suggests.',
        },
      ],
    },

    {
      type: 'section',
      id: 'shipping-method',
      heading: 'Shipping Method',
      blocks: [
        {
          type: 'p',
          text: 'Shipping method also matters. Air freight, sea freight, courier, and other methods have different pricing structures, and urgent shipments generally cost more.',
        },
        { type: 'p', text: 'For the wider comparison, see:' },
        {
          type: 'links',
          items: [{ label: freightModesArticle.title, href: articleHref(freightModesArticle) }],
        },
      ],
    },

    {
      type: 'section',
      id: 'destination-and-packaging',
      heading: 'Destination and Packaging',
      blocks: [
        {
          type: 'p',
          text: 'Destination affects routing and local delivery costs. Country, city, postal code, and delivery location can all matter.',
        },
        {
          type: 'p',
          text: 'Packaging changes shipment dimensions and weight. Efficient packaging can sometimes reduce shipping volume, but product protection should remain the priority.',
        },
      ],
    },

    {
      type: 'section',
      id: 'consolidation-and-service',
      heading: 'Consolidation and Service Level',
      blocks: [
        {
          type: 'p',
          text: 'If products come from several suppliers, consolidation may affect the overall logistics cost. Combining shipments can reduce duplicated freight but requires additional coordination and handling.',
        },
        {
          type: 'p',
          text: 'Service level matters too. Door-to-door delivery may cost more than transportation only to a port or warehouse. Make sure you understand what the quoted shipping price includes.',
        },
      ],
    },

    {
      type: 'section',
      id: 'beyond-the-freight-rate',
      heading: 'Costs Beyond the Freight Rate',
      blocks: [
        {
          type: 'p',
          text: 'Duties, taxes, and local charges may be separate from freight. The exact treatment depends on the destination, product, declared value, and shipping arrangement.',
        },
      ],
    },

    /* =====================================================================
       THE CLOSING BAND — the document's own ending, and the page's call to
       action area. `inToc: false`.
       ===================================================================== */
    {
      type: 'section',
      id: 'need-help',
      heading: 'Want the Shipping Cost Clear Before You Order?',
      inToc: false,
      blocks: [
        {
          type: 'p',
          text: 'The cheapest freight rate is not always the cheapest delivered solution. Compare the total logistics cost and service scope, not just the headline shipping price.',
        },
        {
          type: 'p',
          text: 'Send us the product, its approximate dimensions and weight, and the destination and delivery date you are working toward, and we will compare the options before production starts.',
        },
        {
          type: 'links',
          items: [primaryCta, serviceLink('shipping-from-china')],
        },
      ],
    },
  ],
};
