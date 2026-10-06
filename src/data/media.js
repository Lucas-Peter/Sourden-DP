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

import { readFileSync, existsSync } from 'node:fs';
import path from 'node:path';

export const IMAGE_DIR = '/images';

/** @typedef {'hero'|'service'|'industry'|'case-study'|'insight'|'social'} ImageRole */

export const images = {
  /* ---------------------------------------------------------------- hero -- */
  /* `/` hero — a FULL-BLEED BACKGROUND frame (2026-10-02).
   *
   * The homepage hero used to be the site's split-column shape: 4:3 frame in
   * the right columns, caption under it. The owner moved both `/` and
   * `/insights` to the background shape that day (the device is now the
   * shared `BackgroundHero.astro`), and a background frame needs a different
   * photograph: a centred 4:3 still life loses its top and bottom to the wide
   * band and puts its subject under the copy. The slot kept its name and its
   * file name — same slot, same category, new shape — so the upload is an
   * overwrite with no orphan to delete.
   *
   * 16:9 (1920 × 1080), like `insightsHero`: object-fit: cover behind a wide
   * band, so a wide source loses less to the crop. Composition: the object
   * cluster sits in the RIGHT two thirds; the LEFT third is empty table for
   * the overlaid copy (the scrim is left-weighted from 768 up). On phones the
   * crop anchors at 80% to keep the cluster in view — see `.bg-hero__backdrop
   * img` in components.css. Category for this slot: Consumer Electronics &
   * Accessories — compartmented trays of connector housings, cable coils and
   * packing cartons on a sample bench. Never a woodworking or craft scene:
   * no timber, no wooden bench, no wood offcuts.
   */
  heroSourcing: {
    file: 'hero-sourcing.webp',
    width: 1920,
    height: 1080,
    ratio: '16:9',
    label: 'SOURCING IMAGE',
    /* alt is EMPTY on purpose. The photograph is a decorative background:
       the hero's copy is overlaid on it and carries the meaning (same call
       as `insightsHero` and `ogDefault`). */
    alt: '',
    role: /** @type {ImageRole} */ ('hero'),
    artDirection:
      'Preferred subjects: factory production, quality inspection, product detail, packaging, warehouse, machinery, materials. Avoid Great Wall / flag / panda / globe / handshake / shipping-container clichés and artificially perfect AI factory scenes. This slot: one compact sample-bench cluster (trays, cables, carton, rule, tape, blank tags) in the right two thirds of a 16:9 frame, empty table left, no people, no hands.',
    cropNote:
      'Rendered as a full-bleed background (object-fit: cover) behind the homepage hero band: desktop bands around 2.2-2.5:1 trim top and bottom, phones trim the sides and anchor at 80% so the right-hand cluster stays in view. Keep the objects right of centre and inside the middle vertical band; the left third stays empty for the overlaid copy. The watermark crop already removed the outer 12.5% right and bottom of the raw.',
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
   * the exception: it moved to the full-bleed background shape on 2026-10-02
   * (16:9, copy overlaid) alongside the homepage, /how-it-works, /industries
   * and /about heroes, so it no longer shares the 4:3 service-section frame.
   *
   * Spec §21 bans the usual China shorthand here (Great Wall, flag, panda,
   * generic handshake, staged corporate meeting, giant globe, AI-perfect
   * factory). Every slot must show the work the section is describing.
   */
  servicesHero: {
    file: 'services-hero.webp',
    width: 1920,
    height: 1080,
    ratio: '16:9',
    label: 'SOURCING SERVICES',
    /* alt is EMPTY on purpose: the photograph is a decorative background (the
       hero's copy is overlaid on it) — same call as `heroSourcing`. */
    alt: '',
    role: /** @type {ImageRole} */ ('hero'),
    artDirection:
      'One documentary frame of the sourcing services in progress on a stainless-steel bench: machined metal fasteners in compartmented trays, rubber gaskets, a steel rule and a blank check sheet, arranged in the RIGHT two thirds of a 16:9 frame with the left third empty for the overlaid copy. No people, no hands, no readable text, no logos. Banned alongside the site-wide clichés (Great Wall, national flag, panda, container-port sunset, globe, handshake, boardroom): staged corporate meetings and artificially perfect AI factory floors. Category: Industrial Products. Never a woodworking or craft scene: no timber, no wooden bench, no wood offcuts.',
    cropNote:
      'Rendered as a full-bleed background (object-fit: cover) behind the hero band: desktop bands around 2.2-2.5:1 trim top and bottom, phones trim the sides and anchor at 80% so the right-hand cluster stays in view. Keep the objects right of centre and inside the middle vertical band; the left third stays empty for the overlaid copy. The watermark crop already removed the outer 12.5% right and bottom of the raw.',
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
      'SHIPPED FRAME v2 (2026-10-01, Pet Supplies): ONE subject only with a shallow depth of field, gloved hands holding a single stainless-steel bowl up to the light over a bare bench, the machine blurred behind. (v1 was rejected as too cluttered: a conveyor of identical bowls, bins and cartons.) Category is fixed to Pet Supplies, and nothing in frame may imply a certificate, award or accreditation — SOURDEN issues none — and no live animals appear. A factory or supplier facility actually being looked at: a production floor during a walk-through, a worker inspecting output, materials or components being reviewed, or specification documents worked through on site next to the goods they describe. Must read as someone assessing the supplier, not a tour. No certificate, accreditation mark or laboratory report — SOURDEN issues none. No handshake, no meeting room, no China clichés, no AI-perfect factory floor.',
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
      'SHIPPED FRAME v2 (2026-10-01, Home & Living — the label this slot carried until that category became Wood Products on 2026-10-06): ONE subject only, a single taped carton standing alone on a bare warehouse floor with the wrapped pallet and shutter door blurred behind. (v1 was rejected as too cluttered: pallet truck, straw-packed plates and textile rolls all in one frame.) The frame is now fixed to shipping from China and it stays indoors. Freight preparation rather than freight romance: packed cartons stacked and labelled, goods palletized and wrapped, a loading bay during loading, or a warehouse aisle of staged shipments. The brief bans cliché cargo-container hero shots (container stacks at sunset, a lone container against a sky) — keep it inside the warehouse where the work is visible. No China clichés.',
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
    width: 1920,
    height: 1080,
    ratio: '16:9',
    label: 'HOW IT WORKS',
    /* alt is EMPTY on purpose: decorative background (copy overlaid). */
    alt: '',
    role: /** @type {ImageRole} */ ('hero'),
    artDirection:
      'One documentary frame of the whole sourcing journey on a single worktable, composed for a background band: folded textile samples, a woven basket, a ceramic bowl, a tape dispenser, a magnifier and a steel rule, then sealed bags of packed garments and plain cardboard shipping cartons — the whole workflow gathered in the RIGHT two thirds of a 16:9 frame, with the left third empty for the overlaid copy. No people, no screens, no readable text. Banned: multi-image collages, generic handshakes, staged meeting rooms, corporate boardroom scenes, and every China cliché (Great Wall, national flag, panda, container-port sunset, globe), as well as artificially perfect AI factory floors. Never a woodworking or craft scene: no timber, no wooden blanks, no bamboo.',
    cropNote:
      'Rendered as a full-bleed background (object-fit: cover) behind the hero band: desktop bands around 2.2-2.5:1 trim top and bottom, phones trim the sides and anchor at 80% so the right-hand cluster stays in view. Keep the workflow right of centre and inside the middle vertical band; the left third stays empty for the overlaid copy. The watermark crop already removed the outer 12.5% right and bottom of the raw.',
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
   * every stock "international business" scene. Since 2026-10-02 it is a
   * 16:9 (1920 × 1080) full-bleed background frame — the copy is overlaid on
   * the photograph, so the subject sits right of centre and the left third
   * stays empty (see the slot's cropNote). */
  aboutHero: {
    file: 'about-hero.webp',
    width: 1920,
    height: 1080,
    ratio: '16:9',
    label: 'ABOUT SOURDEN',
    /* alt is EMPTY on purpose: decorative background (copy overlaid). */
    alt: '',
    role: /** @type {ImageRole} */ ('hero'),
    artDirection:
      'One documentary frame of the buyer\u2019s comparison bench, composed for a background band: three supplier versions of one cosmetic product (a frosted cream jar, a white pump bottle and an aluminium tube) compared side by side on a light table with blank swatch cards, a steel ruler and a coiled measuring tape, the whole arrangement in the RIGHT two thirds of a 16:9 frame with the left third empty for the overlaid copy, a bright workshop softly out of focus behind. Category: Beauty & Personal Care. No posed people, no screens, no readable text, no logos. Banned alongside the site-wide clichés (Great Wall, national flag, panda, container-port sunset, globe): handshakes, boardrooms, staged meeting rooms, office stock scenes, and rustic timber-workshop drift — no timber, no wooden workbench, no wood offcuts. v6 (2026-10-02) recomposes v5 for the background shape.',
    cropNote:
      'Rendered as a full-bleed background (object-fit: cover) behind the hero band: desktop bands around 2.2-2.5:1 trim top and bottom, phones trim the sides and anchor at 80% so the right-hand cluster stays in view. Keep the three products right of centre and inside the middle vertical band; the left third stays empty for the overlaid copy. The watermark crop already removed the outer 12.5% right and bottom of the raw.',
  },

  /* ----------------------------------------------------------------- faq -- */
  /* `/faq` hero — the page's only image.
   *
   * The FAQ brief (§2) specifies the eyebrow, the H1, the supporting paragraph
   * and two actions, and names NO image. The hero device every other page uses
   * carries one, so the choice was a hero without an image — which would be a
   * second hero design — or this slot. It stays on the split-column hero (the
   * 4:3 `ServicesHero` frame) rather than the full-bleed background the
   * homepage, /services, /how-it-works, /industries and /about moved to on
   * 2026-10-02, so it keeps 1600 × 1200 / 4:3 and a real alt.
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
    alt: 'A calm, organised sourcing still life on a warm ivory surface: a speckled stoneware carafe and two matching cups beside an open kraft box, a closed notebook with a steel ruler, blank specification sheets, a ceramic lid and a cork stopper, arranged on the right of the frame with clear empty space on the left.',
    role: /** @type {ImageRole} */ ('hero'),
    artDirection:
      'One premium minimal editorial still life: a tidy sourcing workspace — sourcing-desk objects and homeware samples (a speckled stoneware carafe and two matching cups), an open kraft packaging box, a blank closed notebook, blank specification sheets, a steel ruler and two loose components (a ceramic lid, a cork stopper) — spaced with generous gaps on a warm ivory seamless surface, the whole arrangement on the RIGHT two thirds of the frame and the left third completely empty. No people, no hands, no screens, no readable text, no logos, no question-mark graphics, no icons, no lightbulbs, no headsets. Banned alongside the site-wide clichés (Great Wall, national flag, panda, container-port sunset, globe, handshake, boardroom): cluttered desks, and rustic timber-workshop drift — no timber, no wooden blanks, no bamboo. v5 (2026-10-02) replaced the ceramic-comparison-with-hand frame per Songlin\u2019s minimal-editorial brief.',
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
    width: 1920,
    height: 1080,
    ratio: '16:9',
    label: 'WHAT WE SOURCE',
    /* alt is EMPTY on purpose: decorative background (copy overlaid). */
    alt: '',
    role: /** @type {ImageRole} */ ('hero'),
    artDirection:
      'Breadth shown honestly in one documentary frame: several DIFFERENT kinds of product — a moulded plastic tray, folded textiles, a plain kraft carton, a glass jar and machined metal fittings — gathered on a packing table in the RIGHT two thirds of a 16:9 frame, with the left third empty for the overlaid copy. Mixed materials and unfinished packs are better than polished hero products. Banned: artificial collages, a neat grid of unrelated products on white, generic world maps, the Great Wall, a flag, a panda, handshakes, staged meeting rooms and artificially perfect AI factory floors. Category: deliberately mixed. Never a woodworking or craft scene: no timber, no wood offcuts, no wood chips.',
    cropNote:
      'Rendered as a full-bleed background (object-fit: cover) behind the hero band: desktop bands around 2.2-2.5:1 trim top and bottom, phones trim the sides and anchor at 80% so the right-hand cluster stays in view. Keep the objects right of centre and inside the middle vertical band; the left third stays empty for the overlaid copy. The watermark crop already removed the outer 12.5% right and bottom of the raw.',
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
  industryWoodProducts: {
    file: 'industry-wood-products.svg',
    width: 1200,
    height: 900,
    ratio: '4:3',
    label: 'WOOD PRODUCTS',
    alt: 'A plain wooden pallet and a stack of machined timber components resting on a workbench, the workshop behind out of focus.',
    role: /** @type {ImageRole} */ ('industry'),
    placeholder: true,
    artDirection:
      'Category for this slot: Wood Products. Documentary workshop frame — a pallet and a few timber components on a bench, shallow depth of field, subject centred inside the middle 60%. Unlike every other slot here, wood and timber ARE the subject; the neighbouring slots ban them precisely to keep the nine cards distinct. Banned as the main visual and as the first thing in frame: coffins, caskets, funerary and memorial objects, cemeteries and funeral scenes. Wood Products lists Funeral & Memorial Products among its product types, but that is copy, not the picture — the frame must stay on ordinary workshop work. Also banned: China clichés (flag, Great Wall), factory assembly-line stock, an overly perfect AI-rendered plant, branded logos, readable text.',
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
  /*
   * SHIPPED FRAME (2026-10-05, Songlin): this slot used to be an AI still life —
   * one plush dog bed on a stainless bench, with `No live animals, no studio pet
   * portraits` written into its art direction. The owner supplied a real
   * photograph instead and chose to swap BOTH consumers of this slot, so the
   * homepage grid's Pet Supplies card carries the same frame as the category
   * page hero — one file, no orphan. Because the frame is now a real pet
   * portrait, the old ban is gone and the alt below states what is actually in
   * the picture (it is the only image on the site whose subject is an animal,
   * and the only stated as such).
   */
  industryPetSupplies: {
    file: 'industry-pet-supplies.webp',
    width: 1200,
    height: 900,
    ratio: '4:3',
    label: 'PET SUPPLIES',
    alt: 'A tabby cat lying on a light chair beside a grey cushion, with a husky dog sitting behind it with its mouth open and its tongue out.',
    role: /** @type {ImageRole} */ ('industry'),
    artDirection:
      'Category for this slot: Pet Supplies — shipped 2026-10-05 as a real photograph (Unsplash: Tran Mau Tri Tam), NOT generated. Frame: a tabby cat lying in front of a husky dog with its tongue out, on a white chair against grey cushions, indoor, daylight. It is the brief\'s documentary register applied to the category rather than to a bench still life, and it asserts nothing about SOURDEN, a supplier or an order. If the photography is ever replaced, keep it a real photograph of the category, keep the animals in the middle band (the homepage card crops to roughly 60% of the width) and keep the file name so the swap stays an overwrite.',
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

  /* --------------------------------------- industry source range images -- */
  /*
   * Nine slots for the nine `/industries/<slug>` pages' "What We Can Source"
   * module (2026-10-03). Each sits on the RIGHT of that section as one large
   * product-RANGE image — several items from the category gathered in one
   * editorial frame — the visual proof beside the product-category list.
   *
   * All nine went live as AI-generated documentary photographs on 2026-10-03
   * (1200x900 WebP, one calm group of 4-6 category-typical items, 50mm,
   * shallow depth of field, warm neutral grade, no wood). The frame must stay
   * a premium editorial
   * product photograph, 4:3 or close, with NO real brand
   * logos, NO China shorthand (Great Wall / flag / panda / container sunset)
   * and NO artificially-perfect AI product render. Category is fixed per slot
   * and must NOT drift into woodworking/craft imagery (no timber, no wood).
   */
  sourceConsumerProducts: {
    file: 'source-consumer-products.webp',
    width: 1200,
    height: 900,
    ratio: '4:3',
    label: 'CONSUMER PRODUCTS — SOURCED RANGE',
    alt: 'A stainless insulated bottle, silicone kitchen utensils, a lidded container, a ceramic mug and a folded umbrella arranged together on a pale surface.',
    role: /** @type {ImageRole} */ ('industry'),
    artDirection:
      'Category for this slot: Consumer Products. Documentary photo — a stainless insulated bottle, silicone kitchen utensils, a lidded container, a ceramic mug and a folded umbrella gathered in one calm group on a pale seamless surface, 50mm, shallow depth of field, warm neutral grade. No brand logos, no people, no readable text, no wood.',
  },
  sourceBeautyPersonalCare: {
    file: 'source-beauty-personal-care.webp',
    width: 1200,
    height: 900,
    ratio: '4:3',
    label: 'BEAUTY & PERSONAL CARE — SOURCED RANGE',
    alt: 'A hair dryer, a flat iron, makeup brushes and a jar of cream arranged together on a pale surface.',
    role: /** @type {ImageRole} */ ('industry'),
    artDirection:
      'Category for this slot: Beauty & Personal Care. Documentary photo — a hair dryer, a flat iron, makeup brushes and a jar of cream gathered in one calm group on a pale seamless surface, 50mm, shallow depth of field, warm neutral grade. No formulation claims, no brand logos, no readable text, no wood.',
  },
  sourceWoodProducts: {
    file: 'source-wood-products.svg',
    width: 1200,
    height: 900,
    ratio: '4:3',
    label: 'WOOD PRODUCTS — SOURCED RANGE',
    alt: 'A wooden storage box, a small crate, a turned timber dish and a plain wooden lid arranged together on a pale surface.',
    role: /** @type {ImageRole} */ ('industry'),
    placeholder: true,
    artDirection:
      'Category for this slot: Wood Products. Documentary photo — a wooden storage box, a small crate, a turned timber dish and a wooden lid gathered in one calm group on a pale seamless surface, 50mm, shallow depth of field, warm neutral grade. Banned as the subject: coffins, caskets, funerary and memorial objects, cemeteries. No brand logos, no people, no readable text.',
  },
  sourcePackaging: {
    file: 'source-packaging.webp',
    width: 1200,
    height: 900,
    ratio: '4:3',
    label: 'PACKAGING — SOURCED RANGE',
    alt: 'Blank paper boxes, a glass jar, a paper cup and a bubble mailer arranged together on a pale surface.',
    role: /** @type {ImageRole} */ ('industry'),
    artDirection:
      'Category for this slot: Packaging. Documentary photo — blank paper boxes, a glass jar, a paper cup and a bubble mailer gathered in one calm group on a pale seamless surface, 50mm, shallow depth of field, warm neutral grade. Blank unprinted stock only, no logos, no readable text, no wood.',
  },
  sourceElectronicsAccessories: {
    file: 'source-electronics-accessories.webp',
    width: 1200,
    height: 900,
    ratio: '4:3',
    label: 'ELECTRONICS & ACCESSORIES — SOURCED RANGE',
    alt: 'A laptop, a smartphone, a smartwatch and a speaker arranged together on a pale surface.',
    role: /** @type {ImageRole} */ ('industry'),
    artDirection:
      'Category for this slot: Electronics & Accessories. Documentary photo — a laptop, a smartphone, a smartwatch and a speaker gathered in one calm group on a pale seamless surface, screens off, 50mm, shallow depth of field, warm neutral grade. No brand logos, no readable text, no wood.',
  },
  sourceIndustrialProducts: {
    file: 'source-industrial-products.webp',
    width: 1200,
    height: 900,
    ratio: '4:3',
    label: 'INDUSTRIAL PRODUCTS — SOURCED RANGE',
    alt: 'A machined gear, a ball bearing, a wrench and a brass valve arranged together on a pale surface.',
    role: /** @type {ImageRole} */ ('industry'),
    artDirection:
      'Category for this slot: Industrial Products. Documentary photo — a machined gear, a ball bearing, a wrench and a brass valve gathered in one calm group on a pale seamless surface, 50mm, shallow depth of field, warm neutral grade. Cast part numbers only, no brand logos, no readable spec text, no wood.',
  },
  sourceSportsOutdoors: {
    file: 'source-sports-outdoors.webp',
    width: 1200,
    height: 900,
    ratio: '4:3',
    label: 'SPORTS & OUTDOORS — SOURCED RANGE',
    alt: 'A rolled yoga mat, a dumbbell, a steel water bottle, a jump rope and a carabiner arranged together on a pale surface.',
    role: /** @type {ImageRole} */ ('industry'),
    artDirection:
      'Category for this slot: Sports & Outdoors. Documentary photo — a rolled yoga mat, a dumbbell, a steel water bottle, a jump rope and a carabiner gathered in one calm group on a pale seamless surface, 50mm, shallow depth of field, warm neutral grade. Gear only, no people, no brand logos, no readable text, no wood.',
  },
  sourcePetSupplies: {
    file: 'source-pet-supplies.webp',
    width: 1200,
    height: 900,
    ratio: '4:3',
    label: 'PET SUPPLIES — SOURCED RANGE',
    alt: 'A stainless pet bowl, a rubber ball, a flying disc, a nylon leash and a rope toy resting on a pale surface.',
    role: /** @type {ImageRole} */ ('industry'),
    artDirection:
      'Category for this slot: Pet Supplies. Documentary photo — a stainless pet bowl, a rubber ball, a flying disc, a nylon leash and a rope toy resting flat in one calm group on a pale seamless surface, 50mm, shallow depth of field, warm neutral grade. No live animals, no brand logos, no readable text, no wood.',
  },
  sourceApparelFootwearBags: {
    file: 'source-apparel-footwear-bags.webp',
    width: 1200,
    height: 900,
    ratio: '4:3',
    label: 'APPAREL, FOOTWEAR & BAGS — SOURCED RANGE',
    alt: 'A leather handbag, a folded garment, a baseball cap, sunglasses and a sneaker arranged together on a pale surface.',
    role: /** @type {ImageRole} */ ('industry'),
    artDirection:
      'Category for this slot: Apparel, Footwear & Bags. Documentary photo — a leather handbag, a folded garment, a baseball cap, sunglasses and a sneaker arranged as one calm flat-lay group on a pale seamless surface, 50mm, shallow depth of field, warm neutral grade. Flat-lay only, never on-model, no brand logos, no readable text, no wood.',
  },

  /* --------------------------------------------------------- case studies -- */
  caseStudyWorldCupJerseys: {
    file: 'case-study-world-cup-jerseys.webp',
    width: 1400,
    height: 1050,
    ratio: '4:3',
    label: 'CASE STUDY IMAGE',
    alt: 'Photograph of a curated collection of generic football jerseys in several colours arranged with a football, representing a seasonal sportswear sourcing project.',
    role: /** @type {ImageRole} */ ('case-study'),
    artDirection:
      'Documentary photograph of the scenario type (seasonal sportswear sourcing). Asserts no customer, figure or outcome.',
  },
  caseStudyCustomLogoProducts: {
    file: 'case-study-custom-logo.webp',
    width: 1200,
    height: 800,
    ratio: '3:2',
    label: 'CASE STUDY IMAGE',
    alt: 'Photograph of a blank unbranded baseball cap resting on a laminate bench, waiting for custom branding.',
    role: /** @type {ImageRole} */ ('case-study'),
    artDirection:
      'Documentary photograph of the scenario type (standard products waiting for custom branding and packaging). Asserts no customer, figure or outcome.',
  },
  caseStudyMultiProductShipment: {
    file: 'case-study-shipment.webp',
    width: 1200,
    height: 800,
    ratio: '3:2',
    label: 'CASE STUDY IMAGE',
    alt: 'Photograph of sealed shipping cartons strapped together on a warehouse floor, prepared for one combined shipment.',
    role: /** @type {ImageRole} */ ('case-study'),
    artDirection:
      'Documentary photograph of the scenario type (multiple products consolidated into one organized shipment). Asserts no customer, figure or outcome.',
  },

  /* ------------------------------------------------------------ insights -- */
  /* `insightsHero` — the /insights hub hero, a FULL-BLEED BACKGROUND frame.
   *
   * HISTORY, because this slot has died once already. The original
   * `insightsHero` (1600 × 1200, split-column) was deleted rather than left
   * unused when the hub was reduced to a compact text hero — an orphan slot
   * keeps generating a placeholder nothing references, and `check:remote` then
   * asks for an upload no page renders. On 2026-10-02 Songlin asked the hero
   * back in a DIFFERENT form: the photograph as a full-bleed background with
   * the copy overlaid on it. That reverses the brief §2 reading ("Do not make
   * the hero overly large") BY NAME, on the owner's call — the compact
   * text-only hero remains what every other page ships, and this page is the
   * deliberate exception. `InsightsHero.astro` renders it; `ServicesHero` no
   * longer appears on this page at all.
   *
   * 16:9 (1920 × 1080), NOT the site's 4:3 hero frame: the image is
   * object-fit: cover behind a wide band, so a wide source loses less to the
   * crop. Category: mixed research desk (not one product family) — samples,
   * swatches, kraft packaging, blank comparison documents, measuring tools,
   * laptop dark and angled away. Never a woodworking or craft scene: no
   * timber, no wooden blanks, no bamboo. No readable text anywhere; the
   * documents carry only blurred, illegible grey marking.
   */
  insightsHero: {
    file: 'insights-hero.webp',
    width: 1920,
    height: 1080,
    ratio: '16:9',
    label: 'INSIGHTS',
    /* alt is EMPTY on purpose. The photograph is decorative: the hero's copy
       is overlaid on it and carries the meaning, so an empty alt is the
       accessible rendering (same call as `ogDefault`). */
    alt: '',
    role: /** @type {ImageRole} */ ('hero'),
    artDirection:
      'One premium editorial still life of a sourcing research desk in warm ivory, beige and charcoal: ceramic mug, glass bottle and folded fabric swatch beside a fan of blank material-swatch cards, a kraft envelope, a linen notebook, two documents whose pages carry only blurred illegible grey marking, a steel rule and a caliper, with a dark-screened laptop angled away at the back. Objects weighted right of centre; the left of the frame is empty calm surface, because the page\u2019s copy is overlaid there over a light scrim. No people, no readable text, no logos, no Chinese characters, no UI elements, no question marks, no icons.',
    cropNote:
      'Rendered as a full-bleed background (object-fit: cover) behind the hub hero band, so the frame is cropped again on display: desktop bands around 2.2-2.5:1 trim top and bottom, phones trim the sides. Keep the objects in the middle vertical band and right of centre; the left third stays empty for the overlaid copy. The watermark crop already removed the outer 12.5% right and bottom of the raw.',
  },

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

/**
 * Widths `scripts/gen-srcset.mjs` is CAPABLE of emitting. The script only
 * writes those that are smaller than the real file, and records the actual
 * list in `scripts/.srcset-manifest.json`. `srcsetFor` reads that manifest when
 * present, so the `srcset` it emits can never reference a variant that does not
 * exist — even if a slot's declared `width` has drifted from the real file.
 * This list is only the fallback used when the manifest is absent (e.g. a
 * component rendered before `prebuild` has run).
 */
export const VARIANT_WIDTHS = [640, 960, 1280, 1600];

/**
 * Lazily read the variant manifest written by `scripts/gen-srcset.mjs`. Cached
 * after first load. Returns null when absent so callers fall back to
 * `VARIANT_WIDTHS` filtered by the slot's declared width.
 */
let _srcsetManifest = undefined; // undefined = not yet loaded; null = loaded, absent
function srcsetManifest() {
  if (_srcsetManifest !== undefined) return _srcsetManifest;
  try {
    // Resolved from process.cwd() (the project root) rather than
    // import.meta.url: Astro/Vite rewrites import.meta.url during the SSG
    // build, which would break a path relative to this source file. cwd is the
    // package directory for every npm script and for the Cloudflare build.
    const manifestPath = path.resolve(process.cwd(), '.srcset-manifest.json');
    _srcsetManifest = existsSync(manifestPath)
      ? JSON.parse(readFileSync(manifestPath, 'utf8'))
      : null;
  } catch {
    _srcsetManifest = null;
  }
  return _srcsetManifest;
}

/**
 * Build a `srcset` string for a manifest slot: every width-bounded variant
 * below the slot's intrinsic width, then the original at its full width. Pair
 * with a `sizes` attribute so the browser downloads the smallest file that
 * fills the rendered box (a 390px phone pulls the 640w variant instead of the
 * ~1920w original). Throws on unknown keys, like `img`.
 *
 * @param {keyof typeof images} key
 * @returns {string}
 */
export function srcsetFor(key) {
  const asset = images[key];
  if (!asset) {
    throw new Error(
      `[media.js] Unknown image key "${key}". Add it to the images manifest before referencing it.`
    );
  }
  // Only a raster asset has width variants. A `.svg` placeholder is one file at
  // one size, and deriving `@640w.webp` names from it would send the browser to
  // files that were never written — the slot's srcset is just its own file.
  if (!asset.file.endsWith('.webp')) {
    return `${IMAGE_DIR}/${asset.file} ${asset.width}w`;
  }

  const base = asset.file.replace(/\.webp$/, '');

  const manifest = srcsetManifest();
  let variantWidths;
  let intrinsic = asset.width;
  if (manifest && manifest[asset.file]) {
    variantWidths = manifest[asset.file].widths;
    intrinsic = manifest[asset.file].intrinsic || asset.width;
  } else {
    variantWidths = VARIANT_WIDTHS.filter((w) => w < asset.width);
  }

  const parts = variantWidths.map((w) => `${IMAGE_DIR}/${base}@${w}w.webp ${w}w`);
  parts.push(`${IMAGE_DIR}/${asset.file} ${intrinsic}w`);
  return parts.join(', ');
}

