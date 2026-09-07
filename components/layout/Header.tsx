import Link from "next/link";
import { Brand } from "@/components/Brand";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { IconPhone, IconWhatsApp } from "@/components/icons";
import { HeaderLanguageMenu } from "@/components/layout/HeaderLanguageMenu";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { HeaderSearchBar } from "@/components/search/HeaderSearchBar";
import { HeaderSearchTrigger } from "@/components/search/HeaderSearchTrigger";
import { getLanguageCode, type LanguageCode } from "@/data/languages";
import { getPhoneHref, getWhatsAppHref } from "@/data/site";
import { getDictionary } from "@/i18n";
import { localizedHref } from "@/i18n/hrefs";

type HeaderProps = {
  lang: string;
};

export function Header({ lang }: HeaderProps) {
  const code: LanguageCode = getLanguageCode(lang);
  const t = getDictionary(code);

  const navigation = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.services, href: "/services" },
    { label: t.nav.problems, href: "/problems" },
    { label: t.nav.areas, href: "/areas" },
    { label: t.nav.projects, href: "/projects" },
    { label: t.nav.blog, href: "/blog" },
    { label: t.nav.faq, href: "/faq" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.contact, href: "/contact" },
  ].map((item) => ({ ...item, href: localizedHref(item.href, code) }));

  /** Hamburger keeps the primary pages only; secondary pages stay in the footer. */
  const mobileNavigation = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.services, href: "/services" },
    { label: t.nav.projects, href: "/projects" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.contact, href: "/contact" },
  ].map((item) => ({ ...item, href: localizedHref(item.href, code) }));

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/95 backdrop-blur">
      <div className="container-app flex h-[70px] items-center justify-between gap-4">
        <Brand href={localizedHref("/", code)} label={t.a11y.brandHome} />

        <nav
          aria-label={t.a11y.primaryNavigation}
          className="hidden items-center xl:flex"
        >
          <ul className="flex items-center gap-0.5">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-md px-2.5 py-2 text-sm font-medium text-secondary transition-colors hover:bg-surface hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact CTAs are compact icon circles: WhatsApp at the familiar
            icon size in the official brand green, plus a direct `tel:` call
            circle in brand navy. `aria-label` carries the wording (the icons
            alone are the WCAG 2.5.3 name); "Get a Quote" CTAs remain in page
            bodies and on the quote page. */}
        <div className="hidden items-center gap-3 xl:flex">
          <HeaderSearchBar lang={code} />
          <LanguageSwitcher lang={code} label={t.a11y.languageNavigation} />
          <div className="flex items-center gap-2">
            <a
              href={getWhatsAppHref()}
              target="_blank"
              rel="noreferrer"
              aria-label={t.cta.whatsappUs}
              className="btn btn-whatsapp h-11 w-11 min-h-11 gap-0 rounded-full px-0"
            >
              <IconWhatsApp className="h-5 w-5 shrink-0" aria-hidden="true" />
            </a>
            <a
              href={getPhoneHref()}
              aria-label={t.cta.callNow}
              className="btn btn-secondary h-11 w-11 min-h-11 gap-0 rounded-full px-0"
            >
              <IconPhone className="h-5 w-5 shrink-0" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="flex items-center gap-2 xl:hidden sm:gap-3">
          {/* Language switching beside WhatsApp at every width: the inline
              `EN | BM | 中文` group from `sm` up, and the same switcher behind
              a fixed 40px disclosure button below it, where the brand lockup,
              the WhatsApp button and the menu trigger leave no room for a
              third inline group without pushing the header into horizontal
              overflow at 320–360px. */}
          <div className="hidden sm:block">
            <LanguageSwitcher
              lang={code}
              compact
              label={t.a11y.languageNavigation}
            />
          </div>
          <div className="sm:hidden">
            <HeaderLanguageMenu
              lang={code}
              label={t.a11y.languageMenu}
              listLabel={t.a11y.languageNavigation}
            />
          </div>
          {/* The primary contact actions stay visible on phones instead of
              hiding inside the menu: WhatsApp in the official brand green and
              a direct call circle, both at the familiar 44px icon-button
              size. Below 360px (where the brand lockup, the circles and the
              menu trigger no longer fit) they fall back to the menu, which
              still carries the full-width WhatsApp CTA. `aria-label` gives
              assistive tech the full wording (WCAG 2.5.3). */}
          <div className="hidden items-center gap-2 min-[360px]:flex">
            <HeaderSearchTrigger
              labels={{
                inputLabel: t.search.inputLabel,
                placeholder: t.search.placeholder,
                submit: t.search.submit,
                overlayTitle: t.search.overlayTitle,
                closeOverlay: t.search.closeOverlay,
                typeaheadHint: t.search.typeaheadHint,
              }}
              exampleQueries={t.search.exampleQueries}
              action={localizedHref("/search/", code)}
            />
            <a
              href={getWhatsAppHref()}
              target="_blank"
              rel="noreferrer"
              aria-label={t.cta.whatsappUs}
              className="btn btn-whatsapp h-11 w-11 min-h-11 gap-0 rounded-full px-0"
            >
              <IconWhatsApp className="h-5 w-5 shrink-0" aria-hidden="true" />
            </a>
            <a
              href={getPhoneHref()}
              aria-label={t.cta.callNow}
              className="btn btn-secondary h-11 w-11 min-h-11 gap-0 rounded-full px-0"
            >
              <IconPhone className="h-5 w-5 shrink-0" aria-hidden="true" />
            </a>
          </div>
          <MobileMenu
            lang={code}
            navigation={mobileNavigation}
            labels={{
              openMenu: t.a11y.openMenu,
              closeMenu: t.a11y.closeMenu,
              navigation: t.a11y.mobileNavigation,
              whatsapp: t.cta.whatsappUs,
              whatsappHref: getWhatsAppHref(),
              language: t.a11y.languageNavigation,
              quote: t.cta.getFreeQuote,
              quoteHref: localizedHref("/quote", code),
            }}
          />
        </div>
      </div>
    </header>
  );
}
