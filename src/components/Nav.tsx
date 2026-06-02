"use client";
import Image from "next/image";

export default function Nav() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-3 bg-[#08080b]/85 backdrop-blur-2xl border-b border-white/[0.055]">
      <div className="flex items-center gap-2.5">
        <Image
          src="https://pboquensesf.duckdns.org/assets/logochico-DCu-UpDX.png"
          alt="3Byte"
          width={28}
          height={28}
          className="object-contain"
          unoptimized
        />
        <span className="font-mono text-[0.9rem] font-bold text-[#eaeaf0] tracking-tight">
          3<span className="text-[#a78bfa]">byte</span>
        </span>
      </div>

      <div className="flex items-center gap-8">
        {[
          { label: "Proyectos", id: "proyectos" },
          { label: "Stack", id: "stack" },
          { label: "Nosotros", id: "nosotros" },
          { label: "Contacto", id: "contacto" },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="font-mono text-[0.68rem] text-[#55556a] tracking-[0.1em] uppercase font-bold hover:text-[#eaeaf0] transition-colors cursor-pointer"
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
