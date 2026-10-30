"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  Cpu,
  Globe,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
  Truck,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { heroMetrics, profile, tools } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const stackIcons: {
  label: string;
  Icon: LucideIcon;
  color: string;
  bg: string;
}[] = [
  {
    label: "Identity / KYC",
    Icon: ShieldCheck,
    color: "text-indigo-600 dark:text-indigo-300",
    bg: "bg-indigo-50 border-indigo-100 dark:bg-indigo-950/50 dark:border-indigo-900",
  },
  {
    label: "AI Compute",
    Icon: Cpu,
    color: "text-blue-600 dark:text-blue-300",
    bg: "bg-blue-50 border-blue-100 dark:bg-blue-950/50 dark:border-blue-900",
  },
  {
    label: "Solana & DeFi",
    Icon: Zap,
    color: "text-amber-500 dark:text-amber-300",
    bg: "bg-amber-50 border-amber-100 dark:bg-amber-950/50 dark:border-amber-900",
  },
  {
    label: "Ops & Finance",
    Icon: BarChart3,
    color: "text-emerald-600 dark:text-emerald-300",
    bg: "bg-emerald-50 border-emerald-100 dark:bg-emerald-950/50 dark:border-emerald-900",
  },
  {
    label: "Enterprise Logistics",
    Icon: Truck,
    color: "text-slate-700 dark:text-slate-300",
    bg: "bg-slate-100 border-slate-200 dark:bg-slate-800 dark:border-slate-700",
  },
  {
    label: "Web3 & DEX",
    Icon: Globe,
    color: "text-cyan-600 dark:text-cyan-300",
    bg: "bg-cyan-50 border-cyan-100 dark:bg-cyan-950/50 dark:border-cyan-900",
  },
];

export default function Hero() {
  const [iconIndex, setIconIndex] = useState(0);
  const current = stackIcons[iconIndex];
  const CurrentIcon = current.Icon;

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIconIndex((value) => (value + 1) % stackIcons.length);
    }, 2500);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_18%,transparent_72%)]" />
        <div className="absolute -top-44 left-1/4 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-indigo-200/40 blur-[150px] dark:bg-indigo-500/10" />
        <div className="absolute -top-24 right-0 h-[26rem] w-[26rem] rounded-full bg-cyan-100/60 blur-[130px] dark:bg-cyan-500/10" />
        <div className="absolute right-1/3 top-1/2 h-64 w-64 rounded-full bg-emerald-100/50 blur-[120px] dark:bg-emerald-500/10" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="inline-flex items-center gap-2.5 rounded-full border border-emerald-200 bg-emerald-50/80 px-4 py-1.5 text-xs font-medium text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-300"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-pulse-ring rounded-full bg-emerald-400" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            {profile.availability}
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.1}
            className="mt-6 max-w-2xl text-balance text-[1.6rem] font-semibold leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-[2.5rem]"
          >
            Bridging Technical Execution &amp; Business Strategy Across{" "}
            <span className="text-gradient">Web3, AI &amp; Fintech</span>.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.2}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
          >
            {profile.subheading}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.3}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <a
              href="#projects"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-500/25 sm:w-auto"
            >
              Explore Projects
              <ArrowDownRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-line-strong bg-surface px-6 py-3 text-sm font-medium text-ink transition-all hover:border-accent/40 hover:bg-surface-2 sm:w-auto"
            >
              <Mail className="size-4 text-accent" />
              Get In Touch
              <ArrowUpRight className="size-4 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          <motion.dl
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.4}
            className="-mx-5 mt-10 grid snap-x snap-mandatory auto-cols-[82%] grid-flow-col gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:max-w-xl sm:auto-cols-auto sm:grid-flow-row sm:grid-cols-3 sm:overflow-visible sm:px-0 sm:pb-0"
          >
            {heroMetrics.map((metric) => (
              <div
                key={metric.label}
                className="snap-start rounded-2xl border border-line bg-surface/70 px-4 py-4 transition-colors hover:border-accent/25 hover:bg-base"
              >
                <dt className="sr-only">{metric.label}</dt>
                <dd>
                  <span className="block text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                    {metric.value}
                  </span>
                  <span className="mt-1 block text-xs font-medium leading-snug text-accent">
                    {metric.label}
                  </span>
                  <span className="mt-1 block text-[11px] leading-tight text-muted">
                    {metric.detail}
                  </span>
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm sm:max-w-md"
        >
          <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-indigo-200/50 via-blue-100/40 to-emerald-100/50 blur-3xl dark:from-indigo-500/10 dark:via-blue-500/5 dark:to-emerald-500/10" />

          <div className="relative rounded-[2rem] border border-line bg-surface p-3 shadow-2xl shadow-black/10">
            <div className="relative overflow-hidden rounded-[1.6rem] border border-line bg-gradient-to-br from-slate-50 via-white to-indigo-50 px-5 pb-5 pt-8 dark:from-surface-2 dark:via-surface dark:to-indigo-950/40">
              <div className="pointer-events-none absolute inset-0 bg-dots opacity-40" />
              <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-indigo-100/70 blur-2xl dark:bg-indigo-500/10" />
              <div className="pointer-events-none absolute -bottom-20 -left-16 size-48 rounded-full bg-emerald-100/60 blur-2xl dark:bg-emerald-500/10" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={current.label}
                  initial={{ opacity: 0, y: 8, scale: 0.86 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.86 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute right-4 top-4 z-20"
                >
                  <div
                    className={`flex items-center gap-2 rounded-2xl border px-3 py-2 shadow-lg shadow-black/10 backdrop-blur ${current.bg}`}
                  >
                    <span className="grid size-7 place-items-center rounded-lg bg-surface/80">
                      <CurrentIcon className={`size-4 ${current.color}`} />
                    </span>
                    <span className="whitespace-nowrap font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-muted">
                      {current.label}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="relative mx-auto mt-4 w-fit">
                <div className="absolute -inset-5 animate-spin-slow rounded-full border border-dashed border-accent/25" />
                <div className="absolute -inset-2 rounded-full border border-line" />
                <div className="relative grid size-44 place-items-center rounded-full bg-gradient-to-br from-accent via-accent-blue to-success p-[3px] shadow-xl shadow-indigo-500/20 sm:size-52">
                  <div className="size-full rounded-full bg-surface p-2">
                    <Image
                      src="/MyProfile.jpeg"
                      alt="Usama Ashraf"
                      width={852}
                      height={779}
                      priority
                      sizes="(max-width: 640px) 176px, 208px"
                      className="size-full rounded-full object-cover object-center"
                    />
                  </div>
                </div>
                <motion.span
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-2 bottom-3 flex items-center gap-1.5 rounded-full border border-line bg-surface px-2.5 py-1.5 text-[10px] font-medium text-muted shadow-lg shadow-black/10 sm:-left-5"
                >
                  <Sparkles className="size-3 text-amber-500" />
                  5+ yrs
                </motion.span>
                <motion.span
                  animate={{ y: [0, 6, 0] }}
                  transition={{
                    duration: 5.6,
                    delay: 0.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -right-2 bottom-3 flex items-center gap-1.5 rounded-full border border-line bg-surface px-2.5 py-1.5 text-[10px] font-medium text-muted shadow-lg shadow-black/10 sm:-right-5"
                >
                  <BarChart3 className="size-3 text-emerald-500" />
                  28 shipped
                </motion.span>
              </div>

              <div className="relative mt-7 text-center">
                <h2 className="text-xl font-semibold tracking-tight text-ink">
                  {profile.name}
                </h2>
                <p className="mt-1 text-sm text-muted">{profile.role}</p>
                <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full border border-line bg-surface/80 px-2.5 py-1 text-[10px] font-medium text-muted">
                    <MapPin className="size-3 text-accent" />
                    {profile.location}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-medium text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-300">
                    <span className="size-1.5 rounded-full bg-emerald-500" />
                    Open to 2026
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 px-1 pt-3">
              {[
                { value: "Fintech", label: "Domain" },
                { value: "AI", label: "Compute" },
                { value: "Web3", label: "Ecosystem" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-line bg-surface px-2 py-2.5 text-center"
                >
                  <p className="text-sm font-semibold text-ink">{item.value}</p>
                  <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative mx-auto mt-16 max-w-6xl overflow-hidden px-5 sm:px-8">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-base to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-base to-transparent sm:w-24" />
        <div className="flex w-max animate-marquee gap-3">
          {[...tools, ...tools].map((tool, index) => (
            <span
              key={`${tool}-${index}`}
              className="rounded-full border border-line bg-surface px-4 py-1.5 font-mono text-xs text-muted"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
