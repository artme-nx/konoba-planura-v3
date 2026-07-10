import { business } from "@/lib/content";

const LINKS = [
  { href: "#znacajke", label: "Zašto mi" },
  { href: "#kako-radi", label: "Kako radi" },
  { href: "#jelovnik", label: "Jelovnik" },
  { href: "#recenzije", label: "Recenzije" },
  { href: "#kontakt", label: "Kontakt" },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink py-14 text-ink-foreground/80">
      <div className="container-page flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="flex items-center gap-2 font-display text-lg font-semibold text-ink-foreground">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              P
            </span>
            Konoba Planura
          </p>
          <p className="mt-3 max-w-xs text-sm">
            {business.address} · Privlaka, {business.region}
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-ink-foreground">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="text-sm">
          <p>{business.phone}</p>
          <p className="mt-1">{business.email}</p>
        </div>
      </div>

      <div className="container-page mt-10 border-t border-white/10 pt-6 text-xs text-ink-foreground/50">
        © {new Date().getFullYear()} Konoba Planura, Privlaka. Sva prava pridržana.
      </div>
    </footer>
  );
}
