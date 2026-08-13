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
      if (!scope || cancelled) return;

      const triggerElement = scope.querySelector<HTMLElement>("[data-parallax-layers]");
      if (!triggerElement) return;

      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger")
      ]);
      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);
      const ctx = gsap.context(() => {
        const heroImage = triggerElement.querySelector<HTMLElement>("[data-hero-image]");

        if (heroImage) {
          gsap.fromTo(
            heroImage,
            { scale: 1.055, yPercent: -1.5 },
            {
              scale: 1.015,
              yPercent: 3.2,
              ease: "none",
              scrollTrigger: {
                trigger: triggerElement,
                start: "top top",
                end: "bottom top",
                scrub: 1.1
              }
            }
          );
        }

        const heroCopy = triggerElement.querySelector<HTMLElement>("[data-hero-copy]");
        if (heroCopy) {
          gsap.to(heroCopy, {
            yPercent: 8,
            opacity: 0.86,
            ease: "none",
            scrollTrigger: {
              trigger: triggerElement,
              start: "top top",
              end: "bottom top",
              scrub: 1.25
            }
          });
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
        {/* Hero photography: local, production-optimized asset. */}
        <Image
          src="/images/hero-medsport-temuco.webp"
          alt="Interior del gimnasio Medsport en Temuco con equipamiento de entrenamiento y personas realizando actividad física"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          data-hero-image
          className="object-cover object-center will-change-transform"
        />

        {/* Capa oscura editorial: contraste consistente sin ocultar el espacio ni la profundidad del gimnasio. */}
        <div className="absolute inset-0 bg-black/20 sm:bg-black/30 lg:bg-black/40" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,13,19,.72)_0%,rgba(5,13,19,.58)_52%,rgba(5,13,19,.30)_100%)] sm:bg-[linear-gradient(90deg,rgba(5,13,19,.82)_0%,rgba(5,13,19,.68)_52%,rgba(5,13,19,.38)_100%)] lg:bg-[linear-gradient(90deg,rgba(5,13,19,.95)_0%,rgba(5,13,19,.86)_31%,rgba(5,13,19,.60)_56%,rgba(5,13,19,.34)_78%,rgba(5,13,19,.28)_100%)]"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_35%,transparent_0%,rgba(0,0,0,.04)_52%,rgba(0,0,0,.18)_100%)] lg:bg-[radial-gradient(circle_at_76%_35%,transparent_0%,rgba(0,0,0,.10)_48%,rgba(0,0,0,.36)_100%)]" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-med-ink/35 via-transparent to-black/10 sm:from-med-ink/45 sm:to-black/15 lg:from-med-ink/65 lg:to-black/25" aria-hidden="true" />

        <div className="section-shell relative z-10 flex min-h-[100svh] flex-col pb-10 pt-28 md:pb-14 md:pt-32">
          <div className="flex flex-1 items-center py-14 sm:py-16 lg:py-20">
            <div data-hero-copy className="max-w-[760px] lg:max-w-[820px]">
              <h1
                id="medsport-hero-title"
                className="max-w-4xl font-display text-[clamp(2.8rem,6vw,6.4rem)] font-semibold leading-[.9] tracking-[-.065em] text-white [text-wrap:balance]"
              >
                TU OBJETIVO MERECE
                <br />
                <span className="text-med-aqua">MÁS QUE UNA RUTINA.</span>
              </h1>

              <p className="mt-7 max-w-3xl font-display text-lg font-semibold leading-snug tracking-[-.02em] text-white sm:text-xl md:text-2xl">
                Merece evaluación. Estrategia. Seguimiento.
              </p>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70 md:text-base md:leading-7">
                Kinesiología, rehabilitación deportiva y entrenamiento personalizado en Temuco para transformar un objetivo en un proceso medible y acompañado.
              </p>

              <div className="mt-7 flex flex-col gap-2 sm:flex-row">
                <a
                  href={site.agenda}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-med-blue px-5 py-3.5 text-sm font-bold text-white shadow-[0_14px_45px_rgba(47,107,255,.22)] transition hover:-translate-y-0.5 hover:shadow-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-med-aqua"
                >
                  <HeartPulse className="h-4 w-4" /> Agendar Kinesiología
                </a>
                <a
                  href="/#planes"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3.5 text-sm font-bold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:border-med-aqua/40 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-med-aqua"
                >
                  <ClipboardCheck className="h-4 w-4" /> Ver planes de entrenamiento
                </a>
              </div>

              <div className="mt-8 hidden items-center gap-3 text-[10px] font-bold uppercase tracking-[.16em] text-white/45 sm:flex">
                <span className="h-px w-8 bg-white/25" /> Evaluar · Planificar · Avanzar
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-white/15 pt-5 text-[11px] font-semibold uppercase tracking-[.16em] text-white/45 sm:text-xs">
            <span>Av. Alemania · Temuco</span>
            <a
              href="#metodo"
              aria-label="Ir al método Medsport"
              className="group inline-flex items-center gap-2 text-white/70 transition hover:text-med-aqua"
            >
              Conocer el método
              <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
