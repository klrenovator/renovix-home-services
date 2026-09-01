import type { LanguageCode } from "@/data/languages";
import { getLanguageCode } from "@/data/languages";
import { hasTranslation, missingPathsForLanguage, type ContentKind } from "./coverage";

/**
 * Prefixes a language-agnostic path with the language segment and normalizes it
 * to the trailing-slash form the site serves, so internal links do not cost a
 * redirect hop and match the canonical URL of their target.
 */
export function localizedHref(href: string, lang: LanguageCode | string): string {
  const code = getLanguageCode(lang);

  if (!href.startsWith("/")) {
    return href;
  }

  const [path, rest = ""] = href.split(/([?#])/);
  const query = rest ? href.slice(path.length) : "";
  const normalized = path === "/" ? "/" : `${path.replace(/\/+$/, "")}/`;

  return `/${code}${normalized === "/" ? "" : normalized}${query}`;
}

/** Strips the leading language segment, e.g. `/ms/quote` -> `/quote`. */
export function stripLanguagePrefix(pathname: string): string {
  const withoutQuery = pathname.split("?")[0].split("#")[0];
  const match = /^\/(en|ms|zh)(\/.*)?$/.exec(withoutQuery);

  if (!match) {
    return withoutQuery === "" ? "/" : withoutQuery;
  }

  return match[2] ?? "/";
}

/**
 * Localized URL for a content page, or `null` when that page has no complete
 * translation in the requested language. Callers render plain text instead of a
 * dead link when this returns `null`, which keeps every page single-language
 * and free of 404 links.
 */
export function contentHref(
  kind: ContentKind,
  id: string,
  lang: LanguageCode | string,
): string | null {
  if (!hasTranslation(kind, id, lang)) {
    return null;
  }

  if (kind === "service") {
    return localizedHref(`/services/${id}`, lang);
  }

  if (kind === "problem") {
    return localizedHref(`/problems/${id}`, lang);
  }

  if (kind === "area" || kind === "areaRegion") {
    return localizedHref(`/areas/${id}`, lang);
  }

  return null;
}

/**
 * The equivalent page in another language for the language switcher. Falls back
 * to the nearest translated ancestor — and finally to that language's homepage —
 * so switching language never lands on a 404.
 */
export function switchLanguagePath(
  pathname: string,
  targetLang: LanguageCode,
): string {
  const base = stripLanguagePrefix(pathname);
  const missing = new Set(missingPathsForLanguage(targetLang));

  const segments = base.split("/").filter(Boolean);

  while (segments.length > 0) {
    const candidate = `/${segments.join("/")}`;

    if (!missing.has(candidate)) {
      return localizedHref(candidate, targetLang);
    }

    segments.pop();
  }

  return localizedHref("/", targetLang);
}
