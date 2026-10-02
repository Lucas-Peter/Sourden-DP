/**
 * SOURDEN — SERVICES
 * ---------------------------------------------------------------------------
 * Spec §10 (homepage list) + §20 (footer column) + §33 (reserved routes).
 *
 * `href` is the canonical route. It is intentionally present in V1 even though
 * the detail pages are reservation pages: the URL contract must be stable
 * before the content arrives, so no internal link ever has to be rewritten.
 * ---------------------------------------------------------------------------
 */

export const services = [
  {
    number: '01',
    title: 'Product Sourcing',
    slug: 'product-sourcing',
    href: '/services/product-sourcing',
    description:
      'Find suitable suppliers based on your product requirements, specifications, target pricing and sourcing goals.',
    /** Short label for the footer column (same string, declared for clarity). */
    shortTitle: 'Product Sourcing',
  },
  {
    number: '02',
    title: 'Supplier Verification',
    slug: 'supplier-verification',
    href: '/services/supplier-verification',
    description:
      'Review supplier capabilities, product fit, MOQ, pricing, lead times and other key factors before you move forward.',
    shortTitle: 'Supplier Verification',
  },
  {
    number: '03',
    title: 'Purchasing Management',
    slug: 'purchasing-order-management',
    href: '/services/purchasing-order-management',
    description:
      'Coordinate quotations, purchasing, supplier communication, production progress and order details.',
    shortTitle: 'Purchasing Management',
  },
  {
    number: '04',
    title: 'Quality Control',
    slug: 'quality-control',
    href: '/services/quality-control',
    description:
      'Arrange product checks before shipment to identify issues and confirm the order meets agreed requirements.',
    shortTitle: 'Quality Control',
  },
  {
    number: '05',
    title: 'Shipping from China',
    slug: 'shipping-from-china',
    href: '/services/shipping-from-china',
    description:
      'Coordinate shipping from China and connect your sourcing process with the right logistics solution.',
    shortTitle: 'Shipping from China',
  },
];

/** §10 section header copy. */
export const servicesIntro = {
  eyebrow: 'OUR SERVICES',
  title: 'From supplier discovery to final shipment.',
  supportingLine: 'One partner across the process.',
};
