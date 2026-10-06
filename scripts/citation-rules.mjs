/**
 * Shared, offline URL-shape rules for Task 3.3 directory profile links.
 * These rules do not prove a listing exists; an owner must still confirm the
 * public page and exact NAP before setting its status to `published`.
 */
export const CITATION_DIRECTORIES = [
  {
    id: "yellowPagesMalaysia",
    label: "Yellow Pages Malaysia",
    analyticsId: "yellow_pages_malaysia",
    allowedHosts: ["yellowpages.my", "www.yellowpages.my"],
    requiredPathSegment: null,
  },
  {
    id: "hotfrog",
    label: "Hotfrog Malaysia",
    analyticsId: "hotfrog",
    allowedHosts: ["hotfrog.com.my", "www.hotfrog.com.my"],
    requiredPathSegment: "company",
  },
  {
    id: "businessList",
    label: "BusinessList.my",
    analyticsId: "businesslist",
    allowedHosts: ["businesslist.my", "www.businesslist.my"],
    requiredPathSegment: "company",
  },
  {
    id: "facebookLocal",
    label: "Facebook Page",
    analyticsId: "facebook_local",
    allowedHosts: ["facebook.com", "www.facebook.com", "m.facebook.com"],
    requiredPathSegment: null,
  },
];

const DIRECTORY_BY_ID = new Map(CITATION_DIRECTORIES.map((directory) => [directory.id, directory]));
const NON_PROFILE_ROUTES = new Set([
  "add",
  "claim",
  "create",
  "login",
  "register",
  "search",
  "signup",
  "submit",
]);

/**
 * Accept only a clean HTTPS URL on the expected site and a direct profile path.
 * This is a format gate, not a network check or a claim that a profile is live.
 */
export function validateCitationUrl(id, raw) {
  const directory = DIRECTORY_BY_ID.get(id);
  if (!directory) return { ok: false, reason: "unknown directory ID" };
  if (typeof raw !== "string" || raw.length === 0) {
    return { ok: false, reason: "profile URL is empty" };
  }
  if (raw !== raw.trim() || /[\u0000-\u0020\u007f]/.test(raw)) {
    return { ok: false, reason: "URL has whitespace or control characters" };
  }

  let url;
  try {
    url = new URL(raw);
  } catch {
    return { ok: false, reason: "not an absolute URL" };
  }

  if (url.protocol !== "https:") return { ok: false, reason: "HTTPS is required" };
  if (url.username || url.password) return { ok: false, reason: "credentials are not allowed in the URL" };
  if (url.hash) return { ok: false, reason: "URL fragments are not allowed" };
  if (!directory.allowedHosts.includes(url.hostname.toLowerCase())) {
    return { ok: false, reason: `host must be ${directory.allowedHosts.join(" or ")}` };
  }

  const pathSegments = url.pathname.split("/").filter(Boolean).map((segment) => segment.toLowerCase());
  if (pathSegments.length === 0) return { ok: false, reason: "directory homepage is not a profile URL" };
  if (pathSegments.some((segment) => NON_PROFILE_ROUTES.has(segment))) {
    return { ok: false, reason: "search, claim, signup and submission URLs are not public profiles" };
  }

  if (
    directory.requiredPathSegment &&
    !pathSegments.includes(directory.requiredPathSegment)
  ) {
    return {
      ok: false,
      reason: `direct profile URL must include /${directory.requiredPathSegment}/`,
    };
  }

  const isFacebookIdProfile =
    id === "facebookLocal" &&
    pathSegments.at(-1) === "profile.php" &&
    url.searchParams.has("id") &&
    [...url.searchParams.keys()].every((key) => key === "id");

  if (id === "facebookLocal" && ["share", "sharer.php", "sharer"].includes(pathSegments[0])) {
    return { ok: false, reason: "a Facebook share link is not a business profile" };
  }
  if (url.search && !isFacebookIdProfile) {
    return { ok: false, reason: "query parameters are not allowed on directory profile URLs" };
  }
  if (isFacebookIdProfile && !url.searchParams.get("id")) {
    return { ok: false, reason: "Facebook profile.php URLs need a non-empty id" };
  }

  return { ok: true, normalizedUrl: url.href };
}
