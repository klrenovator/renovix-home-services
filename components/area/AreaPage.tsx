import { AreaHero } from "@/components/area/AreaHero";
import { AreaAnswerFirstSection } from "@/components/area/AreaAnswerFirstSection";
import { AreaServicesSection } from "@/components/area/AreaServicesSection";
import { AreaIntentMatrixSection } from "@/components/area/AreaIntentMatrixSection";
import { AreaPricingSection } from "@/components/area/AreaPricingSection";
import { AreaPropertyTypesSection } from "@/components/area/AreaPropertyTypesSection";
import { AreaProblemsSection } from "@/components/area/AreaProblemsSection";
import { AreaProcessSection } from "@/components/area/AreaProcessSection";
import { AreaContextSection } from "@/components/area/AreaContextSection";
import { AreaFaqSection } from "@/components/area/AreaFaqSection";
import { AreaRelatedServicesSection } from "@/components/area/AreaRelatedServicesSection";
import { NearbyAreasSection } from "@/components/area/NearbyAreasSection";
import { AreaCtaSection } from "@/components/area/AreaCtaSection";
import { GuideLinksSection } from "@/components/blog/GuideLinksSection";
import { getArticlesForLocation } from "@/data/blog";
import type { AreaDetail } from "@/data/area-content/types";

type AreaPageProps = {
  area: AreaDetail;
  lang: string;
};

export function AreaPage({ area, lang }: AreaPageProps) {
  return (
    <>
      <AreaHero area={area} lang={lang} />
      <AreaAnswerFirstSection area={area} lang={lang} />
      <AreaServicesSection area={area} lang={lang} />
      <AreaIntentMatrixSection area={area} lang={lang} />
      <AreaPricingSection area={area} lang={lang} />
      <AreaPropertyTypesSection area={area} lang={lang} />
      <AreaProblemsSection area={area} lang={lang} />
      <AreaProcessSection area={area} lang={lang} />
      <AreaContextSection area={area} lang={lang} />
      <AreaFaqSection name={area.name} faqs={area.faqs} lang={lang} />
      <AreaRelatedServicesSection area={area} lang={lang} />
      <GuideLinksSection
        surface
        articles={getArticlesForLocation(`${area.region}/${area.slug}`)}
        scope="area"
        name={area.name}
        lang={lang}
      />
      <NearbyAreasSection area={area} lang={lang} />
      <AreaCtaSection name={area.name} lang={lang} />
    </>
  );
}
