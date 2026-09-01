import { Breadcrumbs } from "@/components/service/Breadcrumbs";
import { InlineLinks } from "@/components/service/InlineLinks";
import { Button, WhatsAppButton } from "@/components/ui/Button";
import { IconArrowRight, IconMapPin } from "@/components/icons";
import { getWhatsAppHref } from "@/data/site";
import { localizeHref } from "@/data/navigation";
import { getAreaRegion } from "@/data/area-content";
import type { AreaDetail } from "@/data/area-content/types";

type AreaHeroProps = {
  area: AreaDetail;
  lang: string;
};

export function AreaHero({ area, lang }: AreaHeroProps) {
  const region = getAreaRegion(area.region);

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
          lang={lang}
          items={[
            { label: "Home", href: "/" },
            { label: "Service Areas", href: "/areas" },
            ...(region ? [{ label: region.name, href: `/areas/${region.id}` }] : []),
            { label: area.name },
          ]}
        />

        <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
          {area.h1}
        </h1>

        <div className="mt-6 max-w-3xl space-y-4 text-base leading-7 text-white/80">
          {area.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>
              <InlineLinks text={paragraph} lang={lang} />
            </p>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button
            href={localizeHref("/#contact", lang)}
            variant="primary"
            icon={<IconArrowRight className="h-4 w-4" />}
          >
            Get a Free Quote
          </Button>
          <WhatsAppButton href={getWhatsAppHref(lang)} variant="secondary" />
        </div>

        <ul className="mt-8 flex flex-wrap gap-2">
          <li className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90">
            <IconMapPin className="h-3.5 w-3.5 text-accent" />
            {region?.name ?? "Klang Valley"}
          </li>
          <li className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90">
            Klang Valley
          </li>
          <li className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90">
            Free Quotation
          </li>
        </ul>
      </div>
    </section>
  );
}
