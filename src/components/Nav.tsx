"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Proyectos",  id: "proyectos",  num: "01" },
  { label: "Servicios",  id: "servicios",  num: "02" },
  { label: "Nosotros",   id: "nosotros",   num: "03" },
  { label: "Proceso",    id: "proceso",    num: "04" },
  { label: "Contacto",   id: "contacto",   num: "05" },
];

const socials = [
  { label: "WhatsApp",  href: "https://wa.me/543512762415" },
  { label: "Instagram", href: "https://instagram.com/grupo3byte_" },
  { label: "Email",     href: "mailto:grupo3byteapp@gmail.com" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    setTimeout(() => {
      if (id === "top") window.scrollTo({ top: 0, behavior: "smooth" });
      else document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 400);
  };

  return (
    <>
      {/* Top bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#08080b]/80 backdrop-blur-xl border-b border-white/[0.06]" : ""
        }`}
      >
        <div className="max-w-[1040px] mx-auto px-6 md:px-10 py-5 md:py-7 flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => scrollTo("top")}
            className="flex items-center gap-3.5 group cursor-pointer"
          >
            <div className="w-11 h-11 overflow-hidden border border-white/[0.1] group-hover:border-white/[0.25] transition-colors shrink-0">
              <Image
                src="https://pboquensesf.duckdns.org/assets/logochico-DCu-UpDX.png"
                alt="3Byte"
                width={44}
                height={44}
                className="object-contain w-full h-full"
                unoptimized
              />
            </div>
            <span className="font-mono text-[1.15rem] font-bold tracking-tight text-[#eaeaf0] group-hover:text-white transition-colors">
              grupo3byte
            </span>
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="relative z-[60] flex flex-col justify-center gap-[7px] p-3 cursor-pointer"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
              className="block bg-[#eaeaf0] origin-center"
              style={{ width: 32, height: 2.5 }}
            />
            <motion.span
              animate={open ? { opacity: 0, x: 10 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="block bg-[#eaeaf0]"
              style={{ width: 22, height: 2.5 }}
            />
            <motion.span
              animate={open ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
              className="block bg-[#eaeaf0] origin-center"
              style={{ width: 32, height: 2.5 }}
            />
          </button>
        </div>
      </nav>

      {/* Backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Side drawer */}
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 bottom-0 z-50 w-[320px] md:w-[400px] bg-[#09090c] border-l border-white/[0.07] flex flex-col"
          >
            {/* Header drawer */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-white/[0.06]">
              <span className="font-mono text-[0.55rem] text-[#2e2e3a] tracking-[0.18em] uppercase">
                Menú
              </span>
              <button
                onClick={() => setOpen(false)}
                className="font-mono text-[0.6rem] text-[#55556a] hover:text-[#eaeaf0] tracking-[0.1em] transition-colors cursor-pointer"
              >
                cerrar ✕
              </button>
            </div>

            {/* Links */}
            <nav className="flex-1 flex flex-col justify-center px-8 gap-1">
              {links.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.08 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                >
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="group flex items-baseline gap-4 py-4 border-b border-white/[0.04] w-full text-left cursor-pointer"
                  >
                    <span className="font-mono text-[0.5rem] text-[#2e2e3a] tracking-[0.1em] w-5 shrink-0">
                      {item.num}
                    </span>
                    <span className="text-[1.9rem] md:text-[2.2rem] font-extrabold tracking-[-0.03em] leading-none text-[#33334a] group-hover:text-[#eaeaf0] transition-colors duration-250">
                      {item.label}
                    </span>
                  </button>
                </motion.div>
              ))}
            </nav>

            {/* Footer drawer */}
            <div className="px-8 py-7 border-t border-white/[0.06] flex items-end justify-between">
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[0.48rem] text-[#2e2e3a] tracking-[0.16em] uppercase mb-0.5">
                  Contacto
                </span>
                {socials.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    target={s.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="font-mono text-[0.65rem] text-[#55556a] hover:text-[#eaeaf0] transition-colors"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
              <button
                onClick={() => scrollTo("contacto")}
                className="px-6 py-3 bg-[#5b8bff] hover:bg-[#4a7aee] text-white font-mono font-bold text-[0.6rem] tracking-[0.12em] uppercase transition-colors cursor-pointer"
              >
                Hablemos
              </button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
