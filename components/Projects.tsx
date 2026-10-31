"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  Briefcase,
  Building2,
  ChevronDown,
  Cpu,
  Home,
  Landmark,
  Search,
  ShieldCheck,
  Sparkles,
  Wallet,
  X,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import {
  projectCategories,
  projects,
  type ProjectCategory,
} from "@/lib/data";

const MOBILE_PAGE_SIZE = 5;

const categoryMeta: Record<
  ProjectCategory,
  { icon: LucideIcon; className: string }
> = {
  "Enterprise & Logistics": {
    icon: Building2,
    className:
      "border-slate-200 bg-slate-100 text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300",
  },
  "AI & Compute": {
    icon: Cpu,
    className:
      "border-blue-100 bg-blue-50 text-blue-700 dark:border-blue-900 dark:bg-blue-950/50 dark:text-blue-300",
  },
  "Identity & Compliance": {
    icon: ShieldCheck,
    className:
      "border-indigo-100 bg-indigo-50 text-indigo-700 dark:border-indigo-900 dark:bg-indigo-950/50 dark:text-indigo-300",
  },
  "Web3 & DeFi": {
    icon: Wallet,
    className:
      "border-cyan-100 bg-cyan-50 text-cyan-700 dark:border-cyan-900 dark:bg-cyan-950/50 dark:text-cyan-300",
  },
  "Fintech & Payments": {
    icon: Landmark,
    className:
      "border-emerald-100 bg-emerald-50 text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-300",
  },
  "Product & Design": {
    icon: Activity,
    className:
      "border-violet-100 bg-violet-50 text-violet-700 dark:border-violet-900 dark:bg-violet-950/50 dark:text-violet-300",
  },
  "Real Estate": {
    icon: Home,
    className:
      "border-rose-100 bg-rose-50 text-rose-700 dark:border-rose-900 dark:bg-rose-950/50 dark:text-rose-300",
  },
  "Government & Social": {
    icon: Briefcase,
    className:
      "border-amber-100 bg-amber-50 text-amber-700 dark:border-amber-900 dark:bg-amber-950/50 dark:text-amber-300",
  },
};

export default function Projects() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"All" | ProjectCategory>("All");
  const [mobileLimit, setMobileLimit] = useState(MOBILE_PAGE_SIZE);

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesCategory =
        category === "All" || project.category === category;
      const matchesQuery =
        term.length === 0 ||
        [
          project.title,
          project.subtitle,
          project.description,
          project.role,
          project.category,
          ...project.stack,
          ...(project.bullets ?? []),
        ]
          .join(" ")
          .toLowerCase()
          .includes(term);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  // Reset mobile limit when filter/search changes
  const handleCategory = (item: "All" | ProjectCategory) => {
    setCategory(item);
    setMobileLimit(MOBILE_PAGE_SIZE);
  };
  const handleQuery = (value: string) => {
    setQuery(value);
    setMobileLimit(MOBILE_PAGE_SIZE);
  };

  return (
    // overflow-x-clip contains the -mx-5 filter strip so it doesn't create page scroll
    <section id="projects" className="relative overflow-x-clip py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            index="04"
            eyebrow="Selected Work"
            title="28 enterprise, AI, and Web3 products delivered."
            description="Search the full project directory or filter by domain. Every engagement includes the delivery role, scope, and outcome from the resume."
          />
          <div className="rounded-2xl border border-line bg-surface px-4 py-3 lg:shrink-0 sm:px-5 sm:py-4">
            <p className="text-2xl font-semibold tracking-tight text-ink">
              {filtered.length}
              <span className="text-sm font-normal text-muted">
                {" "}
                / {projects.length}
              </span>
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
              Projects in view
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3">
          {/* Search */}
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted" />
            <input
              type="search"
              value={query}
              onChange={(event) => handleQuery(event.target.value)}
              placeholder="Search projects, roles, or stacks…"
              className="w-full rounded-2xl border border-line bg-surface py-2.5 pl-11 pr-11 text-sm text-ink shadow-sm shadow-black/5 outline-none transition-colors placeholder:text-muted/70 focus:border-accent/40 focus:ring-4 focus:ring-accent/10 sm:py-3"
              aria-label="Search projects"
            />
            {query ? (
              <button
                type="button"
                onClick={() => handleQuery("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 grid size-7 -translate-y-1/2 place-items-center rounded-full text-muted transition-colors hover:bg-surface-2 hover:text-ink"
              >
                <X className="size-4" />
              </button>
            ) : null}
          </div>

          {/* Filter pills — horizontal scroll on mobile */}
          <div className="-mx-5 ml-[10px] flex snap-x snap-mandatory touch-pan-x gap-2 overflow-x-auto overflow-y-hidden px-5 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0">
            {projectCategories.map((item) => {
              const isActive = category === item;
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => handleCategory(item)}
                  className={`shrink-0 snap-start rounded-full border px-3 py-1.5 text-xs font-medium transition-all sm:shrink sm:px-3.5 sm:py-2 sm:text-sm ${
                    isActive
                      ? "border-accent bg-accent text-white shadow-lg shadow-indigo-500/20"
                      : "border-line bg-surface text-muted hover:border-accent/30 hover:text-ink"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project cards */}
        <motion.div layout className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => {
              // On mobile show MOBILE_PAGE_SIZE initially; on sm+ show all
              // We use a CSS trick: hide cards beyond the limit only on mobile
              const hiddenOnMobile = index >= mobileLimit;
              const meta = categoryMeta[project.category];
              const Icon = meta.icon;
              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.98 }}
                  transition={{
                    duration: 0.35,
                    delay: Math.min(index * 0.02, 0.25),
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`card-hover flex flex-col rounded-2xl border bg-surface p-5 ${
                    project.featured
                      ? "border-accent/20 shadow-sm shadow-indigo-100/70 dark:shadow-black/20"
                      : "border-line"
                  } ${hiddenOnMobile ? "hidden md:flex" : "flex"}`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] ${meta.className}`}
                    >
                      <Icon className="size-3" />
                      {project.category}
                    </span>
                    {project.featured ? (
                      <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-amber-700 dark:border-amber-900 dark:bg-amber-950/50 dark:text-amber-300">
                        <Sparkles className="size-3" />
                        Featured
                      </span>
                    ) : null}
                  </div>

                  <h3 className="mt-4 text-base font-semibold leading-snug text-ink">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-muted">
                    {project.subtitle}
                  </p>

                  <span className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-lg border border-accent/15 bg-accent-soft px-2.5 py-1 text-[10px] font-semibold text-accent">
                    <Briefcase className="size-3" />
                    {project.role}
                  </span>

                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>

                  {project.bullets?.length ? (
                    <ul className="mt-3 space-y-2 border-t border-line pt-3">
                      {project.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex gap-2 text-xs leading-relaxed text-muted"
                        >
                          <span className="mt-1.5 size-1 shrink-0 rounded-full bg-accent" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
                    {project.stack.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-line bg-surface-2 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.08em] text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Load more — mobile only, shown when there are more items */}
        {filtered.length > mobileLimit && (
          <div className="mt-6 md:hidden">
            <button
              type="button"
              onClick={() => setMobileLimit((prev) => prev + MOBILE_PAGE_SIZE)}
              className="flex w-full items-center justify-center gap-2 rounded-2xl border border-line bg-surface py-3 text-sm font-medium text-muted transition-colors hover:border-accent/30 hover:text-ink"
            >
              <ChevronDown className="size-4" />
              Load more
              <span className="rounded-full bg-surface-2 px-2 py-0.5 font-mono text-[10px] text-muted">
                {Math.min(MOBILE_PAGE_SIZE, filtered.length - mobileLimit)} more
              </span>
            </button>
          </div>
        )}

        {filtered.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-7 rounded-2xl border border-dashed border-line bg-surface px-6 py-14 text-center"
          >
            <Search className="mx-auto size-8 text-line-strong" />
            <p className="mt-3 text-sm font-medium text-ink">No projects found</p>
            <p className="mt-1 text-sm text-muted">
              Try a different keyword or reset the filters.
            </p>
            <button
              type="button"
              onClick={() => {
                handleQuery("");
                handleCategory("All");
              }}
              className="mt-4 rounded-full bg-accent px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-indigo-700"
            >
              Reset filters
            </button>
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}
