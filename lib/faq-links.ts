import { getLanguageCode } from "@/data/languages";
import type { LanguageCode } from "@/data/languages";
import { getRegionName, getServiceName } from "@/data/i18n";
import { getArticle, getArticleText, hasArticleTranslation } from "@/data/blog";
import { contentHref, localizedHref } from "@/i18n/hrefs";
import { getDictionary } from "@/i18n";
import type { Dictionary } from "@/i18n/types";
import type { FaqRouteKey, SiteFaq } from "@/data/site-faqs";

/**
 * Phase 51 — one place where an answer's link becomes an anchor.
 *
 * `SiteFaq.related` holds references only (see `data/site-faqs.ts`). This module
 * turns each reference into `{ label, href }` for one language, and it is the
 * only place that decides three things:
 *
 * 1. **The href.** Entity targets go through `contentHref`, so a target whose
 *    translation is incomplete yields `null` and the caller renders plain text
 *    instead of a 404 link — the same guard every other internal link uses.
 *    Static routes always exist in all three languages, so they normalize
 *    through `localizedHref`.
 * 2. **The label.** Always the target's own published name in that language:
 *    `getServiceName` / `getRegionName` (the accessors Phase 47 made every other
 *    label read from), the guide's own `h1` (the string the Knowledge Hub index,
 *    its `ItemList` node and its card all publish), and — for routes — the exact
 *    string the header and footer already link that page with. Nothing here is
 *    hand-typed, so an anchor cannot drift from the page behind it.
 * 3. **The anchor prefix.** `t.faq.explorePrefix` + the entity name, which is
 *    the wording the service answers have published since the FAQ page shipped;
 *    it is kept verbatim so those twelve existing anchors are unchanged. Routes
 *    and guides use the destination's own name with no prefix, because
 *    "Explore Get a Quote" is not a sentence.
 *
 * `npm run audit:multilingual` guards the source rule and `npm run audit:live`
 * checks the rendered anchors on all three `/faq/` pages.
 */
export type ResolvedFaqLink = {
  label: string;
  href: string;
};

/** The route targets, with the dictionary string each one is already named by. */
const ROUTE_TARGETS: Record<FaqRouteKey, { path: string; label: (t: Dictionary) => string }> = {
  services: { path: "/services", label: (t) => t.nav.services },
  areas: { path: "/areas", label: (t) => t.nav.areas },
  quote: { path: "/quote", label: (t) => t.cta.getQuote },
};

/**
 * The links one FAQ answer renders, in declaration order. Returns an empty array
 * when the answer has no declared target or when every target is untranslated —
 * callers render nothing rather than an empty container.
 */
export function resolveFaqLinks(
  faq: SiteFaq,
  lang: LanguageCode | string,
): ResolvedFaqLink[] {
  const code = getLanguageCode(lang);
  const t = getDictionary(code);
  const links: ResolvedFaqLink[] = [];

  for (const related of faq.related ?? []) {
    if (related.kind === "service") {
      const href = contentHref("service", related.slug, code);

      if (href) {
        links.push({
          label: `${t.faq.explorePrefix} ${getServiceName(related.slug, code)}`,
          href,
        });
      }

      continue;
    }

    if (related.kind === "areaRegion") {
      const href = contentHref("areaRegion", related.slug, code);

      if (href) {
        links.push({
          label: `${t.faq.explorePrefix} ${getRegionName(related.slug, code)}`,
          href,
        });
      }

      continue;
    }

    if (related.kind === "article") {
      const article = getArticle(related.slug);

      if (article && hasArticleTranslation(related.slug, code)) {
        links.push({
          label: getArticleText(article, code).h1,
          href: localizedHref(`/blog/${related.slug}`, code),
        });
      }

      continue;
    }

    const target = ROUTE_TARGETS[related.route];

    links.push({
      label: target.label(t),
      href: localizedHref(target.path, code),
    });
  }

  return links;
}
