/**
 * SOURDEN — /insights/shipping-from-china-guide
 * ---------------------------------------------------------------------------
 * Transcribed from the authored document
 * "Shipping from China: Air Freight, Postal Shipping and Sea Freight Options
 * Explained".
 *
 * ── THE COPY IS THE DOCUMENT'S, VERBATIM ───────────────────────────────────
 * Every sentence below is the document's own text, transcribed rather than
 * rewritten. The document uses `**bold**`; the body block vocabulary
 * (`p` / `list` / `table` / `links` / `figure`) has no inline-emphasis type,
 * so the `**` markers are removed and the wording is kept as-is — the same
 * treatment the earlier articles give their bolded lines. Nothing is dropped
 * but the unrenderable markers.
 *
 * ── IMAGES: FOUR DIFFERENT SCENES, NOT ONE ─────────────────────────────────
 * The brief asks for 3–4 photographs and says not to repeat one logistics
 * scene, and not to reuse imagery already shown elsewhere on the site. Four
 * `figure` blocks therefore use four owner-supplied slots added to `media.js`
 * for this article — no site-wide slot is reused:
 *   · `shippingPortAerial`        — a container ship at a port (sea freight)
 *   · `shippingExpressCourier`    — a courier scanning a parcel by a cargo jet
 *   · `shippingContainerLoading`  — a forklift loading a container (consolidation)
 *   · `shippingAirCargoHub`       — parcels on conveyor belts (air cargo hub)
 *
 * ── THE LINK IS DERIVED, NOT TYPED ─────────────────────────────────────────
 * The document links "Contact SOURDEN" to the sourcing-request form. The href
 * is `primaryCta.href` from `site.js` — the one primary action site-wide — never
 * a hardcoded URL.
 *
 * ── WHAT THIS FILE DOES NOT DECLARE ────────────────────────────────────────
 * The article's title, listing sentence, category, publication date and SEO
 * keywords live in `insights-articles.js`; the shell reads that record.
 * ---------------------------------------------------------------------------
 */

import { primaryCta } from './site.js';

/** @type {{ tocHeading: string, sections: Array<Record<string, any>> }} */
export const page = {
  tocHeading: 'In this guide',

  sections: [
    /* =====================================================================
       INTRODUCTION — the four opening paragraphs, before the first chapter.
       Unnumbered and absent from the table of contents.
       ===================================================================== */
    {
      type: 'lead',
      blocks: [
        {
          type: 'p',
          text: 'Looking to buy products from China but worried about international shipping costs, delivery times, and import duties?',
        },
        {
          type: 'p',
          text: "Shipping doesn't have to be complicated. Whether you're ordering a few samples, purchasing products for personal use, or importing goods for your business, choosing the right shipping method can make a significant difference to your overall costs and delivery experience.",
        },
        {
          type: 'p',
          text: 'At SOURDEN, we help international buyers arrange shipping from China through different transportation channels, including express air shipping, postal air shipping, and sea freight.',
        },
        {
          type: 'p',
          text: "In this guide, we'll explain the main shipping options available and help you understand which one may be suitable for your shipment.",
        },
        {
          type: 'figure',
          imageKey: 'shippingPortAerial',
          variant: 'banner',
          caption: 'Container shipping is one of the ways goods leave China.',
        },
      ],
    },

    /* =====================================================================
       1. EXPRESS AIR SHIPPING
       ===================================================================== */
    {
      type: 'section',
      id: 'express-air-shipping',
      heading: '1. Express Air Shipping – Fast Delivery to the USA',
      blocks: [
        {
          type: 'p',
          text: 'If speed is your priority, express air shipping is a convenient option for customers in the United States.',
        },
        {
          type: 'p',
          text: 'We offer a dedicated shipping channel with an estimated delivery time of 5–7 business days.',
        },
        { type: 'p', text: 'Key features:' },
        {
          type: 'list',
          items: [
            'Destination: United States only',
            'Estimated delivery: 5–7 business days',
            'Customs clearance and import duties included under the applicable shipping service',
            'Suitable for small parcels and lightweight shipments',
            'Minimum chargeable weight: 0.5 kg',
            'Maximum shipment weight: 5 kg',
          ],
        },
        { type: 'p', text: 'Indicative shipping rates:' },
        {
          type: 'table',
          head: ['Chargeable Weight', 'Shipping Cost'],
          rows: [
            ['0.5 kg', 'From $19.50'],
            ['5 kg', 'Up to $85.80'],
          ],
        },
        {
          type: 'p',
          text: 'This option is particularly suitable for product samples, small orders, accessories, and other lightweight goods when faster delivery is important.',
        },
        {
          type: 'figure',
          imageKey: 'shippingExpressCourier',
          caption: 'An express courier scanning a parcel ahead of an air-cargo departure.',
        },
      ],
    },

    /* =====================================================================
       2. POSTAL AIR SHIPPING
       ===================================================================== */
    {
      type: 'section',
      id: 'postal-air-shipping',
      heading: '2. Postal Air Shipping – A Flexible Option for Most Countries',
      blocks: [
        {
          type: 'p',
          text: 'For customers outside the United States, or those looking for a more flexible international shipping option, our postal air shipping service is worth considering.',
        },
        {
          type: 'p',
          text: 'This service covers most countries and regions, making it a practical choice for smaller international shipments.',
        },
        { type: 'p', text: 'Key features:' },
        {
          type: 'list',
          items: [
            'Destination: Most countries and regions',
            'Estimated delivery: 10–14 business days',
            'Customs clearance and import duties included under the applicable shipping service',
            'Minimum chargeable weight: 0.1 kg',
            'Maximum shipment weight: Depends on the destination, generally within 10–30 kg',
          ],
        },
        { type: 'p', text: 'Indicative shipping rates:' },
        {
          type: 'table',
          head: ['Shipment Weight', 'Shipping Cost'],
          rows: [
            ['0.1 kg', 'From $10'],
            ['Larger parcels', 'Up to 10–30 kg, from $155.60'],
          ],
        },
        {
          type: 'p',
          text: 'The maximum accepted weight and actual shipping cost depend on the destination country and the shipping route.',
        },
        {
          type: 'p',
          text: 'This option works well for small purchases, samples, personal orders, and lightweight business shipments.',
        },
      ],
    },

    /* =====================================================================
       3. SEA FREIGHT
       ===================================================================== */
    {
      type: 'section',
      id: 'sea-freight',
      heading: '3. Sea Freight – A Cost-Effective Choice for Bulk Shipments',
      blocks: [
        { type: 'p', text: 'Are you planning to purchase larger quantities from China?' },
        {
          type: 'p',
          text: 'For bulk orders, heavy products, or shipments with a larger volume, sea freight from China may be a more economical solution.',
        },
        {
          type: 'p',
          text: 'Compared with air shipping, sea freight generally has a longer transit time, but it can offer a lower transportation cost per unit for larger shipments.',
        },
        {
          type: 'p',
          text: 'SOURDEN can help coordinate sea freight arrangements based on your destination, cargo volume, product type, and delivery requirements.',
        },
        { type: 'p', text: 'Sea freight is particularly suitable for:' },
        {
          type: 'list',
          items: [
            'Bulk purchases from Chinese manufacturers',
            'Wholesale and retail inventory',
            'Heavy or bulky products',
            'Orders consolidated from multiple suppliers',
            'Larger shipments that do not require urgent delivery',
          ],
        },
        {
          type: 'p',
          text: 'Available shipping arrangements and estimated transit times vary by destination and shipping method. We can help you compare suitable options before making a decision.',
        },
        {
          type: 'figure',
          imageKey: 'shippingContainerLoading',
          caption: 'A forklift loading palletised cartons into a container for consolidation.',
        },
      ],
    },

    /* =====================================================================
       4. AIR FREIGHT VS. SEA FREIGHT
       ===================================================================== */
    {
      type: 'section',
      id: 'air-vs-sea-freight',
      heading: '4. Air Freight vs. Sea Freight: Which Should You Choose?',
      blocks: [
        {
          type: 'p',
          text: "Different shipments require different transportation solutions. Here's a simple comparison:",
        },
        {
          type: 'table',
          head: ['Shipping Method', 'Best For', 'Speed', 'Shipment Size'],
          rows: [
            ['Express Air', 'Urgent small parcels', 'Fast', '0.5–5 kg'],
            ['Postal Air', 'Small international orders', 'Moderate', '0.1 kg and above, subject to destination limits'],
            ['Sea Freight', 'Bulk and heavy cargo', 'Slower', 'Larger shipments'],
          ],
        },
        { type: 'p', text: 'Our general recommendation:' },
        {
          type: 'list',
          items: [
            'Choose express air shipping when you need a small shipment delivered quickly to the USA.',
            'Choose postal air shipping when sending smaller parcels to most international destinations.',
            'Choose sea freight when purchasing in bulk and prioritizing transportation cost over speed.',
          ],
        },
        {
          type: 'p',
          text: 'The best option depends on more than just the shipping rate. Product dimensions, chargeable weight, destination, customs requirements, and delivery arrangements should all be considered.',
        },
      ],
    },

    /* =====================================================================
       5. DOOR-TO-DOOR SHIPPING WITH CUSTOMS CLEARANCE
       ===================================================================== */
    {
      type: 'section',
      id: 'door-to-door-shipping',
      heading: '5. What Does Door-to-Door Shipping with Customs Clearance Included Mean?',
      blocks: [
        {
          type: 'p',
          text: 'International shipping often involves more than simply transporting a parcel from China to another country.',
        },
        {
          type: 'p',
          text: 'Import customs clearance, duties, taxes, and destination handling can all affect the final delivery cost.',
        },
        {
          type: 'p',
          text: 'Some of our dedicated shipping channels offer customs clearance and import duties included in the quoted shipping rate. This is commonly referred to as DDP-style shipping.',
        },
        {
          type: 'p',
          text: 'Depending on the specific route and service terms, this can make the process easier for buyers because customs-related arrangements are handled through the shipping channel.',
        },
        {
          type: 'p',
          text: 'However, not every product can use every shipping route. Certain goods may be restricted or require additional documentation, permits, or special handling.',
        },
        {
          type: 'p',
          text: 'We recommend confirming the product details and destination before booking.',
        },
      ],
    },

    /* =====================================================================
       6. HOW SOURDEN HELPS YOU SHIP FROM CHINA
       ===================================================================== */
    {
      type: 'section',
      id: 'how-sourden-helps',
      heading: '6. How SOURDEN Helps You Ship from China',
      blocks: [
        {
          type: 'p',
          text: 'SOURDEN is more than a shipping coordinator. We help overseas buyers manage the process of purchasing products from China.',
        },
        { type: 'p', text: 'Our services include:' },
        {
          type: 'list',
          items: [
            'Product sourcing: Find products and suitable suppliers in China.',
            'Supplier coordination: Communicate with factories and coordinate purchasing.',
            'Order management: Follow up on orders and production progress.',
            'Quality inspection: Arrange product checks before dispatch.',
            'Consolidation: Collect goods from multiple suppliers and arrange combined shipments where suitable.',
            'Shipping arrangements: Compare available air and sea freight options and coordinate delivery.',
          ],
        },
        {
          type: 'p',
          text: 'Whether you are an individual buyer, a small business owner, or a wholesale importer, we can help you find a practical way to purchase and ship products from China.',
        },
        {
          type: 'figure',
          imageKey: 'shippingAirCargoHub',
          caption: 'Parcels moving through an air cargo sorting facility.',
        },
      ],
    },

    /* =====================================================================
       7. GET A SHIPPING QUOTE FROM CHINA
       ===================================================================== */
    {
      type: 'section',
      id: 'get-a-shipping-quote',
      heading: '7. Get a Shipping Quote from China',
      blocks: [
        { type: 'p', text: 'Not sure which shipping method is right for your order?' },
        { type: 'p', text: 'Simply send us the following information:' },
        {
          type: 'list',
          items: [
            'Destination country and postal code',
            'Product name and a brief description',
            'Estimated parcel weight',
            'Package dimensions, if available',
            'Whether you prefer faster delivery or a lower shipping cost',
          ],
        },
        {
          type: 'p',
          text: 'If you are purchasing from multiple suppliers, let us know. We can also explore consolidation options before shipping.',
        },
        {
          type: 'p',
          text: 'Let SOURDEN help you make shipping from China simpler and more manageable.',
        },
        {
          type: 'p',
          text: 'Contact SOURDEN to discuss your shipment or request a shipping quote.',
        },
        {
          type: 'links',
          items: [{ label: 'Contact SOURDEN', href: primaryCta.href }],
        },
        { type: 'p', text: 'SOURDEN – Your China Sourcing Partner.' },
      ],
    },
  ],
};
