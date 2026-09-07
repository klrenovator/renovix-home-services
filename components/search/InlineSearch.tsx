/**
 * Smart Service Finder — InlineSearch.
 *
 * Server component. A small "Find something specific" bar that
 * renders inside page bodies (services, sub-services, problems,
 * areas, projects, blog guides). Server-rendered, no JS required.
 *
 * Two variants:
 *   - `panel` — a bordered card, suited to a page rail or a section
 *   - `banner` — a slimmer banner, suited to a sub-section / footer
 */

import { IconArrowRight, IconSearch } from "@/components/icons";
import { getDictionary } from "@/i18n";
import { localizedHref } from "@/i18n/hrefs";

type InlineSearchProps = {
  lang: string;
  variant?: "panel" | "banner";
};

export function InlineSearch({ lang, variant = "panel" }: InlineSearchProps) {
  const t = getDictionary(lang);
  const action = localizedHref("/search/", lang);

  if (variant === "banner") {
    return (
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
        <form
          method="GET"
          action={action}
          role="search"
          aria-label={t.search.inputLabel}
          className="relative"
        >
          <label htmlFor="inline-banner-search" className="sr-only">
            {t.search.inputLabel}
          </label>
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            <IconSearch className="h-4 w-4" aria-hidden="true" />
          </span>
          <input
            id="inline-banner-search"
            name="q"
            type="search"
            placeholder={t.search.placeholder}
            autoComplete="off"
            spellCheck={false}
            enterKeyHint="search"
            className="h-11 w-full rounded-full border border-slate-200 bg-white pl-11 pr-12 text-sm text-slate-900 placeholder:text-slate-500 focus-visible:border-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          />
          <button
            type="submit"
            aria-label={t.search.submit}
            className="absolute right-1 top-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-brand/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <IconArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="eyebrow">{t.search.inputLabel}</p>
      <p className="mt-2 text-sm text-slate-600">{t.search.helperText}</p>
      <form
        method="GET"
        action={action}
        role="search"
        aria-label={t.search.inputLabel}
        className="relative mt-3"
      >
        <label htmlFor="inline-panel-search" className="sr-only">
          {t.search.inputLabel}
        </label>
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
          <IconSearch className="h-4 w-4" aria-hidden="true" />
        </span>
        <input
          id="inline-panel-search"
          name="q"
          type="search"
          placeholder={t.search.placeholder}
          autoComplete="off"
          spellCheck={false}
          enterKeyHint="search"
          className="h-12 w-full rounded-full border border-slate-200 bg-white pl-11 pr-14 text-base text-slate-900 placeholder:text-slate-500 focus-visible:border-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        />
        <button
          type="submit"
          aria-label={t.search.submit}
          className="absolute right-1 top-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-brand/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <IconArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </form>
    </div>
  );
}
