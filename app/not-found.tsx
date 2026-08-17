import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  Dumbbell,
  HeartPulse,
  Home,
} from "lucide-react";
import { site } from "@/lib/site";

const destinations = [
  {
    title: "Planes",
    description: "Revisa las alternativas de entrenamiento Medsport.",
    href: "/planes",
    icon: Dumbbell,
  },
  {
    title: "Kinesiología",
    description: "Evaluación y tratamiento kinésico en Temuco.",
    href: "/kinesiologia-temuco",
    icon: HeartPulse,
  },
  {
    title: "Reservas",
    description: "Agenda tu evaluación o atención.",
    href: "/reservas",
    icon: CalendarDays,
  },
];

export default function NotFound() {
  return (
    <main className="relative min-h-[100svh] overflow-hidden bg-med-ink text-white">
      {/* Fondo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -right-32 -top-32 h-[34rem] w-[34rem] rounded-full bg-med-blue/15 blur-[120px]" />
        <div className="absolute -bottom-40 -left-32 h-[30rem] w-[30rem] rounded-full bg-med-aqua/10 blur-[120px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(255,255,255,0.04),transparent_32%)]" />

        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>

      <div className="section-shell relative z-10 flex min-h-[100svh] flex-col justify-center pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_.75fr] lg:gap-20">
          {/* Mensaje principal */}
          <div>
            <div
              aria-hidden="true"
              className="font-display text-[clamp(7rem,20vw,15rem)] font-semibold leading-[.7] tracking-[-.09em] text-white/[.07]"
            >
              404
            </div>

            <div className="relative -mt-5 md:-mt-8">
              <h1 className="max-w-3xl font-display text-[clamp(2.8rem,6vw,5.8rem)] font-semibold leading-[.92] tracking-[-.06em] text-white">
                Esta ruta
                <br />
                <span className="text-med-aqua">no existe.</span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-7 text-white/80 md:text-lg md:leading-8">
                La página que buscas pudo cambiar de dirección o ya no estar
                disponible. Puedes volver al inicio o continuar directamente
                hacia uno de nuestros servicios.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-med-blue px-6 py-3.5 text-sm font-bold text-white shadow-[0_14px_45px_rgba(43,99,242,.24)] transition duration-300 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-med-aqua"
                >
                  <Home className="h-4 w-4" aria-hidden="true" />
                  Volver al inicio
                </Link>

                <a
                  href={site.agenda}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[.07] px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/[.11] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-med-aqua"
                >
                  <CalendarDays className="h-4 w-4" aria-hidden="true" />
                  Agendar Kinesiología
                </a>
              </div>
            </div>
          </div>

          {/* Navegación de recuperación */}
          <nav
            aria-label="Páginas recomendadas"
            className="rounded-[2rem] border border-white/10 bg-white/[.055] p-3 shadow-2xl backdrop-blur-xl md:p-4"
          >
            {destinations.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center gap-4 rounded-[1.5rem] p-4 transition duration-300 hover:bg-white/[.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-med-aqua md:p-5"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[.07] text-med-aqua transition duration-300 group-hover:border-med-aqua/30 group-hover:bg-med-aqua/10">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-lg font-semibold tracking-[-.025em] text-white">
                      {item.title}
                    </span>

                    <span className="mt-1 block text-sm leading-6 text-white/70">
                      {item.description}
                    </span>
                  </span>

                  <ArrowLeft
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 rotate-180 text-white/50 transition duration-300 group-hover:translate-x-1 group-hover:text-med-aqua"
                  />
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-white/65 sm:flex-row sm:items-center sm:justify-between">
          <span>Medsport · Rehabilitación y Entrenamiento</span>
          <span>Temuco, Chile</span>
        </div>
      </div>
    </main>
  );
}
