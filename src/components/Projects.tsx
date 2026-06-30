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
    image: "/projects/elite-caja.png",
    imgPos: "object-left-top",
    domain: "elitecarshopsf.duckdns.org",
    pills: ["Kotlin", "Ktor", "Vue 3", "PostgreSQL", "Tienda Nube API", "Webhooks"],
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
    image: "/projects/aero-dashboard.png",
    imgPos: "object-top",
    domain: "aerogym.duckdns.org",
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
    image: "/projects/pena-dashboard.png",
    imgPos: "object-top",
    domain: "pboquensesf.duckdns.org",
    pills: ["Kotlin", "Ktor", "Vue 3", "PostgreSQL", "JWT"],
    badge: { label: "En producción", dot: "bg-[#34d399]", text: "text-[#34d399]" },
    href: null,
  },
  {
    num: "04",
    cat: "Producto SaaS propio",
    name: "SportByte",
    desc: "Plataforma de reservas para clubes deportivos. Calendario en tiempo real, turnos fijos automáticos, confirmaciones por WhatsApp y email, caja del día y estadísticas de ocupación. Multi-admin, activación en menos de un día.",
    logo: "https://www.sportbyte.com.ar/logosolosportbyte.png",
    logoH: 38,
    image: "/projects/sportbyte.png",
    imgPos: "object-top",
    domain: "sportbyte.com.ar",
    pills: ["Next.js", "Vercel", "WhatsApp API", "Multi-admin", "Tiempo real"],
    badge: { label: "SaaS · activo", dot: "bg-[#5b8bff]", text: "text-[#5b8bff]" },
    href: "https://www.sportbyte.com.ar",
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="px-5 md:px-8 py-8 md:py-14 max-w-[1040px] mx-auto mb-28 md:mb-36">

      <FadeIn direction="left">
        <div className="inline-flex items-center font-mono text-[0.6rem] text-[#a78bfa] tracking-[0.18em] uppercase mb-5 px-3 py-1 rounded-sm border border-[#a78bfa]/25 bg-[#a78bfa]/[0.06]">
          proyectos
        </div>
        <h2 className="text-[2.4rem] md:text-[3rem] font-extrabold tracking-[-0.035em] mb-4 leading-[1.05]">
          Proyectos destacados
        </h2>
        <p className="font-mono text-[0.85rem] md:text-[0.9rem] text-[#8888a0] mb-14 md:mb-16 max-w-[520px] leading-[1.9]">
          Algunos de los sistemas que construimos y hoy están en uso real.
        </p>
      </FadeIn>

      <div className="flex flex-col gap-5 md:gap-6">
        {projects.map((p, i) => (
          <FadeIn key={i} delay={i * 0.07}>
            <div className="group rounded-md border border-white/[0.07] bg-[#0d0d11] hover:border-white/[0.14] transition-colors duration-300 p-5 md:p-7">
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-9 items-center">

                {/* Mockup tipo navegador con el screenshot real */}
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative">
                    <div
                      aria-hidden
                      className="absolute -inset-4 bg-[#5b8bff]/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    />
                    <div className="relative rounded-sm border border-white/[0.09] overflow-hidden shadow-xl shadow-black/40">
                      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/[0.06] bg-white/[0.02]">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                        <span className="ml-2 font-mono text-[0.52rem] text-[#55556a] truncate">{p.domain}</span>
                      </div>
                      <div className="relative aspect-[16/10] bg-[#08080b] overflow-hidden">
                        <Image
                          src={p.image}
                          alt={`${p.name} — captura del sistema`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 480px"
                          className={`object-cover ${p.imgPos} group-hover:scale-[1.03] transition-transform duration-700 ease-out`}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className={`inline-flex items-center gap-1.5 font-mono text-[0.58rem] font-bold mb-4 px-2.5 py-1 rounded-sm border border-white/[0.08] bg-white/[0.03] ${p.badge.text}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${p.badge.dot}`} />
                    {p.badge.label}
                  </div>

                  <div className="flex items-center gap-3 mb-3.5">
                    <div className="shrink-0 w-11 h-11 rounded-sm bg-white/[0.04] border border-white/[0.07] flex items-center justify-center overflow-hidden p-1.5">
                      <Image
                        src={p.logo}
                        alt={p.name}
                        width={44}
                        height={p.logoH}
                        className="object-contain w-full h-full"
                        unoptimized
                      />
                    </div>
                    <div>
                      <div className="font-mono text-[0.58rem] text-[#55556a] tracking-[0.1em] uppercase mb-0.5">
                        {p.num} · {p.cat}
                      </div>
                      <div className="text-[1.3rem] font-extrabold tracking-[-0.02em] text-[#eaeaf0] leading-none">
                        {p.name}
                      </div>
                    </div>
                  </div>

                  <p className="font-mono text-[0.78rem] text-[#8888a0] leading-[1.85] mb-5">
                    {p.desc}
                  </p>

                  {p.href && (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-[0.65rem] font-bold text-[#5b8bff] hover:gap-2.5 transition-all"
                    >
                      Ver sitio en vivo ↗
                    </a>
                  )}
                </div>

              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
