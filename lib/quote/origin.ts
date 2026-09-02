import { siteConfig } from "@/data/site";

function hostnameOf(value: string): string | null {
  try {
    return new URL(value).hostname.toLowerCase();
  } catch {
    return null;
  }
}

/**
 * Same-origin browser posts always send an Origin. Preview deploys, the
 * production domain and local development are accepted. A missing Origin is
 * allowed so server-side tests (curl) still work; the rest of the handler
 * still validates and rate-limits the body.
 */
export function isAllowedOrigin(origin: string | null, requestUrl: string): boolean {
  if (!origin) {
    return true;
  }

  const originHost = hostnameOf(origin);
  const requestHost = hostnameOf(requestUrl);

  if (!originHost) {
    return false;
  }

  if (requestHost && originHost === requestHost) {
    return true;
  }

  try {
    const siteHost = new URL(siteConfig.url).hostname.toLowerCase();

    if (originHost === siteHost || originHost === `www.${siteHost}`) {
      return true;
    }
  } catch {
    // siteConfig.url is a compile-time constant; this is defensive only.
  }

  if (originHost === "localhost" || originHost === "127.0.0.1") {
    return true;
  }

  if (originHost.endsWith(".vercel.app")) {
    return true;
  }

  return false;
}
