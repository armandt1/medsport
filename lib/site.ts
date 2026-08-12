export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.vt1performance.cl").replace(/\/$/, "");

export const site = {
  name: "Centro Medsport",
  shortName: "Medsport",
  legalName: "Centro Medsport",
  description:
    "Centro de kinesiología, rehabilitación deportiva, entrenamiento personalizado y entrenamiento deportivo en Temuco. Evaluación, planificación y seguimiento para recuperar capacidad, entrenar y rendir mejor.",
  phoneDisplay: "+56 9 3621 7808",
  phone: "+56936217808",
  whatsapp: "https://wa.me/56936217808",
  agenda: "https://agendapro.com/mp/cl/pl/centro-medsport/233580",
  instagram: "https://www.instagram.com/centromedsport/",
  facebook: "https://www.facebook.com/centromedsport/",
  address: {
    streetAddress: "Av. Alemania 0425, local 205, Paseo Los Suizos",
    addressLocality: "Temuco",
    addressRegion: "La Araucanía",
    postalCode: "",
    addressCountry: "CL"
  }
} as const;
