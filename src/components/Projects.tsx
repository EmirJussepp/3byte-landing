import Image from "next/image";
import FadeIn from "./FadeIn";

const projects = [
  {
    num: "01",
    cat: "Sistema a medida",
    name: "Elite Car-Shop",
    desc: "Gestión completa para autodetailing: ventas, compras, caja, stock, clientes, proveedores y cuenta corriente. Integración con Tienda Nube mediante webhooks bidireccionales.",
    logo: "https://elitecarshopsf.duckdns.org/assets/logoelite-W4eZvBtv.jpg",
    logoH: 36,
    badge: { label: "En producción", dot: "bg-[#34d399]", text: "text-[#34d399]" },
    href: null,
  },
  {
    num: "02",
    cat: "Sistema a medida",
    name: "Aero Gym",
    desc: "Sistema de gestión para gimnasio: socios, membresías, control de asistencia y pagos. Identidad visual y flujos propios del negocio.",
    logo: "https://aerogym.duckdns.org/logoaerogym.jpg",
    logoH: 36,
    badge: { label: "En producción", dot: "bg-[#34d399]", text: "text-[#34d399]" },
    href: null,
  },
  {
    num: "03",
    cat: "Sistema a medida",
    name: "Peña Boquense SF",
    desc: "Sistema para asociación deportiva: socios, cuotas, movimientos de caja y reportes. La comisión directiva administra todo sin depender de terceros.",
    logo: "https://pboquensesf.duckdns.org/assets/logo_pe%C3%B1a-BetDt1YW.png",
    logoH: 40,
    badge: { label: "En producción", dot: "bg-[#34d399]", text: "text-[#34d399]" },
    href: null,
  },
  {
    num: "04",
    cat: "Producto SaaS propio",
    name: "SportByte",
    desc: "Plataforma de reservas para clubes deportivos. Turnos, confirmaciones por WhatsApp, caja del día y estadísticas. Multi-admin, activación en menos de un día.",
    logo: "https://www.sportbyte.com.ar/logosolosportbyte.png",
    logoH: 38,
    badge: { label: "SaaS · activo", dot: "bg-[#5b8bff]", text: "text-[#5b8bff]" },
    href: "https://www.sportbyte.com.ar",
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="px-5 md:px-8 py-8 md:py-14 max-w-[1040px] mx-auto mb-28 md:mb-36">

      <FadeIn direction="left">
        <div className="inline-flex items-center font-mono text-[0.6rem] text-[#5b8bff] tracking-[0.18em] uppercase mb-5 px-3 py-1 rounded-none border border-[#5b8bff]/25 bg-[#5b8bff]/[0.06]">
          proyectos
        </div>
        <h2 className="text-[2.4rem] md:text-[3rem] font-extrabold tracking-[-0.035em] mb-4 leading-[1.05]">
          Proyectos destacados
        </h2>
        <p className="font-mono text-[0.85rem] md:text-[0.9rem] text-[#8888a0] mb-14 md:mb-16 max-w-[520px] leading-[1.9]">
          Algunos de los sistemas que construimos y hoy están en uso real.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.055] border border-white/[0.055]">
        {projects.map((p, i) => (
          <FadeIn key={i} delay={i * 0.07} className="bg-[#0d0d11] p-7 flex flex-col gap-5">

            {/* Header: logo + nombre + categoría */}
            <div className="flex items-center gap-3">
              <div className="shrink-0 w-10 h-10 bg-white/[0.04] border border-white/[0.07] flex items-center justify-center overflow-hidden p-1.5">
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={40}
                  height={p.logoH}
                  className="object-contain w-full h-full"
                  unoptimized
                />
              </div>
              <div>
                <div className="font-mono text-[0.55rem] text-[#55556a] tracking-[0.1em] uppercase mb-0.5">
                  {p.num} · {p.cat}
                </div>
                <div className="text-[1.05rem] font-extrabold tracking-[-0.02em] text-[#eaeaf0] leading-none">
                  {p.name}
                </div>
              </div>
            </div>

            {/* Descripción */}
            <p className="flex-1 font-mono text-[0.76rem] text-[#8888a0] leading-[1.85]">
              {p.desc}
            </p>

            {/* Footer: badge + link */}
            <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
              <div className={`inline-flex items-center gap-1.5 font-mono text-[0.56rem] font-bold px-2 py-1 border border-white/[0.08] bg-white/[0.03] ${p.badge.text}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${p.badge.dot}`} />
                {p.badge.label}
              </div>
              {p.href && (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[0.62rem] font-bold text-[#5b8bff] hover:text-[#7aa3ff] transition-colors"
                >
                  Ver sitio ↗
                </a>
              )}
            </div>

          </FadeIn>
        ))}
      </div>
    </section>
  );
}
