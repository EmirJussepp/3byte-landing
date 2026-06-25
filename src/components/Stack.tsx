import FadeIn from "./FadeIn";

const categories = [
  {
    label: "Backend",
    items: ["Kotlin", "Ktor", "Exposed ORM", "JWT", "REST + Webhooks"],
  },
  {
    label: "Frontend",
    items: ["Vue 3", "Next.js 15", "TypeScript", "Tailwind CSS", "Vite"],
  },
  {
    label: "Datos & Deploy",
    items: ["PostgreSQL", "Prisma", "Vercel", "VPS propio", "Git / GitHub"],
  },
  {
    label: "Integraciones",
    items: ["Tienda Nube API", "WhatsApp API", "Resend (email)", "Webhooks"],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="px-5 md:px-8 py-8 md:py-14 max-w-[960px] mx-auto mb-28 md:mb-36">
      <FadeIn direction="left">
        <div className="font-mono text-[0.65rem] text-[#a78bfa] tracking-[0.18em] uppercase mb-3">
          // stack técnico
        </div>
        <h2 className="text-[2.4rem] md:text-[3rem] font-extrabold tracking-[-0.035em] mb-4 leading-[1.05]">
          Con qué trabajamos
        </h2>
        <p className="font-mono text-[0.85rem] md:text-[0.9rem] text-[#8888a0] mb-14 md:mb-16 max-w-[520px] leading-[1.9]">
          Herramientas que conocemos profundo, no las que están de moda.
        </p>
      </FadeIn>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.055] border border-white/[0.055]">
        {categories.map((cat, i) => (
          <FadeIn key={i} delay={i * 0.07} className="bg-[#0d0d11] p-6">
            <div className="font-mono text-[0.6rem] text-[#a78bfa] tracking-[0.12em] uppercase mb-4">
              {cat.label}
            </div>
            <ul className="flex flex-col gap-2.5">
              {cat.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#55556a] shrink-0" />
                  <span className="font-mono text-[0.72rem] text-[#8888a0]">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
