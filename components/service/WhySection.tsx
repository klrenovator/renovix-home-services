import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconShieldCheck } from "@/components/icons";
import type { ServiceDetail } from "@/data/service-content/types";

type WhySectionProps = {
  detail: ServiceDetail;
};

export function WhySection({ detail }: WhySectionProps) {
  return (
    <section className="section section-surface">
      <div className="container-app">
        <SectionHeading
          eyebrow="Why Renovix"
          title={detail.whyTitle}
          description={detail.whyIntro}
        />

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {detail.whyChoose.map((benefit) => (
            <li key={benefit.title} className="card flex h-full flex-col gap-3 p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <IconShieldCheck className="h-5 w-5" />
              </span>
              <h3 className="h3-card">{benefit.title}</h3>
              <p className="text-sm leading-6 text-secondary">{benefit.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
