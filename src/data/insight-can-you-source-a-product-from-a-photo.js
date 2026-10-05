/**
 * SOURDEN — /insights/can-you-source-a-product-from-a-photo
 * ---------------------------------------------------------------------------
 * Article 11 of 12, transcribed from `SOURDEN_Insights_Articles_4-12.docx`.
 *
 * ── THE COPY IS THE DOCUMENT'S, VERBATIM ───────────────────────────────────
 * Every sentence below is the document's own text, transcribed rather than
 * rewritten, exactly as articles 01–10 treat their sources.
 *
 * ── REUSES ARTICLE 01'S SHAPE, ADAPTS TO THIS CONTENT ─────────────────────
 * No new page style, no new markup, no new CSS. One array of `sections`, each
 * holding typed blocks, rendered by the same `InsightArticlePage.astro` shell.
 * The document is a flat run of paragraphs with no heading of its own, so the
 * four titled sections below are NAVIGATION the document does not contain —
 * the same kind of addition `tocHeading` is. The link to article 12 is also
 * an addition: it sits where the document's own eighth paragraph points
 * ("consider requesting a sample"), so the link is placed rather than invented.
 *
 * ── WHAT THIS FILE DOES NOT DECLARE ────────────────────────────────────────
 * The article's TITLE, listing sentence and category live in
 * `insights-articles.js`. Every link is derived: `primaryCta` from `site.js`,
 * `serviceLink('product-sourcing')` from the service registry, and
 * `articleFor('product-samples-in-china-sourcing')` so the link label is that
 * article's real title rather than a retyped one.
 *
 * ── THE ONE SENTENCE THAT IS NOT THE DOCUMENT'S ───────────────────────────
 * The document answers its own opening question with a plain "Yes". Nothing
 * here claims an image search, a reverse-image tool or an automatic match;
 * a photo is described as a starting point for a human conversation, which
 * is all the document says it is.
 * ---------------------------------------------------------------------------
 */

import { articleFor, articleHref } from './insights-articles.js';
import { serviceLink } from './service-links.js';
import { primaryCta } from './site.js';

/** The one article this one links to when it recommends a sample. */
const samplesArticle = articleFor('product-samples-in-china-sourcing');

/** @type {{ tocHeading: string, sections: Array<Record<string, any>> }} */
export const page = {
  tocHeading: 'In this guide',

  sections: [
    {
      type: 'lead',
      blocks: [
        {
          type: 'p',
          text: 'Yes. A product photo can be a useful starting point for China sourcing, even when you do not know the product name or supplier.',
        },
      ],
    },

    {
      type: 'section',
      id: 'what-a-photo-shows',
      heading: 'What a Photo Can Show',
      blocks: [
        {
          type: 'p',
          text: 'A clear photo can help identify the general product, shape, visible materials, colors, construction, and possible packaging. Multiple photos from different angles are usually more useful than one image.',
        },
      ],
    },

    {
      type: 'section',
      id: 'what-a-photo-cannot-show',
      heading: 'What a Photo Cannot Show',
      blocks: [
        {
          type: 'p',
          text: 'Important details such as exact dimensions, material composition, weight, production method, quality standard, packaging, and target quantity are usually not visible in a photo.',
        },
      ],
    },

    {
      type: 'section',
      id: 'how-to-send-the-photo',
      heading: 'How to Send the Photo',
      blocks: [
        {
          type: 'p',
          text: 'Give the supplier as much context as you know: where you saw the product, what you like about it, approximate quantity, target market, desired quality, customization, and target price if available.',
        },
        {
          type: 'p',
          text: 'If you want a similar product rather than an exact match, explain which features are important and which can change. This gives suppliers more flexibility to find practical alternatives.',
        },
      ],
    },

    {
      type: 'section',
      id: 'from-photo-to-sample',
      heading: 'From Photo to Sample',
      blocks: [
        {
          type: 'p',
          text: 'Once a suitable supplier is identified, consider requesting a sample. A photo is not a substitute for evaluating the actual product.',
        },
        { type: 'p', text: 'What happens at that stage depends on why you are sending the photo:' },
        {
          type: 'links',
          items: [{ label: samplesArticle.title, href: articleHref(samplesArticle) }],
        },
      ],
    },

    {
      type: 'section',
      id: 'rights-and-limits',
      heading: 'Rights and Limits',
      blocks: [
        {
          type: 'p',
          text: "For branded or protected products, make sure you have the right to sell or reproduce the product, branding, or design. Do not assume a supplier can legally reproduce another company's protected intellectual property.",
        },
      ],
    },

    /* =====================================================================
       THE CLOSING BAND — the document's own ending, and the page's call to
       action area. `inToc: false`.
       ===================================================================== */
    {
      type: 'section',
      id: 'start-anyway',
      heading: "You Don't Need the Product Name to Start",
      inToc: false,
      blocks: [
        {
          type: 'p',
          text: 'You do not need to know the product name before starting a sourcing request. A photo, description, approximate quantity, and clear explanation can be enough to begin.',
        },
        {
          type: 'p',
          text: 'Send the photo or photos with a short description of what you want, and we will come back with the suppliers worth asking and the questions worth asking them.',
        },
        {
          type: 'links',
          items: [primaryCta, serviceLink('product-sourcing')],
        },
      ],
    },
  ],
};
