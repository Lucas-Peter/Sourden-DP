/**
 * SOURDEN — /insights/product-samples-in-china-sourcing
 * ---------------------------------------------------------------------------
 * Article 12 of 12, transcribed from `SOURDEN_Insights_Articles_4-12.docx`.
 *
 * ── THE COPY IS THE DOCUMENT'S, VERBATIM ───────────────────────────────────
 * Every sentence below is the document's own text, transcribed rather than
 * rewritten, exactly as articles 01–11 treat their sources.
 *
 * ── REUSES ARTICLE 01'S SHAPE, ADAPTS TO THIS CONTENT ─────────────────────
 * No new page style, no new markup, no new CSS. One array of `sections`, each
 * holding typed blocks, rendered by the same `InsightArticlePage.astro` shell.
 * The document is a flat run of paragraphs with no heading of its own, so the
 * four titled sections below are NAVIGATION the document does not contain —
 * the same kind of addition `tocHeading` is. The link to article 07 is also
 * an addition: it sits where the document's own ninth paragraph points, so the
 * link is placed rather than invented.
 *
 * ── WHAT THIS FILE DOES NOT DECLARE ────────────────────────────────────────
 * The article's TITLE, listing sentence and category live in
 * `insights-articles.js`. Every link is derived: `primaryCta` from `site.js`,
 * `serviceLink('quality-control')` from the service registry, and
 * `articleFor('why-check-products-before-shipping')` so the link label is that
 * article's real title rather than a retyped one.
 *
 * ── THE ONE SENTENCE THAT IS NOT THE DOCUMENT'S ───────────────────────────
 * The document states that an approved sample does not guarantee identical
 * production units — a limitation, not a claim. Nothing here promises a free
 * sample, a sample fee policy, a sample lead time, or that samples will match
 * bulk exactly.
 * ---------------------------------------------------------------------------
 */

import { articleFor, articleHref } from './insights-articles.js';
import { serviceLink } from './service-links.js';
import { primaryCta } from './site.js';

/** The one article this one links to in "From Sample to Production". */
const preShipmentArticle = articleFor('why-check-products-before-shipping');

/** @type {{ tocHeading: string, sections: Array<Record<string, any>> }} */
export const page = {
  tocHeading: 'In this guide',

  sections: [
    {
      type: 'lead',
      blocks: [
        {
          type: 'p',
          text: 'A sample is more than a small version of an order. It is an opportunity to test whether a supplier’s product and capabilities match your requirements before committing to larger production.',
        },
      ],
    },

    {
      type: 'section',
      id: 'why-a-sample-matters',
      heading: 'Why a Sample Matters',
      blocks: [
        {
          type: 'p',
          text: 'A sample lets you evaluate material, size, dimensions, color, workmanship, function, packaging, and overall product fit.',
        },
        {
          type: 'p',
          text: 'Samples are especially useful when working with a new supplier, ordering customized products, placing a significant order, or sourcing products whose quality is difficult to judge from photos.',
        },
      ],
    },

    {
      type: 'section',
      id: 'before-you-order-a-sample',
      heading: 'Before You Order a Sample',
      blocks: [
        {
          type: 'p',
          text: 'Before ordering, confirm the exact product version, materials, colors, customization, packaging, sample quantity, sample cost, and expected completion time.',
        },
      ],
    },

    {
      type: 'section',
      id: 'how-to-review-the-sample',
      heading: 'How to Review the Sample',
      blocks: [
        {
          type: 'p',
          text: 'Review the sample against your requirements rather than simply asking whether you like it. Check dimensions, materials, workmanship, function, packaging, and any changes needed before production.',
        },
      ],
    },

    {
      type: 'section',
      id: 'from-sample-to-production',
      heading: 'From Sample to Production',
      blocks: [
        {
          type: 'p',
          text: 'An approved sample does not automatically mean every production unit will be identical. For larger orders, clear production specifications and quality checks provide additional control.',
        },
        {
          type: 'p',
          text: 'After approval, confirm the final product specifications, quantity, price, packaging, production timeline, and inspection requirements before production starts.',
        },
        { type: 'p', text: 'The check that runs after production is a separate step:' },
        {
          type: 'links',
          items: [{ label: preShipmentArticle.title, href: articleHref(preShipmentArticle) }],
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
      heading: 'Need a Sample Before a Full Order?',
      inToc: false,
      blocks: [
        {
          type: 'p',
          text: 'Samples are one of the simplest ways to reduce uncertainty before a larger order. SOURDEN can coordinate sample sourcing and help move from sample evaluation to purchasing and quality control.',
        },
        {
          type: 'p',
          text: 'Tell us the product and what you need the sample to prove, and we will arrange it and follow it through to production.',
        },
        {
          type: 'links',
          items: [primaryCta, serviceLink('quality-control')],
        },
      ],
    },
  ],
};
