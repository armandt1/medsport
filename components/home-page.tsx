import {
  Activity,
  ArrowRight,
  CalendarDays,
  Check,
  CircleGauge,
  Dumbbell,
  HeartPulse,
  MapPin,
  Stethoscope,
  Target
} from "lucide-react";
import { ParallaxComponent } from "@/components/ui/parallax-scrolling";
import FaqSections from "@/components/ui/faq-sections";
import { SiteHeader } from "@/components/site-header";
import ProfessionalTeam from "@/components/ui/professional-team";
import { ContinuousCta } from "@/components/ui/continuous-cta";
import { MembershipPlans } from "@/components/ui/membership-plans";
import { site } from "@/lib/site";

const services = [
  {
    icon: Dumbbell,
    title: "Entrenamiento personalizado",
    text: "Sesiones planificadas según tu objetivo, nivel, antecedentes y respuesta al entrenamiento, con seguimiento técnico y ajustes progresivos.",
    href: "/entrenamiento-personalizado-temuco"
  },
  {
    icon: Stethoscope,
    title: "Kinesiología",
    text: "Evaluación y tratamiento enfocados en recuperar movimiento, función y capacidad para volver con seguridad a tus actividades.",
    href: "/kinesiologia-temuco"
  },
  {
    icon: HeartPulse,
    title: "Rehabilitación kinesiológica",
    text: "Evaluación y progresión del movimiento para recuperar movilidad, fuerza, control y tolerancia a la carga antes de volver a las actividades que importan.",
    href: "/rehabilitacion-deportiva-temuco"
  },
  {
    icon: Dumbbell,
    title: "Entrenamiento deportivo",
    text: "Planificación de fuerza, acondicionamiento y capacidades físicas orientada a las demandas de tu deporte y a objetivos medibles.",
    href: "/entrenamiento-deportivo-temuco"
  },
  {
    icon: CircleGauge,
    title: "Rendimiento deportivo",
    text: "Objetivos deportivos traducidos a métricas, carga, técnica y decisiones de entrenamiento medibles."
  },
  {
    icon: Target,
    title: "Evaluación física",
    text: "Un punto de partida objetivo para conocer capacidades, detectar necesidades y definir prioridades de trabajo."
  },
  {
    icon: Activity,
    title: "Readaptación y prevención",
    text: "Trabajo progresivo para volver a entrenar, competir o moverte con mayor capacidad y reducir factores de riesgo evitables."
  }
];

export default function HomePage() {
  return (
    <main id="inicio" className="overflow-clip bg-white text-med-ink">
      <SiteHeader />
      <ContinuousCta />
      <ParallaxComponent />


      <section className="section-shell py-24 md:py-36" id="medsport">
        <div className="grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:items-start">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="eyebrow">MEDSPORT / TEMUCO</span>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.02] tracking-[-.05em] md:text-6xl lg:text-7xl">
              No se trata solo de moverte. Se trata de <span className="inline rounded-lg bg-med-sky px-2 text-med-blue">moverte mejor.</span>
            </h2>
            <p className="mt-7 max-w-lg text-base leading-7 text-neutral-600">
              Cada proceso parte por entender tu situación actual. Desde ahí, el trabajo puede orientarse al rendimiento, al entrenamiento personalizado, a la recuperación o a una transición entre estas etapas.
            </p>
            <a className="mt-8 inline-flex items-center gap-2 rounded-full bg-med-blue px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:shadow-blue" href={site.whatsapp} target="_blank" rel="noreferrer">
              Consultar por WhatsApp <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div id="servicios" className="scroll-mt-28">
            <div className="border-t border-neutral-200 pt-8">
              <h3 className="max-w-2xl font-display text-3xl font-semibold tracking-[-.04em] md:text-5xl">Entrena, recupérate y vuelve a avanzar.</h3>
              <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-600">
                La propuesta une criterio clínico y deportivo en una experiencia clara, medible y progresiva, conectando evaluación, recuperación y entrenamiento sin soluciones genéricas.
              </p>
            </div>

            <div className="mt-10 grid gap-3 md:grid-cols-2">
              {services.map(({ icon: Icon, title, text, href }, i) => (
                <article key={title} className={`service-card group ${i % 2 === 1 ? "md:translate-y-12" : ""}`}>
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-med-sky text-med-blue transition duration-300 group-hover:bg-med-blue group-hover:text-white"><Icon className="h-5 w-5" /></span>
                    <span className="text-xs font-bold text-neutral-400">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="mt-20">
                    <h3 className="font-display text-2xl font-semibold">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-neutral-500">{text}</p>
                    {href && (
                      <a href={href} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-med-blue transition hover:gap-3" aria-label={`Ver información sobre ${title} en Temuco`}>
                        Ver servicio <ArrowRight className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="especialidades" className="bg-med-ice py-24 md:py-32">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[.82fr_1.18fr] lg:items-end">
            <div>
              <h2 className="max-w-xl font-display text-4xl font-semibold tracking-[-.05em] md:text-6xl">Rehabilitar y entrenar, con continuidad.</h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-neutral-600 lg:justify-self-end">
              Medsport conecta la rehabilitación kinesiológica con el entrenamiento deportivo para que cada etapa tenga un objetivo claro y una progresión coherente con tu actividad.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <article className="specialty-card group bg-white">
              <div className="flex items-start justify-between gap-6">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-med-sky text-med-blue"><HeartPulse className="h-6 w-6" /></span>
                <span className="text-xs font-bold uppercase tracking-[.15em] text-neutral-400">REHAB / 01</span>
              </div>
              <div className="mt-14">
                <span className="text-xs font-bold uppercase tracking-[.14em] text-med-blue">Rehabilitación kinesiológica</span>
                <h3 className="mt-3 font-display text-3xl font-semibold tracking-[-.04em] md:text-4xl">Recuperar capacidad para volver a moverte con confianza.</h3>
                <p className="mt-5 max-w-xl text-sm leading-6 text-neutral-600">
                  El proceso parte con una evaluación funcional y avanza mediante objetivos progresivos. Se trabaja sobre movilidad, fuerza, control, tolerancia a la carga y tareas vinculadas a tu vida diaria o práctica deportiva.
                </p>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {["Evaluación funcional", "Progresión de cargas", "Movilidad y fuerza", "Retorno a la actividad"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm font-semibold text-med-ink"><span className="grid h-6 w-6 place-items-center rounded-full bg-med-sky text-med-blue"><Check className="h-3.5 w-3.5" /></span>{item}</div>
                  ))}
                </div>
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href={site.agenda} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-med-blue px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:shadow-blue">
                  Agendar rehabilitación <CalendarDays className="h-4 w-4" />
                </a>
                <a href="/rehabilitacion-deportiva-temuco" className="inline-flex items-center gap-2 rounded-full border border-med-ink/10 px-5 py-3 text-sm font-bold text-med-ink">Conocer el proceso</a>
              </div>
            </article>

            <article className="specialty-card group bg-med-ink text-white">
              <div className="flex items-start justify-between gap-6">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-med-aqua text-med-ink"><Dumbbell className="h-6 w-6" /></span>
                <span className="text-xs font-bold uppercase tracking-[.15em] text-white/35">SPORT / 02</span>
              </div>
              <div className="mt-14">
                <span className="text-xs font-bold uppercase tracking-[.14em] text-med-aqua">Entrenamiento deportivo</span>
                <h3 className="mt-3 font-display text-3xl font-semibold tracking-[-.04em] md:text-4xl">Entrenar capacidades que tengan sentido para tu deporte.</h3>
                <p className="mt-5 max-w-xl text-sm leading-6 text-white/60">
                  La planificación se construye desde tu nivel, calendario y objetivo. El foco puede integrar fuerza, potencia, resistencia, movilidad, técnica de ejercicios y control de carga para sostener una evolución medible.
                </p>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {["Fuerza y potencia", "Acondicionamiento", "Control de carga", "Seguimiento de progreso"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm font-semibold text-white"><span className="grid h-6 w-6 place-items-center rounded-full bg-white/10 text-med-aqua"><Check className="h-3.5 w-3.5" /></span>{item}</div>
                  ))}
                </div>
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href={site.agenda} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-med-aqua px-5 py-3 text-sm font-bold text-med-ink transition hover:-translate-y-0.5">
                  Agendar entrenamiento <CalendarDays className="h-4 w-4" />
                </a>
                <a href="/entrenamiento-deportivo-temuco" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-white">Ver entrenamiento</a>
              </div>
            </article>
          </div>

          <div className="mt-5 flex flex-col gap-5 rounded-[2rem] border border-med-blue/10 bg-white p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-med-sky text-med-blue"><CalendarDays className="h-5 w-5" /></span>
              <div>
                <h3 className="font-display text-xl font-semibold">Agenda online</h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-neutral-500">Consulta servicios y disponibilidad desde celular, tablet o computador. La reserva se realiza en la plataforma externa de AgendaPro.</p>
              </div>
            </div>
            <a href={site.agenda} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-med-blue/15 bg-med-blue px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:shadow-blue">
              Abrir agenda <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-4 grid gap-3 rounded-[1.75rem] bg-med-sky/55 p-5 sm:grid-cols-2 md:p-6">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-med-blue text-white"><Check className="h-4 w-4" /></span>
              <div>
                <p className="text-sm font-bold text-med-ink">Atención kinésica con bono FONASA</p>
                <p className="mt-1 text-xs leading-5 text-neutral-600">Medsport atiende kinesiología con bono FONASA.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white text-med-blue"><Check className="h-4 w-4" /></span>
              <div>
                <p className="text-sm font-bold text-med-ink">Isapres y seguros complementarios</p>
                <p className="mt-1 text-xs leading-5 text-neutral-600">Reembolso según tu plan; para seguros complementarios se requiere derivación médica.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProfessionalTeam />
      <MembershipPlans />

      <section className="section-shell py-20 md:py-28" id="temuco">
        <div className="grid gap-10 rounded-[2.25rem] border border-med-ink/10 bg-white p-7 md:p-10 lg:grid-cols-[.85fr_1.15fr] lg:p-14">
          <div>
            <span className="eyebrow">MEDSPORT EN TEMUCO</span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-.05em] md:text-5xl">Kinesiología y entrenamiento en Av. Alemania.</h2>
          </div>
          <div className="space-y-5 text-base leading-7 text-neutral-600">
            <p>
              Centro Medsport está en <strong className="text-med-ink">{site.address.streetAddress}, Temuco</strong>. El centro integra kinesiología, rehabilitación deportiva, entrenamiento personalizado y entrenamiento deportivo para personas que buscan recuperar capacidad, mejorar su condición física o avanzar hacia objetivos de rendimiento.
            </p>
            <p>
              Si buscas <a className="font-semibold text-med-blue" href="/kinesiologia-temuco">kinesiología en Temuco</a>, <a className="font-semibold text-med-blue" href="/entrenamiento-personalizado-temuco">entrenamiento personalizado</a> o un proceso de <a className="font-semibold text-med-blue" href="/rehabilitacion-deportiva-temuco">rehabilitación deportiva</a>, puedes revisar cada servicio antes de agendar. El centro también es una alternativa para personas que se desplazan desde sectores cercanos como Padre Las Casas, Labranza y otras zonas de La Araucanía.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href={site.agenda} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-med-blue px-5 py-3 text-sm font-bold text-white">Agendar en Temuco <ArrowRight className="h-4 w-4" /></a>
              <a href="/planes" className="inline-flex items-center gap-2 rounded-full border border-med-ink/10 px-5 py-3 text-sm font-bold text-med-ink">Ver planes</a>
            </div>
          </div>
        </div>
      </section>

      <FaqSections />

      <section className="section-shell pb-6 md:pb-10">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-med-blue px-6 py-16 text-white md:px-12 md:py-24 lg:px-16">
          <div className="absolute -right-12 -top-24 h-72 w-72 rounded-full border-[40px] border-med-aqua/25" />
          <div className="absolute bottom-[-5rem] left-[45%] h-60 w-60 rounded-full bg-med-aqua/15 blur-3xl" />
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="max-w-4xl font-display text-5xl font-semibold leading-[.95] tracking-[-.06em] md:text-7xl">Entrena mejor. Recupérate mejor. Avanza con dirección.</h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/75">Cuando el objetivo está claro, reducir la fricción del primer paso importa. Agenda tu evaluación o elige un plan y deja definido cómo vas a comenzar.</p>
              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-white/85">
                <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> {site.address.streetAddress} · Temuco</span>
                <span>{site.phoneDisplay}</span>
              </div>
            </div>
            <div className="flex flex-col gap-3 lg:min-w-[280px]">
              <a href={site.agenda} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-bold text-med-blue transition hover:-translate-y-0.5">
                <HeartPulse className="h-4 w-4" /> Agendar Kinesiología
              </a>
              <a href="/#planes" className="inline-flex items-center justify-center gap-2 rounded-full bg-med-aqua px-6 py-4 text-sm font-bold text-med-ink transition hover:-translate-y-0.5">
                <CalendarDays className="h-4 w-4" /> Elegir mi plan
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="section-shell flex flex-col gap-5 py-8 text-xs text-neutral-500 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Centro Medsport · Temuco, Chile.</p>
        <div className="flex flex-wrap gap-5">
          <a href="/#inicio">Inicio</a>
          <a href="/#team">Team</a>
          <a href="/#faq">Preguntas</a>
          <a href="/planes">Planes</a>
          <a href={site.instagram} target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </footer>
    </main>
  );
}
