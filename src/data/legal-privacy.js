/**
 * SOURDEN — /privacy-policy
 * ---------------------------------------------------------------------------
 * The site's privacy policy, written from the brief
 * `SOURDEN Privacy Policy & Terms of Service.md` (received 2026-09-27).
 *
 * THE COPY IS THE BRIEF'S, VERBATIM
 *   Every sentence below is the brief's own text, transcribed rather than
 *   rewritten, because these are the words the business chose to publish. The
 *   brief also carried editorial instructions ("Keep this section concise", "Do
 *   not claim specific analytics or tracking tools unless they are actually
 *   installed") — those are satisfied by writing ONLY the text it supplies, and
 *   by adding nothing to it. The one place this file goes beyond the brief's
 *   letters is the contact address, explained next.
 *
 * ── THE CONTACT ADDRESS: THE BRIEF SAYS hello@, THE SITE SAYS service@ ─────
 *   The brief prints `hello@sourden.com` three times (§7, §10 here, §12 of the
 *   terms). This file does NOT contain that address, because the site's
 *   published, owner-confirmed contact is `service@sourden.com`: it is declared
 *   once in `site.js`, it is what the footer links to, and it is what the
 *   Organization JSON-LD publishes. Those two strings are one edit away from
 *   being inconsistent, and a legal page that states a contact address different
 *   from the one the visitor can actually write to is a real defect — worse
 *   here than anywhere else on the site.
 *
 *   So the address is NOT written in this file at all. The `mail: true` block
 *   below renders the address FROM `site.js`, and the same is true of the
 *   company name. If the business ever does move to `hello@`, the fix is one
 *   edit in one place and both documents follow.
 *
 * ── THE "LAST UPDATED" DATE NOW EXISTS; TWO OF THE FOUR ABSENCES REMAIN ────
 *   Before the brief arrived, four clause types were deliberately left out
 *   because each needs a real fact that only the business can supply: the
 *   trading entity, governing law, a last-updated date, and retention periods.
 *   The brief now supplies two of them —
 *
 *     · the last-updated date, which it requires to be the real current month
 *       (declared once in `legal-shared.js`, never derived from the build), and
 *     · data retention, as deliberately non-specific wording (§6) that commits
 *       to no period at all.
 *
 *   — and still leaves out the other two: there is no trading entity name and no
 *   governing law or venue anywhere in either document, and this file invents
 *   neither. The device has no slot for them, which is the point.
 *
 * The clause numbers are part of the headings, as the brief writes them, and the
 * anchors are URL-safe and unique within this document.
 * ---------------------------------------------------------------------------
 */

import { primaryCta } from './site.js';
import { legalUpdatedLine } from './legal-shared.js';

export const path = '/privacy-policy';

/** Shown in the footer, the breadcrumb and the sitemap. */
export const label = 'Privacy Policy';

/**
 * The finished page.
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
    /* Carried over verbatim from the reserved route in `routes.js`, so the
       page's search metadata does not change on the day it goes live — the same
       thing `/faq` did. */
    title: 'Privacy Policy | SOURDEN',
    description: 'How SOURDEN collects, uses and stores the information you provide.',
  },

  breadcrumbs: [{ label: 'Privacy Policy' }],

  hero: {
    eyebrow: 'LEGAL',
    title: 'Privacy Policy',
    description:
      'This Privacy Policy explains how SOURDEN collects, uses and protects information you provide when using our website and sourcing services.',
    updated: legalUpdatedLine,
  },

  sections: [
    {
      anchor: 'information-we-collect',
      heading: '1. Information We Collect',
      body: [
        {
          p: 'When you use the SOURDEN website or submit a sourcing request, we may collect information that you voluntarily provide, such as:',
        },
        {
          list: [
            'Name',
            'Email address',
            'WhatsApp or other contact information',
            'Country and city',
            'Business or company information',
            'Website or social media information',
            'Product requirements and sourcing details',
            'Estimated order quantity',
            'Target price or budget information',
            'Product specifications',
            'Reference images, files or other materials submitted with an inquiry',
            'Any additional information you choose to provide',
          ],
        },
        {
          p: 'We may also collect limited technical information automatically when you visit the website, such as browser type, device information, IP address, pages visited and basic usage information, depending on the website tools and analytics services in use.',
        },
      ],
    },
    {
      anchor: 'how-we-use-information',
      heading: '2. How We Use Information',
      body: [
        { p: 'We may use the information you provide to:' },
        {
          list: [
            'Review and respond to sourcing requests',
            'Understand your product and purchasing requirements',
            'Research and communicate with potential suppliers',
            'Provide quotations or sourcing information',
            'Coordinate sourcing, purchasing, quality control or shipping services when requested',
            'Communicate with you about your inquiry',
            'Improve our website and services',
            'Prevent spam, fraud or misuse of the website',
            'Meet applicable legal or regulatory requirements',
          ],
        },
        {
          p: 'We do not use your inquiry information for purposes unrelated to the services or communication you have requested, except where required or permitted by applicable law.',
        },
      ],
    },
    {
      anchor: 'how-we-share-information',
      heading: '3. How We Share Information',
      body: [
        { p: 'We do not sell your personal information.' },
        {
          p: 'When necessary to handle a sourcing request, we may share relevant information with third parties involved in the sourcing process, such as suppliers, manufacturers, inspection providers, logistics providers or other service providers.',
        },
        { p: 'We aim to share only the information reasonably necessary for the relevant purpose.' },
        {
          p: 'We may disclose information when required to comply with applicable law, legal process, or a valid request from a government or regulatory authority.',
        },
      ],
    },
    {
      anchor: 'reference-files-and-product-information',
      heading: '4. Reference Files and Product Information',
      body: [
        {
          p: 'If you upload product photos, specifications, drawings, documents or other reference materials through our website, we use them to understand and process your sourcing request.',
        },
        {
          p: 'Please do not upload confidential information, passwords, payment credentials or other information that is not necessary for your sourcing request.',
        },
        {
          p: 'Where appropriate, relevant product information may be shared with potential suppliers or service providers to evaluate sourcing options.',
        },
      ],
    },
    {
      anchor: 'data-security',
      heading: '5. Data Security',
      body: [
        {
          p: 'We take reasonable measures to protect information submitted through the website against unauthorized access, loss, misuse or disclosure.',
        },
        {
          p: 'However, no internet transmission or electronic storage system can be guaranteed to be completely secure. We cannot guarantee absolute security of information transmitted over the internet.',
        },
      ],
    },
    {
      anchor: 'data-retention',
      heading: '6. Data Retention',
      body: [
        {
          p: 'We retain information for as long as reasonably necessary to respond to inquiries, provide requested services, maintain business records, resolve disputes, prevent misuse, or comply with applicable legal obligations.',
        },
        {
          p: 'The retention period may vary depending on the nature of the information and the purpose for which it was collected.',
        },
      ],
    },
    {
      anchor: 'your-choices-and-rights',
      heading: '7. Your Choices and Rights',
      body: [
        {
          p: 'Depending on your location and applicable law, you may have rights regarding your personal information, including the right to request access, correction or deletion of certain information, or to object to or restrict certain processing.',
        },
        { p: 'To make a privacy-related request, contact us using the email address below.' },
        { mail: true },
      ],
    },
    {
      anchor: 'third-party-services-and-external-links',
      heading: '8. Third-Party Services and External Links',
      body: [
        {
          p: 'Our website may use third-party services to support functions such as website hosting, security, analytics, forms, communications or file handling.',
        },
        {
          p: 'These providers may process information according to their own privacy policies and applicable agreements.',
        },
        {
          p: 'Our website may also contain links to external websites. SOURDEN is not responsible for the privacy practices or content of third-party websites.',
        },
      ],
    },
    {
      anchor: 'changes-to-this-policy',
      heading: '9. Changes to This Policy',
      body: [
        {
          p: 'We may update this Privacy Policy from time to time to reflect changes to our website, services or legal requirements. The updated version will be published on this page with a revised “Last updated” date.',
        },
      ],
    },
    {
      anchor: 'contact',
      heading: '10. Contact',
      body: [
        { p: 'If you have questions about this Privacy Policy or how your information is handled, please contact:' },
        /* The company name and the address are rendered FROM `site.js` — see the
           header note. Neither string is typed into this file. */
        { entity: true },
        { mail: true },
        { link: primaryCta },
      ],
    },
  ],

  finalCta: {
    eyebrow: 'START WITH A REQUEST',
    title: 'Questions about your information?',
    description:
      'If anything in this policy is unclear, write to us and we will explain it.\nIf you are ready to begin, send us your sourcing requirements.',
    cta: primaryCta,
  },
};
