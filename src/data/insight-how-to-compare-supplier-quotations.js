/**
 * SOURDEN — /insights/how-to-compare-supplier-quotations
 * ---------------------------------------------------------------------------
 * Article 06 of 12, transcribed from `SOURDEN_Insights_Articles_4-12.docx`.
 *
 * ── THE COPY IS THE DOCUMENT'S, VERBATIM ───────────────────────────────────
 * Every sentence below is the document's own text, transcribed rather than
 * rewritten, exactly as articles 01–05 treat their sources.
 *
 * ── REUSES ARTICLE 01'S SHAPE, ADAPTS TO THIS CONTENT ─────────────────────
 * No new page style, no new markup, no new CSS. One array of `sections`, each
 * holding typed blocks, rendered by the same `InsightArticlePage.astro` shell.
 * The document is a flat run of paragraphs with no heading of its own, so the
 * three titled sections below are NAVIGATION the document does not contain —
 * the same kind of addition `tocHeading` is. The link to a sibling article sits
 * where the document asks the reader to widen the comparison ("Consider the
 * supplier as well as the quotation"), so it is placed rather than invented.
 *
 * ── WHAT THIS FILE DOES NOT DECLARE ────────────────────────────────────────
 * The article's TITLE, listing sentence and category live in
 * `insights-articles.js`. Every link is derived: `primaryCta` from `site.js`,
 * `serviceLink('supplier-verification')` from the service registry, and
 * `articleFor('moq-in-china-sourcing')` so the link label is that article's
 * real title rather than a retyped one.
 * ---------------------------------------------------------------------------
 */

import { articleFor, articleHref } from './insights-articles.js';
import { serviceLink } from './service-links.js';
import { primaryCta } from './site.js';

/** The one article this one links to in the closing chapter. */
const moqArticle = articleFor('moq-in-china-sourcing');

/** @type {{ tocHeading: string, sections: Array<Record<string, any>> }} */
export const page = {
  tocHeading: 'In this guide',

  sections: [
    {
      type: 'lead',
      blocks: [
        {
          type: 'p',
          text: 'Receiving several supplier quotations is useful, but the prices may not be directly comparable.',
        },
      ],
    },

    {
      type: 'section',
      id: 'same-basis',
      heading: 'Compare on the Same Requirements',
      blocks: [
        {
          type: 'p',
          text: 'Before comparing prices, make sure suppliers are quoting the same material, size, quantity, customization, packaging, and quality requirements.',
        },
        {
          type: 'p',
          text: 'Look beyond the unit price. Check MOQ, sample cost, tooling or mold fees, customization, packaging, payment terms, and production lead time.',
        },
      ],
    },

    {
      type: 'section',
      id: 'more-than-unit-price',
      heading: 'Look Beyond the Unit Price',
      blocks: [
        {
          type: 'p',
          text: 'Shipping terms also matter. One supplier may quote an ex-works price while another includes a different shipping arrangement. Make sure you understand what the quotation includes.',
        },
        {
          type: 'p',
          text: 'Confirm key product details in writing. A lower price may reflect different materials, specifications, or packaging rather than a more efficient supplier.',
        },
      ],
    },

    {
      type: 'section',
      id: 'the-supplier-as-well',
      heading: 'Consider the Supplier, Not Only the Quotation',
      blocks: [
        {
          type: 'p',
          text: 'Consider the supplier as well as the quotation. Product capability, communication, lead time, customization, quality control, and experience with similar orders can all affect the real value of an offer.',
        },
        {
          type: 'p',
          text: 'Large price differences deserve an explanation. The reason may be quantity, materials, production methods, or simply different assumptions in the quotation.',
        },
        { type: 'p', text: 'Also worth reading alongside this:' },
        {
          type: 'links',
          items: [{ label: moqArticle.title, href: articleHref(moqArticle) }],
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
      heading: 'Want a Like-for-Like Comparison?',
      inToc: false,
      blocks: [
        {
          type: 'p',
          text: 'The best quotation is not always the cheapest one. A useful comparison tells you exactly what each supplier is offering and what your complete order is likely to cost. SOURDEN can help compare supplier options and clarify the differences before you decide.',
        },
        {
          type: 'p',
          text: 'Send us the same product requirement to every supplier you are considering, and we will help line the quotations up against each other.',
        },
        {
          type: 'links',
          items: [primaryCta, serviceLink('supplier-verification')],
        },
      ],
    },
  ],
};
