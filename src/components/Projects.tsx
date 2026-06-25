import Image from "next/image";
import FadeIn from "./FadeIn";

const projects = [
  {
    num: "01",
    cat: "Sistema a medida",
    name: "Elite Car-Shop",
    desc: "Gestión completa para autodetailing: ventas, compras, caja, stock con movimientos, clientes, proveedores, cuenta corriente y reportes en Excel. Integración con Tienda Nube mediante webhooks bidireccionales — el stock se sincroniza solo entre el sistema y el e-commerce.",
    logo: "https://elitecarshopsf.duckdns.org/assets/logoelite-W4eZvBtv.jpg",
    logoH: 36,
    pills: ["Kotlin", "Ktor", "Vue 3", "PostgreSQL", "Tienda Nube API", "Webhooks", "Excel export"],
    badge: { label: "En producción", dot: "bg-[#34d399]", text: "text-[#34d399]" },
    href: null,
  },
  {
    num: "02",
    cat: "Sistema a medida",
    name: "Aero Gym",
    desc: "Sistema de gestión para gimnasio. Socios, membresías, control de asistencia y pagos. Mismo núcleo técnico que Elite Car-Shop, adaptado al rubro fitness con identidad visual y flujos propios del negocio.",
    logo: "https://aerogym.duckdns.org/logoaerogym.jpg",
    logoH: 36,
    pills: ["Kotlin", "Ktor", "Vue 3", "PostgreSQL", "JWT"],
    badge: { label: "En producción", dot: "bg-[#34d399]", text: "text-[#34d399]" },
    href: null,
  },
  {
    num: "03",
    cat: "Sistema a medida",
    name: "Peña Boquense SF",
    desc: "Sistema de gestión para asociación deportiva. Control de socios, cuotas, movimientos de caja y reportes. Pensado para que la comisión directiva administre todo sin depender de terceros.",
    logo: "https://pboquensesf.duckdns.org/assets/logo_pe%C3%B1a-BetDt1YW.png",
    logoH: 40,
    pills: ["Kotlin", "Ktor", "Vue 3", "PostgreSQL", "JWT"],
    badge: { label: "En producción", dot: "bg-[#34d399]", text: "text-[#34d399]" },
    href: null,
  },
  {
    num: "04",
    cat: "Producto SaaS propio",
    name: "SportByte",
    desc: "Plataforma de reservas para clubes deportivos. Calendario en tiempo real, turnos fijos automáticos, confirmaciones por WhatsApp y email, caja del día y estadísticas de ocupación. Multi-admin, activación en menos de un día. Pádel, fútbol, tenis y más.",
    logo: "https://www.sportbyte.com.ar/logosolosportbyte.png",
    logoH: 38,
    pills: ["Next.js", "Vercel", "WhatsApp API", "Multi-admin", "Tiempo real"],
    badge: { label: "SaaS · activo", dot: "bg-[#5b8bff]", text: "text-[#5b8bff]" },
    href: "https://www.sportbyte.com.ar",
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="px-5 md:px-8 py-8 md:py-14 max-w-[960px] mx-auto mb-28 md:mb-36">

      <FadeIn direction="left">
        <div className="font-mono text-[0.65rem] text-[#a78bfa] tracking-[0.18em] uppercase mb-3">
          // proyectos
        </div>
        <h2 className="text-[2.4rem] md:text-[3rem] font-extrabold tracking-[-0.035em] mb-4 leading-[1.05]">
          Proyectos destacados
        </h2>
        <p className="font-mono text-[0.85rem] md:text-[0.9rem] text-[#8888a0] mb-14 md:mb-16 max-w-[520px] leading-[1.9]">
          Algunos de los sistemas que construimos y hoy están en uso real.
        </p>
      </FadeIn>

      <div className="flex flex-col gap-px bg-white/[0.055] border border-white/[0.055]">
        {projects.map((p, i) => (
          <FadeIn key={i} delay={i * 0.07}>
            <div className="group bg-[#0d0d11] px-8 py-7 hover:bg-[#13131a] transition-colors duration-300">

              {/* Header card */}
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="flex items-center gap-4">
                  {/* Logo */}
                  <div className="shrink-0 w-[52px] h-[52px] rounded-[4px] bg-white/[0.04] border border-white/[0.07] flex items-center justify-center overflow-hidden p-1.5">
                    <Image
                      src={p.logo}
                      alt={p.name}
                      width={48}
                      height={p.logoH}
                      className="object-contain w-full h-full"
                      unoptimized
                    />
                  </div>
                  <div>
                    <div className="font-mono text-[0.6rem] text-[#55556a] tracking-[0.1em] uppercase mb-0.5">
                      {p.num} · {p.cat}
                    </div>
                    <div className="text-[1.15rem] font-extrabold tracking-[-0.02em] text-[#eaeaf0]">
                      {p.name}
                    </div>
                  </div>
                </div>

                {/* Badge + link */}
                <div className="flex flex-col items-end gap-2 shrink-0">
                  <div className={`flex items-center gap-1.5 font-mono text-[0.6rem] font-bold ${p.badge.text}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${p.badge.dot}`} />
                    {p.badge.label}
                  </div>
                  {p.href && (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[0.6rem] text-[#55556a] hover:text-[#5b8bff] transition-colors tracking-wide"
                    >
                      Ver sitio ↗
                    </a>
                  )}
                </div>
              </div>

              {/* Descripción */}
              <p className="font-mono text-[0.76rem] text-[#8888a0] leading-[1.8] mb-5 max-w-[620px]">
                {p.desc}
              </p>

              {/* Pills */}
              <div className="flex flex-wrap gap-1.5">
                {p.pills.map((pill) => (
                  <span
                    key={pill}
                    className="font-mono text-[0.58rem] bg-white/[0.03] text-[#55556a] px-2 py-0.5 rounded-[2px] border border-white/[0.06] tracking-wide"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
