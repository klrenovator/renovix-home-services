"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IconArrowRight, IconCamera, IconMapPin, serviceIcons } from "@/components/icons";
import type { ProjectCategoryId } from "@/data/projects";

export type PortfolioCategory = {
  id: ProjectCategoryId;
  label: string;
  href: string | null;
  icon: keyof typeof serviceIcons;
};

export type PortfolioItem = {
  id: string;
  category: ProjectCategoryId;
  src: string;
  width: number;
  height: number;
  heading: string;
  description: string;
  alt: string;
  /** Project detail page, or `null` when the entry has no page of its own. */
  href: string | null;
  /** Verified location label; omitted when no location has been confirmed. */
  locationLabel?: string;
};

export type PortfolioLabels = {
  allCategories: string;
  filterAria: string;
  listRegion: string;
  showingPrefix: string;
  showingSuffixOne: string;
  showingSuffixMany: string;
  showingNote: string;
  fallbackCategory: string;
  exploreServicePrefix: string;
  viewProject: string;
  emptyState: string;
};

type ProjectsPortfolioProps = {
  categories: PortfolioCategory[];
  items: PortfolioItem[];
  labels: PortfolioLabels;
};

type ProjectFilter = "all" | ProjectCategoryId;

export function ProjectsPortfolio({
  categories,
  items,
  labels,
}: ProjectsPortfolioProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");

  /**
   * Only categories that actually have published projects get a filter chip —
   * an empty "Painting" filter would imply work is on the page when it is not.
   */
  const availableCategories = useMemo(
    () =>
      categories.filter((category) =>
        items.some((item) => item.category === category.id),
      ),
    [categories, items],
  );

  const shown = useMemo(
    () =>
      activeFilter === "all"
        ? items
        : items.filter((item) => item.category === activeFilter),
    [activeFilter, items],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2" aria-label={labels.filterAria}>
        <FilterButton
          isActive={activeFilter === "all"}
          label={labels.allCategories}
          onClick={() => setActiveFilter("all")}
        />
        {availableCategories.map((category) => (
          <FilterButton
            key={category.id}
            isActive={activeFilter === category.id}
            label={category.label}
            onClick={() => setActiveFilter(category.id)}
          />
        ))}
      </div>

      <p className="mt-4 text-sm text-secondary" aria-live="polite">
        {labels.showingPrefix} {shown.length}{" "}
        {shown.length === 1 ? labels.showingSuffixOne : labels.showingSuffixMany}{" "}
        {labels.showingNote}
      </p>

      {shown.length === 0 ? (
        <p className="mt-7 rounded-2xl border border-slate-200 bg-white p-6 text-sm text-secondary">
          {labels.emptyState}
        </p>
      ) : (
        <ul
          className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          aria-label={labels.listRegion}
        >
          {shown.map((item, index) => {
            const category = categories.find((entry) => entry.id === item.category);
            const Icon = category ? serviceIcons[category.icon] : IconCamera;

            return (
              <li key={item.id}>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    {item.href ? (
                      <Link
                        href={item.href}
                        aria-label={`${labels.viewProject}: ${item.heading}`}
                        className="block h-full w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
                      >
                        <PortfolioImage item={item} index={index} />
                      </Link>
                    ) : (
                      <PortfolioImage item={item} index={index} />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-2.5 py-1 text-xs font-bold text-navy">
                        <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                        {category?.label ?? labels.fallbackCategory}
                      </span>
                      {item.locationLabel ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-surface px-2.5 py-1 text-xs font-semibold text-secondary">
                          <IconMapPin className="h-3.5 w-3.5" aria-hidden="true" />
                          {item.locationLabel}
                        </span>
                      ) : null}
                    </div>
                    <h3 className="mt-4 text-lg font-semibold tracking-tight text-navy">
                      {item.href ? (
                        <Link
                          href={item.href}
                          className="transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                        >
                          {item.heading}
                        </Link>
                      ) : (
                        item.heading
                      )}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-secondary">
                      {item.description}
                    </p>
                    <div className="mt-5 flex flex-col items-start gap-2.5">
                      {item.href ? (
                        <Link
                          href={item.href}
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                        >
                          {labels.viewProject}
                          <IconArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                      ) : null}
                      {category?.href ? (
                        <Link
                          href={category.href}
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary transition-colors hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                        >
                          {labels.exploreServicePrefix} {category.label}
                          <IconArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

function PortfolioImage({ item, index }: { item: PortfolioItem; index: number }) {
  return (
    <Image
      src={item.src}
      alt={item.alt}
      width={item.width}
      height={item.height}
      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      /**
       * The first row is above the fold on desktop; the rest load lazily so the
       * page keeps a light initial payload.
       */
      priority={index < 3}
      loading={index < 3 ? undefined : "lazy"}
      className="h-full w-full object-cover"
    />
  );
}

function FilterButton({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={`rounded-full border px-3 py-2 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
        isActive
          ? "border-navy bg-navy text-white"
          : "border-slate-200 bg-white text-secondary hover:border-brand/40 hover:text-navy"
      }`}
      type="button"
      aria-pressed={isActive}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
