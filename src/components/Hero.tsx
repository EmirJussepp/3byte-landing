"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import MagneticButton from "./MagneticButton";

const slides = [
  { src: "/projects/pena-dashboard-new.jpg",  project: "Peña Boquense SF",  cat: "Sistema de socios" },
  { src: "/projects/sportbyte.png",            project: "SportByte",          cat: "Plataforma SaaS" },
  { src: "/projects/defyne-rutinas.jpg",       project: "Defyne Center",      cat: "App de rutinas" },
  { src: "/projects/elite-dashboard.jpg",      project: "Elite Car-Shop",     cat: "Sistema de gestión" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 4500);
    return () => clearInterval(id);
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative h-screen min-h-[620px] overflow-hidden flex flex-col justify-end">

      {/* Slides de fondo */}
      {slides.map((s, i) => (
        <motion.div
          key={s.src}
          initial={false}
          animate={{ opacity: i === current ? 1 : 0 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
          className="absolute inset-0"
          aria-hidden={i !== current}
        >
          <Image
            src={s.src}
            alt={s.project}
            fill
            className="object-cover object-top"
            priority={i === 0}
            unoptimized
          />
        </motion.div>
      ))}

      {/* Overlay muy oscuro — imagen como textura sutil de fondo */}
      <div className="absolute inset-0 bg-[#08080b]/82 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#08080b]/60 via-transparent to-[#08080b]/70 pointer-events-none" />

      {/* Indicador proyecto — top right */}
      <div className="absolute top-24 right-6 md:right-10 z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.5, ease }}
            className="text-right"
          >
            <div className="font-mono text-[0.5rem] text-white/30 tracking-[0.16em] uppercase mb-1">
              {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </div>
            <div className="font-mono text-[0.65rem] text-white/60 tracking-[0.08em]">
              {slides[current].project}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 px-5 md:px-10 pb-16 md:pb-24 max-w-[1100px] mx-auto w-full">

        <motion.div
          initial={{ opacity: 0 }}
          animate={loaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-[clamp(3rem,8vw,7.5rem)] font-extrabold tracking-[-0.05em] leading-[0.92] mb-6 md:mb-8">
            {["Tu", "negocio", "merece"].map((w, i) => (
              <motion.span
                key={w}
                initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
                animate={loaded ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.1, ease }}
                className="inline-block mr-[0.2em] text-white"
              >
                {w}
              </motion.span>
            ))}
            <br />
            {["un", "sistema", "propio."].map((w, i) => (
              <motion.span
                key={w}
                initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
                animate={loaded ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                transition={{ duration: 0.7, delay: 0.45 + i * 0.1, ease }}
                className="inline-block mr-[0.2em] bg-gradient-to-r from-[#c8daf8] to-[#5b8bff] bg-clip-text text-transparent"
              >
                {w}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.85, ease: "easeOut" }}
          className="font-mono text-[0.8rem] md:text-[0.85rem] text-white/50 max-w-[480px] leading-[1.9] mb-8"
        >
          Desarrollamos software a medida para PyMEs y negocios de servicios argentinos.
          Comunicación directa y sistemas que realmente se usan.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
          className="flex gap-3 flex-wrap"
        >
          <MagneticButton
            onClick={() => scrollTo("contacto")}
            className="relative overflow-hidden inline-flex items-center gap-2 px-7 py-4 bg-[#5b8bff] text-white font-extrabold text-[0.72rem] tracking-[0.08em] uppercase hover:bg-[#4a7aee] transition-colors cursor-pointer group"
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/[0.1] to-transparent pointer-events-none" />
            Contanos tu proyecto →
          </MagneticButton>
          <MagneticButton
            onClick={() => scrollTo("proyectos")}
            strength={0.2}
            className="inline-flex items-center gap-2 px-7 py-4 bg-transparent text-white/50 border border-white/20 font-bold text-[0.72rem] tracking-[0.08em] uppercase hover:text-white hover:border-white/40 transition-all cursor-pointer"
          >
            Ver proyectos reales
          </MagneticButton>
        </motion.div>
      </div>

      {/* Dots navegación — bottom right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={loaded ? { opacity: 1 } : {}}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 right-6 md:right-10 z-10 flex gap-2 items-center"
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-400 cursor-pointer ${
              i === current
                ? "w-6 h-[2px] bg-white"
                : "w-[6px] h-[6px] bg-white/25 hover:bg-white/50"
            }`}
          />
        ))}
      </motion.div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/[0.06] z-10">
        <motion.div
          key={current}
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 4.5, ease: "linear" }}
          className="h-full bg-[#5b8bff]/60 origin-left"
        />
      </div>
    </section>
  );
}
