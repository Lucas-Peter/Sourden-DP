/**
 * SOURDEN — /industries/packaging
 * ---------------------------------------------------------------------------
 * Category page 04 of 09, from the Industries child-pages brief (§7).
 *
 * ── WHAT THE BRIEF SUPPLIED, AND WHAT THIS FILE AUTHORS ─────────────────────
 * Eyebrow, H1 and intro are the brief's; the thirteen packaging types, the seven
 * buyer needs, the ten sourcing considerations and the five FAQ questions are
 * the brief's. This category's brief gives no approach section, so §4's six
 * stages are authored — built from the mechanisms the brief does name (material,
 * printing, finishing, quantity) rather than invented.
 *
 * ── THE PER-CATEGORY INSTRUCTION (brief §7) ────────────────────────────────
 * "Explain that packaging quotations can vary significantly based on material,
 * size, printing, finishing and quantity."
 *
 * In this category that explanation is not a caveat, it is the useful part of the
 * page: it is the reason two quotes for "the same box" can be three times apart.
 * It is the §6 `note`, and it also shapes §4's fourth stage, which is where the
 * setup-cost mechanism is set out — plates and dies are one-off costs spread
 * across the run. Both are written as sourcing facts, with no price, no rate and
 * no saving claimed.
 *
 * ── TONE PER SECTION ───────────────────────────────────────────────────────
 * Hero ivory; §2 white → §3 ivory → §4 white → §5 ivory → §6 white → the ink
 * rail → white rows → ivory audience → white index → ivory FAQ.
 * ---------------------------------------------------------------------------
 */

import {
  audienceSection,
  exploreMoreSection,
  helpSection,
  processSection,
  relatedServicesSection,
  standardFinalCta,
} from './industry-standard.js';

export const slug = 'packaging';

/* ===========================================================================
   SEO
   =========================================================================== */

export const meta = {
  title: 'Packaging Sourcing from China | SOURDEN',
  description:
    'Sourcing product, retail and shipping packaging from China — boxes, pouches, labels and printed packaging specified around your product and brand.',
};

/* ===========================================================================
   HERO  (brief §3 and §7)
   =========================================================================== */

export const hero = {
  eyebrow: 'INDUSTRIES / PACKAGING',
  title: 'Packaging sourced around your product and brand.',
  description:
    'Packaging is often part of the product itself. Sourden helps buyers source packaging based on dimensions, materials, quantities, printing, finishing and application.',
  image: {
    key: 'industryPackaging',
    /** 〔added〕 — the brief specifies the image but not its caption. */
    caption: 'PRINTING AND FINISHED RETAIL PACKAGING',
  },
};

/* ===========================================================================
   SECTIONS
   =========================================================================== */

export const sections = [
  /* ------------------------------------------------- §2 What we can source -- */
  {
    type: 'checkList',
    /** 〔added〕 tone. */
    tone: 'white',
    eyebrow: 'WHAT WE CAN SOURCE',
    /** 〔added〕 heading and lead. */
    title: 'Boxes, bags, pouches, labels and the inserts inside them.',
    description:
      'Packaging is the one category on this site that is not sold to an end customer as a product — it is the thing the product arrives in. That changes what a brief has to say, and these are the types buyers ask about most.',
    /** The brief's thirteen packaging types, in its order. */
    items: [
      'Product boxes',
      'Mailer boxes',
      'Shipping cartons',
      'Poly bags',
      'Paper bags',
      'Gift packaging',
      'Pouches',
      'Labels',
      'Stickers',
      'Hang tags',
      'Protective packaging',
      'Custom inserts',
      'Retail packaging',
    ],
    /**
     * 〔added〕 — the brief gives no note for this category. The useful thing to
     * say is what a packaging brief actually consists of, because it is not the
     * same shape as a product brief: nobody asks for "a box".
     */
    note: 'These are examples rather than a fixed list, and this is the one category where the list is genuinely open. If you can describe what the packaging has to hold, how it is filled and where it is sold, that is usually enough to start.',
  },

  /* ------------------------------------------------ §3 What buyers need ---- */
  {
    type: 'reviewGrid',
    /** 〔added〕 tone. */
    tone: 'ivory',
    eyebrow: 'WHAT BUYERS USUALLY NEED',
    /** 〔added〕 heading and lead. */
    title: 'Replacing something, or starting from nothing.',
    description:
      'Most packaging requests are one of these two. Replacing existing packaging is a comparison exercise; packaging for a product that does not exist yet is a design exercise, and they take different amounts of time.',
    /** The brief's seven needs, in its order. The sentences are 〔added〕. */
    items: [
      {
        title: 'Existing packaging replacement',
        description:
          'You already buy packaging and want alternatives — on price, on material, or because the current supply is not holding up.',
      },
      {
        title: 'Custom dimensions',
        description:
          'Nothing available fits. The packaging has to be built around the product, which usually means a new die and a minimum quantity.',
      },
      {
        title: 'Printed packaging',
        description:
          'The structure is settled and the printing is what has to be specified: artwork, colours, coverage and finish.',
      },
      {
        title: 'Branded packaging',
        description:
          'The packaging has to carry your brand and look like it — which brings material, print quality and finishing into the decision together.',
      },
      {
        title: 'Small production runs',
        description:
          'A first order, a limited line or a seasonal item. Small runs are possible for some packaging types, and the cost per unit is where that shows.',
      },
      {
        title: 'Bulk packaging orders',
        description:
          'High volumes, where the unit cost, the carton sizes and the delivery schedule matter as much as the print.',
      },
      {
        title: 'Packaging for new products',
        description:
          'The product is still being developed and the packaging has to be settled alongside it, not after it.',
      },
    ],
    note: 'A sample of the packaging you use now saves more time than any description of it — it carries the material, the thickness and the structure on its own.',
  },

  /* --------------------------------------------- §4 How we approach it ----- */
  {
    type: 'sequence',
    /** 〔added〕 tone. */
    tone: 'white',
    eyebrow: 'HOW WE APPROACH THIS CATEGORY',
    /** 〔added〕 heading and lead. */
    title: 'Treat the packaging as a specification, not as a shopping item.',
    description:
      'Two quotes for "the same box" can be a long way apart, and it is almost never because one supplier is cheaper. It is because the box, the print or the quantity was different. So the specification is written down first, in the order that decides cost.',
    /**
     * Authored — this category's brief gives no approach section. The stages
     * follow the order in which the cost of packaging is actually decided
     * (structure → material → print → quantity → sample), which is also the
     * order the brief's own §6 list of considerations is written in.
     */
    steps: [
      {
        label: 'Reading the requirement as a specification',
        description:
          'What the packaging holds, how it is filled, how it is closed, how it ships and where it is displayed. Packaging problems usually trace back to one of those five never being stated.',
      },
      {
        label: 'Choosing the material and the structure',
        description:
          'Board weight, layers, film or paper, and whether the pack is folded, glued or formed. The structure decides the protection and the tooling at the same time.',
      },
      {
        label: 'Settling printing and finishing',
        description:
          'Colour, artwork coverage and any finishing — lamination, foil, embossing. Each addition is a separate process and is quoted separately, which is why "printed" is not one cost.',
      },
      {
        label: 'Matching quantity to setup cost',
        description:
          'Plates, cutting dies and machine setup are one-off costs spread across the run. That is why the unit price falls as the quantity rises, and why a small run is expensive per unit rather than badly priced.',
      },
      {
        label: 'Confirming a sample before the run',
        description:
          'A physical sample or printed dummy, so the structure, the material and the print are agreed before the full quantity goes into production.',
      },
      {
        label: 'Managing production and delivery',
        description:
          'The order itself, the check on the finished packaging, and whether it ships to your address or to the factory that will fill it.',
      },
    ],
  },

  /* ------------------------------------------ §5 What we can help with ------ */
  helpSection,

  /* ------------------------------------------- §6 Sourcing considerations -- */
  {
    type: 'checkList',
    /** 〔added〕 tone. */
    tone: 'white',
    eyebrow: 'SOURCING CONSIDERATIONS',
    /** 〔added〕 heading and lead. */
    title: 'The five things a packaging quotation is built from.',
    description:
      'This list is shorter in spirit than it looks. Ten items, but five of them — material, dimensions, printing, finishing and quantity — are the ones that move the price, and the other five are what makes the packaging fit for use.',
    /** The brief's ten considerations, in its order. */
    items: [
      'Material',
      'Dimensions',
      'Thickness',
      'Printing',
      'Color',
      'Finishing',
      'Quantity',
      'Packing method',
      'Shipping volume',
      'Product protection',
    ],
    /**
     * 〔added〕, and written because the brief asks for exactly this explanation
     * (§7). No rate, no percentage and no saving is claimed — what is stated is
     * the mechanism, which is what makes the quotations comparable.
     */
    note: 'Packaging quotations can vary significantly with material, size, printing, finishing and quantity — and quantity is usually the largest single factor, because plates, dies and setup are one-off costs that are spread across the whole run.',
  },

  /* --------------------------------------------------- §7 the process ------- */
  processSection,

  /* ----------------------------------------------- §8 related services ----- */
  relatedServicesSection,

  /* --------------------------------------------- §9 who this works for ----- */
  audienceSection,

  /* --------------------------------------------------- §16 explore more --- */
  exploreMoreSection,

  /* ------------------------------------------------------ §10 the FAQ ------ */
  {
    type: 'faq',
    eyebrow: 'FAQ',
    /** 〔added〕 heading. */
    title: 'Questions about sourcing packaging.',
    /** The brief's five questions, with 〔added〕 answers. */
    items: [
      {
        question: 'Can you source custom packaging?',
        answer:
          'Yes — in this category most requests are custom. Custom packaging usually starts from dimensions, material and the print, and it normally means a tooling cost and a minimum quantity. Describing what the packaging has to hold and how it is filled is enough to begin.',
        link: { label: 'Product Sourcing', href: '/services/product-sourcing' },
      },
      {
        question: 'Can I send you a sample or design?',
        answer:
          'Yes. A sample of the packaging you use now is the most useful thing you can send, because it carries the material, the thickness and the structure without anyone having to describe them. Artwork and design files can be passed to a supplier to quote against; a print-ready file is normally needed before plates are made.',
      },
      {
        question: 'Can you help with low quantities?',
        answer:
          'For some packaging types, yes; for others the setup cost makes it impractical. Plates, dies and machine setup are one-off costs, so a small run carries the same setup across fewer units. Where a small run is possible we will say so, and where it is not we will say that instead.',
      },
      {
        question: 'Can you compare different materials?',
        answer:
          'Yes, and it is usually worth doing. The same box in a different board weight, or a pouch in a different film, can differ in cost, in protection and in how well it prints. We put the options side by side on the same dimensions and the same quantity.',
      },
      {
        question: 'Can packaging be shipped together with my products?',
        answer:
          'It depends on where the packaging is made and where it is filled. When the packaging comes from a different supplier it usually has to arrive first, and the two shipments can be coordinated if that suits the project better than sending the packaging on separately.',
        link: { label: 'Shipping from China', href: '/services/shipping-from-china' },
      },
    ],
  },
];

/* ===========================================================================
   §15 — FINAL CTA  (shared, verbatim)
   =========================================================================== */

export const finalCta = standardFinalCta;

/* ===========================================================================
   THE PAGE OBJECT
   =========================================================================== */

export const packaging = { slug, meta, hero, sections, finalCta };
