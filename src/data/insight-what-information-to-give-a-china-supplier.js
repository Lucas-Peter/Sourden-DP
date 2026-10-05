/**
 * SOURDEN — /insights/what-information-to-give-a-china-supplier
 * ---------------------------------------------------------------------------
 * Article 04 of 12, transcribed from the authored document
 * `网站开发/Insight文章/SOURDEN_Insights_Articles_4-12.docx`.
 *
 * ── THE COPY IS THE DOCUMENT'S, VERBATIM ───────────────────────────────────
 * Every sentence below is the document's own text, transcribed rather than
 * rewritten, exactly as articles 01–03 treat their sources: these are the words
 * the business chose to publish.
 *
 * ── REUSES ARTICLE 01'S SHAPE, ADAPTS TO THIS CONTENT ─────────────────────
 * No new page style, no new markup, no new CSS. One array of `sections`, each
 * holding typed blocks (`p` / `list` / `h3` / `table` / `links`), rendered by
 * the same `InsightArticlePage.astro` shell. What differs from article 01 is
 * the document's SHAPE: article 01 is seventeen numbered chapters, this one is
 * a flat run of paragraphs with no heading of its own. The split into four
 * titled sections below is therefore NAVIGATION the document does not contain —
 * the same kind of addition `tocHeading` is, and it is marked as such in the
 * section comments. The paragraphs themselves are never regrouped in meaning,
 * only under headings that say what they already say.
 *
 * ── WHAT THIS FILE DOES NOT DECLARE ────────────────────────────────────────
 * The article's TITLE, listing sentence and category live in
 * `insights-articles.js`, which the hub already renders from. The closing band's
 * link targets are derived too: `primaryCta` from `site.js`,
 * `serviceLink('product-sourcing')` from the service registry, and
 * `articleFor('can-you-source-a-product-from-a-photo')` so the link label is
 * that article's real title rather than a retyped one.
 * ---------------------------------------------------------------------------
 */

import { articleFor, articleHref } from './insights-articles.js';
import { serviceLink } from './service-links.js';
import { primaryCta } from './site.js';

/** The one article this one links to in "What to Send the Supplier". */
const photoSourcingArticle = articleFor('can-you-source-a-product-from-a-photo');

/** @type {{ tocHeading: string, sections: Array<Record<string, any>> }} */
export const page = {
  tocHeading: 'In this guide',

  sections: [
    /* =====================================================================
       LEAD — the document's opening sentence and the "only a photo" framing.
       Unnumbered and absent from the table of contents: it has no heading to
       link to, and neither does the document have a word for it.
       ===================================================================== */
    {
      type: 'lead',
      blocks: [
        {
          type: 'p',
          text: 'The quality of a supplier quotation often depends on the quality of the information you provide.',
        },
      ],
    },

    /* — the first added heading; the document's own first instruction. */
    {
      type: 'section',
      id: 'what-to-send',
      heading: 'What to Send the Supplier',
      blocks: [
        {
          type: 'p',
          text: 'If you send only a product photo and ask, “How much?”, the supplier may not have enough information to give you an accurate answer. Different materials, sizes, quantities, packaging, and customization requirements can all change the final price.',
        },
        {
          type: 'p',
          text: 'Start with the product: provide the product name or description, photos, reference links, samples, drawings, or technical files if available. If you only have a photo, explain what you like and what you want to change.',
        },
        {
          type: 'p',
          text: 'Explain important specifications such as size, material, color, weight, function, design details, technical requirements, and packaging. If you do not know something yet, say so rather than guessing.',
        },
        { type: 'p', text: 'For more on starting from an image, see:' },
        {
          type: 'links',
          items: [{ label: photoSourcingArticle.title, href: articleHref(photoSourcingArticle) }],
        },
      ],
    },

    {
      type: 'section',
      id: 'quantity-and-customization',
      heading: 'Quantity, Customization and Packaging',
      blocks: [
        {
          type: 'p',
          text: 'Tell the supplier your expected quantity. For example: “We are looking for an initial order of approximately 200 units, with potential repeat orders.” Quantity can affect both MOQ and unit price.',
        },
        {
          type: 'p',
          text: 'If customization is required, mention it early. Logo, custom colors, materials, dimensions, private labeling, packaging, printing, and engraving can all affect price, MOQ, tooling, and lead time.',
        },
        {
          type: 'p',
          text: 'Packaging deserves attention too. Tell the supplier whether you need retail boxes, bags, labels, barcodes, protective packaging, or specific packing quantities.',
        },
      ],
    },

    {
      type: 'section',
      id: 'delivery-and-deadlines',
      heading: 'Destination, Price and Deadlines',
      blocks: [
        {
          type: 'p',
          text: 'Give the destination country and, when known, the city or postal code. This becomes especially important when you want a delivered price rather than a factory price.',
        },
        {
          type: 'p',
          text: 'A target price can be useful if it is realistic. A supplier may explain how materials, packaging, quantity, or design would need to change to reach it.',
        },
        {
          type: 'p',
          text: 'If you have a deadline, tell the supplier when you need samples, when you expect to order, and when the goods need to arrive.',
        },
      ],
    },

    {
      type: 'section',
      id: 'where-you-are',
      heading: 'Where You Are in the Process',
      blocks: [
        {
          type: 'p',
          text: 'Finally, explain where you are in the process: researching, comparing suppliers, looking for samples, preparing a first order, or seeking a long-term supplier.',
        },
      ],
    },

    /* =====================================================================
       THE CLOSING BAND — the document's own ending, and the page's call to
       action area. `inToc: false`: it is an action, not a chapter.
       ===================================================================== */
    {
      type: 'section',
      id: 'need-help',
      heading: 'Ready to Send Us Your Requirements?',
      inToc: false,
      blocks: [
        {
          type: 'p',
          text: 'You do not need a perfect specification sheet to start sourcing. Give the supplier what you know and leave unknown points open for discussion. Better information makes it easier to compare quotations and avoid misunderstandings.',
        },
        {
          type: 'p',
          text: 'SOURDEN can help take whatever you already have — photos, links, an approximate quantity, a destination — and turn it into a clear comparison of supplier options.',
        },
        {
          type: 'links',
          items: [primaryCta, serviceLink('product-sourcing')],
        },
      ],
    },
  ],
};
