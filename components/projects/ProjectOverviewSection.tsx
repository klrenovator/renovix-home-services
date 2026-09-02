import { IconCheck } from "@/components/icons";
import { getLanguageCode } from "@/data/languages";
import { getDictionary } from "@/i18n";
import type { ResolvedProject } from "@/data/project-content/types";

type ProjectOverviewSectionProps = {
  project: ResolvedProject;
  lang: string;
};

/**
 * Project summary and scope of work.
 *
 * The scope list is rendered only when a scope has actually been supplied —
 * the section is skipped entirely rather than padded with invented bullet
 * points.
 */
export function ProjectOverviewSection({
  project,
  lang,
}: ProjectOverviewSectionProps) {
  const code = getLanguageCode(lang);
  const t = getDictionary(code);
  const scope = project.content.scopeOfWork ?? [];

  return (
    <section className="section section-surface">
      <div className="container-app grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <p className="eyebrow">{t.projectPage.overviewEyebrow}</p>
          <h2 className="h2-section mt-3 text-navy">
            {t.projectPage.overviewTitle}
          </h2>
          <p className="lead mt-5">{project.content.shortDescription}</p>
          {(project.content.fullDescription ?? []).map((paragraph) => (
            <p key={paragraph} className="mt-4 text-base leading-7 text-secondary">
              {paragraph}
            </p>
          ))}

          <p className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-6 text-secondary">
            {t.projectPage.honestyNote}
          </p>
        </div>

        {scope.length > 0 ? (
          <div className="card p-6 sm:p-8">
            <p className="eyebrow">{t.projectPage.scopeEyebrow}</p>
            <h3 className="mt-3 text-xl font-semibold tracking-tight text-navy">
              {t.projectPage.scopeTitle}
            </h3>
            <ul className="mt-5 space-y-3">
              {scope.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20 text-navy">
                    <IconCheck className="h-3 w-3" aria-hidden="true" />
                  </span>
                  <span className="text-sm leading-6 text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}
