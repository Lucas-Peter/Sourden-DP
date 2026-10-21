/**
 * SOURDEN — PRIMARY CTA (LEAF MODULE)
 * ---------------------------------------------------------------------------
 * The one and only destination for "Start a Sourcing Request" (spec §34).
 * Every primary call-to-action across the entire site points at this single
 * href — never a second destination for the same action.
 *
 * ── WHY THIS LIVES IN ITS OWN LEAF FILE ────────────────────────────────────
 * `site.js` imports the service, industry AND product-collection registries to
 * build the header nav (the "Products" item derives its second level from the
 * collection registry). A collection data file in turn needs `primaryCta` for
 * its `cta.href`. If `primaryCta` stayed defined in `site.js`, that would make
 * a cycle — `site.js` → `product-collections.js` → `collection-<slug>.js` →
 * `site.js` — and a top-level `primaryCta.href` read would hit the temporal
 * dead zone. Moving the constant down here breaks the cycle: `site.js` and the
 * collection files both import this leaf, and nothing here imports either of
 * them back.
 * ---------------------------------------------------------------------------
 */

export const primaryCta = {
  label: 'Start a Sourcing Request',
  href: '/sourcing-request',
};
