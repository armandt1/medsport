import type { Metadata } from "next";
import { BookingClient } from "@/components/reservas/booking-client";

export const metadata: Metadata = {
  title: "Reservas | Medsport Temuco",
  description:
    "Reserva tu evaluación, sesión kinésica o entrenamiento en Medsport Temuco con disponibilidad conectada a ATHENAS.",
  robots: { index: true, follow: true },
};

export default function ReservasPage() {
  return (
    <main className="min-h-screen bg-[#080a08] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_16%,rgba(132,204,22,0.16),transparent_30%),linear-gradient(180deg,#0d100d_0%,#080a08_100%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-lime-400">
              Reserva Medsport
            </span>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Elige una hora real. Nosotros nos encargamos del proceso.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
              Consulta disponibilidad, selecciona tu horario y confirma. La agenda se conecta con ATHENAS para respetar cupos, conflictos y reglas del centro.
            </p>
          </div>
        </div>
      </section>

      <BookingClient />
    </main>
  );
}
