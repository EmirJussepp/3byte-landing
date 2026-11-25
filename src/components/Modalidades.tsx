"use client";
import { useRef } from "react";
import FadeIn from "./FadeIn";

const modalidades = [
  {
    n: "01",
    type: "Servicio por suscripción",
    title: "Software estándar",
    desc: "Soluciones listas para implementar y utilizar, con funcionalidades previamente establecidas para necesidades habituales de gestión y operación.",
    items: [
      "Acceso mensual al sistema.",
      "Actualizaciones y mejoras generales.",
      "Atención y asistencia de uso.",
    ],
    violet: false,
  },
  {
    n: "02",
    type: "Soluciones personalizadas",
    title: "Desarrollo específico",
    desc: "Adaptamos nuestras herramientas a los procesos particulares de tu negocio cuando el software estándar no alcanza a cubrirlos.",
    items: [
      "Análisis de necesidades y procesos.",
      "Adaptación de funcionalidades.",
      "Seguimiento durante la implementación.",
    ],
    violet: false,
  },
  {
    n: "03",
    type: "Proyectos exclusivos",
    title: "Desarrollo a medida",
    desc: "Desarrollos concebidos desde cero para proyectos con estructuras, funcionalidades y objetivos completamente específicos.",
    items: [
      "Evaluación previa de la propuesta.",
      "Análisis de alcance y viabilidad.",
      "Definición individual de ejecución.",
    ],
    violet: true,
  },
];

function ModalidadCard({
  m,
  className,
}: {
  m: (typeof modalidades)[0];
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mx", `${e.clientX - r.left}px`);
    ref.current.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  const color = m.violet ? "#a78bfa" : "#5b8bff";
  const rgb = m.violet ? "167,139,250" : "91,139,255";

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      className={`group relative overflow-hidden bg-[#0e0e18] border-r border-b border-white/[0.1] p-7 flex flex-col ${className ?? ""}`}
      style={{ "--mx": "50%", "--my": "50%" } as React.CSSProperties}
    >
      {/* Spotlight hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(300px circle at var(--mx) var(--my), rgba(${rgb},0.07), transparent 70%)`,
        }}
      />

      {/* Número decorativo */}
      <div className="absolute bottom-4 right-5 font-mono font-black text-[6rem] text-white/[0.025] leading-none select-none pointer-events-none">
        {m.n}
      </div>

      {/* Eyebrow */}
      <div
        className="font-mono text-[0.52rem] tracking-[0.16em] uppercase mb-6 shrink-0"
        style={{ color: `${color}99` }}
      >
        {m.n} / modalidad
      </div>

      {/* Título */}
      <div className="text-[1.25rem] md:text-[1.4rem] font-extrabold tracking-[-0.03em] text-[#d0d0e2] leading-tight mb-3 group-hover:text-white transition-colors duration-200">
        {m.title}
      </div>

      {/* Tipo */}
      <div
        className="inline-flex self-start items-center font-mono text-[0.5rem] tracking-[0.14em] uppercase px-2 py-1 border mb-6 shrink-0"
        style={{
          color,
          borderColor: `${color}30`,
          backgroundColor: `${color}08`,
        }}
      >
        {m.type}
      </div>

      {/* Descripción */}
      <p className="font-mono text-[0.71rem] text-[#5a5a70] leading-[1.85] group-hover:text-[#7a7a90] transition-colors duration-300 mb-6">
        {m.desc}
      </p>

      {/* Lista */}
      <ul className="mt-auto flex flex-col gap-2.5">
        {m.items.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-2.5 font-mono text-[0.65rem] text-[#44445a] leading-[1.6] group-hover:text-[#5a5a70] transition-colors duration-300"
          >
            <span
              className="mt-[4px] shrink-0 w-[5px] h-[5px] border"
              style={{ borderColor: `${color}55` }}
            />
            {item}
          </li>
        ))}
      </ul>

      {/* Línea de acento en hover */}
      <div
        className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full transition-all duration-500 ease-out"
        style={{ background: `linear-gradient(to right, ${color}70, transparent)` }}
      />
    </div>
  );
}

export default function Modalidades() {
  return (
    <section
      id="modalidades"
      className="px-5 md:px-8 py-8 md:py-14 max-w-[1040px] mx-auto mb-8 md:mb-20"
    >
      <FadeIn direction="left">
        <div className="inline-flex items-center font-mono text-[0.6rem] text-[#5b8bff] tracking-[0.18em] uppercase mb-5 px-3 py-1 border border-[#5b8bff]/25 bg-[#5b8bff]/[0.06]">
          modalidades
        </div>
        <h2 className="text-[clamp(2.8rem,7vw,5.5rem)] font-extrabold tracking-[-0.05em] mb-4 leading-[0.94]">
          Tres formas de{" "}
          <span className="bg-gradient-to-r from-[#c8daf8] to-[#5b8bff] bg-clip-text text-transparent">
            trabajar juntos.
          </span>
        </h2>
        <p className="font-mono text-[0.85rem] md:text-[0.9rem] text-[#8888a0] mb-14 md:mb-16 max-w-[520px] leading-[1.9]">
          Según el alcance y los objetivos de tu proyecto, trabajamos de tres
          maneras distintas. Cada modalidad tiene su propia estructura,
          tiempos y formas de contratación.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 border-l border-t border-white/[0.1]">
        {modalidades.map((m, i) => (
          <FadeIn key={i} delay={i * 0.08}>
            <ModalidadCard m={m} className="h-full min-h-[360px]" />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
