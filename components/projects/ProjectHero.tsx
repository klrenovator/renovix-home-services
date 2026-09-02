import Image from "next/image";
import Link from "next/link";
import { IconArrowRight } from "@/components/icons";
import { Breadcrumbs } from "@/components/service/Breadcrumbs";
import { Button, WhatsAppButton } from "@/components/ui/Button";
import { getLanguageCode } from "@/data/languages";
import { getProjectCategory } from "@/data/project-content";
import { getProjectCategories } from "@/data/i18n";
import { getQuoteHref, getWhatsAppHref } from "@/data/site";
import { getDictionary } from "@/i18n";
import { contentHref } from "@/i18n/hrefs";
import type { ResolvedProject } from "@/data/project-content/types";

type ProjectHeroProps = {
  project: ResolvedProject;
  lang: string;
};

/**
 * Project hero: breadcrumb, category + location chips, H1, the two conversion
 * CTAs and the main photograph.
 *
 * The image is rendered at its own aspect ratio (never cropped) and the
 * container is narrowed for portrait frames, so a tall site photo does not
 * dominate the whole viewport.
 */
export function ProjectHero({ project, lang }: ProjectHeroProps) {
  const code = getLanguageCode(lang);
  const t = getDictionary(code);
  const categories = getProjectCategories(code);
  const category = getProjectCategory(project.category);
  const categoryLabel =
    categories.find((item) => item.id === project.category)?.label ??
    t.projects.fallbackCategory;
  const serviceHref = category
    ? contentHref(
        "service",
        category.servicePath.replace("/services/", ""),
        code,
      )
    : null;

  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/20"
      />
      <div className="container-app relative py-12 sm:py-16">
        <Breadcrumbs
          inverse
          items={[
            { label: t.common.home, href: "/" },
            { label: t.projects.breadcrumb, href: "/projects" },
            { label: project.content.title },
          ]}
          lang={code}
        />

        <p className="eyebrow-light">{t.projectPage.eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
          {project.content.title}
        </h1>

        <ul className="mt-5 flex flex-wrap items-center gap-2">
          <li className="inline-flex items-center rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white">
            {serviceHref ? (
              <Link
                href={serviceHref}
                className="transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {categoryLabel}
              </Link>
            ) : (
              categoryLabel
            )}
          </li>
          {project.location ? (
            <li className="inline-flex items-center rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white">
              {project.location.area ?? project.location.region}
            </li>
          ) : null}
          {project.year ? (
            <li className="inline-flex items-center rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white">
              {project.year}
            </li>
          ) : null}
        </ul>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button
            href={getQuoteHref(code)}
            variant="primary"
            icon={<IconArrowRight className="h-4 w-4" />}
          >
            {t.cta.getFreeQuote}
          </Button>
          <WhatsAppButton
            href={getWhatsAppHref()}
            variant="secondary"
            label={t.cta.whatsappUs}
          />
        </div>
      </div>

      {/* The description is deliberately not repeated here — it is the
          overview section's job, so the summary appears once on the page. */}
      <div className="container-app pb-12 sm:pb-16">
        <div
          className={`mx-auto ${
            project.image.height > project.image.width ? "max-w-md" : "max-w-3xl"
          }`}
        >
          <Image
            src={project.image.src}
            alt={project.content.alt}
            width={project.image.width}
            height={project.image.height}
            priority
            sizes="(min-width: 768px) 768px, 100vw"
            className="h-auto w-full rounded-3xl border border-white/10 bg-white/5 shadow-lift"
          />
        </div>
      </div>
    </section>
  );
}
