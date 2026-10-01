const techs = [
  { name: "Next.js",      icon: "https://cdn.jsdelivr.net/npm/simple-icons@13/icons/nextdotjs.svg" },
  { name: "React",        icon: "https://cdn.jsdelivr.net/npm/simple-icons@13/icons/react.svg" },
  { name: "TypeScript",   icon: "https://cdn.jsdelivr.net/npm/simple-icons@13/icons/typescript.svg" },
  { name: "Kotlin",       icon: "https://cdn.jsdelivr.net/npm/simple-icons@13/icons/kotlin.svg" },
  { name: "PostgreSQL",   icon: "https://cdn.jsdelivr.net/npm/simple-icons@13/icons/postgresql.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/npm/simple-icons@13/icons/tailwindcss.svg" },
  { name: "Vue.js",       icon: "https://cdn.jsdelivr.net/npm/simple-icons@13/icons/vuedotjs.svg" },
  { name: "Prisma",       icon: "https://cdn.jsdelivr.net/npm/simple-icons@13/icons/prisma.svg" },
  { name: "MySQL",        icon: "https://cdn.jsdelivr.net/npm/simple-icons@13/icons/mysql.svg" },
  { name: "Vercel",       icon: "https://cdn.jsdelivr.net/npm/simple-icons@13/icons/vercel.svg" },
];

export default function TechMarquee() {
  const doubled = [...techs, ...techs];

  return (
    <div className="w-full overflow-hidden border-y border-white/[0.055] py-[13px] mb-10 md:mb-28 select-none">
      <div className="flex w-fit animate-marquee">
        {doubled.map((t, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2.5 px-7 whitespace-nowrap"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={t.icon}
              alt={t.name}
              width={14}
              height={14}
              className="opacity-30 invert"
              style={{ filter: "invert(1)", opacity: 0.3 }}
            />
            <span className="font-mono text-[0.58rem] text-[#2e2e42] tracking-[0.16em] uppercase">
              {t.name}
            </span>
            <span className="w-[3px] h-[3px] bg-[#1e1e2e] inline-block shrink-0 ml-2" />
          </span>
        ))}
      </div>
    </div>
  );
}
