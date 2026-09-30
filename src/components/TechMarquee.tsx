const items = [
  "Next.js",
  "Kotlin",
  "Ktor",
  "PostgreSQL",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Vue.js",
  "Prisma",
  "MySQL",
  "Neon",
  "WhatsApp API",
  "Vercel",
  "PM2",
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
