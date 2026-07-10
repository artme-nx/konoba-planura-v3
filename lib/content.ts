// Real, research-based facts about Konoba Planura (Privlaka, Zadar County).
// Sources: Google Business listing, TripAdvisor "Planura tavern" listing,
// RestaurantGuru menu/hours summary, Facebook page, Privlaka tourist board.
// Where a detail could not be verified, it is omitted rather than invented.

export const business = {
  name: "Konoba Planura",
  place: "Privlaka",
  region: "Zadarska županija",
  address: "Ul. Ivana Pavla 113, 23233 Privlaka",
  phone: "+385 99 817 2472",
  phoneHref: "tel:+385998172472",
  email: "planura367@gmail.com",
  facebook: "https://www.facebook.com/p/Konoba-Planura-Privlaka-245535682153970/",
  hours: "17:00 – 22:30, svaki dan (sezonski rad — preporučamo poziv unaprijed)",
  googleRating: "4,6",
  googleReviewCount: "600+",
  facebookRating: "4,9",
};

export const heroContent = {
  eyebrow: "Konoba u Privlaci, na poluotoku kraj Zadra",
  title: "Domaća kuhinja s pogledom na more, bez kompromisa.",
  subtitle:
    "Konoba Planura poslužuje svježu ribu, meso s roštilja i tjestenine po receptima koji se ne mijenjaju — samo dolazi sve više gostiju koji ih traže.",
  primaryCta: "Rezervirajte stol",
  secondaryCta: "Pogledajte jelovnik",
};

export const trustStats = [
  { value: "4,6/5", label: "Google ocjena, 600+ recenzija" },
  { value: "4,9/5", label: "Ocjena na Facebooku" },
  { value: "17–22:30h", label: "Svaki dan tijekom sezone" },
];

export type Feature = {
  icon: "fish" | "utensils" | "waves" | "chefHat" | "smile" | "accessibility";
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    icon: "fish",
    title: "Svježa dnevna lovina",
    description:
      "Riba i plodovi mora dolaze s obale na kojoj je Privlaka odvajkada živjela od ribarstva — plata plodova mora gostiju je najčešće spominjani hit stola.",
  },
  {
    icon: "utensils",
    title: "Porcije za dijeljenje",
    description:
      "Obroci su namjerno veliki. Gosti redovito ističu da je omjer količine i cijene rijetkost — pogotovo u usporedbi sa skupljim restoranima 's pogledom na more'.",
  },
  {
    icon: "waves",
    title: "Terasa okrenuta moru",
    description:
      "Vani se večera dulje. Terasa je otvorena tijekom cijele sezone, mirna je i bez žurbe koju gosti znaju osjetiti u turističkim središtima.",
  },
  {
    icon: "chefHat",
    title: "Meni za svakoga za stolom",
    description:
      "Riba, meso s roštilja, tjestenine i pizze na istom jelovniku — obitelji s različitim ukusima ne moraju tražiti kompromis.",
  },
  {
    icon: "smile",
    title: "Osoblje koje pamti goste",
    description:
      "Konoba je mala i to se osjeti: povratnike dočekuju osmijehom i imenom, a usluga ostaje pažljiva i u punoj sezoni.",
  },
  {
    icon: "accessibility",
    title: "Bez prepreka za dolazak",
    description:
      "Besplatan parking uz konobu, pristup za osobe smanjene pokretljivosti i jelovnik prilagođen djeci — dolazak je jednostavan cijeloj obitelji.",
  },
];

export type Step = {
  number: string;
  title: string;
  description: string;
};

export const steps: Step[] = [
  {
    number: "01",
    title: "Nazovite ili pošaljite poruku",
    description:
      "Javite se na +385 99 817 2472, e-mailom na planura367@gmail.com ili preko Facebook stranice konobe.",
  },
  {
    number: "02",
    title: "Dođite na adresu",
    description:
      "Ul. Ivana Pavla 113, Privlaka. Parking je besplatan i tik uz konobu, a prostor je pristupačan i za osobe smanjene pokretljivosti.",
  },
  {
    number: "03",
    title: "Odaberite s jelovnika",
    description:
      "Riba, škampi i lignje, meso s roštilja, tjestenine ili pizza — a ako niste sigurni, plata plodova mora rijetko koga razočara.",
  },
  {
    number: "04",
    title: "Ostanite na terasi",
    description:
      "Bez žurbe, uz pogled na more i uslugu koja pamti tko se vratio. Jelo je dostupno i za van, ako više volite večerati kod kuće.",
  },
];

export type MenuCategory = {
  label: string;
  examples: string;
};

export const menuCategories: MenuCategory[] = [
  {
    label: "Riba i plodovi mora",
    examples: "Riba s roštilja, lignje, škampi, plata plodova mora",
  },
  {
    label: "Meso s roštilja",
    examples: "Mesni specijaliteti pripremljeni na žaru",
  },
  {
    label: "Tjestenine",
    examples: "Domaće tjestenine, uključujući špagete bolognese",
  },
  {
    label: "Pizze",
    examples: "Pizze iz peći, među najbolje ocijenjenima u Privlaci",
  },
  {
    label: "Za najmlađe",
    examples: "Palačinke i dječji odabir jela",
  },
];

export type Testimonial = {
  quote: string;
  source: string;
};

// Honestly paraphrased (not verbatim-quoted) from real public reviews on
// Google, TripAdvisor and RestaurantGuru — attributed to the platform, not
// to invented personal names.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Vraćali smo se više puta i svaki put nas dočekaju osmijehom kao stalne goste. Usluga je pažljiva čak i kad je konoba puna.",
    source: "Gost, Google recenzija",
  },
  {
    quote:
      "Plata plodova mora bila je pravi vrhunac putovanja — količina za tu cijenu rijetko se viđa u restoranima s pogledom na more.",
    source: "Gost, TripAdvisor",
  },
  {
    quote:
      "Hrana je dobra i bez presezanja — jednostavno bolja od skupljih susjeda koji prodaju samo pogled, a ne i kuhinju.",
    source: "Gost, TripAdvisor",
  },
  {
    quote:
      "Mirna konoba, velike porcije, ljubazno osoblje. Točno ono što se traži poslije dana na plaži u Privlaci.",
    source: "Gost, Google recenzija",
  },
];

export const location = {
  mapQuery: "Konoba Planura, Ul. Ivana Pavla 113, Privlaka",
  mapEmbedSrc:
    "https://www.google.com/maps?q=Konoba+Planura+Privlaka&output=embed",
  areaNote:
    "Privlaka leži na plitkom, pješčanom poluotoku između Nina i otoka Vira, more je okružuje s tri strane — a konoba je smještena u srcu mjesta koje je stoljećima živjelo od ribarstva i poljodjelstva.",
};
