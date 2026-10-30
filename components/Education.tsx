"use client";

import { motion } from "framer-motion";
import { BadgeCheck, GraduationCap, Languages } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { education, languages } from "@/lib/data";

export default function Education() {
  return (
    <section className="relative border-y border-line bg-surface/60 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="05"
          eyebrow="Education & Languages"
          title="Business foundations, technical fluency, and global communication."
          description="A business education paired with hands-on technical training and native-level multilingual communication."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="card-hover rounded-2xl border border-line bg-surface p-6 lg:col-span-2"
          >
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl border border-accent/15 bg-accent-soft text-accent">
                <GraduationCap className="size-5" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-ink">Education</h3>
                <p className="text-xs text-muted">Academic & professional credentials</p>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {education.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-wrap items-start justify-between gap-3 rounded-xl border border-line bg-surface/70 p-4"
                >
                  <div className="flex items-start gap-3">
                    <BadgeCheck className="mt-0.5 size-4 shrink-0 text-emerald-500" />
                    <div>
                      <p className="text-sm font-semibold text-ink">{item.title}</p>
                      <p className="mt-0.5 text-xs text-muted">{item.institution}</p>
                    </div>
                  </div>
                  <span className="rounded-full border border-line bg-surface-2 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-muted">
                    {item.type} · {item.period}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="card-hover rounded-2xl border border-line bg-surface p-6"
          >
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl border border-emerald-100 bg-emerald-50 text-emerald-600 dark:border-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-300">
                <Languages className="size-5" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-ink">Languages</h3>
                <p className="text-xs text-muted">Communication across teams &amp; clients</p>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {languages.map((language) => (
                <div key={language.name}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-ink">{language.name}</span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                      {language.level}
                    </span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-surface-2">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-accent to-success"
                      style={{
                        width:
                          language.level === "Native"
                            ? "100%"
                            : language.level === "Professional"
                              ? "88%"
                              : "70%",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
