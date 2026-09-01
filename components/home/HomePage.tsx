import { Hero } from "@/components/home/Hero";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { WhySection } from "@/components/home/WhySection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { AreasSection } from "@/components/home/AreasSection";
import { CTASection } from "@/components/home/CTASection";
import { FAQPreview } from "@/components/home/FAQPreview";

type HomePageProps = {
  lang: string;
};

export function HomePage({ lang }: HomePageProps) {
  return (
    <>
      <Hero lang={lang} />
      <ServicesSection lang={lang} />
      <ProblemSection lang={lang} />
      <WhySection />
      <ProcessSection />
      <AreasSection lang={lang} />
      <CTASection lang={lang} />
      <FAQPreview lang={lang} />
    </>
  );
}
