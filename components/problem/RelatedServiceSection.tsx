import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { serviceIcons, IconArrowRight } from "@/components/icons";
import { localizedHref } from "@/i18n/hrefs";
import { services } from "@/data/services";
import { getProblemServiceDetails } from "@/data/problem-content";
import type { ProblemDetail } from "@/data/problem-content/types";

type RelatedServiceSectionProps = {
  problem: ProblemDetail;
  lang: string;
};

export function RelatedServiceSection({ problem, lang }: RelatedServiceSectionProps) {
  const { service, related } = getProblemServiceDetails(problem);

  const categoryFor = (slug: string | undefined) =>
    services.find((item) => item.slug === slug);

  return (
    <section className="section bg-white">
      <div className="container-app">
        <SectionHeading
          eyebrow="Related Renovix Service"
          title="The service that handles this"
          description={`${problem.name} is carried out by our ${service?.name ?? "Renovix"} team. The related services below are often part of the same job.`}
        />

        {service ? (
          <div className="mt-10">
            <Link
              href={localizedHref(categoryFor(service.slug)?.path ?? `/services/${service.slug}`, lang)}
              className="card card-hover group flex h-full flex-col justify-between gap-6 bg-navy p-6 text-white sm:p-8"
            >
              <div>
                <p className="eyebrow-light">Main service</p>
                <h3 className="mt-3 text-2xl font-bold tracking-tight">{service.name}</h3>
                <p className="mt-3 text-sm leading-6 text-white/75">
                  {problem.relatedServiceNote}
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                View {service.name}
                <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        ) : null}

        {related.length > 0 ? (
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => {
              const category = categoryFor(item.slug);
              const Icon = category ? serviceIcons[category.icon] : null;

              return (
                <Link
                  key={item.slug}
                  href={localizedHref(category?.path ?? `/services/${item.slug}`, lang)}
                  className="card card-hover group flex h-full flex-col p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    {Icon ? <Icon className="h-5 w-5" /> : null}
                  </span>
                  <h3 className="mt-4 text-base font-semibold tracking-tight text-navy">
                    {item.name}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                    View Service
                    <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
}
