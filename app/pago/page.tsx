import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CreditCard,
  LockKeyhole,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { getPlan } from "@/lib/plans";

export const metadata: Metadata = {
  title: "Pago de plan Medsport",
  description: "Pantalla de continuación al pago de un plan Medsport.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/planes" }
};

function paymentUrlFor(slug: string) {
  const urls: Record<string, string | undefined> = {
    "one-training": process.env.NEXT_PUBLIC_PAYMENT_ONE_URL,
    "duo-training": process.env.NEXT_PUBLIC_PAYMENT_DUO_URL,
    "trio-training": process.env.NEXT_PUBLIC_PAYMENT_TRIO_URL,
    "free-training": process.env.NEXT_PUBLIC_PAYMENT_FREE_URL
  };
  return urls[slug];
}

export default function PaymentPage({ searchParams }: { searchParams?: { plan?: string } }) {
  const plan = getPlan(searchParams?.plan);
  const paymentUrl = paymentUrlFor(plan.slug);
  const whatsappText = encodeURIComponent(
    `Hola Medsport, quiero unirme al plan ${plan.name} (${plan.price}${plan.suffix ? ` ${plan.suffix}` : ""}) y necesito el link de pago con tarjeta.`
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
          <span className="eyebrow">TU DECISIÓN, EN MARCHA</span>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-[-.05em] md:text-6xl">Ya elegiste cómo quieres empezar.</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600">
            Ya hiciste la parte más importante de la decisión: elegir un formato. Completar este paso deja resuelta la inscripción y transforma “quiero comenzar” en una acción que Medsport puede coordinar contigo.
          </p>
        </div>

        <div className="mb-6 grid gap-3 sm:grid-cols-3" aria-label="Pasos para unirse a Medsport">
          {[
            ["01", "Eliges", "Definiste el formato que mejor encaja contigo."],
            ["02", "Pagas seguro", "Continúas a una pasarela externa con tarjeta."],
            ["03", "Coordinas", "Con el pago confirmado, sigue la coordinación según disponibilidad."]
          ].map(([number, title, text]) => (
            <div key={number} className="rounded-2xl border border-med-ink/10 bg-white p-5">
              <span className="text-xs font-extrabold text-med-blue">{number}</span>
              <p className="mt-2 font-display text-lg font-semibold">{title}</p>
              <p className="mt-1 text-xs leading-5 text-neutral-500">{text}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-5 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <aside className="rounded-[2rem] bg-med-ink p-6 text-white md:p-8">
            <p className="text-[11px] font-bold uppercase tracking-[.16em] text-med-aqua">Tu plan seleccionado</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-.04em]">{plan.name}</h2>
            <p className="mt-2 text-sm text-white/55">{plan.category}</p>

            <div className="mt-10 border-y border-white/15 py-7">
              <p className="text-xs uppercase tracking-[.12em] text-white/35">Total informado</p>
              <div className="mt-2 flex items-end gap-2">
                <strong className="font-display text-5xl font-semibold tracking-[-.06em]">{plan.price}</strong>
                {plan.suffix && <span className="pb-1 text-xs font-bold uppercase text-white/40">{plan.suffix}</span>}
              </div>
            </div>

            <div className="mt-7 space-y-3 text-sm text-white/65">
              <p className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-med-aqua" /> {plan.decisionCue}</p>
              <p className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-med-aqua" /> {plan.benefit}</p>
              <p className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-med-aqua" /> Revisa condiciones y disponibilidad antes de finalizar.</p>
            </div>
          </aside>

          <div className="rounded-[2rem] border border-med-ink/10 bg-white p-6 shadow-[0_24px_80px_rgba(8,21,33,.07)] md:p-9">
            <div className="flex items-start justify-between gap-6">
              <div>
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-med-sky text-med-blue"><CreditCard className="h-5 w-5" /></span>
                <h2 className="mt-6 font-display text-2xl font-semibold tracking-[-.04em] md:text-3xl">Haz que el primer paso quede resuelto.</h2>
                <p className="mt-3 max-w-xl text-sm leading-6 text-neutral-500">
                  Si el plan, modalidad y monto son correctos, completar el pago ahora cierra una decisión que ya tomaste. El siguiente contacto deja de ser “¿empiezo o no?” y pasa a ser “¿cuándo comienzo?”.
                </p>
              </div>
              <ShieldCheck className="hidden h-7 w-7 text-med-blue sm:block" />
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-med-ink/10 bg-med-ice p-5">
                <div className="flex items-center gap-3">
                  <LockKeyhole className="h-5 w-5 text-med-blue" />
                  <div>
                    <p className="text-sm font-bold">Checkout protegido</p>
                    <p className="mt-1 text-xs leading-5 text-neutral-500">El número de tu tarjeta y CVV no se almacenan en este sitio.</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-med-ink/10 bg-med-ice p-5">
                <div className="flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-med-blue" />
                  <div>
                    <p className="text-sm font-bold">Una decisión menos pendiente</p>
                    <p className="mt-1 text-xs leading-5 text-neutral-500">Resolver el pago ahora evita reabrir después una decisión que ya dejaste prácticamente tomada.</p>
                  </div>
                </div>
              </div>
            </div>

            {paymentUrl ? (
              <a
                href={paymentUrl}
                className="mt-8 inline-flex w-full items-center justify-between rounded-full bg-med-blue px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:shadow-blue"
              >
                Completar mi inscripción <ArrowRight className="h-4 w-4" />
              </a>
            ) : (
              <div className="mt-8">
                <a
                  href={`https://wa.me/56936217808?text=${whatsappText}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-between rounded-full bg-med-blue px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:shadow-blue"
                >
                  Dejar mi inscripción encaminada <ArrowRight className="h-4 w-4" />
                </a>
                <p className="mt-3 text-center text-xs leading-5 text-neutral-400">El pago directo con tarjeta quedará activo al conectar la pasarela de Medsport.</p>
              </div>
            )}

            <div className="mt-6 rounded-2xl border border-med-blue/10 bg-med-sky/[.45] p-4 text-xs leading-5 text-neutral-600">
              <strong className="text-med-ink">Decide con claridad, no por presión.</strong> Antes de pagar, confirma que el nombre del plan, el monto y el formato coincidan con lo que buscas. Si tienes dudas, vuelve a comparar o consulta a Medsport.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
