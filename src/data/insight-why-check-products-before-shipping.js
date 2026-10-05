/**
 * SOURDEN — /insights/why-check-products-before-shipping
 * ---------------------------------------------------------------------------
 * Article 07 of 12, transcribed from `SOURDEN_Insights_Articles_4-12.docx`.
 *
 * ── THE COPY IS THE DOCUMENT'S, VERBATIM ───────────────────────────────────
 * Every sentence below is the document's own text, transcribed rather than
 * rewritten, exactly as articles 01–06 treat their sources.
 *
 * ── REUSES ARTICLE 01'S SHAPE, ADAPTS TO THIS CONTENT ─────────────────────
 * No new page style, no new markup, no new CSS. One array of `sections`, each
 * holding typed blocks, rendered by the same `InsightArticlePage.astro` shell.
 * The document is a flat run of paragraphs with no heading of its own, so the
 * three titled sections below are NAVIGATION the document does not contain —
 * the same kind of addition `tocHeading` is. The link to a sibling article sits
 * in the last chapter because that is where the document's own list of what to
 * ask for leads on ("clear specifications … and pre-shipment inspection").
 *
 * ── WHAT THIS FILE DOES NOT DECLARE ────────────────────────────────────────
 * The article's TITLE, listing sentence and category live in
 * `insights-articles.js`. Every link is derived: `primaryCta` from `site.js`,
 * `serviceLink('quality-control')` from the service registry, and
 * `articleFor('pre-shipment-inspection-checklist')` so the link label is that
 * article's real title rather than a retyped one.
 *
 * ── WHAT THIS FILE REFUSES TO CLAIM ───────────────────────────────────────
 * The document says plainly that inspection is not a guarantee, and the wording
 * below keeps that limit: no pass rate, no defect threshold, no claim that a
 * check makes an order risk-free.
 * ---------------------------------------------------------------------------
 */

import { articleFor, articleHref } from './insights-articles.js';
import { serviceLink } from './service-links.js';
import { primaryCta } from './site.js';

/** The one article this one links to in "Quality Control Works Best as a Chain". */
const inspectionChecklistArticle = articleFor('pre-shipment-inspection-checklist');

/** @type {{ tocHeading: string, sections: Array<Record<string, any>> }} */
export const page = {
  tocHeading: 'In this guide',

  sections: [
    {
      type: 'lead',
      blocks: [
        {
          type: 'p',
          text: 'Once production is finished, it may be tempting to arrange shipment immediately. For many orders, however, a quality check before shipment can be valuable.',
        },
      ],
    },

    {
      type: 'section',
      id: 'why-check',
      heading: 'Why Check Before Shipping',
      blocks: [
        {
          type: 'p',
          text: 'The purpose is not to guarantee that every product is perfect. It is to identify important problems while there is still an opportunity to address them in China.',
        },
        {
          type: 'p',
          text: 'A pre-shipment check can look at quantity, product specifications, appearance, workmanship, materials where practical, packaging, labeling, and function when applicable.',
        },
      ],
    },

    {
      type: 'section',
      id: 'what-it-can-find',
      heading: 'What a Pre-Shipment Check Can Find',
      blocks: [
        {
          type: 'p',
          text: 'Inspection can be especially useful for significant orders, new suppliers, customized products, important specifications, or goods that would be difficult or expensive to return.',
        },
        {
          type: 'p',
          text: 'An inspection is not a guarantee. It checks an agreed scope at a particular point in time and cannot guarantee that every unit is defect-free.',
        },
      ],
    },

    {
      type: 'section',
      id: 'quality-control-as-a-chain',
      heading: 'Quality Control Works Best as a Chain',
      blocks: [
        {
          type: 'p',
          text: 'If issues are found, the buyer can request correction, rework, clarification of acceptable tolerances, another check, or proceed if the issue is acceptable.',
        },
        {
          type: 'p',
          text: 'Quality control works best as part of a broader process: clear specifications, supplier communication, samples, production follow-up, and pre-shipment inspection. SOURDEN can coordinate quality checks in China based on the requirements of the order.',
        },
        { type: 'p', text: 'For the checks themselves, see:' },
        {
          type: 'links',
          items: [
            { label: inspectionChecklistArticle.title, href: articleHref(inspectionChecklistArticle) },
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
      heading: 'Want a Check Before the Goods Leave China?',
      inToc: false,
      blocks: [
        {
          type: 'p',
          text: 'An inspection reduces the number of problems you discover after shipment, when the only options are to accept the goods or send them back.',
        },
        {
          type: 'p',
          text: 'Tell us the product, the order quantity and the specifications that matter, and we can arrange a quality check against them before the goods ship.',
        },
        {
          type: 'links',
          items: [primaryCta, serviceLink('quality-control')],
        },
      ],
    },
  ],
};
