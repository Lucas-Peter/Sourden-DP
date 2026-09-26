/**
 * SOURDEN — IMAGE MANIFEST
 * ---------------------------------------------------------------------------
 * SINGLE SOURCE OF TRUTH for every image slot on the site.
 *
 * Two consumers read this file:
 *   1. `scripts/generate-placeholders.mjs` — writes the placeholder artwork
 *      into `public/images/` using `file`, `width`, `height` and `label`.
 *   2. Page components — read `src`, `alt`, `width`, `height` so markup never
 *      hard-codes a path.
 *
 * WHY PLACEHOLDERS
 * The brief forbids fabricating credibility (spec §0, §7, §17, §39, §43).
 * Real documentary photography does not exist yet, so every slot ships as an
 * explicitly labelled placeholder rather than generic stock or AI factory art.
 *
 * CROP SAFETY
 * Images render with `object-fit: cover`, so the frame crops the source
 * symmetrically around its centre. A 4:3 image shown in a 4:5 frame keeps only
 * ~60% of its width. Placeholder artwork therefore carries its label in the
 * CENTRED 54% band (see SAFE_FRACTION in scripts/generate-placeholders.mjs) —
 * a corner marker gets clipped. Apply the same rule to the real photograph:
 * nothing important outside the middle 60%.
 *
 * HOW TO GO LIVE
 *   1. Supply a photograph at (or above) `width` × `height`.
 *   2. You may keep the file name, or use any name you like.
 *   3. Export WebP at ~75% quality (or AVIF), max ~250 KB for hero/feature
 *      slots and ~120 KB for thumbnails.
 *   4. Point `file` at the new file and delete `placeholder: true`.
 * `npm run placeholders` is never run again for that slot.
 * See IMAGES.md for the full shot-list and per-slot art direction.
 * ---------------------------------------------------------------------------
 */

export const IMAGE_DIR = '/images';

/** @typedef {'hero'|'service'|'industry'|'case-study'|'insight'|'social'} ImageRole */

export const images = {
  /* ---------------------------------------------------------------- hero -- */
  heroSourcing: {
    file: 'hero-sourcing.svg',
    width: 1600,
    height: 1200,
    ratio: '4:3',
    label: 'SOURCING IMAGE',
    alt: 'Placeholder for a documentary photograph of production or quality inspection inside a Chinese factory.',
    role: /** @type {ImageRole} */ ('hero'),
    placeholder: true,
    artDirection:
      'Preferred subjects: factory production, quality inspection, product detail, packaging, warehouse, machinery, materials, or worker hands handling products. Avoid Great Wall / flag / panda / globe / handshake / shipping-container clichés and artificially perfect AI factory scenes.',
    cropNote:
      'Shown in a 5-column frame with a fixed 520px height, so the sides are cropped — keep the subject in the middle ~70% and the outer 15% each side clear of anything that matters. The 4:3 source ratio is required, not optional.',
  },

  /* --------------------------------------------------- sourcing request -- */
  sourcingRequestHero: {
    file: 'sourcing-request-hero.svg',
    width: 1600,
    height: 1200,
    ratio: '4:3',
    label: 'SOURCING BRIEF',
    alt: 'Placeholder for a documentary photograph of product samples and reference materials being reviewed before sourcing.',
    role: /** @type {ImageRole} */ ('hero'),
    placeholder: true,
    artDirection:
      'A workbench or table with product samples, reference drawings, measuring tools or packaging being handled and compared. It must read as evidence of the sourcing process — not an office scene, not a handshake, not smiling people in suits, and none of the China clichés (Great Wall / flag / panda / container port / globe).',
    cropNote:
      'Displayed 4:3 in a single column up to ~46% of the container on desktop, and height-capped at 240px on mobile (spec §48) — so the mobile frame crops the bottom and top of the source. Keep the subject inside the middle ~70%, horizontally and vertically.',
  },

  /* ------------------------------------------------------- services page -- */
  /*
   * Six slots for `/services`: one hero plus one per service section.
   *
   * All five service slots are 4:3 and share a single treatment, because they
   * are presented as one alternating sequence — mixing ratios inside that
   * sequence would make the column widths jump from row to row. The hero is
   * 4:3 as well, matching the homepage and sourcing-request heroes.
   *
   * Spec §21 bans the usual China shorthand here (Great Wall, flag, panda,
   * generic handshake, staged corporate meeting, giant globe, AI-perfect
   * factory). Every slot must show the work the section is describing.
   */
  servicesHero: {
    file: 'services-hero.svg',
    width: 1600,
    height: 1200,
    ratio: '4:3',
    label: 'SOURCING SERVICES',
    alt: 'Placeholder for a documentary photograph of product samples and supplier documentation being reviewed.',
    role: /** @type {ImageRole} */ ('hero'),
    placeholder: true,
    artDirection:
      'Documentary sourcing imagery: product sample review, supplier or product inspection, packaging review, a manufacturing process, warehouse preparation or material inspection. It has to read as a working scene. Avoid every China cliché (Great Wall / flag / panda / globe / container-port sunsets), generic handshakes, staged corporate meetings and artificially perfect AI factory floors.',
    cropNote:
      'Shown 4:3 in the right-hand column (5 of 12 on desktop), height-capped and placed below the text on mobile. Keep the subject inside the middle 70% horizontally and vertically — `object-fit: cover` crops symmetrically from the centre.',
  },
  /* Service DETAIL page heroes — one per `/services/<slug>` page.
   *
   * Separate slots from the `service*` images above on purpose: those illustrate
   * a section of the overview page, and reusing one as the destination page's
   * hero would show the visitor the same photograph twice in a row — once on the
   * card they clicked and again on the page it opened. Hero grade (1600 wide,
   * eager-loaded) and the same 4:3 ratio as every other hero on the site.
   *
   * Spec §21 and the five-page brief's §3 both ban the China shorthand here:
   * Great Wall, national flag, panda, generic handshake, staged corporate
   * meeting, artificial map graphics, AI-perfect factory floors. Each slot must
   * show the work its own service describes. */
  serviceProductSourcingHero: {
    file: 'service-product-sourcing-hero.svg',
    width: 1600,
    height: 1200,
    ratio: '4:3',
    label: 'PRODUCT SOURCING',
    alt: 'Placeholder for a documentary photograph of product samples and reference materials being compared during supplier research.',
    role: /** @type {ImageRole} */ ('hero'),
    placeholder: true,
    artDirection:
      'Product sourcing in progress: samples laid out against reference material, specifications or drawings, several candidate products being compared, or hands examining a sample on a real work surface. Must read as evidence of the research, not a catalogue flat-lay or a studio product shot. No handshake, no meeting room, no China clichés.',
    cropNote:
      'Shown 4:3 in the right-hand column (about 5 of 12 on desktop) and height-capped below the text on mobile. `object-fit: cover` crops symmetrically from the centre, so keep the subject inside the middle 70% horizontally and vertically and leave the outer 15% each side clear of anything that matters.',
  },
  serviceSupplierVerificationHero: {
    file: 'service-supplier-verification-hero.svg',
    width: 1600,
    height: 1200,
    ratio: '4:3',
    label: 'SUPPLIER VERIFICATION',
    alt: 'Placeholder for a documentary photograph of a supplier facility walk-through or production capability review.',
    role: /** @type {ImageRole} */ ('hero'),
    placeholder: true,
    artDirection:
      'A factory or supplier facility actually being looked at: a production floor during a walk-through, a worker inspecting output, materials or components being reviewed, or specification documents worked through on site next to the goods they describe. Must read as someone assessing the supplier, not a tour. No certificate, accreditation mark or laboratory report — Sourden issues none. No handshake, no meeting room, no China clichés, no AI-perfect factory floor.',
    cropNote:
      'Shown 4:3 in the right-hand column (about 5 of 12 on desktop) and height-capped below the text on mobile. `object-fit: cover` crops symmetrically from the centre, so keep the subject inside the middle 70% horizontally and vertically and leave the outer 15% each side clear of anything that matters.',
  },
  servicePurchasingManagementHero: {
    file: 'service-purchasing-management-hero.svg',
    width: 1600,
    height: 1200,
    ratio: '4:3',
    label: 'PURCHASING MANAGEMENT',
    alt: 'Placeholder for a documentary photograph of order documents beside goods in production or preparation for shipment.',
    role: /** @type {ImageRole} */ ('hero'),
    placeholder: true,
    artDirection:
      'An order in progress: goods being prepared or packed, production follow-up on the floor, a warehouse with staged cartons, or order and specification documents lying beside the goods they describe. Paperwork must be generic and unreadable — never photograph invented figures, invoices or order numbers. No handshake, no meeting room, no China clichés, no AI-perfect factory floor.',
    cropNote:
      'Shown 4:3 in the right-hand column (about 5 of 12 on desktop) and height-capped below the text on mobile. `object-fit: cover` crops symmetrically from the centre, so keep the subject inside the middle 70% horizontally and vertically and leave the outer 15% each side clear of anything that matters.',
  },
  serviceQualityControlHero: {
    file: 'service-quality-control-hero.svg',
    width: 1600,
    height: 1200,
    ratio: '4:3',
    label: 'QUALITY CONTROL',
    alt: 'Placeholder for a documentary photograph of products being measured, counted or packed during a pre-shipment inspection.',
    role: /** @type {ImageRole} */ ('hero'),
    placeholder: true,
    artDirection:
      'A pre-shipment check in progress: calipers, a tape or scale against a product, goods being counted or laid out in rows, cartons being opened and checked, or an inspection record being filled in beside the goods. The brief bans staged laboratory imagery unless genuinely relevant — this is a warehouse and a workbench, not a clean room. No handshake, no meeting room, no China clichés.',
    cropNote:
      'Shown 4:3 in the right-hand column (about 5 of 12 on desktop) and height-capped below the text on mobile. `object-fit: cover` crops symmetrically from the centre, so keep the subject inside the middle 70% horizontally and vertically and leave the outer 15% each side clear of anything that matters.',
  },
  serviceShippingFromChinaHero: {
    file: 'service-shipping-from-china-hero.svg',
    width: 1600,
    height: 1200,
    ratio: '4:3',
    label: 'SHIPPING FROM CHINA',
    alt: 'Placeholder for a documentary photograph of packed cartons and palletized goods being prepared for freight.',
    role: /** @type {ImageRole} */ ('hero'),
    placeholder: true,
    artDirection:
      'Freight preparation rather than freight romance: packed cartons stacked and labelled, goods palletized and wrapped, a loading bay during loading, or a warehouse aisle of staged shipments. The brief bans cliché cargo-container hero shots (container stacks at sunset, a lone container against a sky) — keep it inside the warehouse where the work is visible. No China clichés.',
    cropNote:
      'Shown 4:3 in the right-hand column (about 5 of 12 on desktop) and height-capped below the text on mobile. `object-fit: cover` crops symmetrically from the centre, so keep the subject inside the middle 70% horizontally and vertically and leave the outer 15% each side clear of anything that matters.',
  },
  serviceProductSourcing: {
    file: 'service-product-sourcing.svg',
    width: 1200,
    height: 900,
    ratio: '4:3',
    label: 'PRODUCT SOURCING',
    alt: 'Placeholder for a photograph of product samples under review during supplier research.',
    role: /** @type {ImageRole} */ ('service'),
    placeholder: true,
    artDirection:
      'Product samples, sourcing research or a supplier sample being examined — hands, samples and reference material on a work surface. Not a catalogue flat-lay, not a studio product shot.',
  },
  serviceSupplierVerification: {
    file: 'service-supplier-verification.svg',
    width: 1200,
    height: 900,
    ratio: '4:3',
    label: 'SUPPLIER VERIFICATION',
    alt: 'Placeholder for a photograph of a supplier assessment or factory capability review.',
    role: /** @type {ImageRole} */ ('service'),
    placeholder: true,
    artDirection:
      'A factory walk-through, production capability check, material or component review, or documentation being worked through on site. Nothing that implies a certificate, accreditation mark or laboratory report — Sourden issues none.',
  },
  servicePurchasingManagement: {
    file: 'service-purchasing-management.svg',
    width: 1200,
    height: 900,
    ratio: '4:3',
    label: 'PURCHASING MANAGEMENT',
    alt: 'Placeholder for a photograph of order documents, product preparation or packaging coordination.',
    role: /** @type {ImageRole} */ ('service'),
    placeholder: true,
    artDirection:
      'Order and specification documents beside the goods they describe, product preparation, production follow-up or packing work in progress. Paperwork should be generic and unreadable rather than filled with invented figures.',
  },
  serviceQualityControl: {
    file: 'service-quality-control.svg',
    width: 1200,
    height: 900,
    ratio: '4:3',
    label: 'QUALITY CONTROL',
    alt: 'Placeholder for a photograph of a pre-shipment product inspection and quantity check.',
    role: /** @type {ImageRole} */ ('service'),
    placeholder: true,
    artDirection:
      'Real product inspection: measuring, checking quantities against a count, appearance checks, packaging inspection or QC notes being recorded. Hands and product, not a laboratory. Avoid any imagery that falsely suggests third-party certification or accredited testing.',
  },
  serviceShippingFromChina: {
    file: 'service-shipping-from-china.svg',
    width: 1200,
    height: 900,
    ratio: '4:3',
    label: 'SHIPPING FROM CHINA',
    alt: 'Placeholder for a photograph of cartons being packed and prepared for shipment.',
    role: /** @type {ImageRole} */ ('service'),
    placeholder: true,
    artDirection:
      'Packaging, warehouse dispatch, cartons being labelled and staged, or pallet preparation. Realistic logistics, not a container-port stock shot with a sunset, a giant ship or a globe.',
  },

  /* ---------------------------------------------------------- industries -- */
  /* `/industries` hero — the one image on the Industries overview page.
   *
   * The page's centrepiece is the nine-entry category directory, and that
   * directory carries NO images on purpose: the brief asks for "an editorial
   * sourcing directory, not an ecommerce category page", and nine category
   * photographs would read as a product grid. So the page has exactly one
   * slot — this one — and the nine `industry*` slots below stay where they
   * belong, on the homepage grid.
   *
   * What the image has to do is different from the other heroes too. The
   * homepage grid shows one category at a time; this page is about the RANGE,
   * so the brief asks for "a variety of real products, product samples, factory
   * production or product inspection" that communicates breadth. Breadth is
   * still not a collage — the brief bans artificial product collages, generic
   * world maps, landmarks, flags, handshakes and AI-looking factory imagery. */
  industriesHero: {
    file: 'industries-hero.svg',
    width: 1600,
    height: 1200,
    ratio: '4:3',
    label: 'WHAT WE SOURCE',
    alt: 'Placeholder for a documentary photograph of product samples from several different categories being reviewed together on a work surface.',
    role: /** @type {ImageRole} */ ('hero'),
    placeholder: true,
    artDirection:
      'Breadth shown honestly: several DIFFERENT kinds of product being handled together in a real working context — samples on a bench, goods from different categories staged for inspection, or a production or packing area where more than one product line is visible. Mixed materials and unfinished packs are better than polished hero products. Banned: artificial collages, a neat grid of unrelated products on white, generic world maps, the Great Wall, a flag, a panda, handshakes, staged meeting rooms and artificially perfect AI factory floors.',
    cropNote:
      'Shown 4:3 in the right-hand column (about 5 of 12 on desktop) and height-capped below the text on mobile. `object-fit: cover` crops symmetrically from the centre, so keep the subject inside the middle 70% horizontally and vertically and leave the outer 15% each side clear of anything that matters.',
  },
  industryConsumerProducts: {
    file: 'industry-consumer-products.svg',
    width: 1200,
    height: 1500,
    ratio: '4:5',
    label: 'CONSUMER PRODUCTS',
    alt: 'Placeholder for a photograph of consumer goods production or finished consumer products.',
    role: /** @type {ImageRole} */ ('industry'),
    placeholder: true,
    artDirection: 'Finished consumer goods in a production or packing environment. Portrait crop.',
  },
  industryBeautyPersonalCare: {
    file: 'industry-beauty-personal-care.svg',
    width: 1200,
    height: 900,
    ratio: '4:3',
    label: 'BEAUTY & PERSONAL CARE',
    alt: 'Placeholder for a photograph of beauty or personal care product filling and packaging.',
    role: /** @type {ImageRole} */ ('industry'),
    placeholder: true,
    artDirection: 'Filling line, component trays or packaging of beauty/personal-care products.',
  },
  industryHomeLiving: {
    file: 'industry-home-living.svg',
    width: 1200,
    height: 900,
    ratio: '4:3',
    label: 'HOME & LIVING',
    alt: 'Placeholder for a photograph of homeware materials, assembly or finishing.',
    role: /** @type {ImageRole} */ ('industry'),
    placeholder: true,
    artDirection: 'Materials, assembly bench or finishing of homewares and textiles.',
  },
  industryPackaging: {
    file: 'industry-packaging.svg',
    width: 1200,
    height: 900,
    ratio: '4:3',
    label: 'PACKAGING',
    alt: 'Placeholder for a photograph of packaging production, printing or stacked cartons.',
    role: /** @type {ImageRole} */ ('industry'),
    placeholder: true,
    artDirection: 'Printing, die-cutting or neatly stacked retail packaging.',
  },
  industryElectronicsAccessories: {
    file: 'industry-electronics-accessories.svg',
    width: 1200,
    height: 900,
    ratio: '4:3',
    label: 'ELECTRONICS & ACCESSORIES',
    alt: 'Placeholder for a photograph of electronics assembly or a functional test station.',
    role: /** @type {ImageRole} */ ('industry'),
    placeholder: true,
    artDirection: 'Assembly bench, cable/component trays or a functional test jig.',
  },
  industryIndustrialProducts: {
    file: 'industry-industrial-products.svg',
    width: 1200,
    height: 1500,
    ratio: '4:5',
    label: 'INDUSTRIAL PRODUCTS',
    alt: 'Placeholder for a photograph of machinery, metalwork or industrial component production.',
    role: /** @type {ImageRole} */ ('industry'),
    placeholder: true,
    artDirection: 'Machinery, tooling or metal/industrial component production. Portrait crop.',
  },
  industrySportsOutdoors: {
    file: 'industry-sports-outdoors.svg',
    width: 1200,
    height: 900,
    ratio: '4:3',
    label: 'SPORTS & OUTDOORS',
    alt: 'Placeholder for a photograph of sports or outdoor equipment production.',
    role: /** @type {ImageRole} */ ('industry'),
    placeholder: true,
    artDirection:
      'Assembly, stitching testing or packing of sports and outdoor equipment — gear, not lifestyle models.',
  },
  industryPetSupplies: {
    file: 'industry-pet-supplies.svg',
    width: 1200,
    height: 900,
    ratio: '4:3',
    label: 'PET SUPPLIES',
    alt: 'Placeholder for a photograph of pet product manufacturing or packaging.',
    role: /** @type {ImageRole} */ ('industry'),
    placeholder: true,
    artDirection:
      'Moulding, assembly or retail packaging of pet products. No live animals or studio pet portraits.',
  },
  industryApparelFootwearBags: {
    file: 'industry-apparel-footwear-bags.svg',
    width: 1200,
    height: 900,
    ratio: '4:3',
    label: 'APPAREL, FOOTWEAR & BAGS',
    alt: 'Placeholder for a photograph of apparel, footwear or bag production.',
    role: /** @type {ImageRole} */ ('industry'),
    placeholder: true,
    artDirection:
      'Cutting tables, stitching lines or finishing of apparel, footwear or bags. Flat-lay or production floor, not on-model studio shots.',
  },

  /* --------------------------------------------------------- case studies -- */
  caseStudyChristmasTree: {
    file: 'case-study-christmas-tree.svg',
    width: 1400,
    height: 1050,
    ratio: '4:3',
    label: 'CASE STUDY IMAGE',
    alt: 'Placeholder for a photograph of the custom commercial Christmas tree project.',
    role: /** @type {ImageRole} */ ('case-study'),
    placeholder: true,
    artDirection: 'Only to be replaced once the real project photograph is available and cleared for publication.',
  },
  caseStudySportsJerseys: {
    file: 'case-study-sports-jerseys.svg',
    width: 1200,
    height: 800,
    ratio: '3:2',
    label: 'CASE STUDY IMAGE',
    alt: 'Placeholder for a photograph of the sports jersey project.',
    role: /** @type {ImageRole} */ ('case-study'),
    placeholder: true,
    artDirection: 'Only to be replaced once the real project photograph is available and cleared for publication.',
  },

  /* ------------------------------------------------------------ insights -- */
  insightSupplierResearch: {
    file: 'insight-supplier-research.svg',
    width: 1400,
    height: 933,
    ratio: '3:2',
    label: 'INSIGHTS IMAGE',
    alt: 'Placeholder for a photograph illustrating supplier research and comparison.',
    role: /** @type {ImageRole} */ ('insight'),
    placeholder: true,
    artDirection: 'Supplier research, sampling or side-by-side product comparison.',
  },
  insightSupplierVerification: {
    file: 'insight-supplier-verification.svg',
    width: 1200,
    height: 800,
    ratio: '3:2',
    label: 'INSIGHTS IMAGE',
    alt: 'Placeholder for a photograph illustrating supplier verification and factory assessment.',
    role: /** @type {ImageRole} */ ('insight'),
    placeholder: true,
    artDirection: 'Factory walk-through, capability check or inspection documentation.',
  },
  insightTradingCompany: {
    file: 'insight-trading-company.svg',
    width: 1200,
    height: 800,
    ratio: '3:2',
    label: 'INSIGHTS IMAGE',
    alt: 'Placeholder for a photograph illustrating the difference between a manufacturer and a trading company.',
    role: /** @type {ImageRole} */ ('insight'),
    placeholder: true,
    artDirection: 'Manufacturer production line versus a trading office or warehousing operation.',
  },

  /* -------------------------------------------------------------- social -- */
  ogDefault: {
    file: 'og-default.svg',
    width: 1200,
    height: 630,
    ratio: '1200:630',
    label: 'SOURDEN — CHINA SOURCING. DONE.',
    alt: '',
    role: /** @type {ImageRole} */ ('social'),
    placeholder: true,
    artDirection:
      'Open Graph cards must be raster (JPG/PNG/WebP) — most platforms do not render SVG. Replace with a 1200×630 export before launch.',
  },
};

/**
 * Resolve an image key into ready-to-spread <img> attributes.
 *
 * @param {keyof typeof images} key
 * @returns {{ src: string, width: number, height: number, alt: string, placeholder: boolean }}
 */
export function img(key) {
  const asset = images[key];
  if (!asset) {
    throw new Error(
      `[media.js] Unknown image key "${key}". Add it to the images manifest before referencing it.`
    );
  }
  return {
    src: `${IMAGE_DIR}/${asset.file}`,
    width: asset.width,
    height: asset.height,
    alt: asset.alt,
    placeholder: Boolean(asset.placeholder),
  };
}

/** Every placeholder still awaiting a real photograph. Used by `<PlaceholderNotice>`. */
export function outstandingPlaceholders() {
  return Object.entries(images)
    .filter(([, asset]) => asset.placeholder)
    .map(([key, asset]) => ({ key, ...asset }));
}
