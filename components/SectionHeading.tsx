"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  index?: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
    >
      <div
        className={`flex items-center gap-3 ${
          centered ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-accent" />
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
          {index ? `${index} — ${eyebrow}` : eyebrow}
        </span>
      </div>
      <h2 className="mt-4 text-balance text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-[1.65rem] lg:text-3xl xl:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-pretty text-sm leading-relaxed text-ink/90 sm:text-base">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
