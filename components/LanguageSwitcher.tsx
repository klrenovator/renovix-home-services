"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { languages, type LanguageCode } from "@/data/languages";
import { switchLanguagePath } from "@/i18n/hrefs";

type LanguageSwitcherProps = {
  lang: LanguageCode;
  className?: string;
  compact?: boolean;
  inverse?: boolean;
  /** Accessible name for the switcher, localized by the caller. */
  label: string;
};

/**
 * EN | BM | 中文
 *
 * Switching keeps the visitor on the equivalent page in the new language. When
 * that page has no complete translation yet, the link falls back to the nearest
 * translated section (and finally to that language's homepage) instead of
 * sending the visitor back to the start or to a 404.
 */
export function LanguageSwitcher({
  lang,
  className = "",
  compact = false,
  inverse = false,
  label,
}: LanguageSwitcherProps) {
  const pathname = usePathname() ?? `/${lang}`;

  return (
    <nav aria-label={label} className={className}>
      <ul className={`flex items-center ${compact ? "gap-1.5" : "gap-0"}`}>
        {languages.map((language, index) => {
          const isCurrent = language.code === lang;
          const href = isCurrent
            ? pathname
            : switchLanguagePath(pathname, language.code);

          return (
            <li key={language.code}>
              {index > 0 ? (
                <span aria-hidden="true" className="mx-1 text-sm text-slate-400">
                  |
                </span>
              ) : null}
              <Link
                href={href}
                lang={language.htmlLang}
                hrefLang={language.hreflang}
                aria-current={isCurrent ? "true" : undefined}
                className={`rounded-md px-2 py-1 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  isCurrent
                    ? inverse
                      ? "bg-accent text-navy"
                      : "bg-navy text-white"
                    : inverse
                      ? "text-white/70 hover:text-white"
                      : "text-secondary hover:text-navy"
                }`}
              >
                {language.nativeLabel}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
