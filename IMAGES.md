# SOURDEN — image shot list

The photography brief for this site, derived from `src/data/media.js`. That
manifest is the single source of truth: it drives both the markup and the
placeholder artwork, so this document is a readable copy of it. If the two ever
disagree, `media.js` wins.

Every slot currently renders a **labelled placeholder** (`npm run placeholders`
regenerates them from the manifest). Nothing here should ship as-is.

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

The placeholder artwork follows the same rule: its label sits in the centred 54%
band, sized per artwork so it always survives. A corner marker does not — that
is exactly the bug this rule exists to prevent.

---

## Slots

Legend: **role** · recommended source size · aspect ratio · where it appears

### Hero — `hero-sourcing.svg`

| | |
| --- | --- |
| Source | **1600 × 1200** (or larger, same ratio) |
| Ratio | 4:3 — required, not optional |
| Appears | Homepage hero, 5-column frame, fixed 520px height, above the fold |

Factory production, quality inspection, product detail, packaging, warehouse,
machinery, materials, or worker hands handling products. Nothing distracts from
the headline beside it — this image sits next to the largest type on the site, so
prefer a calm, mid-detail composition over a busy one.

**Crop:** shown in a 5-column frame at a fixed 520px height, so the sides are
cropped. Keep the subject in the middle ~70%; the outer 15% each side must be
clear of anything that matters.

**Loads eagerly** with `fetchpriority="high"` — export WebP at ~75% quality,
target under 250 KB.

---

### Services area — eleven slots

Six for the `/services` overview and five for the detail pages (one 1600-wide
hero each).

| File | Label | Source size | Ratio | Used by |
| --- | --- | --- | --- | --- |
| `services-hero.svg` | Sourcing Services | **1600 × 1200** | 4:3 | `/services` hero |
| `service-product-sourcing.svg` | Product Sourcing | **1200 × 900** | 4:3 | `/services` row |
| `service-supplier-verification.svg` | Supplier Verification | **1200 × 900** | 4:3 | `/services` row |
| `service-purchasing-management.svg` | Purchasing Management | **1200 × 900** | 4:3 | `/services` row |
| `service-quality-control.svg` | Quality Control | **1200 × 900** | 4:3 | `/services` row |
| `service-shipping-from-china.svg` | Shipping from China | **1200 × 900** | 4:3 | `/services` row |
| `service-product-sourcing-hero.svg` | Product Sourcing | **1600 × 1200** | 4:3 | detail hero |
| `service-supplier-verification-hero.svg` | Supplier Verification | **1600 × 1200** | 4:3 | detail hero |
| `service-purchasing-management-hero.svg` | Purchasing Management | **1600 × 1200** | 4:3 | detail hero |
| `service-quality-control-hero.svg` | Quality Control | **1600 × 1200** | 4:3 | detail hero |
| `service-shipping-from-china-hero.svg` | Shipping from China | **1600 × 1200** | 4:3 | detail hero |

All eleven are 4:3 on purpose. The five row images are shown as **one
alternating text ↔ image sequence** on `/services`, so a mixed set of ratios
would make the column widths jump from row to row. Keep the hero framing calm —
it sits beside the H1.

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
| `industry-consumer-products.svg` | Consumer Products | **1200 × 1500** | 4:5 portrait |
| `industry-beauty-personal-care.svg` | Beauty & Personal Care | **1200 × 900** | 4:3 |
| `industry-home-living.svg` | Home & Living | **1200 × 900** | 4:3 |
| `industry-packaging.svg` | Packaging | **1200 × 900** | 4:3 |
| `industry-electronics-accessories.svg` | Electronics & Accessories | **1200 × 900** | 4:3 |
| `industry-industrial-products.svg` | Industrial Products | **1200 × 1500** | 4:5 portrait |
| `industry-sports-outdoors.svg` | Sports & Outdoors | **1200 × 900** | 4:3 |
| `industry-pet-supplies.svg` | Pet Supplies | **1200 × 900** | 4:3 |
| `industry-apparel-footwear-bags.svg` | Apparel, Footwear & Bags | **1200 × 900** | 4:3 |

Two of the nine are portrait because the grid is deliberately asymmetric (spec
§12) — keep those framings upright. The last slot spans the full grid width on
tablet, so keep its subject centred; the sides get cropped hardest there.

- **Consumer Products** — finished consumer goods in a production or packing
  environment.
- **Beauty & Personal Care** — a filling line, component trays, or packaging of
  beauty / personal-care products.
- **Home & Living** — materials, an assembly bench, or finishing of homewares
  and textiles.
- **Packaging** — printing, die-cutting, or neatly stacked retail packaging.
- **Electronics & Accessories** — an assembly bench, cable/component trays, or a
  functional test jig.
- **Industrial Products** — machinery, tooling, or metal / industrial component
  production. Portrait crop.
- **Sports & Outdoors** — assembly, stitching or packing of sports and outdoor
  equipment. Gear, not lifestyle models.
- **Pet Supplies** — moulding, assembly or retail packaging of pet products.
  No live animals and no studio pet portraits.
- **Apparel, Footwear & Bags** — cutting tables, stitching lines or finishing.
  Flat-lay or production floor, not on-model studio shots.

Target under 120 KB each.

---

### Industries overview page — one slot

| File | Label | Source size | Ratio | Used by |
| --- | --- | --- | --- | --- |
| `industries-hero.svg` | WHAT WE SOURCE | **1600 × 1200** | 4:3 | `/industries` hero |

**This page deliberately has exactly one image.** The nine-entry category
directory is copy-led — a number, a name, a description, the example product
types and one action per entry — and it carries no photographs on purpose. Nine
category photographs in a nine-cell layout is a product grid whatever the
surrounding copy says, and the brief asks for "an editorial sourcing directory,
not an ecommerce category page". The nine `industry-*.svg` slots above are the
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

Crop safety is tighter here than elsewhere: `object-fit: cover` crops
symmetrically from the centre, so keep the subject inside the **middle 70%**
both ways and leave the outer 15% on each side clear of anything that matters.

---

### How It Works page — one slot

| File | Label | Source size | Ratio | Used by |
| --- | --- | --- | --- | --- |
| `how-it-works-hero.svg` | HOW IT WORKS | **1600 × 1200** | 4:3 | `/how-it-works` hero |

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

Crop safety is the same rule as everywhere else: `object-fit: cover` crops
symmetrically from the centre, so keep the subject inside the **middle 70%**
both ways and leave the outer 15% on each side clear of anything that matters.

---

### About page — one slot

| File | Label | Source size | Ratio | Used by |
| --- | --- | --- | --- | --- |
| `about-hero.svg` | ABOUT SOURDEN | **1600 × 1200** | 4:3 | `/about` hero |

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
| `faq-hero.svg` | FAQ | **1600 × 1200** | 4:3 | `/faq` hero |

**This page names no image in its brief, and it still gets one.** The brief's
§2 specifies the eyebrow, the H1, the supporting paragraph and two actions and
stops there. Every other page hero on the site carries a documentary image, so
the alternative to this slot was a second hero design — text-only — which would
be a new visual language for one page. Same 1600 × 1200 / 4:3 as every other
hero, so it shares the frame and the crop rule.

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

### Case studies — two slots

| File | Source size | Ratio |
| --- | --- | --- |
| `case-study-christmas-tree.svg` | **1400 × 1050** | 4:3 |
| `case-study-sports-jerseys.svg` | **1200 × 800** | 3:2 |

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
| `insights-hero.svg` → `insights-hero.webp` | **1920 × 1080** | 16:9 |

**The site's only full-bleed background hero.** The photograph sits behind the
hub's copy (`InsightsHero.astro`); a left-weighted scrim of the hero ivory
(`--scrim-hero`, tokens) keeps the overlaid text legible and fades out before
the objects on the right. 16:9 rather than the site's 4:3 hero frame because
`object-fit: cover` re-crops it into a wide band — a wide source loses less.

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
| `insight-supplier-research.svg` | **1400 × 933** | 3:2 |
| `insight-supplier-verification.svg` | **1200 × 800** | 3:2 |
| `insight-trading-company.svg` | **1200 × 800** | 3:2 |

- **Supplier research** — supplier research, sampling, or side-by-side product
  comparison.
- **Supplier verification** — a factory walk-through, capability check, or
  inspection documentation.
- **Trading company** — a manufacturer's production line versus a trading office
  or warehousing operation. The pair should read as a genuine contrast.

Target under 120 KB each.

---

### Social — `og-default.svg` ✱ needs work before launch

| | |
| --- | --- |
| Source | **1200 × 630** |
| Ratio | 1.91:1 |
| Appears | `og:image` and the Twitter card |

This one is **not a grey placeholder** — it is a real brand card (ink ground,
SOURDEN wordmark, "China Sourcing. Done.", brass rule). All typography, no
photography, no fabricated claims.

> ⚠ **It is currently an SVG, and most social platforms do not render SVG.**
> Export it as a **PNG or JPG at 1200 × 630** before launch, point
> `ogDefault.file` in `media.js` at the raster file, remove
> `placeholder: true`, and re-run `npm run verify`.

---

## Replacing a slot

1. Supply the photograph at or above the listed size, same aspect ratio.
2. Export WebP at ~75% quality (or AVIF). Keep hero and feature slots under
   ~250 KB, thumbnails under ~120 KB.
3. Put the file in `public/images/` — the file name may stay or change.
4. In `src/data/media.js`: point `file` at the new file, update `alt` to
   describe the actual photograph, and **delete `placeholder: true`**.
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
