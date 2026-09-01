import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconChat, IconCamera, IconClipboard, IconCalendar } from "@/components/icons";
import { getLanguageCode } from "@/data/languages";
import { getDictionary } from "@/i18n";

const stepIcons = [IconChat, IconCamera, IconClipboard, IconCalendar];

type ProcessSectionProps = {
  lang: string;
};

export function ProcessSection({ lang }: ProcessSectionProps) {
  const t = getDictionary(getLanguageCode(lang));
  const process = t.home.process;

  return (
    <section className="section bg-navy text-white">
      <div className="container-app">
        <SectionHeading
          eyebrow={process.eyebrow}
          title={process.title}
          description={process.description}
          inverse
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((step, index) => {
            const Icon = stepIcons[index % stepIcons.length];

            return (
              <article
                key={step.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-widest text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">{step.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
