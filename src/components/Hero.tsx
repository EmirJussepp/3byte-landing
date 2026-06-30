"use client";
import { useTypewriter } from "@/hooks/useTypewriter";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  const { displayed, done } = useTypewriter("un sistema propio.", 60, 700);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative px-5 md:px-8 pt-20 md:pt-24 pb-20 md:pb-24 max-w-[1140px] mx-auto">
      <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-10 items-center">

        {/* Columna de texto */}
        <div>
          <div className="font-mono text-[0.65rem] md:text-[0.68rem] text-[#5b8bff] tracking-[0.14em] uppercase mb-8 flex items-center gap-3">
            <span className="dot-live" />
            Desarrollo de software · San Francisco, Córdoba · Argentina
          </div>

          <h1 className="text-[clamp(2.4rem,6vw,4.4rem)] font-extrabold leading-[1.02] tracking-[-0.045em] mb-8">
            <span className="block text-[#eaeaf0]">Tu negocio merece</span>
            <span className="relative block">
              <span className="invisible block" aria-hidden="true">un sistema propio.</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#c8daf8] to-[#5b8bff] bg-clip-text text-transparent">
                {displayed}
                {!done && <span className="cursor-blink" />}
              </span>
            </span>
          </h1>

          <div className="flex gap-5 items-start mb-10 max-w-[520px]">
            <div className="w-px bg-white/[0.10] self-stretch mt-1 shrink-0" />
            <p className="font-mono text-[0.78rem] md:text-[0.82rem] text-[#8888a0] leading-[1.85]">
              Desarrollamos software a medida para PyMEs y negocios de servicios argentinos.
              Código propio, comunicación directa y sistemas que realmente se usan.
            </p>
          </div>

          <div className="flex gap-3 flex-wrap">
            <button
              onClick={() => scrollTo("contacto")}
              className="inline-flex items-center gap-2 px-6 md:px-7 py-3.5 rounded-none bg-[#5b8bff] text-white font-extrabold text-[0.72rem] md:text-[0.75rem] tracking-[0.08em] uppercase hover:bg-[#4a7aee] hover:-translate-y-px transition-all cursor-pointer"
            >
              Contanos tu proyecto →
            </button>
            <button
              onClick={() => scrollTo("proyectos")}
              className="inline-flex items-center gap-2 px-6 md:px-7 py-3.5 rounded-none bg-transparent text-[#55556a] border border-white/[0.11] font-bold text-[0.72rem] md:text-[0.75rem] tracking-[0.08em] uppercase hover:text-[#eaeaf0] hover:border-white/25 transition-all cursor-pointer"
            >
              Ver proyectos reales
            </button>
          </div>
        </div>

        {/* Columna del visual */}
        <div className="mt-6 lg:mt-0">
          <HeroVisual />
        </div>

      </div>
    </section>
  );
}
