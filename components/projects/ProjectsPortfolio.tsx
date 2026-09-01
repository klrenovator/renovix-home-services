"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { IconArrowRight, IconCamera, serviceIcons } from "@/components/icons";
import { localizeHref } from "@/data/navigation";
import type {
  ProjectCategory,
  ProjectCategoryId,
  ProjectPlaceholder,
} from "@/data/projects";

type ProjectsPortfolioProps = {
  categories: ProjectCategory[];
  placeholders: ProjectPlaceholder[];
  lang: string;
};

type ProjectFilter = "all" | ProjectCategoryId;

export function ProjectsPortfolio({
  categories,
  placeholders,
  lang,
}: ProjectsPortfolioProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");

  const shownPlaceholders = useMemo(
    () =>
      activeFilter === "all"
        ? placeholders
        : placeholders.filter((project) => project.category === activeFilter),
    [activeFilter, placeholders],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2" aria-label="Filter portfolio placeholders">
        <FilterButton
          isActive={activeFilter === "all"}
          label="All categories"
          onClick={() => setActiveFilter("all")}
        />
        {categories.map((category) => (
          <FilterButton
            key={category.id}
            isActive={activeFilter === category.id}
            label={category.label}
            onClick={() => setActiveFilter(category.id)}
          />
        ))}
      </div>

      <p className="mt-4 text-sm text-secondary" aria-live="polite">
        Showing {shownPlaceholders.length} {shownPlaceholders.length === 1 ? "placeholder" : "placeholders"}. No completed project details or images are published here yet.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shownPlaceholders.map((project) => {
          const category = categories.find(
            (item) => item.id === project.category,
          );
          const Icon = category ? serviceIcons[category.icon] : IconCamera;

          return (
            <article
              key={project.id}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft"
            >
              <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-slate-100 text-slate-400">
                <div
                  aria-hidden="true"
                  className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand/5"
                />
                <div
                  aria-hidden="true"
                  className="absolute -bottom-10 -left-8 h-36 w-36 rounded-full bg-accent/15"
                />
                <div className="relative flex flex-col items-center gap-2 text-center">
                  <Icon className="h-9 w-9 text-brand/60" />
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary">
                    Image placeholder
                  </span>
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-accent/15 px-2.5 py-1 text-xs font-bold text-navy">
                    {category?.label ?? "Service"}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-secondary">
                    {project.statusLabel}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-navy">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-secondary">
                  {project.description}
                </p>
                {category ? (
                  <Link
                    href={localizeHref(category.servicePath, lang)}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    Explore {category.label} service
                    <IconArrowRight className="h-4 w-4" />
                  </Link>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </div>
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
