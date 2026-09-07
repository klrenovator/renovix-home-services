/**
 * Smart Service Finder — SmartSearchBar.
 *
 * Server-friendly form (no JavaScript required). Submits to
 * `/{lang}/search/?q=…`. Two visual variants:
 *   - `hero` — large, prominent (homepage hero, search page hero)
 *   - `compact` — small (header, page rails)
 *
 * The submit is a real `<form method="GET">` so a customer without JS
 * (or with motion reduced) can still search the site. The client-side
 * `Typeahead` (a separate component) is purely progressive.
 */

import { getDictionary } from "@/i18n";
import { IconArrowRight } from "@/components/icons";
import { localizedHref } from "@/i18n/hrefs";

type SmartSearchBarProps = {
  lang: string;
  initialQuery?: string;
  variant?: "hero" | "compact";
  /** Placeholder override (defaults to the dictionary's placeholder). */
  placeholder?: string;
  /** Whether the bar carries its own label (visible vs sr-only). */
  showLabel?: boolean;
};

export function SmartSearchBar({
  lang,
  initialQuery = "",
  variant = "compact",
  placeholder,
  showLabel = false,
}: SmartSearchBarProps) {
  const t = getDictionary(lang);
  const action = localizedHref("/search/", lang);
  const exampleQueries = t.search.exampleQueries;
  const helperId = "search-helper";

  const isHero = variant === "hero";

  const inputClass = isHero
    ? "h-14 w-full rounded-2xl border-2 border-white/20 bg-white/10 pl-5 pr-32 text-base text-white placeholder:text-white/60 focus-visible:border-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 sm:text-lg"
    : "h-11 w-full rounded-full border border-slate-300 bg-white pl-4 pr-24 text-sm text-slate-900 placeholder:text-slate-500 focus-visible:border-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";

  const submitClass = isHero
    ? "absolute right-2 top-2 inline-flex h-10 items-center gap-1.5 rounded-xl bg-amber-400 px-4 text-sm font-semibold text-navy transition-colors hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:text-base"
    : "absolute right-1 top-1 inline-flex h-9 items-center gap-1 rounded-full bg-brand px-3 text-xs font-semibold text-white transition-colors hover:bg-brand/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";

  return (
    <form
      method="GET"
      action={action}
      role="search"
      aria-label={t.search.inputLabel}
      className="w-full"
    >
      <div className="relative">
        {showLabel ? (
          <label htmlFor="smart-search-input" className="sr-only">
            {t.search.inputLabel}
          </label>
        ) : (
          <label htmlFor="smart-search-input" className="sr-only">
            {t.search.inputLabel}
          </label>
        )}
        <input
          id="smart-search-input"
          name="q"
          type="search"
          defaultValue={initialQuery}
          placeholder={placeholder ?? t.search.placeholder}
          aria-describedby={helperId}
          autoComplete="off"
          spellCheck={false}
          enterKeyHint="search"
          className={inputClass}
        />
        <button
          type="submit"
          className={submitClass}
          aria-label={t.search.submit}
        >
          {t.search.submit}
          <IconArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
      <p id={helperId} className={`mt-2 text-xs ${isHero ? "text-white/70" : "text-slate-500"}`}>
        {isHero ? t.search.helperText : t.search.typeaheadHint}
      </p>
      {isHero ? (
        <ul className="mt-3 flex flex-wrap gap-2">
          {exampleQueries.slice(0, 6).map((example) => (
            <li key={example}>
              <a
                href={`${action}?q=${encodeURIComponent(example)}`}
                className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/80 transition-colors hover:border-amber-300 hover:text-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
              >
                {example}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </form>
  );
}
