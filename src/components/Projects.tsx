"use client";
import { useState } from "react";
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
    logo: null,
    initials: "FB",
    href: null,
    flyers: [],
    status: "En desarrollo",
  },
  {
    num: "06",
    cat: "Sistema a medida",
    name: "SRO",
    desc: "Sistema de gestión integral con stack de diseño moderno: flujos internos, paneles de control y administración de operaciones desde una sola plataforma.",
    logo: null,
    initials: "SRO",
    href: null,
    flyers: [],
    status: "Activo",
  },
  {
    num: "07",
    cat: "Branding",
    name: "LOGOS",
    desc: "Diseño de identidad visual para clientes de distintos rubros: logotipos, paletas de color, tipografías y aplicación en materiales digitales e impresos.",
    logo: null,
    initials: "LG",
    href: null,
    flyers: [],
    status: "Activo",
  },
];

const INITIAL_COUNT = 4;

function LogoBox({ p }: { p: Project }) {
  if (p.logo) {
    return (
      <div className="w-11 h-11 border border-white/[0.08] group-hover:border-[#5b8bff]/30 transition-colors duration-400 flex items-center justify-center overflow-hidden p-1.5 shrink-0 bg-white/[0.02]">
        <Image
          src={p.logo}
          alt={p.name}
          width={44}
          height={44}
          className="object-contain w-full h-full"
          unoptimized
        />
      </div>
    );
  }
  return (
    <div className="w-11 h-11 border border-[#5b8bff]/20 group-hover:border-[#5b8bff]/40 bg-[#5b8bff]/[0.05] flex items-center justify-center shrink-0 transition-colors duration-400">
      <span className="font-mono text-[0.52rem] font-bold text-[#5b8bff]/70 tracking-[0.08em]">
        {p.initials}
      </span>
    </div>
  );
}

function ProjectRow({ p }: { p: Project }) {
  return (
    <div className="group relative flex flex-col md:flex-row md:items-center gap-6 py-9 border-b border-white/[0.07] overflow-hidden">
      {/* Número decorativo */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 font-mono font-black text-[7rem] text-white/[0.022] leading-none select-none pointer-events-none">
        {p.num}
      </div>

      {/* Número + logo */}
      <div className="flex items-center gap-4 md:w-[140px] shrink-0">
        <span className="font-mono text-[0.5rem] text-[#2e2e3a] tracking-[0.14em] w-5 shrink-0">
          {p.num}
        </span>
        <LogoBox p={p} />
      </div>

      {/* Nombre + descripción */}
      <div className="flex-1 min-w-0">
        <div className="font-mono text-[0.52rem] text-[#5b8bff]/60 tracking-[0.16em] uppercase mb-2">
          {p.cat}
        </div>
        <h3 className="text-[1.6rem] md:text-[1.9rem] font-extrabold tracking-[-0.04em] text-[#eaeaf0] leading-none mb-3 group-hover:text-white transition-colors">
          {p.name}
        </h3>
        <p className="font-mono text-[0.72rem] text-[#55556a] leading-[1.9] max-w-[500px]">
          {p.desc}
        </p>
      </div>

      {/* Badge + links */}
      <div className="flex md:flex-col items-start md:items-end gap-3 shrink-0 md:w-[130px]">
        <span
          className={`font-mono text-[0.52rem] font-bold border px-2 py-1 shrink-0 ${
            p.status === "Activo"
              ? "text-[#5b8bff] border-[#5b8bff]/20 bg-[#5b8bff]/[0.05]"
              : "text-[#a78bfa] border-[#a78bfa]/20 bg-[#a78bfa]/[0.05]"
          }`}
        >
          {p.status}
        </span>
        <div className="flex items-center gap-4 md:flex-col md:items-end md:gap-2">
          {p.flyers.length > 0 && (
            <button className="font-mono text-[0.6rem] font-bold text-[#44445a] hover:text-[#eaeaf0] transition-colors cursor-pointer whitespace-nowrap">
              Ver flyers ↗
            </button>
          )}
          {p.href && (
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[0.6rem] font-bold text-[#5b8bff] hover:text-[#7aa3ff] transition-colors whitespace-nowrap"
            >
              Ver sitio ↗
            </a>
          )}
        </div>
      </div>

      {/* Línea hover */}
      <div className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full bg-gradient-to-r from-[#5b8bff]/60 to-transparent transition-all duration-600 ease-out" />
    </div>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [modal, setModal] = useState<{ images: string[]; title: string } | null>(null);

  const visible = showAll ? projects : projects.slice(0, INITIAL_COUNT);
  const remaining = projects.length - INITIAL_COUNT;

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
          <p className="font-mono text-[0.85rem] md:text-[0.9rem] text-[#8888a0] mb-14 md:mb-16 max-w-[520px] leading-[1.9]">
            Sistemas que construimos y hoy están en uso real, en distintos rubros y modalidades.
          </p>
        </FadeIn>

        <div className="flex flex-col border-t border-white/[0.07]">
          {visible.slice(0, INITIAL_COUNT).map((p, i) => (
            <FadeIn key={p.num} delay={i * 0.08}>
              <ProjectRow p={p} />
            </FadeIn>
          ))}

          <AnimatePresence>
            {showAll &&
              projects.slice(INITIAL_COUNT).map((p, i) => (
                <motion.div
                  key={p.num}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ProjectRow p={p} />
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

        {/* Botón ver todos */}
        {!showAll && (
          <FadeIn delay={0.3}>
            <div className="mt-10 flex items-center gap-6">
              <button
                onClick={() => setShowAll(true)}
                className="group flex items-center gap-3 font-mono text-[0.72rem] font-bold text-[#5a5a70] hover:text-[#eaeaf0] transition-colors duration-250"
              >
                <span className="w-8 h-[1px] bg-[#5b8bff]/40 group-hover:w-14 group-hover:bg-[#5b8bff]/80 transition-all duration-400" />
                Ver los {projects.length} proyectos
                <span className="text-[#5b8bff] group-hover:translate-x-1 transition-transform duration-250 inline-block">
                  ↓
                </span>
              </button>
            </div>
          </FadeIn>
        )}
      </section>

      {modal && (
        <ProjectModal
          images={modal.images}
          title={modal.title}
          onClose={() => setModal(null)}
        />
      )}
    </>
  );
}
