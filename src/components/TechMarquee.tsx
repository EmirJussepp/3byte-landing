const items = [
  "Hablás directo con quien escribe el código",
  "De San Francisco, Córdoba",
  "No hacemos mockups — hacemos software",
  "Sistemas en uso real, no en portfolio",
  "Del primer llamado al primer commit",
  "Un equipo pequeño que entiende tu negocio",
  "Sin agencias ni intermediarios",
  "Respondemos en menos de 24 hs",
];

export default function TechMarquee() {
  const doubled = [...items, ...items];

  return (
    <div className="w-full overflow-hidden border-y border-white/[0.055] py-[14px] mb-20 md:mb-28 select-none">
      <div className="flex w-fit animate-marquee">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-5 px-5 font-mono text-[0.6rem] text-[#33334a] tracking-[0.16em] uppercase whitespace-nowrap"
          >
            {item}
            <span className="w-[3px] h-[3px] bg-[#252535] inline-block shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
