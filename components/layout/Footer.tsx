import Link from "next/link";
import { Brand } from "@/components/Brand";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import {
  footerNavigation,
  legalNavigation,
  localizeHref,
  localizeNavigation,
} from "@/data/navigation";
import { services } from "@/data/services";
import { areas } from "@/data/areas";
import {
  siteConfig,
  getPhoneHref,
  getEmailHref,
  getWhatsAppHref,
} from "@/data/site";

type FooterProps = {
  lang: string;
};

export function Footer({ lang }: FooterProps) {
  const navigation = localizeNavigation(footerNavigation, lang);
  const legal = localizeNavigation(legalNavigation, lang);

  return (
    <footer className="bg-navy text-white/70">
      <div className="container-app py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="space-y-4">
            <Brand href={`/${lang}`} inverse />
            <p className="max-w-sm text-sm leading-6">
              Professional Home Renovation &amp; Improvement Services in Kuala Lumpur &amp;
              Selangor.
            </p>
            <p className="max-w-sm text-sm leading-6">
              Reliable solutions for renovation, repairs, maintenance and home improvement
              across the Klang Valley.
            </p>
            <div className="pt-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                Language
              </p>
              <LanguageSwitcher lang={lang} inverse className="mt-2" />
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">Services</h2>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={localizeHref(service.path, lang)}
                    className="text-sm transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">Navigation</h2>
            <ul className="mt-4 space-y-2.5">
              {navigation
                .filter((item) => item.href !== `/${lang}/#services`)
                .map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
            </ul>

            <h2 className="mt-7 text-sm font-semibold text-white">Areas We Serve</h2>
            <ul className="mt-4 space-y-2.5">
              {areas.map((area) => (
                <li key={area.id}>
                  <Link
                    href={`/${lang}/#areas`}
                    className="text-sm transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {area.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">Contact</h2>
            <ul className="mt-4 space-y-4 text-sm">
              <li>
                <ContactLink
                  label="Phone"
                  href={getPhoneHref(lang)}
                  value={siteConfig.phone}
                />
              </li>
              <li>
                <ContactLink
                  label="WhatsApp"
                  href={getWhatsAppHref(lang)}
                  value={siteConfig.whatsapp}
                />
              </li>
              <li>
                <ContactLink
                  label="Email"
                  href={getEmailHref(lang)}
                  value={siteConfig.email}
                />
              </li>
              <li>
                <ContactLink
                  label="Address"
                  href={`/${lang}/#contact`}
                  value={siteConfig.address}
                />
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-white/50">
              &copy; {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
            </p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs text-white/60 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
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
      <span className="text-xs font-semibold uppercase tracking-wider text-white/40">
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
