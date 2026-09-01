import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { serviceIcons, IconArrowRight, IconWrench } from "@/components/icons";
import { localizeHref } from "@/data/navigation";
import { getServiceBySlug } from "@/data/services";
import type { AreaDetail } from "@/data/area-content/types";

type AreaRelatedServicesSectionProps = {
  area: AreaDetail;
  lang: string;
};

export function AreaRelatedServicesSection({
  area,
  lang,
}: AreaRelatedServicesSectionProps) {
  return (
    <section className="section bg-white">
      <div className="container-app">
        <SectionHeading
          eyebrow="Related Services"
          title={`Services Often Combined in ${area.name}`}
          description={`Most projects in ${area.name} combine several trades. Planning them together keeps the sequence right and the site efficient.`}
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {area.relatedServices.map((slug) => {
            const service = getServiceBySlug(slug);

            if (!service) {
              return null;
            }

            const Icon = serviceIcons[service.icon] ?? IconWrench;

            return (
              <Link
                key={slug}
                href={localizeHref(service.path, lang)}
                className="card card-hover group flex h-full flex-col p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold tracking-tight text-navy">
                  {service.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-secondary">
                  {service.shortDescription}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                  View Service
                  <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
