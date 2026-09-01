import { SectionHeading } from "@/components/ui/SectionHeading";
import { InlineLinks } from "@/components/service/InlineLinks";
import { IconCheck } from "@/components/icons";
import { getDictionary } from "@/i18n";
import type { ServiceDetail } from "@/data/service-content/types";

type OverviewSectionProps = {
  detail: ServiceDetail;
  lang: string;
};

export function OverviewSection({ detail, lang }: OverviewSectionProps) {
  const t = getDictionary(lang);

  return (
    <section className="section bg-white">
      <div className="container-app grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow={t.servicePage.overviewEyebrow}
            title={detail.overviewTitle}
            description={detail.overviewIntro}
          />
          <div className="mt-6 space-y-4 text-base leading-7 text-secondary">
            {detail.overviewParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>
                <InlineLinks text={paragraph} lang={lang} />
              </p>
            ))}
          </div>
        </div>

        <div className="lg:pt-14">
          <div className="card p-6 sm:p-8">
            <h3 className="h3-card text-navy">{t.servicePage.highlightsTitle}</h3>
            <ul className="mt-5 space-y-4">
              {detail.highlights.map((highlight) => (
                <li key={highlight.title} className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-brand">
                    <IconCheck className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-navy">{highlight.title}</p>
                    <p className="mt-1 text-sm leading-6 text-secondary">
                      {highlight.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
