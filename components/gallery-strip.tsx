import { images, unsplashUrl } from "@/lib/images";
import { location } from "@/lib/content";
import { Reveal } from "@/components/reveal";

const shots = [
  images.stoneArchway,
  images.galleryInterior,
  images.galleryWineTable,
  images.galleryCardsTable,
  images.galleryBoatSunset,
  images.breadOliveOil,
];

export function GalleryStrip() {
  return (
    <section className="py-24 sm:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="label text-primary">Privlaka</span>
          <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Mjesto koje se ne pretvara da je nešto drugo.
          </h2>
          <p className="mt-4 text-muted-foreground">{location.areaNote}</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {shots.map((shot, i) => (
            <Reveal key={shot.id} delay={Math.min(i * 0.04, 0.2)} className={i === 0 ? "col-span-2 row-span-2" : ""}>
              <div className={`overflow-hidden rounded-2xl border ${i === 0 ? "h-full" : ""}`} style={{ borderColor: "var(--border)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={unsplashUrl(shot.id, i === 0 ? 1600 : 900, 75)}
                  alt={shot.alt}
                  className={`w-full object-cover ${i === 0 ? "aspect-square sm:aspect-[4/3]" : "aspect-square"}`}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
