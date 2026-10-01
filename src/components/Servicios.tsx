"use client";
import { useRef } from "react";
import FadeIn from "./FadeIn";

const GridIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square">
    <rect x="2" y="2" width="8" height="8"/><rect x="12" y="2" width="8" height="8"/>
    <rect x="2" y="12" width="8" height="8"/><rect x="12" y="12" width="8" height="8"/>
  </svg>
);
const LayersIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square">
    <polygon points="11,2 20,7 11,12 2,7"/>
    <polyline points="2,12 11,17 20,12"/>
    <polyline points="2,17 11,22 20,17"/>
  </svg>
);
const PenIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square">
    <path d="M14 2L20 8L8 20H2V14L14 2Z"/><line x1="11" y1="5" x2="17" y2="11"/>
  </svg>
);
const CodeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square">
    <polyline points="7,5 2,11 7,17"/><polyline points="15,5 20,11 15,17"/>
    <line x1="13" y1="3" x2="9" y2="19"/>
  </svg>
);
const CpuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square">
    <rect x="6" y="6" width="10" height="10"/>
    <line x1="9" y1="2" x2="9" y2="6"/><line x1="13" y1="2" x2="13" y2="6"/>
    <line x1="9" y1="16" x2="9" y2="20"/><line x1="13" y1="16" x2="13" y2="20"/>
    <line x1="2" y1="9" x2="6" y2="9"/><line x1="2" y1="13" x2="6" y2="13"/>
    <line x1="16" y1="9" x2="20" y2="9"/><line x1="16" y1="13" x2="20" y2="13"/>
  </svg>
);

const servicios = [
  {
    n: "01",
    title: "Sistemas de gestión a medida",
    desc: "ERP, caja, socios, stock, reportes. Un sistema que se adapta a tu negocio y no al revés.",
    span: "md:col-span-2",
    icon: <GridIcon />,
  },
  {
    n: "02",
    title: "Productos SaaS propios",
    desc: "Plataformas multi-cliente listas para escalar, con acceso diferenciado por rol y administración centralizada.",
    span: "md:col-span-1",
    icon: <LayersIcon />,
  },
  {
    n: "03",
    title: "Branding",
    desc: "Identidad visual para tu sistema o producto: logotipo, paleta de colores y aplicación consistente en cada pantalla.",
    span: "md:col-span-1",
    icon: <PenIcon />,
  },
  {
    n: "04",
    title: "Desarrollo web",
    desc: "Sitios y aplicaciones web rápidos, responsivos y optimizados para buscadores.",
    span: "md:col-span-2",
    icon: <CodeIcon />,
  },
  {
    n: "05",
    title: "Servicio técnico de PCs",
    desc: "Reparación, diagnóstico y mantenimiento completo: limpieza física, testeo de componentes y optimización de rendimiento.",
    span: "md:col-span-3",
    icon: <CpuIcon />,
  },
];

function BentoCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mx", `${e.clientX - r.left}px`);
    ref.current.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      className={`group relative overflow-hidden bg-[#0d0d11] border-r border-b border-white/[0.055] p-7 flex flex-col gap-5 min-h-[180px] ${className ?? ""}`}
      style={{ "--mx": "50%", "--my": "50%" } as React.CSSProperties}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(280px circle at var(--mx) var(--my), rgba(91,139,255,0.08), transparent 70%)",
        }}
      />
      {children}
    </div>
  );
}

export default function Servicios() {
  return (
    <section className="px-5 md:px-8 py-8 md:py-14 max-w-[1040px] mx-auto mb-12 md:mb-36">
      <FadeIn direction="left">
        <div className="inline-flex items-center font-mono text-[0.6rem] text-[#5b8bff] tracking-[0.18em] uppercase mb-5 px-3 py-1 rounded-none border border-[#5b8bff]/25 bg-[#5b8bff]/[0.06]">
          servicios
        </div>
        <h2 className="text-[2.4rem] md:text-[3rem] font-extrabold tracking-[-0.035em] mb-14 md:mb-16 leading-[1.05]">
          ¿Qué hacemos?
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 border-l border-t border-white/[0.055]">
        {servicios.map((s, i) => (
          <FadeIn key={i} delay={i * 0.07} className={s.span}>
            <BentoCard className="h-full">
              <div className="flex items-start justify-between">
                <div className="text-[#5b8bff] opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  {s.icon}
                </div>
                <span className="font-mono text-[0.55rem] text-[#2e2e3a] tracking-[0.1em]">{s.n}</span>
              </div>
              <div className="mt-auto">
                <div className="text-[0.9rem] font-bold text-[#eaeaf0] mb-2 leading-snug">{s.title}</div>
                <p className="font-mono text-[0.72rem] text-[#8888a0] leading-[1.75]">{s.desc}</p>
              </div>
            </BentoCard>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
