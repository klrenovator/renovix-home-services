import { ServiceHero } from "@/components/service/ServiceHero";
import { OverviewSection } from "@/components/service/OverviewSection";
import { AnswerFirstSection } from "@/components/service/AnswerFirstSection";
import { SubServicesSection } from "@/components/service/SubServicesSection";
import { ProblemsSection } from "@/components/service/ProblemsSection";
import { PricingSection } from "@/components/service/PricingSection";
import { CostFactorsSection } from "@/components/service/CostFactorsSection";
import { MaterialsSection } from "@/components/service/MaterialsSection";
import { DurationSection } from "@/components/service/DurationSection";
import { IncludesExcludesSection } from "@/components/service/IncludesExcludesSection";
import { PropertyTypesSection } from "@/components/service/PropertyTypesSection";
import { ProcessSection } from "@/components/service/ProcessSection";
import { WhySection } from "@/components/service/WhySection";
import { AreasSection } from "@/components/service/AreasSection";
import { FaqSection } from "@/components/service/FaqSection";
import { RelatedServicesSection } from "@/components/service/RelatedServicesSection";
import { CtaSection } from "@/components/service/CtaSection";
import type { ServiceDetail } from "@/data/service-content/types";
import type { ProblemDetail } from "@/data/problem-content/types";

type ServicePageProps = {
  detail: ServiceDetail;
  related: ServiceDetail[];
  relatedProblems: ProblemDetail[];
  lang: string;
};

export function ServicePage({ detail, related, relatedProblems, lang }: ServicePageProps) {
  return (
    <>
      <ServiceHero detail={detail} lang={lang} />
      <AnswerFirstSection detail={detail} lang={lang} />
      <OverviewSection detail={detail} lang={lang} />
      <SubServicesSection detail={detail} lang={lang} />
      <ProblemsSection detail={detail} relatedProblemPages={relatedProblems} lang={lang} />
      <PricingSection detail={detail} lang={lang} />
      <CostFactorsSection detail={detail} lang={lang} />
      <MaterialsSection detail={detail} lang={lang} />
      <DurationSection detail={detail} lang={lang} />
      <IncludesExcludesSection detail={detail} lang={lang} />
      <PropertyTypesSection detail={detail} lang={lang} />
      <ProcessSection detail={detail} lang={lang} />
      <WhySection detail={detail} lang={lang} />
      <AreasSection areasNote={detail.areasNote} lang={lang} />
      <FaqSection detail={detail} lang={lang} />
      <RelatedServicesSection related={related} current={detail} lang={lang} />
      <CtaSection detail={detail} lang={lang} />
    </>
  );
}
