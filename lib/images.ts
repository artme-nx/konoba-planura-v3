// Curated, verified Unsplash photography (real, license-free, non-generic matches).
// Each entry resolved to a live 200 response on images.unsplash.com before use.
// Format follows the project convention: raw CDN photo id + width/quality params
// appended per-usage via `unsplashUrl()`.

export type CuratedImage = {
  id: string;
  alt: string;
  credit: string;
};

const BASE = "https://images.unsplash.com";

export function unsplashUrl(id: string, width = 1600, quality = 75) {
  return `${BASE}/photo-${id}?auto=format&fit=crop&w=${width}&q=${quality}`;
}

export const images = {
  heroTerrace: {
    id: "1781484589468-86578ea42813",
    alt: "Prazan stol na terasi konobe uz more, prostrt za večeru",
    credit: "Studio B / Unsplash",
  },
  stoneArchway: {
    id: "1769481725825-0c0e725ddd54",
    alt: "Pogled kroz kameni prolaz dalmatinskog mjesta prema moru",
    credit: "Unsplash",
  },
  dishGrilledFish: {
    id: "1739484151190-e2a73842ca13",
    alt: "Svježa riba na roštilju",
    credit: "Jan Ledermann / Unsplash",
  },
  dishOctopus: {
    id: "1764397514747-8272f2da3f36",
    alt: "Hobotnica s roštilja, rikola i limun",
    credit: "Tomi Saputra / Unsplash",
  },
  dishSeafoodPasta: {
    id: "1563379926898-05f4575a45d8",
    alt: "Tjestenina s plodovima mora i rajčicom",
    credit: "Olayinka Babalola / Unsplash",
  },
  dishPlatter: {
    id: "1572776082973-1cb8d1790872",
    alt: "Plata plodova mora na drvenoj dasci",
    credit: "SJ / Unsplash",
  },
  galleryWineTable: {
    id: "1681407980293-ed07d8f4c5cf",
    alt: "Drveni stol s čašama za vino pripremljen za goste",
    credit: "Jacob Diehl / Unsplash",
  },
  galleryBoatSunset: {
    id: "1592132886027-b7bbc39a22e5",
    alt: "Silueta ribarskog broda na moru u suton",
    credit: "Knut Troim / Unsplash",
  },
  galleryInterior: {
    id: "1714733340805-268e89cf861a",
    alt: "Toplo osvijetljen unutarnji prostor konobe s drvenim stolovima",
    credit: "BehindTheTmuna / Unsplash",
  },
  galleryCardsTable: {
    id: "1762608206423-be8c07645de7",
    alt: "Mještani igraju karte za stolom na otvorenom",
    credit: "mediha ekici / Unsplash",
  },
  breadOliveOil: {
    id: "1666475877607-ec1cec593b19",
    alt: "Domaći kruh i maslinovo ulje na stolu",
    credit: "Unsplash",
  },
} satisfies Record<string, CuratedImage>;
