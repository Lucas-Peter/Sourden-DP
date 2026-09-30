/**
 * SOURDEN — INSIGHTS ARTICLE LIBRARY
 * ---------------------------------------------------------------------------
 * Every article the Insights hub knows about, from the Insights brief (§5, §13).
 * A LEAF module: it imports nothing, so `insights-page.js` can import it and the
 * route can import that without a cycle. The same rule `service-links.js` states
 * for the services side of the site.
 *
 * ── THIS IS NOT `insights.js` ───────────────────────────────────────────────
 * `src/data/insights.js` holds the HOMEPAGE's three cards, worded by the
 * homepage brief (§18). This file holds the HUB's twelve, worded by the
 * Insights brief. The two briefs specify different text for the same article —
 * article 02 is tagged `SUPPLIER KNOWLEDGE` here but `SUPPLIER VERIFICATION`
 * there. Both texts are real, so both are kept; neither file writes into the
 * other's surface. Editing one does NOT change the other page.
 *   · homepage section → `src/components/Insights.astro` → `insights.js`
 *   · this hub page    → `src/pages/insights/index.astro` → `insights-page.js`
 *
 * ── THE FIELDS THAT ARE GONE, AND WHY THEY WENT WITH THEIR SURFACES ─────────
 * The hub's presentation is now three bands: the hero, this directory and the
 * two closing bands. When it was cut back from seven bands, three things in this
 * module lost their only reader — and a field the page cannot render is worse
 * than no field, because the next person fills it in and nothing happens (the
 * `publishedAt` note below is the same failure, caught in time):
 *
 *   · `featuredSummary` — the LONGER §3 sentence, written for the featured band.
 *     That band is gone and every card, this article's included, prints §5's
 *     `description`. So an article carries exactly ONE sentence now.
 *   · `label` and `description` on a category — §4's seven filter names and §9's
 *     six topic lines. Both bands are gone; the only category word that reaches
 *     the screen is the uppercase `tag` printed on a card.
 *   · the `all` category — that is a filter STATE, not a category an article can
 *     belong to, and with no filter there is no default state to name.
 *
 * The brief still holds every one of them (§4, §9, and each article's §3 entry),
 * so restoring a filter means re-reading the brief, not reconstructing anything.
 *
 * ── THE ARTICLE SHAPE (brief §12) ───────────────────────────────────────────
 * §12 asks the structure to support `slug`, `category`, `title`, `description`,
 * `image`, `publishedDate`, `updatedDate`, `readingTime` and `featured`, and then
 * says to display only the fields that hold real information. All of those
 * fields exist here — which is why this module KEEPS a few that nothing renders
 * today — and the ones that would be fabricated are empty:
 *
 *   · `publishedAt` / `updatedAt` — no article has a publication date, because
 *     none has been published. §6 and §14 both forbid inventing one.
 *     ⚠ FILLING ONE IN DOES NOT MAKE IT APPEAR. No component on this page
 *     renders these fields — `InsightCard.astro` writes no `<time>` and says so
 *     in its own header. Publishing the first dated article is a FIELD change
 *     and a MARKUP change, together. An earlier version of this comment claimed
 *     the card already rendered whatever date it was given, which would have
 *     led straight to filling the field in and seeing nothing — the same
 *     "silently prints nothing" failure as reading `item.category` where the
 *     record holds `categorySlug` (see `routes.js`).
 *   · `readingTime` — same: a reading time for a body that does not exist is a
 *     fabricated statistic (§6, §14).
 *   · `imageKey` — §12's `image` slot. All twelve are `null`: §6 makes the card
 *     image optional and §7 says plainly that "if appropriate high-quality
 *     images are not available, a clean editorial card without an image is
 *     preferable to a poor stock image". No documentary photography exists yet,
 *     so the directory is text-only on purpose. Giving an article a picture is a
 *     `media.js` slot plus this field — nothing else on the page changes.
 *   · `featured` — §12's slot for §14's "only the featured article needs to be
 *     treated as the first priority". Nothing renders it: the directory shows
 *     all twelve equally and in array order, so the first record IS the lead
 *     article. Read it as the record of which article the brief leads with
 *     rather than as a display switch — a featured surface would consume it.
 *
 * ── ORDER IS THE DISPLAY ORDER ─────────────────────────────────────────────
 * The array is the brief's article order (01–12) and the grid renders it as
 * written. Nothing sorts it: a `publishedAt` sort would move every card the day
 * a date is filled in, which is not what a content library should do silently.
 * It is also what decides which articles land on which page of the directory's
 * pagination (§12: "make it easy to add future articles without redesigning the
 * Insights page").
 * ---------------------------------------------------------------------------
 */

/**
 * @typedef {Object} InsightCategory
 * @property {string} slug  Key an article's `categorySlug` points at.
 * @property {string} tag   The short uppercase label printed on a card.
 */

/** @type {InsightCategory[]} */
export const insightCategories = [
  { slug: 'sourcing-guides', tag: 'SOURCING GUIDE' },
  { slug: 'supplier-knowledge', tag: 'SUPPLIER KNOWLEDGE' },
  { slug: 'purchasing', tag: 'PURCHASING' },
  { slug: 'quality-control', tag: 'QUALITY CONTROL' },
  { slug: 'shipping', tag: 'SHIPPING' },
  { slug: 'product-sourcing', tag: 'PRODUCT SOURCING' },
];

/**
 * @typedef {Object} InsightArticle
 * @property {string}      slug
 * @property {string}      categorySlug    Key into `insightCategories`.
 * @property {string}      title
 * @property {string}      description     The listing sentence (§5) — the card's.
 * @property {string|null} imageKey        Key from `media.js`, or null.
 * @property {string|null} publishedAt     ISO date. null — nothing is published.
 * @property {string|null} updatedAt       ISO date. null — nothing is published.
 * @property {string|null} readingTime     null — a body that does not exist has no reading time.
 * @property {boolean}     featured        §14's first priority. Nothing renders it.
 */

/** @type {InsightArticle[]} */
export const insightArticles = [
  {
    slug: 'how-to-find-reliable-suppliers-in-china',
    categorySlug: 'sourcing-guides',
    title: 'How to Find Reliable Suppliers in China',
    description:
      'A practical guide to researching suppliers, comparing options and identifying suppliers that fit your product and purchasing requirements.',
    imageKey: null,
    publishedAt: null,
    updatedAt: null,
    readingTime: null,
    featured: true,
  },
  {
    slug: 'how-to-verify-a-chinese-supplier-before-you-order',
    categorySlug: 'supplier-knowledge',
    title: 'How to Verify a Chinese Supplier Before You Order',
    description:
      'What to look at before choosing a supplier, including product capability, MOQ, pricing, communication, production and other practical considerations.',
    imageKey: null,
    publishedAt: null,
    updatedAt: null,
    readingTime: null,
    featured: false,
  },
  {
    slug: 'china-supplier-vs-trading-company',
    categorySlug: 'supplier-knowledge',
    title: "China Supplier vs. Trading Company: What's the Difference?",
    description:
      'Understand the practical differences between manufacturers and trading companies, and why the right choice depends on your product and sourcing requirements.',
    imageKey: null,
    publishedAt: null,
    updatedAt: null,
    readingTime: null,
    featured: false,
  },
  {
    slug: 'what-information-to-give-a-china-supplier',
    categorySlug: 'sourcing-guides',
    title: 'What Information Should You Give a China Supplier?',
    description:
      'The product details, specifications, quantities and requirements that can make supplier communication faster and quotations more useful.',
    imageKey: null,
    publishedAt: null,
    updatedAt: null,
    readingTime: null,
    featured: false,
  },
  {
    slug: 'moq-in-china-sourcing',
    categorySlug: 'purchasing',
    title: 'MOQ in China Sourcing: What It Really Means',
    description:
      'Why suppliers set minimum order quantities, what affects MOQ and how buyers can approach smaller-volume sourcing.',
    imageKey: null,
    publishedAt: null,
    updatedAt: null,
    readingTime: null,
    featured: false,
  },
  {
    slug: 'how-to-compare-supplier-quotations',
    categorySlug: 'sourcing-guides',
    title: 'How to Compare Supplier Quotations in China',
    description:
      'A quotation is more than a unit price. Learn what to compare before deciding which supplier is actually the right fit.',
    imageKey: null,
    publishedAt: null,
    updatedAt: null,
    readingTime: null,
    featured: false,
  },
  {
    slug: 'why-check-products-before-shipping',
    categorySlug: 'quality-control',
    title: 'Why You Should Check Products Before They Ship',
    description:
      'What pre-shipment inspection can help identify, what it cannot guarantee, and why clear inspection criteria matter.',
    imageKey: null,
    publishedAt: null,
    updatedAt: null,
    readingTime: null,
    featured: false,
  },
  {
    slug: 'pre-shipment-inspection-checklist',
    categorySlug: 'quality-control',
    title: 'What Should a Pre-Shipment Inspection Check?',
    description:
      'A practical overview of quantity, appearance, specifications, packaging and other checks that may be relevant before shipment.',
    imageKey: null,
    publishedAt: null,
    updatedAt: null,
    readingTime: null,
    featured: false,
  },
  {
    slug: 'air-freight-vs-sea-freight-from-china',
    categorySlug: 'shipping',
    title: 'Air Freight vs. Sea Freight from China',
    description:
      'Understand the main differences between air and sea freight and the factors that should influence your shipping decision.',
    imageKey: null,
    publishedAt: null,
    updatedAt: null,
    readingTime: null,
    featured: false,
  },
  {
    slug: 'what-affects-shipping-cost-from-china',
    categorySlug: 'shipping',
    title: 'What Affects the Cost of Shipping from China?',
    description:
      'Weight, volume, destination, shipping method, packaging and other factors can all affect the final logistics cost.',
    imageKey: null,
    publishedAt: null,
    updatedAt: null,
    readingTime: null,
    featured: false,
  },
  {
    slug: 'can-you-source-a-product-from-a-photo',
    categorySlug: 'product-sourcing',
    title: 'Can You Source a Product from a Photo?',
    description:
      'What a product image can tell a sourcing partner, what it cannot tell you, and what additional information helps identify suitable suppliers.',
    imageKey: null,
    publishedAt: null,
    updatedAt: null,
    readingTime: null,
    featured: false,
  },
  {
    slug: 'product-samples-in-china-sourcing',
    categorySlug: 'product-sourcing',
    title: 'How Product Samples Fit Into the Sourcing Process',
    description:
      'Why samples can matter before bulk production and what buyers should evaluate before approving a product.',
    imageKey: null,
    publishedAt: null,
    updatedAt: null,
    readingTime: null,
    featured: false,
  },
];

/**
 * Look up an article record, or fail the build.
 *
 * Added when article 01 needed to link to article 03 BY NAME: the link text is
 * that article's real title, and the alternative is a retyped one that stops
 * matching the moment the title is edited in this file. A `find()` returning
 * `undefined` would print the word "undefined" where a cross-reference belongs,
 * so this throws instead — the same rule `categoryFor` below, `serviceLink()`
 * and `requireIndustry()` all follow.
 *
 * This is also what the ROUTE registry asks, indirectly: `builtInsightPaths`
 * subtracts a written article's path from the noindex list, so publishing an
 * article and pointing at it read the same record.
 *
 * @param {string} slug
 * @returns {InsightArticle}
 */
export function articleFor(slug) {
  const article = insightArticles.find((entry) => entry.slug === slug);
  if (!article) {
    throw new Error(
      `[insights-articles.js] No article registered with slug "${slug}". ` +
        `Add it to insightArticles — a cross-reference never types a title of its own.`
    );
  }
  return article;
}

/**
 * The route for an article. Built here rather than typed into the page so the
 * card link, the reserved route and anything else that points at an article all
 * derive from one slug. This is the same rule `services.js` follows with `href`.
 *
 * @param {InsightArticle} article
 */
export function articleHref(article) {
  return `/insights/${article.slug}`;
}

/**
 * Look up a category, or fail the build.
 *
 * A silent `find()` here would let a typo'd `categorySlug` render a card with no
 * tag — a page that looks finished while one of its cards has lost the label the
 * brief gives every article. Failing the build is the only outcome that cannot
 * ship.
 *
 * @param {string} slug
 * @returns {InsightCategory}
 */
export function categoryFor(slug) {
  const category = insightCategories.find((entry) => entry.slug === slug);
  if (!category) {
    throw new Error(
      `[insights-articles.js] No category registered with slug "${slug}". ` +
        `Add it to insightCategories — every card's tag reads that list.`
    );
  }
  return category;
}
