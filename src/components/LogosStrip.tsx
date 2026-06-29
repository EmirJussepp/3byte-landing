import Image from "next/image";

const logos = [
  { name: "Elite Car-Shop",   src: "https://elitecarshopsf.duckdns.org/assets/logoelite-W4eZvBtv.jpg",       w: 36, h: 36 },
  { name: "Aero Gym",         src: "https://aerogym.duckdns.org/logoaerogym.jpg",                             w: 36, h: 36 },
  { name: "Peña Boquense SF", src: "https://pboquensesf.duckdns.org/assets/logo_pe%C3%B1a-BetDt1YW.png",     w: 44, h: 36 },
  { name: "SportByte",        src: "https://www.sportbyte.com.ar/logosolosportbyte.png",                      w: 36, h: 36 },
];

// Triple para el loop infinito sin salto
const track = [...logos, ...logos, ...logos];

export default function LogosStrip() {
  return (
    <div className="w-full overflow-hidden mb-20 md:mb-28">
      {/* Divisor con label centrado */}
      <div className="flex items-center gap-4 px-5 md:px-8 max-w-[1040px] mx-auto mb-7">
        <div className="h-px flex-1 bg-white/[0.055]" />
        <span className="font-mono text-[0.58rem] text-[#55556a] tracking-[0.16em] uppercase whitespace-nowrap">
          Sistemas en producción
        </span>
        <div className="h-px flex-1 bg-white/[0.055]" />
      </div>

      {/* Marquee: animación CSS pura, pausa al hover */}
      <div className="group flex items-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex items-center animate-marquee group-hover:[animation-play-state:paused]">
          {track.map((l, i) => (
            <div key={i} className="flex items-center gap-3 mx-10 shrink-0">
              <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center overflow-hidden p-1.5 shrink-0">
                <Image
                  src={l.src}
                  alt={l.name}
                  width={l.w}
                  height={l.h}
                  className="object-contain w-full h-full opacity-60 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                  unoptimized
                />
              </div>
              <span className="text-[0.8rem] font-medium text-[#3a3a52] group-hover:text-[#55556a] transition-colors whitespace-nowrap">
                {l.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
