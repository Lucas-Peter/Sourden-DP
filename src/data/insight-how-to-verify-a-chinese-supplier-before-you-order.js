/**
 * SOURDEN — /insights/how-to-verify-a-chinese-supplier-before-you-order
 * ---------------------------------------------------------------------------
 * Article 02 of 12, transcribed from the authored document
 * `网站开发/Insight文章/02 How to Verify a Chinese Supplier Before You Order.docx`.
 *
 * ── THE COPY IS THE DOCUMENT'S, VERBATIM ───────────────────────────────────
 * Every sentence below is the document's own text, transcribed rather than
 * rewritten, exactly as article 01's body and `legal-privacy.js` treat their
 * sources: these are the words the business chose to publish. The only strings
 * this file ADDS are `tocHeading` (the table-of-contents label, which the
 * document does not have) and the closing band's two link targets — both
 * derived, never typed (see the LINKS note below).
 *
 * ── REUSES ARTICLE 01'S SHAPE, ADAPTS TO THIS CONTENT ─────────────────────
 * This article does not introduce any new page style. It uses the same block
 * architecture article 01 uses — one array of `sections`, each holding typed
 * blocks (`p` / `list` / `h3` / `table` / `links`) — and the same
 * `InsightArticlePage.astro` shell renders it. The document's shape is the only
 * thing that differs: article 01 is seventeen numbered chapters; this one is
 * eight, plus a checklist and a closing band. No new markup, no new CSS.
 *
 * ── WHAT THIS FILE DOES NOT DECLARE ────────────────────────────────────────
 * The article's TITLE, listing sentence and category live in
 * `insights-articles.js`, which the hub already renders from. They are not
 * repeated here: a second copy is how the card on `/insights` and the H1 on
 * this page would drift apart. The shell reads that record and this file
 * supplies only the body.
 *
 * ── THE BOLD AND QUOTE MARKUP IS DROPPED ON PURPOSE ────────────────────────
 * The source document uses `**bold**` and `>` blockquotes. The body block
 * vocabulary (`p` / `list` / `h3` / `table` / `links`) has no inline-emphasis
 * or blockquote type, and `InsightArticlePage.astro` THROWS on an unknown
 * block, so emphasis that cannot be rendered is transcribed as plain text. The
 * document's `**` are removed and its `>` examples become plain paragraphs
 * wrapped in straight quotes — the same treatment article 01 gave its own
 * bolded and quoted lines. The wording is untouched; only the unrenderable
 * markers are gone.
 *
 * ── THE IMAGE SLOTS ARE DROPPED ON PURPOSE ─────────────────────────────────
 * Article 01's 17 `[Image]` placeholders were template residue with no artwork
 * behind them; this document carries no `[Image]` paragraphs at all. The article
 * is text only, which is also what §7 of the hub brief prefers over a poor
 * stock photograph. Adding a real photograph later means a `media.js` slot and
 * one `figure` block — not a change to any other article.
 *
 * ── THE SECOND H1 ─────────────────────────────────────────────────────────
 * The document writes "Final Thoughts" as a second Heading 1. The site allows
 * exactly one H1 per page, so it is a section here like every other — its
 * wording is untouched, only its level.
 *
 * ── LINKS ARE DERIVED, NEVER TYPED ─────────────────────────────────────────
 * The only links on this page are the closing band's two, and both are derived:
 *   · "Start a Sourcing Request" → `primaryCta` from `site.js`, the site's one
 *     primary action.
 *   · "Supplier Verification"     → `serviceLink('supplier-verification')`, so
 *     the label is the service registry's published name, not a retyped one.
 * The document does not name a sibling article to point at, so no cross-article
 * link is added — an invented "see also" would be a fabricated cross-reference.
 * ---------------------------------------------------------------------------
 */

import { serviceLink } from './service-links.js';
import { primaryCta } from './site.js';

/** @type {{ tocHeading: string, sections: Array<Record<string, any>> }} */
export const page = {
  /**
   * 〔added〕 The document has no table of contents. The article is eight
   * numbered chapters plus a checklist and closing band, so the hub's page
   * gives it one; this is the only string in this file that is not the author's.
   * Kept identical to article 01's label for consistency across the library.
   */
  tocHeading: 'In this guide',

  sections: [
    /* =====================================================================
       INTRODUCTION — the four opening paragraphs, before the first chapter.
       Deliberately unnumbered and absent from the table of contents: it has no
       heading to link to, and "Introduction" is a label the document does not
       use.
       ===================================================================== */
    {
      type: 'lead',
      blocks: [
        { type: 'p', text: 'Finding a supplier in China is only the first step.' },
        {
          type: 'p',
          text: 'A supplier may have the right product, attractive pricing, and professional-looking photos. But that does not necessarily mean they are the right supplier for your order.',
        },
        {
          type: 'p',
          text: 'Before placing an order, it is worth taking some time to understand who you are dealing with, what they can actually provide, and whether their terms match your requirements.',
        },
        {
          type: 'p',
          text: 'You do not need to investigate every supplier like a large corporation. A practical verification process can help you identify potential problems before money and time are committed.',
        },
      ],
    },

    /* =====================================================================
       THE EIGHT NUMBERED CHAPTERS — the document's own numbering, kept in the
       heading text. No CSS counter: the numbers are part of the headings, and a
       counter would print them twice.
       ===================================================================== */
    {
      type: 'section',
      id: 'supplier-basic-information',
      heading: "1. Start With the Supplier's Basic Information",
      blocks: [
        { type: 'p', text: 'First, understand who the supplier actually is.' },
        { type: 'p', text: 'Ask for basic company information, such as:' },
        {
          type: 'list',
          items: [
            'Company name',
            'Business location',
            'Main products',
            'Years in business',
            'Website or online presence',
            'Main export markets',
            'Contact information',
          ],
        },
        {
          type: 'p',
          text: "If possible, check whether the company's information is consistent across different sources.",
        },
        {
          type: 'p',
          text: 'For example, the company name on a quotation should not be completely different from the name used in other business documents without a reasonable explanation.',
        },
        {
          type: 'p',
          text: 'You should also understand whether you are dealing with a manufacturer, trading company, or sourcing intermediary.',
        },
        {
          type: 'p',
          text: 'A trading company is not necessarily a problem. In some cases, a trading company may offer a wider product range or better access to different factories. The important point is knowing who you are actually buying from.',
        },
      ],
    },

    {
      type: 'section',
      id: 'can-make-your-product',
      heading: '2. Check Whether They Can Make Your Product',
      blocks: [
        {
          type: 'p',
          text: 'A supplier may sell products similar to yours without actually being experienced in producing your specific product.',
        },
        { type: 'p', text: 'Ask questions about:' },
        {
          type: 'list',
          items: [
            'Product specifications',
            'Available materials',
            'Production methods',
            'Customization options',
            'Packaging',
            'Available colors and sizes',
            'Relevant certifications or testing, when applicable',
            'Production lead time',
          ],
        },
        { type: 'p', text: 'If you need a customized product, this becomes even more important.' },
        {
          type: 'p',
          text: 'For example, if you need a custom logo, special packaging, a particular material, or a specific construction, ask the supplier to confirm exactly what they can provide.',
        },
        { type: 'p', text: 'Do not rely only on product photos.' },
        {
          type: 'p',
          text: "A supplier's catalog may show many products, but that does not mean every product is produced by the same factory or that the supplier has the same level of experience with each one.",
        },
      ],
    },

    {
      type: 'section',
      id: 'compare-the-quotation',
      heading: '3. Compare the Quotation Carefully',
      blocks: [
        {
          type: 'p',
          text: 'Price is important, but the lowest quotation is not automatically the best option.',
        },
        {
          type: 'p',
          text: 'When comparing suppliers, make sure you are comparing the same requirements.',
        },
        { type: 'p', text: 'Look at:' },
        {
          type: 'list',
          items: [
            'Unit price',
            'MOQ',
            'Sample cost',
            'Customization cost',
            'Packaging cost',
            'Tooling or mold fees',
            'Production lead time',
            'Payment terms',
            'Shipping terms',
          ],
        },
        {
          type: 'p',
          text: 'A supplier may quote a lower unit price but have a higher MOQ or additional costs for packaging and customization.',
        },
        {
          type: 'p',
          text: 'For this reason, it is better to compare the complete order cost rather than just the product price.',
        },
      ],
    },

    {
      type: 'section',
      id: 'moq-and-lead-time',
      heading: '4. Ask Clear Questions About MOQ and Lead Time',
      blocks: [
        { type: 'p', text: 'MOQ can vary significantly between suppliers and products.' },
        {
          type: 'p',
          text: 'If your initial order is small, tell the supplier your expected quantity instead of simply asking, "What is your MOQ?"',
        },
        { type: 'p', text: 'For example:' },
        {
          type: 'p',
          text: '"We are looking to start with approximately 100 units and may increase the quantity for future orders."',
        },
        {
          type: 'p',
          text: 'This gives the supplier useful context and may lead to a more realistic discussion.',
        },
        { type: 'p', text: 'The same applies to production time.' },
        {
          type: 'p',
          text: 'Ask when production can actually start and how long the order is expected to take after the specifications and payment are confirmed.',
        },
        {
          type: 'p',
          text: 'If you have a specific deadline, tell the supplier before placing the order.',
        },
      ],
    },

    {
      type: 'section',
      id: 'communication',
      heading: '5. Pay Attention to Communication',
      blocks: [
        {
          type: 'p',
          text: 'Communication is one of the most useful parts of supplier evaluation.',
        },
        {
          type: 'p',
          text: 'You are not only checking whether the supplier responds quickly. You also want to see whether they understand your requirements and answer your questions accurately.',
        },
        { type: 'p', text: 'Pay attention to whether the supplier:' },
        {
          type: 'list',
          items: [
            'Answers specific questions',
            'Confirms specifications clearly',
            'Points out potential issues',
            'Provides consistent information',
            'Communicates changes promptly',
            'Understands your product requirements',
          ],
        },
        {
          type: 'p',
          text: 'A supplier who simply says "yes" to everything may not necessarily be easier to work with.',
        },
        {
          type: 'p',
          text: 'For customized or complex orders, clear communication can be more valuable than a small difference in unit price.',
        },
      ],
    },

    {
      type: 'section',
      id: 'order-a-sample',
      heading: '6. Consider Ordering a Sample',
      blocks: [
        {
          type: 'p',
          text: 'For many products, a sample is one of the most practical ways to evaluate a supplier.',
        },
        { type: 'p', text: 'A sample can help you check:' },
        {
          type: 'list',
          items: [
            'Product quality',
            'Materials',
            'Dimensions',
            'Color',
            'Workmanship',
            'Packaging',
            'Function',
            'Whether the product matches your requirements',
          ],
        },
        {
          type: 'p',
          text: 'However, a sample is not a guarantee that the entire production run will be identical.',
        },
        {
          type: 'p',
          text: 'If the order is important, the final production requirements should be clearly documented. For larger orders, you may also consider arranging a quality inspection before shipment.',
        },
      ],
    },

    {
      type: 'section',
      id: 'look-for-consistency',
      heading: '7. Look for Consistency, Not Just One "Good" Sign',
      blocks: [
        {
          type: 'p',
          text: 'Supplier verification should not depend on one piece of information.',
        },
        {
          type: 'p',
          text: 'Instead, look for consistency across the entire sourcing process.',
        },
        { type: 'p', text: 'For example:' },
        {
          type: 'list',
          items: [
            'Company information → Product capability → Quotation → Sample → Order details → Production communication',
          ],
        },
        {
          type: 'p',
          text: 'If these parts generally match, you have a clearer picture of the supplier.',
        },
        {
          type: 'p',
          text: 'On the other hand, significant inconsistencies deserve further questions.',
        },
        {
          type: 'p',
          text: 'For example, the company says it manufactures a product, but cannot explain basic production details. Or the quotation changes significantly without a clear reason.',
        },
        {
          type: 'p',
          text: 'These situations do not automatically mean the supplier is unreliable, but they are reasons to slow down and ask more questions.',
        },
      ],
    },

    {
      type: 'section',
      id: 'verification-cannot-eliminate-risk',
      heading: "8. Don't Expect Verification to Eliminate All Risk",
      blocks: [
        {
          type: 'p',
          text: 'Even after checking a supplier, there is still some uncertainty in international sourcing.',
        },
        {
          type: 'p',
          text: 'Supplier verification can help you understand a supplier better and reduce avoidable risks, but it cannot guarantee future performance.',
        },
        {
          type: 'p',
          text: 'Production quality, raw materials, lead times, communication, and other factors can change over time.',
        },
        {
          type: 'p',
          text: 'For larger or more important orders, it can therefore make sense to use several layers of protection:',
        },
        {
          type: 'list',
          items: [
            'Supplier verification → Sample approval → Clear order specifications → Production follow-up → Pre-shipment inspection',
          ],
        },
        {
          type: 'p',
          text: 'The appropriate level of checking depends on the product, order value, and potential risk.',
        },
      ],
    },

    /* =====================================================================
       THE PRACTICAL CHECKLIST
       ---------------------------------------------------------------------
       Not a numbered chapter in the document, and not a numbered one here: it
       is a reference block. It uses a single flat list (the document groups the
       questions under one heading, with no internal sub-topics) rather than the
       five `h3` groups article 01's checklist used — because that article's
       checklist had five natural topics and this one does not.
       ===================================================================== */
    {
      type: 'section',
      id: 'verification-checklist',
      heading: 'A Practical Supplier Verification Checklist',
      blocks: [
        {
          type: 'p',
          text: 'Before placing an order, you should be able to answer these questions:',
        },
        {
          type: 'list',
          items: [
            'Who is the supplier?',
            'Are they a manufacturer or trading company?',
            'Can they make the product you actually need?',
            'Do they understand your specifications?',
            'What is the MOQ?',
            'What is the complete cost?',
            'What is the production lead time?',
            'What customization is available?',
            'Can they provide a sample?',
            'Are the quotation and product details clear?',
            'Are their answers consistent?',
            'Do you need a quality inspection before shipment?',
          ],
        },
        { type: 'p', text: 'You do not need to make the process complicated.' },
        {
          type: 'p',
          text: 'The goal is simply to know who you are buying from, what you are buying, what it will cost, and what will happen after you place the order.',
        },
      ],
    },

    {
      type: 'section',
      id: 'final-thoughts',
      heading: 'Final Thoughts',
      blocks: [
        { type: 'p', text: 'Finding a supplier is about identifying options.' },
        {
          type: 'p',
          text: 'Verifying a supplier is about understanding those options before making a commitment.',
        },
        {
          type: 'p',
          text: "A professional supplier evaluation does not mean assuming every supplier is risky. It means asking the right questions, comparing the relevant information, and making sure the supplier's capabilities match your requirements.",
        },
        {
          type: 'p',
          text: 'For buyers who do not have a sourcing team in China, this process can take considerable time and communication.',
        },
        {
          type: 'p',
          text: 'SOURDEN can help research and compare suitable suppliers, clarify product and order requirements, coordinate communication, and support the sourcing process from supplier selection through purchasing and quality control.',
        },
        {
          type: 'p',
          text: "You don't need to know everything about sourcing from China before you start.",
        },
        { type: 'p', text: 'You just need to start with the right questions.' },
      ],
    },

    /* =====================================================================
       THE CLOSING BAND — the document's own ending, and the page's only call to
       action area. `inToc: false`: it is an action, not a chapter, so the table
       of contents stops at "Final Thoughts". Rendered as the article's last
       section rather than replaced by the site's `FinalCTA` device, so the
       document's two links survive — one of them reaches the Supplier
       Verification service page, which §15 of the hub brief requires this area
       to reach.
       ===================================================================== */
    {
      type: 'section',
      id: 'need-help',
      heading: 'Need Help Verifying a Supplier?',
      inToc: false,
      blocks: [
        {
          type: 'p',
          text: 'If you are reviewing a supplier or preparing to place an order, SOURDEN can help research and compare suitable suppliers, confirm product and order requirements, coordinate communication, and support the process from supplier selection through purchasing and quality control.',
        },
        {
          type: 'p',
          text: 'Start with the details you already have — the product, your expected quantity, the specifications, and where the goods need to go. We can take it from there.',
        },
        {
          type: 'links',
          items: [primaryCta, serviceLink('supplier-verification')],
        },
      ],
    },
  ],
};
