"use client";

import { motion } from "framer-motion";
import { Compass, Layers, Quote, Target } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { aboutHighlights, principles, profile } from "@/lib/data";

const icons = [Target, Layers, Compass, Target];

export default function About() {
  return (
    <section id="about" className="relative overflow-x-clip py-20 sm:py-24">
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
            className="relative overflow-hidden rounded-3xl border border-line bg-surface p-6 sm:p-9"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-indigo-100/60 blur-2xl dark:bg-indigo-500/10" />
            <Quote className="size-8 text-accent/30" />
            <p className="relative mt-4 text-pretty text-sm leading-relaxed text-muted sm:text-base lg:text-lg">
              {profile.about}
            </p>
            <div className="relative mt-7 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
              {principles.map((principle) => (
                <span
                  key={principle}
                  className="rounded-full border border-line bg-surface px-3 py-1.5 text-center font-mono text-[10px] text-muted sm:text-left sm:text-[11px]"
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
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="card-hover rounded-2xl border border-line bg-surface p-4 sm:p-5"
                >
                  <span className="grid size-9 place-items-center rounded-xl border border-accent/15 bg-accent-soft text-accent">
                    <Icon className="size-4" />
                  </span>
                  <h3 className="mt-3 text-sm font-semibold text-ink sm:mt-4">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted sm:mt-2 sm:text-sm">
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
