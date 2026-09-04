import { ProblemHero } from "@/components/problem/ProblemHero";
import { WhatItMeansSection } from "@/components/problem/WhatItMeansSection";
import { ProblemListSection } from "@/components/problem/ProblemListSection";
import { SolutionsSection } from "@/components/problem/SolutionsSection";
import { RelatedServiceSection } from "@/components/problem/RelatedServiceSection";
import { ProblemProcessSection } from "@/components/problem/ProblemProcessSection";
import { PropertyTypesSection } from "@/components/problem/PropertyTypesSection";
import { AreasSection } from "@/components/service/AreasSection";
import { FaqSection } from "@/components/problem/FaqSection";
import { RelatedProblemsSection } from "@/components/problem/RelatedProblemsSection";
import { CtaSection } from "@/components/problem/CtaSection";
import { GuideLinksSection } from "@/components/blog/GuideLinksSection";
import { getArticlesForProblem } from "@/data/blog";
import { IconAlertTriangle, IconCheck, IconShieldCheck } from "@/components/icons";
import { getRelatedProblemDetails } from "@/data/problem-content";
import { format, getDictionary } from "@/i18n";
import type { ProblemDetail } from "@/data/problem-content/types";

type ProblemPageProps = {
  problem: ProblemDetail;
  lang: string;
};

export function ProblemPage({ problem, lang }: ProblemPageProps) {
  const t = getDictionary(lang);
  const related = getRelatedProblemDetails(problem, lang);

  return (
    <>
      <ProblemHero problem={problem} lang={lang} />
      <WhatItMeansSection problem={problem} lang={lang} />
      <ProblemListSection
        eyebrow={t.problemPage.causesEyebrow}
        title={format(t.problemPage.causesTitle, { name: problem.name })}
        description={t.problemPage.causesDescription}
        items={problem.commonCauses}
        icon={<IconAlertTriangle className="h-3.5 w-3.5" />}
        tone="surface"
      />
      <ProblemListSection
        eyebrow={t.problemPage.warningSignsEyebrow}
        title={t.problemPage.warningSignsTitle}
        description={t.problemPage.warningSignsDescription}
        items={problem.warningSigns}
        icon={<IconCheck className="h-3.5 w-3.5" />}
        tone="white"
      />
      <SolutionsSection problem={problem} lang={lang} />
      <ProblemListSection
        eyebrow={t.problemPage.whenToCallEyebrow}
        title={t.problemPage.whenToCallTitle}
        description={t.problemPage.whenToCallDescription}
        items={problem.whenToCall}
        icon={<IconShieldCheck className="h-3.5 w-3.5" />}
        tone="surface"
      />
      <RelatedServiceSection problem={problem} lang={lang} />
      <ProblemProcessSection problem={problem} lang={lang} />
      <PropertyTypesSection problem={problem} lang={lang} />
      <AreasSection areasNote={problem.areasNote} lang={lang} />
      <FaqSection problem={problem} lang={lang} />
      <GuideLinksSection
        articles={getArticlesForProblem(problem.slug)}
        scope="problem"
        name={problem.name}
        lang={lang}
      />
      {related.length > 0 ? (
        <RelatedProblemsSection problems={related} lang={lang} />
      ) : null}
      <CtaSection problem={problem} lang={lang} />
    </>
  );
}
