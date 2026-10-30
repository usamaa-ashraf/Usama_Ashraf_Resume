"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Mail, Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-base/85 backdrop-blur-xl shadow-sm shadow-black/5"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="group flex items-center gap-2.5"
          aria-label="Usama Ashraf — back to top"
        >
          <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-accent via-accent-blue to-success text-[13px] font-semibold tracking-tight text-white shadow-lg shadow-indigo-500/20 transition-transform group-hover:scale-105">
            UA
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-tight text-ink">
              Usama Ashraf
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
              Project &amp; Operations Lead
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                active === link.href ? "text-ink" : "text-muted hover:text-ink"
              }`}
            >
              {active === link.href ? (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-full border border-accent/20 bg-accent-soft"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              ) : null}
              <span className="relative z-10">{link.label}</span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#contact"
            className="group hidden items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-white shadow-lg shadow-indigo-500/20 transition-all hover:bg-indigo-700 sm:flex"
          >
            <Mail className="size-4" />
            Contact Me
          </a>
          <a
            href="/resume.pdf"
            download
            className="group hidden items-center gap-2 rounded-full border border-accent/25 bg-accent-soft px-4 py-2 text-sm font-medium text-accent transition-all hover:border-accent/40 hover:bg-indigo-100 dark:hover:bg-indigo-500/20 lg:flex"
          >
            <Download className="size-4 transition-transform group-hover:translate-y-0.5" />
            Download Resume
          </a>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="flex size-10 items-center justify-center rounded-full border border-line bg-surface text-ink transition-colors hover:border-accent/30 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-line bg-base/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base text-muted transition-colors hover:bg-surface hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 grid grid-cols-2 gap-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-accent px-3 py-3 text-sm font-medium text-white"
                >
                  <Mail className="size-4" />
                  Contact
                </a>
                <a
                  href="/resume.pdf"
                  download
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl border border-accent/25 bg-accent-soft px-3 py-3 text-sm font-medium text-accent"
                >
                  <Download className="size-4" />
                  Resume
                </a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
