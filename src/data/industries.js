/**
 * SOURDEN — INDUSTRIES / CATEGORIES
 * ---------------------------------------------------------------------------
 * Spec §12 (homepage grid) + §20 (footer column) + §33 (reserved routes).
 *
 * IMPORTANT (spec §12): these categories are NOT exclusive. The section's
 * supporting copy states that Sourden works beyond this list, and the bottom
 * link invites a specific enquiry. Never present this data as an exhaustive
 * catalogue — it is a set of entry points, not a product catalogue.
 *
 * NINE CATEGORIES (spec §12 originally specified six; three were added at the
 * business's request — Sports & Outdoors, Pet Supplies, Apparel/Footwear/Bags).
 * Adding an entry here is all that is needed: the homepage grid, the footer
 * column, the `/industries/<slug>` reservation page and the `noindex` list are
 * all derived from this file.
 *
 * `grid` describes the asymmetrical editorial placement (spec §12: "Do NOT use
 * six identical cards"). Spans are 12-column at ≥1200px and 8-column at
 * 768–1199px; the CSS reads them from data attributes so the composition can
 * be reshaped without touching markup.
 *
 *   ≥1200px   row 1: 5 + 4 + 3   (tall)
 *             row 2: 3 + 4 + 5   (short)
 *             row 3: 5 + 3 + 4   (medium)
 *   768–1199  row 1: 5 + 3
 *             row 2: 4 + 4
 *             row 3: 4 + 4
 *             row 4: 4 + 4
 *             row 5: 8 (full width)
 *   Every row sums to the full column count at both breakpoints — an orphaned
 *   span leaves a hole in the grid, which is why the spans are chosen as sets
 *   rather than per item.
 * ---------------------------------------------------------------------------
 */

export const industries = [
  {
    number: '01',
    title: 'Consumer Products',
    slug: 'consumer-products',
    href: '/industries/consumer-products',
    imageKey: 'industryConsumerProducts',
    grid: { spanLg: 5, spanMd: 5, feature: true },
  },
  {
    number: '02',
    title: 'Beauty & Personal Care',
    slug: 'beauty-personal-care',
    href: '/industries/beauty-personal-care',
    imageKey: 'industryBeautyPersonalCare',
    grid: { spanLg: 4, spanMd: 3, feature: false },
  },
  {
    number: '03',
    title: 'Home & Living',
    slug: 'home-living',
    href: '/industries/home-living',
    imageKey: 'industryHomeLiving',
    /** See the note on `summaryNoun` below. */
    summaryNoun: 'home and living products',
    grid: { spanLg: 3, spanMd: 4, feature: false },
  },
  {
    number: '04',
    title: 'Packaging',
    slug: 'packaging',
    href: '/industries/packaging',
    imageKey: 'industryPackaging',
    grid: { spanLg: 3, spanMd: 4, feature: false },
  },
  {
    number: '05',
    title: 'Electronics & Accessories',
    slug: 'electronics-accessories',
    href: '/industries/electronics-accessories',
    imageKey: 'industryElectronicsAccessories',
    grid: { spanLg: 4, spanMd: 4, feature: false },
  },
  {
    number: '06',
    title: 'Industrial Products',
    slug: 'industrial-products',
    href: '/industries/industrial-products',
    imageKey: 'industryIndustrialProducts',
    grid: { spanLg: 5, spanMd: 4, feature: true },
  },
  {
    number: '07',
    title: 'Sports & Outdoors',
    slug: 'sports-outdoors',
    href: '/industries/sports-outdoors',
    imageKey: 'industrySportsOutdoors',
    summaryNoun: 'sports and outdoor products',
    grid: { spanLg: 5, spanMd: 4, feature: false },
  },
  {
    number: '08',
    title: 'Pet Supplies',
    slug: 'pet-supplies',
    href: '/industries/pet-supplies',
    imageKey: 'industryPetSupplies',
    grid: { spanLg: 3, spanMd: 4, feature: false },
  },
  {
    number: '09',
    title: 'Apparel, Footwear & Bags',
    slug: 'apparel-footwear-bags',
    href: '/industries/apparel-footwear-bags',
    imageKey: 'industryApparelFootwearBags',
    summaryNoun: 'apparel, footwear and bags',
    grid: { spanLg: 4, spanMd: 8, feature: false },
  },
];

/**
 * `summaryNoun` — optional, per category.
 *
 * The reserved detail pages compose their meta description from the title:
 *   "Sourden sources <summaryNoun> from China according to your specifications…"
 * Most titles slot into that sentence cleanly ("pet supplies", "packaging").
 * A few do not — "sources sports & outdoors" or "sources home & living" reads
 * like a machine spat it out — so those categories declare the noun phrase
 * explicitly. Omitted entries fall back to the lowercased title.
 */

/** §12 section header copy — note the explicit "these are not exclusive" framing. */
export const industriesIntro = {
  eyebrow: 'WHAT WE SOURCE',
  title: 'From everyday products to specialized requirements.',
  supporting:
    'We work across a range of product categories, sourcing according to your specifications, target market and business needs.',
  bottomCta: {
    label: 'Looking for something specific? Tell us what you’re looking for',
    href: '/sourcing-request',
  },
};
