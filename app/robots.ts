import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { mainSitemapUrl } from "@/lib/sitemap";

/**
 * robots.txt is generated per the Next.js metadata route convention.
 *
 * Everything is crawlable. Framework assets are deliberately not blocked:
 * search engines need CSS, JavaScript and optimized-image responses to render
 * and evaluate the same experience users receive.
 *
 * `Sitemap:` points at the site's single canonical sitemap, generated natively
 * by `app/sitemap.ts` from the content registries (all languages, with
 * hreflang alternates). Referencing that one URL here — instead of listing
 * per-language child sitemaps — means Search Console and every crawler only
 * ever need this single entry point, and pages added to the registries are
 * discovered through it automatically on the next deploy.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: mainSitemapUrl(),
    host: siteConfig.url,
  };
}
