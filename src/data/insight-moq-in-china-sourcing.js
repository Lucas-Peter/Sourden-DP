/**
 * SOURDEN — /insights/moq-in-china-sourcing
 * ---------------------------------------------------------------------------
 * Article 05 of 12, transcribed from `SOURDEN_Insights_Articles_4-12.docx`.
 *
 * ── THE COPY IS THE DOCUMENT'S, VERBATIM ───────────────────────────────────
 * Every sentence below is the document's own text, transcribed rather than
 * rewritten, exactly as articles 01–04 treat their sources.
 *
 * ── REUSES ARTICLE 01'S SHAPE, ADAPTS TO THIS CONTENT ─────────────────────
 * No new page style, no new markup, no new CSS. One array of `sections`, each
 * holding typed blocks, rendered by the same `InsightArticlePage.astro` shell.
 * The document is a flat run of paragraphs with no heading of its own, so the
 * three titled sections below are NAVIGATION the document does not contain —
 * the same kind of addition `tocHeading` is. The last of them carries a link
 * to a sibling article, which the document does not ask for either; it sits
 * where the document's own last paragraph points ("Do not compare suppliers by
 * MOQ alone"), so the link is placed rather than invented.
 *
 * ── WHAT THIS FILE DOES NOT DECLARE ────────────────────────────────────────
 * The article's TITLE, listing sentence and category live in
 * `insights-articles.js`. Every link is derived: `primaryCta` from `site.js`,
 * `serviceLink('purchasing-order-management')` from the service registry, and
 * `articleFor('how-to-compare-supplier-quotations')` so the link label is that
 * article's real title rather than a retyped one.
 *
 * ── THE ONE SENTENCE THAT IS NOT THE DOCUMENT'S ───────────────────────────
 * The document states the MOQ fact ("SOURDEN does not impose a fixed MOQ").
 * Nothing here claims a minimum order, a quantity discount or a sample policy.
 * ---------------------------------------------------------------------------
 */

import { articleFor, articleHref } from './insights-articles.js';
import { serviceLink } from './service-links.js';
import { primaryCta } from './site.js';

/** The one article this one links to in "MOQ and Unit Price". */
const quotationComparisonArticle = articleFor('how-to-compare-supplier-quotations');

/** @type {{ tocHeading: string, sections: Array<Record<string, any>> }} */
export const page = {
  tocHeading: 'In this guide',

  sections: [
    {
      type: 'lead',
      blocks: [
        {
          type: 'p',
          text: 'MOQ, or Minimum Order Quantity, is one of the first terms buyers encounter when sourcing from China.',
        },
      ],
    },

    {
      type: 'section',
      id: 'what-moq-means',
      heading: 'What MOQ Actually Means',
      blocks: [
        {
          type: 'p',
          text: 'MOQ is the minimum quantity a supplier normally wants to produce or sell for a particular order. It may apply to the total order, a product, a color, a size, or a customized version.',
        },
        {
          type: 'p',
          text: 'Suppliers often set MOQs because they need to cover raw materials, machine setup, molds, printing, packaging, labor, and other production costs. Customized products usually have higher MOQs than standard stock products.',
        },
      ],
    },

    {
      type: 'section',
      id: 'negotiating-moq',
      heading: 'Negotiating a Lower MOQ',
      blocks: [
        {
          type: 'p',
          text: 'A quoted MOQ is not always an absolute rule. If your quantity is smaller, ask whether a trial order is possible. The supplier may accept a smaller quantity at a different price or with different terms.',
        },
        {
          type: 'p',
          text: 'When negotiating, explain your actual situation. Mention your initial quantity, possible repeat orders, available stock, and whether standard colors or packaging would work for the first order.',
        },
      ],
    },

    {
      type: 'section',
      id: 'moq-and-unit-price',
      heading: 'MOQ and Unit Price',
      blocks: [
        {
          type: 'p',
          text: 'MOQ and unit price are usually connected. Smaller orders often have a higher unit cost because setup and operating costs are spread across fewer products.',
        },
        {
          type: 'p',
          text: 'Do not compare suppliers by MOQ alone. Product quality, price, customization, lead time, packaging, communication, and inspection options also matter.',
        },
        { type: 'p', text: 'For the wider comparison, see:' },
        {
          type: 'links',
          items: [
            { label: quotationComparisonArticle.title, href: articleHref(quotationComparisonArticle) },
          ],
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
      heading: 'Not Sure Your Quantity Fits?',
      inToc: false,
      blocks: [
        {
          type: 'p',
          text: 'MOQ is a production and commercial consideration, not simply a barrier. SOURDEN does not impose a fixed MOQ, although individual suppliers may have their own requirements. If you have a small order, tell us what you actually need so we can look for suitable options.',
        },
        {
          type: 'p',
          text: 'Send us the product, the quantity you are considering and the market you sell into, and we will tell you which suppliers can realistically support it.',
        },
        {
          type: 'links',
          items: [primaryCta, serviceLink('purchasing-order-management')],
        },
      ],
    },
  ],
};
