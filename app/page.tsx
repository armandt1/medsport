import type { Metadata } from "next";
import HomePage from "@/components/home-page";
import { JsonLd } from "@/components/json-ld";
import { SITE_URL, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kinesiología y Entrenamiento Personalizado en Temuco",
  description:
    "Centro Medsport en Temuco: kinesiología, rehabilitación deportiva, entrenamiento personalizado, entrenamiento deportivo y evaluación física. Conoce servicios, planes y agenda online.",
  alternates: { canonical: "/" }
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "SportsActivityLocation"],
  "@id": `${SITE_URL}/#medsport-temuco`,
  name: site.name,
  url: SITE_URL,
  telephone: site.phone,
  description: site.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.streetAddress,
    addressLocality: site.address.addressLocality,
    addressRegion: site.address.addressRegion,
    addressCountry: site.address.addressCountry
  },
  areaServed: [
    { "@type": "City", name: "Temuco" },
    { "@type": "AdministrativeArea", name: "La Araucanía" }
  ],
  sameAs: [site.instagram, site.facebook],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios Medsport",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Kinesiología en Temuco",
          url: `${SITE_URL}/kinesiologia-temuco`
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Rehabilitación deportiva en Temuco",
          url: `${SITE_URL}/rehabilitacion-deportiva-temuco`
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Entrenamiento personalizado en Temuco",
          url: `${SITE_URL}/entrenamiento-personalizado-temuco`
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Entrenamiento deportivo en Temuco",
          url: `${SITE_URL}/entrenamiento-deportivo-temuco`
        }
      }
    ]
  }
};

const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    ["¿Necesito experiencia previa para comenzar?", "No. El punto de partida es tu evaluación. Desde ahí se define una progresión acorde a tu condición, objetivos, antecedentes y experiencia previa."],
    ["¿Cómo funciona el entrenamiento personalizado?", "El trabajo se adapta a tus objetivos y nivel actual. La planificación se ajusta según tu respuesta, técnica, cargas y evolución, con acompañamiento profesional durante el proceso."],
    ["¿Qué aborda el servicio de kinesiología?", "La kinesiología está orientada a recuperar movimiento, función y capacidad física, integrando evaluación, tratamiento y progresión hacia las actividades que necesitas realizar."],
    ["¿Medsport atiende con bono FONASA?", "Sí. En Medsport la atención kinésica se realiza con bono FONASA. Al momento de agendar puedes consultar los requisitos y la modalidad correspondiente a tu atención."],
    ["¿Las atenciones kinésicas son reembolsables por Isapre o seguros complementarios?", "Sí. Las atenciones kinésicas pueden ser reembolsables por Isapres según las condiciones de tu plan y por seguros complementarios siempre que exista una derivación médica. El porcentaje de cobertura y los documentos exigidos dependen de cada Isapre o seguro."],
    ["¿Cómo se conecta la rehabilitación con el entrenamiento deportivo?", "Cuando el proceso lo requiere, la rehabilitación kinesiológica puede progresar hacia tareas físicas y deportivas cada vez más exigentes para evitar un salto brusco al volver a entrenar."],
    ["¿Dónde está Centro Medsport en Temuco?", `Centro Medsport está en ${site.address.streetAddress}, Temuco, La Araucanía.`]
  ].map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer }
  }))
};

export default function Page() {
  return (
    <>
      <JsonLd data={[localBusinessSchema, homeFaqSchema]} />
      <HomePage />
    </>
  );
}
