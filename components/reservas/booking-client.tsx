"use client";

import { FormEvent, useMemo, useState } from "react";

type Slot = {
  id: string;
  time: string;
  professional?: string;
  location?: string;
  remaining?: number;
  startsAt?: string;
};

type AvailabilityResponse = {
  ok: boolean;
  slots: Slot[];
  message?: string;
};

type BookingResponse = {
  ok: boolean;
  confirmed?: boolean;
  reference?: string;
  startsAt?: string;
  professional?: string;
  message?: string;
};

const athenasBookingUrl =
  process.env.NEXT_PUBLIC_ATHENAS_BOOKING_URL ||
  "https://athenas.vt1performance.cl/react-app.php?page=booking";

export function BookingClient() {
  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);
  const [date, setDate] = useState(today);
  const [slots, setSlots] = useState<Slot[]>([]);
  const [selected, setSelected] = useState<Slot | null>(null);
  const [loading, setLoading] = useState(false);
  const [booking, setBooking] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState<BookingResponse | null>(null);

  async function checkAvailability() {
    setLoading(true);
    setError("");
    setSuccess(null);
    setSelected(null);
    try {
      const response = await fetch("/api/athenas/availability", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ date }),
      });
      const data = (await response.json()) as AvailabilityResponse;
      if (!response.ok || !data.ok) {
        throw new Error(data.message || "No fue posible consultar la agenda de evaluaciones.");
      }
      setSlots(Array.isArray(data.slots) ? data.slots : []);
    } catch (e) {
      setSlots([]);
      setError(e instanceof Error ? e.message : "No fue posible consultar ATHENAS.");
    } finally {
      setLoading(false);
    }
  }

  async function submitBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!selected) {
      setError("Selecciona primero una hora disponible para tu evaluación.");
      return;
    }

    const form = new FormData(event.currentTarget);
    if (form.get("website")) return;

    setBooking(true);
    setError("");
    try {
      const payload = {
        date,
        slot: selected.id,
        name: String(form.get("name") || "").trim(),
        email: String(form.get("email") || "").trim(),
        phone: String(form.get("phone") || "").trim(),
        objective: String(form.get("objective") || "").trim(),
        notes: String(form.get("notes") || "").trim(),
        consent: form.get("consent") === "on",
      };

      const response = await fetch("/api/athenas/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as BookingResponse;
      if (!response.ok || !data.ok || data.confirmed !== true) {
        throw new Error(data.message || "ATHENAS no confirmó el bloqueo del horario.");
      }
      setSuccess(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : "No fue posible confirmar la evaluación.");
    } finally {
      setBooking(false);
    }
  }

  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:px-10 lg:py-16">
      <aside className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 lg:p-8">
        
        <h2 className="mt-4 text-2xl font-semibold">Todo comienza con una evaluación.</h2>
        <p className="mt-4 text-sm leading-6 text-white/60">
          Antes de entrenar, el equipo Medsport evalúa cualidades físicas y habilidades para detectar déficits de fuerza,
          desbalances y otros hallazgos relevantes. Con esa información se define una ruta personalizada.
        </p>

        <div className="mt-7 space-y-6 text-sm leading-6 text-white/68">
          <div>
            <strong className="block text-white">1. Elige la fecha</strong>
            Consulta únicamente horarios disponibles para evaluación.
          </div>
          <div>
            <strong className="block text-white">2. Selecciona una hora</strong>
            La disponibilidad proviene de la agenda real de ATHENAS.
          </div>
          <div>
            <strong className="block text-white">3. Confirma</strong>
            Tu evaluación queda confirmada solo cuando ATHENAS bloquea el horario.
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6">
          <p className="text-sm text-white/55">¿Ya eres deportista Medsport y tienes acceso a ATHENAS?</p>
          <a
            href={athenasBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex rounded-full border border-lime-400/50 px-4 py-2 text-sm font-semibold text-lime-300 transition hover:bg-lime-400/10"
          >
            Gestionar mis reservas en ATHENAS
          </a>
        </div>
      </aside>

      <div className="rounded-3xl border border-white/10 bg-[#0d100d] p-6 shadow-2xl shadow-black/20 lg:p-8">
        <div>
          
          <h2 className="mt-2 text-2xl font-semibold">Reserva tu evaluación</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-white/55">
            Selecciona una fecha para consultar los horarios disponibles del equipo.
          </p>
        </div>

        <label className="mt-7 block text-sm text-white/70">
          Fecha de evaluación
          <input
            type="date"
            min={today}
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
              setSlots([]);
              setSelected(null);
              setSuccess(null);
            }}
            className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-lime-400/60"
          />
        </label>

        <button
          type="button"
          onClick={checkAvailability}
          disabled={loading || !date}
          className="mt-5 w-full rounded-2xl bg-lime-400 px-5 py-3.5 font-semibold text-black transition hover:bg-lime-300 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Consultando ATHENAS…" : "Ver horas para evaluación"}
        </button>

        {slots.length > 0 && (
          <div className="mt-7">
            <p className="mb-3 text-sm font-medium text-white">Horas disponibles para evaluación</p>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {slots.map((slot) => {
                const active = selected?.id === slot.id;
                return (
                  <button
                    key={slot.id}
                    type="button"
                    onClick={() => setSelected(slot)}
                    className={`rounded-2xl border p-4 text-left transition ${
                      active
                        ? "border-lime-400 bg-lime-400/10"
                        : "border-white/10 bg-white/[0.025] hover:border-white/25"
                    }`}
                  >
                    <strong className="text-lg">{slot.time}</strong>
                    {slot.professional && (
                      <span className="mt-1 block text-xs text-white/55">{slot.professional}</span>
                    )}
                    {slot.location && <span className="mt-1 block text-xs text-white/40">{slot.location}</span>}
                    {slot.remaining != null && (
                      <span className="mt-2 block text-xs text-lime-300">
                        {slot.remaining} cupo{slot.remaining === 1 ? "" : "s"}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {!loading && slots.length === 0 && !error && (
          <p className="mt-5 text-sm text-white/60">Selecciona una fecha y consulta la disponibilidad.</p>
        )}

        {error && (
          <div className="mt-6 rounded-2xl border border-amber-300/20 bg-amber-300/5 p-4 text-sm text-amber-100">
            {error}
          </div>
        )}

        {success ? (
          <div className="mt-7 rounded-2xl border border-lime-400/30 bg-lime-400/10 p-5">
            <strong className="text-lg text-lime-300">Evaluación confirmada</strong>
            <p className="mt-2 text-sm text-white/75">
              {success.startsAt || selected?.startsAt || `${date} · ${selected?.time || ""}`}
            </p>
            {success.professional && <p className="mt-1 text-sm text-white/60">{success.professional}</p>}
            {success.reference && <p className="mt-3 text-xs text-white/60">Código: {success.reference}</p>}
          </div>
        ) : selected ? (
          <form onSubmit={submitBooking} className="mt-8 border-t border-white/10 pt-7">
            <div className="mb-5">
              
              <strong className="mt-1 block text-xl">
                {date} · {selected.time}
              </strong>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <input
                name="name"
                required
                autoComplete="name"
                placeholder="Nombre completo"
                className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-lime-400/60"
              />
              <input
                name="phone"
                required
                autoComplete="tel"
                placeholder="Teléfono"
                className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-lime-400/60"
              />
              <input
                name="email"
                required
                type="email"
                autoComplete="email"
                placeholder="Correo"
                className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-lime-400/60 sm:col-span-2"
              />
              <select
                name="objective"
                required
                defaultValue=""
                className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-lime-400/60 sm:col-span-2"
              >
                <option value="" disabled>Objetivo principal</option>
                <option value="iniciar-entrenamiento">Iniciar un plan de entrenamiento</option>
                <option value="rendimiento-deportivo">Mejorar rendimiento deportivo</option>
                <option value="retorno-deportivo">Volver al entrenamiento o deporte</option>
                <option value="dolor-lesion">Evaluar una molestia o antecedente de lesión</option>
                <option value="otro">Otro objetivo</option>
              </select>
              <textarea
                name="notes"
                rows={3}
                maxLength={400}
                placeholder="Comentario opcional. No ingreses información clínica sensible."
                className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-lime-400/60 sm:col-span-2"
              />
              <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
            </div>

            <label className="mt-5 flex gap-3 text-xs leading-5 text-white/55">
              <input name="consent" type="checkbox" required className="mt-1" />
              <span>Autorizo el uso de estos datos únicamente para gestionar mi evaluación y su coordinación.</span>
            </label>

            <button
              type="submit"
              disabled={booking}
              className="mt-6 w-full rounded-2xl bg-lime-400 px-5 py-3.5 font-semibold text-black transition hover:bg-lime-300 disabled:opacity-50"
            >
              {booking ? "Confirmando evaluación…" : "Confirmar evaluación"}
            </button>
          </form>
        ) : null}
      </div>
    </section>
  );
}
