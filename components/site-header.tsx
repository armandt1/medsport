"use client";

import { CalendarDays, ClipboardCheck, HeartPulse, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const nav = [
  ["Método", "/#metodo"],
  ["Servicios", "/#servicios"],
  ["Especialidades", "/#especialidades"],
  ["Planes", "/planes"],
  ["Team", "/#team"],
  ["FAQ", "/#faq"]
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-5">
      <div className="mx-auto flex max-w-[1480px] items-center justify-between rounded-full border border-white/15 bg-med-ink/80 px-4 py-3 text-white shadow-xl backdrop-blur-xl md:px-6">
        <a
          href="/"
          className="flex shrink-0 items-center"
          aria-label="Medsport inicio"
        >
          <Image
            src="/images/logo-medsport-white.png"
            alt="Medsport Rehabilitación y Entrenamiento"
            width={2172}
            height={724}
            priority
            sizes="(max-width: 768px) 145px, 190px"
            className="h-auto w-[145px] object-contain md:w-[190px]"
          />
        </a>

        <nav className="hidden items-center gap-8 text-sm text-white/70 lg:flex">
          {nav.map(([label, href]) => <a key={href} className="transition hover:text-white" href={href}>{label}</a>)}
        </nav>

        <a
          className="hidden items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-xs font-bold text-white/90 transition hover:border-med-aqua/50 hover:bg-white/5 hover:text-white lg:inline-flex"
          href="/#especialidades"
        >
          <CalendarDays className="h-4 w-4 text-med-aqua" /> Agenda
        </a>

        <button className="grid h-9 w-9 place-items-center lg:hidden" onClick={() => setOpen(!open)} aria-label="Abrir menú">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-[1480px] rounded-[1.5rem] bg-med-ink p-6 text-white shadow-2xl lg:hidden">
          <nav className="flex flex-col gap-1">
            {nav.map(([label, href]) => (
              <a key={href} className="rounded-xl px-3 py-3 text-lg" href={href} onClick={() => setOpen(false)}>{label}</a>
            ))}
            <div className="mt-4 border-t border-white/10 pt-4">
              <p className="px-3 pb-2 text-[10px] font-bold uppercase tracking-[.16em] text-white/35">Acciones rápidas</p>
              <a className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition hover:bg-white/5" href="https://agendapro.com/mp/cl/pl/centro-medsport/233580" target="_blank" rel="noreferrer"><HeartPulse className="h-4 w-4 text-med-aqua" /> Agendar Kinesiología</a>
              <a className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition hover:bg-white/5" href="https://wa.me/56936217808?text=Hola%20Medsport%2C%20quiero%20registrarme%20para%20una%20evaluaci%C3%B3n%20en%20el%20gimnasio." target="_blank" rel="noreferrer"><ClipboardCheck className="h-4 w-4 text-med-aqua" /> Evaluación gimnasio</a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
