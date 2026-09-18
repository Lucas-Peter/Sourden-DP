/**
 * SOURDEN — INDUSTRIES / CATEGORIES
 * ---------------------------------------------------------------------------
 * Spec §12 (homepage grid) + §20 (footer column) + §33 (reserved routes).
 *
 * IMPORTANT (spec §12): these six categories are NOT exclusive. The section's
 * supporting copy states that Sourden works beyond this list, and the bottom
 * link invites a specific enquiry. Never present this data as an exhaustive
 * catalogue.
 *
 * `grid` describes the asymmetrical editorial placement (spec §12: "Do NOT use
 * six identical cards"). Spans are 12-column at ≥1200px and 8-column at
 * 768–1199px; the CSS reads them from CSS custom properties so the layout can
 * be reshaped without touching this data.
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
    grid: { spanLg: 3, spanMd: 3, feature: false },
  },
  {
    number: '04',
    title: 'Packaging',
    slug: 'packaging',
    href: '/industries/packaging',
    imageKey: 'industryPackaging',
    grid: { spanLg: 3, spanMd: 3, feature: false },
  },
  {
    number: '05',
    title: 'Electronics & Accessories',
    slug: 'electronics-accessories',
    href: '/industries/electronics-accessories',
    imageKey: 'industryElectronicsAccessories',
    grid: { spanLg: 4, spanMd: 5, feature: false },
  },
  {
    number: '06',
    title: 'Industrial Products',
    slug: 'industrial-products',
    href: '/industries/industrial-products',
    imageKey: 'industryIndustrialProducts',
    grid: { spanLg: 5, spanMd: 3, feature: true },
  },
];

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
