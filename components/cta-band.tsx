import { business } from "@/lib/content";
import { Reveal } from "@/components/reveal";

export function CtaBand() {
  return (
    <section className="bg-ink py-20 text-ink-foreground sm:py-24">
      <div className="container-page flex flex-col items-center text-center">
        <Reveal>
          <h2 className="text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Rezervirajte stol za sljedeću priliku na moru.
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-4 max-w-xl text-balance text-white/70">
            Nazovite ili pišite unaprijed, pogotovo tijekom sezone kad je
            terasa puna — rado ćemo vam čuvati stol.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href={business.phoneHref}
            className="rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-[var(--shadow-md)] transition-transform hover:-translate-y-0.5"
          >
            Nazovite {business.phone}
          </a>
          <a
            href={`mailto:${business.email}`}
            className="rounded-full border border-white/25 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
          >
            Pošaljite e-mail
          </a>
        </Reveal>
      </div>
    </section>
  );
}
