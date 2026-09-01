import Link from "next/link";
import { lang as rootLang } from "next/root-params";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getLanguageCode } from "@/data/languages";
import { getDictionary } from "@/i18n";
import { localizedHref } from "@/i18n/hrefs";

/**
 * `not-found.tsx` receives no `params` prop, so the active language is read from
 * the root parameter exposed by `next/root-params` (`[lang]` sits above the root
 * layout in `app/[lang]/layout.tsx`).
 */
export default async function LocaleNotFound() {
  const code = getLanguageCode(await rootLang());
  const t = getDictionary(code);

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-app">
        <SectionHeading
          eyebrow={t.notFound.eyebrow}
          title={t.notFound.title}
          description={t.notFound.description}
          align="center"
        />
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href={localizedHref("/", code)} className="btn btn-primary">
            {t.cta.backToHome}
          </Link>
          <Link href={localizedHref("/services", code)} className="btn btn-outline">
            {t.notFound.services}
          </Link>
          <Link href={localizedHref("/areas", code)} className="btn btn-ghost">
            {t.notFound.areas}
          </Link>
        </div>
      </div>
    </section>
  );
}
