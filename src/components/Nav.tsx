"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const links = [
  { label: "Proyectos", id: "proyectos" },
  { label: "Nosotros", id: "nosotros" },
  { label: "Proceso", id: "proceso" },
];

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-[15px] h-[15px]">
    <rect x="2.25" y="2.25" width="19.5" height="19.5" rx="5.25" strokeLinecap="round" strokeLinejoin="round" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
    <circle cx="17.25" cy="6.75" r="0.75" fill="currentColor" stroke="none" />
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-[15px] h-[15px]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const socials = [
  { icon: <WhatsAppIcon />, href: "https://wa.me/543512762415", label: "WhatsApp", color: "hover:text-[#34d399]" },
  { icon: <InstagramIcon />, href: "https://instagram.com/grupo3byte_", label: "Instagram", color: "hover:text-[#a78bfa]" },
  { icon: <EmailIcon />, href: "mailto:grupo3byteapp@gmail.com", label: "Email", color: "hover:text-[#5b8bff]" },
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
            <span className="font-mono text-[0.92rem] font-bold tracking-tight text-[#a78bfa] group-hover:text-[#c4a8ff] transition-colors">
              3byte
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

          {/* Derecha — socials + CTA + hamburger */}
          <div className="flex items-center gap-3">

            {/* Íconos sociales — solo desktop */}
            <div className="hidden md:flex items-center gap-2.5 mr-1">
              {socials.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`text-[#55556a] transition-colors duration-200 ${s.color}`}
                >
                  {s.icon}
                </a>
              ))}
            </div>

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
            {/* Socials mobile */}
            <div className="flex items-center gap-4 py-3 border-b border-white/[0.04]">
              {socials.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className={`text-[#55556a] ${s.color} transition-colors`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
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
