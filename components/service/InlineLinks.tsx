import type { ReactNode } from "react";
import Link from "next/link";
import { localizeHref } from "@/data/navigation";

const INLINE_LINK_PATTERN = /(\[[^\]]+\]\([^)]+\))/g;
const INLINE_LINK_MATCH = /^\[([^\]]+)\]\(([^)]+)\)$/;

/**
 * Renders text that may contain inline links written as [label](/path).
 * Used by service page copy so content stays in the data layer while
 * internal links remain crawlable.
 */
export function renderInlineText(text: string, lang: string): ReactNode[] {
  return text.split(INLINE_LINK_PATTERN).map((part, index) => {
    const match = INLINE_LINK_MATCH.exec(part);

    if (!match) {
      return part;
    }

    const [, label, href] = match;

    return (
      <Link
        key={`${label}-${index}`}
        href={localizeHref(href, lang)}
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
