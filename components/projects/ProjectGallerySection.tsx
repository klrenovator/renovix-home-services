import Image from "next/image";
import { getLanguageCode } from "@/data/languages";
import { getDictionary } from "@/i18n";
import type { ResolvedProject } from "@/data/project-content/types";

type ProjectGallerySectionProps = {
  project: ResolvedProject;
  lang: string;
};

/**
 * Additional photographs of the job, plus a labelled before / after comparison
 * when both frames exist.
 *
 * Both blocks are conditional. A before / after pair is only ever rendered
 * from two real frames of the same job, and a project with no extra photos
 * renders nothing at all — no empty frames that could be mistaken for work.
 */
export function ProjectGallerySection({
  project,
  lang,
}: ProjectGallerySectionProps) {
  const code = getLanguageCode(lang);
  const t = getDictionary(code);
  const gallery = project.gallery ?? [];
  const galleryAlt = project.content.galleryAlt ?? [];
  const beforeAfter = project.beforeAfter;

  if (gallery.length === 0 && !beforeAfter) {
    return null;
  }

  return (
    <section className="section section-surface">
      <div className="container-app">
        <p className="eyebrow">{t.projectPage.galleryEyebrow}</p>
        <h2 className="h2-section mt-3 text-navy">{t.projectPage.galleryTitle}</h2>

        {beforeAfter ? (
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <ComparisonFrame
              label={t.projectPage.beforeLabel}
              src={beforeAfter.before.src}
              width={beforeAfter.before.width}
              height={beforeAfter.before.height}
              alt={project.content.beforeAlt ?? project.content.alt}
            />
            <ComparisonFrame
              label={t.projectPage.afterLabel}
              src={beforeAfter.after.src}
              width={beforeAfter.after.width}
              height={beforeAfter.after.height}
              alt={project.content.afterAlt ?? project.content.alt}
            />
          </div>
        ) : null}

        {gallery.length > 0 ? (
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((image, index) => (
              <li key={image.src}>
                <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
                  <div className="relative aspect-[4/3] bg-slate-100">
                    <Image
                      src={image.src}
                      alt={galleryAlt[index] ?? project.content.alt}
                      width={image.width}
                      height={image.height}
                      loading="lazy"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </figure>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}

function ComparisonFrame({
  label,
  src,
  width,
  height,
  alt,
}: {
  label: string;
  src: string;
  width: number;
  height: number;
  alt: string;
}) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
      <div className="relative aspect-[4/3] bg-slate-100">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          sizes="(min-width: 640px) 50vw, 100vw"
          className="h-full w-full object-cover"
        />
        {/* The state is carried by visible text as well as the image itself, so
            the comparison is not conveyed by the photograph alone. */}
        <figcaption className="absolute left-3 top-3 rounded-full bg-navy/85 px-3 py-1 text-xs font-bold text-white">
          {label}
        </figcaption>
      </div>
    </figure>
  );
}
