import { ServiceHero } from "@/components/service/ServiceHero";
import { OverviewSection } from "@/components/service/OverviewSection";
import { SubServicesSection } from "@/components/service/SubServicesSection";
import { ProblemsSection } from "@/components/service/ProblemsSection";
import { PropertyTypesSection } from "@/components/service/PropertyTypesSection";
import { ProcessSection } from "@/components/service/ProcessSection";
import { WhySection } from "@/components/service/WhySection";
import { AreasSection } from "@/components/service/AreasSection";
import { FaqSection } from "@/components/service/FaqSection";
import { RelatedServicesSection } from "@/components/service/RelatedServicesSection";
import { CtaSection } from "@/components/service/CtaSection";
import type { ServiceDetail } from "@/data/service-content/types";

type ServicePageProps = {
  detail: ServiceDetail;
  related: ServiceDetail[];
  lang: string;
};

export function ServicePage({ detail, related, lang }: ServicePageProps) {
  return (
    <>
      <ServiceHero detail={detail} lang={lang} />
      <OverviewSection detail={detail} lang={lang} />
      <SubServicesSection detail={detail} />
      <ProblemsSection detail={detail} />
      <PropertyTypesSection detail={detail} />
      <ProcessSection detail={detail} />
      <WhySection detail={detail} />
      <AreasSection areasNote={detail.areasNote} />
      <FaqSection detail={detail} />
      <RelatedServicesSection related={related} current={detail} lang={lang} />
      <CtaSection detail={detail} lang={lang} />
    </>
  );
}
