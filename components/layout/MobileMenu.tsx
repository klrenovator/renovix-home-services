"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { IconMenu, IconClose, IconArrowRight, IconWhatsApp } from "@/components/icons";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import type { LanguageCode } from "@/data/languages";

export type MobileMenuLink = {
  label: string;
  href: string;
};

export type MobileMenuService = {
  label: string;
  /** `null` when the service page has no translation in the current language. */
  href: string | null;
};

export type MobileMenuLabels = {
  openMenu: string;
  closeMenu: string;
  navigation: string;
  services: string;
  quote: string;
  quoteHref: string;
  whatsapp: string;
  whatsappHref: string;
  language: string;
};

type MobileMenuProps = {
  lang: LanguageCode;
  navigation: MobileMenuLink[];
  services: MobileMenuService[];
  labels: MobileMenuLabels;
};

export function MobileMenu({ lang, navigation, services, labels }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  function closeMenu() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const panel = panelRef.current;
    const trigger = triggerRef.current;
    panel?.focus();

    /**
     * The open menu behaves modally (page scroll is locked, the panel covers
     * the page), so keyboard focus is trapped inside it: Tab cycles through
     * the menu's focusable elements instead of reaching content the user
     * cannot see behind the overlay.
     */
    function handleKeydown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMenu();
        trigger?.focus();
        return;
      }

      if (event.key !== "Tab" || !panel) {
        return;
      }

      const focusables = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (focusables.length === 0) {
        return;
      }

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && (active === first || active === panel)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    }

    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
      document.body.style.overflow = previousOverflow;
      trigger?.focus();
    };
  }, [isOpen]);

  const whatsappIsExternal = labels.whatsappHref.startsWith("http");

  return (
    <div className="xl:hidden">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? labels.closeMenu : labels.openMenu}
        className="inline-flex h-10 w-10 items-center justify-center rounded-md text-navy transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        {isOpen ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
      </button>

      {isOpen ? (
        <div
          ref={panelRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label={labels.navigation}
          className="fixed inset-0 top-[70px] z-50 overflow-y-auto border-t border-slate-200 bg-white px-4 pb-8 pt-6 shadow-xl animate-menu-in"
          tabIndex={-1}
        >
          <div className="container-app mx-auto flex flex-col gap-6">
            <nav aria-label={labels.navigation}>
              <ul className="space-y-1">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="flex items-center justify-between rounded-md px-2 py-2.5 text-base font-medium text-navy transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      {item.label}
                      <IconArrowRight className="h-4 w-4 text-secondary" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="eyebrow">{labels.services}</p>
              <ul className="mt-3 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                {services.map((service) => {
                  const classes =
                    "flex items-center justify-between rounded-md border border-slate-200 bg-surface px-3 py-2.5 text-sm font-medium text-secondary transition-colors hover:border-brand/30 hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";

                  return (
                    <li key={service.label}>
                      {service.href ? (
                        <Link href={service.href} onClick={closeMenu} className={classes}>
                          {service.label}
                          <IconArrowRight className="h-3.5 w-3.5 text-brand" />
                        </Link>
                      ) : (
                        <span className={classes}>{service.label}</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="border-t border-slate-200 pt-5">
              <div className="flex items-center justify-between">
                <LanguageSwitcher lang={lang} compact label={labels.language} />
                <span className="text-xs text-slate-500">EN | BM | 中文</span>
              </div>
            </div>

            <div className="grid gap-2.5">
              <Link
                href={labels.quoteHref}
                onClick={closeMenu}
                className="btn btn-primary text-center"
              >
                <span>{labels.quote}</span>
              </Link>
              <Link
                href={labels.whatsappHref}
                target={whatsappIsExternal ? "_blank" : undefined}
                rel={whatsappIsExternal ? "noreferrer" : undefined}
                onClick={closeMenu}
                className="btn btn-whatsapp text-center"
              >
                <IconWhatsApp className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{labels.whatsapp}</span>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
