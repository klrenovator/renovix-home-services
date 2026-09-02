"use client";

import { useEffect, useRef, useState } from "react";
import { IconClose, IconGlobe } from "@/components/icons";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { languages, type LanguageCode } from "@/data/languages";

type HeaderLanguageMenuProps = {
  lang: LanguageCode;
  /** Localized accessible name for the trigger. */
  label: string;
  /** Localized accessible name for the language list (`t.a11y.languageNavigation`). */
  listLabel: string;
};

/**
 * Compact language control for the phone header.
 *
 * From `sm` upwards the header already shows the inline `EN | BM | 中文`
 * switcher. Below that the brand lockup, the WhatsApp button and the menu
 * trigger leave no room for a third inline group, so the *same* switcher is
 * disclosed behind a fixed 40px icon button instead — one language system, one
 * set of routes, no duplicated switching logic.
 *
 * The button is a fixed size on purpose: the header must not gain a
 * text-dependent width at 320–360px, or it would start scrolling sideways.
 */
export function HeaderLanguageMenu({
  lang,
  label,
  listLabel,
}: HeaderLanguageMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const current = languages.find((language) => language.code === lang);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    function handlePointerDown(event: MouseEvent | TouchEvent) {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeydown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [isOpen]);

  return (
    <div ref={wrapperRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        aria-expanded={isOpen}
        aria-controls="header-language-menu"
        aria-label={label}
        className="inline-flex h-10 w-10 flex-col items-center justify-center gap-0.5 rounded-md text-navy transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        {isOpen ? (
          <IconClose className="h-4 w-4" aria-hidden="true" />
        ) : (
          <IconGlobe className="h-4 w-4" aria-hidden="true" />
        )}
        <span
          aria-hidden="true"
          className="text-[10px] font-bold leading-none tracking-tight"
        >
          {current?.nativeLabel ?? "EN"}
        </span>
      </button>

      {isOpen ? (
        <div
          id="header-language-menu"
          /* The only interactive content is the language list, so any click
             inside the panel is a navigation and closes it. */
          onClick={() => setIsOpen(false)}
          className="absolute right-0 top-[calc(100%+8px)] z-50 rounded-xl border border-slate-200 bg-white p-2 shadow-card"
        >
          <LanguageSwitcher lang={lang} label={listLabel} />
        </div>
      ) : null}
    </div>
  );
}
