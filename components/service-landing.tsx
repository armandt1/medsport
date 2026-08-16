import { ArrowRight, CalendarDays, Check, MapPin } from "lucide-react";
import { ContinuousCta } from "@/components/ui/continuous-cta";
import { SiteHeader } from "@/components/site-header";
import type { ServiceLandingData } from "@/lib/services";
import { site } from "@/lib/site";

export function ServiceLanding({ service }: { service: ServiceLandingData }) {
  return (
    <main className="min-h-screen bg-white text-med-ink">
      <SiteHeader />
      <ContinuousCta />

      <section className="bg-med-ink pb-20 pt-36 text-white md:pb-28 md:pt-44">
        <div className="section-shell">
          <nav aria-label="Breadcrumb" className="mb-12 text-xs font-semibold text-white/45">
            <a className="transition hover:text-white" href="/">Inicio</a>
            <span className="mx-2">/</span>
            <span>{service.shortName}</span>
          </nav>
          <div className="grid gap-10 lg:grid-cols-[1.18fr_.82fr] lg:items-end">
            <div>
              
              <h1 className="mt-5 max-w-5xl font-display text-5xl font-semibold leading-[.95] tracking-[-.06em] md:text-7xl">{service.title}</h1>
            </div>
            <div>
              <p className="text-base leading-7 text-white/65">{service.intro}</p>
              <a href={site.agenda} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-med-aqua px-6 py-3.5 text-sm font-bold text-med-ink transition hover:-translate-y-0.5">
                Agendar en Temuco <CalendarDays className="h-4 w-4" />
              </a>
              {(service.slug === "kinesiologia-temuco" || service.slug === "rehabilitacion-deportiva-temuco") && (
                <div className="mt-5 space-y-2 text-sm text-white/75">
                  <p className="flex items-center gap-2 font-semibold text-white"><Check className="h-4 w-4 text-med-aqua" /> Atención kinésica con bono FONASA.</p>
                  <p>Reembolsable por Isapre según tu plan y por seguros complementarios con derivación médica.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-2">
          <article className="rounded-[2rem] bg-med-ice p-7 md:p-10">
            
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-.04em] md:text-4xl">Un punto de partida según tu situación actual.</h2>
            <div className="mt-8 space-y-4">
              {service.whoFor.map((item) => (
                <p key={item} className="flex gap-3 text-sm leading-6 text-neutral-600">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-med-blue text-white"><Check className="h-3.5 w-3.5" /></span>
                  {item}
                </p>
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] border border-med-ink/10 p-7 md:p-10">
            
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-.04em] md:text-4xl">Trabajo progresivo y medible.</h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {service.includes.map((item) => (
                <div key={item} className="rounded-2xl bg-med-cloud p-4 text-sm font-semibold text-med-ink">{item}</div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="bg-med-ice py-20 md:py-28">
        <div className="section-shell">
          
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-[-.05em] md:text-6xl">Un proceso fácil de entender.</h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {service.process.map((step, index) => (
              <article key={step.title} className="rounded-[1.75rem] bg-white p-6 md:p-8">
                <span className="font-display text-5xl font-semibold text-med-blue/15">0{index + 1}</span>
                <h3 className="mt-12 font-display text-2xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-600">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-.04em] md:text-5xl">Preguntas frecuentes.</h2>
            <div className="mt-8 flex items-start gap-3 text-sm leading-6 text-neutral-600">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-med-blue" />
              <p>{site.address.streetAddress}, {site.address.addressLocality}, {site.address.addressRegion}.</p>
            </div>
          </div>
          <div className="divide-y divide-med-ink/10 border-t border-med-ink/10">
            {service.faqs.map((faq) => (
              <article key={faq.question} className="py-6">
                <h3 className="font-display text-xl font-semibold">{faq.question}</h3>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-neutral-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pb-12 md:pb-20">
        <div className="rounded-[2.25rem] bg-med-blue p-7 text-white md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="max-w-3xl font-display text-4xl font-semibold tracking-[-.05em] md:text-6xl">Una evaluación convierte la duda en un punto de partida.</h2>
              <p className="mt-5 max-w-2xl text-sm leading-6 text-white/75">Agenda para revisar tu situación y definir qué ruta tiene más sentido antes de aumentar la exigencia.</p>
            </div>
            <a href={site.agenda} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-bold text-med-blue">
              Agendar ahora <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-3 border-t border-white/15 pt-6 text-sm">
            <span className="text-white/50">También puedes revisar:</span>
            {service.related.map((item) => (
              <a key={item.href} href={item.href} className="font-semibold text-med-aqua">{item.label}</a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
