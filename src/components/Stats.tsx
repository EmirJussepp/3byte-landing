"use client";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { prefix: "+", to: 10, suffix: "", label: "Sistemas en producción" },
  { prefix: "",  to: 3,  suffix: " años", label: "Experiencia en software" },
  { prefix: "",  to: 100, suffix: "%", label: "Código propio, sin templates" },
];

export default function Stats() {
  return (
    <div className="max-w-[1040px] mx-auto px-5 md:px-8 mb-20 md:mb-28">
      <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.06] rounded-2xl border border-white/[0.07] bg-[#0d0d11] overflow-hidden">

        {stats.map((s, i) => (
          <div key={i} className="flex flex-col items-start px-8 py-7 gap-1.5">
            <div className="text-[2.6rem] md:text-[3rem] font-extrabold tracking-[-0.04em] leading-none text-[#eaeaf0]">
              <AnimatedCounter
                to={s.to}
                prefix={s.prefix}
                suffix={s.suffix}
                duration={1.6}
              />
            </div>
            <div className="font-mono text-[0.62rem] text-[#55556a] tracking-[0.1em] uppercase leading-none">
              {s.label}
            </div>
          </div>
        ))}


      </div>
    </div>
  );
}
