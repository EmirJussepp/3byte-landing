"use client";
import { motion } from "framer-motion";
import HeroVisual from "./HeroVisual";
import MagneticButton from "./MagneticButton";

const line1 = ["Tu", "negocio", "merece"];
const line2 = ["un", "sistema", "propio."];

const wordVariant = {
  hidden: { opacity: 0, y: 22, filter: "blur(10px)" },
  visible: (i: number) => ({
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.65, delay: 0.2 + i * 0.11, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative px-5 md:px-8 pt-24 md:pt-28 pb-20 md:pb-24 max-w-[1140px] mx-auto">
      <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-10 items-start">

        {/* Texto */}
        <div>
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.02] tracking-[-0.045em] mb-8">
            {/* Línea 1 */}
            <span className="block text-[#eaeaf0]" aria-hidden="false">
              {line1.map((word, i) => (
                <motion.span
                  key={word}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={wordVariant}
                  className="inline-block mr-[0.22em]"
                >
                  {word}
                </motion.span>
              ))}
            </span>

            {/* Línea 2 — gradiente azul */}
            <span className="block" aria-hidden="false">
              {line2.map((word, i) => (
                <motion.span
                  key={word}
                  custom={line1.length + i}
                  initial="hidden"
                  animate="visible"
                  variants={wordVariant}
                  className="inline-block mr-[0.22em] bg-gradient-to-r from-[#c8daf8] to-[#5b8bff] bg-clip-text text-transparent"
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85, ease: "easeOut" }}
            className="flex gap-5 items-start mb-10 max-w-[520px]"
          >
            <div className="w-px bg-white/[0.10] self-stretch mt-1 shrink-0" />
            <p className="font-mono text-[0.78rem] md:text-[0.82rem] text-[#8888a0] leading-[1.85]">
              Desarrollamos software a medida para PyMEs y negocios de servicios argentinos.
              Comunicación directa y sistemas que realmente se usan.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
            className="flex gap-3 flex-wrap"
          >
            <MagneticButton
              onClick={() => scrollTo("contacto")}
              className="relative overflow-hidden inline-flex items-center gap-2 px-6 md:px-7 py-3.5 rounded-none bg-[#5b8bff] text-white font-extrabold text-[0.72rem] md:text-[0.75rem] tracking-[0.08em] uppercase hover:bg-[#4a7aee] transition-colors cursor-pointer group"
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/[0.1] to-transparent pointer-events-none" />
              Contanos tu proyecto →
            </MagneticButton>
            <MagneticButton
              onClick={() => scrollTo("proyectos")}
              strength={0.2}
              className="inline-flex items-center gap-2 px-6 md:px-7 py-3.5 rounded-none bg-transparent text-[#55556a] border border-white/[0.11] font-bold text-[0.72rem] md:text-[0.75rem] tracking-[0.08em] uppercase hover:text-[#eaeaf0] hover:border-white/25 transition-all cursor-pointer"
            >
              Ver proyectos reales
            </MagneticButton>
          </motion.div>
        </div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 lg:mt-0"
        >
          <HeroVisual />
        </motion.div>

      </div>
    </section>
  );
}
