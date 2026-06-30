import Image from "next/image";

export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-[480px] mx-auto lg:mx-0">
      {/* Glow sutil de fondo */}
      <div
        aria-hidden
        className="absolute -inset-8 bg-[#5b8bff]/[0.05] blur-[60px] pointer-events-none"
      />

      {/* Foto */}
      <div className="relative border border-white/[0.09] overflow-hidden shadow-2xl shadow-black/50">
        <div className="relative aspect-[16/10]">
          <Image
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&auto=format&fit=crop&q=80"
            alt="Desarrollador trabajando en un sistema a medida"
            fill
            sizes="(max-width: 1024px) 100vw, 480px"
            className="object-cover object-center"
            unoptimized
            priority
          />
          {/* Overlay muy sutil para integrar con el fondo oscuro */}
          <div className="absolute inset-0 bg-[#08080b]/25" />
        </div>
      </div>

      {/* Badge flotante */}
      <div className="absolute -bottom-5 -right-3 sm:-right-5 border border-white/[0.09] bg-[#13131a]/95 backdrop-blur-xl px-4 py-3 shadow-xl shadow-black/40">
        <div className="font-mono text-[0.55rem] text-[#55556a] tracking-[0.1em] uppercase mb-0.5">
          Sistemas en uso
        </div>
        <div className="font-mono text-[1.1rem] font-bold text-[#eaeaf0] leading-none">
          <span className="text-[#5b8bff]">+</span>10
        </div>
      </div>
    </div>
  );
}
