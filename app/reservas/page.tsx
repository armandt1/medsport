import type { Metadata } from "next";
import { BookingClient } from "@/components/reservas/booking-client";

export const metadata: Metadata = {
  title: "Reservar evaluación | Medsport Temuco",
  description:
    "Reserva tu evaluación inicial en Medsport Temuco. Consulta disponibilidad real y confirma tu horario conectado con ATHENAS.",
  robots: { index: true, follow: true },
};

export default function ReservasPage() {
  return (
    <main className="min-h-screen bg-[#080a08] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_16%,rgba(132,204,22,0.16),transparent_30%),linear-gradient(180deg,#0d100d_0%,#080a08_100%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="max-w-3xl">
            
            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Tu entrenamiento comienza entendiendo cómo estás hoy.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
              Reserva tu evaluación inicial. El equipo Medsport analiza cualidades físicas y habilidades para identificar
              hallazgos relevantes y definir una planificación personalizada antes de avanzar al entrenamiento.
            </p>
          </div>
        </div>
      </section>

      <BookingClient />
    </main>
  );
}
