import { Fish, UtensilsCrossed, Waves, ChefHat, Smile, Accessibility, type LucideIcon } from "lucide-react";
import { features, type Feature } from "@/lib/content";
import { Reveal } from "@/components/reveal";

const ICONS: Record<Feature["icon"], LucideIcon> = {
  fish: Fish,
  utensils: UtensilsCrossed,
  waves: Waves,
  chefHat: ChefHat,
  smile: Smile,
  accessibility: Accessibility,
};

export function FeatureGrid() {
  return (
    <section id="znacajke" className="py-24 sm:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="label text-primary">Zašto Planura</span>
          <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Ono što biste od konobe i očekivali — samo dosljedno, iz posjeta u posjet.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = ICONS[feature.icon];
            return (
              <Reveal key={feature.title} delay={Math.min(i * 0.05, 0.2)}>
                <div
                  className="group h-full rounded-[var(--feature-card-radius)] border bg-[var(--feature-card-bg)] p-7 transition-shadow hover:shadow-[var(--feature-card-shadow-hover)]"
                  style={{ borderColor: "var(--feature-card-border)" }}
                >
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{ background: "var(--feature-card-icon-bg)", color: "var(--feature-card-icon-fg)" }}
                  >
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
