import { SectionHeading } from "@/components/ui/SectionHeading";
import { getDictionary } from "@/i18n";
import type { ServiceDetail } from "@/data/service-content/types";

type IncludesExcludesSectionProps = {
  detail: ServiceDetail;
  lang: string;
};

export function IncludesExcludesSection({ detail, lang }: IncludesExcludesSectionProps) {
  const t = getDictionary(lang);
  const includes = detail.includes;
  const excludes = detail.excludes;

  if ((!includes || includes.length === 0) && (!excludes || excludes.length === 0)) {
    return null;
  }

  return (
    <section className="section section-surface">
      <div className="container-app grid gap-6 lg:grid-cols-2">
        {includes && includes.length > 0 ? (
          <article className="card p-6 sm:p-7">
            <SectionHeading
              eyebrow={t.servicePage.includesEyebrow}
              title={detail.includesTitle ?? t.servicePage.includesTitle}
              description=""
            />
            <ul className="mt-6 space-y-3">
              {includes.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-secondary">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ) : null}
        {excludes && excludes.length > 0 ? (
          <article className="card p-6 sm:p-7">
            <SectionHeading
              eyebrow={t.servicePage.includesEyebrow}
              title={detail.excludesTitle ?? t.servicePage.excludesTitle}
              description=""
            />
            <ul className="mt-6 space-y-3">
              {excludes.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-secondary">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ) : null}
      </div>
    </section>
  );
}
