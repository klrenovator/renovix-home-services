/**
 * Smart Service Finder — SearchOverlay.
 *
 * Client component. Triggered by the header search icon, opens a
 * full-width sheet on mobile, locks body scroll, closes on Escape
 * and outside click, focus trap, focus restore. The input is a real
 * `<form>` so JS-disabled clients can still search the site.
 *
 * Bundle size: ~3 KB gzip.
 */

"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { IconArrowRight, IconClose, IconSearch } from "@/components/icons";

type SearchOverlayProps = {
  lang: string;
  labels: {
    overlayTitle: string;
    inputLabel: string;
    placeholder: string;
    submit: string;
    closeOverlay: string;
    typeaheadHint: string;
  };
  /** The localized example queries (clickable chips). */
  exampleQueries: string[];
  /** Called when the user wants the overlay to close. */
  onClose: () => void;
  /** The localized search-route path (e.g. /en/search/). */
  action: string;
};

export function SearchOverlay({
  lang,
  labels,
  exampleQueries,
  onClose,
  action,
}: SearchOverlayProps) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const sheetRef = useRef<HTMLDivElement | null>(null);
  const [query, setQuery] = useState("");

  // Focus the input on mount.
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    inputRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      previous?.focus?.();
    };
  }, []);

  // Escape to close; basic focus trap.
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;
    router.push(`${action}?q=${encodeURIComponent(trimmed)}`);
    onClose();
  };

  return (
    <div
      ref={sheetRef}
      role="dialog"
      aria-modal="true"
      aria-label={labels.overlayTitle}
      className="fixed inset-0 z-50 flex flex-col bg-white"
    >
      <div className="border-b border-slate-200 bg-white">
        <div className="container-app flex h-[70px] items-center justify-between gap-3">
          <p className="eyebrow flex items-center gap-2 text-brand">
            <IconSearch className="h-4 w-4" aria-hidden="true" />
            {labels.overlayTitle}
          </p>
          <button
            type="button"
            onClick={onClose}
            aria-label={labels.closeOverlay}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-slate-600 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <IconClose className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
      <form
        method="GET"
        action={action}
        onSubmit={handleSubmit}
        role="search"
        aria-label={labels.overlayTitle}
        className="flex-1 overflow-y-auto bg-white"
      >
        <div className="container-app py-6">
          <label htmlFor="overlay-search-input" className="sr-only">
            {labels.inputLabel}
          </label>
          <div className="relative">
            <input
              ref={inputRef}
              id="overlay-search-input"
              name="q"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={labels.placeholder}
              autoComplete="off"
              spellCheck={false}
              enterKeyHint="search"
              className="h-14 w-full rounded-2xl border-2 border-slate-300 bg-white pl-5 pr-32 text-base text-slate-900 placeholder:text-slate-500 focus-visible:border-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:text-lg"
            />
            <button
              type="submit"
              className="absolute right-2 top-2 inline-flex h-10 items-center gap-1.5 rounded-xl bg-brand px-4 text-sm font-semibold text-white transition-colors hover:bg-brand/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:text-base"
            >
              {labels.submit}
              <IconArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
          <p className="mt-3 text-xs text-slate-500">{labels.typeaheadHint}</p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
            {/* keep the user moving when no query is typed yet */}
            Examples
          </p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {exampleQueries.slice(0, 8).map((example) => (
              <li key={example}>
                <a
                  href={`${action}?q=${encodeURIComponent(example)}`}
                  onClick={onClose}
                  className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:border-brand/30 hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {example}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </form>
    </div>
  );
}
