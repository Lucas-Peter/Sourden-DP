/**
 * SOURDEN — /how-it-works  (How China Sourcing Works)
 * ---------------------------------------------------------------------------
 * Every editable word on the How It Works page, from the How It Works brief
 * (16 numbered sections). This page is the DEEP version of the process the
 * homepage introduces in five lines and `/services` summarises in one rail:
 * it answers what happens after a request, what Sourden needs, how suppliers
 * are researched and compared, and what the customer has to do at each stage.
 *
 * ── THE PAGE FILE DECLARES NO SERVICE NAME AND NO SERVICE ROUTE ─────────────
 * All five service names and hrefs come from `services.js` through
 * `service-links.js`. That is not tidiness — it is the fix for a real drift:
 * this brief was written against the service's OLD name, and it writes
 * "Purchasing & Order Management" in two places (§06's CTA and §10's second
 * scenario). The site publishes that service as "Purchasing Management"
 * (`services.js`, renamed), and the business confirmed on 2026-09-23 that the
 * site's wording is the one to use site-wide. So this file builds those two
 * strings by DERIVING them:
 *
 *   §06 CTA     "Learn About Purchasing Management"     (not the brief's text)
 *   §10 item 2  "…Supplier Verification or Purchasing Management."
 *
 * Typing the brief's hyphenated name would publish a service that does not
 * exist on the site and link it under a name the registry does not use. Every
 * other service reference — §02's rail links, §04/§05/§07/§08's CTAs, §14's
 * five entries — is derived the same way, so the next rename is one edit in
 * `services.js` and nothing here.
 *
 * ── THE RAIL SAYS "FIND"; THE OTHER PAGES SAY "RESEARCH" ────────────────────
 * §02's five stages are the brief's own five words, and its second is FIND.
 * `/services` and `/industries` both render RESEARCH in the same rail position,
 * because their own briefs say so. This is not drift — it is the third
 * vocabulary the site already tolerates (the registry display name, the chain
 * label, and per-page rail verbs; see `service-links.js`). This page's rail is
 * asserted against THIS page's five words, so changing one page's verb cannot
 * silently change another's.
 *
 * ── WHAT THE BRIEF SUPPLIED, AND WHAT IT DID NOT ───────────────────────────
 * Every eyebrow, heading, paragraph, list item, comparison sentence and FAQ
 * answer below is the brief's own wording, verbatim — including its straight
 * ASCII apostrophes, which is the convention every other page file follows.
 * The strings this file authors are marked 〔added〕: the section `tone` values,
 * the hero image caption, the `Example Workflow` marker, and the two derived
 * service labels above.
 *
 * ── CLAIMS RULE (brief §"Content Principles" + §"IMPORTANT DISTINCTION") ────
 * The brief names the phrases this page must never contain: guaranteed
 * supplier, guaranteed quality, guaranteed delivery, guaranteed customs
 * clearance, lowest price, cheapest sourcing, zero risk, 100% defect-free,
 * "every supplier is verified", and "every order follows exactly the same
 * process". It also forbids presenting Sourden as a marketplace or an
 * automated sourcing platform — no supplier database, no search engine, no
 * product catalogue, no cart, no checkout, no account, no automated supplier
 * matching, no fake real-time supplier data.
 *
 * The copy below therefore keeps the brief's qualified register ("can", "may",
 * "depending on", "where required", "where appropriate"), states the two
 * honest limits the brief attaches to verification and inspection, and never
 * promises a response time — the brief is explicit that no service level may
 * be invented.
 *
 * ── TONE PER SECTION ───────────────────────────────────────────────────────
 * Hero ivory, the process rail ink, the FAQ ivory, the closing band ink;
 * everything between them alternates, so no two adjacent sections share a
 * ground. Each section states its own `tone` so the rhythm is readable in the
 * data rather than only in the stylesheet.
 * ---------------------------------------------------------------------------
 */

import { serviceForSlug, serviceLink } from './service-links.js';
import { services } from './services.js';
import { primaryCta } from './site.js';

export const slug = 'how-it-works';

/* ===========================================================================
   SEO — brief §SEO. Title, meta description and H1 are mandated verbatim.
   =========================================================================== */

export const meta = {
  title: 'How China Sourcing Works | SOURDEN',
  description:
    "See how SOURDEN's China sourcing process works, from your initial request and supplier research to purchasing, quality control and international shipping.",
};

/**
 * The trail below "Home" — `<Breadcrumbs>` and `breadcrumbItems()` prepend the
 * rest. `/how-it-works` is a top-level page, so this is one crumb deep.
 * `href` is omitted on the last item: it is the page being read.
 */
export const breadcrumbs = [{ label: 'How It Works' }];

/* ===========================================================================
   DERIVED SERVICE LABELS
   ---------------------------------------------------------------------------
   Two small helpers, so no service name and no service route is typed below.
   =========================================================================== */

/** The registry display name for a slug. @param {string} slug */
const serviceName = (slug) => serviceLink(slug).label;

/**
 * "Learn About <service>" — the brief's CTA shape for §04–§08.
 *
 * The prefix is the brief's; the service name is the registry's. That split is
 * what keeps this page from publishing "Purchasing & Order Management".
 * @param {string} slug
 */
const learnAbout = (slug) => {
  const { href } = serviceLink(slug);
  return { label: `Learn About ${serviceName(slug)}`, href };
};

/**
 * `serviceRow()` and `relatedServices` are declared after `serviceBlurbs`
 * below, not here — see the note at their declaration for why the order is
 * load-bearing.
 */

/* ===========================================================================
   01 — HERO
   =========================================================================== */

export const hero = {
  eyebrow: 'HOW IT WORKS',
  title: 'From your first request to final shipment.',
  description:
    'Sourden coordinates the sourcing process from supplier research and comparison to purchasing, quality control and shipping — with one point of contact throughout.',
  /** The site-wide primary action, declared once in `site.js` (spec §34). */
  primaryCta,
  /** The brief's hero secondary. Not `secondaryCta` from `service-links.js`
   *  ("View All Services") — this page's brief names "Explore Our Services",
   *  and the registry's secondary is already the closing CTA of §14. */
  secondaryCta: { label: 'Explore Our Services', href: '/services' },
  /** Image direction (brief §01): a documentary sourcing image — samples being
   *  reviewed, production, inspection, packaging, warehouse preparation,
   *  supplier communication or shipment preparation — with "one strong image"
   *  preferred over a generic collage. Art direction and crop note live with
   *  the slot in `media.js`. */
  image: {
    key: 'howItWorksHero',
    /** 〔added〕 — the brief specifies the image but not its caption. It names
     *  the page's own subject rather than describing the photograph, so it
     *  stays true when the real image replaces the placeholder. */
    caption: 'A SOURCING PROJECT IN PROGRESS',
  },
};

/* ===========================================================================
   14 — OUR SERVICES
   ---------------------------------------------------------------------------
   The five sentences the brief writes for §14. Keyed by slug so the registry
   supplies number, name and route and this map supplies only the copy — a
   service renamed in `services.js` therefore cannot leave a stale name here.

   Four of the five are the same sentences `/industries` uses. That is the
   brief, not a copy-paste: both pages describe the same five services, and
   the reader who visits both should read the same one-line summary twice
   rather than two different summaries of one service.
   =========================================================================== */

const serviceBlurbs = {
  'product-sourcing': 'Research products and suppliers based on your requirements.',
  'supplier-verification': 'Evaluate supplier fit before moving forward.',
  'purchasing-order-management':
    'Coordinate purchasing, supplier communication and production progress.',
  'quality-control': 'Check agreed product requirements before shipment.',
  'shipping-from-china': 'Coordinate the movement of goods from China to their destination.',
};

/** @param {string} slug */
function requireBlurb(slug) {
  const blurb = serviceBlurbs[slug];
  if (!blurb) {
    throw new Error(
      `[how-it-works-page.js] No §14 sentence for the service "${slug}". ` +
        `The services list is merged from services.js — add its sentence here.`
    );
  }
  return blurb;
}

/* ---------------------------------------------------------------------------
   THE FIVE §14 ROWS — AND WHY THEY ARE DECLARED HERE, NOT AT THE TOP
   ---------------------------------------------------------------------------
   Number, name and route come from `services.js`; only the sentence comes from
   `serviceBlurbs` above. Exported so the page's JSON-LD declares each service
   from the same record §14 renders, which is what stops a structured-data
   claim describing a service the page does not show.

   The position is load-bearing. `serviceBlurbs` is a `const`, so it is in the
   temporal dead zone until its declaration runs; a `relatedServices` built
   near the top of the file would call `requireBlurb()` → read
   `serviceBlurbs` → `ReferenceError: Cannot access 'serviceBlurbs' before
   initialization`, reported from a line that looks fine. Wrapping the read in
   a hoisted `function` does not help — the TDZ is on the `const`, not on the
   function. So the derived list lives below everything it derives from.

   @param {string} slug
   --------------------------------------------------------------------------- */
const serviceRow = (slug) => {
  const service = serviceForSlug(slug);
  return {
    number: service.number,
    title: service.title,
    href: service.href,
    description: requireBlurb(slug),
  };
};

/** All five, in registry order — the order the process runs in. */
export const relatedServices = services.map((service) => serviceRow(service.slug));

/* ===========================================================================
   SECTIONS — in render order (brief §02 … §14)
   ---------------------------------------------------------------------------
   `type` selects the device; `tone` is the section ground. The hero (§01), the
   FAQ (§15) and the closing CTA (§16) are not in this list — they are fixed
   devices with their own places on the page, exactly as on the service pages.
   =========================================================================== */

export const sections = [
  /* ---------------------------------------------------------------- 02 --- */
  {
    type: 'process',
    /** The rail always owns the ink band, on every page that renders it. */
    tone: 'ink',
    eyebrow: 'THE SOURCING JOURNEY',
    title: 'One process. Five connected stages.',
    description:
      'Every sourcing project is different, but the underlying process usually follows the same basic path.',
    /**
     * The five stages, in the brief's order, with numbers derived from array
     * order (01…05) — never typed.
     *
     * Each stage carries its own destinations, which is why the rail had to
     * learn a per-step `links` list: stage 04 covers two services (purchasing
     * AND quality control), so it cannot be a single wrapping link the way
     * `/services`' rail is. Stage 01 goes to the request form, which is what
     * "clickable where appropriate" means here.
     */
    steps: [
      {
        label: 'Tell Us What You Need',
        description:
          'Share the product, specifications, quantity, destination and any reference materials you have.',
        links: [{ label: primaryCta.label, href: primaryCta.href }],
      },
      {
        label: 'Find',
        description: 'We research products and suppliers that match your requirements.',
        links: [serviceLink('product-sourcing')],
      },
      {
        label: 'Verify & Compare',
        description: 'We review relevant supplier information and compare practical sourcing options.',
        links: [serviceLink('supplier-verification')],
      },
      {
        label: 'Purchase & Check',
        description:
          'Once you decide how to proceed, we coordinate purchasing and can arrange quality control where required.',
        links: [
          serviceLink('purchasing-order-management'),
          serviceLink('quality-control'),
        ],
      },
      {
        label: 'Ship',
        description:
          'We coordinate shipping from China and connect the order with an appropriate logistics solution.',
        links: [serviceLink('shipping-from-china')],
      },
    ],
  },

  /* ---------------------------------------------------------------- 03 --- */
  {
    type: 'checkList',
    /** 〔added〕 tone. */
    tone: 'ivory',
    eyebrow: '01 — START WITH A REQUEST',
    title: "You don't need to know the supplier.",
    description:
      "Start with the product and the information you already have. You don't need to know the supplier, the exact factory or the complete sourcing solution before contacting us.",
    /** The brief's fourteen items, verbatim. Three of them carry a qualifier
     *  ("if available", "if known") — they are part of the item, not a caveat
     *  about the section, so they stay inside the list. */
    items: [
      'Product name or description',
      'Product photos',
      'Reference links',
      'Product specifications',
      'Materials',
      'Dimensions',
      'Color',
      'Quantity',
      'Target price, if available',
      'Customization requirements',
      'Packaging requirements',
      'Destination country',
      'Destination city or postal code',
      'Expected order frequency, if known',
    ],
    note: "You don't need to have every detail ready. If some information is missing, we'll clarify the requirements during the sourcing process.",
    foot: primaryCta,
  },

  /* ---------------------------------------------------------------- 04 --- */
  {
    type: 'checkList',
    /** 〔added〕 tone. */
    tone: 'white',
    eyebrow: '02 — PRODUCT SOURCING',
    title: 'We research suppliers based on the actual requirement.',
    description:
      "Once we understand what you're looking for, we research relevant products and suppliers rather than simply sending a list of generic supplier links.",
    /** The brief's nine research inputs, verbatim. */
    items: [
      'Product specifications',
      'Target pricing',
      'Quantity',
      'MOQ',
      'Customization',
      'Production capability',
      'Lead time',
      'Product category',
      'Destination requirements',
    ],
    note: 'The goal is not to find the largest number of suppliers. It is to identify sourcing options that are relevant enough to evaluate.',
    foot: learnAbout('product-sourcing'),
  },

  /* ---------------------------------------------------------------- 05 --- */
  {
    type: 'reviewGrid',
    /** 〔added〕 tone. */
    tone: 'ivory',
    eyebrow: '03 — SUPPLIER VERIFICATION',
    title: 'Compare the options before you commit.',
    description:
      'A supplier quotation is only one part of the decision. We help review relevant supplier information so you can better understand how the available options differ.',
    /** The brief's six comparison factors. Each is written as a question on
     *  purpose — it is what the reader should be asking, not what Sourden
     *  certifies. */
    items: [
      {
        title: 'Product Fit',
        description: 'Does the supplier offer the product and specifications you need?',
      },
      {
        title: 'Pricing',
        description:
          'How does the quotation compare based on the required quantity and specifications?',
      },
      {
        title: 'MOQ',
        description: 'What minimum order quantity does the supplier require?',
      },
      {
        title: 'Capability',
        description:
          'Can the supplier support the product, customization and expected order requirements?',
      },
      {
        title: 'Lead Time',
        description: 'What production and preparation timeline has the supplier indicated?',
      },
      {
        title: 'Communication',
        description: 'How clearly does the supplier respond to product and order requirements?',
      },
    ],
    /**
     * The section's own limit, and the most important sentence in it: the
     * brief supplies it explicitly, and it is what stops "verification" from
     * reading as a warranty. `ServiceReviewGrid`'s `note` is exactly this
     * shape — a caveat about the section that is not another item.
     */
    note: 'Supplier verification helps reduce uncertainty, but it cannot eliminate every sourcing risk.',
    foot: learnAbout('supplier-verification'),
  },

  /* ---------------------------------------------------------------- 06 --- */
  {
    type: 'stages',
    /** 〔added〕 tone. */
    tone: 'white',
    eyebrow: '04 — PURCHASING',
    title: "Once you've chosen an option, we coordinate the order.",
    description:
      'After you decide which supplier and product option you want to move forward with, Sourden can coordinate the purchasing process and supplier communication.',
    /** Four stages, unnumbered — the brief writes them as bare verbs, and they
     *  are the only part of this page that is a division of labour rather than
     *  a sequence with a first step. */
    items: [
      {
        label: 'Confirm',
        description: 'Confirm product specifications, quantity, pricing and other order details.',
      },
      {
        label: 'Purchase',
        description: 'Coordinate the purchase with the supplier.',
      },
      {
        label: 'Follow Up',
        description: 'Communicate with the supplier and follow production progress.',
      },
      {
        label: 'Prepare',
        description: 'Confirm packaging, order details and pre-shipment requirements.',
      },
    ],
    note: 'You remain informed about important order details while Sourden handles the supplier-side coordination.',
    /** The brief writes this CTA as "Learn About Purchasing & Order
     *  Management"; the registry name is used instead — see the file header. */
    foot: learnAbout('purchasing-order-management'),
  },

  /* ---------------------------------------------------------------- 07 --- */
  {
    type: 'checkList',
    /** 〔added〕 tone. */
    tone: 'ivory',
    eyebrow: '05 — CHECK BEFORE SHIPPING',
    title: 'Check the order before it leaves China.',
    description:
      'Depending on the product and project, quality control can be arranged before shipment to check agreed requirements and identify visible issues.',
    /** The brief's nine possible checks, verbatim. */
    items: [
      'Quantity',
      'Appearance',
      'Specifications',
      'Dimensions',
      'Materials',
      'Color',
      'Packaging',
      'Labels',
      'Visible defects',
    ],
    /**
     * The second load-bearing caveat on this page. It has two jobs: the
     * inspection criteria are agreed per project (so quality control is not a
     * standing service level), and an inspection is not a guarantee (so
     * "checked before shipping" cannot be read as "100% defect-free" — one of
     * the brief's banned phrases).
     */
    note: 'The inspection criteria should be agreed according to the product and project. Quality control can identify issues within the agreed inspection scope, but it cannot guarantee that every possible problem will be detected.',
    foot: learnAbout('quality-control'),
  },

  /* ---------------------------------------------------------------- 08 --- */
  {
    type: 'split',
    /** 〔added〕 tone. */
    tone: 'white',
    eyebrow: '06 — SHIPPING FROM CHINA',
    title: 'Move the goods from China to their destination.',
    description:
      'Once the order is ready, we can coordinate shipping from China and connect the sourcing process with an appropriate logistics solution.',
    /**
     * Two lists read against each other: what the options are, and what
     * decides between them. `ServiceSplit` exists for exactly this shape (its
     * other consumer on this page is §09), and the columns are deliberately
     * symmetrical — neither is the recommended one, because the brief's whole
     * point is that the right method depends on the shipment.
     */
    columns: [
      {
        label: 'Possible shipping methods',
        items: ['Courier / Express', 'Air Freight', 'Sea Freight', 'LCL', 'FCL'],
      },
      {
        label: 'Factors that may affect the shipping solution',
        items: [
          'Weight',
          'Volume',
          'Product type',
          'Packaging',
          'Origin',
          'Destination',
          'Shipping method',
          'Delivery requirements',
          'Timing',
        ],
      },
    ],
    note: 'The appropriate shipping method depends on the actual shipment and destination. There is no single option that is best for every order.',
    links: [learnAbout('shipping-from-china')],
  },

  /* ---------------------------------------------------------------- 09 --- */
  {
    type: 'split',
    /** 〔added〕 tone. */
    tone: 'ivory',
    eyebrow: 'YOUR ROLE',
    title: 'You make the key decisions. We handle the coordination.',
    /**
     * No description: the brief gives the heading and the two lists, and the
     * heading is already the sentence that explains the split.
     *
     * This section is the reason the page's two-column device appears twice.
     * The brief is explicit about what it is for — "Sourden should not appear
     * to take control away from the customer" — so the nine things the
     * customer provides sit beside the eight things Sourden coordinates, at
     * equal weight, with the approvals on the customer's side rather than
     * buried in a sentence.
     */
    columns: [
      {
        label: 'You provide',
        items: [
          'Product requirements',
          'Quantity',
          'Target pricing, if available',
          'Destination',
          'Reference images or links',
          'Customization requirements',
          'Business requirements',
          'Approval of supplier/product options',
          'Approval of quotations and order details',
        ],
      },
      {
        label: 'Sourden coordinates',
        items: [
          'Supplier research',
          'Supplier communication',
          'Quotations',
          'Supplier comparison',
          'Purchasing',
          'Production follow-up',
          'Quality control coordination',
          'Shipping coordination',
        ],
      },
    ],
    note: 'The goal is to make sourcing easier to manage without taking the important purchasing decisions away from you.',
  },

  /* ---------------------------------------------------------------- 10 --- */
  {
    type: 'linkRows',
    /** 〔added〕 tone. */
    tone: 'white',
    eyebrow: 'FLEXIBLE SUPPORT',
    title: 'Start where you need help.',
    description:
      'Not every project needs the full sourcing process. You can use Sourden for one specific stage or connect several services together.',
    /**
     * Three entry points. The brief's governing instruction for this section is
     * that the full five-stage process must NOT read as mandatory, and the
     * shape of the data is what enforces it: each row is a reader's situation,
     * not a step, and the two rows that already have a supplier offer two and
     * three destinations rather than one — which is why this device takes a
     * `links` array per row instead of making the whole row a single link.
     *
     * Rows 1 and 2 name services, so their sentences are derived from the
     * registry (see the file header). Row 3 names activities, not services
     * ("purchasing, quality control and shipping"), so it is the brief's own
     * sentence and stays verbatim.
     */
    items: [
      {
        title: 'I need to find a supplier',
        description: `Start with ${serviceName('product-sourcing')}.`,
        links: [serviceLink('product-sourcing')],
      },
      {
        title: 'I already have a supplier',
        description: `Start with ${serviceName('supplier-verification')} or ${serviceName('purchasing-order-management')}.`,
        links: [
          serviceLink('supplier-verification'),
          serviceLink('purchasing-order-management'),
        ],
      },
      {
        title: 'I already have the product and supplier',
        description: 'We can help with purchasing, quality control and shipping.',
        links: [
          serviceLink('purchasing-order-management'),
          serviceLink('quality-control'),
          serviceLink('shipping-from-china'),
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- 11 --- */
  {
    type: 'stages',
    /** 〔added〕 tone. */
    tone: 'ivory',
    eyebrow: 'AFTER YOU SUBMIT',
    title: 'What happens next?',
    /**
     * The same device §06 uses, with `numbered` — the difference between the
     * two lists is a data shape, not a layout. This one is numbered because it
     * IS a sequence with a first step (and the brief numbers it); §06's four
     * are concurrent parts of one stage.
     *
     * No description and no CTA: the brief gives neither, and this section's
     * job is to end on the honest note below rather than on an action — the
     * reader who reaches it has usually just asked "what happens after I
     * submit".
     */
    numbered: true,
    items: [
      {
        label: 'Request Review',
        description: 'We review the information you provide and identify what needs to be clarified.',
      },
      {
        label: 'Requirement Confirmation',
        description:
          "If necessary, we'll clarify product specifications, quantity, destination or other relevant details.",
      },
      {
        label: 'Sourcing',
        description:
          'We begin researching relevant suppliers and sourcing options based on the confirmed requirements.',
      },
      {
        label: 'Next Steps',
        description:
          "We'll communicate the available options and discuss the appropriate next step with you.",
      },
    ],
    /**
     * The brief's own note, and the reason this section has no response-time
     * promise anywhere in it: "Do not promise a fixed response time unless the
     * business has established one." It has not, so the note says what is
     * actually true — that timing depends on the project.
     */
    note: 'The exact process and timing depend on the complexity of the product and sourcing requirements.',
  },

  /* ---------------------------------------------------------------- 12 --- */
  {
    type: 'growth',
    /** 〔added〕 tone. */
    tone: 'white',
    eyebrow: 'SOURCE AT YOUR SCALE',
    title: 'Your sourcing process can grow with your business.',
    paragraphs: [
      'You may start with a small order, test the market, place repeat orders and gradually increase your sourcing volume. The supplier requirements, quality-control needs, purchasing process and shipping arrangements can change as your business grows.',
    ],
    /** The brief's growth path, unnumbered — five business stages over months,
     *  not five steps of a procedure. */
    progression: ['First Order', 'Test', 'Repeat', 'Grow', 'Scale'],
    /**
     * The brief puts its MOQ statement AFTER the path ("Add:"), where
     * `/industries` §08 puts its equivalent BEFORE. That ordering is why this
     * page has its own growth device rather than reusing that one: the two
     * sections do place the same kind of sentence differently.
     *
     * The statement is also the page's third load-bearing qualifier. It says
     * Sourden imposes no fixed MOQ of its own — which is a different claim
     * from "small orders are always possible", and the second sentence keeps
     * that distinction explicit.
     */
    emphasis:
      'Sourden does not impose its own fixed minimum order quantity. The practical MOQ depends on the product and supplier.',
    foot: { label: 'Explore What We Source', href: '/industries' },
  },

  /* ---------------------------------------------------------------- 13 --- */
  {
    type: 'example',
    /** 〔added〕 tone. */
    tone: 'ivory',
    eyebrow: 'EXAMPLE',
    title: 'What a typical sourcing project can look like.',
    /**
     * The brief is emphatic: "Do NOT use a fake customer case study… present
     * this explicitly as a hypothetical process example." Two things make that
     * true rather than merely intended:
     *
     *   · the marker below says EXAMPLE WORKFLOW, not a client name;
     *   · the scenario is written in the SECOND PERSON ("You are a small
     *     retailer…"), so it describes the reader's own project rather than
     *     reporting someone else's outcome.
     *
     * Nothing here is a result, a figure, a saving or a customer. The closing
     * line — the brief's — states that the process varies, so the six stages
     * cannot be read as a fixed template either.
     */
    marker: 'EXAMPLE WORKFLOW',
    scenario: 'You are a small retailer looking to source a new home product from China.',
    steps: [
      { label: 'Start', description: 'You provide a product photo, approximate quantity, target price and destination.' },
      { label: 'Research', description: 'Sourden researches relevant suppliers and product options.' },
      { label: 'Compare', description: 'Supplier quotations, MOQ, product specifications and other relevant factors are reviewed.' },
      { label: 'Purchase', description: 'You select the option you want to proceed with and the order is coordinated with the supplier.' },
      { label: 'Check', description: 'A pre-shipment quality check is arranged if required.' },
      { label: 'Ship', description: 'The goods are prepared and the appropriate shipping solution is coordinated.' },
    ],
    note: 'The exact process will vary depending on the product, order and destination.',
  },

  /* ---------------------------------------------------------------- 14 --- */
  {
    type: 'linkRows',
    /** 〔added〕 tone. */
    tone: 'white',
    eyebrow: 'THE SERVICES BEHIND THE PROCESS',
    title: 'One partner across the sourcing process.',
    /**
     * The same device §10 uses, with `numbered` and exactly one destination
     * per row — which is the difference between the two lists: §10's rows are
     * reader situations that can lead to two or three services, these are the
     * five services themselves, in registry order, numbered 01–05.
     *
     * Number, name and route come from `services.js`; only the sentence comes
     * from the map above. The link label is the service's own name, so the row
     * reads "01  Product Sourcing  →" and the visitor meets the same five names
     * they will meet in the rail, the footer and the service pages.
     */
    items: relatedServices,
    /**
     * 〔fix〕 `numbered` was missing here, and its absence was not cosmetic.
     *
     * `item.number` is what renders the `<span class="hi-rows__num">`, but the
     * LIST-level flag is what reserves the column for it. Without the flag the
     * section renders `hi-rows` instead of `hi-rows--numbered`, so the desktop
     * grid stays `5fr 7fr` and both `.hi-rows__num` and `.hi-rows__title` are
     * placed at `grid-column: 1; grid-row: 1` — the number and the service name
     * land in the same cell and paint over each other ("01" across the "P" of
     * "Product Sourcing"). Measured at 1440px: both rects 497px wide at x=112,
     * tops 3px apart.
     *
     * That is the flag's whole purpose — the component's header explains that
     * `numbered` belongs to the list so the grid template never depends on
     * which items happen to carry a number. §11 got it; §14 was written after
     * and did not. See `/industries`, whose own rows keep the two in step.
     */
    numbered: true,
    foot: { label: 'View All Services', href: '/services' },
  },
];

/* ===========================================================================
   15 — FAQ
   ---------------------------------------------------------------------------
   Nine questions, each with the brief's own answer. Three carry a link to the
   service that answers the question properly; the brief specifies which three.
   No answer states a timeline: see the note above §11.
   =========================================================================== */

export const faqIntro = {
  eyebrow: 'FAQ',
  title: 'Questions about the sourcing process.',
};

export const faqItems = [
  {
    question: 'How do I start?',
    answer:
      'Submit a sourcing request with the product information, approximate quantity and destination. Include any photos, links or specifications you already have.',
    /** The brief attaches this link to the answer. */
    link: { label: 'Start a Sourcing Request', href: primaryCta.href },
  },
  {
    question: 'Do I need to know exactly what I want before contacting you?',
    answer:
      "No. You should provide as much information as you have, but you don't need to know the supplier or have every sourcing detail figured out before starting.",
  },
  {
    question: 'What happens after I submit a sourcing request?',
    answer:
      'We review your request, clarify any important details and then determine the appropriate sourcing approach. Depending on the project, this may involve supplier research, comparison, verification or another service.',
  },
  {
    question: 'Do I have to use all five services?',
    answer:
      "No. Sourden's services can be used independently or combined depending on your needs.",
  },
  {
    question: 'Can you work with a supplier I already found?',
    answer:
      'Yes. If you already have a supplier, you can start with supplier verification, purchasing or another service that fits your requirements.',
  },
  {
    question: 'Do you handle quality control?',
    answer:
      'Yes. Quality control can be arranged before shipment based on the agreed inspection requirements.',
    link: serviceLink('quality-control'),
  },
  {
    question: 'Can you handle shipping?',
    answer:
      'Yes. We can coordinate shipping from China and help connect the order with an appropriate logistics solution.',
    link: serviceLink('shipping-from-china'),
  },
  {
    question: 'Do you have a minimum order quantity?',
    answer:
      'Sourden does not impose its own fixed minimum order quantity. However, the practical MOQ depends on the supplier and product.',
  },
  {
    question: 'How long does sourcing take?',
    answer:
      'There is no single timeline for every project. Timing depends on factors such as product complexity, supplier availability, customization, quantity and the amount of verification required.',
  },
];

/* ===========================================================================
   16 — FINAL CTA
   =========================================================================== */

export const finalCta = {
  eyebrow: 'START WITH A REQUEST',
  title: 'Ready to start sourcing?',
  description:
    "Tell us what you're looking for, how much you need and where it needs to go. We'll take it from there.",
  cta: primaryCta,
  /**
   * The brief's §16 names a secondary action too ("Explore Our Services" →
   * `/services`). `<FinalCTA>` renders exactly ONE control by design (site spec
   * §19 forbids competing buttons in the closing band), so the brief's
   * secondary lives in the hero — where the same label and the same
   * destination are the brief's §01 secondary — and again as §14's closing
   * link. Nothing is lost and no second button was invented.
   */
};

/* ===========================================================================
   THE PAGE OBJECT
   =========================================================================== */

export const howItWorksPage = {
  slug,
  meta,
  breadcrumbs,
  hero,
  sections,
  faqIntro,
  faqItems,
  finalCta,
};
