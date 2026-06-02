const items = [
  { label: "Sistemas en producción" },
  { label: "Experiencia en software" },
  { label: "Proyectos entregados" },
  { label: "Disponibles para proyectos", live: true },
];

export default function Stats() {
  return (
    <div className="border-t border-b border-white/[0.055] mb-24">
      <div className="max-w-[960px] mx-auto flex flex-wrap md:flex-nowrap">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex-1 min-w-[50%] md:min-w-0 px-6 md:px-8 py-4 border-r border-white/[0.055] last:border-r-0 border-b md:border-b-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r flex items-center gap-2.5 h-12"
          >
            {item.live && <span className="dot-live shrink-0" />}
            <span className="font-mono text-[0.6rem] text-[#55556a] uppercase tracking-[0.07em] leading-none whitespace-nowrap">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
