import type { ReactNode } from "react";
import Link from "next/link";
import { getLanguageCode } from "@/data/languages";
import { contentHref, localizedHref } from "@/i18n/hrefs";

const INLINE_LINK_PATTERN = /(\[[^\]]+\]\([^)]+\))/g;
const INLINE_LINK_MATCH = /^\[([^\]]+)\]\(([^)]+)\)$/;

/** Resolves an inline `[label](/path)` target, honouring translation coverage. */
function resolveInlineHref(
  href: string,
  lang: string,
): string | null {
  const code = getLanguageCode(lang);

  const serviceMatch = /^\/services\/([^/]+)\/?$/.exec(href);
  if (serviceMatch) {
    return contentHref("service", serviceMatch[1], code);
  }

  const problemMatch = /^\/problems\/([^/]+)\/?$/.exec(href);
  if (problemMatch) {
    return contentHref("problem", problemMatch[1], code);
  }

  const areaMatch = /^\/areas\/([^/]+)\/([^/]+)\/?$/.exec(href);
  if (areaMatch) {
    return contentHref("area", `${areaMatch[1]}/${areaMatch[2]}`, code);
  }

  const regionMatch = /^\/areas\/([^/]+)\/?$/.exec(href);
  if (regionMatch) {
    return contentHref("areaRegion", regionMatch[1], code);
  }

  return localizedHref(href, code);
}

/**
 * Renders text that may contain inline links written as [label](/path).
 * Used by service, problem and area copy so content stays in the data layer
 * while internal links remain crawlable. When the target page has no complete
 * translation in the current language the label renders as plain text instead
 * of a link that would 404.
 */
export function renderInlineText(text: string, lang: string): ReactNode[] {
  return text.split(INLINE_LINK_PATTERN).map((part, index) => {
    const match = INLINE_LINK_MATCH.exec(part);

    if (!match) {
      return part;
    }

    const [, label, href] = match;
    const resolved = resolveInlineHref(href, lang);

    if (!resolved) {
      return <span key={`${label}-${index}`}>{label}</span>;
    }

    return (
      <Link
        key={`${label}-${index}`}
        href={resolved}
        className="font-semibold text-brand underline decoration-brand/30 underline-offset-2 transition-colors hover:text-brand-dark hover:decoration-brand"
      >
        {label}
      </Link>
    );
  });
}

type InlineLinksProps = {
  text: string;
  lang: string;
  className?: string;
};

export function InlineLinks({ text, lang, className = "" }: InlineLinksProps) {
  return <span className={className}>{renderInlineText(text, lang)}</span>;
}
