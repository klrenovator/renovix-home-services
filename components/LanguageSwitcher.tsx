import Link from "next/link";
import { languages } from "@/data/languages";

type LanguageSwitcherProps = {
  lang: string;
  className?: string;
  compact?: boolean;
  inverse?: boolean;
};

export function LanguageSwitcher({
  lang,
  className = "",
  compact = false,
  inverse = false,
}: LanguageSwitcherProps) {
  return (
    <nav aria-label="Language" className={className}>
      <ul className={`flex items-center ${compact ? "gap-1.5" : "gap-0"}`}>
        {languages.map((language, index) => {
          const isCurrent = language.code === lang;
          return (
            <li key={language.code}>
              {index > 0 ? (
                <span aria-hidden="true" className="mx-1 text-sm text-slate-400">
                  |
                </span>
              ) : null}
              <Link
                href={`/${language.code}`}
                lang={language.htmlLang}
                aria-current={isCurrent ? "page" : undefined}
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
                {compact ? language.nativeLabel : language.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
