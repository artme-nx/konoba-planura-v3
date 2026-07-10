"use client";

import { useRef } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/content";
import { Reveal } from "@/components/reveal";

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: 1 | -1) => {
    const node = trackRef.current;
    if (!node) return;
    const card = node.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 20 : 320;
    node.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section id="recenzije" className="bg-muted py-24 sm:py-28">
      <div className="container-page">
        <Reveal className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <span className="label text-secondary">Recenzije</span>
            <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Što gosti kažu, prenešeno pošteno.
            </h2>
          </div>
          <div className="hidden gap-2 sm:flex">
            <button
              aria-label="Prethodna recenzija"
              onClick={() => scrollByCard(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border transition-colors hover:bg-[var(--button-ghost-hover-bg)]"
              style={{ borderColor: "var(--button-ghost-border)" }}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              aria-label="Sljedeća recenzija"
              onClick={() => scrollByCard(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border transition-colors hover:bg-[var(--button-ghost-hover-bg)]"
              style={{ borderColor: "var(--button-ghost-border)" }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </Reveal>

        <div
          ref={trackRef}
          className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((t, i) => (
            <Reveal
              key={t.source + i}
              delay={Math.min(i * 0.05, 0.2)}
              className="w-[85%] shrink-0 snap-start sm:w-[46%] lg:w-[31%]"
            >
              <div
                data-card
                className="flex h-full flex-col justify-between rounded-2xl border bg-[var(--testimonial-card-bg)] p-7 shadow-[var(--shadow-sm)]"
                style={{ borderColor: "var(--testimonial-card-border)" }}
              >
                <div>
                  <Quote size={28} style={{ color: "var(--testimonial-card-quote-mark)" }} />
                  <p className="mt-4 text-[0.98rem] leading-relaxed text-foreground">
                    {t.quote}
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">{t.source}</span>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star
                        key={s}
                        size={14}
                        style={{ color: "var(--testimonial-card-star)" }}
                        className="fill-current"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
