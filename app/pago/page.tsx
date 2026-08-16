import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CreditCard,
  LockKeyhole,
  ShieldCheck
} from "lucide-react";
import { getPlan } from "@/lib/plans";

export const metadata: Metadata = {
  title: "Inscripción a plan Medsport",
  description: "Consulta disponibilidad y continúa la inscripción a un plan Medsport.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/planes" }
};

function paymentUrlFor(slug: string) {
  const urls: Record<string, string | undefined> = {
    mensual: process.env.NEXT_PUBLIC_PAYMENT_MENSUAL_URL,
    estudiante: process.env.NEXT_PUBLIC_PAYMENT_ESTUDIANTE_URL,
    "adulto-mayor": process.env.NEXT_PUBLIC_PAYMENT_ADULTO_MAYOR_URL,
    empresas: process.env.NEXT_PUBLIC_PAYMENT_EMPRESAS_URL
  };
  return urls[slug];
}

export default function PaymentPage({ searchParams }: { searchParams?: { plan?: string } }) {
  const plan = getPlan(searchParams?.plan);
  const paymentUrl = paymentUrlFor(plan.slug);
  const whatsappText = encodeURIComponent(
    `Hola Medsport, quiero consultar disponibilidad para el ${plan.name} (${plan.price}${plan.suffix ? ` ${plan.suffix}` : ""}).`
  );

  return (
    <main className="min-h-screen bg-med-ice text-med-ink">
      <header className="border-b border-med-ink/10 bg-white/90 backdrop-blur-xl">
        <div className="payment-shell flex min-h-20 items-center justify-between gap-4">
          <a href="/planes" className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-500 transition hover:text-med-ink">
            <ArrowLeft className="h-4 w-4" /> Volver a planes
          </a>
          <a href="/" className="flex items-center gap-3" aria-label="Medsport inicio">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-med-aqua text-sm font-black text-med-ink">M</span>
            <span className="font-display text-base font-bold tracking-[-.04em]">MEDSPORT</span>
          </a>
        </div>
      </header>

      <section className="payment-shell py-10 md:py-16 lg:py-20">
        <div className="mb-8 max-w-3xl">
          
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-[-.05em] md:text-6xl">Confirma disponibilidad antes de comenzar.</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600">
            Los planes Medsport funcionan con cupos y horarios definidos. Antes del pago confirmamos contigo que exista disponibilidad para la modalidad seleccionada.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <aside className="rounded-[2rem] bg-med-ink p-6 text-white md:p-8">
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-.04em]">{plan.name}</h2>
            <p className="mt-2 text-sm text-white/55">{plan.category}</p>

            <div className="mt-10 border-y border-white/15 py-7">
              {plan.oldPrice && <p className="mb-1 text-xs text-white/40">Antes <span className="line-through">{plan.oldPrice}</span></p>}
              <div className="flex items-end gap-2">
                <strong className="font-display text-5xl font-semibold tracking-[-.06em]">{plan.price}</strong>
                {plan.suffix && <span className="pb-1 text-xs font-bold text-white/40">{plan.suffix}</span>}
              </div>
            </div>

            <div className="mt-7 space-y-3 text-sm text-white/65">
              <p className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-med-aqua" /> {plan.frequency}</p>
              <p className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-med-aqua" /> {plan.schedule}</p>
              <p className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-med-aqua" /> {plan.benefit}</p>
              <p className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-med-aqua" /> {plan.availability}</p>
            </div>
          </aside>

          <div className="rounded-[2rem] border border-med-ink/10 bg-white p-6 shadow-[0_24px_80px_rgba(8,21,33,.07)] md:p-9">
            <div className="flex items-start justify-between gap-6">
              <div>
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-med-sky text-med-blue"><CreditCard className="h-5 w-5" /></span>
                <h2 className="mt-6 font-display text-2xl font-semibold tracking-[-.04em] md:text-3xl">Primero coordinamos tu cupo.</h2>
                <p className="mt-3 max-w-xl text-sm leading-6 text-neutral-500">
                  Escríbenos para confirmar disponibilidad. Una vez coordinado el horario podrás completar el proceso de inscripción y comenzar con la evaluación inicial.
                </p>
              </div>
              <ShieldCheck className="hidden h-7 w-7 text-med-blue sm:block" />
            </div>

            {paymentUrl ? (
              <a
                href={paymentUrl}
                className="mt-8 inline-flex w-full items-center justify-between rounded-full bg-med-blue px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:shadow-blue"
              >
                Continuar al pago <ArrowRight className="h-4 w-4" />
              </a>
            ) : (
              <a
                href={`https://wa.me/56936217808?text=${whatsappText}`}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex w-full items-center justify-between rounded-full bg-med-blue px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:shadow-blue"
              >
                Consultar disponibilidad <ArrowRight className="h-4 w-4" />
              </a>
            )}

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-med-ink/10 bg-med-ice p-5">
                <div className="flex items-center gap-3">
                  <LockKeyhole className="h-5 w-5 text-med-blue" />
                  <div>
                    <p className="text-sm font-bold">Planificación individual</p>
                    <p className="mt-1 text-xs leading-5 text-neutral-500">La evaluación inicial orienta el trabajo y la progresión.</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-med-ink/10 bg-med-ice p-5">
                <div>
                  <p className="text-sm font-bold">Dos etapas de trabajo</p>
                  <p className="mt-1 text-xs leading-5 text-neutral-500">Preparación kinésica primero; entrenamiento específico después.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
