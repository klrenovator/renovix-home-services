import Link from "next/link";
import { Brand } from "@/components/Brand";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { getLanguageCode, type LanguageCode } from "@/data/languages";
import { getServiceCategories, getRegionName, getRegionSummary } from "@/data/i18n";
import { areaRegions } from "@/data/area-content";
import {
  siteConfig,
  getPhoneHref,
  getEmailHref,
  getWhatsAppHref,
  getContactHref,
} from "@/data/site";
import { getDictionary } from "@/i18n";
import { contentHref, localizedHref } from "@/i18n/hrefs";

type FooterProps = {
  lang: string;
};

export function Footer({ lang }: FooterProps) {
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

  const legal = [
    { label: t.legal.privacy, href: localizedHref("/privacy", code) },
    { label: t.legal.terms, href: localizedHref("/terms", code) },
  ];

  const services = getServiceCategories(code);

  /**
   * Footer links sit on 10px gaps (`space-y-2.5`); `-my-1 py-1` extends each
   * link's tap target to 28px without moving anything visually (WCAG 2.5.8).
   */
  const footerLinkClass =
    "-my-1 py-1 text-sm transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";

  return (
    <footer className="bg-navy text-white/70">
      <div className="container-app py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="space-y-4">
            <Brand href={localizedHref("/", code)} inverse label={t.a11y.brandHome} />
            <p className="max-w-sm text-sm leading-6">{t.footer.blurbPrimary}</p>
            <p className="max-w-sm text-sm leading-6">{t.footer.blurbSecondary}</p>
            <div className="pt-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                {t.footer.language}
              </p>
              <LanguageSwitcher
                lang={code}
                inverse
                className="mt-2"
                label={t.a11y.languageNavigation}
              />
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">{t.footer.services}</h2>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => {
                const href = contentHref("service", service.slug, code);

                return (
                  <li key={service.slug}>
                    {href ? (
                      <Link
                        href={href}
                        className={footerLinkClass}
                      >
                        {service.name}
                      </Link>
                    ) : (
                      <span className="text-sm">{service.name}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">{t.footer.navigation}</h2>
            <ul className="mt-4 space-y-2.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={footerLinkClass}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h2 className="mt-7 text-sm font-semibold text-white">
              {t.footer.areasWeServe}
            </h2>
            <ul className="mt-4 space-y-2.5">
              {areaRegions.map((region) => {
                const href = contentHref("areaRegion", region.id, code);

                return (
                  <li key={region.id}>
                    {href ? (
                      <Link
                        href={href}
                        className={footerLinkClass}
                      >
                        {getRegionName(region.id, code)}
                      </Link>
                    ) : (
                      <span className="text-sm">{getRegionName(region.id, code)}</span>
                    )}
                    <span className="sr-only">
                      {getRegionSummary(region.id, code, region.summary)}
                    </span>
                  </li>
                );
              })}
              <li>
                <Link
                  href={localizedHref("/areas", code)}
                  className={footerLinkClass}
                >
                  {t.cta.allServiceAreas}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">{t.footer.contact}</h2>
            <ul className="mt-4 space-y-4 text-sm">
              <li>
                <ContactLink
                  label={t.footer.phone}
                  href={getPhoneHref(code)}
                  value={siteConfig.phone}
                />
              </li>
              <li>
                <ContactLink
                  label={t.footer.whatsapp}
                  href={getWhatsAppHref(code)}
                  value={siteConfig.whatsapp}
                />
              </li>
              <li>
                <ContactLink
                  label={t.footer.email}
                  href={getEmailHref(code)}
                  value={siteConfig.email}
                />
              </li>
              <li>
                <ContactLink
                  label={t.footer.address}
                  href={getContactHref(code)}
                  value={siteConfig.address}
                />
              </li>
              <li>
                <ContactLink
                  label={t.footer.hours}
                  href={getContactHref(code)}
                  value={siteConfig.businessHours}
                />
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-white/50">
              &copy; {new Date().getFullYear()} {siteConfig.legalName}. {t.footer.rights}
            </p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="-my-1 py-1 text-xs text-white/60 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ContactLink({
  label,
  href,
  value,
}: {
  label: string;
  href: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-2">
      <span className="text-xs font-semibold uppercase tracking-wider text-white/60">
        {label}
      </span>
      <a
        href={href}
        className="break-all text-white/80 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        {value}
      </a>
    </div>
  );
}
