/**
 * Smart Service Finder — HeaderSearchBar (desktop).
 *
 * Server component. A compact search input that sits in the header on
 * `xl` and wider. Renders as a real `<form method="GET">` so the
 * customer can search without JS. Submits to `/{lang}/search/?q=…`.
 *
 * The bar is intentionally short (icon-button + text input + submit
 * icon) so it does not push the existing Phase 8/9/13 header overflow
 * numbers. Width is capped; the input grows with the viewport.
 */

import { IconArrowRight, IconSearch } from "@/components/icons";
import { getDictionary } from "@/i18n";
import { localizedHref } from "@/i18n/hrefs";

type HeaderSearchBarProps = {
  lang: string;
};

export function HeaderSearchBar({ lang }: HeaderSearchBarProps) {
  const t = getDictionary(lang);
  const action = localizedHref("/search/", lang);

  return (
    <form
      method="GET"
      action={action}
      role="search"
      aria-label={t.search.inputLabel}
      className="relative hidden xl:block"
    >
      <label htmlFor="header-search-input" className="sr-only">
        {t.search.inputLabel}
      </label>
      <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
        <IconSearch className="h-4 w-4" aria-hidden="true" />
      </span>
      <input
        id="header-search-input"
        name="q"
        type="search"
        placeholder={t.search.placeholder}
        autoComplete="off"
        spellCheck={false}
        enterKeyHint="search"
        className="h-9 w-48 rounded-full border border-slate-200 bg-slate-50 pl-9 pr-9 text-sm text-slate-900 placeholder:text-slate-500 transition-colors hover:border-slate-300 focus:border-brand focus:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent xl:w-56"
      />
      <button
        type="submit"
        aria-label={t.search.submit}
        className="absolute right-1 top-1/2 inline-flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-brand/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <IconArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
      </button>
    </form>
  );
}
