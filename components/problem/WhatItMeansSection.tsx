import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconSparkles } from "@/components/icons";
import { format, getDictionary } from "@/i18n";
import type { ProblemDetail } from "@/data/problem-content/types";

type WhatItMeansSectionProps = {
  problem: ProblemDetail;
  lang: string;
};

export function WhatItMeansSection({ problem, lang }: WhatItMeansSectionProps) {
  const t = getDictionary(lang);

  return (
    <section className="section bg-white">
      <div className="container-app grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow={t.problemPage.whatItMeansEyebrow}
            title={format(t.problemPage.whatItMeansTitle, { name: problem.name })}
            description={t.problemPage.whatItMeansDescription}
          />
          <div className="mt-6 space-y-4 text-base leading-7 text-secondary">
            {problem.whatItMeans.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="lg:pt-14">
          <div className="card p-6 sm:p-8">
            <p className="eyebrow">{t.problemPage.shortAnswerEyebrow}</p>
            <h3 className="h3-card mt-3 text-navy">{problem.name}</h3>
            <p className="mt-3 text-sm leading-6 text-secondary">{problem.subtitle}</p>
            <ul className="mt-5 space-y-2.5">
              <li className="flex gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-brand">
                  <IconSparkles className="h-3.5 w-3.5" />
                </span>
                <p className="text-sm leading-6 text-secondary">
                  {t.problemPage.shortAnswerNote}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
