import FadeIn from "./FadeIn";

const outcomes = [
  {
    n: "01",
    text: "Trabajar con mayor organización y disponer de información confiable.",
  },
  {
    n: "02",
    text: "Mejorar los registros y reducir tareas que no aportan valor.",
  },
  {
    n: "03",
    text: "Optimizar los tiempos de gestión y operación del negocio.",
  },
  {
    n: "04",
    text: "Encontrar la herramienta que realmente se adapta a tus necesidades.",
  },
];

export default function Outcomes() {
  return (
    <section className="px-5 md:px-8 max-w-[1040px] mx-auto mb-8 md:mb-20">
      <FadeIn direction="left">
        <div className="font-mono text-[0.6rem] text-[#5b8bff] tracking-[0.18em] uppercase mb-8 px-3 py-1 border border-[#5b8bff]/25 bg-[#5b8bff]/[0.06] inline-flex">
          para tu negocio
        </div>
        <p className="font-mono text-[0.85rem] md:text-[0.9rem] text-[#8888a0] mb-10 max-w-[480px] leading-[1.9]">
          Todo lo que construimos apunta a un resultado concreto en tu
          operación diaria.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 border-l border-t border-white/[0.07]">
        {outcomes.map((o, i) => (
          <FadeIn
            key={i}
            delay={i * 0.06}
            className="group flex items-start gap-5 px-6 py-7 border-r border-b border-white/[0.07] relative overflow-hidden"
          >
            {/* Número fantasma */}
            <div className="absolute right-4 bottom-2 font-mono font-black text-[4.5rem] text-white/[0.022] leading-none select-none pointer-events-none">
              {o.n}
            </div>

            {/* Número pequeño */}
            <span className="font-mono text-[0.48rem] text-[#2e2e3a] tracking-[0.14em] mt-1 shrink-0 w-4">
              {o.n}
            </span>

            {/* Texto */}
            <p className="font-mono text-[0.73rem] text-[#5a5a70] leading-[1.85] group-hover:text-[#8888a0] transition-colors duration-300 relative z-10">
              {o.text}
            </p>

            {/* Acento izquierda en hover */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#5b8bff]/0 to-transparent group-hover:via-[#5b8bff]/35 transition-all duration-500" />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
