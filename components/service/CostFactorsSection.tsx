import { SectionHeading } from "@/components/ui/SectionHeading";
import { getDictionary, format } from "@/i18n";
import type { ServiceDetail } from "@/data/service-content/types";

type CostFactorsSectionProps = {
  detail: ServiceDetail;
  lang: string;
};

export function CostFactorsSection({ detail, lang }: CostFactorsSectionProps) {
  const t = getDictionary(lang);
  const factors = detail.costFactors;
  const intro = detail.costFactorsIntro ?? t.servicePage.costFactorsDescription;

  if (!factors || factors.length === 0) {
    return null;
  }

  return (
    <section className="section section-surface">
      <div className="container-app">
        <SectionHeading
          eyebrow={t.servicePage.costFactorsEyebrow}
          title={format(t.servicePage.costFactorsTitle, { name: detail.name })}
          description={intro}
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {factors.map((factor) => (
            <article key={factor.title} className="card p-6">
              <h3 className="h3-card">{factor.title}</h3>
              <p className="mt-3 text-sm leading-6 text-secondary">{factor.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
