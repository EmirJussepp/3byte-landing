"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import FadeIn from "./FadeIn";

const trabajamosConItems = [
  "Empresas que necesitan un sistema a medida",
  "Negocios que quieren integrarse con su e-commerce",
  "Clubes, gimnasios y asociaciones",
  "Emprendedores con un producto SaaS en mente",
];

const canales = [
  {
    label: "Instagram",
    handle: "@grupo3byte_",
    href: "https://instagram.com/grupo3byte_",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4.5"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: "Email",
    handle: "grupo3byteapp@gmail.com",
    href: "mailto:grupo3byteapp@gmail.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
        <rect x="2" y="4" width="20" height="16"/>
        <polyline points="2,4 12,13 22,4"/>
      </svg>
    ),
  },
];

const headlineWords = ["Hablemos."];

export default function Contact() {
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section id="contacto" className="px-5 md:px-8 pt-8 md:pt-14 pb-16 md:pb-40 max-w-[1040px] mx-auto">

      {/* Headline editorial grande */}
      <div className="mb-10 md:mb-14 border-b border-white/[0.055] pb-10 md:pb-14">
        <FadeIn direction="left">
          <div className="inline-flex items-center font-mono text-[0.6rem] text-[#5b8bff] tracking-[0.18em] uppercase mb-8 px-3 py-1 border border-[#5b8bff]/25 bg-[#5b8bff]/[0.06]">
            contacto
          </div>
        </FadeIn>

        <h2
          ref={ref}
          className="text-[clamp(4.5rem,13vw,10rem)] font-extrabold tracking-[-0.05em] leading-[0.92] overflow-hidden"
        >
          {["¿Listo", "para", "construir", "algo?"].map((word, i) => (
            <motion.span
              key={word}
              initial={{ y: "105%", opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.72, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              className={`inline-block mr-[0.2em] ${i >= 2 ? "text-[#5b8bff]" : "text-[#eaeaf0]"}`}
            >
              {word}
            </motion.span>
          ))}
        </h2>

        <FadeIn delay={0.4}>
          <p className="mt-6 font-mono text-[0.78rem] md:text-[0.82rem] text-[#8888a0] max-w-[480px] leading-[1.85]">
            Contanos qué necesitás construir. Respondemos rápido y con ganas de entender bien lo que necesitás.
          </p>
        </FadeIn>
      </div>

      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-14 items-start">

        {/* Izquierda */}
        <FadeIn direction="left" delay={0.05}>
          <div>
            <p className="font-mono text-[0.65rem] text-[#55556a] tracking-[0.14em] uppercase mb-5">
              Trabajamos con
            </p>
            <ul className="flex flex-col gap-4">
              {trabajamosConItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[0.95rem] text-[#8888a0] leading-[1.65]">
                  <span className="text-[#5b8bff] shrink-0 mt-[3px] text-sm">→</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 pt-8 border-t border-white/[0.055]">
              <p className="font-mono text-[0.65rem] text-[#55556a] tracking-[0.14em] uppercase mb-3">
                Tiempo de respuesta
              </p>
              <span className="text-[0.9rem] text-[#eaeaf0] font-medium">Menos de 24 horas</span>
            </div>
          </div>
        </FadeIn>

        {/* Derecha */}
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-4">
            <a
              href="https://wa.me/543512762415?text=Hola%2C%20los%20contacto%20desde%20grupo3byte.com.%20Quisiera%20hablar%20sobre%20un%20proyecto."
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden group flex items-center justify-between w-full px-7 py-6 bg-[#5b8bff] hover:bg-[#4a7aee] transition-colors"
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/[0.1] to-transparent pointer-events-none" />
              <div>
                <div className="font-extrabold text-white text-[1.05rem] tracking-[-0.01em] leading-tight mb-0.5">
                  Escribinos por WhatsApp
                </div>
                <div className="font-mono text-[0.65rem] text-white/60 tracking-[0.08em]">
                  +54 351 276-2415
                </div>
              </div>
              <svg
                width="22" height="22" viewBox="0 0 24 24" fill="none"
                stroke="white" strokeWidth="1.5" strokeLinecap="square"
                className="shrink-0 opacity-70 group-hover:translate-x-1 transition-transform"
              >
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="13,6 19,12 13,18"/>
              </svg>
            </a>

            <div className="grid grid-cols-2 gap-px bg-white/[0.055] border border-white/[0.055]">
              {canales.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-[#0d0d11] px-5 py-5 flex flex-col gap-3 hover:bg-[#111118] transition-colors"
                >
                  <span className="text-[#5b8bff] opacity-60 group-hover:opacity-100 transition-opacity">
                    {c.icon}
                  </span>
                  <div>
                    <div className="font-mono text-[0.55rem] text-[#55556a] tracking-[0.12em] uppercase mb-1">
                      {c.label}
                    </div>
                    <div className="font-mono text-[0.7rem] text-[#8888a0] group-hover:text-[#eaeaf0] transition-colors truncate">
                      {c.handle}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
