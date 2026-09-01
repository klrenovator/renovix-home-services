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
   */
  async redirects() {
    return [
      {
        source: "/",
        // Trailing slash so this is a single hop to the URL that returns 200.
        destination: "/en/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
