"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  Download,
  Dribbble,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-x-clip py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/3 top-10 h-72 w-72 rounded-full bg-indigo-100/50 blur-[110px] dark:bg-indigo-500/10" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-emerald-100/50 blur-[110px] dark:bg-emerald-500/10" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.a
          href={profile.calendly}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-5 flex w-full max-w-full flex-col gap-4 rounded-2xl border border-accent/20 bg-gradient-to-r from-accent-soft via-surface to-success-soft p-4 transition-all hover:border-accent/40 hover:shadow-lg hover:shadow-indigo-500/5 sm:flex-row sm:items-center sm:justify-between sm:p-6 dark:from-indigo-950/40 dark:via-surface dark:to-emerald-950/30"
        >
          <div className="flex min-w-0 items-center gap-3 sm:gap-4">
            <span className="grid size-11 shrink-0 place-items-center rounded-2xl border border-accent/20 bg-surface text-accent shadow-sm sm:size-12">
              <CalendarDays className="size-5" />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-ink sm:text-base">
                Book a 30-minute call
              </p>
              <p className="mt-0.5 text-xs text-ink/90 sm:mt-1 sm:text-sm">
                Pick a time that works for you and let&apos;s talk scope, delivery,
                and next steps.
              </p>
            </div>
          </div>
          <span className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-accent px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-indigo-500/20 transition-colors hover:bg-indigo-700 sm:w-auto sm:px-5 sm:text-sm">
            Schedule on Calendly
            <ArrowUpRight className="size-4" />
          </span>
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="glass relative w-full max-w-full overflow-hidden rounded-3xl p-5 sm:p-10 lg:p-12"
        >
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]" />
            <div className="absolute -right-24 -top-24 size-80 rounded-full bg-indigo-300/20 blur-[100px] dark:bg-indigo-500/10" />
            <div className="absolute -bottom-24 left-1/3 size-72 rounded-full bg-cyan-200/20 blur-[100px] dark:bg-cyan-500/10" />
          </div>

          <div className="relative grid min-w-0 gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div className="min-w-0">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-transparent to-accent" />
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
                  06 — Contact
                </span>
              </div>

              <h2 className="text-balance text-2xl font-semibold tracking-tight text-ink sm:text-3xl lg:text-4xl">
                Let&apos;s Connect
              </h2>

              <p className="mt-3 max-w-md text-pretty text-sm leading-relaxed text-ink/90 sm:mt-4 sm:text-base">
                Available for project management, operations leadership, and
                business development engagements for 2026. If you are building
                something ambitious, I would like to hear about it.
              </p>

              {/* Action buttons: stacked full width on mobile, side-by-side on sm+ */}
              <div className="mt-6 flex flex-col gap-2.5 sm:mt-7 sm:flex-row sm:flex-wrap">
                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-500/25 sm:w-auto sm:px-6"
                >
                  <Mail className="size-4" />
                  Send an Email
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-line-strong bg-surface px-5 py-3 text-sm font-medium text-ink transition-all hover:border-accent/40 hover:bg-surface-2 sm:w-auto sm:px-6"
                >
                  <Download className="size-4 text-accent" />
                  Download Resume
                </a>
              </div>

              <p className="mt-5 text-xs text-muted sm:mt-6">
                Typical response time: within 24 hours.
              </p>
            </div>

            <div className="min-w-0 space-y-3">
              <a
                href={`mailto:${profile.email}`}
                className="group flex min-w-0 items-center gap-3 rounded-xl border border-line bg-surface p-3.5 transition-colors hover:border-accent/30 sm:gap-4 sm:p-4"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-accent/15 bg-accent-soft text-accent transition-colors group-hover:border-accent/30">
                  <Mail className="size-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                    Personal Email
                  </span>
                  <span className="mt-0.5 block truncate text-xs font-medium text-ink transition-colors group-hover:text-accent sm:text-sm">
                    {profile.email}
                  </span>
                </span>
                <ArrowUpRight className="ml-auto size-4 shrink-0 text-line-strong transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </a>

              <a
                href={profile.phoneHref}
                className="group flex min-w-0 items-center gap-3 rounded-xl border border-line bg-surface p-3.5 transition-colors hover:border-accent/30 sm:gap-4 sm:p-4"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-accent/15 bg-accent-soft text-accent transition-colors group-hover:border-accent/30">
                  <Phone className="size-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                    Phone
                  </span>
                  <span className="mt-0.5 block truncate text-xs font-medium text-ink transition-colors group-hover:text-accent sm:text-sm">
                    {profile.phone}
                  </span>
                </span>
                <ArrowUpRight className="ml-auto size-4 shrink-0 text-line-strong transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </a>

              <div className="grid grid-cols-2 gap-2 pt-1 sm:gap-3">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-w-0 items-center justify-center gap-1.5 rounded-xl border border-line bg-surface px-2.5 py-2.5 text-xs font-medium text-ink transition-colors hover:border-accent/30 hover:bg-surface-2 hover:text-accent sm:gap-2 sm:px-4 sm:py-3 sm:text-sm"
                >
                  <Linkedin className="size-4 shrink-0 text-accent" />
                  <span className="truncate">LinkedIn</span>
                  <ArrowUpRight className="size-3.5 shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href={profile.dribbble}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-w-0 items-center justify-center gap-1.5 rounded-xl border border-line bg-surface px-2.5 py-2.5 text-xs font-medium text-ink transition-colors hover:border-accent/30 hover:bg-surface-2 hover:text-accent sm:gap-2 sm:px-4 sm:py-3 sm:text-sm"
                >
                  <Dribbble className="size-4 shrink-0 text-accent" />
                  <span className="truncate">Dribbble</span>
                  <ArrowUpRight className="size-3.5 shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
