"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";

const CAT_ACCENT: Record<string, string> = {
  "Sistema a medida":     "#5b8bff",
  "Producto SaaS propio": "#a78bfa",
  "Facturación":          "#5b8bff",
};

type Project = {
  num: string;
  cat: string;
  name: string;
  desc: string;
  logo: string | null;
  blend?: boolean;
  initials?: string;
  href: string | null;
  status: string;
  wide?: boolean;
};

const projects: Project[] = [
  {
    num: "01",
    cat: "Sistema a medida",
    name: "Elite Car-Shop",
    desc: "Gestión completa para autodetailing: ventas, compras, caja, stock, clientes, proveedores y cuenta corriente. Integración con Tienda Nube mediante webhooks bidireccionales.",
    logo: "https://elitecarshopsf.duckdns.org/assets/logoelite-W4eZvBtv.jpg",
    href: null,
    status: "Activo",
  },
  {
    num: "02",
    cat: "Sistema a medida",
    name: "Defyne Center",
    desc: "App de rutinas para gimnasio con modo TV en vivo: la profesora arma la clase desde el celular y se proyecta en la Smart TV con cronómetro automático.",
    logo: "/defyne-logo.jpeg",
    href: null,
    status: "Activo",
  },
  {
    num: "03",
    cat: "Sistema a medida",
    name: "Peña Boquense SF",
    desc: "Sistema para asociación deportiva: socios, cuotas, movimientos de caja y reportes. La comisión directiva administra todo sin depender de terceros.",
    logo: "https://pboquensesf.duckdns.org/assets/logo_pe%C3%B1a-BetDt1YW.png",
    href: null,
    status: "Activo",
  },
  {
    num: "04",
    cat: "Producto SaaS propio",
    name: "SportByte",
    desc: "Plataforma de reservas para clubes deportivos. Turnos, confirmaciones por WhatsApp, caja del día y estadísticas. Multi-admin, activación en menos de un día.",
    logo: "https://www.sportbyte.com.ar/logosolosportbyte.png",
    href: "https://www.sportbyte.com.ar",
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
    status: "En desarrollo",
  },
  {
    num: "06",
    cat: "Sistema a medida",
    name: "SRO",
    desc: "Sistema para centros de kinesiología: seguimiento de pacientes, planificación de rutinas de entrenamiento, control de abonos y evolución clínica.",
    logo: "/sro-logo.png",
    blend: false,
    href: null,
    status: "Activo",
  },
  {
    num: "07",
    cat: "Facturación",
    name: "LOGOS",
    desc: "Software de facturación para negocios: emisión de comprobantes, control de ventas, gestión de clientes y reportes simplificados en un solo lugar.",
    logo: "/logos-logo.webp",
    blend: true,
    href: null,
    status: "Activo",
    wide: true,
  },
];

function LogoBox({ p, accent }: { p: Project; accent: string }) {
  const boxStyle = { background: `${accent}12`, borderColor: `${accent}22` } as React.CSSProperties;

  if (p.logo) {
    return (
      <div
        className="w-14 h-14 flex items-center justify-center overflow-hidden p-2 border transition-all duration-400 group-hover:scale-[1.03]"
        style={boxStyle}
      >
        <Image
          src={p.logo}
          alt={p.name}
          width={56}
          height={56}
          className="object-contain w-full h-full"
          unoptimized
          style={p.blend ? { mixBlendMode: "lighten" } : undefined}
        />
      </div>
    );
  }
  return (
    <div
      className="w-14 h-14 flex items-center justify-center border transition-all duration-400 group-hover:scale-[1.03]"
      style={boxStyle}
    >
      <span
        className="font-mono text-[0.62rem] font-bold tracking-[0.04em]"
        style={{ color: `${accent}cc` }}
      >
        {p.initials}
      </span>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const isActive = status === "Activo";
  const color = isActive ? "#5b8bff" : "#a78bfa";
  return (
    <span
      className="inline-flex items-center gap-[6px] font-mono text-[0.44rem] font-bold border px-2 py-[4px] tracking-[0.14em]"
      style={{
        color,
        borderColor: `${color}25`,
        background: `${color}08`,
      }}
    >
      <motion.span
        className="w-[5px] h-[5px] rounded-full"
        style={{ background: color }}
        animate={isActive ? { opacity: [1, 0.3, 1] } : {}}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      />
      {status.toUpperCase()}
    </span>
  );
}

function ProjectCard({ p, index }: { p: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const accent = CAT_ACCENT[p.cat] ?? "#5b8bff";

  const onMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mx", `${e.clientX - r.left}px`);
    ref.current.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.975 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.55, delay: index * 0.065, ease: [0.22, 1, 0.36, 1] }}
      className={p.wide ? "lg:col-span-2" : ""}
    >
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        className="group relative overflow-hidden border-r border-b border-white/[0.1] p-7 flex flex-col h-full min-h-[270px]"
        style={{ "--mx": "50%", "--my": "50%" } as React.CSSProperties}
      >
        {/* Línea superior siempre visible — acento tenue */}
        <div
          className="absolute top-0 left-0 w-10 h-[1px]"
          style={{ background: accent, opacity: 0.2 }}
        />

        {/* Línea superior en hover — se expande */}
        <div
          className="absolute top-0 left-0 h-[1.5px] w-0 group-hover:w-full transition-all duration-600 ease-out"
          style={{ background: `linear-gradient(90deg, ${accent}90, transparent)` }}
        />

        {/* Spotlight */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(320px circle at var(--mx) var(--my), ${accent}0f, transparent 70%)`,
          }}
        />

        {/* Número fantasma */}
        <div className="absolute bottom-4 right-5 font-mono font-black text-[6.5rem] text-white/[0.028] leading-none select-none pointer-events-none">
          {p.num}
        </div>

        {/* Header: logo + badge */}
        <div className="flex items-start justify-between mb-6">
          <LogoBox p={p} accent={accent} />
          <StatusBadge status={p.status} />
        </div>

        {/* Categoría con dot */}
        <div className="flex items-center gap-[7px] mb-3">
          <span
            className="w-[5px] h-[5px] rounded-full shrink-0"
            style={{ background: accent, opacity: 0.5 }}
          />
          <span
            className="font-mono text-[0.46rem] tracking-[0.16em] uppercase"
            style={{ color: `${accent}80` }}
          >
            {p.cat}
          </span>
        </div>

        {/* Nombre */}
        <h3 className="text-[1.28rem] font-extrabold tracking-[-0.04em] text-[#b8b8d4] leading-tight mb-4 group-hover:text-white transition-colors duration-200">
          {p.name}
        </h3>

        {/* Descripción */}
        <p className="font-mono text-[0.67rem] text-[#4c4c64] leading-[1.92] group-hover:text-[#6e6e88] transition-colors duration-300 mt-auto">
          {p.desc}
        </p>

        {/* Link */}
        {p.href && (
          <a
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 font-mono text-[0.54rem] font-bold tracking-[0.12em] transition-colors duration-200"
            style={{ color: `${accent}70` }}
            onMouseEnter={(e) => (e.currentTarget.style.color = accent)}
            onMouseLeave={(e) => (e.currentTarget.style.color = `${accent}70`)}
          >
            VER SITIO ↗
          </a>
        )}

        {/* Línea inferior hover */}
        <div
          className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full transition-all duration-500 ease-out"
          style={{ background: `linear-gradient(90deg, ${accent}55, transparent)` }}
        />
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [open, setOpen] = useState(false);

  return (
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
          /* ── CARPETA ── */
          <motion.div
            key="folder"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.88, transition: { duration: 0.28 } }}
            className="flex flex-col items-center py-10 md:py-16"
          >
            <button
              onClick={() => setOpen(true)}
              className="group relative flex flex-col items-center gap-6 focus:outline-none"
              aria-label="Ver todos los proyectos"
            >
              {/* Anillo exterior — lento */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] pointer-events-none">
                <motion.div
                  className="w-full h-full rounded-full border border-[#5b8bff]/[0.06]"
                  animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>

              {/* Anillo medio */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] pointer-events-none">
                <motion.div
                  className="w-full h-full rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(91,139,255,0.14) 0%, rgba(167,139,250,0.06) 55%, transparent 72%)",
                  }}
                  animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.12, 1] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>

              {/* Anillo interior — rápido */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] pointer-events-none">
                <motion.div
                  className="w-full h-full rounded-full border border-[#a78bfa]/[0.12]"
                  animate={{ scale: [1, 1.14, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                />
              </div>

              {/* Carpeta flotante */}
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.07, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.95, transition: { duration: 0.15 } }}
                className="relative z-10"
              >
                <Image
                  src="/portfolio-folder.jpg"
                  alt="Ver proyectos"
                  width={260}
                  height={260}
                  className="w-[180px] h-[180px] md:w-[240px] md:h-[240px] object-contain drop-shadow-2xl"
                  unoptimized
                  style={{ mixBlendMode: "lighten" }}
                />
              </motion.div>

              {/* Label */}
              <div className="relative z-10 flex flex-col items-center gap-3">
                <motion.div
                  animate={{ opacity: [0.4, 1, 0.4], scaleX: [1, 1.4, 1] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-6 h-[1px] bg-[#5b8bff]"
                />
                <span className="font-mono text-[0.62rem] text-[#5b8bff]/60 tracking-[0.24em] uppercase group-hover:text-[#5b8bff] transition-colors duration-300">
                  ver proyectos
                </span>
                <span className="font-mono text-[0.46rem] text-[#2e2e44] tracking-[0.14em]">
                  7 sistemas
                </span>
              </div>
            </button>
          </motion.div>
        ) : (
          /* ── GRID ── */
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Barra superior del grid */}
            <div className="flex items-center justify-between mb-5">
              <div className="font-mono text-[0.54rem] text-[#2e2e44] tracking-[0.14em] uppercase">
                7 proyectos
              </div>
              <button
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 font-mono text-[0.56rem] text-[#44445a] hover:text-[#8888a0] transition-colors duration-250"
              >
                <span className="text-[#5b8bff]/50">←</span>
                cerrar
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-t border-white/[0.1]">
              {projects.map((p, i) => (
                <ProjectCard key={p.num} p={p} index={i} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
