"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Proyectos",  id: "proyectos",    num: "01" },
  { label: "Servicios",  id: "servicios",    num: "02" },
  { label: "Nosotros",   id: "nosotros",     num: "03" },
  { label: "Proceso",    id: "proceso",      num: "04" },
  { label: "Contacto",   id: "contacto",     num: "05" },
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
    }, 350);
  };

  return (
    <>
      {/* Top bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-5 md:px-8 pt-4">
        <div className={`max-w-[1040px] mx-auto flex items-center justify-between transition-all duration-300`}>

          {/* Logo */}
          <button
            onClick={() => scrollTo("top")}
            className={`flex items-center gap-2.5 group cursor-pointer transition-opacity duration-300 ${open ? "opacity-0 pointer-events-none" : "opacity-100"}`}
          >
            <div className={`w-7 h-7 overflow-hidden border transition-all duration-300 ${scrolled && !open ? "border-white/[0.12] bg-[#0d0d11]/80 backdrop-blur-sm" : "border-transparent"}`}>
              <Image
                src="https://pboquensesf.duckdns.org/assets/logochico-DCu-UpDX.png"
                alt="3Byte"
                width={28}
                height={28}
                className="object-contain w-full h-full"
                unoptimized
              />
            </div>
            <span className={`font-mono text-[0.92rem] font-bold tracking-tight transition-colors duration-300 ${scrolled && !open ? "text-[#eaeaf0]" : "text-[#eaeaf0]"}`}>
              3byte
            </span>
          </button>

          {/* Hamburger / X */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="relative z-[60] flex flex-col items-end gap-[5px] p-1 cursor-pointer group"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 6.5, width: 20 } : { rotate: 0, y: 0, width: 20 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
              className="block h-[1.5px] bg-[#eaeaf0] origin-center"
              style={{ width: 20 }}
            />
            <motion.span
              animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="block h-[1.5px] bg-[#eaeaf0] origin-right"
              style={{ width: 14 }}
            />
            <motion.span
              animate={open ? { rotate: -45, y: -6.5, width: 20 } : { rotate: 0, y: 0, width: 20 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
              className="block h-[1.5px] bg-[#eaeaf0] origin-center"
              style={{ width: 20 }}
            />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#08080b]/[0.97] backdrop-blur-xl flex flex-col justify-between px-8 md:px-16 pt-28 pb-10"
          >
            {/* Nav links */}
            <nav className="flex flex-col gap-1">
              {links.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  transition={{ duration: 0.38, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                >
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="group flex items-baseline gap-4 py-3 md:py-4 border-b border-white/[0.05] w-full text-left cursor-pointer"
                  >
                    <span className="font-mono text-[0.55rem] text-[#2e2e3a] tracking-[0.12em] mt-1 w-6 shrink-0">
                      {item.num}
                    </span>
                    <span className="text-[2.8rem] md:text-[4rem] font-extrabold tracking-[-0.04em] leading-none text-[#2e2e3a] group-hover:text-[#eaeaf0] transition-colors duration-300">
                      {item.label}
                    </span>
                  </button>
                </motion.div>
              ))}
            </nav>

            {/* Bottom */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.36, ease: "easeOut" }}
              className="flex items-end justify-between"
            >
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[0.52rem] text-[#2e2e3a] tracking-[0.16em] uppercase mb-1">
                  Contacto directo
                </span>
                {socials.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    target={s.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="font-mono text-[0.72rem] text-[#55556a] hover:text-[#eaeaf0] transition-colors duration-200"
                  >
                    {s.label}
                  </a>
                ))}
              </div>

              <button
                onClick={() => scrollTo("contacto")}
                className="px-8 py-3.5 bg-[#5b8bff] hover:bg-[#4a7aee] text-white font-mono font-bold text-[0.65rem] tracking-[0.12em] uppercase transition-colors duration-200 cursor-pointer"
              >
                Hablemos
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
