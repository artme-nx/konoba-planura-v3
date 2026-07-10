import { Check } from "lucide-react";
import { menuCategories } from "@/lib/content";
import { images, unsplashUrl } from "@/lib/images";
import { Reveal } from "@/components/reveal";

const dishPhotos = [
  { img: images.dishGrilledFish, caption: "Riba s roštilja" },
  { img: images.dishOctopus, caption: "Hobotnica" },
  { img: images.dishSeafoodPasta, caption: "Tjestenina s plodovima mora" },
  { img: images.dishPlatter, caption: "Plata plodova mora" },
];

export function MenuSpec() {
  return (
    <section id="jelovnik" className="py-24 sm:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="label text-primary">Jelovnik</span>
          <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Pet kategorija, jedan stol za cijelu obitelj.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Konoba drži klasičan splet dalmatinske obale — bez ograđivanja na
            jednu vrstu kuhinje, tako da svatko za stolom nađe svoje.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal className="rounded-2xl border bg-card p-2 shadow-[var(--shadow-sm)]" style={{ borderColor: "var(--border)" }}>
            <ul className="divide-y" style={{ borderColor: "var(--border)" }}>
              {menuCategories.map((cat) => (
                <li key={cat.label} className="flex items-start gap-4 p-5">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Check size={14} />
                  </span>
                  <div>
                    <p className="font-display font-semibold text-foreground">{cat.label}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{cat.examples}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="grid grid-cols-2 gap-4">
            {dishPhotos.map((d, i) => (
              <Reveal key={d.caption} delay={i * 0.05} className={i === 0 ? "col-span-2" : ""}>
                <figure className="overflow-hidden rounded-2xl border shadow-[var(--shadow-sm)]" style={{ borderColor: "var(--border)" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={unsplashUrl(d.img.id, 1200, 75)}
                    alt={d.img.alt}
                    className={`w-full object-cover ${i === 0 ? "aspect-[2/1]" : "aspect-square"}`}
                  />
                  <figcaption className="bg-card px-4 py-3 text-sm font-medium text-foreground">
                    {d.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
