/**
 * SOURDEN — /products hub copy
 * ---------------------------------------------------------------------------
 * The Products directory: the section's entry point, the parent
 * crumb of every `/products/<industry>/<slug>` page, and the target of the
 * header nav's "Products" item.
 *
 * ── WHY THIS PAGE EXISTS ───────────────────────────────────────────────────
 * The collection-page brief describes the detail pages, not a hub — but a
 * section whose only entry point is a breadcrumb on its own child pages is a
 * section nobody can walk into. The hub is the directory: what the section
 * is, which collections exist today, and the promise that more categories
 * are added as data and images arrive.
 *
 * ── WHY THE DIRECTORY ENTRIES CARRY IMAGES ─────────────────────────────────
 * `/industries` deliberately uses ruled text entries, because a buyer there
 * is asking "is my product in scope?". A visitor here is asking "what do
 * these actually look like?" — so each entry leads with the collection's
 * first reference style and keeps one line of copy. Two questions, two
 * devices; this is not a second copy of the industries hub.
 *
 * ── WHAT THIS PAGE DELIBERATELY DOES NOT DO ────────────────────────────────
 *   · It does not list every product. That is what the collection pages are
 *     for; the hub is navigation.
 *   · It does not invent a count of collections, categories or styles — the
 *     entries are the registry, and the registry is the truth.
 *   · It does not add a claim the business cannot evidence (see the claims
 *     rule in `src/data/product-collections.js`).
 *
 * INDEXABILITY
 *   This page is real, so it is indexable and appears in sitemap.xml. It was
 *   never a reservation: the whole `/products` section is new, so there is
 *   no `reservedTopLevel` entry to delete and no noindex list to leave.
 * ---------------------------------------------------------------------------
 */

import { collections, collectionPageHref } from './product-collections.js';
import { primaryCta } from './site.js';

export const meta = {
  title: 'Products | SOURDEN',
  description:
    'Browse product collections SOURDEN sources from China — reference styles by category, each written around the customization a buyer can specify.',
};

export const breadcrumbs = [{ label: 'Products' }];

export const hero = {
  eyebrow: 'OUR PRODUCTS',
  title: 'Products.',
  description:
    'Reference styles from the categories we source, shown the way a buyer needs to see them: construction, fit, prints and finishes. Point at what you want — or send your own design — and we will work from there.',
  primaryCta,
  secondaryCta: { label: 'How It Works', href: '/how-it-works' },
  imageKey: 'soccerJerseyHero',
  imageCaption: 'A shop wall of national-team soccer jerseys — one of the reference styles in this section.',
};

/**
 * The directory, merged from the collection registry. Each entry is the
 * collection's name, its one-line card copy (written per collection in its
 * data file — never a swapped-in generic sentence), its route, and the image
 * of its first reference style, so the card always shows the category's lead
 * garment without a second image slot per collection.
 */
export const directory = {
  eyebrow: 'THE COLLECTIONS',
  title: 'Browse by category',
  items: collections.map((collection) => {
    /* The card image is the first reference style, unless the collection names
       a different one: some categories open with a spec sheet or a multi-item
       shot that reads badly as a cover, and `cardImageKey` lets that collection
       point the card at a single-subject photo without reordering its
       catalogue. */
    const lead =
      collection.products.find((p) => p.imageKey === collection.cardImageKey) ??
      collection.products[0];
    return {
      title: collection.categoryName,
      href: collectionPageHref(collection.slug, 1),
      description: collection.cardDescription,
      imageKey: lead.imageKey,
      altText: lead.altText,
      ctaLabel: 'View collection',
    };
  }),
  scopeNote:
    'More categories are added as their reference sets are photographed and written. If the category you need is not here yet, tell us what you are looking for — that is what the sourcing request is for.',
};

export const finalCta = {
  eyebrow: 'START SOURCING',
  title: 'Found a style you like?',
  description:
    'Send the reference, your own artwork, or a description of what you need. We take it from there.',
  cta: primaryCta,
};
