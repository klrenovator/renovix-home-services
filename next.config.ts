import type { NextConfig } from "next";
import { analyticsConfigWarnings, analyticsCspSources } from "./lib/analytics-config";

/**
 * Analytics origins enter the Content-Security-Policy only when the matching
 * provider ID is configured (see lib/analytics-config.ts). With no provider
 * configured the policy below is byte-for-byte the pre-Phase-24 policy, so
 * the strict default never loosens speculatively.
 */
const analyticsCsp = analyticsCspSources();

for (const warning of analyticsConfigWarnings) {
  console.warn(`[analytics config] ${warning}`);
}

function withOrigins(base: string, origins: string[]): string {
  return origins.length > 0 ? `${base} ${origins.join(" ")}` : base;
}

const contentSecurityPolicy = [
  "default-src 'self'",
  withOrigins(
    `script-src 'self' 'unsafe-inline'${process.env.NODE_ENV === "development" ? " 'unsafe-eval'" : ""}`,
    analyticsCsp.scriptSources,
  ),
  "style-src 'self' 'unsafe-inline'",
  withOrigins("img-src 'self' data: blob:", analyticsCsp.imgSources),
  "font-src 'self' data:",
  withOrigins("connect-src 'self'", analyticsCsp.connectSources),
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  ...(analyticsCsp.frameSources.length > 0
    ? [`frame-src ${analyticsCsp.frameSources.join(" ")}`]
    : []),
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  /**
   * The `X-Powered-By` header reveals stack details and saves a few bytes on
   * every response; nothing depends on it.
   */
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  images: {
    /**
     * AVIF first (roughly half the weight of WebP at the same quality) with
     * WebP as the fallback for browsers without AVIF support. Next.js picks
     * the best format the requesting browser accepts.
     */
    formats: ["image/avif", "image/webp"],
    /**
     * Optimized images are content-hashed per source path and re-generated on
     * deploy, so a long browser/CDN TTL is safe here. If an image file is ever
     * replaced under the same name, rename the file to bust the cache.
     */
    minimumCacheTTL: 2678400, // 31 days
  },
  /**
   * Canonicals, hreflang alternates, sitemaps and JSON-LD across the site are
   * written with a trailing slash (`/en/services/`). Serving the same shape keeps
   * every canonical pointing at a URL that returns 200 instead of a redirect.
   */
  trailingSlash: true,
  /**
   * The site is fully language-prefixed (`/en/`, `/ms/`, `/zh/`). The bare root
   * sends visitors to the default language rather than serving a fourth,
   * duplicate copy of the homepage.
   *
   * `permanent: true` makes this a permanent redirect (Next.js 16 emits a 308
   * for `permanent`, its method-preserving equivalent of the traditional 301).
   * A permanent default-locale redirect is what Google's hreflang guidance
   * recommends, and it passes the root's ranking signal to `/en/` permanently.
   * The trailing slash keeps it a single hop to the URL that returns 200.
   */
  async redirects() {
    return [
      {
        source: "/",
        destination: "/en/",
        permanent: true,
      },
      // The sitemap was consolidated into the single native `/sitemap.xml`
      // (see `app/sitemap.ts`). These permanent redirects keep any crawler or
      // Search Console entry that previously learned a per-language sitemap
      // URL (`/sitemap/en.xml`, …) working instead of 404ing.
      {
        source: "/sitemap/en.xml",
        destination: "/sitemap.xml",
        permanent: true,
      },
      {
        source: "/sitemap/ms.xml",
        destination: "/sitemap.xml",
        permanent: true,
      },
      {
        source: "/sitemap/zh.xml",
        destination: "/sitemap.xml",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
