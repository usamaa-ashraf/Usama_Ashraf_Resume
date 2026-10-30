"use client";

import { motion } from "framer-motion";
import { Compass, Layers, Quote, Target } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { aboutHighlights, principles, profile } from "@/lib/data";

const icons = [Target, Layers, Compass, Target];

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="01"
          eyebrow="About"
          title="Operating at the intersection of delivery, operations, and commercial strategy."
          description="I do not just track tickets. I create the conditions for engineering, design, compliance, and finance to ship the right thing, on time, with the business case intact."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-3xl border border-line bg-surface p-7 sm:p-9"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-indigo-100/60 blur-2xl dark:bg-indigo-500/10" />
            <Quote className="size-8 text-accent/30" />
            <p className="relative mt-4 text-pretty text-lg leading-relaxed text-ink/80 sm:text-xl">
              {profile.about}
            </p>
            <div className="relative mt-7 flex flex-wrap gap-2">
              {principles.map((principle) => (
                <span
                  key={principle}
                  className="rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-[11px] text-muted"
                >
                  {principle}
                </span>
              ))}
            </div>
            <div className="relative mt-8 grid grid-cols-2 gap-3 border-t border-line pt-6">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                  Based in
                </p>
                <p className="mt-1 text-sm font-medium text-ink">
                  {profile.location}
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                  Focus
                </p>
                <p className="mt-1 text-sm font-medium text-ink">
                  Fintech · AI · Web3
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2">
            {aboutHighlights.map((item, index) => {
              const Icon = icons[index % icons.length];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="card-hover rounded-2xl border border-line bg-surface p-5"
                >
                  <span className="grid size-9 place-items-center rounded-xl border border-accent/15 bg-accent-soft text-accent">
                    <Icon className="size-4" />
                  </span>
                  <h3 className="mt-4 text-sm font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
