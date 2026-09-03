import { SectionHeading } from "@/components/ui/SectionHeading";
import { getDictionary, format } from "@/i18n";
import type { ServiceDetail } from "@/data/service-content/types";

type AnswerFirstSectionProps = {
  detail: ServiceDetail;
  lang: string;
};

export function AnswerFirstSection({ detail, lang }: AnswerFirstSectionProps) {
  const t = getDictionary(lang);
  const answers = detail.answerFirst;

  if (!answers || answers.length === 0) {
    return null;
  }

  return (
    <section className="section bg-white">
      <div className="container-app">
        <SectionHeading
          eyebrow={t.servicePage.answerFirstEyebrow}
          title={format(t.servicePage.answerFirstTitle, { name: detail.name })}
          description={t.servicePage.answerFirstDescription}
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {answers.map((item) => (
            <article key={item.question} className="card p-6">
              <h3 className="text-[15px] font-semibold leading-6 text-navy">{item.question}</h3>
              <p className="mt-3 text-sm leading-7 text-secondary">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
