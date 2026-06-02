"use client";
import { useTypewriter } from "@/hooks/useTypewriter";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { displayed, done } = useTypewriter("un sistema propio.", 60, 700);
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax: glow sube más lento que el scroll
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  // Contenido baja levemente al scrollear
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section ref={ref} className="relative px-5 md:px-8 pt-20 md:pt-24 pb-16 md:pb-20 max-w-[960px] mx-auto overflow-hidden">

      {/* Glow con parallax */}
      <motion.div
        style={{ y: glowY }}
        className="pointer-events-none absolute top-10 -left-20 w-[600px] h-[400px] bg-[#5b8bff]/[0.05] blur-[140px] rounded-full"
      />
      <motion.div
        style={{ y: glowY }}
        className="pointer-events-none absolute top-40 right-0 w-[300px] h-[300px] bg-[#a78bfa]/[0.03] blur-[100px] rounded-full"
      />

      {/* Contenido con leve parallax */}
      <motion.div style={{ y: contentY, opacity }}>
        <div className="font-mono text-[0.65rem] md:text-[0.68rem] text-[#5b8bff] tracking-[0.14em] uppercase mb-8 flex items-center gap-3">
          <span className="dot-live" />
          Desarrollo de software · San Francisco, Córdoba · Argentina
        </div>

        <h1 className="text-[clamp(2.6rem,8vw,5.6rem)] font-extrabold leading-[0.96] tracking-[-0.045em] mb-8">
          <span className="text-[#eaeaf0]">Tu negocio merece</span>
          <br />
          <span className="text-[#5b8bff]">{displayed}</span>
          {!done && <span className="cursor-blink" />}
        </h1>

        <div className="flex gap-5 items-start mb-10 max-w-[560px]">
          <div className="w-px bg-[#a78bfa]/40 self-stretch mt-1 shrink-0" />
          <p className="font-mono text-[0.78rem] md:text-[0.82rem] text-[#8888a0] leading-[1.85]">
            Desarrollamos software a medida para PyMEs y negocios de servicios argentinos.
            Código propio, comunicación directa y sistemas que realmente se usan.
          </p>
        </div>

        <div className="flex gap-3 flex-wrap">
          <button
            onClick={() => scrollTo("contacto")}
            className="inline-flex items-center gap-2 px-5 md:px-6 py-3 rounded-[3px] bg-[#5b8bff] text-white font-extrabold text-[0.72rem] md:text-[0.75rem] tracking-[0.08em] uppercase hover:bg-[#4a7aee] hover:-translate-y-px transition-all cursor-pointer"
          >
            Contanos tu proyecto →
          </button>
          <button
            onClick={() => scrollTo("proyectos")}
            className="inline-flex items-center gap-2 px-5 md:px-6 py-3 rounded-[3px] bg-transparent text-[#55556a] border border-white/[0.11] font-bold text-[0.72rem] md:text-[0.75rem] tracking-[0.08em] uppercase hover:text-[#eaeaf0] hover:border-white/25 transition-all cursor-pointer"
          >
            Ver proyectos reales
          </button>
        </div>
      </motion.div>
    </section>
  );
}
