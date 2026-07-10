import { steps } from "@/lib/content";
import { Reveal } from "@/components/reveal";

export function HowItWorks() {
  return (
    <section id="kako-radi" className="bg-muted py-24 sm:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="label text-secondary">Kako radi</span>
          <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Od poziva do stola, u četiri koraka.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={Math.min(i * 0.06, 0.24)} className="relative">
              <div className="flex flex-col items-start">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-full font-mono text-sm font-semibold"
                  style={{ background: "var(--step-badge-bg)", color: "var(--step-badge-fg)" }}
                >
                  {step.number}
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
              {i < steps.length - 1 && (
                <span
                  aria-hidden
                  className="absolute right-[-1.25rem] top-6 hidden h-px w-10 lg:block"
                  style={{ background: "var(--step-connector)" }}
                />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
