import { trustStats } from "@/lib/content";
import { Reveal } from "@/components/reveal";

export function TrustBar() {
  return (
    <section className="border-y" style={{ borderColor: "var(--border)" }}>
      <div className="container-page grid grid-cols-1 divide-y sm:grid-cols-3 sm:divide-x sm:divide-y-0" style={{ borderColor: "var(--border)" }}>
        {trustStats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.05} className="flex flex-col items-center gap-1 px-6 py-8 text-center">
            <span className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
              {stat.value}
            </span>
            <span className="text-sm text-muted-foreground">{stat.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
