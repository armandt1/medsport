import { ArrowRight, Check, Clock3 } from "lucide-react";
import { medsportPlans } from "@/lib/plans";

export function MembershipPlans() {
  return (
    <section id="planes" className="bg-med-ice py-20 md:py-28">
      <div className="section-shell">
        <div className="max-w-4xl">
          
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-.05em] md:text-6xl">
            Nuestros planes
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-neutral-600">
            Todos los planes Medsport parten desde una evaluación y una planificación individual. No entregamos una rutina genérica: estructuramos el proceso según los hallazgos físicos, las necesidades de cada persona y el objetivo que quiere alcanzar.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {medsportPlans.map((plan) => {
            const featured = plan.slug === "mensual";
            return (
              <article
                key={plan.slug}
                className={`plan-card ${featured ? "plan-card--featured" : ""}`}
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-semibold tracking-[-.04em]">{plan.name}</h3>
                  <p className={`mt-4 min-h-[96px] text-sm leading-6 ${featured ? "text-white/65" : "text-neutral-500"}`}>{plan.description}</p>

                  <div className={`mt-7 border-t pt-6 ${featured ? "border-white/15" : "border-med-ink/10"}`}>
                    {plan.oldPrice && (
                      <p className={`mb-1 text-xs ${featured ? "text-white/45" : "text-neutral-400"}`}>
                        Antes <span className="line-through">{plan.oldPrice}</span>
                      </p>
                    )}
                    <div className="flex items-end gap-2">
                      <strong className="font-display text-4xl font-semibold tracking-[-.06em]">{plan.price}</strong>
                      {plan.suffix && <span className={`pb-1 text-xs font-bold ${featured ? "text-white/45" : "text-neutral-400"}`}>{plan.suffix}</span>}
                    </div>
                  </div>

                  <div className={`mt-6 space-y-3 text-xs leading-5 ${featured ? "text-white/65" : "text-neutral-500"}`}>
                    <p className="flex items-start gap-2">
                      <Check className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${featured ? "text-med-aqua" : "text-med-blue"}`} />
                      {plan.frequency}
                    </p>
                    <p className="flex items-start gap-2">
                      <Clock3 className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${featured ? "text-med-aqua" : "text-med-blue"}`} />
                      {plan.schedule}
                    </p>
                    <p className="flex items-start gap-2">
                      <Check className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${featured ? "text-med-aqua" : "text-med-blue"}`} />
                      {plan.benefit}
                    </p>
                  </div>

                  <p className={`mt-5 rounded-2xl px-4 py-3 text-[11px] leading-5 ${featured ? "bg-white/[.07] text-white/55" : "bg-med-sky/[.55] text-neutral-500"}`}>
                    {plan.availability}
                  </p>
                </div>

                <div className="mt-8">
                  <a
                    href={`/pago?plan=${plan.slug}`}
                    className={`inline-flex w-full items-center justify-between rounded-full px-5 py-3.5 text-sm font-bold transition hover:-translate-y-0.5 ${featured ? "bg-med-aqua text-med-ink" : "bg-med-blue text-white hover:shadow-blue"}`}
                    aria-label={`Consultar inscripción al ${plan.name}`}
                  >
                    Consultar disponibilidad <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 rounded-[2rem] bg-white p-6 ring-1 ring-med-ink/5 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
            <div>
              
              <h3 className="mt-4 font-display text-3xl font-semibold tracking-[-.04em] md:text-4xl">
                Primero evaluamos. Después preparamos. Luego entrenamos.
              </h3>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-med-ice p-5">
                <span className="text-xs font-extrabold text-med-blue">01 · EVALUACIÓN</span>
                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  Aplicamos una batería de evaluaciones de cualidades físicas y habilidades para identificar fortalezas, déficits, desbalances y necesidades relevantes para tu proceso.
                </p>
              </div>
              <div className="rounded-2xl bg-med-ice p-5">
                <span className="text-xs font-extrabold text-med-blue">02 · ETAPA KINÉSICA</span>
                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  Trabajamos los hallazgos de la evaluación y preparamos el cuerpo en aspectos como fuerza, movilidad, flexibilidad y control antes de avanzar a cargas de entrenamiento mayores.
                </p>
              </div>
              <div className="rounded-2xl bg-med-ice p-5">
                <span className="text-xs font-extrabold text-med-blue">03 · ENTRENAMIENTO</span>
                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  Con la base preparada, estructuramos volúmenes, intensidades y progresiones según tus objetivos personales, deportivos o de rendimiento.
                </p>
              </div>
            </div>
          </div>
          <p className="mt-6 border-t border-med-ink/10 pt-5 text-sm leading-6 text-neutral-500">
            La planificación es individual en todos los planes. El paso entre etapas se define según la evaluación, la respuesta al proceso y los criterios del equipo kinésico Medsport.
          </p>
        </div>

        <p className="mt-5 text-xs leading-5 text-neutral-400">
          Valores mensuales informados por Medsport. Todos los planes están sujetos a disponibilidad de cupos y horarios. Las condiciones finales se confirman antes de iniciar.
        </p>
      </div>
    </section>
  );
}
