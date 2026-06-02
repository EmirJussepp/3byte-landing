import FadeIn from "./FadeIn";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { value: 4, suffix: "", label: "Sistemas en producción" },
  { value: 3, suffix: "+", label: "Años desarrollando software" },
  { value: 100, suffix: "%", label: "Proyectos entregados" },
  { value: null, label: "Disponibles para nuevos proyectos" },
];

export default function Stats() {
  return (
    <div className="border-t border-b border-white/[0.055] mb-24">
      <div className="max-w-[960px] mx-auto grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <FadeIn
            key={i}
            delay={i * 0.06}
            className="px-6 md:px-8 py-6 border-r border-white/[0.055] last:border-r-0 border-b md:border-b-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r"
          >
            <div className="font-mono font-bold text-[1.8rem] text-[#eaeaf0] leading-none mb-1.5">
              {s.value !== null ? (
                <AnimatedCounter to={s.value} suffix={s.suffix ?? ""} />
              ) : (
                <span className="flex items-center gap-2">
                  <span className="dot-live" />
                  <span className="text-[1rem] text-[#34d399]">ON</span>
                </span>
              )}
            </div>
            <div className="font-mono text-[0.6rem] text-[#55556a] uppercase tracking-[0.07em] leading-snug">
              {s.label}
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
