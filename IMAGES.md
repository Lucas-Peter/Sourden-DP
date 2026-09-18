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

### Industries — six slots

| File | Label | Source size | Ratio |
| --- | --- | --- | --- |
| `industry-consumer-products.svg` | Consumer Products | **1200 × 1500** | 4:5 portrait |
| `industry-beauty-personal-care.svg` | Beauty & Personal Care | **1200 × 900** | 4:3 |
| `industry-home-living.svg` | Home & Living | **1200 × 900** | 4:3 |
| `industry-packaging.svg` | Packaging | **1200 × 900** | 4:3 |
| `industry-electronics-accessories.svg` | Electronics & Accessories | **1200 × 900** | 4:3 |
| `industry-industrial-products.svg` | Industrial Products | **1200 × 1500** | 4:5 portrait |

Two of the six are portrait because the grid is deliberately asymmetric (spec
§12) — keep those framings upright.

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

Target under 120 KB each.

---

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

### Insights — three slots

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
- Everything below the fold loads `lazy` with `decoding="async"`. Only the hero
  is eager.
- Hover scale is 1.03 over the standard duration, and is suppressed entirely
  under `prefers-reduced-motion`.

See also: [README.md](README.md) for the build and deployment workflow.
