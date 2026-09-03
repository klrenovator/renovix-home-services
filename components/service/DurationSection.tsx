import { SectionHeading } from "@/components/ui/SectionHeading";
import { getDictionary, format } from "@/i18n";
import type { ServiceDetail } from "@/data/service-content/types";

type DurationSectionProps = {
  detail: ServiceDetail;
  lang: string;
};

export function DurationSection({ detail, lang }: DurationSectionProps) {
  const t = getDictionary(lang);
  const duration = detail.duration;

  if (!duration || duration.items.length === 0) {
    return null;
  }

  return (
    <section className="section section-surface">
      <div className="container-app">
        <SectionHeading
          eyebrow={t.servicePage.durationEyebrow}
          title={format(t.servicePage.durationTitle, { name: detail.name })}
          description={duration.intro ?? t.servicePage.durationDescription}
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {duration.items.map((item) => (
            <article key={item.label} className="card p-6">
              <h3 className="text-sm font-semibold text-navy">{item.label}</h3>
              <p className="mt-2 text-sm leading-6 text-secondary">{item.value}</p>
            </article>
          ))}
        </div>
        {duration.note ? (
          <p className="mt-6 text-sm leading-6 text-secondary">{duration.note}</p>
        ) : (
          <p className="mt-6 text-sm leading-6 text-secondary">{t.servicePage.durationNote}</p>
        )}
      </div>
    </section>
  );
}
