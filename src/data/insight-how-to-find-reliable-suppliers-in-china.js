/**
 * SOURDEN — /insights/how-to-find-reliable-suppliers-in-china
 * ---------------------------------------------------------------------------
 * Article 01 of 12, transcribed from the authored document
 * `网站开发/Insight文章/01 How to Find Reliable Suppliers in China.docx`.
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
 * In the source document each bulleted item is THREE paragraphs: an empty
 * bulleted paragraph, the text, and a second empty bulleted paragraph — 282
 * empty ones across the file. The text of a list item is therefore a PLAIN
 * paragraph, indistinguishable by type from body copy. Rendering the document
 * mechanically would have flattened every list into loose sentences separated
 * by blank lines. The lists below are the author's own groupings, read back
 * from the document's structure and its punctuation.
 *
 * ── THE IMAGE SLOTS ARE DROPPED ON PURPOSE ─────────────────────────────────
 * The document carries 17 `[Image]` placeholder paragraphs and NO embedded
 * image at all (`doc_get_images` returns an empty array). They are template
 * residue, not artwork, so they are not reproduced here. The article is text
 * only, which is also what §7 of the hub brief prefers over a poor stock
 * photograph. Adding a real photograph later means a `media.js` slot and one
 * `figure` block — not a change to any other article.
 *
 * ── LINKS ARE DERIVED, NEVER TYPED ─────────────────────────────────────────
 * The document names three destinations and this file hard-codes none of them:
 *   · "Start a Sourcing Request"  → `primaryCta` from `site.js`, the site's one
 *     primary action.
 *   · "Explore Supplier Verification" → `serviceLink('supplier-verification')`.
 *     The label comes from the service registry, so it reads "Supplier
 *     Verification" — the site's published name for that service. The
 *     document's "Explore " prefix is dropped rather than kept as a typed
 *     service name, which is the one thing a cross-page reference may not do.
 *   · "China Supplier vs. Trading Company…" → `articleFor(slug)</code>` in
 *     `insights-articles.js`, so the link label is the other article's real
 *     title rather than a retyped one.
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
 * The one article this one links to in §3. Read from the registry so the link
 * text is that article's real title, and its href its real route — both derived
 * from the same record the `/insights` directory renders its card from.
 */
const tradingCompanyArticle = articleFor('china-supplier-vs-trading-company');

/** @type {{ tocHeading: string, sections: Array<Record<string, any>> }} */
export const page = {
  /**
   * 〔added〕 The document has no table of contents. The article is seventeen
   * numbered chapters long, so the hub's page gives it one; this is the only
   * string in this file that is not the author's.
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
        { type: 'p', text: 'Finding a supplier in China is relatively easy.' },
        {
          type: 'p',
          text: 'Finding a supplier that actually fits your product, quality requirements, order quantity, target price and business needs is much harder.',
        },
        {
          type: 'p',
          text: 'There are thousands of manufacturers, trading companies and suppliers serving different industries and markets. The challenge is not simply finding someone who sells the product you want. It is understanding whether that supplier is suitable for your specific order.',
        },
        {
          type: 'p',
          text: 'This guide explains a practical way to research and evaluate suppliers in China before you place an order.',
        },
      ],
    },

    /* =====================================================================
       THE SEVENTEEN NUMBERED CHAPTERS — the document's own numbering, kept in
       the heading text. There is deliberately NO CSS counter anywhere in this
       page: the numbers are part of the headings, and a counter would print
       them twice ("01  1. Start With…") — the failure `/privacy-policy` was
       built to avoid.
       ===================================================================== */
    {
      type: 'section',
      id: 'start-with-the-product',
      heading: '1. Start With the Product, Not the Supplier',
      blocks: [
        {
          type: 'p',
          text: 'One of the most common sourcing mistakes is starting with a supplier search before clearly defining the product.',
        },
        {
          type: 'p',
          text: 'Before contacting suppliers, try to establish as much as possible about what you actually need.',
        },
        { type: 'p', text: 'For example:' },
        {
          type: 'list',
          items: [
            'What is the product?',
            'What materials should it use?',
            'What size or dimensions are required?',
            'What quantity do you expect to purchase?',
            'Do you need customization?',
            'What packaging do you need?',
            'What is your target price?',
            'Where will the products be sold or used?',
            'What country will they be shipped to?',
          ],
        },
        {
          type: 'p',
          text: 'You do not need to have every detail finalized before starting.',
        },
        {
          type: 'p',
          text: 'However, the clearer your requirements are, the easier it becomes to compare suppliers on the same basis.',
        },
        {
          type: 'p',
          text: 'A supplier may appear inexpensive simply because their quotation does not include the same specifications, packaging or customization as another supplier.',
        },
        {
          type: 'p',
          text: 'A supplier can only be evaluated properly when you know what you are asking them to supply.',
        },
      ],
    },

    {
      type: 'section',
      id: 'where-to-find-suppliers',
      heading: '2. Where Can You Find Suppliers in China?',
      blocks: [
        {
          type: 'p',
          text: 'There is no single place where all suitable suppliers can be found.',
        },
        {
          type: 'p',
          text: 'Depending on the product, buyers may discover suppliers through:',
        },
        {
          type: 'list',
          items: [
            'B2B marketplaces',
            'Industry directories',
            'Trade shows',
            'Supplier websites',
            'Industry contacts',
            'Referrals',
            'Sourcing companies',
            'Existing supplier networks',
          ],
        },
        {
          type: 'p',
          text: 'Online marketplaces can be useful for initial research because they make it relatively easy to identify multiple suppliers and compare basic product information.',
        },
        { type: 'p', text: 'But an online listing is only a starting point.' },
        {
          type: 'p',
          text: "A polished product page does not tell you everything about the supplier's actual production capability, communication, quality control or suitability for your order.",
        },
        { type: 'p', text: 'The important question is not:' },
        { type: 'p', text: '"Can I find a supplier selling this product?"' },
        { type: 'p', text: 'It is:' },
        {
          type: 'p',
          text: '"Can I find a supplier that is suitable for my specific requirements?"',
        },
      ],
    },

    {
      type: 'section',
      id: 'manufacturer-or-trading-company',
      heading: '3. Manufacturer or Trading Company?',
      blocks: [
        {
          type: 'p',
          text: 'When researching Chinese suppliers, you will often encounter both manufacturers and trading companies.',
        },
        {
          type: 'p',
          text: 'A manufacturer generally produces products directly, while a trading company may source products from one or more factories and manage the relationship with the buyer.',
        },
        { type: 'p', text: 'Neither category is automatically right or wrong.' },
        { type: 'p', text: 'A manufacturer may be useful when you need:' },
        {
          type: 'list',
          items: [
            'Custom manufacturing',
            'Technical specifications',
            'Larger production volumes',
            'Direct communication with production',
            'Long-term manufacturing relationships',
          ],
        },
        { type: 'p', text: 'A trading company may be useful when you need:' },
        {
          type: 'list',
          items: [
            'A broader range of products',
            'Multiple product categories',
            'Consolidation from different factories',
            'Lower-volume purchasing',
            'A single point of contact for several products',
          ],
        },
        {
          type: 'p',
          text: 'The important thing is to understand who you are dealing with and what role they play in your supply chain.',
        },
        {
          type: 'p',
          text: 'Do not assume that a manufacturer is always the better option simply because the word "factory" appears in a supplier profile.',
        },
        { type: 'p', text: 'For more on this topic, see:' },
        {
          type: 'links',
          items: [
            {
              label: tradingCompanyArticle.title,
              href: articleHref(tradingCompanyArticle),
            },
          ],
        },
      ],
    },

    {
      type: 'section',
      id: 'beyond-product-photos',
      heading: '4. Look Beyond the Product Photos',
      blocks: [
        {
          type: 'p',
          text: 'Product photos are useful, but they are one of the least reliable ways to evaluate a supplier by themselves.',
        },
        {
          type: 'p',
          text: 'When researching a supplier, look beyond the product listing.',
        },
        { type: 'p', text: 'Consider questions such as:' },
        {
          type: 'list',
          items: [
            'Does the supplier regularly produce this type of product?',
            'Can they meet your required specifications?',
            'What materials do they use?',
            'What production capabilities do they have?',
            'What quantities do they normally handle?',
            'Can they support your customization requirements?',
            'What is their MOQ?',
            'What is their expected production lead time?',
            'Can they provide samples?',
            'How clearly do they communicate?',
          ],
        },
        {
          type: 'p',
          text: 'A supplier may have an attractive product catalog but still be unsuitable for your order.',
        },
        {
          type: 'p',
          text: 'Likewise, a supplier with a less impressive online presence may have strong production capabilities.',
        },
        {
          type: 'p',
          text: 'Online presentation and actual supplier suitability are not the same thing.',
        },
      ],
    },

    {
      type: 'section',
      id: 'same-basic-questions',
      heading: '5. Ask the Same Basic Questions',
      blocks: [
        {
          type: 'p',
          text: 'When comparing several suppliers, try to give them the same product requirements and ask comparable questions.',
        },
        { type: 'p', text: 'This makes the quotations easier to evaluate.' },
        {
          type: 'p',
          text: 'For example, you might ask each supplier to confirm:',
        },
        /* The document's only table, 12 rows × 2 columns. Its first row is the
           header; the remaining eleven are the body. */
        {
          type: 'table',
          head: ['Requirement', 'What to Confirm'],
          rows: [
            ['Product', 'Exact product and model'],
            ['Material', 'Material specification'],
            ['Size', 'Dimensions or size range'],
            ['Quantity', 'Expected order quantity'],
            ['MOQ', 'Minimum order quantity'],
            ['Price', 'Unit price and quotation basis'],
            ['Customization', 'Available options'],
            ['Packaging', 'Standard or custom packaging'],
            ['Sample', 'Availability and cost'],
            ['Production', 'Estimated production time'],
            ['Shipping', 'Available shipping options'],
          ],
        },
        {
          type: 'p',
          text: 'This process can reveal differences that are not obvious from the initial quotation.',
        },
        {
          type: 'p',
          text: 'For example, Supplier A may quote a lower unit price but have a higher MOQ or exclude custom packaging.',
        },
        {
          type: 'p',
          text: 'Supplier B may have a slightly higher unit price but offer the exact specification you need and a more suitable MOQ.',
        },
        {
          type: 'p',
          text: 'The cheaper quotation is not necessarily the lower-cost option once everything is considered.',
        },
      ],
    },

    {
      type: 'section',
      id: 'moq',
      heading: '6. Pay Attention to MOQ',
      blocks: [
        { type: 'p', text: 'MOQ means Minimum Order Quantity.' },
        {
          type: 'p',
          text: 'It is one of the most important factors when sourcing from China, particularly for small businesses and new buyers.',
        },
        { type: 'p', text: 'A supplier may have an MOQ because of:' },
        {
          type: 'list',
          items: [
            'Production setup costs',
            'Raw material purchasing',
            'Packaging requirements',
            'Customization',
            'Printing or tooling',
            'Factory production efficiency',
          ],
        },
        {
          type: 'p',
          text: 'MOQ can vary significantly between products and suppliers.',
        },
        {
          type: 'p',
          text: 'If you are starting with a small order, do not immediately assume that a supplier with a high MOQ is your only option.',
        },
        { type: 'p', text: 'You can ask whether:' },
        {
          type: 'list',
          items: [
            'A smaller quantity is possible',
            'A standard product has a lower MOQ',
            'A sample or trial order is available',
            'Customization can be simplified',
            'Another supplier can meet the required quantity',
          ],
        },
        {
          type: 'p',
          text: 'This is one reason supplier research should involve more than finding the first supplier that offers the product.',
        },
      ],
    },

    {
      type: 'section',
      id: 'communication',
      heading: '7. Evaluate Communication',
      blocks: [
        {
          type: 'p',
          text: 'Communication is often underestimated when choosing a supplier.',
        },
        {
          type: 'p',
          text: 'A supplier may offer a competitive price, but if specifications are repeatedly misunderstood or questions are not answered clearly, problems can appear later in production.',
        },
        { type: 'p', text: 'Pay attention to whether the supplier:' },
        {
          type: 'list',
          items: [
            'Understands your requirements',
            'Answers specific questions',
            'Provides complete information',
            'Communicates changes clearly',
            'Confirms important specifications in writing',
            'Raises potential problems before production',
            'Responds consistently during the sourcing process',
          ],
        },
        {
          type: 'p',
          text: 'Good communication does not guarantee a successful order.',
        },
        {
          type: 'p',
          text: 'But poor communication can make an otherwise suitable supplier much harder to work with.',
        },
        {
          type: 'p',
          text: 'For international buyers, this can be especially important because many product details that seem obvious in person need to be communicated remotely.',
        },
      ],
    },

    {
      type: 'section',
      id: 'meet-your-requirements',
      heading: '8. Check Whether the Supplier Can Actually Meet Your Requirements',
      blocks: [
        {
          type: 'p',
          text: "Supplier capability should be evaluated against your product, not just the supplier's general catalog.",
        },
        {
          type: 'p',
          text: 'For example, suppose you need a customized product with:',
        },
        {
          type: 'list',
          items: [
            'A specific material',
            'A particular dimension',
            'Custom packaging',
            'A relatively small order quantity',
          ],
        },
        {
          type: 'p',
          text: 'A supplier may produce a similar standard product but have no practical way to meet all four requirements.',
        },
        { type: 'p', text: 'That supplier may still be a legitimate business.' },
        { type: 'p', text: 'They are simply not the right supplier for your project.' },
        { type: 'p', text: 'This distinction is important:' },
        {
          type: 'p',
          text: 'A reliable supplier is not necessarily a suitable supplier.',
        },
        {
          type: 'p',
          text: 'The goal of sourcing is to find the supplier that fits the specific job.',
        },
      ],
    },

    {
      type: 'section',
      id: 'samples',
      heading: '9. Ask for a Sample When It Makes Sense',
      blocks: [
        {
          type: 'p',
          text: 'For many products, a sample can provide information that a quotation cannot.',
        },
        { type: 'p', text: 'A sample can help you evaluate:' },
        {
          type: 'list',
          items: [
            'Material',
            'Construction',
            'Size',
            'Appearance',
            'Function',
            'Packaging',
            'Workmanship',
            'Whether the product matches your expectations',
          ],
        },
        {
          type: 'p',
          text: 'For customized products, a sample can also help identify problems before committing to a larger production run.',
        },
        {
          type: 'p',
          text: 'However, a sample is not a guarantee of future bulk production quality.',
        },
        {
          type: 'p',
          text: 'The bulk order should still be based on clearly documented specifications and agreed requirements.',
        },
        {
          type: 'p',
          text: 'If the product is important to your business, keep a record of the approved sample and specifications for future reference.',
        },
      ],
    },

    {
      type: 'section',
      id: 'more-than-price',
      heading: '10. Compare Suppliers on More Than Price',
      blocks: [
        { type: 'p', text: 'Price is important.' },
        { type: 'p', text: 'But it should not be the only factor.' },
        { type: 'p', text: 'A more useful comparison may include:' },
        {
          type: 'p',
          text: 'Product fit + Price + MOQ + Quality + Lead time + Communication + Customization + Packaging + Shipping',
        },
        {
          type: 'p',
          text: 'The weighting of these factors depends on the project.',
        },
        { type: 'p', text: 'For example:' },
        {
          type: 'list',
          items: [
            'A retailer testing a new product may care more about MOQ and product fit.',
            'A growing brand may care more about customization and repeat production.',
            'An industrial buyer may care more about exact specifications, materials and manufacturing capability.',
          ],
        },
        { type: 'p', text: 'There is no universal "best supplier."' },
        {
          type: 'p',
          text: 'There is only a supplier that may be more or less suitable for a particular requirement.',
        },
      ],
    },

    {
      type: 'section',
      id: 'total-cost',
      heading: '11. Consider the Total Cost, Not Just the Unit Price',
      blocks: [
        {
          type: 'p',
          text: "The supplier's unit price is only one part of the final cost.",
        },
        {
          type: 'p',
          text: 'Depending on the product and order, you may also need to consider:',
        },
        {
          type: 'list',
          items: [
            'Customization',
            'Packaging',
            'Tooling',
            'Sample costs',
            'Inspection',
            'Domestic transportation in China',
            'International shipping',
            'Customs duties',
            'Taxes',
            'Other destination charges',
          ],
        },
        {
          type: 'p',
          text: 'For example, a supplier offering a lower unit price may require a much larger order.',
        },
        {
          type: 'p',
          text: 'Another supplier may have a higher unit price but a lower MOQ that allows you to test the market with less inventory.',
        },
        {
          type: 'p',
          text: 'This is why comparing the overall sourcing economics can be more useful than comparing one number.',
        },
      ],
    },

    {
      type: 'section',
      id: 'inconsistencies',
      heading: '12. Watch for Inconsistencies',
      blocks: [
        {
          type: 'p',
          text: 'During supplier communication, pay attention to information that changes unexpectedly.',
        },
        { type: 'p', text: 'For example:' },
        {
          type: 'list',
          items: [
            'The product specification changes between messages',
            'The MOQ suddenly increases',
            'The quotation changes without explanation',
            'Production time is unclear',
            'Packaging details are not confirmed',
            'The supplier cannot answer basic product questions',
            'Different people provide conflicting information',
          ],
        },
        {
          type: 'p',
          text: 'One inconsistency does not automatically mean that a supplier is unreliable.',
        },
        {
          type: 'p',
          text: 'However, repeated inconsistencies are worth investigating before placing an order.',
        },
        {
          type: 'p',
          text: 'When something is unclear, ask for clarification and confirm important details in writing.',
        },
      ],
    },

    {
      type: 'section',
      id: 'supplier-verification',
      heading: '13. Supplier Verification Is More Than Checking a Company Name',
      blocks: [
        {
          type: 'p',
          text: 'Supplier verification should be connected to the actual sourcing project.',
        },
        {
          type: 'p',
          text: 'Depending on the situation, relevant checks may include:',
        },
        {
          type: 'list',
          items: [
            'Supplier identity and basic business information',
            'Product capability',
            'Production capability',
            'MOQ',
            'Pricing',
            'Lead time',
            'Customization',
            'Communication',
            'Product samples',
            'Packaging',
            'Relevant documentation where applicable',
          ],
        },
        {
          type: 'p',
          text: 'The depth of verification should match the importance and complexity of the order.',
        },
        {
          type: 'p',
          text: 'A simple consumer product and a technical industrial component should not necessarily go through exactly the same sourcing process.',
        },
        {
          type: 'p',
          text: 'Supplier verification can reduce uncertainty, but it cannot eliminate every possible sourcing risk.',
        },
      ],
    },

    {
      type: 'section',
      id: 'too-good-to-be-true',
      heading: '14. Be Careful With "Too Good to Be True" Quotes',
      blocks: [
        {
          type: 'p',
          text: 'An unusually low quotation deserves closer attention.',
        },
        {
          type: 'p',
          text: 'There may be a legitimate reason for a lower price:',
        },
        {
          type: 'list',
          items: [
            'Different material',
            'Different specification',
            'Simpler packaging',
            'Larger MOQ',
            'Different production method',
            'Different quality level',
          ],
        },
        {
          type: 'p',
          text: 'The important thing is to understand why the price is different.',
        },
        { type: 'p', text: 'Instead of asking only:' },
        { type: 'p', text: '"Why is your price cheaper?"' },
        { type: 'p', text: 'Ask:' },
        { type: 'p', text: '"What exactly is included in this quotation?"' },
        { type: 'p', text: 'Then compare the specifications line by line.' },
        {
          type: 'p',
          text: 'A price difference becomes much easier to understand when the underlying requirements are clear.',
        },
      ],
    },

    {
      type: 'section',
      id: 'start-small',
      heading: '15. Start Small When You Are Testing a New Supplier',
      blocks: [
        {
          type: 'p',
          text: 'If you have never worked with a supplier before, a smaller initial order can sometimes be a practical way to learn how the relationship works.',
        },
        { type: 'p', text: 'You can observe:' },
        {
          type: 'list',
          items: [
            'Communication',
            'Production process',
            'Product consistency',
            'Packaging',
            'Delivery coordination',
            'Response to problems',
          ],
        },
        {
          type: 'p',
          text: 'This does not mean every project should start with a small order.',
        },
        {
          type: 'p',
          text: 'For some products, production economics or customization requirements may make a larger initial order necessary.',
        },
        {
          type: 'p',
          text: 'The appropriate starting quantity depends on the product and your business situation.',
        },
      ],
    },

    {
      type: 'section',
      id: 'supplier-relationship',
      heading: '16. Build a Supplier Relationship, Not Just a Transaction',
      blocks: [
        {
          type: 'p',
          text: 'Once you find a supplier that consistently meets your requirements, the relationship itself becomes valuable.',
        },
        { type: 'p', text: 'Over time, you may develop:' },
        {
          type: 'list',
          items: [
            'More efficient communication',
            'Better understanding of specifications',
            'Repeat-order processes',
            'More consistent packaging',
            'Better production planning',
            'More predictable purchasing',
          ],
        },
        {
          type: 'p',
          text: 'This is particularly important for businesses that expect to reorder the same product.',
        },
        {
          type: 'p',
          text: 'However, maintaining a supplier relationship does not mean you should stop reviewing performance.',
        },
        {
          type: 'p',
          text: 'Product specifications, costs, production conditions and business requirements can change over time.',
        },
      ],
    },

    {
      type: 'section',
      id: 'where-to-start',
      heading: "17. What If You Don't Know Where to Start?",
      blocks: [
        {
          type: 'p',
          text: 'You do not need to become an expert in Chinese supplier research before beginning.',
        },
        { type: 'p', text: 'A useful starting point is simply to define:' },
        {
          type: 'list',
          items: [
            'What you want to buy',
            'What quantity you expect',
            'What specifications matter',
            'Where the products will be shipped',
            'Your target price or budget, if known',
            'Whether you need customization',
            'Any reference photos, samples or links you already have',
          ],
        },
        {
          type: 'p',
          text: 'From there, supplier research can become a structured process rather than a search through hundreds of unrelated listings.',
        },
      ],
    },

    /* =====================================================================
       THE EVALUATION CHECKLIST
       ---------------------------------------------------------------------
       Not a numbered chapter in the document, and not a numbered one here: it
       is a reference block, and it uses `h3` because it is the only section
       with an internal hierarchy. Five groups, thirteen questions — the
       document's own grouping, kept as five lists rather than one flat one,
       because "Product" and "Logistics" are not the same kind of question.
       ===================================================================== */
    {
      type: 'section',
      id: 'evaluation-checklist',
      heading: 'A Practical Supplier Evaluation Checklist',
      blocks: [
        {
          type: 'p',
          text: 'Before placing an order with a new supplier, consider the following:',
        },
        { type: 'h3', text: 'Product' },
        {
          type: 'list',
          items: [
            'Does the supplier understand the exact product?',
            'Are the specifications clearly confirmed?',
            'Are materials and dimensions clear?',
            'Can the supplier provide the required customization?',
          ],
        },
        { type: 'h3', text: 'Commercial Terms' },
        {
          type: 'list',
          items: [
            'What is the MOQ?',
            'What is the unit price?',
            'What is included in the quotation?',
            'What are the sample terms?',
            'What is the expected production time?',
          ],
        },
        { type: 'h3', text: 'Supplier Fit' },
        {
          type: 'list',
          items: [
            'Does the supplier regularly handle this type of product?',
            'Can they support your expected quantity?',
            'Can they communicate clearly?',
            'Can they support repeat orders if needed?',
          ],
        },
        { type: 'h3', text: 'Quality' },
        {
          type: 'list',
          items: [
            'Can you review a sample?',
            'Are quality requirements documented?',
            'Is pre-shipment inspection appropriate?',
            'What happens if the order does not meet the agreed requirements?',
          ],
        },
        { type: 'h3', text: 'Logistics' },
        {
          type: 'list',
          items: [
            'How will the goods be packaged?',
            'What is the estimated shipment size?',
            'Which shipping methods are available?',
            'What destination-country requirements need to be considered?',
          ],
        },
        {
          type: 'p',
          text: 'You do not need every answer to be perfect before starting.',
        },
        {
          type: 'p',
          text: 'But the more important questions you clarify before ordering, the fewer surprises you are likely to encounter later.',
        },
      ],
    },

    {
      type: 'section',
      id: 'final-thoughts',
      heading: 'Final Thoughts',
      blocks: [
        { type: 'p', text: 'Finding a Chinese supplier is not difficult.' },
        {
          type: 'p',
          text: 'Finding the right supplier for a specific product and order requires more work.',
        },
        {
          type: 'p',
          text: 'The most useful approach is to start with clear product requirements, research multiple options, compare suppliers on more than price, verify the factors that matter to your project, and use samples or inspections where appropriate.',
        },
        {
          type: 'p',
          text: 'Most importantly, do not confuse a low quotation with a good sourcing decision.',
        },
        {
          type: 'p',
          text: 'A supplier is valuable when the overall fit works for your product, quantity, quality requirements, business model and long-term needs.',
        },
        {
          type: 'p',
          text: "Good sourcing isn't about finding the cheapest supplier. It's about finding the right supplier for the job.",
        },
      ],
    },

    /* =====================================================================
       THE CLOSING BAND — the document's own ending, and the page's only
       call to action area.
       ---------------------------------------------------------------------
       `inToc: false`: it is an action, not a chapter, so the table of contents
       stops at "Final Thoughts". It is rendered as the article's last section
       rather than replaced by the site's `FinalCTA` device, so the document's
       two links survive — one of them is the only link from this article to a
       service page, and §15 of the hub brief requires the hub's pages to reach
       all five service detail pages.
       ===================================================================== */
    {
      type: 'section',
      id: 'need-help',
      heading: 'Need Help Finding Suppliers in China?',
      inToc: false,
      blocks: [
        {
          type: 'p',
          text: 'If you already know what you want to source, you can send us the details, reference images, specifications, expected quantity and destination.',
        },
        {
          type: 'p',
          text: 'SOURDEN can help research suitable suppliers, compare sourcing options and coordinate the next steps.',
        },
        {
          type: 'links',
          items: [primaryCta, serviceLink('supplier-verification')],
        },
      ],
    },
  ],
};
