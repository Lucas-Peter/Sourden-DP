/**
 * SOURDEN — INSIGHT ARTICLE BODY
 * ---------------------------------------------------------------------------
 * Want to Start a Small Business? Start Selling Without a Store
 *
 * This file holds ONLY the article's words. Its title, meta description,
 * category, publication date and SEO keywords live in `insights-articles.js`;
 * its closing actions use `primaryCta` from `site.js` and `serviceLink()` from
 * `service-links.js` — never a hardcoded href.
 *
 * ── EDITORIAL POSITION ─────────────────────────────────────────────────────
 * This is a guide for someone who has not started yet, not a SOURDEN advert.
 * Sections 1–3 give advice that would be useful with or without a sourcing
 * partner; SOURDEN first appears in section 4, as the answer to a problem the
 * reader has already been shown. Keep that ratio if you edit: roughly three
 * parts advice to one part service.
 *
 * ── WHAT THIS FILE MAY NOT CLAIM ───────────────────────────────────────────
 * No success rate, no customer count, no guarantee of income. The Canadian
 * customer mentioned in section 5 is a single case supplied by the owner, and
 * is deliberately left unquantified — no revenue figure, no timeframe, no
 * testimonial quote. The paragraph that follows it states plainly that results
 * vary and that income is not guaranteed, and that paragraph is not optional.
 *
 * ── IMAGES ─────────────────────────────────────────────────────────────────
 * Three `figure` blocks read slots from `media.js`. The first and third are
 * supplied for this article; the inspection figure reuses
 * `articleInspectionChecklist` because the frame originally supplied for it was
 * 620 × 465 and carried a third-party inspection company's logo on the wall and
 * on the operator's badge. See the note in `media.js` before replacing it.
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
            'Have you ever thought about starting your own business, or making some extra money by selling products?',
        },
        {
          type: 'p',
          text:
            'Maybe you have considered selling online, but you are not sure where to begin. You do not have a physical store, a website, or any experience running a business. You might not even know what products to sell.',
        },
        {
          type: 'p',
          text:
            'The good news is that getting started does not have to be complicated.',
        },
        {
          type: 'p',
          text:
            'There are more ways than ever to test a small business idea without opening a traditional store or making a large initial investment. With the right products, a practical sales channel and reliable sourcing support, you can take your first steps at your own pace.',
        },
        {
          type: 'p',
          text:
            'Starting small can be a practical way to explore new business opportunities — and it is usually the cheapest way to find out whether an idea is worth pursuing.',
        },
        {
          type: 'figure',
          imageKey: 'smallBusinessBanner',
          variant: 'banner',
          caption:
            'A seller checking a product sample beside an open laptop and stacked mailing cartons — one way to start selling without premises.',
        },
      ],
    },

    /* ── §1 NO STORE NEEDED ──────────────────────────────────────────────── */
    {
      type: 'section',
      id: 'without-a-store',
      heading: 'You Don’t Need a Physical Store to Start Selling',
      inToc: true,
      blocks: [
        {
          type: 'p',
          text:
            'One of the biggest misconceptions about starting a business is that you need a shop, a professional website or a large inventory before you can begin.',
        },
        {
          type: 'p',
          text: 'That is not necessarily true.',
        },
        {
          type: 'p',
          text:
            'If you already use Facebook, you may have access to several ways to introduce products to potential customers. Here are a few options worth exploring.',
        },
        {
          type: 'h3',
          text: 'Facebook Marketplace',
        },
        {
          type: 'p',
          text:
            'Facebook Marketplace allows eligible users to list products for sale and connect with local buyers. It is one possible way to test whether people in your area are interested in certain products.',
        },
        {
          type: 'h3',
          text: 'Your Personal Facebook Profile',
        },
        {
          type: 'p',
          text:
            'You can share product photos, introduce new items, and let friends and local contacts know what you are offering. People who already know you may be more willing to ask questions or recommend your products.',
        },
        {
          type: 'h3',
          text: 'Local Buy-and-Sell Facebook Groups',
        },
        {
          type: 'p',
          text:
            'Many communities have Facebook groups where members share products, look for local deals, and buy or sell items. If group rules allow commercial listings, these communities can be another way to reach potential customers.',
        },
        {
          type: 'p',
          text:
            'You can also explore other local selling platforms or online marketplaces available in your country.',
        },
        {
          type: 'p',
          text:
            'The important thing is to start with a sales channel that is easy for you to manage. A channel you can keep up with — even a small one — is worth more than an ambitious set-up you abandon after a month.',
        },
      ],
    },

    /* ── §2 WHAT TO SELL ──────────────────────────────────────────────────── */
    {
      type: 'section',
      id: 'what-to-sell',
      heading: 'What Should You Sell?',
      inToc: true,
      blocks: [
        {
          type: 'p',
          text:
            'This is often the first big question for someone new to selling.',
        },
        {
          type: 'p',
          text:
            'There are thousands of products available from China, but that does not mean every product is suitable for your market or your budget. Instead of choosing products simply because they look attractive or have a low purchase price, consider a few practical factors.',
        },
        {
          type: 'list',
          items: [
            'Local demand — are people in your area already buying similar products?',
            'Competition — how many sellers offer the same or similar items?',
            'Selling price — is there enough room between your total costs and the price customers are willing to pay?',
            'Shipping — is the product easy and affordable to transport?',
            'Product regulations — are there any safety, labelling, import or certification requirements in your country?',
            'Your interests — are you familiar with the product category, and comfortable explaining it to customers?',
          ],
        },
        {
          type: 'p',
          text: 'For beginners, it may be worth exploring categories such as:',
        },
        {
          type: 'list',
          items: [
            'Fashion and accessories — clothing, bags, jewellery, hats and everyday accessories.',
            'Home and living — storage products, decorative items, kitchen accessories and practical household goods.',
            'Pet supplies — pet accessories, toys, grooming products and everyday pet essentials.',
            'Sports and outdoor — fitness accessories, outdoor equipment and recreational products.',
            'Beauty and hair products — hair extensions, wigs, hair accessories and other beauty-related products.',
          ],
        },
        {
          type: 'p',
          text:
            'These are starting points for research, not guaranteed bestsellers. The right choice depends on your local demand, competition, selling costs and ability to reach customers.',
        },
        {
          type: 'p',
          text:
            'One practical filter is weight and volume. Light, non-fragile items are cheaper to ship, easier to store in a spare room, and less painful to write off if a product does not sell. They are usually a better first order than anything bulky or easily damaged.',
        },
      ],
    },

    /* ── §3 TEST THE MARKET ──────────────────────────────────────────────── */
    {
      type: 'section',
      id: 'test-the-market',
      heading: 'Start Small and Test the Market First',
      inToc: true,
      blocks: [
        {
          type: 'p',
          text:
            'You do not have to invest a large amount of money before knowing whether a product will sell. A more cautious approach is to research first, compare costs, and test demand before committing to a larger order.',
        },
        {
          type: 'p',
          text: 'Here is one possible way to approach it.',
        },
        {
          type: 'h3',
          text: 'Step 1: Research Your Local Market',
        },
        {
          type: 'p',
          text:
            'Look at similar products on Facebook Marketplace and other local selling platforms. Check their selling prices, product styles, customer reviews, and how frequently similar listings appear. A product listed every day at the same price is telling you something different from one that sells quickly and is never relisted.',
        },
        {
          type: 'h3',
          text: 'Step 2: Shortlist a Few Products',
        },
        {
          type: 'p',
          text:
            'Choose a small number of products that match your interests and appear to have potential demand. Avoid trying to sell too many unrelated products at once — a shortlist you can compare is more useful than a catalogue you cannot afford to stock.',
        },
        {
          type: 'h3',
          text: 'Step 3: Check the Sourcing Costs',
        },
        {
          type: 'p',
          text:
            'Before purchasing, find out the product price, shipping costs, packaging costs, import duties, taxes and any other expenses that may apply. Ask for these as a written breakdown rather than a single landed figure, so you can see which part of the cost is actually negotiable.',
        },
        {
          type: 'h3',
          text: 'Step 4: Evaluate Your Potential Selling Price',
        },
        {
          type: 'p',
          text:
            'Compare your estimated total costs with realistic local selling prices. Remember that the difference is not necessarily your profit: advertising, delivery, platform fees, returns and other expenses may also need to be considered.',
        },
        {
          type: 'h3',
          text: 'Step 5: Place a Small Order if Appropriate',
        },
        {
          type: 'p',
          text:
            'If the supplier allows a small order and the numbers make sense, you can consider starting with a limited quantity.',
        },
        {
          type: 'p',
          text:
            'Not every supplier accepts small orders, and some products have minimum order quantities. It is important to confirm these details before making a commitment — a minimum order that is far above what you can sell is a reason to keep looking, not a reason to order more stock than you need.',
        },
        {
          type: 'p',
          text:
            'The goal is to learn what works before expanding your investment.',
        },
      ],
    },

    /* ── §4 SOURCING ─────────────────────────────────────────────────────── */
    {
      type: 'section',
      id: 'sourcing-from-china',
      heading: 'How Can You Source Products from China Without Dealing with Multiple Suppliers?',
      inToc: true,
      blocks: [
        {
          type: 'p',
          text:
            'Once you find products that interest you, the next challenge is usually sourcing.',
        },
        {
          type: 'p',
          text:
            'You may find a product online, but then have to figure out:',
        },
        {
          type: 'list',
          items: [
            'Where can you find the actual manufacturer or supplier?',
            'Is the quoted price reasonable?',
            'Can the supplier provide the specifications you need?',
            'Can someone help check the products before shipment?',
            'What happens if you want to purchase from several different suppliers?',
            'How can you arrange international shipping?',
          ],
        },
        {
          type: 'p',
          text:
            'For someone new to importing, handling all these steps independently can be time-consuming and confusing. This is where a sourcing partner can help.',
        },
        {
          type: 'p',
          text:
            'SOURDEN provides China sourcing support for small businesses, retailers, online sellers and individuals. Depending on your requirements, we can help with:',
        },
        {
          type: 'list',
          items: [
            'Product sourcing and supplier identification',
            'Supplier communication and price inquiries',
            'Purchasing coordination',
            'Product inspection arrangements',
            'Order consolidation from multiple suppliers',
            'International shipping coordination',
          ],
        },
        {
          type: 'figure',
          imageKey: 'articleInspectionChecklist',
          caption:
            'A pre-shipment check: the inspection record being filled in beside cartons already packed for dispatch.',
        },
        {
          type: 'p',
          text:
            'Instead of having to communicate with several suppliers and manage every detail yourself, you can work with one point of contact to coordinate the sourcing process. You tell us what you are looking for, and we help explore suitable sourcing options.',
        },
      ],
    },

    /* ── §5 FOCUS ON SELLING ─────────────────────────────────────────────── */
    {
      type: 'section',
      id: 'focus-on-selling',
      heading: 'You Focus on Selling. We’ll Help with the Sourcing.',
      inToc: true,
      blocks: [
        {
          type: 'p',
          text:
            'Starting a small business does not mean you have to do everything alone. You may already know how to connect with people in your local community, share products on social media, or talk to potential customers.',
        },
        {
          type: 'p',
          text:
            'What you may not know is how to find suitable suppliers in China, compare purchasing options, arrange inspections, or coordinate international shipping. Those are the parts that usually take the longest to learn, and the parts where an avoidable mistake costs the most.',
        },
        {
          type: 'p',
          text:
            'You can focus on developing your sales channels and building relationships with customers, while the sourcing work behind the scenes is handled for you.',
        },
        {
          type: 'p',
          text:
            'We have also seen customers explore this approach in practice. One customer in Canada started selling products through social channels and local online marketplaces, and was able to make money from it.',
        },
        {
          type: 'p',
          text:
            'Every market and business is different, of course. Results depend on product selection, pricing, demand, competition and how you manage your sales. There is no guaranteed income, but starting with careful research and manageable orders can help you understand the opportunity before taking bigger steps.',
        },
        {
          type: 'figure',
          imageKey: 'smallBusinessPacking',
          caption:
            'Packing and addressing parcels at home, with orders confirmed on a laptop — the selling side that a sourcing partner does not replace.',
        },
      ],
    },

    /* ── §6 GET STARTED ──────────────────────────────────────────────────── */
    {
      type: 'section',
      id: 'get-started',
      heading: 'You Don’t Have to Figure Everything Out on Your Own',
      inToc: true,
      blocks: [
        {
          type: 'p',
          text:
            'If you have been thinking about starting a small business but do not know where to begin, you can start with a simple conversation.',
        },
        {
          type: 'p',
          text:
            'You do not need to arrive with a complete business plan or a list of products. Tell us a little about:',
        },
        {
          type: 'list',
          items: [
            'Which country or market you want to sell in',
            'What types of products interest you',
            'Whether you are planning to sell online, locally, or through an existing store',
            'Your approximate starting budget, if you have one',
          ],
        },
        {
          type: 'p',
          text:
            'We can help you explore product ideas and discuss possible sourcing options based on your requirements.',
        },
        {
          type: 'p',
          text:
            'Whether you are an experienced retailer looking to expand your product range, or someone exploring a small business for the first time, the goal is the same: make sourcing from China manageable enough to try.',
        },
      ],
    },

    /* ── CTA (not a chapter) ──────────────────────────────────────────────── */
    {
      type: 'section',
      id: 'start-small',
      heading: 'Start Small. Grow Together.',
      inToc: false,
      blocks: [
        {
          type: 'p',
          text:
            'Ready to explore your first product idea? Tell us the market you are selling into and the kind of product you have in mind, and we will help you look at suitable sourcing options.',
        },
        {
          type: 'links',
          items: [primaryCta, serviceLink('product-sourcing')],
        },
      ],
    },

    /* ── ABOUT (not a chapter) ───────────────────────────────────────────── */
    {
      type: 'section',
      id: 'about-sourden',
      heading: 'About SOURDEN',
      inToc: false,
      blocks: [
        {
          type: 'p',
          text:
            'SOURDEN helps overseas businesses and individuals source products from China. Our services include supplier sourcing, purchasing coordination, product inspection arrangements, order consolidation and international shipping coordination.',
        },
      ],
    },
  ],
};
