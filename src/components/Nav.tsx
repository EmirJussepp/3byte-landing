"use client";
import Image from "next/image";
import { useState } from "react";

const links = [
  { label: "Proyectos", id: "proyectos" },
  { label: "Stack", id: "stack" },
  { label: "Nosotros", id: "nosotros" },
  { label: "Contacto", id: "contacto" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-[#08080b]/90 backdrop-blur-2xl border-b border-white/[0.055]">
        <div className="flex items-center justify-between px-5 md:px-8 py-3 max-w-[960px] mx-auto">

          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <Image
              src="https://pboquensesf.duckdns.org/assets/logochico-DCu-UpDX.png"
              alt="3Byte"
              width={26}
              height={26}
              className="object-contain"
              unoptimized
            />
            <span className="font-mono text-[0.88rem] font-bold text-[#eaeaf0] tracking-tight">
              3<span className="text-[#a78bfa]">byte</span>
            </span>
          </div>

          {/* Links desktop */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="font-mono text-[0.67rem] text-[#55556a] tracking-[0.1em] uppercase font-bold hover:text-[#eaeaf0] transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Hamburger mobile */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1 cursor-pointer"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            <span className={`block w-5 h-px bg-[#8888a0] transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-5 h-px bg-[#8888a0] transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-[#8888a0] transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>

        {/* Menú mobile desplegable */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-64" : "max-h-0"}`}>
          <div className="flex flex-col border-t border-white/[0.055] px-5 py-4 gap-1">
            {links.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="font-mono text-[0.72rem] text-[#8888a0] tracking-[0.1em] uppercase font-bold text-left py-3 border-b border-white/[0.04] last:border-0 hover:text-[#eaeaf0] transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
