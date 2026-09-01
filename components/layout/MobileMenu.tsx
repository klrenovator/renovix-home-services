"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { IconMenu, IconClose, IconArrowRight, IconWhatsApp } from "@/components/icons";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import {
  primaryNavigation,
  mobileQuickLinks,
  localizeNavigation,
  localizeHref,
  type NavigationItem,
} from "@/data/navigation";
import { services } from "@/data/services";
import { getWhatsAppHref } from "@/data/site";

type MobileMenuProps = {
  lang: string;
};

export function MobileMenu({ lang }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const navigation = localizeNavigation(primaryNavigation, lang);
  const quickLinks = localizeNavigation(mobileQuickLinks, lang);
  const whatsappHref = getWhatsAppHref(lang);

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

    function handleKeydown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMenu();
        trigger?.focus();
      }
    }

    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
      document.body.style.overflow = previousOverflow;
      trigger?.focus();
    };
  }, [isOpen]);

  return (
    <div className="xl:hidden">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="inline-flex h-10 w-10 items-center justify-center rounded-md text-navy transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        {isOpen ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
      </button>

      {isOpen ? (
        <div
          ref={panelRef}
          id="mobile-menu"
          className="fixed inset-0 top-[70px] z-50 overflow-y-auto border-t border-slate-200 bg-white px-4 pb-8 pt-6 shadow-xl animate-menu-in"
          tabIndex={-1}
        >
          <div className="container-app mx-auto flex flex-col gap-6">
            <nav aria-label="Mobile navigation">
              <ul className="space-y-1">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <MobileNavLink item={item} onNavigate={closeMenu} />
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="eyebrow text-primary">Services</p>
              <ul className="mt-3 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={localizeHref(service.path, lang)}
                      onClick={closeMenu}
                      className="flex items-center justify-between rounded-md border border-slate-200 bg-surface px-3 py-2.5 text-sm font-medium text-secondary transition-colors hover:border-brand/30 hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      {service.name}
                      <IconArrowRight className="h-3.5 w-3.5 text-brand" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-slate-200 pt-5">
              <div className="flex items-center justify-between">
                <LanguageSwitcher lang={lang} compact />
                <span className="text-xs text-slate-500">EN | BM | 中文</span>
              </div>
            </div>

            <div className="grid gap-2.5">
              {quickLinks.map((item) => {
                const isWhatsApp = Boolean(item.trailing);
                const linkHref = isWhatsApp ? whatsappHref : item.href;
                const isExternal = linkHref.startsWith("http");

                return (
                  <Link
                    key={item.href}
                    href={linkHref}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    onClick={closeMenu}
                    className={`btn text-center ${
                      isWhatsApp ? "btn-whatsapp" : "btn-primary"
                    }`}
                  >
                    {isWhatsApp ? (
                      <IconWhatsApp className="h-4 w-4 shrink-0" aria-hidden="true" />
                    ) : null}
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function MobileNavLink({
  item,
  onNavigate,
}: {
  item: NavigationItem;
  onNavigate: () => void;
}) {
  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      className="flex items-center justify-between rounded-md px-2 py-2.5 text-base font-medium text-navy transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      {item.label}
      <IconArrowRight className="h-4 w-4 text-secondary" />
    </Link>
  );
}
