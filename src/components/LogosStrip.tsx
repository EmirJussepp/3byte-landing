import Image from "next/image";

const logos = [
  {
    name: "Elite Car-Shop",
    src: "https://elitecarshopsf.duckdns.org/assets/logoelite-W4eZvBtv.jpg",
    w: 110,
  },
  {
    name: "Aero Gym",
    src: "https://aerogym.duckdns.org/logoaerogym.jpg",
    w: 100,
  },
  {
    name: "Peña Boquense SF",
    src: "https://pboquensesf.duckdns.org/assets/logo_pe%C3%B1a-BetDt1YW.png",
    w: 90,
  },
  {
    name: "SportByte",
    src: "https://www.sportbyte.com.ar/logosolosportbyte.png",
    w: 100,
  },
];

export default function LogosStrip() {
  return (
    <div className="border-t border-b border-white/[0.055] py-8 px-8 mb-24">
      <div className="max-w-[960px] mx-auto flex flex-col gap-5">
        <p className="font-mono text-[0.6rem] text-[#55556a] tracking-[0.14em] uppercase text-center">
          Sistemas en producción
        </p>
        <div className="flex items-center justify-center gap-14 flex-wrap">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="opacity-40 hover:opacity-80 transition-opacity duration-300 grayscale hover:grayscale-0 flex items-center"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.w}
                height={40}
                className="object-contain h-[34px] w-auto"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
