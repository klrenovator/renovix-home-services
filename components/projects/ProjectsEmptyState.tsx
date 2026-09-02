import { IconCamera, IconArrowRight, IconWhatsApp } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { getLanguageCode } from "@/data/languages";
import { getWhatsAppHref } from "@/data/site";
import { getDictionary } from "@/i18n";
import { localizedHref } from "@/i18n/hrefs";

type ProjectsEmptyStateProps = {
  lang: string;
};

/**
 * Shown when no project has been published yet.
 *
 * This is an intentional, designed state — not a broken page. It explains that
 * the showcases are being updated, states plainly that only real work is
 * published, and offers the two working conversion routes (the Phase 12 quote
 * form and WhatsApp). No counts, no statistics and no claims about completed
 * projects appear here, because none have been verified.
 */
export function ProjectsEmptyState({ lang }: ProjectsEmptyStateProps) {
  const code = getLanguageCode(lang);
  const t = getDictionary(code);

  return (
    <div className="card overflow-hidden">
      <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[auto_1fr] lg:items-start lg:gap-10">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15 text-navy">
          <IconCamera className="h-7 w-7" aria-hidden="true" />
        </span>

        <div>
          <p className="eyebrow">{t.projects.emptyEyebrow}</p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            {t.projects.emptyTitle}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-secondary">
            {t.projects.emptyBody}
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-secondary">
            {t.projects.emptyNote}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button
              href={localizedHref("/quote", code)}
              variant="primary"
              icon={<IconArrowRight className="h-4 w-4" />}
            >
              {t.projects.emptyCtaPrimary}
            </Button>
            <Button
              href={getWhatsAppHref()}
              variant="whatsapp"
              external
              icon={<IconWhatsApp className="h-4 w-4 shrink-0" />}
            >
              {t.projects.emptyCtaSecondary}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
