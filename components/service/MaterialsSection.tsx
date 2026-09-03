import { SectionHeading } from "@/components/ui/SectionHeading";
import { getDictionary, format } from "@/i18n";
import type { ServiceDetail } from "@/data/service-content/types";

type MaterialsSectionProps = {
  detail: ServiceDetail;
  lang: string;
};

export function MaterialsSection({ detail, lang }: MaterialsSectionProps) {
  const t = getDictionary(lang);
  const materials = detail.materials;
  const intro = detail.materialsIntro ?? t.servicePage.materialsDescription;

  if (!materials || materials.length === 0) {
    return null;
  }

  return (
    <section className="section bg-white">
      <div className="container-app">
        <SectionHeading
          eyebrow={t.servicePage.materialsEyebrow}
          title={format(t.servicePage.materialsTitle, { name: detail.name })}
          description={intro}
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {materials.map((material) => (
            <article key={material.title} className="card p-6">
              <h3 className="h3-card">{material.title}</h3>
              <p className="mt-3 text-sm leading-6 text-secondary">{material.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
