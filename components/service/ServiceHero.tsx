import { Breadcrumbs } from "@/components/service/Breadcrumbs";
import { InlineLinks } from "@/components/service/InlineLinks";
import { Button, WhatsAppButton } from "@/components/ui/Button";
import { IconArrowRight, IconMapPin, IconPhone } from "@/components/icons";
import { getPhoneHref, getWhatsAppHref } from "@/data/site";
import { getDictionary } from "@/i18n";
import { localizedHref } from "@/i18n/hrefs";
import type { ServiceDetail } from "@/data/service-content/types";

type ServiceHeroProps = {
  detail: ServiceDetail;
  lang: string;
};

export function ServiceHero({ detail, lang }: ServiceHeroProps) {
  const t = getDictionary(lang);

  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-accent/10"
      />

      <div className="container-app relative py-12 sm:py-16 lg:py-20">
        <Breadcrumbs
          inverse
          items={[
            { label: t.common.home, href: "/" },
            { label: t.servicePage.breadcrumbServices, href: "/services" },
            { label: detail.name },
          ]}
          lang={lang}
        />

        <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
          {detail.h1}
        </h1>

        <div className="mt-6 max-w-3xl space-y-4 text-base leading-7 text-white/80">
          {detail.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>
              <InlineLinks text={paragraph} lang={lang} />
            </p>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button
            href={localizedHref("/quote", lang)}
            variant="primary"
            icon={<IconArrowRight className="h-4 w-4" />}
          >
            {t.cta.getFreeQuote}
          </Button>
          <WhatsAppButton href={getWhatsAppHref()} variant="secondary" label={t.cta.whatsappUs} />
          <Button
            href={getPhoneHref()}
            variant="outline"
            external
            className="border-white/40 text-white hover:bg-white/10"
            icon={<IconPhone className="h-4 w-4" />}
          >
            {t.cta.callNow}
          </Button>
        </div>

        <ul className="mt-8 flex flex-wrap gap-2">
          <li className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90">
            <IconMapPin className="h-3.5 w-3.5 text-accent" />
            {t.common.klSelangor}
          </li>
          <li className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90">
            {detail.name}
          </li>
          <li className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90">
            {t.common.freeQuotation}
          </li>
        </ul>
      </div>
    </section>
  );
}
