import { getLanguageCode } from "@/data/languages";
import { getDictionary } from "@/i18n";
import type { ResolvedProject } from "@/data/project-content/types";

type ProjectDetailsSectionProps = {
  project: ResolvedProject;
  lang: string;
};

/**
 * Verified project details.
 *
 * The whole section is conditional: with no confirmed details the page does
 * not render an empty table or placeholder rows. Values come from the project
 * data as plain text, so nothing here can inject markup.
 */
export function ProjectDetailsSection({
  project,
  lang,
}: ProjectDetailsSectionProps) {
  const code = getLanguageCode(lang);
  const t = getDictionary(code);
  const details = project.content.details ?? [];

  if (details.length === 0) {
    return null;
  }

  return (
    <section className="section bg-white">
      <div className="container-app">
        <p className="eyebrow">{t.projectPage.detailsEyebrow}</p>
        <h2 className="h2-section mt-3 text-navy">{t.projectPage.detailsTitle}</h2>

        <dl className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
          {details.map((detail) => (
            <div
              key={detail.key}
              className="rounded-2xl border border-slate-200 bg-surface p-5"
            >
              <dt className="text-xs font-bold uppercase tracking-[0.14em] text-brand">
                {t.projectPage.detailLabels[detail.key]}
              </dt>
              <dd className="mt-2 text-sm font-semibold text-navy">
                {detail.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
