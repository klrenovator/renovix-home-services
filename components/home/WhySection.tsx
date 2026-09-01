import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  IconHome,
  IconShieldCheck,
  IconChat,
  IconWrench,
  IconLayers,
  IconMapPin,
  IconClipboard,
} from "@/components/icons";
import { getLanguageCode } from "@/data/languages";
import { getDictionary } from "@/i18n";

const benefitIcons = [
  IconHome,
  IconShieldCheck,
  IconChat,
  IconWrench,
  IconLayers,
  IconMapPin,
  IconClipboard,
];

type WhySectionProps = {
  lang: string;
};

export function WhySection({ lang }: WhySectionProps) {
  const t = getDictionary(getLanguageCode(lang));
  const why = t.home.why;

  return (
    <section id="why" className="section section-surface scroll-mt-24">
      <div className="container-app">
        <SectionHeading
          eyebrow={why.eyebrow}
          title={why.title}
          description={why.description}
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {why.benefits.map((benefit, index) => {
            const Icon = benefitIcons[index % benefitIcons.length];

            return (
              <article key={benefit.title} className="card flex flex-col gap-3 p-6">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-navy">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="h3-card">{benefit.title}</h3>
                <p className="text-sm leading-6 text-secondary">{benefit.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
