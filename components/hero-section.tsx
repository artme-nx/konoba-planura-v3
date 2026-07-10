import { Star } from "lucide-react";
import { heroContent, business } from "@/lib/content";
import { images, unsplashUrl } from "@/lib/images";
import { Reveal } from "@/components/reveal";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ backgroundImage: "var(--hero-glow)" }}
      />
      <div className="container-page flex flex-col items-center text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border bg-[var(--hero-eyebrow-bg)] px-4 py-1.5 text-sm text-muted-foreground shadow-[var(--shadow-sm)]" style={{ borderColor: "var(--hero-eyebrow-border)" }}>
            <Star size={14} className="fill-gold text-gold" />
            <span>
              {business.googleRating}/5 na Googleu · {business.googleReviewCount} recenzija
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.05} className="mt-7 max-w-3xl">
          <h1
            className="text-balance font-display font-semibold tracking-tight text-foreground"
            style={{ fontSize: "var(--hero-title-size)", lineHeight: "var(--hero-title-leading)" }}
          >
            {heroContent.title}
          </h1>
        </Reveal>

        <Reveal delay={0.1} className="mt-6 max-w-xl">
          <p className="text-balance text-lg text-muted-foreground">
            {heroContent.subtitle}
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#kontakt"
            className="rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-[var(--shadow-md)] transition-transform hover:-translate-y-0.5"
          >
            {heroContent.primaryCta}
          </a>
          <a
            href="#jelovnik"
            className="rounded-full border px-7 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-[var(--button-ghost-hover-bg)]"
            style={{ borderColor: "var(--button-ghost-border)" }}
          >
            {heroContent.secondaryCta}
          </a>
        </Reveal>

        <Reveal delay={0.2} y={40} className="mt-16 w-full max-w-5xl">
          <div className="overflow-hidden rounded-xl border bg-card shadow-[var(--shadow-lg)]" style={{ borderColor: "var(--border)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={unsplashUrl(images.heroTerrace.id, 2000, 80)}
              alt={images.heroTerrace.alt}
              className="aspect-[16/9] w-full object-cover sm:aspect-[21/9]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
