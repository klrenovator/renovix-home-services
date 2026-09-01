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
import { IconAlertTriangle, IconCheck, IconShieldCheck } from "@/components/icons";
import { getRelatedProblemDetails } from "@/data/problem-content";
import type { ProblemDetail } from "@/data/problem-content/types";

type ProblemPageProps = {
  problem: ProblemDetail;
  lang: string;
};

export function ProblemPage({ problem, lang }: ProblemPageProps) {
  const related = getRelatedProblemDetails(problem);

  return (
    <>
      <ProblemHero problem={problem} lang={lang} />
      <WhatItMeansSection problem={problem} />
      <ProblemListSection
        eyebrow="Common Causes"
        title={`What usually causes ${problem.name.toLowerCase()}`}
        description={`Understanding the cause helps you know why it happened and what the right fix is.`}
        items={problem.commonCauses}
        icon={<IconAlertTriangle className="h-3.5 w-3.5" />}
        tone="surface"
      />
      <ProblemListSection
        eyebrow="Warning Signs"
        title="Warning signs to look out for"
        description="Spotting these signs early can often prevent a small problem from becoming a larger repair."
        items={problem.warningSigns}
        icon={<IconCheck className="h-3.5 w-3.5" />}
        tone="white"
      />
      <SolutionsSection problem={problem} />
      <ProblemListSection
        eyebrow="When to Call a Professional"
        title="When professional help is needed"
        description="Some problems are worth handling early, and some should always be left to a professional. Here is when to get in touch."
        items={problem.whenToCall}
        icon={<IconShieldCheck className="h-3.5 w-3.5" />}
        tone="surface"
      />
      <RelatedServiceSection problem={problem} lang={lang} />
      <ProblemProcessSection problem={problem} />
      <PropertyTypesSection problem={problem} />
      <AreasSection areasNote={problem.areasNote} />
      <FaqSection problem={problem} />
      {related.length > 0 ? (
        <RelatedProblemsSection problems={related} current={problem} lang={lang} />
      ) : null}
      <CtaSection problem={problem} lang={lang} />
    </>
  );
}
