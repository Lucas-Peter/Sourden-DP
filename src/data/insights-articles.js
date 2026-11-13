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
 *   · `publishedAt` / `updatedAt` — a real date or null. Two articles carry one
 *     today (`christmas-products-to-sell`, `start-a-small-business-without-a-
 *     store`); the other twelve are undated because they have no publication
 *     date to state, and §6 / §14 forbid inventing one.
 *     ⚠ A DATE STILL PRINTS NOTHING. `InsightCard.astro` writes no `<time>` and
 *     says so in its own header, so what a date changes is the hub's ORDER (see
 *     `insightArticlesNewestFirst`) — not a line on the card. Showing the date
 *     as well is a MARKUP change in the card, and one worth making deliberately.
 *     An earlier version of this comment claimed the card already rendered
 *     whatever date it was given, which would have led straight to filling the
 *     field in and seeing nothing — the same "silently prints nothing" failure
 *     as reading `item.category` where the record holds `categorySlug` (see
 *     `routes.js`).
 *   · `readingTime` — same: a reading time for a body that does not exist is a
 *     fabricated statistic (§6, §14).
 *   · `imageKey` — §12's `image` slot, and it is what the card shows. §6 makes
 *     the image optional and §7 says plainly that "if appropriate high-quality
 *     images are not available, a clean editorial card without an image is
 *     preferable to a poor stock image", so a `null` here is a decision, not an
 *     omission. Giving an article a picture is a `media.js` slot plus this field
 *     — nothing else on the page changes.
 *   · `featured` — §12's slot for §14's "only the featured article needs to be
 *     treated as the first priority". Nothing renders it: the directory lists
 *     every article equally, in publication order. Read it as the record of
 *     which article the brief leads with rather than as a display switch — a
 *     featured surface would consume it.
 *
 * ── ORDER: THE ARRAY IS THE REGISTRY, THE PAGE IS NEWEST FIRST ─────────────
 * This array is the brief's article order (01–12) with later articles appended,
 * and it stays that way: it is what `routes.js` builds the route table and the
 * sitemap from, and reshuffling it every time something is published would make
 * that diff unreadable for no gain.
 *
 * The HUB does not render this array. It renders `insightArticlesNewestFirst`
 * below — published date, newest first, which is what a reader expects of a
 * library and what puts a new article on page 1 of the directory instead of
 * behind twelve older ones. That is a change made on 2026-11-02; the previous
 * rule was "the array is the display order and nothing sorts it", and its stated
 * reason (a date sort moving every card the day a date is filled in) is exactly
 * what is now wanted: filling in a date IS publishing the article.
 *
 * An article with `publishedAt: null` is not published yet. It sorts AFTER every
 * dated article and keeps its registry order among its undated peers (the sort
 * is stable), so the twelve unwritten-dated brief articles stay in 01–12 order
 * behind whatever is real. Giving them dates is a data change, not a code
 * change — and inventing a date to make the order look tidy is precisely what
 * §6 and §14 forbid.
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
 * @property {string|null} publishedAt     ISO date. null = not published: the
 *                                         hub sorts it after every dated article.
 * @property {string|null} updatedAt       ISO date. null unless the body was revised.
 * @property {string|null} readingTime     null — a body that does not exist has no reading time.
 * @property {boolean}     featured        §14's first priority. Nothing renders it.
 * @property {string}      [keywords]      Comma-separated SEO keywords for <meta name="keywords">.
 * @property {string}      [seoTitle]      Optional short title for the `<title>` tag only; the H1 still uses `title`.
 */

/** @type {InsightArticle[]} */
export const insightArticles = [
  {
    slug: 'how-to-find-reliable-suppliers-in-china',
    categorySlug: 'sourcing-guides',
    title: 'How to Find Reliable Suppliers in China',
    description:
      'A practical guide to researching suppliers, comparing options and identifying suppliers that fit your product and purchasing requirements.',
    imageKey: 'articleFindSuppliers',
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
    imageKey: 'articleVerifySupplier',
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
    imageKey: 'articleSupplierVsTrading',
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
    imageKey: 'articleInfoToSupplier',
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
    imageKey: 'articleMoq',
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
    imageKey: 'articleCompareQuotations',
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
    imageKey: 'articleCheckBeforeShipping',
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
    imageKey: 'articleInspectionChecklist',
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
    imageKey: 'articleAirVsSea',
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
    imageKey: 'articleShippingCost',
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
    imageKey: 'articleSourceFromPhoto',
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
    imageKey: 'articleSamples',
    publishedAt: null,
    updatedAt: null,
    readingTime: null,
    featured: false,
  },
  {
    slug: 'christmas-products-to-sell',
    categorySlug: 'product-sourcing',
    title: 'Christmas Products to Sell in 2026: Historical Trends and Sourcing Ideas',
    description:
      'Which Christmas products are worth sourcing for 2026 — what historical holiday shopping data suggests, product ideas across décor, gifts and wrapping, and how to plan sourcing timing and compliance.',
    imageKey: 'christmasBanner',
    publishedAt: '2026-10-18',
    updatedAt: null,
    readingTime: null,
    featured: false,
    keywords:
      'Christmas products to sell, Christmas products from China, Christmas wholesale products, Christmas sourcing',
  },
  {
    slug: 'start-a-small-business-without-a-store',
    categorySlug: 'sourcing-guides',
    title: 'Want to Start a Small Business? Start Selling Without a Store',
    description:
      'Thinking about starting a small business? Learn how to sell through Facebook, find products from China, test demand, and get sourcing support from SOURDEN.',
    imageKey: 'smallBusinessBanner',
    publishedAt: '2026-11-02',
    updatedAt: null,
    readingTime: null,
    featured: false,
    keywords:
      'Start a Small Business, Sell Products on Facebook, China Product Sourcing, Start an Online Business, Small Business Ideas',
  },
  {
    slug: 'shipping-from-china-guide',
    categorySlug: 'shipping',
    title: 'How Much Does Shipping from China Cost? Real Rates Explained',
    seoTitle: 'How Much Does Shipping from China Cost?',
    description:
      'Real shipping rates from China, with actual price points. Compare express air, postal and sea freight costs, delivery times and customs options.',
    imageKey: 'shippingPortAerial',
    publishedAt: '2026-11-13',
    updatedAt: null,
    readingTime: null,
    featured: false,
    keywords:
      'shipping from China, China shipping methods, Shipping from China to USA, Air freight from China, Sea freight from China, International shipping from China, China sourcing and shipping, Door-to-door shipping from China',
  },
];

/**
 * The library in the order the hub displays it: newest publication first.
 *
 * A derived export rather than a reordered array, so the registry keeps one job
 * (what exists) and the page keeps another (what order to read it in). The hub
 * is the only consumer — `routes.js`, the sitemap and `insightPageFor()` all
 * read `insightArticles` and are order-independent — so this cannot silently
 * change a URL or a sitemap entry.
 *
 * Two rules, both deliberate:
 *   · Dated first, newest first. `Date.parse` on the ISO date string, so the
 *     comparison is on the calendar day and not on the string.
 *   · Undated last, in registry order. `Array.prototype.sort` is stable
 *     (ES2019), so returning 0 for two undated records preserves the brief's
 *     order instead of inventing one. An undated article is an unpublished one;
 *     it belongs behind everything real, not in front of it because it happens
 *     to sit at index 0.
 *
 * @type {InsightArticle[]}
 */
export const insightArticlesNewestFirst = [...insightArticles].sort((a, b) => {
  const left = a.publishedAt ? Date.parse(a.publishedAt) : NaN;
  const right = b.publishedAt ? Date.parse(b.publishedAt) : NaN;
  const leftUndated = Number.isNaN(left);
  const rightUndated = Number.isNaN(right);

  if (leftUndated || rightUndated) {
    if (leftUndated && rightUndated) return 0;
    return leftUndated ? 1 : -1;
  }

  return right - left;
});

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
