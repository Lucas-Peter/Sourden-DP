/**
 * SOURDEN — /terms-of-service
 * ---------------------------------------------------------------------------
 * The terms that apply when a buyer uses Sourden's services, written from the
 * brief `SOURDEN Privacy Policy & Terms of Service.md` (received 2026-09-27).
 *
 * The copy is the brief's own text, transcribed rather than rewritten — see
 * `legal-privacy.js`, whose header documents the two decisions that apply to
 * BOTH documents and is not repeated here:
 *
 *   · the contact address is rendered from `site.js`, not written into the data
 *     (the brief prints `hello@sourden.com`; the site's published, confirmed
 *     address is `service@sourden.com`), and
 *   · the "Last updated" date is a fixed editorial value declared once in
 *     `legal-shared.js`, never the build date.
 *
 * ── WHY THE TWO SERVICE LINKS ARE DERIVED ──────────────────────────────────
 * §6 and §7 end with a link into the service detail pages. The brief writes the
 * labels by hand ("Learn about Quality Control →"), and typing them here would
 * be two more copies of a service's display name — a name that has already been
 * changed once on this site (`Purchasing & Order Management` →
 * `Purchasing Management`). So both halves come from `serviceLink(slug)`: the
 * label is the registry's title and the href is the registry's canonical route,
 * which is what every other page does when it mentions another service.
 *
 * The arrow is NOT in the label. It is the shared `.arrow-link` component's own
 * `aria-hidden` arrow, so the link reads "Learn about Quality Control" to a
 * screen reader instead of "…Control right arrow".
 *
 * The clause numbers are part of the headings, as the brief writes them, and the
 * anchors are URL-safe and unique within this document.
 * ---------------------------------------------------------------------------
 */

import { primaryCta } from './site.js';
import { serviceLink } from './service-links.js';
import { legalUpdatedLine } from './legal-shared.js';

export const path = '/terms-of-service';

/** Shown in the footer, the breadcrumb and the sitemap. */
export const label = 'Terms of Service';

const qualityControl = serviceLink('quality-control');
const shipping = serviceLink('shipping-from-china');

/**
 * The finished page. Same shape as `/privacy-policy` — the two documents differ
 * in their copy and in nothing else.
 *
 * @type {{
 *   meta: { title: string, description: string },
 *   breadcrumbs: Array<{ label: string, href?: string }>,
 *   hero: { eyebrow: string, title: string, description: string, updated: string },
 *   sections: Array<{
 *     anchor: string,
 *     heading: string,
 *     body: Array<{
 *       p?: string,
 *       list?: string[],
 *       link?: { label: string, href: string },
 *       entity?: boolean,
 *       mail?: boolean,
 *     }>,
 *   }>,
 *   finalCta: { eyebrow: string, title: string, description: string, cta: { label: string, href: string } },
 * }}
 */
export const page = {
  meta: {
    /* Carried over verbatim from the reserved route in `routes.js`. */
    title: 'Terms of Service | Sourden',
    description: 'The terms that apply when you use Sourden services.',
  },

  breadcrumbs: [{ label: 'Terms of Service' }],

  hero: {
    eyebrow: 'LEGAL',
    title: 'Terms of Service',
    description:
      'These Terms of Service explain the basic terms that apply when you use the SOURDEN website and request our sourcing services.',
    updated: legalUpdatedLine,
  },

  sections: [
    {
      anchor: 'about-these-terms',
      heading: '1. About These Terms',
      body: [
        {
          p: 'These Terms of Service (“Terms”) apply to your use of the SOURDEN website and any sourcing-related services you request from SOURDEN.',
        },
        {
          p: 'By using the website or submitting a sourcing request, you agree to these Terms. If you do not agree with these Terms, please do not use the website.',
        },
      ],
    },
    {
      anchor: 'our-services',
      heading: '2. Our Services',
      body: [
        {
          p: 'SOURDEN provides China sourcing and related coordination services, which may include product sourcing, supplier research and verification, purchasing and order management, quality control, and shipping coordination.',
        },
        {
          p: 'The specific services provided for a particular project depend on the requirements agreed between you and SOURDEN.',
        },
        {
          p: 'Information published on this website is provided for general informational purposes and does not constitute a guarantee that a particular product, supplier, price, quantity, delivery time or shipping method will be available.',
        },
      ],
    },
    {
      anchor: 'sourcing-requests',
      heading: '3. Sourcing Requests',
      body: [
        {
          p: 'When submitting a sourcing request, you are responsible for providing information that is reasonably accurate and complete to the best of your knowledge.',
        },
        {
          p: 'You may provide product specifications, reference images, quantities, target prices, destination information and other requirements relevant to the sourcing project.',
        },
        {
          p: 'Submitting a request does not create an obligation for SOURDEN to accept or complete the project. We may decline a request where the product, supplier, destination, legal requirements or other circumstances make the project unsuitable.',
        },
      ],
    },
    {
      anchor: 'supplier-and-product-information',
      heading: '4. Supplier and Product Information',
      body: [
        {
          p: 'SOURDEN may research and communicate with suppliers on your behalf. Supplier information, product specifications, quotations, availability, production times and other details may change and should be confirmed before an order is placed.',
        },
        {
          p: 'While we may conduct supplier research, verification or quality checks, these services do not guarantee that a supplier or product will be completely free from defects, delays, disputes or other risks.',
        },
        {
          p: 'You remain responsible for making the final decision about whether to purchase a product or proceed with a supplier.',
        },
      ],
    },
    {
      anchor: 'prices-fees-and-quotations',
      heading: '5. Prices, Fees and Quotations',
      body: [
        {
          p: 'Product prices, supplier quotations, service fees, shipping costs, taxes, duties and other charges may vary depending on the project and current market conditions.',
        },
        {
          p: 'Any quotation provided by SOURDEN should be understood as subject to the terms, validity period and conditions stated in the quotation.',
        },
        {
          p: 'Unless expressly stated otherwise, customs duties, taxes, import charges and other destination-country charges may be payable by the customer.',
        },
      ],
    },
    {
      anchor: 'quality-control',
      heading: '6. Quality Control',
      body: [
        {
          p: 'Where quality control or inspection is requested, SOURDEN may arrange checks based on agreed inspection criteria.',
        },
        {
          p: 'Inspection can help identify certain issues before shipment, but it cannot guarantee that every defect, discrepancy or future product problem will be detected.',
        },
        {
          p: 'The scope of an inspection depends on the agreed requirements, inspection method, product characteristics and available evidence.',
        },
        { link: { label: `Learn about ${qualityControl.label}`, href: qualityControl.href } },
      ],
    },
    {
      anchor: 'shipping-and-customs',
      heading: '7. Shipping and Customs',
      body: [
        {
          p: 'SOURDEN may help coordinate shipping from China through available logistics providers and shipping methods.',
        },
        {
          p: 'Shipping times, costs and availability may vary depending on the product, shipment size, destination, carrier, customs procedures and other logistics conditions.',
        },
        { p: 'SOURDEN does not guarantee a specific delivery date unless expressly agreed in writing.' },
        {
          p: 'Customers are responsible for complying with applicable import requirements and for paying any duties, taxes or other charges that are their responsibility under the agreed shipping terms.',
        },
        { link: { label: `Learn about ${shipping.label}`, href: shipping.href } },
      ],
    },
    {
      anchor: 'prohibited-use',
      heading: '8. Prohibited Use',
      body: [
        { p: 'You agree not to use the SOURDEN website to:' },
        {
          list: [
            'Submit false or misleading information',
            'Upload malicious software or harmful files',
            'Attempt to gain unauthorized access to the website or its systems',
            'Interfere with the operation or security of the website',
            'Use the website for unlawful purposes',
            'Submit requests involving products or activities that are prohibited by applicable law',
          ],
        },
        {
          p: 'SOURDEN may restrict or terminate access to the website where necessary to protect the website, our users, our service providers or our business.',
        },
      ],
    },
    {
      anchor: 'intellectual-property',
      heading: '9. Intellectual Property',
      body: [
        {
          p: 'Unless otherwise stated, the content of the SOURDEN website, including text, branding, graphics, design and other materials, belongs to SOURDEN or is used with appropriate permission.',
        },
        {
          p: 'You may not reproduce, distribute, modify or commercially exploit website content without prior permission, except where permitted by applicable law.',
        },
      ],
    },
    {
      anchor: 'limitation-of-liability',
      heading: '10. Limitation of Liability',
      body: [
        {
          p: 'To the extent permitted by applicable law, SOURDEN is not responsible for indirect, incidental, consequential or other losses arising from the use of the website or from circumstances outside our reasonable control.',
        },
        {
          p: 'Nothing in these Terms excludes or limits any liability that cannot legally be excluded or limited under applicable law.',
        },
      ],
    },
    {
      anchor: 'changes-to-these-terms',
      heading: '11. Changes to These Terms',
      body: [
        {
          p: 'We may update these Terms from time to time to reflect changes to our website, services or legal requirements. The updated version will be published on this page with a revised “Last updated” date.',
        },
      ],
    },
    {
      anchor: 'contact',
      heading: '12. Contact',
      body: [
        { p: 'If you have questions about these Terms or our services, please contact:' },
        /* Company name and address rendered FROM `site.js` — see the note in
           `legal-privacy.js`. Neither string exists in this file. */
        { entity: true },
        { mail: true },
        { link: primaryCta },
      ],
    },
  ],

  finalCta: {
    eyebrow: 'START WITH A REQUEST',
    title: 'Questions about these Terms?',
    description:
      'If anything here is unclear, write to us and we will explain it.\nIf you are ready to begin, send us your sourcing requirements.',
    cta: primaryCta,
  },
};
