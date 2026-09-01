import { SectionHeading } from "@/components/ui/SectionHeading";
import { InlineLinks } from "@/components/service/InlineLinks";
import { IconMapPin } from "@/components/icons";
import type { AreaDetail } from "@/data/area-content/types";

type AreaContextSectionProps = {
  area: AreaDetail;
  lang: string;
};

export function AreaContextSection({ area, lang }: AreaContextSectionProps) {
  return (
    <section className="section section-surface">
      <div className="container-app grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Local Service Context"
            title={`Working in ${area.name} — What to Expect`}
            description={area.contextIntro}
          />
          <div className="mt-6 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-soft">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <IconMapPin className="h-5 w-5" />
              </span>
              <h3 className="text-base font-semibold tracking-tight text-navy">
                Coverage, honestly stated
              </h3>
            </div>
            <p className="mt-3 text-sm leading-6 text-secondary">
              Renovix serves {area.name} as part of our Kuala Lumpur, Selangor and Klang
              Valley coverage. We do not publish an office address or service radius for
              individual areas — appointments are arranged with you directly, and we
              confirm timing and access when you enquire.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {area.context.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="text-base leading-7 text-secondary">
              <InlineLinks text={paragraph} lang={lang} />
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
