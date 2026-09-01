import { AreaHero } from "@/components/area/AreaHero";
import { AreaServicesSection } from "@/components/area/AreaServicesSection";
import { AreaPropertyTypesSection } from "@/components/area/AreaPropertyTypesSection";
import { AreaProblemsSection } from "@/components/area/AreaProblemsSection";
import { AreaProcessSection } from "@/components/area/AreaProcessSection";
import { AreaContextSection } from "@/components/area/AreaContextSection";
import { AreaFaqSection } from "@/components/area/AreaFaqSection";
import { AreaRelatedServicesSection } from "@/components/area/AreaRelatedServicesSection";
import { NearbyAreasSection } from "@/components/area/NearbyAreasSection";
import { AreaCtaSection } from "@/components/area/AreaCtaSection";
import type { AreaDetail } from "@/data/area-content/types";

type AreaPageProps = {
  area: AreaDetail;
  lang: string;
};

export function AreaPage({ area, lang }: AreaPageProps) {
  return (
    <>
      <AreaHero area={area} lang={lang} />
      <AreaServicesSection area={area} lang={lang} />
      <AreaPropertyTypesSection area={area} />
      <AreaProblemsSection area={area} lang={lang} />
      <AreaProcessSection area={area} />
      <AreaContextSection area={area} lang={lang} />
      <AreaFaqSection name={area.name} faqs={area.faqs} />
      <AreaRelatedServicesSection area={area} lang={lang} />
      <NearbyAreasSection area={area} lang={lang} />
      <AreaCtaSection name={area.name} lang={lang} />
    </>
  );
}
