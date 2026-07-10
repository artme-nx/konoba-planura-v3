import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { business } from "@/lib/content";
import { Reveal } from "@/components/reveal";

const FacebookGlyph = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.25c0-.87.24-1.46 1.49-1.46H16.5V4.14C16.24 4.1 15.32 4 14.25 4 12 4 10.5 5.32 10.5 7.96V10.5H8v3h2.5V21h3Z" />
  </svg>
);

export function ContactSection() {
  return (
    <section id="kontakt" className="py-24 sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-start">
        <Reveal>
          <span className="label text-secondary">Kontakt</span>
          <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Pronađite nas u Privlaci.
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Konoba je u srcu Privlake, s besplatnim parkingom tik uz ulaz —
            nema potrage za mjestom prije večere.
          </p>

          <ul className="mt-9 space-y-5">
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <MapPin size={18} />
              </span>
              <div>
                <p className="font-medium text-foreground">Adresa</p>
                <p className="text-muted-foreground">{business.address}</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Phone size={18} />
              </span>
              <div>
                <p className="font-medium text-foreground">Telefon</p>
                <a href={business.phoneHref} className="text-muted-foreground hover:text-primary">
                  {business.phone}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Mail size={18} />
              </span>
              <div>
                <p className="font-medium text-foreground">E-mail</p>
                <a href={`mailto:${business.email}`} className="text-muted-foreground hover:text-primary">
                  {business.email}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Clock size={18} />
              </span>
              <div>
                <p className="font-medium text-foreground">Radno vrijeme</p>
                <p className="text-muted-foreground">{business.hours}</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <FacebookGlyph className="h-[18px] w-[18px]" />
              </span>
              <div>
                <p className="font-medium text-foreground">Facebook</p>
                <a
                  href={business.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  Konoba Planura Privlaka
                </a>
              </div>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="h-[420px] overflow-hidden rounded-2xl border shadow-[var(--shadow-md)] lg:h-full" style={{ borderColor: "var(--border)" }}>
          <iframe
            title="Karta — Konoba Planura, Privlaka"
            src="https://www.google.com/maps?q=Ul.+Ivana+Pavla+113,+Privlaka&output=embed"
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  );
}
