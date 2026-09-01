import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
    ];
  },
};

export default nextConfig;
