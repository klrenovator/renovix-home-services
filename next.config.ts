import type { NextConfig } from "next";
import { siteConfig } from "./data/site";
import { analyticsConfigWarnings, analyticsCspSources } from "./lib/analytics-config";

/**
 * Hostnames that answer with this same production deployment but are NOT the
 * canonical site (`siteConfig.url`, the apex `https://renovixhomeservices.my`).
 *
 * `renovix-home-services.vercel.app` is the Vercel project's production alias.
 * Checked on 2026-10-14: it served every page with HTTP 200 (the same ETag as
 * the apex homepage) and no `X-Robots-Tag`, so the whole site was publicly
 * available on two hostnames. The public GitHub repository's homepage link also
 * pointed at it. Every page's canonical tag already names the apex, but Google
 * treats a canonical tag as a hint, not a rule. With two copies, a new domain
 * can lose ranking signals and crawl budget to the vercel.app copy.
 *
 * A permanent (308) redirect that keeps the path is the strongest signal for
 * merging the copies. The value is matched as an anchored pattern, and only
 * against this exact production alias:
 * - preview deployments (`renovix-home-services-git-…` / `-<hash>-…vercel.app`)
 *   keep working for review, and Vercel already sends `noindex` on them;
 * - `www.renovixhomeservices.my` is already redirected to the apex by the Vercel
 *   domain settings before a request reaches the app;
 * - local `next start` / `next dev` (`localhost`) is never redirected.
 *
 * The dots are deliberately left unescaped. As a pattern a dot also matches a
 * literal dot, and as a plain string the value is the exact hostname, so the
 * rule works whichever way the platform reads it.
 */
const NON_CANONICAL_PRODUCTION_HOSTS = ["renovix-home-services.vercel.app"] as const;

const nonCanonicalHostRedirects = NON_CANONICAL_PRODUCTION_HOSTS.flatMap((host) => [
  // Every rule lands on the exact URL the apex serves with 200 in a single hop,
  // never on a URL that would redirect again.
  //
  // Bare root: straight to the default-language homepage instead of chaining
  // through the apex root redirect below.
  {
    source: "/",
    has: [{ type: "host" as const, value: host }],
    destination: `${siteConfig.url}/en/`,
    permanent: true,
  },
  // Files (`/sitemap.xml`, `/robots.txt`, the verification file, …) are
  // served without a trailing slash. This uses the same "last segment has an
  // extension" test that Next.js applies to its own trailing-slash redirects.
  {
    source: "/:file((?:[^/]+/)*[^/]+\\.\\w+)",
    has: [{ type: "host" as const, value: host }],
    destination: `${siteConfig.url}/:file`,
    permanent: true,
  },
  // Pages: the matched path drops its trailing slash, so add it back here.
  // That keeps `trailingSlash: true` from adding a second hop on the apex.
  {
    source: "/:path*",
    has: [{ type: "host" as const, value: host }],
    destination: `${siteConfig.url}/:path*/`,
    permanent: true,
  },
]);

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
  // Clickjacking defence. `frame-ancestors` is the modern CSP equivalent of
  // X-Frame-Options; both are emitted so older browsers are covered too.
  "frame-ancestors 'none'",
  ...(analyticsCsp.frameSources.length > 0
    ? [`frame-src ${analyticsCsp.frameSources.join(" ")}`]
    : []),
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  /**
   * Build output directory. Overridable for exactly one reason: the
   * measurement end-to-end harness (`scripts/verify-analytics-e2e.mjs
   * --configured`) builds a throwaway copy of the site with clearly-marked
   * TEST-format provider IDs baked in, and must not disturb the real `.next`
   * output that `npm run build` produces. Nothing else reads this variable.
   */
  distDir: process.env.RENOVIX_DIST_DIR || ".next",
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
      // Must come first: a request on a non-canonical production hostname is
      // sent to the same path on the canonical apex before any other rule runs.
      ...nonCanonicalHostRedirects,
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
