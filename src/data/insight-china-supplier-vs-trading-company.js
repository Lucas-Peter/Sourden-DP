/**
 * SOURDEN — /insights/china-supplier-vs-trading-company
 * ---------------------------------------------------------------------------
 * Article 03 of 12, transcribed from the authored document
 * `网站开发/Insight文章/03 China Supplier vs Trading Company Whats the Difference.docx`.
 *
 * ── THE COPY IS THE DOCUMENT'S, VERBATIM ───────────────────────────────────
 * Every sentence below is the document's own text, transcribed rather than
 * rewritten, exactly as `legal-privacy.js` treats the legal brief: this is the
 * words the business chose to publish. The one thing this file ADDS is the
 * list structure (see below) and one piece of navigation copy (`tocHeading`).
 *
 * ── WHAT THIS FILE DOES NOT DECLARE ────────────────────────────────────────
 * The article's TITLE, listing sentence and category all live in
 * `insights-articles.js`, which the hub already renders from. They are not
 * repeated here: a second copy is how the card on `/insights` and the H1 on
 * this page would drift apart. The shell reads that record and this file
 * supplies only the body.
 *
 * ── WHY BLOCKS, NOT SECTIONS OF SHAPED PROSE ───────────────────────────────
 * An article is not a marketing page: it has no fixed section vocabulary, and
 * its shape is whatever the author wrote. So the body is ONE array of sections,
 * each holding an array of typed blocks (`p` / `list` / `h3` / `table` /
 * `links`). A new article is a new file plus one line in the registry; it never
 * needs new markup or new CSS. Same principle as `/industries/<slug>`, applied
 * to free-form prose instead of a fixed five-band architecture.
 *
 * ── THE LIST STRUCTURE HAD TO BE RECOVERED, NOT READ ───────────────────────
 * In the source document each bulleted item is a `ListBullet` paragraph. The
 * text of a list item is otherwise indistinguishable from body copy, so the
 * lists below are the author's own groupings, read back from the document's
 * structure and its punctuation.
 *
 * ── THE IMAGE SLOTS ARE DROPPED ON PURPOSE ─────────────────────────────────
 * The document carries no `[Image]` placeholders and no embedded image. The
 * article is text only, which is also what §7 of the hub brief prefers over a
 * poor stock photograph. Adding a real photograph later means a `media.js`
 * slot and one `figure` block — not a change to any other article.
 *
 * ── LINKS ARE DERIVED, NEVER TYPED ─────────────────────────────────────────
 *   · "Start a Sourcing Request"  → `primaryCta` from `site.js`, the site's one
 *     primary action.
 *   · "Product Sourcing" → `serviceLink('product-sourcing')`. The label comes
 *     from the service registry, so it reads "Product Sourcing" — the site's
 *     published name for that service.
 *   · "How to Find Reliable Suppliers in China" → `articleFor(slug)</code>` +
 *     `articleHref()` in `insights-articles.js`, so the link label is the other
 *     article's real title rather than a retyped one. Article 01 links to this
 *     one; this reciprocal link keeps the two guides connected.
 *
 * ── THE SECOND H1 ─────────────────────────────────────────────────────────
 * The document writes "Final Thoughts" as a second Heading 1. The site allows
 * exactly one H1 per page, so it is a section here like every other — its
 * wording is untouched, only its level.
 * ---------------------------------------------------------------------------
 */

import { articleFor, articleHref } from './insights-articles.js';
import { serviceLink } from './service-links.js';
import { primaryCta } from './site.js';

/**
 * The article this one links back to. Read from the registry so the link text
 * is that article's real title, and its href its real route — both derived from
 * the same record the `/insights` directory renders its card from.
 */
const findReliableSuppliersArticle = articleFor('how-to-find-reliable-suppliers-in-china');

/** @type {{ tocHeading: string, sections: Array<Record<string, any>> }} */
export const page = {
  /**
   * 〔added〕 The document has no table of contents. The article is eleven
   * sections long, so the hub's page gives it one; this is the only string in
   * this file that is not the author's.
   */
  tocHeading: 'In this guide',

  sections: [
    /* =====================================================================
       INTRODUCTION — the three opening paragraphs, before the first section.
       Deliberately unnumbered and absent from the table of contents: it has no
       heading to link to, and "Introduction" is a label the document does not
       use.
       ===================================================================== */
    {
      type: 'lead',
      blocks: [
        {
          type: 'p',
          text: 'One of the first questions buyers face when sourcing from China is whether they should work directly with a manufacturer or through a trading company.',
        },
        {
          type: 'p',
          text: 'The answer is not always straightforward. A manufacturer is not automatically the better choice, and a trading company is not necessarily an extra layer you should avoid.',
        },
        {
          type: 'p',
          text: 'The right option depends on your product, order size, customization requirements, and how much sourcing and coordination support you need.',
        },
      ],
    },

    /* =====================================================================
       THE ELEVEN SECTIONS — the document's own bold headings, kept as headings
       (no numbering in the source, so none is added here). There is
       deliberately NO CSS counter anywhere in this page: the headings are part
       of the content, and a counter would print the number twice.
       ===================================================================== */
    {
      type: 'section',
      id: 'what-is-a-manufacturer',
      heading: 'What Is a Manufacturer?',
      blocks: [
        {
          type: 'p',
          text: 'A manufacturer is a company that produces products directly, usually in its own factory or through production facilities it operates.',
        },
        {
          type: 'p',
          text: 'Manufacturers may have stronger control over production, materials, specifications, and production schedules. For buyers with established product specifications and larger or repeat orders, working directly with a manufacturer can sometimes be efficient.',
        },
        {
          type: 'p',
          text: 'However, manufacturers often focus on production rather than international sourcing support. Some may have limited product ranges, communication capacity, or experience working with smaller overseas buyers.',
        },
      ],
    },

    {
      type: 'section',
      id: 'what-is-a-trading-company',
      heading: 'What Is a Trading Company?',
      blocks: [
        {
          type: 'p',
          text: 'A trading company typically sources products from one or more manufacturers and sells or exports them to customers.',
        },
        {
          type: 'p',
          text: 'A trading company may not own the factory producing the product, but it can provide access to multiple suppliers and handle communication, quotations, purchasing, packaging, and export coordination.',
        },
        {
          type: 'p',
          text: 'This can be useful when you need several different products or do not have the time or local resources to communicate with multiple factories yourself.',
        },
      ],
    },

    {
      type: 'section',
      id: 'the-main-differences',
      heading: 'The Main Differences',
      blocks: [
        {
          type: 'p',
          text: 'The practical differences usually come down to production control, product range, flexibility, and coordination.',
        },
        {
          type: 'list',
          items: [
            'Production: Manufacturers produce products directly; trading companies usually coordinate with manufacturers.',
            'Product range: Manufacturers often specialize in a narrower range; trading companies may offer products from multiple factories.',
            'Customization: A manufacturer may have more direct control over production changes, while a trading company may coordinate customization with the factory.',
            'Communication: Trading companies may be more accustomed to working with international buyers, but this varies from company to company.',
            'Order management: A trading company may be able to coordinate several suppliers within one project.',
            'Pricing: A direct manufacturer may sometimes offer a lower factory price, but the final cost depends on specifications, quantity, packaging, shipping, and other factors.',
          ],
        },
      ],
    },

    {
      type: 'section',
      id: 'factory-lower-price',
      heading: 'Does Buying Directly From a Factory Always Mean a Lower Price?',
      blocks: [
        { type: 'p', text: 'Not necessarily.' },
        {
          type: 'p',
          text: 'A factory quotation may look lower because it only covers the basic product. Once you add packaging, customization, inspection, domestic transportation, export coordination, and other requirements, the comparison can become different.',
        },
        {
          type: 'p',
          text: 'A trading company may also have established relationships with several factories and be able to negotiate or coordinate different parts of an order.',
        },
        {
          type: 'p',
          text: 'Instead of asking only, "Who has the lowest unit price?", compare the complete cost and the services included.',
        },
      ],
    },

    {
      type: 'section',
      id: 'tell-if-manufacturer',
      heading: 'How Can You Tell Whether a Supplier Is a Manufacturer?',
      blocks: [
        {
          type: 'p',
          text: 'You can ask direct and practical questions rather than relying only on the supplier’s description.',
        },
        {
          type: 'list',
          items: [
            'Where is your production facility located?',
            'Which products do you manufacture directly?',
            'Which parts of production are handled by other suppliers?',
            'Can you provide production or factory information relevant to the product?',
            'What is your normal production capacity?',
            'Which customization processes are available?',
            'Do you also supply products from other factories?',
          ],
        },
        {
          type: 'p',
          text: 'There is nothing inherently wrong with a supplier using other factories. The important thing is understanding how the supply chain works before you place an order.',
        },
        { type: 'p', text: 'For a broader approach to evaluating suppliers, see:' },
        {
          type: 'links',
          items: [
            {
              label: findReliableSuppliersArticle.title,
              href: articleHref(findReliableSuppliersArticle),
            },
          ],
        },
      ],
    },

    {
      type: 'section',
      id: 'when-manufacturer',
      heading: 'When a Manufacturer May Make Sense',
      blocks: [
        { type: 'p', text: 'Working directly with a manufacturer may be suitable when:' },
        {
          type: 'list',
          items: [
            'You have a clearly defined product.',
            'You need significant customization.',
            'Your order quantity is suitable for the factory’s production model.',
            'You expect regular repeat orders.',
            'You want to communicate directly about production details.',
          ],
        },
      ],
    },

    {
      type: 'section',
      id: 'when-trading-company',
      heading: 'When a Trading Company May Make Sense',
      blocks: [
        { type: 'p', text: 'A trading company may be useful when:' },
        {
          type: 'list',
          items: [
            'You need products from several different categories.',
            'You want to work with multiple factories through one contact.',
            'You are placing smaller or mixed orders.',
            'You need help comparing suppliers.',
            'You need support with purchasing, packaging, quality control, or shipping.',
            'You do not have your own sourcing team in China.',
          ],
        },
      ],
    },

    {
      type: 'section',
      id: 'most-important-question',
      heading: 'The Most Important Question: Who Can Best Meet Your Requirements?',
      blocks: [
        {
          type: 'p',
          text: 'The manufacturer-versus-trading-company question can sometimes become too focused on labels.',
        },
        {
          type: 'p',
          text: 'What matters more is whether the supplier can meet your actual requirements.',
        },
        {
          type: 'list',
          items: [
            'Can they provide the product you need?',
            'Do they understand your specifications?',
            'Is the pricing reasonable for the complete order?',
            'Can they meet your quantity and timeline?',
            'Can they handle customization and packaging?',
            'Can they communicate clearly?',
            'Can quality be checked before shipment?',
          ],
        },
        {
          type: 'p',
          text: 'A reliable trading company can be more useful than an unsuitable manufacturer. Likewise, a capable manufacturer can be the right choice when your project requires direct production coordination.',
        },
      ],
    },

    {
      type: 'section',
      id: 'not-always-one',
      heading: "You Don't Always Have to Choose One",
      blocks: [
        {
          type: 'p',
          text: 'For some sourcing projects, the best approach may involve both.',
        },
        {
          type: 'p',
          text: 'A sourcing partner can research several manufacturers, compare their capabilities and quotations, and coordinate the order with the most suitable supplier. This can be especially useful when the buyer does not have a team in China.',
        },
        {
          type: 'p',
          text: 'The goal is not to avoid trading companies or insist on buying directly from factories. The goal is to build a sourcing process that fits the product and the buyer.',
        },
      ],
    },

    {
      type: 'section',
      id: 'final-thoughts',
      heading: 'Final Thoughts',
      blocks: [
        {
          type: 'p',
          text: 'A manufacturer and a trading company serve different roles in the supply chain.',
        },
        {
          type: 'p',
          text: 'Manufacturers provide direct access to production. Trading companies can provide supplier access, product range, and coordination across multiple factories.',
        },
        {
          type: 'p',
          text: 'Before choosing a supplier, look beyond the label and evaluate the complete picture: product capability, pricing, MOQ, customization, communication, quality control, and order management.',
        },
        {
          type: 'p',
          text: 'For overseas buyers, having the right sourcing partner can make this comparison much easier.',
        },
        {
          type: 'p',
          text: 'SOURDEN can research and compare suitable suppliers in China, whether the right option is a manufacturer, trading company, or a combination of suppliers for a larger sourcing project.',
        },
        {
          type: 'p',
          text: 'The right supplier is not simply the one with a factory. It is the one that can reliably support the requirements of your order.',
        },
      ],
    },

    /* =====================================================================
       THE CLOSING BAND — the established article call-to-action area, adapted
       to this article's subject (choosing the right supplier type).
       ---------------------------------------------------------------------
       `inToc: false`: it is an action, not a chapter, so the table of contents
       stops at "Final Thoughts". It is rendered as the article's last section
       rather than replaced by the site's `FinalCTA` device, so the document's
       links survive — and the hub brief §15 asks the hub's pages to reach the
       five service detail pages.
       ===================================================================== */
    {
      type: 'section',
      id: 'need-help',
      heading: 'Need Help Researching Suppliers in China?',
      inToc: false,
      blocks: [
        {
          type: 'p',
          text: 'If you are not sure whether a manufacturer or a trading company is the right fit for your order, you can send us your product, expected quantity, and requirements.',
        },
        {
          type: 'p',
          text: 'SOURDEN can research and compare suitable suppliers in China, whether the right option is a manufacturer, a trading company, or a combination of both.',
        },
        {
          type: 'links',
          items: [primaryCta, serviceLink('product-sourcing')],
        },
      ],
    },
  ],
};
