import { services } from './services.js';
import { industries } from './industries.js';

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

/* ---------------------------------------------------------------------------
   CONFIRMED CONTACT FACTS — do not change without asking the business.
   These three values are the real, published contact details:
     domain   sourden.com
     email    service@sourden.com
     WhatsApp +86 19861639802
   The domain and email are also the fallbacks used when PUBLIC_SITE_URL /
   PUBLIC_CONTACT_EMAIL are not set at build time, so a build with no
   environment variables configured still produces correct canonical URLs.
   --------------------------------------------------------------------------- */

/* One number, two channels: WhatsApp chat and telephone. Declared once, with
   every derived form computed from it, so the readable number, the wa.me link
   and the E.164 value can never drift apart. */
const CONTACT_NUMBER_DISPLAY = '+86 19861639802';

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
  email: import.meta.env?.PUBLIC_CONTACT_EMAIL || 'service@sourden.com',

  /**
   * WhatsApp — a contact channel, not a social account, so it is allowed by
   * spec §20's "no social links" rule (which exists to stop the site linking
   * to empty profiles).
   *
   * `href` is DERIVED from `display`, so the readable number and the click-to-
   * chat number can never drift apart. wa.me needs digits only, country code
   * first, with NO leading "+" — a "+" or a space makes the link open an empty
   * chat instead of failing loudly.
   */
  whatsapp: {
    display: CONTACT_NUMBER_DISPLAY,
    href: `https://wa.me/${CONTACT_NUMBER_DISPLAY.replace(/\D/g, '')}`,
  },

  /**
   * The same number as an E.164 telephone value, published to search engines
   * and AI assistants through schema.org `telephone` on the Organization node.
   *
   * E.164 = "+" + country code + subscriber digits, no spaces or punctuation.
   * That is the only form parsers expect, and it is DERIVED from the display
   * string rather than typed a second time.
   *
   * Note: NOT rendered as a clickable `tel:` link anywhere on the site. It is
   * a WhatsApp-first number, so a tap-to-call link would invite voice calls to
   * a line that is not staffed for them. Declaring it in structured data is a
   * factual statement of how to reach the business, not an invitation to ring.
   */
  phone: `+${CONTACT_NUMBER_DISPLAY.replace(/\D/g, '')}`,

  /** Canonical origin, no trailing slash. Kept in sync with astro.config.mjs. */
  url: (import.meta.env?.PUBLIC_SITE_URL || 'https://sourden.com').replace(/\/$/, ''),

  /** Locale + language, used by <html> and og:locale. */
  locale: 'en',
  ogLocale: 'en_US',

  /** Brand promise shown in the copyright line. */
  copyrightYear: 2026,
};

/* ---------------------------------------------------------------------------
   NAV CTA — the header's far-right button and the mobile menu's CTA.
   Deliberately DISTINCT from `primaryCta`: that one still points at the
   /sourcing-request form and stays the single destination for every other
   "Start a Sourcing Request" control on the site. The nav button is a
   WhatsApp chat link instead (owner-requested), so it derives its href from
   `site.whatsapp` rather than from `primaryCta`.
   --------------------------------------------------------------------------- */
export const navCta = {
  label: 'Start Free Request on WhatsApp',
  href: site.whatsapp.href,
};

/* ---------------------------------------------------------------------------
   HEADER NAVIGATION — spec §6
   Deliberately excludes phone, WhatsApp, login, cart, currency selector and
   language selector. Do not add them without an explicit requirement.

   Services and Industries carry a `children` list so the header can render a
   second level under them. The children are DERIVED from `services.js` and
   `industries.js` — the same registries the footer columns already read — so
   a service or category added there appears in the header drop-down, the
   homepage section and the footer at once. An item with no `children` renders
   as a plain link.
   --------------------------------------------------------------------------- */

export const nav = [
  {
    label: 'Services',
    href: '/services',
    children: services.map((service) => ({
      label: service.shortTitle,
      href: service.href,
    })),
  },
  {
    label: 'Industries',
    href: '/industries',
    children: industries.map((industry) => ({
      label: industry.title,
      href: industry.href,
    })),
  },
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
  title: 'SOURDEN | China Sourcing. Done.',
  description:
    'SOURDEN helps businesses source products from China with supplier research, verification, purchasing, quality control and shipping.',
  /** Appended to child-page titles as "<Page> | SOURDEN". */
  titleSuffix: ' | SOURDEN',
};

