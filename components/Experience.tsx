"use client";

import { motion } from "framer-motion";
import { Briefcase, CheckCircle2, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="03"
          eyebrow="Experience"
          title="Five years of turning complex builds into shipped products."
          description="A timeline of cross-functional delivery across enterprise logistics, identity SaaS, AI infrastructure, and Web3 ecosystems."
        />

        <div className="relative mt-12">
          <div className="absolute bottom-0 left-[19px] top-2 w-px bg-gradient-to-b from-accent/40 via-line to-transparent sm:left-[23px]" />

          <div className="space-y-4">
            {experiences.map((job, index) => (
              <motion.article
                key={`${job.company}-${job.role}`}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative pl-14 sm:pl-20"
              >
                <span
                  className={`absolute left-0 top-1 grid size-10 place-items-center rounded-2xl border bg-surface shadow-sm sm:size-12 ${
                    job.current
                      ? "border-accent/30 text-accent shadow-indigo-100 dark:shadow-indigo-950"
                      : "border-line text-muted"
                  }`}
                >
                  <Briefcase className="size-4 sm:size-5" />
                  {job.current ? (
                    <span className="absolute -right-0.5 -top-0.5 flex size-3">
                      <span className="absolute inline-flex size-full animate-pulse-ring rounded-full bg-emerald-400" />
                      <span className="relative inline-flex size-3 rounded-full border-2 border-base bg-emerald-500" />
                    </span>
                  ) : null}
                </span>

                <div className="card-hover rounded-2xl border border-line bg-surface p-5 sm:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-base font-semibold text-ink sm:text-lg">
                        {job.role}
                      </h3>
                      <p className="mt-0.5 text-sm font-medium text-accent">
                        {job.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-1 sm:items-end">
                      <span className="rounded-full border border-line bg-surface-2 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-muted">
                        {job.period}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] text-muted">
                        <MapPin className="size-3" />
                        {job.location}
                      </span>
                    </div>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {job.summary}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {job.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-2 text-sm leading-relaxed text-muted"
                      >
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-500" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {job.additionalRoles?.length ? (
                    <div className="mt-4 space-y-2 rounded-xl border border-line bg-surface-2 p-3">
                      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                        Additional roles at {job.company}
                      </p>
                      {job.additionalRoles.map((additional) => (
                        <div
                          key={`${additional.role}-${additional.period}`}
                          className="rounded-lg border border-line bg-surface p-3"
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <p className="text-xs font-semibold text-ink">
                              {additional.role}
                            </p>
                            <span className="font-mono text-[10px] text-muted">
                              {additional.period}
                            </span>
                          </div>
                          <p className="mt-1 text-xs leading-relaxed text-muted">
                            {additional.note}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {job.current ? (
                    <span className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-emerald-700">
                      <span className="size-1.5 rounded-full bg-emerald-500" />
                      Current
                    </span>
                  ) : null}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
