import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { serviceIcons, IconArrowRight, IconWrench } from "@/components/icons";
import { format, getDictionary } from "@/i18n";
import { contentHref } from "@/i18n/hrefs";
import { getServiceCategories } from "@/data/i18n";
import type { ServiceDetail } from "@/data/service-content/types";

type RelatedServicesSectionProps = {
  related: ServiceDetail[];
  current: ServiceDetail;
  lang: string;
};

export function RelatedServicesSection({
  related,
  current,
  lang,
}: RelatedServicesSectionProps) {
  const t = getDictionary(lang);
  const categories = getServiceCategories(lang);

  return (
    <section className="section bg-white">
      <div className="container-app">
        <SectionHeading
          eyebrow={t.servicePage.relatedEyebrow}
          title={t.servicePage.relatedTitle}
          description={format(t.servicePage.relatedDescription, { name: current.name })}
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((service) => {
            const category = categories.find((item) => item.slug === service.slug);
            const Icon = category ? serviceIcons[category.icon] : IconWrench;
            const href = contentHref("service", service.slug, lang);

            const inner = (
              <>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold tracking-tight text-navy">
                  {service.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-secondary">
                  {category?.shortDescription}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                  {t.cta.viewService}
                  <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </>
            );

            const classes =
              "card card-hover group flex h-full flex-col p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";

            return href ? (
              <Link key={service.slug} href={href} className={classes}>
                {inner}
              </Link>
            ) : (
              <div key={service.slug} className={classes}>
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
