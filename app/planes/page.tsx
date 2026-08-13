import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { SiteHeader } from "@/components/site-header";
import { MembershipPlans } from "@/components/ui/membership-plans";
import { medsportPlans } from "@/lib/plans";
import { SITE_URL, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Planes de Entrenamiento en Temuco",
  description: "Planes Medsport Temuco con evaluación inicial, etapa kinésica y entrenamiento personalizado tres veces por semana, sujetos a disponibilidad.",
  alternates: { canonical: "/planes" },
  openGraph: {
    title: "Planes Medsport Temuco",
    description: "Entrenamiento planificado por equipo kinésico, desde la evaluación hasta el trabajo orientado a objetivos.",
    url: "/planes",
    siteName: site.name,
    type: "website",
    locale: "es_CL"
  }
};

const plansSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Planes Medsport Temuco",
  url: `${SITE_URL}/planes`,
  itemListElement: medsportPlans.map((plan, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: plan.name,
      description: plan.description,
      provider: { "@id": `${SITE_URL}/#medsport-temuco` },
      offers: {
        "@type": "Offer",
        priceCurrency: "CLP",
        price: plan.priceNumber,
        url: `${SITE_URL}/pago?plan=${plan.slug}`
      }
    }
  }))
};

export default function PlansPage() {
  return (
    <main className="min-h-screen bg-white text-med-ink">
      <JsonLd data={plansSchema} />
      <SiteHeader />

      <section className="bg-med-ink pb-16 pt-36 text-white md:pb-24 md:pt-44">
        <div className="section-shell grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <div>
            <span className="eyebrow text-med-aqua">PLANES · MEDSPORT TEMUCO</span>
            <h1 className="mt-5 max-w-5xl font-display text-5xl font-semibold leading-[.95] tracking-[-.06em] md:text-7xl">
              Entrenamiento planificado desde tu evaluación.
            </h1>
          </div>
          <div>
            <p className="text-base leading-7 text-white/65">
              Nuestro equipo kinésico evalúa, identifica necesidades y estructura un proceso individual. Primero preparamos el cuerpo; después avanzamos al entrenamiento específico para tus objetivos.
            </p>
          </div>
        </div>
      </section>

      <MembershipPlans />

      <section className="bg-med-blue py-12 text-white md:py-16">
        <div className="section-shell grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <span className="eyebrow text-med-aqua">DISPONIBILIDAD</span>
            <h2 className="mt-3 max-w-4xl font-display text-3xl font-semibold tracking-[-.04em] md:text-5xl">
              Confirma tu horario antes de inscribirte.
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-white/75">
              Los cupos dependen del plan, el horario y la capacidad disponible. Escríbenos para revisar la alternativa que mejor se ajuste a tu semana.
            </p>
          </div>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-med-aqua px-6 py-4 text-sm font-bold text-med-ink transition hover:-translate-y-0.5"
          >
            Consultar disponibilidad <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </main>
  );
}
