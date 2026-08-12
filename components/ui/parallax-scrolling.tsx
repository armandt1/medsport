"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { ArrowDownRight, ClipboardCheck, HeartPulse } from "lucide-react";
import { site } from "@/lib/site";


export function ParallaxComponent() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let dispose: (() => void) | undefined;
    let cancelled = false;
    let started = false;

    const init = async () => {
      if (started) return;
      started = true;

      const scope = parallaxRef.current;
      const triggerElement = scope?.querySelector<HTMLElement>("[data-parallax-layers]");
      if (!triggerElement || cancelled) return;

      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger")
      ]);
      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerElement,
            start: "top top",
            end: "bottom top",
            scrub: 0.8
          }
        });

        [
          { layer: "1", yPercent: 18 },
          { layer: "2", yPercent: 34 },
          { layer: "3", yPercent: 10 },
          { layer: "4", yPercent: 46 }
        ].forEach(({ layer, yPercent }, index) => {
          tl.to(
            triggerElement.querySelectorAll(`[data-parallax-layer="${layer}"]`),
            { yPercent, ease: "none" },
            index === 0 ? undefined : "<"
          );
        });

        const heroImage = triggerElement.querySelector<HTMLElement>("[data-hero-image]");
        if (heroImage) {
          gsap.fromTo(
            heroImage,
            { scale: 1.085, yPercent: -1.5 },
            {
              scale: 1.025,
              yPercent: 3.5,
              ease: "none",
              scrollTrigger: {
                trigger: triggerElement,
                start: "top top",
                end: "bottom top",
                scrub: 1.15
              }
            }
          );
        }
      }, scope);

      ScrollTrigger.refresh();
      dispose = () => ctx.revert();
    };

    const startOnScroll = () => void init();
    window.addEventListener("scroll", startOnScroll, { passive: true, once: true });

    return () => {
      cancelled = true;
      window.removeEventListener("scroll", startOnScroll);
      dispose?.();
    };
  }, []);

  return (
    <div ref={parallaxRef} className="parallax-wrap">
      <section className="parallax-stage" data-parallax-layers aria-labelledby="medsport-hero-title">
        <div className="absolute inset-0 bg-med-ink" />
        <div data-parallax-layer="2" className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(47,107,255,.24),transparent_28%),radial-gradient(circle_at_56%_72%,rgba(53,212,230,.12),transparent_25%)]" />
        <div className="absolute inset-0 opacity-[.055] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:72px_72px]" />

        <div data-parallax-layer="4" className="absolute -left-28 top-[30%] h-72 w-72 rounded-full border border-med-aqua/20" />
        <div data-parallax-layer="4" className="absolute left-[35%] top-[62%] h-40 w-40 rounded-full bg-med-blue/25 blur-3xl" />

        <div data-parallax-layer="3" className="section-shell relative z-10 flex min-h-[100svh] flex-col pb-10 pt-28 md:pb-14 md:pt-32">
          <div className="flex items-center justify-between border-b border-white/15 pb-5 text-[11px] font-semibold uppercase tracking-[.18em] text-white/60 sm:text-xs">
            <span>Temuco · Chile</span>
            <span className="hidden sm:inline">Kinesiología + Entrenamiento deportivo</span>
          </div>

          <div className="grid flex-1 items-center gap-8 py-8 lg:grid-cols-[1.04fr_.96fr] lg:gap-12 lg:py-10">
            <div className="order-2 lg:order-1">
              <p className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[.2em] text-med-aqua sm:text-sm">
                <span className="h-2 w-2 rounded-full bg-med-aqua" /> Movimiento con propósito
              </p>
              <h1 id="medsport-hero-title" className="max-w-4xl font-display text-[clamp(2.8rem,6vw,6.4rem)] font-semibold leading-[.9] tracking-[-.065em] text-white">
                TU OBJETIVO MERECE
                <br />
                <span className="text-med-aqua">MÁS QUE UNA RUTINA.</span>
              </h1>
              <p className="mt-7 max-w-3xl font-display text-lg font-semibold leading-snug tracking-[-.02em] text-white sm:text-xl md:text-2xl">
                Merece evaluación. Estrategia. Seguimiento.
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/60 md:text-base md:leading-7">
                Kinesiología, rehabilitación deportiva y entrenamiento personalizado en Temuco para transformar un objetivo en un proceso medible y acompañado.
              </p>
              <div className="mt-7 flex flex-col gap-2 sm:flex-row">
                <a href={site.agenda} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-med-blue px-5 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:shadow-blue">
                  <HeartPulse className="h-4 w-4" /> Agendar Kinesiología
                </a>
                <a href="/#planes" className="inline-flex items-center justify-center gap-2 rounded-full bg-med-aqua px-5 py-3.5 text-sm font-bold text-med-ink transition hover:-translate-y-0.5">
                  <ClipboardCheck className="h-4 w-4" /> Ver planes de entrenamiento
                </a>
              </div>
            </div>

            <div data-parallax-layer="1" className="order-1 lg:order-2 lg:justify-self-end">
              <div className="group relative mx-auto aspect-[4/5] w-full max-w-[640px] overflow-hidden rounded-[1.8rem] border border-white/15 bg-white/5 shadow-[0_36px_120px_rgba(0,0,0,.34)] sm:aspect-[16/10] lg:aspect-[4/5] lg:max-h-[72svh]">
                <Image
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=88"
                  alt="Entrenamiento deportivo y preparación física en un gimnasio"
                  fill
                  priority
                  sizes="(max-width: 1023px) calc(100vw - 2rem), 46vw"
                  data-hero-image
                  className="object-cover object-center will-change-transform transition-[filter] duration-700 group-hover:brightness-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-med-ink/80 via-transparent to-med-ink/10" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[.18em] text-med-aqua">Medsport · Temuco</span>
                    <p className="mt-1 max-w-sm font-display text-xl font-semibold leading-tight text-white sm:text-2xl">Entrena con una estrategia construida para ti.</p>
                  </div>
                  <span className="hidden h-11 w-11 shrink-0 place-items-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur sm:grid">
                    <ArrowDownRight className="h-5 w-5" />
                  </span>
                </div>
                <div className="absolute right-5 top-5 rounded-full border border-white/20 bg-med-ink/35 px-3 py-2 text-[10px] font-bold uppercase tracking-[.14em] text-white backdrop-blur-md">
                  Evaluar · Planificar · Avanzar
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-white/15 pt-5 text-[11px] font-semibold uppercase tracking-[.16em] text-white/45 sm:text-xs">
            <span>Av. Alemania · Temuco</span>
            <a href="#metodo" aria-label="Ir al método Medsport" className="group inline-flex items-center gap-2 text-white/70 transition hover:text-med-aqua">
              Conocer el método <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
