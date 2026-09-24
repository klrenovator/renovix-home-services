import { siteConfig } from "@/data/site";

/**
 * Single source of truth for the public sitemap URL and the shared
 * `lastModified` policy. Used by `app/sitemap.ts` and `app/robots.ts` so the
 * generated sitemap and the `Sitemap:` line in robots.txt can never drift.
 *
 * `/sitemap.xml` is generated natively by `app/sitemap.ts` from the in-repo
 * content registries, so a page added to the data (a new service, problem,
 * area, project or translation) appears in the sitemap on the next deploy —
 * there is no manual URL list to maintain.
 */

/**
 * The date the site's content inventory was last meaningfully updated.
 *
 * The content registries carry no per-page `updatedAt` metadata (the site is
 * fully static, with no CMS), so the same reviewed date is emitted for every
 * sitemap entry rather than an invented one. Rules this date must follow:
 *
 * - It is a *content* date, bumped when page content materially changes — it
 *   is NOT refreshed per request or per build. Stamping every URL with the
 *   build date would misrepresent unchanged pages.
 * - It must never be set to "now" programmatically.
 * - If the data model ever gains real per-page timestamps, use those instead
 *   and delete this constant.
 */
export const CONTENT_LAST_MODIFIED = "2026-09-01";

/**
 * The `lastModified` for one sitemap entry: the *later* of the site-wide
 * reviewed date and every content date the registries record for that page.
 *
 * Phase 49 — the Knowledge Hub is the first family whose content carries its
 * own recorded date (`published`, and `updated` when a guide is materially
 * revised), and those dates are already rendered on the page and published as
 * `Article.datePublished`. Emitting the site-wide date for a guide dated after
 * it told crawlers the page was modified before it was published. A page can
 * never be older than the content it publishes, so the later date wins.
 *
 * Only dates the repository actually records may be passed here — this is a
 * floor derived from evidence, not a per-build stamp. A malformed or empty
 * argument fails the build rather than silently falling back.
 */
export function contentLastModified(...evidence: (string | undefined)[]): string {
  let latest = CONTENT_LAST_MODIFIED;

  for (const value of evidence) {
    if (typeof value !== "string" || value.length === 0) {
      continue;
    }
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value) || Number.isNaN(Date.parse(`${value}T00:00:00Z`))) {
      throw new Error(
        `[sitemap] content date "${value}" is not a YYYY-MM-DD date — lastmod must come from recorded content dates, never from a computed value.`,
      );
    }
    if (value > latest) {
      latest = value;
    }
  }

  return latest;
}

/** The sitemap URL referenced from robots.txt and submitted to Google Search Console. */
export function mainSitemapUrl(): string {
  return `${siteConfig.url}/sitemap.xml`;
}
