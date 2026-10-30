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
    <section id="skills" className="relative border-y border-line bg-surface/60 py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="02"
          eyebrow="Skills"
          title="A cross-functional toolkit built for delivery."
          description="Category-filtered competencies spanning project leadership, operations, product direction, and the domains I work in every day."
        />

        <div className="-mx-5 mt-8 flex snap-x snap-mandatory gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0">
          {skillCategories.map((category) => {
            const isActive = active === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                className={`relative shrink-0 snap-start rounded-full px-4 py-2 text-sm font-medium transition-colors ${
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

        <motion.div layout className="mt-8 grid gap-4 sm:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visibleGroups.map((group) => {
              const Icon = iconMap[group.icon];
              return (
                <motion.article
                  key={group.category}
                  layout
                  initial={{ opacity: 0, y: 18, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="card-hover rounded-2xl border border-line bg-surface p-6"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-base font-semibold text-ink">
                        {group.category}
                      </h3>
                      <p className="mt-1 text-xs text-muted">
                        {group.skills.length} core capabilities
                      </p>
                    </div>
                    <span
                      className={`grid size-10 place-items-center rounded-xl border ${accentMap[group.category]}`}
                    >
                      <Icon className="size-5" />
                    </span>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-line bg-surface-2 px-2.5 py-1.5 text-xs font-medium text-muted transition-colors hover:border-accent/25 hover:bg-accent-soft hover:text-accent"
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

        <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-line bg-surface p-5 sm:flex-row sm:items-center">
          <p className="shrink-0 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Daily tools
          </p>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-line bg-surface-2 px-3 py-1 text-xs text-muted"
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
