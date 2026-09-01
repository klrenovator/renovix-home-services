import { SectionHeading } from "@/components/ui/SectionHeading";
import { InlineLinks } from "@/components/service/InlineLinks";
import { IconMapPin } from "@/components/icons";
import { format, getDictionary } from "@/i18n";
import type { AreaDetail } from "@/data/area-content/types";

type AreaContextSectionProps = {
  area: AreaDetail;
  lang: string;
};

export function AreaContextSection({ area, lang }: AreaContextSectionProps) {
  const t = getDictionary(lang);

  return (
    <section className="section section-surface">
      <div className="container-app grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow={t.areaPage.contextEyebrow}
            title={format(t.areaPage.contextTitle, { name: area.name })}
            description={area.contextIntro}
          />
          <div className="mt-6 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-soft">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <IconMapPin className="h-5 w-5" />
              </span>
              <h3 className="text-base font-semibold tracking-tight text-navy">
                {t.areaPage.coverageNoteTitle}
              </h3>
            </div>
            <p className="mt-3 text-sm leading-6 text-secondary">
              {t.areaPage.coverageNote}
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
