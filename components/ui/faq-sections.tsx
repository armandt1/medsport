"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import React from "react";

const faqs = [
  {
    question: "¿Necesito experiencia previa para comenzar?",
    answer: "No. El punto de partida es tu evaluación. Desde ahí se define una progresión acorde a tu condición, objetivos, antecedentes y experiencia previa."
  },
  {
    question: "¿Cómo funciona el entrenamiento personalizado?",
    answer: "El trabajo se adapta a tus objetivos y nivel actual. La planificación se ajusta según tu respuesta, técnica, cargas y evolución, con acompañamiento profesional durante el proceso."
  },
  {
    question: "¿Qué aborda el servicio de kinesiología?",
    answer: "La kinesiología está orientada a recuperar movimiento, función y capacidad física, integrando evaluación, tratamiento y progresión hacia las actividades que necesitas realizar."
  },
  {
    question: "¿Medsport atiende con bono FONASA?",
    answer: "Sí. En Medsport la atención kinésica se realiza con bono FONASA. Al momento de agendar puedes consultar los requisitos y la modalidad correspondiente a tu atención."
  },
  {
    question: "¿Las atenciones kinésicas son reembolsables por Isapre o seguros complementarios?",
    answer: "Sí. Las atenciones kinésicas pueden ser reembolsables por Isapres según las condiciones de tu plan y por seguros complementarios siempre que exista una derivación médica. El porcentaje de cobertura y los documentos exigidos dependen de cada Isapre o seguro."
  },
  {
    question: "¿Cómo se conecta la rehabilitación con el entrenamiento deportivo?",
    answer: "Cuando el proceso lo requiere, la rehabilitación kinesiológica puede progresar hacia tareas físicas y deportivas cada vez más exigentes. El objetivo es evitar un salto brusco entre terminar una rehabilitación y volver a entrenar."
  },
  {
    question: "¿Puedo entrenar si estoy volviendo después de una lesión?",
    answer: "Sí, cuando corresponde según tu evaluación y etapa de recuperación. Kinesiología, readaptación y entrenamiento pueden conectarse para construir una progresión acorde a tu actividad."
  },
  {
    question: "¿Cómo puedo agendar una hora?",
    answer: "Los botones Agendar hora y Abrir agenda llevan a la agenda online de Medsport en AgendaPro, donde puedes revisar las opciones disponibles desde celular, tablet o computador."
  },
  {
    question: "¿Dónde está Centro Medsport en Temuco?",
    answer: "Centro Medsport está en Av. Alemania 0425, local 205, Paseo Los Suizos, Temuco, La Araucanía."
  }
];

export default function FaqSections() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section id="faq" className="section-shell py-24 md:py-32">
      <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
        <div className="relative min-h-[440px] overflow-hidden rounded-[2rem] bg-med-ink">
          <Image
            className="object-cover object-[center_40%] scale-[1.03] grayscale saturate-0 contrast-125 brightness-[0.72]"
            src="/images/antes-de-empezar-medsport.webp"
            alt="Deportista entrenando levantamiento con barra en Centro Medsport"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
          <div className="absolute inset-0 bg-black/[0.28]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/10 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-8 p-7 md:bottom-12 md:p-10">
            
            <h2 className="mt-3 max-w-md font-display text-3xl font-semibold tracking-tight text-white drop-shadow-[0_3px_22px_rgba(0,0,0,0.72)] md:text-5xl">
              Entrena y recupérate con una ruta clara.
            </h2>
          </div>
        </div>

        <div className="self-center">
          
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-5xl">Lo importante, sin vueltas.</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-500">
            Respuestas rápidas para entender los servicios y dar el primer paso en Medsport.
          </p>

          <div className="mt-8 border-t border-neutral-200">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <button
                  type="button"
                  className="block w-full border-b border-neutral-200 py-5 text-left"
                  key={faq.question}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center justify-between gap-5">
                    <span className="font-display text-base font-semibold md:text-lg">{faq.question}</span>
                    <ChevronDown className={cn("h-5 w-5 shrink-0 transition-transform duration-500", isOpen && "rotate-180")} />
                  </span>
                  <span
                    className={cn(
                      "grid text-sm leading-6 text-neutral-500 transition-all duration-500",
                      isOpen ? "grid-rows-[1fr] pt-4 opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <span className="overflow-hidden">{faq.answer}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
