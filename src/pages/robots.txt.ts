/**
 * robots.txt — generated at build time
 * ---------------------------------------------------------------------------
 * Generating this file instead of shipping a static copy in /public means the
 * sitemap URL can never drift from the canonical origin in astro.config.mjs.
 *
 * Endpoint modules have no frontmatter fence. Note also that Astro does not
 * apply TypeScript's type-only syntax to double-extension routes such as
 * `robots.txt.ts`, so this file deliberately uses plain JavaScript syntax.
 * It remains valid TypeScript.
 */
import { site } from '../data/site.js';

export const GET = () => {
  const body = [
    'User-agent: *',
    'Allow: /',
    '',
    '# Reservation pages carry noindex and are excluded from the sitemap until',
    '# they hold real content. See src/data/routes.js.',
    '',
    `Sitemap: ${site.url}/sitemap-index.xml`,
    '',
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
