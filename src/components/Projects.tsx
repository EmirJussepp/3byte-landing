"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";
import ProjectModal from "./ProjectModal";

type Project = {
  num: string;
  cat: string;
  name: string;
  desc: string;
  logo: string | null;
  blend?: boolean;
  initials?: string;
  href: string | null;
  flyers: string[];
  status: string;
};

const projects: Project[] = [
  {
    num: "01",
    cat: "Sistema a medida",
    name: "Elite Car-Shop",
    desc: "Gestión completa para autodetailing: ventas, compras, caja, stock, clientes, proveedores y cuenta corriente. Integración con Tienda Nube mediante webhooks bidireccionales.",
    logo: "https://elitecarshopsf.duckdns.org/assets/logoelite-W4eZvBtv.jpg",
    href: null,
    flyers: [],
    status: "Activo",
  },
  {
    num: "02",
    cat: "Sistema a medida",
    name: "Defyne Center",
    desc: "App de rutinas para gimnasio con modo TV en vivo: la profesora arma la clase desde el celular y se reproduce en la Smart TV con cronómetro automático.",
    logo: "/defyne-logo.jpeg",
    href: null,
    flyers: [],
    status: "Activo",
  },
  {
    num: "03",
    cat: "Sistema a medida",
    name: "Peña Boquense SF",
    desc: "Sistema para asociación deportiva: socios, cuotas, movimientos de caja y reportes. La comisión directiva administra todo sin depender de terceros.",
    logo: "https://pboquensesf.duckdns.org/assets/logo_pe%C3%B1a-BetDt1YW.png",
    href: null,
    flyers: ["/projects/pena-flyer-1.jpg", "/projects/pena-flyer-2.jpg"],
    status: "Activo",
  },
  {
    num: "04",
    cat: "Producto SaaS propio",
    name: "SportByte",
    desc: "Plataforma de reservas para clubes deportivos. Turnos, confirmaciones por WhatsApp, caja del día y estadísticas. Multi-admin, activación en menos de un día.",
    logo: "https://www.sportbyte.com.ar/logosolosportbyte.png",
    href: "https://www.sportbyte.com.ar",
    flyers: [],
    status: "Activo",
  },
  {
    num: "05",
    cat: "Producto SaaS propio",
    name: "FitByte",
    desc: "Sistema de gestión para centros fitness y gimnasios: socios, cuotas, accesos y estadísticas. Pensado para crecer con cada cliente.",
    logo: "/fitbyte-logo.webp",
    blend: true,
    href: null,
    flyers: [],
    status: "En desarrollo",
  },
  {
    num: "06",
    cat: "Sistema a medida",
    name: "SRO",
    desc: "Sistema de gestión integral con stack de diseño moderno: flujos internos, paneles de control y administración de operaciones desde una sola plataforma.",
    logo: "/sro-logo.png",
    blend: false,
    href: null,
    flyers: [],
    status: "Activo",
  },
  {
    num: "07",
    cat: "Branding",
    name: "LOGOS",
    desc: "Diseño de identidad visual para clientes de distintos rubros: logotipos, paletas de color, tipografías y aplicación en materiales digitales e impresos.",
    logo: "/logos-logo.webp",
    blend: true,
    href: null,
    flyers: [],
    status: "Activo",
  },
];

function LogoBox({ p }: { p: Project }) {
  if (p.logo) {
    return (
      <div className="w-12 h-12 border border-white/[0.1] group-hover:border-[#5b8bff]/40 transition-colors duration-400 flex items-center justify-center overflow-hidden p-1.5 bg-white/[0.03]">
        <Image
          src={p.logo}
          alt={p.name}
          width={48}
          height={48}
          className="object-contain w-full h-full"
          unoptimized
          style={p.blend ? { mixBlendMode: "lighten" } : undefined}
        />
      </div>
    );
  }
  return (
    <div className="w-12 h-12 border border-[#5b8bff]/20 group-hover:border-[#5b8bff]/50 bg-[#5b8bff]/[0.05] flex items-center justify-center transition-colors duration-400">
      <span className="font-mono text-[0.55rem] font-bold text-[#5b8bff]/70 tracking-[0.06em]">{p.initials}</span>
    </div>
  );
}

function ProjectCard({ p, index }: { p: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mx", `${e.clientX - r.left}px`);
    ref.current.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        className="group relative overflow-hidden bg-[#0e0e18] border-r border-b border-white/[0.1] p-6 flex flex-col min-h-[220px]"
        style={{ "--mx": "50%", "--my": "50%" } as React.CSSProperties}
      >
        {/* Spotlight */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: "radial-gradient(260px circle at var(--mx) var(--my), rgba(91,139,255,0.07), transparent 70%)" }}
        />

        {/* Número fantasma */}
        <div className="absolute bottom-3 right-4 font-mono font-black text-[5rem] text-white/[0.025] leading-none select-none pointer-events-none">
          {p.num}
        </div>

        {/* Header: logo + badge */}
        <div className="flex items-start justify-between mb-5">
          <LogoBox p={p} />
          <span className={`font-mono text-[0.48rem] font-bold border px-2 py-1 ${
            p.status === "Activo"
              ? "text-[#5b8bff] border-[#5b8bff]/20 bg-[#5b8bff]/[0.05]"
              : "text-[#a78bfa] border-[#a78bfa]/20 bg-[#a78bfa]/[0.05]"
          }`}>
            {p.status}
          </span>
        </div>

        {/* Category */}
        <div className="font-mono text-[0.5rem] text-[#5b8bff]/55 tracking-[0.16em] uppercase mb-2">
          {p.cat}
        </div>

        {/* Name */}
        <h3 className="text-[1.1rem] font-extrabold tracking-[-0.03em] text-[#d0d0e2] leading-tight mb-3 group-hover:text-white transition-colors duration-200">
          {p.name}
        </h3>

        {/* Description */}
        <p className="font-mono text-[0.65rem] text-[#4a4a60] leading-[1.9] group-hover:text-[#6a6a80] transition-colors duration-300 mt-auto">
          {p.desc}
        </p>

        {/* Links */}
        {(p.href || p.flyers.length > 0) && (
          <div className="flex gap-4 mt-4">
            {p.href && (
              <a href={p.href} target="_blank" rel="noopener noreferrer"
                className="font-mono text-[0.58rem] font-bold text-[#5b8bff] hover:text-[#7aa3ff] transition-colors">
                Ver sitio ↗
              </a>
            )}
          </div>
        )}

        {/* Hover line */}
        <div className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full bg-gradient-to-r from-[#5b8bff]/60 to-transparent transition-all duration-500 ease-out" />
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState<{ images: string[]; title: string } | null>(null);

  return (
    <>
      <section id="proyectos" className="px-5 md:px-8 py-8 md:py-14 max-w-[1040px] mx-auto mb-8 md:mb-20">
        <FadeIn direction="left">
          <div className="inline-flex items-center font-mono text-[0.6rem] text-[#5b8bff] tracking-[0.18em] uppercase mb-5 px-3 py-1 border border-[#5b8bff]/25 bg-[#5b8bff]/[0.06]">
            proyectos
          </div>
          <h2 className="text-[clamp(2.8rem,7vw,5.5rem)] font-extrabold tracking-[-0.05em] mb-4 leading-[0.94]">
            Algunos de{" "}
            <span className="bg-gradient-to-r from-[#c8daf8] to-[#5b8bff] bg-clip-text text-transparent">
              nuestros proyectos
            </span>
          </h2>
          <p className="font-mono text-[0.85rem] md:text-[0.9rem] text-[#8888a0] mb-10 max-w-[520px] leading-[1.9]">
            Sistemas que construimos y hoy están en uso real, en distintos rubros y modalidades.
          </p>
        </FadeIn>

        <AnimatePresence mode="wait">
          {!open ? (
            /* ── CARPETA INTERACTIVA ── */
            <motion.div
              key="folder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.85, transition: { duration: 0.3 } }}
              className="flex flex-col items-center py-10 md:py-16"
            >
              <button
                onClick={() => setOpen(true)}
                className="group relative flex flex-col items-center gap-6 focus:outline-none"
                aria-label="Ver todos los proyectos"
              >
                {/* Glow ambiental */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] pointer-events-none">
                  <motion.div
                    className="w-full h-full rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(91,139,255,0.18) 0%, rgba(167,139,250,0.08) 50%, transparent 70%)" }}
                    animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.15, 1] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>

                {/* Carpeta */}
                <motion.div
                  animate={{ y: [0, -14, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.96 }}
                  className="relative z-10"
                >
                  <Image
                    src="/portfolio-folder.jpg"
                    alt="Ver proyectos"
                    width={260}
                    height={260}
                    className="w-[180px] h-[180px] md:w-[240px] md:h-[240px] object-contain"
                    unoptimized
                    style={{ mixBlendMode: "lighten" }}
                  />
                </motion.div>

                {/* Label */}
                <div className="relative z-10 flex flex-col items-center gap-2">
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-6 h-[1px] bg-[#5b8bff]"
                  />
                  <span className="font-mono text-[0.65rem] text-[#5b8bff]/70 tracking-[0.22em] uppercase group-hover:text-[#5b8bff] transition-colors duration-300">
                    ver proyectos
                  </span>
                </div>
              </button>
            </motion.div>
          ) : (
            /* ── GRID DE PROYECTOS ── */
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-t border-white/[0.1]">
                {projects.map((p, i) => (
                  <ProjectCard key={p.num} p={p} index={i} />
                ))}
              </div>

              {/* Volver */}
              <button
                onClick={() => setOpen(false)}
                className="mt-8 flex items-center gap-3 font-mono text-[0.65rem] text-[#44445a] hover:text-[#8888a0] transition-colors duration-250"
              >
                <span className="text-[#5b8bff]/50">←</span>
                cerrar
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {modal && (
        <ProjectModal images={modal.images} title={modal.title} onClose={() => setModal(null)} />
      )}
    </>
  );
}
