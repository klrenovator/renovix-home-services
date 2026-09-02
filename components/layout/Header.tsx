import Link from "next/link";
import { Brand } from "@/components/Brand";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { IconWhatsApp } from "@/components/icons";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { WhatsAppButton } from "@/components/ui/Button";
import { getLanguageCode, type LanguageCode } from "@/data/languages";
import { getServiceCategories } from "@/data/i18n";
import { getWhatsAppHref } from "@/data/site";
import { getDictionary } from "@/i18n";
import { contentHref, localizedHref } from "@/i18n/hrefs";

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
    { label: t.nav.faq, href: "/faq" },
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

        {/* WhatsApp is the primary contact channel for this business, so the
            header action is the WhatsApp button in the official brand green.
            "Get a Quote" CTAs remain throughout the page bodies and on the
            quote page. */}
        <div className="hidden items-center gap-3 xl:flex">
          <LanguageSwitcher lang={code} label={t.a11y.languageNavigation} />
          <WhatsAppButton href={getWhatsAppHref()} label={t.cta.whatsappUs} />
        </div>

        <div className="flex items-center gap-2 xl:hidden sm:gap-3">
          {/* Hidden below `sm`: at 320–380px the brand lockup, the compact
              switcher and the menu button together exceed the viewport and
              push the header into horizontal overflow. Language switching on
              phones stays one tap away inside the mobile menu (and footer). */}
          <div className="hidden sm:block">
            <LanguageSwitcher
              lang={code}
              compact
              label={t.a11y.languageNavigation}
            />
          </div>
          {/* The primary conversion action stays visible on phones instead of
              hiding inside the menu: WhatsApp in the official brand green.
              Below 360px (where the brand lockup, the button and the menu
              trigger no longer fit) it falls back to the menu, which still
              carries the full-width WhatsApp CTA. `aria-label` gives assistive
              tech the full wording and contains the visible text (WCAG 2.5.3). */}
          <a
            href={getWhatsAppHref()}
            target="_blank"
            rel="noreferrer"
            aria-label={t.cta.whatsappUs}
            className="btn btn-whatsapp hidden whitespace-nowrap px-3 min-[360px]:inline-flex"
          >
            <IconWhatsApp className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>{t.cta.whatsappShort}</span>
          </a>
          <MobileMenu
            lang={code}
            navigation={navigation}
            services={getServiceCategories(code).map((service) => ({
              label: service.name,
              href: contentHref("service", service.slug, code),
            }))}
            labels={{
              openMenu: t.a11y.openMenu,
              closeMenu: t.a11y.closeMenu,
              navigation: t.a11y.mobileNavigation,
              services: t.footer.services,
              whatsapp: t.cta.whatsappUs,
              whatsappHref: getWhatsAppHref(),
              language: t.a11y.languageNavigation,
            }}
          />
        </div>
      </div>
    </header>
  );
}
