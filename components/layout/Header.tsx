import Link from "next/link";
import { Brand } from "@/components/Brand";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Button } from "@/components/ui/Button";
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

        <div className="hidden items-center gap-3 xl:flex">
          <LanguageSwitcher lang={code} label={t.a11y.languageNavigation} />
          <Button href={localizedHref("/quote", code)} variant="primary">
            {t.cta.getFreeQuote}
          </Button>
        </div>

        <div className="flex items-center gap-3 xl:hidden">
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
              quote: t.cta.getFreeQuote,
              quoteHref: localizedHref("/quote", code),
              whatsapp: t.cta.whatsappUs,
              whatsappHref: getWhatsAppHref(code),
              language: t.a11y.languageNavigation,
            }}
          />
        </div>
      </div>
    </header>
  );
}
