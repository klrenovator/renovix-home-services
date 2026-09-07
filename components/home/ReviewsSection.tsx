import { IconGoogle } from "@/components/icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getLanguageCode } from "@/data/languages";
import { getDictionary } from "@/i18n";

type ReviewsSectionProps = {
  lang: string;
};

function Stars() {
  return (
    <span className="flex gap-0.5 text-[#FABB05]" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-current">
          <path d="M10 1.5 12.5 7l6 .9-4.3 4.2 1 5.9L10 15.2 4.8 18l1-5.9L1.5 7.9 7.5 7 10 1.5Z" />
        </svg>
      ))}
    </span>
  );
}

function ReviewCard({
  name,
  area,
  service,
  quote,
  postedOn,
}: {
  name: string;
  area: string;
  service: string;
  quote: string;
  postedOn: string;
}) {
  return (
    <article className="flex w-[min(100%,20rem)] shrink-0 flex-col gap-3 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-soft">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
            {name.slice(0, 1)}
          </span>
          <div>
            <p className="text-sm font-semibold text-navy">{name}</p>
            <p className="text-xs text-secondary">
              {area} · {service}
            </p>
          </div>
        </div>
        <IconGoogle className="h-5 w-5 shrink-0" />
      </div>
      <Stars />
      <p className="text-sm leading-6 text-ink">{quote}</p>
      <p className="mt-auto text-xs text-secondary">{postedOn}</p>
    </article>
  );
}

export function ReviewsSection({ lang }: ReviewsSectionProps) {
  const t = getDictionary(getLanguageCode(lang));
  const reviews = t.home.reviews;
  const loop = [...reviews.items, ...reviews.items];

  return (
    <section className="section bg-white">
      <div className="container-app">
        <SectionHeading
          eyebrow={reviews.eyebrow}
          title={reviews.title}
          description={reviews.description}
        />
      </div>

      <div className="reviews-marquee mt-10">
        <div className="reviews-track">
          {loop.map((item, index) => (
            <ReviewCard key={`${item.name}-${index}`} {...item} postedOn={reviews.postedOn} />
          ))}
        </div>
      </div>
    </section>
  );
}
