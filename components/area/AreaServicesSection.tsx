import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconArrowRight, IconWrench, serviceIcons } from "@/components/icons";
import { format, getDictionary } from "@/i18n";
import { contentHref } from "@/i18n/hrefs";
import { getServiceCategories } from "@/data/i18n";
import type { AreaDetail } from "@/data/area-content/types";

type AreaServicesSectionProps = {
  area: AreaDetail;
  lang: string;
};

export function AreaServicesSection({ area, lang }: AreaServicesSectionProps) {
  const t = getDictionary(lang);
  const categories = getServiceCategories(lang);

  return (
    <section id="services" className="section section-surface scroll-mt-24">
      <div className="container-app">
        <SectionHeading
          eyebrow={t.areaPage.servicesEyebrow}
          title={format(t.areaPage.servicesTitle, { name: area.name })}
          description={area.servicesIntro}
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {area.servicesAvailable.map((focus) => {
            const service = categories.find((item) => item.slug === focus.serviceSlug);

            if (!service) {
              return null;
            }

            const Icon = serviceIcons[service.icon] ?? IconWrench;

            const href = contentHref("service", service.slug, lang);
            const classes =
              "card card-hover group flex h-full flex-col p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";

            const inner = (
              <>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold tracking-tight text-navy">
                  {format(t.areaPage.serviceInArea, {
                    service: service.name,
                    name: area.name,
                  })}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-secondary">
                  {focus.note}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                  {t.cta.viewService}
                  <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </>
            );

            return href ? (
              <Link key={focus.serviceSlug} href={href} className={classes}>
                {inner}
              </Link>
            ) : (
              <div key={focus.serviceSlug} className={classes}>
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
