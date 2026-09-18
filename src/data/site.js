/**
 * SOURDEN — SITE CONFIG
 * ---------------------------------------------------------------------------
 * Brand constants, navigation and SEO defaults.
 *
 * RULE (spec §34): every primary call-to-action across the entire site points
 * at the single `primaryCta.href` below. Never create a second destination
 * for the same action.
 * ---------------------------------------------------------------------------
 */

/** The one and only destination for "Start a Sourcing Request". */
export const primaryCta = {
  label: 'Start a Sourcing Request',
  href: '/sourcing-request',
};

export const site = {
  name: 'SOURDEN',
  /** Primary tagline — spec §41 */
  tagline: 'China Sourcing. Done.',
  /** Core positioning — spec §41 */
  positioning: 'Sourcing Without the Barriers.',
  /** Relationship / brand philosophy — spec §41 */
  relationship: 'Start where you are. Grow from there.',
  /** Supporting message — spec §41 */
  supportingLine: 'You don’t need to be a big business to source from China.',
  /** Process shorthand — spec §41 */
  processLine: 'Find. Verify. Source. Ship.',

  /** Public contact address. Overridable per-environment. */
  email: import.meta.env?.PUBLIC_CONTACT_EMAIL || 'hello@sourden.com',

  /** Canonical origin, no trailing slash. Kept in sync with astro.config.mjs. */
  url: (import.meta.env?.PUBLIC_SITE_URL || 'https://sourden.com').replace(/\/$/, ''),

  /** Locale + language, used by <html> and og:locale. */
  locale: 'en',
  ogLocale: 'en_US',

  /** Brand promise shown in the copyright line. */
  copyrightYear: 2026,
};

/* ---------------------------------------------------------------------------
   HEADER NAVIGATION — spec §6
   Deliberately excludes phone, WhatsApp, login, cart, currency selector and
   language selector. Do not add them without an explicit requirement.
   --------------------------------------------------------------------------- */

export const nav = [
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
];

/* ---------------------------------------------------------------------------
   FOOTER NAVIGATION — spec §20
   The footer's "Services" and "Industries" columns are derived from the data
   files rather than duplicated here, so adding a service updates both the
   section and the footer at once. Only "Company" and the legal row are
   declared inline.
   --------------------------------------------------------------------------- */

export const footerCompanyNav = [
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
  { label: 'FAQ', href: '/faq' },
];

export const footerLegalNav = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
];

/* ---------------------------------------------------------------------------
   SEO DEFAULTS — spec §26
   Per-page values override these via <BaseLayout title/description …>.
   --------------------------------------------------------------------------- */

export const seoDefaults = {
  title: 'Sourden | China Sourcing. Done.',
  description:
    'Sourden helps businesses source products from China with supplier research, verification, purchasing, quality control and shipping.',
  /** Appended to child-page titles as "<Page> | Sourden". */
  titleSuffix: ' | Sourden',
};

/* ---------------------------------------------------------------------------
   BLUEPRINT — reserved routes (spec §33)
   Not rendered anywhere. It exists so the site's URL contract is declared in
   one reviewable place and future work cannot accidentally invent a
   conflicting path.
   --------------------------------------------------------------------------- */

export const reservedRoutes = {
  implemented: ['/', '/services', '/industries', '/how-it-works', '/about', '/insights', '/case-studies', '/faq', '/sourcing-request', '/privacy-policy', '/terms-of-service'],
  dynamic: [
    '/services/[slug]',
    '/industries/[slug]',
    '/insights/[slug]',
    '/case-studies/[slug]',
  ],
  planned: ['/products', '/products/[category]', '/products/[slug]'],
  api: ['/api/inquiry', '/api/upload', '/api/contact'],
};
