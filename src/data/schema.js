/**
 * SOURDEN — structured data
 * ---------------------------------------------------------------------------
 * JSON-LD builders (schema.org). Kept in data/ rather than inlined in the
 * layout so every page composes its own graph from one vocabulary.
 *
 * HONESTY RULE: nothing may be added here that the business cannot evidence.
 * No aggregateRating, no review, no award, no numberOfEmployees, no founding
 * date, no priceRange — the site must never emit a machine-readable claim that
 * a customer could check and find false.
 * ---------------------------------------------------------------------------
 */

import { site } from './site.js';

/** Stable @id anchors so nodes can reference each other instead of repeating. */
const ORG_ID = `${site.url}/#organization`;
const WEBSITE_ID = `${site.url}/#website`;

/**
 * The organisation itself. Only verifiable facts: name, url, email, telephone,
 * contact point.
 *
 * `telephone` is a confirmed published number, so it passes the honesty rule
 * above. It is derived from `site.whatsapp.display` — see site.js — so the
 * value here and the number shown in the footer are always the same string.
 * @returns {Record<string, unknown>}
 */
export function organizationSchema() {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: site.name,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    slogan: site.tagline,
    description: seoDescription(),
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: site.email,
        telephone: site.phone,
        availableLanguage: ['en'],
      },
    ],
  };
}

/**
 * The website node. Deliberately has no SearchAction — the site has no search
 * endpoint, and declaring one would be a false claim.
 * @returns {Record<string, unknown>}
 */
export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: site.url,
    name: site.name,
    inLanguage: site.locale,
    publisher: { '@id': ORG_ID },
  };
}

/**
 * A page node, tying content pages to the website and organisation nodes.
 * @param {{ title: string, description: string, path: string }} page
 * @returns {Record<string, unknown>}
 */
export function webPageSchema({ title, description, path }) {
  const url = new URL(path, site.url).href;
  return {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
    inLanguage: site.locale,
  };
}

/**
 * Breadcrumb trail for inner pages.
 * @param {Array<{ name: string, href?: string }>} items
 * @returns {Record<string, unknown>}
 */
export function breadcrumbSchema(items) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.href ? { item: new URL(item.href, site.url).href } : {}),
    })),
  };
}

/**
 * A service offering (spec §32 / §33 service detail pages).
 * @param {{ name: string, description: string, href: string }} service
 * @returns {Record<string, unknown>}
 */
export function serviceSchema({ name, description, href }) {
  return {
    '@type': 'Service',
    name,
    description,
    url: new URL(href, site.url).href,
    provider: { '@id': ORG_ID },
    serviceType: 'China sourcing and procurement coordination',
  };
}

/**
 * An insight article. `datePublished` is emitted only when a real date exists
 * — an invented date is a fabricated fact.
 * @param {{ title: string, excerpt: string, href: string, publishedAt?: string|null, imageUrl?: string }} article
 * @returns {Record<string, unknown>}
 */
export function articleSchema({ title, excerpt, href, publishedAt = null, imageUrl }) {
  return {
    '@type': 'Article',
    headline: title,
    description: excerpt,
    url: new URL(href, site.url).href,
    inLanguage: site.locale,
    publisher: { '@id': ORG_ID },
    ...(publishedAt ? { datePublished: publishedAt } : {}),
    ...(imageUrl ? { image: new URL(imageUrl, site.url).href } : {}),
  };
}

/**
 * Wrap nodes into a single @graph document.
 * @param {Array<Record<string, unknown>>} nodes
 * @returns {{ '@context': string, '@graph': Array<Record<string, unknown>> }}
 */
export function graph(nodes) {
  return { '@context': 'https://schema.org', '@graph': nodes };
}

function seoDescription() {
  return 'Sourden helps businesses source products from China with supplier research, verification, purchasing, quality control and shipping.';
}
