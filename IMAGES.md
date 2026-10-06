# SOURDEN — image shot list

The photography brief for this site, derived from `src/data/media.js`. That
manifest is the single source of truth: it drives the markup and the slot list,
so this document is a readable copy of it. If the two ever disagree, `media.js`
wins.

**Every slot is filled with a real photograph or a real brand asset** as of
2026-10-06 — `placeholder: true` is set on none of them, and `npm run
placeholders` (`public/images/*.svg`) now has nothing left to generate. The
entries below are the brief for replacing one, not a to-do list.

---

## What to shoot

Documentary, not stock. The photographs should look like they were taken inside
a real production environment on an ordinary working day.

**Preferred subjects** (spec §23)

- Factory floor
- Machinery
- Product production
- Quality inspection
- Packaging
- Warehouse
- Materials
- Hands inspecting products
- Finished products in a production environment

**Avoid — clichés that read as stock**

- Great Wall, Chinese flag, panda, globe
- Generic handshake
- Generic shipping container
- Artificial "perfect AI factory" scenes

No heavy filters, no heavy overlays, no vignettes. Colour grade only for
consistency between shots.

---

## Crop safety — the rule that matters most

Images render with `object-fit: cover`, so the frame crops the source
symmetrically about its **centre**. A 4:3 image in a 4:5 frame keeps only about
60% of its width.

> **Keep the subject inside the middle 60% of the frame.** Treat the outer 20%
> on every side as expendable. Nothing that carries meaning — a face, a hand, a
> product, a logo — should sit there.

The placeholder artwork followed the same rule: its label sat in the centred 54%
band, sized per artwork so it always survived. A corner marker does not — that
is exactly the bug this rule exists to prevent. The rule still governs
replacement photographs, which are cropped the same way.

---

## Slots

Legend: **role** · recommended source size · aspect ratio · where it appears

### Hero — `hero-sourcing.webp`

| | |
| --- | --- |
| Source | **1920 × 1080** (or larger, same ratio) |
| Ratio | 16:9 — required, not optional |
| Appears | Homepage hero, full-bleed background, above the fold |

Factory production, quality inspection, product detail, packaging, warehouse,
machinery, materials, or worker hands handling products. The copy is overlaid
on this image — the subject cluster sits in the right two thirds, the left
third stays empty for the headline — so prefer a calm, mid-detail composition
over a busy one.

**Crop:** a full-bleed background (`object-fit: cover`) behind the hero band:
desktop trims top and bottom into a wide band, phones trim the sides and anchor
at 80% so the right-hand cluster stays in view. Keep the subject cluster in the
RIGHT two thirds; the left third stays empty for the overlaid copy.

**Loads eagerly** with `fetchpriority="high"` — export WebP at ~75% quality,
target under 250 KB.

---

### Services area — eleven slots

Six for the `/services` overview and five for the detail pages (one 1600-wide
hero each).

| File | Label | Source size | Ratio | Used by |
| --- | --- | --- | --- | --- |
| `services-hero.webp` | Sourcing Services | **1920 × 1080** | 16:9 | `/services` hero |
| `service-product-sourcing.webp` | Product Sourcing | **1200 × 900** | 4:3 | `/services` row |
| `service-supplier-verification.webp` | Supplier Verification | **1200 × 900** | 4:3 | `/services` row |
| `service-purchasing-management.webp` | Purchasing Management | **1200 × 900** | 4:3 | `/services` row |
| `service-quality-control.webp` | Quality Control | **1200 × 900** | 4:3 | `/services` row |
| `service-shipping-from-china.webp` | Shipping from China | **1200 × 900** | 4:3 | `/services` row |
| `service-product-sourcing-hero.webp` | Product Sourcing | **1600 × 1200** | 4:3 | detail hero |
| `service-supplier-verification-hero.webp` | Supplier Verification | **1600 × 1200** | 4:3 | detail hero |
| `service-purchasing-management-hero.webp` | Purchasing Management | **1600 × 1200** | 4:3 | detail hero |
| `service-quality-control-hero.webp` | Quality Control | **1600 × 1200** | 4:3 | detail hero |
| `service-shipping-from-china-hero.webp` | Shipping from China | **1600 × 1200** | 4:3 | detail hero |

The five row images and the five detail heroes are 4:3 on purpose. The five
row images are shown as **one alternating text ↔ image sequence** on
`/services`, so a mixed set of ratios would make the column widths jump from
row to row. `services-hero` is the exception — it moved to the full-bleed
background shape (16:9, copy overlaid) on 2026-10-02, alongside the homepage,
`/industries`, `/how-it-works` and `/about` heroes. Keep the detail-hero
framing calm — it sits beside the H1.

**Loads eagerly** — the six hero slots (`services-hero` and the five
`*-hero`) sit beside an H1 with `priority`, so export them WebP at ~75% quality,
target under 250 KB each. The five `1200 × 900` row images load lazily.

**Why every detail page has its own hero slot rather than reusing the row
image:** they appear at different sizes. A row image is a 520px-tall
half-column on `/services`; a hero is full-width in a 6-column frame beside the
H1. One file cannot serve both without either a mushy crop of the larger frame
or an upscaled smaller one. It also avoids showing the visitor the same
photograph twice in a row — once on the row they clicked and again on the page
it opened. Eleven slots cost nothing and keep every frame crisp.

- **Sourcing Services** (hero) — documentary sourcing: product sample review,
  supplier/product inspection, packaging review, a manufacturing process,
  warehouse preparation or material inspection. It has to read as a working
  scene.
- **Product Sourcing** — product samples or a supplier sample being examined:
  hands, samples and reference material on a work surface. Not a catalogue
  flat-lay, not a studio product shot.
- **Supplier Verification** — a factory walk-through, production capability
  check, material/component review, or documentation being worked through on
  site. **No certificate, accreditation mark or laboratory report** — Sourden
  issues none.
- **Purchasing Management** — order and specification documents beside the goods
  they describe, product preparation, production follow-up, or packing in
  progress. Keep paperwork generic and unreadable; do not photograph invented
  figures.
- **Quality Control** — measuring, counting quantities, appearance checks,
  packaging inspection or QC notes being recorded. Hands and product, **not a
  laboratory**, and nothing that implies accredited third-party testing.
- **Shipping from China** — packaging, warehouse dispatch, cartons being
  labelled and staged, or pallet preparation. Realistic logistics, not a
  container-port sunset with a giant ship or a globe.

Target under 120 KB each; the hero under 250 KB.

---

### Industries — nine slots

| File | Label | Source size | Ratio |
| --- | --- | --- | --- |
| `industry-consumer-products.webp` | Consumer Products | **1200 × 1500** | 4:5 portrait |
| `industry-beauty-personal-care.webp` | Beauty & Personal Care | **1200 × 900** | 4:3 |
| `industry-wood-products.webp` | Wood Products — **real photograph** (2026-10-06) | **1200 × 900** | 4:3 |
| `industry-packaging.webp` | Packaging | **1200 × 900** | 4:3 |
| `industry-electronics-accessories.webp` | Electronics & Accessories | **1200 × 900** | 4:3 |
| `industry-industrial-products.webp` | Industrial Products | **1200 × 1500** | 4:5 portrait |
| `industry-sports-outdoors.webp` | Sports & Outdoors | **1200 × 900** | 4:3 |
| `industry-pet-supplies.webp` | Pet Supplies | **1200 × 900** | 4:3 |
| `industry-apparel-footwear-bags.webp` | Apparel, Footwear & Bags | **1200 × 900** | 4:3 |

Two of the nine are portrait because the grid is deliberately asymmetric (spec
§12) — keep those framings upright. The last slot spans the full grid width on
tablet, so keep its subject centred; the sides get cropped hardest there.

- **Consumer Products** — finished consumer goods in a production or packing
  environment.
- **Beauty & Personal Care** — a filling line, component trays, or packaging of
  beauty / personal-care products.
- **Wood Products** — woodworking / manufacturing, or finished wooden goods
  (pallets, crates, storage boxes, packaging, furniture components, displays).
  No coffin as the lead visual, no cemetery, no funeral scene.
- **Packaging** — printing, die-cutting, or neatly stacked retail packaging.
- **Electronics & Accessories** — an assembly bench, cable/component trays, or a
  functional test jig.
- **Industrial Products** — machinery, tooling, or metal / industrial component
  production. Portrait crop.
- **Sports & Outdoors** — assembly, stitching or packing of sports and outdoor
  equipment. Gear, not lifestyle models.
- **Pet Supplies** — moulding, assembly or retail packaging of pet products.
  **Shipped 2026-10-05 as a real photograph, not a brief-conform still life:**
  Songlin supplied a cat-and-dog frame and had it substituted for the AI bench
  shot, on both the homepage grid card and the `/industries/pet-supplies` hero.
  The old `No live animals` line is therefore void on this slot only — it still
  applies to `sourcePetSupplies` and every other Pet Supplies slot. The frame is
  a category photograph and asserts nothing about SOURDEN; if it is replaced,
  keep it a real photograph, keep the animals in the middle band (the homepage
  card crops to roughly 60% of the width) and keep the file name.
- **Apparel, Footwear & Bags** — cutting tables, stitching lines or finishing.
  Flat-lay or production floor, not on-model studio shots.

Target under 120 KB each.

---

### Industries overview page — one slot

| File | Label | Source size | Ratio | Used by |
| --- | --- | --- | --- | --- |
| `industries-hero.webp` | WHAT WE SOURCE | **1920 × 1080** | 16:9 | `/industries` hero |

**This page deliberately has exactly one image.** The nine-entry category
directory is copy-led — a number, a name, a description, the example product
types and one action per entry — and it carries no photographs on purpose. Nine
category photographs in a nine-cell layout is a product grid whatever the
surrounding copy says, and the brief asks for "an editorial sourcing directory,
not an ecommerce category page". The nine `industry-*.webp` slots above are the
homepage grid's, not this page's; do not reuse them here.

**Loads eagerly** — it sits beside an H1 with `priority`. WebP at ~75% quality,
under 250 KB.

- **Industries hero** — documentary evidence of *breadth*: several different
  kinds of product being handled together in one real working context. Samples
  on a bench, goods from more than one category staged for inspection, or a
  production or packing area where two product lines are both visible. Mixed
  materials and unfinished packs read better than polished hero products.
  **Avoid** — an artificial collage, a neat grid of unrelated products on white,
  a world map, the Great Wall, a flag, a panda, a generic handshake, a staged
  meeting room, or an artificially perfect AI factory floor.

Crop safety is tighter here than elsewhere: it is a full-bleed background
(`object-fit: cover`) with the copy overlaid on the left, so keep the subject
cluster in the RIGHT two thirds and leave the left third clear of anything that
matters. Phones trim the sides and anchor at 80% so the cluster stays in view.

---

### Industries category pages — nine source-range slots

| File | Label | Source size | Ratio | Used by |
| --- | --- | --- | --- | --- |
| `source-consumer-products.webp` | Consumer Products — sourced range | **1200 × 900** | 4:3 | `/industries/consumer-products` |
| `source-beauty-personal-care.webp` | Beauty & Personal Care — sourced range | **1200 × 900** | 4:3 | `/industries/beauty-personal-care` |
| `source-wood-products.webp` | Wood Products — sourced range — **real photograph** (2026-10-06) | **1200 × 900** | 4:3 | `/industries/wood-products` |
| `source-packaging.webp` | Packaging — sourced range | **1200 × 900** | 4:3 | `/industries/packaging` |
| `source-electronics-accessories.webp` | Electronics & Accessories — sourced range | **1200 × 900** | 4:3 | `/industries/electronics-accessories` |
| `source-industrial-products.webp` | Industrial Products — sourced range | **1200 × 900** | 4:3 | `/industries/industrial-products` |
| `source-sports-outdoors.webp` | Sports & Outdoors — sourced range | **1200 × 900** | 4:3 | `/industries/sports-outdoors` |
| `source-pet-supplies.webp` | Pet Supplies — sourced range | **1200 × 900** | 4:3 | `/industries/pet-supplies` |
| `source-apparel-footwear-bags.webp` | Apparel, Footwear & Bags — sourced range | **1200 × 900** | 4:3 | `/industries/apparel-footwear-bags` |

Each of these sits in the right-hand column of its category page's "What We
Can Source" module (added 2026-10-03), beside the product-category list. It is a
**range** image — several different items from the category gathered in one
premium editorial frame — not a single product and not a grid. Keep it 4:3,
shallow depth of field, mixed materials, no real brand logos, no China shorthand
(Great Wall / flag / panda / container sunset), and no artificially-perfect AI
render. Category is fixed per slot; never drift into woodworking or craft
imagery (no timber, no wood).

All nine went live as AI-generated documentary photographs on 2026-10-03
(38–75 KB each, quality 82, single calm group of four items, 50mm, shallow
depth of field, warm neutral grade).

Target under 120 KB each. The category-page hero images above (`industry-*.webp`)
are separate slots — the hero is a single production still, the source range is
a group of finished products. Wood Products is the one exception to the
"no timber" rule: wood IS that slot's subject (see the nine-slot list above).

---

### How It Works page — one slot

| File | Label | Source size | Ratio | Used by |
| --- | --- | --- | --- | --- |
| `how-it-works-hero.webp` | HOW IT WORKS | **1920 × 1080** | 16:9 | `/how-it-works` hero |

**This page deliberately has exactly one image too.** Every one of its sixteen
sections is a process description — the five-stage rail, what to include in a
request, the comparison factors, what the customer provides against what Sourden
coordinates, the growth path, the worked example and nine FAQ answers. A
photograph beside any of those would be decoration standing in for content the
brief supplies in words, and the brief forbids presenting a hypothetical as a
real project. The §13 example is a **framed text panel**, not a photo slot, on
purpose — see `HiExample.astro`.

**Loads eagerly** — it sits beside an H1 with `priority`. WebP at ~75% quality,
under 250 KB.

- **How It Works hero** — the process made visible *as work*: an order being
  coordinated rather than a product being admired. Good subjects are a packing
  bench with goods checked against a printed sheet, samples laid out for a
  pre-shipment inspection, or two people at a workstation reviewing a quotation
  or a specification alongside the actual item. Paperwork, cartons and
  unfinished goods read better than finished product on a clean surface — the
  page is about the process, not the merchandise.
  **Avoid** — a neat grid of unrelated products on white, a staged boardroom
  meeting, a generic handshake, a stock "logistics" shot of a container port or
  a cargo plane, a world map, the Great Wall, a flag, a panda, and an
  artificially perfect AI factory floor.

Crop safety is the background-hero rule: `object-fit: cover` re-crops the 16:9
source into a wide band with the copy overlaid on the left, so keep the subject
cluster in the RIGHT two thirds and leave the left third clear of anything that
matters. Phones trim the sides and anchor at 80% so the cluster stays in view.

---

### About page — one slot

| File | Label | Source size | Ratio | Used by |
| --- | --- | --- | --- | --- |
| `about-hero.webp` | ABOUT SOURDEN | **1920 × 1080** | 16:9 | `/about` hero |

**This slot is a work photograph on purpose, not a founder portrait.** The page
is the site's brand and trust page, so a portrait — a founder, a team, an office
— is the obvious thing to shoot there. None of those exist as a verified fact
about this business, and inventing one is exactly what the brief's §16 forbids.
Showing the work in the same documentary register as the rest of the site is the
one image the page can honestly carry.

**Loads eagerly** — it sits beside an H1 with `priority`. WebP at ~75% quality,
under 250 KB.

- **About hero** — one frame of sourcing work being done by hand: samples
  compared against a specification, an inspection in progress, materials or
  packaging handled, goods checked in a warehouse. Brief §01 asks for
  "authentic and operational rather than corporate". The person matters only as
  the person doing the work — no posed portrait, no facing-the-camera smile, no
  team lineup, no handshake, no boardroom, no stock "international business"
  scene.

### FAQ page — one slot

| File | Label | Source size | Ratio | Used by |
| --- | --- | --- | --- | --- |
| `faq-hero.webp` | FAQ | **1600 × 1200** | 4:3 | `/faq` hero |

**This page names no image in its brief, and it still gets one.** The brief's
§2 specifies the eyebrow, the H1, the supporting paragraph and two actions and
stops there. Every other page hero on the site carries a documentary image, so
the alternative to this slot was a second hero design — text-only — which would
be a new visual language for one page. Same 1600 × 1200 / 4:3 as the
split-column heroes (the five service detail pages and `/sourcing-request`),
so it shares their frame and crop rule — not the 16:9 background hero.

**What it must not be.** An FAQ page is the easiest place on the site to reach
for a symbol, and every symbol is wrong here: a question mark, a speech bubble,
a glowing lightbulb, a headset, a smiling person on a phone, a neat row of
support icons. The brief asks for a "professional sourcing company's practical
knowledge base" — those props make it look like a call centre.

**Loads eagerly** — it sits beside an H1 with `priority`. WebP at ~75% quality,
under 250 KB.

- **FAQ hero** — one frame of a sourcing decision being worked through by hand:
  several suppliers' samples or units of the same product compared side by side,
  samples checked against a printed specification, quotations or requirement
  documents worked through beside the goods they describe, or a pre-shipment
  inspection in progress. The questions this page answers are mostly about
  choosing between options (supplier research, comparison, verification,
  samples, inspection), so the frame that matches the content is a comparison in
  progress rather than a generic factory shot. Banned: question marks, speech
  bubbles, lightbulbs, headsets, call-centre imagery, icon grids, and the
  site-wide clichés.

### Case studies — three slots

| File | Source size | Ratio |
| --- | --- | --- |
| `case-study-world-cup-jerseys.webp` | **1024 × 765** | 4:3 |
| `case-study-custom-logo.webp` | **1024 × 687** | 3:2 |
| `case-study-shipment.webp` | **1200 × 800** | 3:2 |

All three shipped as photographs on 2026-10-02. An earlier pair
(`case-study-christmas-tree.*`, `case-study-sports-jerseys.*`) retired with their
case studies and the files are gone — do not re-add them.

**Only to be replaced once the real project photograph exists and is cleared for
publication.** Do not substitute a generic factory shot — a case study image
that is not from that project is fabricated evidence, which the brief forbids
outright (spec §17, §39, §43).

A third case-study slot is reserved in `src/data/caseStudies.js` and stays
unlinked until it has a real subject.

---

### Insights hub — one slot

| File | Source size | Ratio |
| --- | --- | --- |
| `insights-hero.webp` | **1920 × 1080** | 16:9 |

**The first full-bleed background hero** — the shape has since spread to the
homepage, `/services`, `/industries`, `/how-it-works` and `/about` (shared
`BackgroundHero.astro`). The photograph sits behind the hub's copy; a
left-weighted scrim of the hero ivory (`--scrim-hero`, tokens) keeps the
overlaid text legible and fades out before the objects on the right. 16:9
because `object-fit: cover` re-crops it into a wide band — a wide source loses
less.

The copy overlaid on it carries the page's meaning, so the slot's `alt` is
**empty on purpose** (decorative image; same call as `ogDefault`).

- **Insights hero** — a sourcing research desk, not a single product: samples,
  material swatches, kraft packaging, a notebook, measuring tools and supplier
  comparison documents whose pages carry only blurred, illegible grey marking,
  a dark-screened laptop angled away at the back. Objects right of centre; the
  left of the frame stays empty calm surface, because the copy is overlaid
  there. Banned: readable text, logos, Chinese characters, people, question
  marks, icons, UI elements, holograms, generic stock office, and the
  site-wide clichés.

The slot previously lived here as a 1600 × 1200 split-column frame and was
**deleted** (2026-09) when the hub went text-only; it came back on 2026-10-02
in this background form at the owner's request. History in `media.js`.

**The twelve article cards still carry no image, and that remains the brief's
own preference:** a clean text card beats a poor stock photograph (§7).
`imageKey` is `null` on every article in `src/data/insights-articles.js`, where
the field is documented as reserved-but-unused — giving one a real photograph
later is a data edit and nothing else. The gate asserts the hub renders exactly
ONE image in `main` — this hero — and no card images.

---

### Insights — three slots (the HOMEPAGE's §18 cards) ✱

**These belong to the homepage, not to `/insights`.** Editing or replacing them
changes `/` and never the hub.

| File | Source size | Ratio |
| --- | --- | --- |
| `insight-supplier-research.webp` | **1400 × 933** | 3:2 |
| `insight-supplier-verification.webp` | **1200 × 800** | 3:2 |
| `insight-trading-company.webp` | **1200 × 800** | 3:2 |

- **Supplier research** — supplier research, sampling, or side-by-side product
  comparison.
- **Supplier verification** — a factory walk-through, capability check, or
  inspection documentation.
- **Trading company** — a manufacturer's production line versus a trading office
  or warehousing operation. The pair should read as a genuine contrast.

Target under 120 KB each.

---

### Social — `og-default.png`

| | |
| --- | --- |
| Source | **1200 × 630** |
| Ratio | 1.91:1 |
| Appears | `og:image` and the Twitter card |

This one is **not a grey placeholder** — it is a real brand card (ink ground,
SOURDEN wordmark, "China Sourcing. Done.", brass rule). All typography, no
photography, no fabricated claims.

> ✅ **Shipped as `og-default.png` (1200 × 630, ~24 KB).** It used to be an SVG,
> and most social platforms do not render SVG — that is why the slot is raster.
> If it is ever redrawn, keep it raster: rebuild from `_img/og-build.cjs`
> (puppeteer + the bundled variable fonts), never regenerate it with an image
> model, and keep `ogDefault.file` pointing at a PNG or JPG.

---

## Replacing a slot

1. Supply the photograph at or above the listed size, same aspect ratio.
2. Export WebP at ~75% quality (or AVIF). Keep hero and feature slots under
   ~250 KB, thumbnails under ~120 KB.
3. Put the file in `public/images/` — the file name may stay or change. The
   `@640w` / `@960w` / `@1280w` / `@1600w` srcset variants are rebuilt from the
   new source by `scripts/gen-srcset.mjs` on every build (`prebuild`); never
   commit them by hand.
4. In `src/data/media.js`: point `file` at the new file and update `alt` to
   describe the actual photograph. (If the slot was still a placeholder, also
   **delete `placeholder: true`** — none are left as of 2026-10-06.)
5. Run `npm run verify`. The audit confirms the reference resolves and the
   image still declares width and height, so layout shift stays at zero.

`npm run placeholders` will never overwrite a slot once its `placeholder` flag
is gone.

---

## Accessibility and performance

- **`alt` text is required** and the audit enforces it. Write what the
  photograph shows, not what the section is about — "Worker inspecting a
  finished circuit board on a bench", not "Electronics sourcing".
- **Width and height are always emitted**, which reserves the space before the
  file loads and keeps Cumulative Layout Shift at zero. Never remove them.
- Everything below the fold loads `lazy` with `decoding="async"`. Only the
  above-the-fold hero images load eagerly, one per page that has one:
  `heroSourcing` (home), `sourcingRequestHero`, `servicesHero`,
  `industriesHero`, `howItWorksHero`, `aboutHero`, `faqHero`, and one per
  `/services/<slug>` detail page — **twelve slots today** (five of the twelve
  are the detail pages), and it grows by one per page that ships with a hero.
- Hover scale is 1.03 over the standard duration, and is suppressed entirely
  under `prefers-reduced-motion`.

See also: [README.md](README.md) for the build and deployment workflow.
