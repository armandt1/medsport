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

const services = [
  { value: "evaluacion-inicial", label: "Evaluación inicial" },
  { value: "kinesiologia", label: "Kinesiología" },
  { value: "entrenamiento", label: "Entrenamiento personalizado" },
  { value: "rehabilitacion", label: "Rehabilitación deportiva" },
];

const athenasBookingUrl =
  process.env.NEXT_PUBLIC_ATHENAS_BOOKING_URL ||
  "https://athenas.vt1performance.cl/react-app.php?page=booking";

export function BookingClient() {
  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);
  const [service, setService] = useState(services[0].value);
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
        body: JSON.stringify({ service, date }),
      });
      const data = (await response.json()) as AvailabilityResponse;
      if (!response.ok || !data.ok) throw new Error(data.message || "No fue posible consultar la agenda.");
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
      setError("Selecciona primero una hora disponible.");
      return;
    }
    const form = new FormData(event.currentTarget);
    if (form.get("website")) return;
    setBooking(true);
    setError("");
    try {
      const payload = {
        service,
        date,
        slot: selected.id,
        name: String(form.get("name") || "").trim(),
        email: String(form.get("email") || "").trim(),
        phone: String(form.get("phone") || "").trim(),
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
      setError(e instanceof Error ? e.message : "No fue posible confirmar la reserva.");
    } finally {
      setBooking(false);
    }
  }

  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:px-10 lg:py-16">
      <aside className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 lg:p-8">
        <span className="text-xs font-semibold uppercase tracking-[0.24em] text-lime-400">Cómo funciona</span>
        <h2 className="mt-4 text-2xl font-semibold">Reserva sin duplicar agendas.</h2>
        <div className="mt-7 space-y-6 text-sm leading-6 text-white/68">
          <div><strong className="block text-white">1. Consulta</strong>Selecciona servicio y fecha para revisar bloques realmente disponibles.</div>
          <div><strong className="block text-white">2. Elige</strong>Escoge una hora antes de ingresar tus datos de contacto.</div>
          <div><strong className="block text-white">3. Confirma</strong>La reserva se muestra como confirmada solo cuando ATHENAS bloquea el horario.</div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6">
          <p className="text-sm text-white/55">¿Ya eres deportista Medsport y tienes acceso a ATHENAS?</p>
          <a
            href={athenasBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex rounded-full border border-lime-400/50 px-4 py-2 text-sm font-semibold text-lime-300 transition hover:bg-lime-400/10"
          >
            Abrir mis reservas en ATHENAS
          </a>
        </div>
      </aside>

      <div className="rounded-3xl border border-white/10 bg-[#0d100d] p-6 shadow-2xl shadow-black/20 lg:p-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="text-sm text-white/70">
            Servicio
            <select
              value={service}
              onChange={(e) => { setService(e.target.value); setSlots([]); setSelected(null); }}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-lime-400/60"
            >
              {services.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
            </select>
          </label>
          <label className="text-sm text-white/70">
            Fecha
            <input
              type="date"
              min={today}
              value={date}
              onChange={(e) => { setDate(e.target.value); setSlots([]); setSelected(null); }}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-lime-400/60"
            />
          </label>
        </div>

        <button
          type="button"
          onClick={checkAvailability}
          disabled={loading || !date}
          className="mt-5 w-full rounded-2xl bg-lime-400 px-5 py-3.5 font-semibold text-black transition hover:bg-lime-300 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Consultando ATHENAS…" : "Ver horas disponibles"}
        </button>

        {slots.length > 0 && (
          <div className="mt-7">
            <p className="mb-3 text-sm font-medium text-white">Horas disponibles</p>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {slots.map((slot) => {
                const active = selected?.id === slot.id;
                return (
                  <button
                    key={slot.id}
                    type="button"
                    onClick={() => setSelected(slot)}
                    className={`rounded-2xl border p-4 text-left transition ${active ? "border-lime-400 bg-lime-400/10" : "border-white/10 bg-white/[0.025] hover:border-white/25"}`}
                  >
                    <strong className="text-lg">{slot.time}</strong>
                    {slot.professional && <span className="mt-1 block text-xs text-white/55">{slot.professional}</span>}
                    {slot.remaining != null && <span className="mt-2 block text-xs text-lime-300">{slot.remaining} cupo{slot.remaining === 1 ? "" : "s"}</span>}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {!loading && slots.length === 0 && !error && (
          <p className="mt-5 text-sm text-white/45">Selecciona una fecha y consulta la disponibilidad.</p>
        )}

        {error && (
          <div className="mt-6 rounded-2xl border border-amber-300/20 bg-amber-300/5 p-4 text-sm text-amber-100">
            {error}
          </div>
        )}

        {success ? (
          <div className="mt-7 rounded-2xl border border-lime-400/30 bg-lime-400/10 p-5">
            <strong className="text-lg text-lime-300">Hora confirmada</strong>
            <p className="mt-2 text-sm text-white/75">
              {success.startsAt || selected?.startsAt || `${date} · ${selected?.time || ""}`}
            </p>
            {success.professional && <p className="mt-1 text-sm text-white/60">{success.professional}</p>}
            {success.reference && <p className="mt-3 text-xs text-white/45">Código: {success.reference}</p>}
          </div>
        ) : selected ? (
          <form onSubmit={submitBooking} className="mt-8 border-t border-white/10 pt-7">
            <div className="mb-5">
              <span className="text-xs uppercase tracking-[0.2em] text-white/45">Horario elegido</span>
              <strong className="mt-1 block text-xl">{date} · {selected.time}</strong>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <input name="name" required autoComplete="name" placeholder="Nombre completo" className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-lime-400/60" />
              <input name="phone" required autoComplete="tel" placeholder="Teléfono" className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-lime-400/60" />
              <input name="email" required type="email" autoComplete="email" placeholder="Correo" className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-lime-400/60 sm:col-span-2" />
              <textarea name="notes" rows={3} maxLength={400} placeholder="Comentario opcional" className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-lime-400/60 sm:col-span-2" />
              <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
            </div>
            <label className="mt-5 flex gap-3 text-xs leading-5 text-white/55">
              <input name="consent" type="checkbox" required className="mt-1" />
              <span>Autorizo el uso de estos datos únicamente para gestionar esta reserva y su coordinación.</span>
            </label>
            <button type="submit" disabled={booking} className="mt-6 w-full rounded-2xl bg-lime-400 px-5 py-3.5 font-semibold text-black transition hover:bg-lime-300 disabled:opacity-50">
              {booking ? "Confirmando y bloqueando horario…" : "Confirmar reserva"}
            </button>
          </form>
        ) : null}
      </div>
    </section>
  );
}
