"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { ClipboardCheck, HeartPulse } from "lucide-react";
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

      const triggerElement =
        scope.querySelector<HTMLElement>("[data-parallax-layers]");

      if (!triggerElement) return;

      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        const heroImage =
          triggerElement.querySelector<HTMLElement>("[data-hero-image]");

        const heroCopy =
          triggerElement.querySelector<HTMLElement>("[data-hero-copy]");

        if (heroImage) {
          gsap.fromTo(
            heroImage,
            {
              scale: 1.055,
              yPercent: -1.5,
            },
            {
              scale: 1.015,
              yPercent: 3.2,
              ease: "none",
              scrollTrigger: {
                trigger: triggerElement,
                start: "top top",
                end: "bottom top",
                scrub: 1.1,
              },
            }
          );
        }

        if (heroCopy) {
          gsap.to(heroCopy, {
            yPercent: 7,
            opacity: 0.88,
            ease: "none",
            scrollTrigger: {
              trigger: triggerElement,
              start: "top top",
              end: "bottom top",
              scrub: 1.25,
            },
          });
        }
      }, scope);

      ScrollTrigger.refresh();

      dispose = () => ctx.revert();
    };

    const startOnScroll = () => void init();

    window.addEventListener("scroll", startOnScroll, {
      passive: true,
      once: true,
    });

    return () => {
      cancelled = true;
      window.removeEventListener("scroll", startOnScroll);
      dispose?.();
    };
  }, []);

  return (
    <div ref={parallaxRef} className="parallax-wrap">
      <section
        className="parallax-stage"
        data-parallax-layers
        aria-labelledby="medsport-hero-title"
      >
        <Image
          src="/images/hero-medsport-temuco.webp"
          alt="Interior del gimnasio Medsport en Temuco con equipamiento para entrenamiento deportivo"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          data-hero-image
          className="object-cover object-center will-change-transform"
        />

        {/* Tratamiento fotográfico premium */}
        <div
          className="absolute inset-0 bg-[#1b2025]/30"
          aria-hidden="true"
        />

        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,14,20,.98)_0%,rgba(7,14,20,.94)_27%,rgba(7,14,20,.76)_48%,rgba(7,14,20,.34)_72%,rgba(7,14,20,.18)_100%)] max-lg:bg-[linear-gradient(90deg,rgba(7,14,20,.96)_0%,rgba(7,14,20,.82)_56%,rgba(7,14,20,.45)_100%)]"
          aria-hidden="true"
        />

        <div
          className="absolute inset-0 bg-gradient-to-t from-med-ink/60 via-transparent to-med-ink/25"
          aria-hidden="true"
        />

        <div className="section-shell relative z-10 flex min-h-[100svh] items-center pb-12 pt-28 md:pb-16 md:pt-32">
          <div
            data-hero-copy
            className="max-w-[760px] lg:max-w-[820px]"
          >
            <h1
              id="medsport-hero-title"
              className="max-w-4xl font-display text-[clamp(2.8rem,6vw,6.4rem)] font-semibold leading-[.9] tracking-[-.065em] text-white [text-wrap:balance]"
            >
              TU OBJETIVO MERECE
              <br />
              <span className="text-med-aqua">
                MÁS QUE UNA RUTINA.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl font-display text-lg font-semibold leading-snug tracking-[-.02em] text-white sm:text-xl md:text-2xl">
              Merece evaluación. Estrategia. Seguimiento.
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/70 md:text-base md:leading-7">
              Kinesiología, rehabilitación deportiva y entrenamiento
              personalizado en Temuco para transformar un objetivo en un
              proceso medible y acompañado.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.agenda}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-med-blue px-5 py-3.5 text-sm font-bold text-white shadow-[0_14px_45px_rgba(47,107,255,.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-med-aqua"
              >
                <HeartPulse className="h-4 w-4" />
                Agendar Kinesiología
              </a>

              <a
                href="/#planes"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3.5 text-sm font-bold text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-med-aqua/40 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-med-aqua"
              >
                <ClipboardCheck className="h-4 w-4" />
                Ver planes de entrenamiento
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
