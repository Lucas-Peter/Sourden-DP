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

/** @typedef {'hero'|'industry'|'case-study'|'insight'|'social'} ImageRole */

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

  /* ---------------------------------------------------------- industries -- */
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
