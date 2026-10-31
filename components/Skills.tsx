"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ClipboardCheck,
  Landmark,
  Network,
  PenTool,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import {
  skillCategories,
  skillGroups,
  tools,
  type SkillCategory,
} from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  clipboard: ClipboardCheck,
  finance: Landmark,
  design: PenTool,
  domain: Network,
};

const accentMap: Record<SkillCategory, string> = {
  "Project Leadership":
    "text-indigo-600 bg-indigo-50 border-indigo-100 dark:text-indigo-300 dark:bg-indigo-950/50 dark:border-indigo-900",
  "Operations & Finance":
    "text-emerald-600 bg-emerald-50 border-emerald-100 dark:text-emerald-300 dark:bg-emerald-950/50 dark:border-emerald-900",
  "Product & Design":
    "text-blue-600 bg-blue-50 border-blue-100 dark:text-blue-300 dark:bg-blue-950/50 dark:border-blue-900",
  "Domain Expertise":
    "text-cyan-600 bg-cyan-50 border-cyan-100 dark:text-cyan-300 dark:bg-cyan-950/50 dark:border-cyan-900",
};

export default function Skills() {
  const [active, setActive] = useState<"All" | SkillCategory>("All");

  const visibleGroups = useMemo(
    () =>
      active === "All"
        ? skillGroups
        : skillGroups.filter((group) => group.category === active),
    [active],
  );

  return (
    // overflow-x-clip contains the -mx-5 and -mx-6 carousels so they don't create page-level horizontal scroll
    <section id="skills" className="relative overflow-x-clip border-y border-line bg-surface/60 py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="02"
          eyebrow="Skills"
          title="A cross-functional toolkit built for delivery."
          description="Category-filtered competencies spanning project leadership, operations, product direction, and the domains I work in every day."
        />

        {/* Filter pills — horizontal scroll on mobile */}
        <div className="-mx-5 ml-[10px] mt-8 flex snap-x snap-mandatory touch-pan-x gap-2 overflow-x-auto overflow-y-hidden px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0">
          {skillCategories.map((category) => {
            const isActive = active === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                className={`relative shrink-0 snap-start rounded-full px-3 py-1.5 text-xs font-medium transition-colors sm:px-4 sm:py-2 sm:text-sm ${
                  isActive
                    ? "text-white"
                    : "border border-line bg-surface text-muted hover:border-accent/30 hover:text-ink"
                }`}
              >
                {isActive ? (
                  <motion.span
                    layoutId="skill-active"
                    className="absolute inset-0 rounded-full bg-accent shadow-lg shadow-indigo-500/20"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                ) : null}
                <span className="relative z-10">{category}</span>
              </button>
            );
          })}
        </div>

        {/* Skills grid: single col on mobile, 2 cols on sm+ */}
        <motion.div layout className="mt-6 grid gap-3 sm:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visibleGroups.map((group) => {
              const Icon = iconMap[group.icon];
              return (
                <motion.article
                  key={group.category}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="card-hover overflow-hidden rounded-2xl border border-line bg-surface p-5 sm:p-6"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="truncate text-sm font-semibold text-ink sm:text-base">
                        {group.category}
                      </h3>
                      <p className="mt-1 text-xs text-muted">
                        {group.skills.length} core capabilities
                      </p>
                    </div>
                    <span
                      className={`grid size-9 shrink-0 place-items-center rounded-xl border sm:size-10 ${accentMap[group.category]}`}
                    >
                      <Icon className="size-4 sm:size-5" />
                    </span>
                  </div>
                  {/*
                    Skill tags: horizontal scroll on mobile.
                    Using overflow-hidden on the article above clips -mx-5 to card edges.
                  */}
                  <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-5">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-line bg-surface-2 px-2 py-1 text-[11px] font-medium text-muted transition-colors hover:border-accent/25 hover:bg-accent-soft hover:text-accent sm:text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Daily tools */}
        <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-line bg-surface p-4 sm:mt-8 sm:flex-row sm:items-center sm:p-5">
          <p className="shrink-0 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Daily tools
          </p>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-line bg-surface-2 px-2.5 py-1 text-xs text-muted"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
