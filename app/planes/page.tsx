import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, CreditCard, ShieldCheck } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { SiteHeader } from "@/components/site-header";
import { MembershipPlans } from "@/components/ui/membership-plans";
import { medsportPlans } from "@/lib/plans";
import { SITE_URL, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Planes de Entrenamiento en Temuco",
  description: "Compara planes ONE, DÚO, TRÍO y FREE Training de Centro Medsport Temuco. Elige tu modalidad de entrenamiento y continúa al pago seguro con tarjeta.",
  alternates: { canonical: "/planes" },
  openGraph: {
    title: "Planes Medsport Temuco",
    description: "Planes de entrenamiento personalizado y semi personalizado en Temuco.",
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
            <h1 className="mt-5 max-w-5xl font-display text-5xl font-semibold leading-[.95] tracking-[-.06em] md:text-7xl">Elige cómo quieres empezar y deja la decisión encaminada.</h1>
          </div>
          <div>
            <p className="text-base leading-7 text-white/65">Cuando ya sabes que quieres entrenar, lo más útil es convertir esa intención en un siguiente paso visible. Compara formatos, reconoce cuál encaja contigo y, si ya lo tienes claro, deja tu inscripción resuelta para pasar a la coordinación del inicio.</p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold text-white/70">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2"><CreditCard className="h-4 w-4 text-med-aqua" /> Pago con tarjeta</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2"><ShieldCheck className="h-4 w-4 text-med-aqua" /> Pasarela externa segura</span>
            </div>
          </div>
        </div>
      </section>

      <MembershipPlans />

      <section className="bg-med-blue py-12 text-white md:py-16" aria-label="Incentivo para completar inscripción">
        <div className="section-shell grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <span className="eyebrow text-med-aqua">DE LA INTENCIÓN A LA ACCIÓN</span>
            <h2 className="mt-3 max-w-4xl font-display text-3xl font-semibold tracking-[-.04em] md:text-5xl">Si ya elegiste tu plan, no necesitas volver a decidirlo mañana.</h2>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-white/75">Completar la inscripción hoy deja un paso concreto resuelto. Después, la conversación cambia de “algún día empiezo” a “¿cuándo coordinamos?”. Tú mantienes el control: revisa modalidad, valor y condiciones antes de confirmar.</p>
          </div>
          <a href="#planes" className="inline-flex items-center justify-center gap-2 rounded-full bg-med-aqua px-6 py-4 text-sm font-bold text-med-ink transition hover:-translate-y-0.5">Elegir mi plan <ArrowRight className="h-4 w-4" /></a>
        </div>
      </section>

      <section className="section-shell py-16 md:py-24">
        <div className="grid gap-8 rounded-[2rem] bg-med-ice p-7 md:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <span className="eyebrow">ANTES DE PAGAR</span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-.04em] md:text-5xl">La mejor decisión es la que entiendes.</h2>
            <div className="mt-6 grid gap-3 text-sm leading-6 text-neutral-600 md:grid-cols-3">
              <p className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-med-blue" /> Compara el formato con tu disponibilidad y preferencia de acompañamiento.</p>
              <p className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-med-blue" /> Revisa nombre del plan y monto antes de completar el pago.</p>
              <p className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-med-blue" /> Si tienes dudas, consulta antes de pagar: claridad primero, compromiso después.</p>
            </div>
          </div>
          <a href={site.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-med-blue px-6 py-4 text-sm font-bold text-white">Consultar un plan <ArrowRight className="h-4 w-4" /></a>
        </div>
      </section>
    </main>
  );
}
