const stats = [
  { n: "4", label: "Sistemas en producción" },
  { n: "100%", label: "Código propio, sin templates" },
  { n: "<1 sem", label: "Del primer llamado al primer commit" },
  { live: true, label: "Disponibles para nuevos proyectos" },
];

export default function StatsBar() {
  return (
    <div className="flex border-t border-b border-white/[0.055] mb-24">
      {stats.map((s, i) => (
        <div
          key={i}
          className="flex-1 px-7 py-5 border-r border-white/[0.055] last:border-r-0"
        >
          <div className="font-mono font-bold text-[1.6rem] text-[#eaeaf0] leading-none mb-1.5">
            {s.live ? (
              <span className="flex items-center gap-2">
                <span className="dot-live" />
                <span className="text-[1rem] text-[#34d399]">ON</span>
              </span>
            ) : (
              <span>
                {s.n}
              </span>
            )}
          </div>
          <div className="font-mono text-[0.62rem] text-[#55556a] uppercase tracking-[0.07em] leading-snug">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
