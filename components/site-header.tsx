"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#znacajke", label: "Zašto mi" },
  { href: "#kako-radi", label: "Kako radi" },
  { href: "#jelovnik", label: "Jelovnik" },
  { href: "#recenzije", label: "Recenzije" },
  { href: "#kontakt", label: "Kontakt" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-card/90 backdrop-blur-md shadow-[var(--shadow-sm)] py-3"
            : "py-5"
        }`}
      >
        <div className="container-page flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-display font-semibold text-lg text-foreground">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
              P
            </span>
            Konoba Planura
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="#kontakt"
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-sm)] transition-colors hover:bg-[var(--primary-hover)]"
            >
              Rezervirajte stol
            </a>
          </div>

          <button
            aria-label="Izbornik"
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Sibling of <header>, not a descendant: the header gets a
         backdrop-blur surface once scrolled, and backdrop-filter creates a
         new containing block for descendant fixed elements — which would
         trap this full-screen mobile overlay inside the header's own
         (small) box instead of covering the viewport. */}
      <nav
        className={`lg:hidden fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 bg-ink text-ink-foreground transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          aria-label="Zatvori izbornik"
          className="absolute right-6 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20"
          onClick={() => setOpen(false)}
        >
          <X size={20} />
        </button>
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="font-display text-2xl"
          >
            {l.label}
          </a>
        ))}
        <a
          href="#kontakt"
          onClick={() => setOpen(false)}
          className="rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground"
        >
          Rezervirajte stol
        </a>
      </nav>
    </>
  );
}
