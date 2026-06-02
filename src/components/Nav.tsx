"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const links = [
  { label: "Proyectos", id: "proyectos" },
  { label: "Nosotros", id: "nosotros" },
  { label: "Proceso", id: "proceso" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#08080b]/95 backdrop-blur-2xl shadow-[0_1px_0_0_rgba(255,255,255,0.055)]"
            : "bg-[#08080b]/80 backdrop-blur-xl border-b border-white/[0.055]"
        }`}
      >
        <div className="flex items-center justify-between px-5 md:px-8 py-3.5 max-w-[960px] mx-auto">

          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-7 h-7 rounded-[4px] overflow-hidden border border-white/[0.08] group-hover:border-white/[0.15] transition-colors">
              <Image
                src="https://pboquensesf.duckdns.org/assets/logochico-DCu-UpDX.png"
                alt="3Byte"
                width={28}
                height={28}
                className="object-contain w-full h-full"
                unoptimized
              />
            </div>
            <span className="font-mono text-[0.92rem] font-bold tracking-tight">
              <span className="text-[#eaeaf0]">3</span>
              <span className="text-[#a78bfa]">byte</span>
            </span>
          </button>

          {/* Centro — links desktop */}
          <div className="hidden md:flex items-center gap-7">
            {links.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="font-mono text-[0.67rem] text-[#55556a] tracking-[0.1em] uppercase font-bold hover:text-[#eaeaf0] transition-colors duration-200 cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Derecha — CTA + hamburger */}
          <div className="flex items-center gap-3">
            {/* CTA desktop */}
            <button
              onClick={() => scrollTo("contacto")}
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-[3px] bg-[#5b8bff] text-white font-mono font-bold text-[0.65rem] tracking-[0.08em] uppercase hover:bg-[#4a7aee] transition-colors cursor-pointer"
            >
              Contactar
            </button>

            {/* Hamburger mobile */}
            <button
              className="md:hidden flex flex-col gap-[5px] p-1 cursor-pointer"
              onClick={() => setOpen(!open)}
              aria-label="Menú"
            >
              <span className={`block w-5 h-[1.5px] bg-[#8888a0] transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[6.5px]" : ""}`} />
              <span className={`block w-5 h-[1.5px] bg-[#8888a0] transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block w-5 h-[1.5px] bg-[#8888a0] transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
            </button>
          </div>
        </div>

        {/* Menú mobile */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-72 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="border-t border-white/[0.055] px-5 py-4 flex flex-col gap-1">
            {links.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="font-mono text-[0.72rem] text-[#8888a0] tracking-[0.1em] uppercase font-bold text-left py-3 border-b border-white/[0.04] last:border-0 hover:text-[#eaeaf0] transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contacto")}
              className="mt-3 w-full py-3 rounded-[3px] bg-[#5b8bff] text-white font-mono font-bold text-[0.72rem] tracking-[0.08em] uppercase hover:bg-[#4a7aee] transition-colors cursor-pointer"
            >
              Contactar
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
