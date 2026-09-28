/**
 * SOURDEN — INSIGHTS ARTICLE LIBRARY
 * ---------------------------------------------------------------------------
 * Every article the Insights hub knows about, from the Insights brief (§4, §5,
 * §9, §12, §13). A LEAF module: it imports nothing, so `insights-page.js` can
 * import it and the route can import that without a cycle. The same rule
 * `service-links.js` states for the services side of the site.
 *
 * ── THIS IS NOT `insights.js` ───────────────────────────────────────────────
 * `src/data/insights.js` holds the HOMEPAGE's three cards, worded by the
 * homepage brief (§18). This file holds the HUB's twelve, worded by the
 * Insights brief. The two briefs specify different text for the same article —
 * article 01's featured sentence is longer on the hub than the homepage's card
 * excerpt, and article 02 is tagged `SUPPLIER KNOWLEDGE` here but `SUPPLIER
 * VERIFICATION` there. Both texts are real, so both are kept; neither file
 * writes into the other's surface. Editing one does NOT change the other page.
 *   · homepage section → `src/components/Insights.astro` → `insights.js`
 *   · this hub page    → `src/pages/insights/index.astro` → `insights-page.js`
 *
 * ── ONE CATEGORY LIST, THREE CONSUMERS ─────────────────────────────────────
 * The brief names categories three times and they are not quite the same words
 * each time: §3/§5 use the SHORT UPPERCASE tag printed on an article card
 * (`SOURCING GUIDE`), §4 names the filter chips (`Sourcing Guides`), §9 gives
 * each topic a one-line description and a `?category=` destination. Declaring
 * that three times is how "Sourcing Guide" and "Sourcing Guides" end up as two
 * categories. So there is one record per category with both wordings — `tag`
 * for the card, `label` for the filter — and the three consumers read it.
 *
 * `tag` is `null` on `all` because "All" is a filter state, not a category an
 * article can belong to. Anything that renders a tag asks for the article's
 * category record, so a null tag can never reach a card.
 *
 * ── THE ARTICLE SHAPE (brief §12) ───────────────────────────────────────────
 * §12 asks the structure to support `slug`, `category`, `title`, `description`,
 * `image`, `publishedDate`, `updatedDate`, `readingTime` and `featured`, and
 * then says to display only the fields that hold real information. So all of
 * those fields exist here — and the four that would be fabricated are `null`:
 *
 *   · `publishedAt` / `updatedAt` — no article has a publication date, because
 *     none has been published. §6 and §14 both forbid inventing one. The
 *     card renders the date only if the value is a real string, so filling one
 *     in later is a data edit, not a markup change.
 *   · `readingTime` — same: a reading time for a body that does not exist is a
 *     fabricated statistic (§6, §14).
 *   · `imageKey` — see the note on images below.
 *
 * `featured` marks the one article the featured band highlights. `description`
 * is the listing sentence (§5) and is what a card prints; `featuredSummary` is
 * the longer one §3 gives that same article for the featured band, and is
 * `null` on the other eleven because the brief does not write them one.
 *
 * ── WHY NO ARTICLE CARRIES AN IMAGE ────────────────────────────────────────
 * §6 makes the card image optional and §7 says plainly that "if appropriate
 * high-quality images are not available, a clean editorial card without an
 * image is preferable to a poor stock image". No documentary photography exists
 * yet — every slot on the site is still a labelled placeholder — so the honest
 * reading is a text-only directory. The featured band does carry the existing
 * `insightSupplierResearch` slot, so the page still opens with one frame. A
 * later article gets an image by adding a `media.js` slot and naming it here.
 *
 * ── ORDER IS THE DISPLAY ORDER ─────────────────────────────────────────────
 * The array is the brief's article order (01–12) and the grid renders it as
 * written. Nothing sorts it: a `publishedAt` sort would move every card the day
 * a date is filled in, which is not what a content library should do silently.
 * ---------------------------------------------------------------------------
 */

/**
 * @typedef {Object} InsightCategory
 * @property {string}      slug         `?category=` value and the filter key.
 * @property {string}      label        Filter chip + §9 topic name.
 * @property {string|null} tag          The short uppercase card label. null on "all".
 * @property {string|null} description  §9's one line. null on "all".
 */

/** @type {InsightCategory[]} */
export const insightCategories = [
  {
    slug: 'all',
    label: 'All',
    tag: null,
    description: null,
  },
  {
    slug: 'sourcing-guides',
    label: 'Sourcing Guides',
    tag: 'SOURCING GUIDE',
    description: 'Practical guidance for finding products and suppliers.',
  },
  {
    slug: 'supplier-knowledge',
    label: 'Supplier Knowledge',
    tag: 'SUPPLIER KNOWLEDGE',
    description: 'Understand suppliers, verification and sourcing relationships.',
  },
  {
    slug: 'purchasing',
    label: 'Purchasing',
    tag: 'PURCHASING',
    description: 'Practical knowledge about MOQ, quotations and order management.',
  },
  {
    slug: 'quality-control',
    label: 'Quality Control',
    tag: 'QUALITY CONTROL',
    description: 'Learn what to check before products leave China.',
  },
  {
    slug: 'shipping',
    label: 'Shipping',
    tag: 'SHIPPING',
    description: 'Understand the practical side of moving goods from China.',
  },
  {
    slug: 'product-sourcing',
    label: 'Product Sourcing',
    tag: 'PRODUCT SOURCING',
    description: 'Explore product-specific sourcing questions and considerations.',
  },
];

/**
 * The category an article can actually belong to — i.e. everything except the
 * "all" filter state. §9's topic section renders exactly this list, so the six
 * topics and the six real filter chips cannot drift apart.
 */
export const topicCategories = insightCategories.filter((category) => category.tag !== null);

/**
 * The default filter state. Declared as a name rather than left implicit so the
 * page, the filter script and the audit all mean the same thing by "unfiltered".
 */
export const DEFAULT_CATEGORY = 'all';

/**
 * @typedef {Object} InsightArticle
 * @property {string}      slug
 * @property {string}      categorySlug    Key into `insightCategories`.
 * @property {string}      title
 * @property {string}      description     The listing sentence (§5).
 * @property {string|null} featuredSummary §3's longer sentence, featured only.
 * @property {string|null} imageKey        Key from `media.js`, or null.
 * @property {string|null} publishedAt     ISO date. null — nothing is published.
 * @property {string|null} updatedAt       ISO date. null — nothing is published.
 * @property {string|null} readingTime     null — a body that does not exist has no reading time.
 * @property {boolean}     featured
 */

/** @type {InsightArticle[]} */
export const insightArticles = [
  {
    slug: 'how-to-find-reliable-suppliers-in-china',
    categorySlug: 'sourcing-guides',
    title: 'How to Find Reliable Suppliers in China',
    description:
      'A practical guide to researching suppliers, comparing options and identifying suppliers that fit your product and purchasing requirements.',
    featuredSummary:
      'Finding a supplier is easy. Finding one that actually fits your product, quantity, quality requirements and business goals is a different task. This guide explains what to look for when researching suppliers in China.',
    /* null, and not the `insightSupplierResearch` slot, even though that slot
       exists and is about this article.
       Reason: this article is rendered TWICE on the hub — once in the featured
       band and once as card 01, because §19.4 requires all twelve cards. With
       an `imageKey` here, the SAME photograph appeared in both places, one
       directly under the other, which is the duplication `media.js` already
       warns about for the service pages ("the visitor sees the same photograph
       twice — once on the card they clicked and again on the page it opened").
       The featured band's frame is therefore a PRESENTATION choice and lives on
       `featured` in `insights-page.js`. This field stays as §12's `image` slot
       for the article's own photograph, which does not exist yet. */
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
    featuredSummary: null,
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
    featuredSummary: null,
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
    featuredSummary: null,
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
    featuredSummary: null,
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
    featuredSummary: null,
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
    featuredSummary: null,
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
    featuredSummary: null,
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
    featuredSummary: null,
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
    featuredSummary: null,
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
    featuredSummary: null,
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
    featuredSummary: null,
    imageKey: null,
    publishedAt: null,
    updatedAt: null,
    readingTime: null,
    featured: false,
  },
];

/**
 * The route for an article. Built here rather than typed into the page so the
 * card link, the reserved route and the `?category=` links all derive from one
 * slug. This is the same rule `services.js` follows with its `href`.
 *
 * @param {InsightArticle} article
 */
export function articleHref(article) {
  return `/insights/${article.slug}`;
}

/**
 * Look up a category, or fail the build.
 *
 * A silent `find()` here would let a typo'd `categorySlug` render a card with
 * no tag and drop that article out of every filter — a page that looks finished
 * while quietly hiding a fifth of the library.
 *
 * @param {string} slug
 * @returns {InsightCategory}
 */
export function categoryFor(slug) {
  const category = insightCategories.find((entry) => entry.slug === slug);
  if (!category) {
    throw new Error(
      `[insights-articles.js] No category registered with slug "${slug}". ` +
        `Add it to insightCategories — the filter, the card tag and the §9 topics all read that list.`
    );
  }
  return category;
}

/**
 * Articles in a category, in display order. `all` returns the whole library.
 *
 * @param {string} slug
 * @returns {InsightArticle[]}
 */
export function articlesInCategory(slug) {
  if (slug === DEFAULT_CATEGORY) return insightArticles;
  categoryFor(slug);
  return insightArticles.filter((article) => article.categorySlug === slug);
}

/**
 * How many articles each real category holds.
 *
 * The hub renders no "nothing here yet" message (brief §14 bans one), so this
 * is not used to populate an empty state. It exists so the page — and a gate —
 * can assert that every category the filter offers actually matches something:
 * a chip that can only ever produce an empty grid is a broken filter.
 *
 * @returns {Array<{ slug: string, label: string, count: number }>}
 */
export function categoryCounts() {
  return topicCategories.map((category) => ({
    slug: category.slug,
    label: category.label,
    count: articlesInCategory(category.slug).length,
  }));
}
