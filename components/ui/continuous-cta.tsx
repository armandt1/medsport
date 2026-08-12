"use client";

import { CalendarDays, ChevronUp, ClipboardCheck, HeartPulse, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const KINE_URL = "https://agendapro.com/mp/cl/pl/centro-medsport/233580";
const GYM_EVALUATION_URL = "https://wa.me/56936217808?text=Hola%20Medsport%2C%20quiero%20registrarme%20para%20una%20evaluaci%C3%B3n%20en%20el%20gimnasio.";

export function ContinuousCta() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const onPointerDown = (event: PointerEvent) => {
      if (open && panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <div ref={panelRef} className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2 md:bottom-6 md:right-6">
      {open && (
        <div className="w-[min(90vw,310px)] rounded-[1.35rem] border border-med-ink/10 bg-white/95 p-2 shadow-[0_18px_60px_rgba(8,21,33,.16)] backdrop-blur-xl">
          <div className="flex items-center justify-between px-3 pb-2 pt-2">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.16em] text-med-blue">Medsport</p>
              <p className="mt-0.5 text-xs font-semibold text-med-ink">¿Qué quieres hacer?</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="grid h-8 w-8 place-items-center rounded-full text-med-ink/45 transition hover:bg-med-ice hover:text-med-ink"
              aria-label="Cerrar acciones rápidas"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <a
            href={KINE_URL}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-med-sky"
            onClick={() => setOpen(false)}
          >
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-med-blue text-white">
              <HeartPulse className="h-4 w-4" />
            </span>
            <span className="min-w-0">
              <strong className="block text-sm text-med-ink">Kinesiología</strong>
              <small className="mt-0.5 block text-[11px] text-neutral-500">Agendar una hora online</small>
            </span>
          </a>

          <a
            href={GYM_EVALUATION_URL}
            target="_blank"
            rel="noreferrer"
            className="group mt-1 flex items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-med-sky"
            onClick={() => setOpen(false)}
          >
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-med-aqua text-med-ink">
              <ClipboardCheck className="h-4 w-4" />
            </span>
            <span className="min-w-0">
              <strong className="block text-sm text-med-ink">Evaluación en gimnasio</strong>
              <small className="mt-0.5 block text-[11px] text-neutral-500">Solicitar registro por WhatsApp</small>
            </span>
          </a>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label="Abrir opciones de agenda"
        className="group inline-flex h-12 items-center gap-2 rounded-full border border-white/20 bg-med-ink/[.92] px-3.5 text-xs font-bold text-white shadow-[0_10px_30px_rgba(8,21,33,.18)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-med-ink sm:px-4"
      >
        <CalendarDays className="h-4 w-4 text-med-aqua" />
        <span className="hidden sm:inline">Agendar</span>
        <ChevronUp className={`hidden h-3.5 w-3.5 text-white/55 transition-transform sm:block ${open ? "rotate-180" : ""}`} />
      </button>
    </div>
  );
}
