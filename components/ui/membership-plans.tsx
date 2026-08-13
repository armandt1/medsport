import { ArrowRight, Check, CreditCard, Dumbbell, Sparkles, UsersRound } from "lucide-react";
import { medsportPlans } from "@/lib/plans";

export function MembershipPlans() {
  return (
    <section id="planes" className="bg-med-ice py-24 md:py-32">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[.82fr_1.18fr] lg:items-end">
          <div>
            <span className="eyebrow">PLANES MEDSPORT</span>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-[-.05em] md:text-6xl">
              Nuestros planes
            </h2>
          </div>
          <div className="max-w-2xl lg:justify-self-end">
            <p className="text-base leading-7 text-neutral-600">
              Tu objetivo ya existe; el plan solo define cómo vas a empezar a trabajarlo. Si ya comparaste las opciones y una encaja contigo, resolver la inscripción hoy evita volver a abrir mañana una decisión que ya tomaste y te permite pasar a la coordinación del inicio.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-neutral-500 shadow-sm ring-1 ring-med-ink/5">
                <CreditCard className="h-4 w-4 text-med-blue" /> Pago online con tarjeta
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-neutral-500 shadow-sm ring-1 ring-med-ink/5">
                <Sparkles className="h-4 w-4 text-med-blue" /> Elige según tu forma de entrenar
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {medsportPlans.map((plan, index) => {
            const featured = plan.slug === "free-training";
            return (
              <article
                key={plan.slug}
                className={`plan-card ${featured ? "plan-card--featured" : ""}`}
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <span className={`grid h-11 w-11 place-items-center rounded-full ${featured ? "bg-med-aqua text-med-ink" : "bg-med-sky text-med-blue"}`}>
                      {index < 3 ? <UsersRound className="h-5 w-5" /> : <Dumbbell className="h-5 w-5" />}
                    </span>
                    <span className={`rounded-full px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.12em] ${featured ? "bg-white/10 text-white/70" : "bg-med-ice text-neutral-500"}`}>
                      {plan.badge}
                    </span>
                  </div>

                  <p className={`mt-10 text-[11px] font-bold uppercase tracking-[.14em] ${featured ? "text-med-aqua" : "text-med-blue"}`}>{plan.category}</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold tracking-[-.04em]">{plan.name}</h3>
                  <p className={`mt-4 min-h-[72px] text-sm leading-6 ${featured ? "text-white/60" : "text-neutral-500"}`}>{plan.description}</p>

                  <p className={`mt-5 rounded-2xl px-4 py-3 text-xs font-semibold leading-5 ${featured ? "bg-white/[.07] text-white/75" : "bg-med-sky/[.65] text-med-ink"}`}>
                    {plan.decisionCue}
                  </p>

                  <div className={`mt-7 border-t pt-6 ${featured ? "border-white/15" : "border-med-ink/10"}`}>
                    <div className="flex items-end gap-2">
                      <strong className="font-display text-4xl font-semibold tracking-[-.06em]">{plan.price}</strong>
                      {plan.suffix && <span className={`pb-1 text-xs font-bold uppercase ${featured ? "text-white/45" : "text-neutral-400"}`}>{plan.suffix}</span>}
                    </div>
                    <p className={`mt-3 flex items-start gap-2 text-xs leading-5 ${featured ? "text-white/55" : "text-neutral-500"}`}>
                      <Check className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${featured ? "text-med-aqua" : "text-med-blue"}`} /> {plan.benefit}
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href={`/pago?plan=${plan.slug}`}
                    className={`inline-flex w-full items-center justify-between rounded-full px-5 py-3.5 text-sm font-bold transition hover:-translate-y-0.5 ${featured ? "bg-med-aqua text-med-ink" : "bg-med-blue text-white hover:shadow-blue"}`}
                    aria-label={`Unirme a Medsport con ${plan.name}`}
                  >
                    Unirme a Medsport <ArrowRight className="h-4 w-4" />
                  </a>
                  <p className={`mt-3 text-center text-[11px] leading-4 ${featured ? "text-white/40" : "text-neutral-400"}`}>
                    Si este formato encaja contigo, puedes dejar tu inscripción resuelta ahora.
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-5 text-xs leading-5 text-neutral-400">
          Valores mostrados según información pública de Medsport 2026. Las condiciones del plan se confirman antes de completar el pago.
        </p>
      </div>
    </section>
  );
}
