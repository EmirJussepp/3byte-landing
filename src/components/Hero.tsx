"use client";
import { useTypewriter } from "@/hooks/useTypewriter";

export default function Hero() {
  const { displayed, done } = useTypewriter("que funciona.", 65, 700);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative px-8 pt-24 pb-20 max-w-[960px] mx-auto">

      {/* Glow de fondo sutil */}
      <div className="pointer-events-none absolute top-20 left-0 w-[500px] h-[300px] bg-[#5b8bff]/[0.04] blur-[120px] rounded-full" />

      <div className="font-mono text-[0.68rem] text-[#5b8bff] tracking-[0.14em] uppercase mb-8 flex items-center gap-3">
        <span className="dot-live" />
        Grupo de desarrollo · San Francisco, Córdoba · Argentina
      </div>

      <h1 className="text-[clamp(3rem,8vw,5.6rem)] font-extrabold leading-[0.96] tracking-[-0.045em] mb-8">
        <span className="text-[#eaeaf0]">Construimos</span>
        <br />
        <span className="text-[#2e2e3a]">software</span>
        <br />
        <span className="text-[#5b8bff]">{displayed}</span>
        {!done && <span className="cursor-blink" />}
      </h1>

      {/* Separador con descripción */}
      <div className="flex gap-6 items-start mb-10 max-w-[640px]">
        <div className="w-px bg-[#a78bfa]/40 self-stretch mt-1 shrink-0" />
        <p className="font-mono text-[0.82rem] text-[#8888a0] leading-[1.85]">
          Somos un grupo. Hacemos sistemas de gestión a medida, productos SaaS e
          integraciones reales. Cada proyecto que arranca, lo terminamos y lo
          ponemos en producción. Sin intermediarios, sin agencias, sin
          promesas vacías.
        </p>
      </div>

      <div className="flex gap-3 flex-wrap">
        <button
          onClick={() => scrollTo("proyectos")}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-[3px] bg-[#5b8bff] text-white font-extrabold text-[0.75rem] tracking-[0.08em] uppercase hover:bg-[#4a7aee] hover:-translate-y-px transition-all cursor-pointer"
        >
          Ver proyectos →
        </button>
        <button
          onClick={() => scrollTo("contacto")}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-[3px] bg-transparent text-[#55556a] border border-white/[0.11] font-bold text-[0.75rem] tracking-[0.08em] uppercase hover:text-[#eaeaf0] hover:border-white/25 transition-all cursor-pointer"
        >
          Hablar del proyecto
        </button>
      </div>
    </section>
  );
}
