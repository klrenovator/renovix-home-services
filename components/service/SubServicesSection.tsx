import { SectionHeading } from "@/components/ui/SectionHeading";
import { format, getDictionary } from "@/i18n";
import type { ServiceDetail, SubService } from "@/data/service-content/types";

type SubServicesSectionProps = {
  detail: ServiceDetail;
  lang: string;
};

function SubServiceItem({ subService }: { subService: SubService }) {
  return (
    <li className="card h-full p-5">
      <div className="flex items-start gap-3">
        <span
          aria-hidden="true"
          className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-brand/10 text-xs font-bold text-brand"
        >
          ✓
        </span>
        <div>
          <h3 className="text-sm font-semibold leading-6 text-navy">{subService.name}</h3>
          <p className="mt-1 text-sm leading-6 text-secondary">{subService.description}</p>
        </div>
      </div>
    </li>
  );
}

export function SubServicesSection({ detail, lang }: SubServicesSectionProps) {
  const t = getDictionary(lang);
  const hasGroups = Boolean(detail.subServiceGroups?.length);

  return (
    <section className="section section-surface">
      <div className="container-app">
        <SectionHeading
          eyebrow={t.servicePage.subServicesEyebrow}
          title={format(t.servicePage.subServicesTitle, { name: detail.name })}
          description={detail.subServicesIntro}
        />

        {hasGroups ? (
          <div className="mt-10 space-y-12">
            {detail.subServiceGroups?.map((group) => (
              <div key={group.label}>
                <h3 className="flex items-center gap-3 text-xl font-bold tracking-tight text-navy">
                  <span className="h-1.5 w-8 rounded-full bg-accent" aria-hidden="true" />
                  {group.label}
                </h3>
                <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((subService) => (
                    <SubServiceItem key={subService.name} subService={subService} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {detail.subServices.map((subService) => (
              <SubServiceItem key={subService.name} subService={subService} />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
