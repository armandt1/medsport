"use client";

import { BriefcaseMedical, Dumbbell, X } from "lucide-react";
import React, { useEffect, useState } from "react";

export type Professional = {
  id: number;
  name: string;
  role: string;
  specialty: string;
  focus: string;
  initials: string;
  certifications: string[];
};

const professionals: Professional[] = [
  {
    id: 1,
    name: "Profesional 01",
    role: "Kinesiólogo/a",
    specialty: "Rehabilitación deportiva",
    focus: "Evaluación funcional, recuperación de movimiento y retorno progresivo a la actividad.",
    initials: "P1",
    certifications: [
      "Título profesional y registro · completar con información real",
      "Diplomado / postítulo en rehabilitación · completar",
      "Certificación clínica o deportiva · completar"
    ]
  },
  {
    id: 2,
    name: "Profesional 02",
    role: "Entrenador/a",
    specialty: "Entrenamiento deportivo",
    focus: "Fuerza, acondicionamiento y planificación orientada al objetivo deportivo.",
    initials: "P2",
    certifications: [
      "Título profesional · completar con información real",
      "Certificación en entrenamiento de fuerza · completar",
      "Especialización deportiva · completar"
    ]
  },
  {
    id: 3,
    name: "Profesional 03",
    role: "Kinesiólogo/a",
    specialty: "Kinesiología musculoesquelética",
    focus: "Trabajo progresivo de movilidad, fuerza, control y tolerancia a la carga.",
    initials: "P3",
    certifications: [
      "Título profesional y registro · completar con información real",
      "Formación musculoesquelética · completar",
      "Cursos de actualización profesional · completar"
    ]
  },
  {
    id: 4,
    name: "Profesional 04",
    role: "Preparador/a físico/a",
    specialty: "Rendimiento y fuerza",
    focus: "Desarrollo de capacidades físicas con seguimiento de carga y progresión.",
    initials: "P4",
    certifications: [
      "Título profesional · completar con información real",
      "Certificación de preparación física · completar",
      "Formación en evaluación de rendimiento · completar"
    ]
  },
  {
    id: 5,
    name: "Profesional 05",
    role: "Profesional del movimiento",
    specialty: "Readaptación deportiva",
    focus: "Puente entre rehabilitación y entrenamiento para volver a una práctica física exigente.",
    initials: "P5",
    certifications: [
      "Título profesional · completar con información real",
      "Certificación en readaptación · completar",
      "Formación complementaria · completar"
    ]
  }
];

export default function ProfessionalTeam() {
  const [selected, setSelected] = useState<Professional | null>(null);

  useEffect(() => {
    if (!selected) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected]);

  return (
    <section id="team" data-nosnippet className="bg-med-ink py-24 text-white md:py-32">
      <div className="section-shell">
        <div>
          <h2 className="max-w-4xl font-display text-4xl font-semibold tracking-[-.05em] md:text-6xl">
            Profesionales conectados por un mismo objetivo: tu evolución.
          </h2>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {professionals.map((professional, index) => (
            <button
              key={professional.id}
              type="button"
              onClick={() => setSelected(professional)}
              className="professional-card group text-left"
              aria-label={`Ver perfil de ${professional.name}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.45rem] bg-[linear-gradient(145deg,#143149,#0b1b29)]">
                <div className="absolute -right-10 -top-8 h-36 w-36 rounded-full border-[22px] border-med-aqua/10 transition-transform duration-500 group-hover:scale-125" />
                <div className="absolute bottom-[-15%] left-[10%] h-48 w-48 rounded-full bg-med-blue/30 blur-3xl transition duration-500 group-hover:bg-med-aqua/25" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-6xl font-semibold tracking-[-.08em] text-white/90">{professional.initials}</span>
                </div>
                <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-med-ink/50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.14em] text-white/75 backdrop-blur">
                  Perfil demostrativo
                </span>
              </div>
              <div className="px-1 pb-2 pt-5">
                <span className="text-xs font-bold uppercase tracking-[.14em] text-med-aqua">{professional.role}</span>
                <h3 className="mt-2 font-display text-xl font-semibold">{professional.name}</h3>
                <p className="mt-2 text-sm leading-5 text-white/50">{professional.specialty}</p>
                <span className="mt-5 inline-flex text-xs font-bold text-white/80 transition group-hover:text-med-aqua">
                  Ver certificaciones
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-[#02070c]/75 p-3 backdrop-blur-md sm:items-center sm:p-6"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelected(null);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="professional-modal-title"
            className="max-h-[92svh] w-full max-w-2xl overflow-y-auto rounded-[2rem] bg-white p-5 text-med-ink shadow-2xl sm:p-8"
          >
            <div className="flex items-start justify-between gap-5">
              <div className="flex items-center gap-4">
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-med-ink font-display text-xl font-bold text-med-aqua">
                  {selected.initials}
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-[.14em] text-med-blue">{selected.role}</span>
                  <h3 id="professional-modal-title" className="mt-1 font-display text-2xl font-semibold sm:text-3xl">{selected.name}</h3>
                  <p className="mt-1 text-sm text-neutral-500">{selected.specialty}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-med-ice transition hover:bg-med-sky"
                aria-label="Cerrar perfil"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-8 rounded-2xl bg-med-ice p-5 sm:p-6">
              <div className="flex items-center gap-2 text-sm font-bold"><BriefcaseMedical className="h-4 w-4 text-med-blue" /> Enfoque profesional</div>
              <p className="mt-3 text-sm leading-6 text-neutral-600">{selected.focus}</p>
            </div>

            <div className="mt-8">
              <h4 className="font-display text-xl font-semibold">Formación y certificaciones</h4>
              <div className="mt-4 grid gap-3">
                {selected.certifications.map((certification) => (
                  <div key={certification} className="rounded-2xl border border-neutral-200 p-4 text-sm leading-6 text-neutral-600">
                    <span>{certification}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 border-t border-neutral-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-md text-xs leading-5 text-neutral-500">Reemplaza estos campos por el nombre, profesión, registro y certificaciones oficiales antes de publicar.</p>
              <a
                href="https://agendapro.com/mp/cl/pl/centro-medsport/233580"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-med-blue px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:shadow-blue"
              >
                Agendar hora <Dumbbell className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
