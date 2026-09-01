import { SectionHeading } from "@/components/ui/SectionHeading";
import { getDictionary } from "@/i18n";
import type { ServiceDetail } from "@/data/service-content/types";

type ProcessSectionProps = {
  detail: ServiceDetail;
  lang: string;
};

export function ProcessSection({ detail, lang }: ProcessSectionProps) {
  const t = getDictionary(lang);

  return (
    <section className="section bg-white">
      <div className="container-app">
        <SectionHeading
          eyebrow={t.servicePage.processEyebrow}
          title={detail.processTitle}
          description={detail.processIntro}
        />

        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {detail.processSteps.map((step, index) => (
            <li
              key={step.title}
              className="relative rounded-2xl border border-slate-200/80 bg-surface p-6"
            >
              <span className="text-xs font-bold tracking-widest text-brand">
                {t.common.step} {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-navy">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-secondary">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
