/**
 * SOURDEN — INSIGHT ARTICLE BODY
 * ---------------------------------------------------------------------------
 * Christmas Products to Sell in 2026: Historical Trends and Sourcing Ideas
 *
 * This file holds ONLY the article's words. Its title, listing sentence,
 * category and SEO keywords live in `insights-articles.js` (the hub's own
 * registry), and its closing action uses `primaryCta` from `site.js` — never a
 * hardcoded href. Four `figure` blocks pull product-group photographs from
 * `media.js`; the alt text and captions describe the photograph, not a claim
 * about SOURDEN's own range, so nothing here is invented evidence.
 * ---------------------------------------------------------------------------
 */

import { primaryCta } from './site.js';
import { serviceLink } from './service-links.js';

export const page = {
  tocHeading: 'What this guide covers',

  sections: [
    /* ── LEAD ─────────────────────────────────────────────────────────────── */
    {
      type: 'lead',
      blocks: [
        {
          type: 'p',
          text:
            'Christmas is the single largest retail season of the year, and the products that sell well are rarely an accident. Behind every strong holiday assortment is a mix of repeat demand, fresh trends, and suppliers who can deliver on time.',
        },
        {
          type: 'p',
          text:
            'This guide looks at what historical holiday shopping data can tell you about 2026, then turns that into concrete product ideas across home décor, children’s gifts, gift wrapping and pet accessories — the categories where small and mid-sized importers can still find room to differentiate.',
        },
        {
          type: 'p',
          text:
            'It also covers the part many buyers underestimate: compliance and timing. A great product that arrives after the season, or that fails a safety check at the border, is not a great product.',
        },
        {
          type: 'p',
          text:
            'The goal is practical. Use the ideas below as a starting point for your own sourcing shortlist, and plan backwards from the date your customers need stock on their shelves.',
        },
        {
          type: 'figure',
          imageKey: 'christmasBanner',
          variant: 'banner',
          caption:
            'A grouped arrangement of Christmas home décor and gifts — ornaments, fabric stockings, gift wrap and table decorations photographed as one product set.',
        },
      ],
    },

    /* ── §1 HISTORICAL DATA ──────────────────────────────────────────────── */
    {
      type: 'section',
      id: 'historical-data',
      heading: 'What Can Historical Christmas Shopping Data Tell Us?',
      inToc: true,
      blocks: [
        {
          type: 'p',
          text:
            'Historical data is useful, but only as a direction, not a script. The National Retail Federation (NRF) has forecast U.S. holiday sales in the region of $1.01–1.02 trillion for the 2025 season, with per-household spending around $890 — a useful reminder that the overall pie keeps growing even when individual categories shift.',
        },
        {
          type: 'p',
          text:
            'Amazon’s annual Toys We Love list and its holiday advertising trend reports are worth scanning for themes such as licensed characters, STEM toys and nostalgia, but they describe what one retailer is promoting, not what every market wants.',
        },
        {
          type: 'p',
          text:
            'The takeaway: treat last year’s winners as evidence of demand, not as an order sheet. The product ideas in the next sections build on that demand with items that are easier for smaller importers to source and differentiate.',
        },
      ],
    },

    /* ── §2 HOME DÉCOR ────────────────────────────────────────────────────── */
    {
      type: 'section',
      id: 'home-decor',
      heading: 'Christmas Home Décor',
      inToc: true,
      blocks: [
        {
          type: 'p',
          text:
            'Home décor is the backbone of Christmas assortments — high volume, broad appeal, and plenty of room for colour, material and finish variations.',
        },
        {
          type: 'figure',
          imageKey: 'christmasHomeDecor',
          caption:
            'Christmas ornaments, hanging decorations and fabric stockings grouped as a sourcing sample set.',
        },
        {
          type: 'list',
          items: [
            'Ornaments and hanging decorations — baubles, felt shapes, wooden accents and personalised tags. Easy to ship, endlessly customisable, and strong as both bulk and gift lines.',
            'Stockings and fabric decorations — embroidered or printed stockings, tree skirts and bunting. Fabric quality and colourfastness matter more than the shape.',
            'Table decorations and reusable fabric — runners, napkins and centrepiece accents. “Reusable” sells well with buyers watching waste and cost.',
            'Advent calendars and display accessories — filled or empty formats, plus risers and display props. The format and any fillers are where differentiation lives.',
          ],
        },
        {
          type: 'p',
          text:
            'The differentiators that actually move stock are finish quality, coordinated colour stories, and packaging that photographs well for online listings.',
        },
      ],
    },

    /* ── §3 GIFTS FOR CHILDREN ────────────────────────────────────────────── */
    {
      type: 'section',
      id: 'gifts-for-children',
      heading: 'Christmas Gifts for Children',
      inToc: true,
      blocks: [
        {
          type: 'p',
          text:
            'Children’s gifts are a large, fast-moving category — but also the one with the strictest safety expectations.',
        },
        {
          type: 'figure',
          imageKey: 'christmasKidsCraft',
          caption:
            "Children’s Christmas craft kits and activity packs grouped as a product assortment.",
        },
        {
          type: 'list',
          items: [
            'Craft kits — ornament-decorating sets, bead kits and simple sewing projects. Theme and contents drive the price point.',
            'Colouring and activity packs — books, sticker sets and puzzle pads. Light, flat and cheap to ship.',
            'Family games and conversation cards — card games and “would you rather” style packs. Concept and language localisation matter.',
          ],
        },
        {
          type: 'p',
          text:
            'If a product is intended for children, plan for safety documentation from the start: in the U.S. that means CPSIA and ASTM F963 for toys; in the EU, the Toy Safety Directive and EN 71. Age grading and small-parts warnings are not optional.',
        },
      ],
    },

    /* ── §4 GIFT WRAPPING ─────────────────────────────────────────────────── */
    {
      type: 'section',
      id: 'gift-wrapping',
      heading: 'Gift Wrapping and Party Accessories',
      inToc: true,
      blocks: [
        {
          type: 'p',
          text:
            'Wrapping and party accessories are the high-margin add-on category — low unit cost, strong impulse appeal, and easy to bundle with a main gift.',
        },
        {
          type: 'figure',
          imageKey: 'christmasGiftWrap',
          caption:
            'Christmas gift bags, boxes and rolls of wrapping paper shown together as a product group.',
        },
        {
          type: 'list',
          items: [
            'Gift bags, boxes and wrapping — printed paper, kraft ranges and rigid boxes. Print alignment and paper weight are the quality signals buyers check.',
            'Party tableware — plates, napkins and disposable serveware for holiday gatherings. Keep food-contact compliance in view.',
          ],
        },
        {
          type: 'p',
          text:
            'Anything that touches food — wrappers, plates, napkins used with food — needs food-contact compliance in the destination market. Specify the intended use to your supplier so the right materials are used.',
        },
      ],
    },

    /* ── §5 PET ACCESSORIES ──────────────────────────────────────────────── */
    {
      type: 'section',
      id: 'pet-accessories',
      heading: 'Christmas Accessories for Pets',
      inToc: true,
      blocks: [
        {
          type: 'p',
          text:
            'Pet owners spend on Christmas too, and the category is lightly contested compared with décor.',
        },
        {
          type: 'list',
          items: [
            'Bandanas and bow ties — festive pet apparel that photographs well for social selling.',
            'Collar charms and themed accessories — small, light and easy to ship.',
          ],
        },
        {
          type: 'p',
          text:
            'Animal safety comes first: avoid small detachable parts that could be chewed off, and use pet-safe fabrics and dyes. Size ranges matter — a one-size bandana fits few dogs well.',
        },
      ],
    },

    /* ── §6 SMALL IMPORTERS TABLE ─────────────────────────────────────────── */
    {
      type: 'section',
      id: 'small-importers',
      heading: 'Which Christmas Products Suit Small Importers?',
      inToc: true,
      blocks: [
        {
          type: 'p',
          text:
            'Not every Christmas product suits a first-time or small-volume importer. The table below groups ten categories by how they behave in shipping, how much room there is to differentiate, and the main thing to watch.',
        },
        {
          type: 'table',
          head: ['Product category', 'Shipping profile', 'Differentiation potential', 'Main concern'],
          rows: [
            ['Ornaments & hanging decorations', 'Small, light, low freight cost', 'High (material, shape, finish)', 'Fragility, print/finish quality'],
            ['Stockings & fabric decorations', 'Flat, compressible', 'Medium (fabric, embroidery)', 'Fabric quality, colourfastness'],
            ['Table decorations & reusable fabric', 'Light, some bulky', 'Medium', 'Washability, finish'],
            ['Advent calendars & display accessories', 'Mixed, some bulky', 'High (format, fillers)', 'Assembly, filler sourcing'],
            ['Children’s craft kits', 'Small boxes, some weight', 'High (theme, contents)', 'Age safety, small parts (CPSIA/ASTM F963)'],
            ['Colouring & activity packs', 'Very light, flat', 'Low–Medium', 'Paper quality, licensing'],
            ['Family games & conversation cards', 'Mixed box sizes', 'Medium (concept, language)', 'Printing, translation'],
            ['Gift bags, boxes & wrapping', 'Bulky, low weight', 'Low–Medium (print, material)', 'Paper weight, print alignment'],
            ['Party tableware', 'Bulky, low weight', 'Low', 'Food-contact compliance'],
            ['Pet Christmas accessories', 'Small, light', 'Medium (sizing, fabrics)', 'Animal safety, choking risk'],
          ],
        },
      ],
    },

    /* ── §7 USING AMAZON DATA ────────────────────────────────────────────── */
    {
      type: 'section',
      id: 'amazon-data',
      heading: 'How to Use Amazon’s Historical Data Without Chasing Last Year’s Winners',
      inToc: true,
      blocks: [
        {
          type: 'p',
          text:
            'Amazon’s historical data is a goldmine and a trap. The trap is chasing last year’s winners after the trend has already peaked. Use it as a map of demand, then source your own version.',
        },
        {
          type: 'list',
          items: [
            'Read the data as demand signals, not a buy list — note which themes recur across years (tradition) versus one-off spikes (fad).',
            'Shortlist three to five themes that fit your supplier base and budget, not the whole chart.',
            'Differentiate on material, finish, bundle or packaging so you are not competing head-to-head on a commodity SKU.',
            'Validate with a small sample order before committing to a full production run.',
            'Watch the calendar, not the ranking — a product sourced in December for this season is too late; plan for next year.',
          ],
        },
      ],
    },

    /* ── §8 COMPLIANCE ───────────────────────────────────────────────────── */
    {
      type: 'section',
      id: 'compliance',
      heading: 'Product Compliance',
      inToc: true,
      blocks: [
        {
          type: 'p',
          text:
            'Compliance is where holiday momentum dies if ignored. The rules differ by market, but the pattern is the same: know which apply before you order.',
        },
        {
          type: 'list',
          items: [
            'United States — CPSIA and ASTM F963 for children’s products; FDA rules for anything food-contact; general product safety for the rest.',
            'United Kingdom — UKCA marking and UK REACH for chemicals; the same children’s safety expectations as before.',
            'European Union — the General Product Safety Regulation (GPSR) plus REACH; EN 71 for toys. GPSR raises the bar on traceability and documentation for online sellers.',
          ],
        },
        {
          type: 'p',
          text:
            'Work with suppliers who can provide test reports and keep records. SOURDEN treats documentation as part of the product, not paperwork after the fact.',
        },
      ],
    },

    /* ── §9 TIMING ───────────────────────────────────────────────────────── */
    {
      type: 'section',
      id: 'timing',
      heading: 'Plan Christmas 2026 Backwards',
      inToc: true,
      blocks: [
        {
          type: 'p',
          text:
            'Christmas selling peaks in early December, but your production and shipping window closes months earlier. Plan backwards from the date stock must reach your customer.',
        },
        {
          type: 'list',
          items: [
            'Retail shelf-ready: early December 2026 — leaves buffer for the pre-Christmas rush.',
            'Arrive at warehouse / fulfilment: late October 2026 — sea freight from China typically needs 30–45 days plus handling.',
            'Production complete: early October 2026 — buffer for inspection and rework.',
            'Bulk materials and components locked: late August 2026.',
            'Samples approved: July 2026.',
            'Supplier shortlist and quotes: June 2026.',
          ],
        },
        {
          type: 'p',
          text:
            'If you are starting later than this, air freight can recover time at a cost — but the economics shift quickly, so decide early.',
        },
      ],
    },

    /* ── §10 RECOMMENDATIONS ─────────────────────────────────────────────── */
    {
      type: 'section',
      id: 'recommendations',
      heading: 'Final Recommendations',
      inToc: true,
      blocks: [
        {
          type: 'p',
          text:
            'Different buyers should weight the ideas above differently.',
        },
        {
          type: 'list',
          items: [
            'First-time importer — start with light, low-risk categories (gift wrap, ornaments) and small MOQs; learn the process before bulky décor.',
            'Growing retailer — build a coordinated collection (décor + wrapping + tableware) so the range looks curated, not random.',
            'Established e-commerce / Amazon seller — use the data sections to pick two or three themes, differentiate on bundle and packaging, and lock timing now.',
          ],
        },
      ],
    },

    /* ── CTA (not a chapter) ──────────────────────────────────────────────── */
    {
      type: 'section',
      id: 'source-with-sourden',
      heading: 'Source Christmas Products from China with SOURDEN',
      inToc: false,
      blocks: [
        {
          type: 'p',
          text:
            'If you want to source any of these products from China, SOURDEN can help you turn a shortlist into a supplied, inspected and shipped order. Tell us what you are looking for and we will find and verify suitable suppliers.',
        },
        {
          type: 'links',
          items: [primaryCta, serviceLink('product-sourcing')],
        },
      ],
    },

    /* ── REFERENCES (not a chapter) ──────────────────────────────────────── */
    {
      type: 'section',
      id: 'references',
      heading: 'References',
      inToc: false,
      blocks: [
        {
          type: 'list',
          items: [
            'National Retail Federation — 2025 holiday sales forecast and consumer spending data.',
            'Amazon — annual Toys We Love holiday list.',
            'Amazon Ads — holiday shopping trends and consumer behaviour reports.',
            'National Retail Federation — winter holiday retail calendar and seasonal insights.',
          ],
        },
      ],
    },
  ],
};
