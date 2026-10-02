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
    file: 'hero-sourcing.webp',
    width: 1600,
    height: 1200,
    ratio: '4:3',
    label: 'SOURCING IMAGE',
    alt: 'Hands lifting a moulded plastic connector shell from a compartmented tray of parts, with coiled power cables and a plain cardboard carton on the assembly table.',
    role: /** @type {ImageRole} */ ('hero'),
    artDirection:
      'Preferred subjects: factory production, quality inspection, product detail, packaging, warehouse, machinery, materials, or worker hands handling products. Avoid Great Wall / flag / panda / globe / handshake / shipping-container clichés and artificially perfect AI factory scenes. Category for this slot: Consumer Electronics & Accessories — cables, moulded housings and connector shells on a laminate assembly table. Never a woodworking or craft scene: no timber, no wooden bench, no wood offcuts.',
    cropNote:
      'Shown in a 5-column frame with a fixed 520px height, so the sides are cropped — keep the subject in the middle ~70% and the outer 15% each side clear of anything that matters. The 4:3 source ratio is required, not optional.',
  },

  /* --------------------------------------------------- sourcing request -- */
  sourcingRequestHero: {
    file: 'sourcing-request-hero.webp',
    width: 1600,
    height: 1200,
    ratio: '4:3',
    label: 'SOURCING BRIEF',
    alt: 'Two workers laying folded woven fabric and a canvas pouch beside blank requirement sheets on a long bench, with stacked cartons and a rolling trolley behind.',
    role: /** @type {ImageRole} */ ('hero'),
    artDirection:
      'A workbench or table with product samples, reference drawings, measuring tools or packaging being handled and compared. It must read as evidence of the sourcing process — not an office scene, not a handshake, not smiling people in suits, and none of the China clichés (Great Wall / flag / panda / container port / globe). Category for this slot: Apparel, Footwear & Bags — woven fabric, a canvas pouch and metal zip hardware. Never a woodworking or craft scene: no timber, no wooden blocks, no wooden bench.',
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
    file: 'services-hero.webp',
    width: 1600,
    height: 1200,
    ratio: '4:3',
    label: 'SOURCING SERVICES',
    alt: 'A gloved worker comparing machined metal fasteners in compartmented trays on a stainless-steel bench, with a steel rule and a blank check sheet beside them.',
    role: /** @type {ImageRole} */ ('hero'),
    artDirection:
      'Documentary sourcing imagery: product sample review, supplier or product inspection, packaging review, a manufacturing process, warehouse preparation or material inspection. It has to read as a working scene. Avoid every China cliché (Great Wall / flag / panda / globe / container-port sunsets), generic handshakes, staged corporate meetings and artificially perfect AI factory floors. Category for this slot: Industrial Products — machined metal fasteners and rubber gaskets on a stainless-steel bench. Never a woodworking or craft scene: no timber, no wooden bench, no wood offcuts.',
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
    file: 'service-product-sourcing-hero.webp',
    width: 1600,
    height: 1200,
    ratio: '4:3',
    label: 'PRODUCT SOURCING',
    alt: 'A single woven webbing strap closed with a machined aluminium buckle lying alone on a bare stainless-steel bench, with one slim steel rule beside it and a factory interior dissolving into a soft blur behind.',
    role: /** @type {ImageRole} */ ('hero'),
    artDirection:
      'SHIPPED FRAME v2 (2026-10-01, Sports & Outdoors): ONE subject only with a shallow depth of field, a single webbing strap with an aluminium buckle alone on a stainless-steel bench and every background detail blurred out. (v1 was rejected as too cluttered: rows of samples, stacked cartons on racks.) Category is fixed to Sports & Outdoors — never a woodworking or craft scene: no timber, no wooden bench, no wood offcuts. Product sourcing in progress: samples laid out against reference material, specifications or drawings, several candidate products being compared, or hands examining a sample on a real work surface. Must read as evidence of the research, not a catalogue flat-lay or a studio product shot. No handshake, no meeting room, no China clichés.',
    cropNote:
      'Shown 4:3 in the right-hand column (about 5 of 12 on desktop) and height-capped below the text on mobile. `object-fit: cover` crops symmetrically from the centre, so keep the subject inside the middle 70% horizontally and vertically and leave the outer 15% each side clear of anything that matters.',
  },
  serviceSupplierVerificationHero: {
    file: 'service-supplier-verification-hero.webp',
    width: 1600,
    height: 1200,
    ratio: '4:3',
    label: 'SUPPLIER VERIFICATION',
    alt: 'A pair of cotton-gloved hands holding up a single brushed stainless-steel bowl to the light to check its rim, alone on a stainless-steel bench, with a moulding machine blurred behind.',
    role: /** @type {ImageRole} */ ('hero'),
    artDirection:
      'SHIPPED FRAME v2 (2026-10-01, Pet Supplies): ONE subject only with a shallow depth of field, gloved hands holding a single stainless-steel bowl up to the light over a bare bench, the machine blurred behind. (v1 was rejected as too cluttered: a conveyor of identical bowls, bins and cartons.) Category is fixed to Pet Supplies, and nothing in frame may imply a certificate, award or accreditation — Sourden issues none — and no live animals appear. A factory or supplier facility actually being looked at: a production floor during a walk-through, a worker inspecting output, materials or components being reviewed, or specification documents worked through on site next to the goods they describe. Must read as someone assessing the supplier, not a tour. No certificate, accreditation mark or laboratory report — Sourden issues none. No handshake, no meeting room, no China clichés, no AI-perfect factory floor.',
    cropNote:
      'Shown 4:3 in the right-hand column (about 5 of 12 on desktop) and height-capped below the text on mobile. `object-fit: cover` crops symmetrically from the centre, so keep the subject inside the middle 70% horizontally and vertically and leave the outer 15% each side clear of anything that matters.',
  },
  servicePurchasingManagementHero: {
    file: 'service-purchasing-management-hero.webp',
    width: 1600,
    height: 1200,
    ratio: '4:3',
    label: 'PURCHASING MANAGEMENT',
    alt: 'A single brushed stainless-steel insulated flask standing upright inside one open plain cardboard carton on a bare packing table, with the folded lid flaps beside it and a warehouse aisle blurred behind.',
    role: /** @type {ImageRole} */ ('hero'),
    artDirection:
      'SHIPPED FRAME v2 (2026-10-01, Consumer Products): ONE subject only with a shallow depth of field, a single insulated flask inside one open plain carton on a bare table, the warehouse aisle blurred behind. (v1 was rejected as too cluttered: rows of mugs, tape and loose paperwork in one frame.) Category is fixed to Consumer Products — never a woodworking or craft scene: no timber, no wooden bench. An order in progress: goods being prepared or packed, production follow-up on the floor, a warehouse with staged cartons, or order and specification documents lying beside the goods they describe. Paperwork must be generic and unreadable — never photograph invented figures, invoices or order numbers. No handshake, no meeting room, no China clichés, no AI-perfect factory floor.',
    cropNote:
      'Shown 4:3 in the right-hand column (about 5 of 12 on desktop) and height-capped below the text on mobile. `object-fit: cover` crops symmetrically from the centre, so keep the subject inside the middle 70% horizontally and vertically and leave the outer 15% each side clear of anything that matters.',
  },
  serviceQualityControlHero: {
    file: 'service-quality-control-hero.webp',
    width: 1600,
    height: 1200,
    ratio: '4:3',
    label: 'QUALITY CONTROL',
    alt: 'A single pair of folded black over-ear headphones lying alone on a bare stainless-steel inspection bench with a vernier caliper resting across its headband, and an inspection area blurred behind.',
    role: /** @type {ImageRole} */ ('hero'),
    artDirection:
      'SHIPPED FRAME v2 (2026-10-01, Electronics & Accessories): ONE subject only with a shallow depth of field, a single folded pair of headphones with a caliper resting on it on a bare bench, the inspection area blurred behind. (v1 was rejected as too cluttered: rows of cables, trays and bins. The engraved scale on the caliper itself is a legitimate part of the tool, not invented text.) Category is fixed to Electronics & Accessories; this is a warehouse inspection bench, not a clean-room laboratory. A pre-shipment check in progress: calipers, a tape or scale against a product, goods being counted or laid out in rows, cartons being opened and checked, or an inspection record being filled in beside the goods. The brief bans staged laboratory imagery unless genuinely relevant — this is a warehouse and a workbench, not a clean room. No handshake, no meeting room, no China clichés.',
    cropNote:
      'Shown 4:3 in the right-hand column (about 5 of 12 on desktop) and height-capped below the text on mobile. `object-fit: cover` crops symmetrically from the centre, so keep the subject inside the middle 70% horizontally and vertically and leave the outer 15% each side clear of anything that matters.',
  },
  serviceShippingFromChinaHero: {
    file: 'service-shipping-from-china-hero.webp',
    width: 1600,
    height: 1200,
    ratio: '4:3',
    label: 'SHIPPING FROM CHINA',
    alt: 'One plain cardboard carton sealed with clear tape standing alone on a bare warehouse floor, with a stretch-wrapped pallet and a roller shutter door blurred behind.',
    role: /** @type {ImageRole} */ ('hero'),
    artDirection:
      'SHIPPED FRAME v2 (2026-10-01, Home & Living): ONE subject only, a single taped carton standing alone on a bare warehouse floor with the wrapped pallet and shutter door blurred behind. (v1 was rejected as too cluttered: pallet truck, straw-packed plates and textile rolls all in one frame.) Category is fixed to Home & Living and the frame stays indoors. Freight preparation rather than freight romance: packed cartons stacked and labelled, goods palletized and wrapped, a loading bay during loading, or a warehouse aisle of staged shipments. The brief bans cliché cargo-container hero shots (container stacks at sunset, a lone container against a sky) — keep it inside the warehouse where the work is visible. No China clichés.',
    cropNote:
      'Shown 4:3 in the right-hand column (about 5 of 12 on desktop) and height-capped below the text on mobile. `object-fit: cover` crops symmetrically from the centre, so keep the subject inside the middle 70% horizontally and vertically and leave the outer 15% each side clear of anything that matters.',
  },
  serviceProductSourcing: {
    file: 'service-product-sourcing.webp',
    width: 1200,
    height: 900,
    ratio: '4:3',
    label: 'PRODUCT SOURCING',
    alt: 'A buyer and a supplier representative comparing physical product samples across a work table, one sample held up to the light.',
    role: /** @type {ImageRole} */ ('service'),
    artDirection:
      'Documentary photo — two people comparing product samples across a work table, faces out of frame, background softly blurred. Papers illegible. Not an illustration.',
  },
  serviceSupplierVerification: {
    file: 'service-supplier-verification.webp',
    width: 1200,
    height: 900,
    ratio: '4:3',
    label: 'SUPPLIER VERIFICATION',
    alt: 'An assessor walking through a factory floor with a clipboard, machinery softly out of focus behind her.',
    role: /** @type {ImageRole} */ ('service'),
    artDirection:
      'Documentary photo — a factory walk-through with a clipboard, seen from behind, face turned away. Nothing implying a certificate, accreditation mark or lab report. Not an illustration.',
  },
  servicePurchasingManagement: {
    file: 'service-purchasing-management.webp',
    width: 1200,
    height: 900,
    ratio: '4:3',
    label: 'PURCHASING MANAGEMENT',
    alt: 'A hand ticking off a blank order sheet beside a closed carton on a bright packing table.',
    role: /** @type {ImageRole} */ ('service'),
    artDirection:
      'Documentary photo — order follow-up at a bright packing table: pen, blank papers and a closed carton. Papers blank, no invented figures. Not an illustration.',
  },
  serviceQualityControl: {
    file: 'service-quality-control.webp',
    width: 1200,
    height: 900,
    ratio: '4:3',
    label: 'QUALITY CONTROL',
    alt: 'Close view of an inspector measuring a small metal component with a digital caliper, identical parts lined up beside.',
    role: /** @type {ImageRole} */ ('service'),
    artDirection:
      'Documentary photo — hands measuring a component with a caliper at a QC station. No third-party certification mark or accredited lab report. Not an illustration.',
  },
  serviceShippingFromChina: {
    file: 'service-shipping-from-china.webp',
    width: 1200,
    height: 900,
    ratio: '4:3',
    label: 'SHIPPING FROM CHINA',
    alt: 'A worker sealing a plain cardboard carton with a tape dispenser on a packing table, more cartons blurred behind.',
    role: /** @type {ImageRole} */ ('service'),
    artDirection:
      'Documentary photo — cartons being sealed and staged for dispatch in a bright warehouse. Blank cartons, no labels or barcodes, no container-port stock shot. Not an illustration.',
  },

  /* ------------------------------------------------------- how it works -- */
  /* `/how-it-works` hero — the page's only image.
   *
   * The page is sixteen sections of process and coordination, and it carries
   * exactly one photograph because the brief is specific about the image and
   * explicit about everything else being text: it asks for "one strong image",
   * not a set. Illustrating the individual stages would have produced six
   * photographs of six different activities, which is the generic collage the
   * same sentence rules out.
   *
   * So this slot has to stand for the whole journey at once. What makes that
   * honest rather than vague is a single frame in which the WORK is visible —
   * someone handling goods, checking them or preparing them, in a real space.
   * Any of the brief's seven suggested subjects would do; what is banned is
   * the corporate shorthand (handshakes, meeting rooms, boardroom thumbnails)
   * and the China shorthand (Great Wall, flag, panda, container-port sunsets),
   * plus artificially perfect AI factory floors. */
  howItWorksHero: {
    file: 'how-it-works-hero.webp',
    width: 1600,
    height: 1200,
    ratio: '4:3',
    label: 'HOW IT WORKS',
    alt: 'A worker sealing a plain cardboard carton on a wooden pallet, with a roll of packing tape and folded corrugated pads on the floor beside it.',
    role: /** @type {ImageRole} */ ('hero'),
    artDirection:
      'One documentary frame of sourcing work in progress: product samples being reviewed and compared, a pre-shipment inspection, goods being packed or palletized, or supplier documentation worked through beside the goods it describes. The brief lists those seven subjects (samples, factory production, inspection, packaging, warehouse preparation, supplier communication, shipment preparation) and asks for ONE strong image rather than a collage. Favour working hands and real materials over polished products and finished rooms. Banned: multi-image collages, generic handshakes, staged meeting rooms, corporate boardroom scenes, and every China cliché (Great Wall, national flag, panda, container-port sunset, globe), as well as artificially perfect AI factory floors. Category for this slot: packaging and shipment preparation — plain unprinted cartons being sealed on a pallet. A wooden pallet is fine here because it is shipping infrastructure rather than the product; a woodworking or craft scene still is not.',
    cropNote:
      'Shown 4:3 in the right-hand column (about 5 of 12 on desktop) and height-capped below the text on mobile. `object-fit: cover` crops symmetrically from the centre, so keep the subject inside the middle 70% horizontally and vertically and leave the outer 15% each side clear of anything that matters.',
  },

  /* --------------------------------------------------------------- about -- */
  /* `/about` hero — the page's only image.
   *
   * This is the page that would normally carry a portrait: a founder, a team,
   * an office. None of those exist as a verified fact about this business, so
   * none of them may be invented (brief §16 bans fabricated company facts, and
   * `media.js` cannot assert what the business has not supplied). What the
   * page CAN show honestly is the work — the same documentary register the
   * rest of the site uses.
   *
   * Brief §01 asks for exactly that: "authentic and operational rather than
   * corporate", naming factory floor, product samples, supplier meeting,
   * inspection, materials, packaging, warehouse and hands reviewing products,
   * and ruling out the handshake, the boardroom, the landmark, the flag and
   * every stock "international business" scene. Same 1600 × 1200 / 4:3 as
   * every other hero, so it can share the hero frame without a second crop
   * rule. */
  aboutHero: {
    file: 'about-hero.webp',
    width: 1600,
    height: 1200,
    ratio: '4:3',
    label: 'ABOUT SOURDEN',
    alt: 'A worker seen from behind at a long bench, lining up and checking a row of plain pump bottles, cream jars and brushes, with shelving of boxes behind.',
    role: /** @type {ImageRole} */ ('hero'),
    artDirection:
      'One documentary frame of sourcing work being done by hand: samples compared against a specification, an inspection in progress, materials or packaging being handled, or goods checked in a warehouse. The person matters only as the person doing the work — no posed portrait, no facing-the-camera smile, no team lineup. Banned alongside the site-wide clichés (Great Wall, national flag, panda, container-port sunset, globe): handshakes, boardrooms, staged meeting rooms, office stock scenes, and artificially perfect AI factory floors. Category for this slot: Beauty & Personal Care — plain unbranded pump bottles, cream jars and brushes being lined up and checked. Never a woodworking or craft scene: no timber, no wooden bench, no wood offcuts.',
    cropNote:
      'Shown 4:3 in the right-hand column (about 5 of 12 on desktop) and height-capped below the text on mobile. `object-fit: cover` crops symmetrically from the centre, so keep the subject inside the middle 70% horizontally and vertically and leave the outer 15% each side clear of anything that matters.',
  },

  /* ----------------------------------------------------------------- faq -- */
  /* `/faq` hero — the page's only image.
   *
   * The FAQ brief (§2) specifies the eyebrow, the H1, the supporting paragraph
   * and two actions, and names NO image. The hero device every other page uses
   * carries one, so the choice was a hero without an image — which would be a
   * second hero design — or this slot. Same 1600 × 1200 / 4:3 as every other
   * hero, so it shares the frame without a second crop rule.
   *
   * WHAT IT MUST NOT BE. An FAQ page is the easiest place on the site to reach
   * for a symbol: a question mark, a speech bubble, a glowing lightbulb, a
   * headset, a person on a phone, a neat row of icons. The brief asks for a
   * "professional sourcing company's practical knowledge base", and every one
   * of those would make the page look like a support desk. The subject is
   * therefore the WORK the questions are about — the same documentary register
   * as the rest of the site.
   *
   * The questions this page answers are mostly about choosing between options
   * (Q10/Q11 supplier research and comparison, Q12 verification, Q16/Q17
   * samples and inspection), so the frame that matches the content is a
   * comparison in progress rather than a generic factory shot. */
  faqHero: {
    file: 'faq-hero.webp',
    width: 1600,
    height: 1200,
    ratio: '4:3',
    label: 'FAQ',
    alt: 'A row of the same ceramic vessel in several different glazes on a work surface, with a hand lifting one to compare it beside a steel rule and blank sheets.',
    role: /** @type {ImageRole} */ ('hero'),
    artDirection:
      'One documentary frame of a sourcing decision being worked through by hand: several suppliers\u2019 samples or units of the same product laid out together for comparison, samples checked against a printed specification or requirement sheet, quotations or documents worked through beside the goods they describe, or a pre-shipment inspection in progress. Two or three real objects being compared reads better than one polished product. Banned: question marks, speech bubbles, lightbulbs, headsets, call-centre or customer-support imagery, icon grids, and the site-wide clichés (Great Wall, national flag, panda, container-port sunset, globe, handshake, boardroom, artificially perfect AI factory floors). Category for this slot: Home & Living — the same cylindrical ceramic vessel in several competing glazes. Never a woodworking or craft scene: no timber, no wooden blanks, no bamboo.',
    cropNote:
      'Shown 4:3 in the right-hand column (about 5 of 12 on desktop) and height-capped below the text on mobile. `object-fit: cover` crops symmetrically from the centre, so keep the subject inside the middle 70% horizontally and vertically and leave the outer 15% each side clear of anything that matters. Where several items are being compared, keep them all inside that middle band — a comparison cropped down to one item loses the point of the frame.',
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
    file: 'industries-hero.webp',
    width: 1600,
    height: 1200,
    ratio: '4:3',
    label: 'WHAT WE SOURCE',
    alt: 'A tray of moulded plastic housings, folded textiles, a plain cardboard carton, a glass jar and machined metal fittings gathered on a packing table.',
    role: /** @type {ImageRole} */ ('hero'),
    artDirection:
      'Breadth shown honestly: several DIFFERENT kinds of product being handled together in a real working context — samples on a bench, goods from different categories staged for inspection, or a production or packing area where more than one product line is visible. Mixed materials and unfinished packs are better than polished hero products. Banned: artificial collages, a neat grid of unrelated products on white, generic world maps, the Great Wall, a flag, a panda, handshakes, staged meeting rooms and artificially perfect AI factory floors. Category for this slot: deliberately mixed — a moulded plastic tray, folded textiles, a kraft carton, a glass jar and machined metal fittings. Never a woodworking or craft scene: no timber, no wood offcuts, no wood chips.',
    cropNote:
      'Shown 4:3 in the right-hand column (about 5 of 12 on desktop) and height-capped below the text on mobile. `object-fit: cover` crops symmetrically from the centre, so keep the subject inside the middle 70% horizontally and vertically and leave the outer 15% each side clear of anything that matters.',
  },
  industryConsumerProducts: {
    file: 'industry-consumer-products.webp',
    width: 1200,
    height: 1500,
    ratio: '4:5',
    label: 'CONSUMER PRODUCTS',
    alt: 'Three white enamel mugs in a row on a stainless-steel bench, blurred cartons and daylight windows behind.',
    role: /** @type {ImageRole} */ ('industry'),
    artDirection:
      'Category for this slot: Consumer Products. A single calm row of finished goods on an inspection bench, shallow depth of field, subject centred in the middle band so it survives the wide grid crop. No timber, no wood, no rustic workshop.',
  },
  industryBeautyPersonalCare: {
    file: 'industry-beauty-personal-care.webp',
    width: 1200,
    height: 900,
    ratio: '4:3',
    label: 'BEAUTY & PERSONAL CARE',
    alt: 'A frosted pump bottle held by a gloved hand over a stainless bowl, the filling area soft behind.',
    role: /** @type {ImageRole} */ ('industry'),
    artDirection:
      'Category for this slot: Beauty & Personal Care. One product on a filling or inspection bench, shallow depth of field, subject centred. No timber, no wood.',
  },
  industryHomeLiving: {
    file: 'industry-home-living.webp',
    width: 1200,
    height: 900,
    ratio: '4:3',
    label: 'HOME & LIVING',
    alt: 'A folded oatmeal woven throw with fringed edges resting on a light workbench, shelving soft behind.',
    role: /** @type {ImageRole} */ ('industry'),
    artDirection:
      'Category for this slot: Home & Living. One folded textile centred on a bench, shallow depth of field. No timber, no wood.',
  },
  industryPackaging: {
    file: 'industry-packaging.webp',
    width: 1200,
    height: 900,
    ratio: '4:3',
    label: 'PACKAGING',
    alt: 'Hands folding a plain kraft carton on a bench, a die-cutting press soft in the background.',
    role: /** @type {ImageRole} */ ('industry'),
    artDirection:
      'Category for this slot: Packaging. One plain unprinted carton being folded at the bench, shallow depth of field, subject centred. No timber, no wood.',
  },
  industryElectronicsAccessories: {
    file: 'industry-electronics-accessories.webp',
    width: 1200,
    height: 900,
    ratio: '4:3',
    label: 'ELECTRONICS & ACCESSORIES',
    alt: 'A matte-black power bank lying on a light bench with a coiled white USB-C cable beside it, the room behind out of focus.',
    role: /** @type {ImageRole} */ ('industry'),
    artDirection:
      'Category for this slot: Electronics & Accessories. One product on a test bench with a single cable, shallow depth of field, subject centred in the middle band. No timber, no wood.',
  },
  industryIndustrialProducts: {
    file: 'industry-industrial-products.webp',
    width: 1200,
    height: 1500,
    ratio: '4:5',
    label: 'INDUSTRIAL PRODUCTS',
    alt: 'A grey cast-metal enclosure with a carry handle, hex screws and a steel latch on a stainless bench, the workshop soft behind.',
    role: /** @type {ImageRole} */ ('industry'),
    artDirection:
      'Category for this slot: Industrial Products. One rugged component centred on an inspection bench, shallow depth of field, subject in the middle band so it survives the wide grid crop. No timber, no wood.',
  },
  industrySportsOutdoors: {
    file: 'industry-sports-outdoors.webp',
    width: 1200,
    height: 900,
    ratio: '4:3',
    label: 'SPORTS & OUTDOORS',
    alt: 'A rolled foam camping mat strapped tight with a buckle, its valve cap resting on top, against a blurred workshop wall.',
    role: /** @type {ImageRole} */ ('industry'),
    artDirection:
      'Category for this slot: Sports & Outdoors. One piece of gear on a bench, shallow depth of field, subject centred. Gear only, no lifestyle models, no timber, no wood.',
  },
  industryPetSupplies: {
    file: 'industry-pet-supplies.webp',
    width: 1200,
    height: 900,
    ratio: '4:3',
    label: 'PET SUPPLIES',
    alt: 'A round plush grey dog bed centred on a stainless bench, the workshop behind out of focus.',
    role: /** @type {ImageRole} */ ('industry'),
    artDirection:
      'Category for this slot: Pet Supplies. One product centred on a bench, shallow depth of field. No live animals, no studio pet portraits, no timber, no wood.',
  },
  industryApparelFootwearBags: {
    file: 'industry-apparel-footwear-bags.webp',
    width: 1200,
    height: 900,
    ratio: '4:3',
    label: 'APPAREL, FOOTWEAR & BAGS',
    alt: 'A neatly folded heathered knit sweater on a light bench, the workshop soft behind.',
    role: /** @type {ImageRole} */ ('industry'),
    artDirection:
      'Category for this slot: Apparel, Footwear & Bags. One folded garment centred on a bench, shallow depth of field, subject in the middle band so it survives the wide grid crop. Flat-lay only, never on-model, no timber, no wood.',
  },

  /* --------------------------------------------------------- case studies -- */
  caseStudyChristmasTree: {
    file: 'case-study-christmas-tree.webp',
    width: 1400,
    height: 1050,
    ratio: '4:3',
    label: 'CASE STUDY IMAGE',
    alt: 'Photograph of a decorated commercial Christmas tree with warm string lights in a hotel lobby.',
    role: /** @type {ImageRole} */ ('case-study'),
    artDirection:
      'Documentary photograph of the project type (a decorated commercial Christmas tree). Asserts no customer, figure or outcome. Replace once the real project photograph is available and cleared for publication.',
  },
  caseStudySportsJerseys: {
    file: 'case-study-sports-jerseys.webp',
    width: 1200,
    height: 800,
    ratio: '3:2',
    label: 'CASE STUDY IMAGE',
    alt: 'Photograph of blank sports jerseys hanging side by side on a garment rail.',
    role: /** @type {ImageRole} */ ('case-study'),
    artDirection:
      'Documentary photograph of the project type (plain blank sports jerseys). Asserts no customer, figure or outcome. Replace once the real project photograph is available and cleared for publication.',
  },

  /* ------------------------------------------------------------ insights -- */
  /* THE `/insights` HUB HAS NO IMAGE SLOT AT ALL — and the slot it used to have
     was DELETED, not left unused.
   *
   * `insightsHero` (1600 × 1200) lived here and the hub hero rendered it. The
   * page's presentation has since been reduced to a compact hero, the article
   * directory and two closing bands, and the hero now carries only §2's four
   * elements — eyebrow, H1, supporting line, CTA — which is what §2's own
   * "Do not make the hero overly large" asks for.
   *
   * An orphan slot is not free. `npm run placeholders` keeps writing its file
   * into `public/images/`, and `check:remote` then asks for an upload of a file
   * nothing on the site references — so the slot, its file and its `IMAGES.md`
   * row went together. If a hero frame is ever wanted again, this comment is
   * the record of what the slot was: alt, ratio and the §7 banned list.
   */

  /* The three `insight*` slots below belong to the HOMEPAGE's §18 cards, and
     the hub's directory still carries no images: brief §6 lists the card image
     as optional and §7 says a clean editorial card without one beats a poor
     stock photo, and no documentary photography exists yet. Nothing on
     `/insights` renders a frame today — the article directory is text-only on
     purpose. See `insights-articles.js`. */
  insightSupplierResearch: {
    file: 'insight-supplier-research.webp',
    width: 1400,
    height: 933,
    ratio: '3:2',
    label: 'INSIGHTS IMAGE',
    alt: 'A machined aluminium housing with a steel rule resting across it on a stainless-steel bench, the workshop blurred behind.',
    role: /** @type {ImageRole} */ ('insight'),
    artDirection:
      'Documentary photo — ONE subject (a machined aluminium housing with a steel rule) on a stainless-steel bench, shallow depth of field. Category for this slot: Industrial Products. Never a woodworking or craft scene: no timber, no wooden bench.',
  },
  insightSupplierVerification: {
    file: 'insight-supplier-verification.webp',
    width: 1200,
    height: 800,
    ratio: '3:2',
    label: 'INSIGHTS IMAGE',
    alt: 'A green printed circuit board and a brass magnifying loupe on a laminate bench, two workers out of focus behind.',
    role: /** @type {ImageRole} */ ('insight'),
    artDirection:
      'Documentary photo — ONE subject (a printed circuit board module and a loupe) on a laminate bench, shallow depth of field. Category for this slot: Electronics & Accessories. Never a woodworking or craft scene: no timber, no wooden bench.',
  },
  insightTradingCompany: {
    file: 'insight-trading-company.webp',
    width: 1200,
    height: 800,
    ratio: '3:2',
    label: 'INSIGHTS IMAGE',
    alt: 'A folded heathered knit sweater lying alone on a laminate bench, a sewing workshop floor blurred behind.',
    role: /** @type {ImageRole} */ ('insight'),
    artDirection:
      'Documentary photo — ONE subject (a folded knit sweater) on a laminate bench, shallow depth of field. Category for this slot: Apparel, Footwear & Bags. Never a woodworking or craft scene: no timber, no wooden bench.',
  },

  /* -------------------------------------------------------------- social -- */
  ogDefault: {
    file: 'og-default.png',
    width: 1200,
    height: 630,
    ratio: '1200:630',
    label: 'SOURDEN — CHINA SOURCING. DONE.',
    alt: '',
    role: /** @type {ImageRole} */ ('social'),
    artDirection:
      'Raster export (PNG) of the brand share card, set in the site\u2019s own Manrope/Inter on the hero surface with the brass seam and the China Sourcing. Done. tagline. Platforms do not render SVG, so this slot must stay raster. Rebuild from _img/og-build.cjs (puppeteer + the bundled variable fonts), never regenerate it with an image model.',
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

