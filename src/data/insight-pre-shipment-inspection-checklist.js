/**
 * SOURDEN — /insights/pre-shipment-inspection-checklist
 * ---------------------------------------------------------------------------
 * Article 08 of 12, transcribed from `SOURDEN_Insights_Articles_4-12.docx`.
 *
 * ── THE COPY IS THE DOCUMENT'S, VERBATIM ───────────────────────────────────
 * Every sentence below is the document's own text, transcribed rather than
 * rewritten, exactly as articles 01–07 treat their sources.
 *
 * ── REUSES ARTICLE 01'S SHAPE, ADAPTS TO THIS CONTENT ─────────────────────
 * No new page style, no new markup, no new CSS. One array of `sections`, each
 * holding typed blocks (`p` / `list` / `h3` / `table` / `links`), rendered by
 * the same `InsightArticlePage.astro` shell. The document is a flat run of
 * paragraphs with no heading of its own, so the three titled sections below are
 * NAVIGATION the document does not contain — the same kind of addition
 * `tocHeading` is. The document's own "First … Next …" walk is kept as separate
 * sections rather than turned into a numbered list, because those words order
 * the checks in the supplier's own sequence and a list would flatten the
 * sequence into items.
 *
 * ── WHAT THIS FILE DOES NOT DECLARE ────────────────────────────────────────
 * The article's TITLE, listing sentence and category live in
 * `insights-articles.js`. Every link is derived: `primaryCta` from `site.js`,
 * `serviceLink('quality-control')` from the service registry, and
 * `articleFor('why-check-products-before-shipping')` so the link label is that
 * article's real title rather than a retyped one.
 *
 * ── NO UNIVERSAL CHECKLIST IS CLAIMED ─────────────────────────────────────
 * The document ends by refusing to offer one; nothing here states a default
 * pass count, an acceptable defect rate or a fixed inspection duration.
 * ---------------------------------------------------------------------------
 */

import { articleFor, articleHref } from './insights-articles.js';
import { serviceLink } from './service-links.js';
import { primaryCta } from './site.js';

/** The one article this one links to in "Packaging and the Report". */
const checkBeforeShippingArticle = articleFor('why-check-products-before-shipping');

/** @type {{ tocHeading: string, sections: Array<Record<string, any>> }} */
export const page = {
  tocHeading: 'In this guide',

  sections: [
    {
      type: 'lead',
      blocks: [
        {
          type: 'p',
          text: 'A pre-shipment inspection is only useful when you know what you want to check. Different products require different inspection points, but most inspections can be organized around several basic areas.',
        },
      ],
    },

    {
      type: 'section',
      id: 'quantity-and-specifications',
      heading: 'Quantity and Specifications',
      blocks: [
        {
          type: 'p',
          text: 'First, check quantity: total cartons, units per carton, total units, and consistency with the packing list.',
        },
        {
          type: 'p',
          text: 'Next, check product specifications such as dimensions, materials, colors, weight, model, and configuration. The exact checks depend on the product.',
        },
      ],
    },

    {
      type: 'section',
      id: 'appearance-and-function',
      heading: 'Appearance, Workmanship and Function',
      blocks: [
        {
          type: 'p',
          text: 'Appearance and workmanship should also be reviewed for issues such as scratches, stains, uneven finishing, poor stitching, surface defects, or incorrect printing.',
        },
        {
          type: 'p',
          text: 'Where practical, important functions can be tested, including power, buttons, controls, moving parts, assembly, or basic performance.',
        },
      ],
    },

    {
      type: 'section',
      id: 'packaging-and-the-report',
      heading: 'Packaging and the Report',
      blocks: [
        {
          type: 'p',
          text: 'Packaging and labeling may include retail packaging, shipping cartons, labels, barcodes, accessories, and packing quantities.',
        },
        {
          type: 'p',
          text: 'A useful inspection report should clearly communicate what was checked and what was found, with photos and observed defects where appropriate.',
        },
        {
          type: 'p',
          text: 'There is no universal checklist for every product. The best inspection is designed around the actual risks and requirements of the order. Define the important inspection points before production is completed so everyone understands what will be checked.',
        },
        { type: 'p', text: 'For why the check happens at all, see:' },
        {
          type: 'links',
          items: [
            { label: checkBeforeShippingArticle.title, href: articleHref(checkBeforeShippingArticle) },
          ],
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
      heading: 'Want an Inspection Built Around Your Order?',
      inToc: false,
      blocks: [
        {
          type: 'p',
          text: 'The inspection points that matter are the ones your product and order value make matter. SOURDEN can agree those points with the supplier before production finishes, then check against them before the goods ship.',
        },
        {
          type: 'p',
          text: 'Send us the product, the order quantity and the specifications you need confirmed, and we will tell you which checks are practical for this order.',
        },
        {
          type: 'links',
          items: [primaryCta, serviceLink('quality-control')],
        },
      ],
    },
  ],
};
