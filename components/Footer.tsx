import { ArrowUp, Download, Mail, MapPin } from "lucide-react";
import { navLinks, profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-accent via-accent-blue to-success text-[13px] font-semibold text-white shadow-lg shadow-indigo-500/20">
                UA
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-sm font-semibold tracking-tight text-ink">
                  {profile.name}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                  {profile.role}
                </span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Bridging technical execution and business strategy across Web3, AI,
              and Fintech products.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-muted transition-colors hover:border-accent/30 hover:text-accent"
              >
                <Mail className="size-3.5" />
                Email
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-muted transition-colors hover:border-accent/30 hover:text-accent"
              >
                <Download className="size-3.5" />
                Resume
              </a>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-muted">
                <MapPin className="size-3.5" />
                {profile.location}
              </span>
            </div>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              Navigate
            </p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              Get in touch
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="break-all text-muted transition-colors hover:text-accent"
                >
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${profile.workEmail}`}
                  className="break-all text-muted transition-colors hover:text-accent"
                >
                  {profile.workEmail}
                </a>
              </li>
              <li>
                <a
                  href={profile.phoneHref}
                  className="text-muted transition-colors hover:text-accent"
                >
                  {profile.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 sm:flex-row">
          <p className="text-xs text-muted">
            © 2026 {profile.name}. All rights reserved.
          </p>
          <a
            href="#top"
            className="group inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:border-accent/30 hover:text-accent"
          >
            Back to top
            <ArrowUp className="size-3.5 transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
