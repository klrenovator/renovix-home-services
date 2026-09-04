import { siteConfig } from "@/data/site";

function hostnameOf(value: string): string | null {
  try {
    return new URL(value).hostname.toLowerCase();
  } catch {
    return null;
  }
}

/**
 * Same-origin browser posts always send an Origin. The production domain,
 * its www alias and same-host local development are accepted. A missing Origin
 * is allowed for non-browser clients; the handler still validates and
 * rate-limits the body.
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

  // A loopback origin is useful only when the request itself is local. This
  // avoids allowing a localhost origin against a deployed endpoint.
  const localHosts = new Set(["localhost", "127.0.0.1", "0.0.0.0"]);

  if (requestHost && localHosts.has(requestHost) && localHosts.has(originHost)) {
    return true;
  }

  return false;
}
