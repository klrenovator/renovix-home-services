import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { serviceIcons, IconArrowRight } from "@/components/icons";
import { format, getDictionary } from "@/i18n";
import { contentHref } from "@/i18n/hrefs";
import { getServiceCategories } from "@/data/i18n";
import { getProblemServiceDetails } from "@/data/problem-content";
import type { ProblemDetail } from "@/data/problem-content/types";

type RelatedServiceSectionProps = {
  problem: ProblemDetail;
  lang: string;
};

export function RelatedServiceSection({ problem, lang }: RelatedServiceSectionProps) {
  const t = getDictionary(lang);
  const { service, related } = getProblemServiceDetails(problem, lang);
  const categories = getServiceCategories(lang);

  const categoryFor = (slug: string | undefined) =>
    categories.find((item) => item.slug === slug);

  const mainHref = service ? contentHref("service", service.slug, lang) : null;

  const mainCard = service ? (
    <>
      <div>
        <p className="eyebrow-light">{t.problemPage.mainServiceLabel}</p>
        <h3 className="mt-3 text-2xl font-bold tracking-tight">{service.name}</h3>
        <p className="mt-3 text-sm leading-6 text-white/75">
          {problem.relatedServiceNote}
        </p>
      </div>
      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
        {format(t.cta.viewNamed, { name: service.name })}
        <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </>
  ) : null;

  const mainCardClasses =
    "card card-hover group flex h-full flex-col justify-between gap-6 bg-navy p-6 text-white sm:p-8";

  return (
    <section className="section bg-white">
      <div className="container-app">
        <SectionHeading
          eyebrow={t.problemPage.relatedServiceEyebrow}
          title={t.problemPage.relatedServiceTitle}
          description={format(t.problemPage.relatedServiceDescription, {
            problem: problem.name,
            service: service?.name ?? "Renovix",
          })}
        />

        {service ? (
          <div className="mt-10">
            {mainHref ? (
              <Link href={mainHref} className={mainCardClasses}>
                {mainCard}
              </Link>
            ) : (
              <div className={mainCardClasses}>{mainCard}</div>
            )}
          </div>
        ) : null}

        {related.length > 0 ? (
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => {
              const category = categoryFor(item.slug);
              const Icon = category ? serviceIcons[category.icon] : null;
              const href = contentHref("service", item.slug, lang);

              const inner = (
                <>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    {Icon ? <Icon className="h-5 w-5" /> : null}
                  </span>
                  <h3 className="mt-4 text-base font-semibold tracking-tight text-navy">
                    {item.name}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                    {t.cta.viewService}
                    <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </>
              );

              const classes =
                "card card-hover group flex h-full flex-col p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";

              return href ? (
                <Link key={item.slug} href={href} className={classes}>
                  {inner}
                </Link>
              ) : (
                <div key={item.slug} className={classes}>
                  {inner}
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
}
