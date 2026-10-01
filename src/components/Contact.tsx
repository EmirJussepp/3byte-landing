import FadeIn from "./FadeIn";

const trabajamosConItems = [
  "Empresas que necesitan un sistema a medida",
  "Negocios que quieren integrarse con su e-commerce",
  "Clubes, gimnasios y asociaciones",
  "Emprendedores con un producto SaaS en mente",
];

const canales = [
  {
    label: "Instagram",
    handle: "@grupo3byte_",
    href: "https://instagram.com/grupo3byte_",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4.5"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: "Email",
    handle: "grupo3byteapp@gmail.com",
    href: "mailto:grupo3byteapp@gmail.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
        <rect x="2" y="4" width="20" height="16"/>
        <polyline points="2,4 12,13 22,4"/>
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contacto" className="px-5 md:px-8 py-8 md:py-14 max-w-[1040px] mx-auto mb-12 md:mb-32">

      <FadeIn direction="left">
        <div className="inline-flex items-center font-mono text-[0.6rem] text-[#5b8bff] tracking-[0.18em] uppercase mb-5 px-3 py-1 rounded-none border border-[#5b8bff]/25 bg-[#5b8bff]/[0.06]">
          contacto
        </div>
        <h2 className="text-[2.4rem] md:text-[3rem] font-extrabold tracking-[-0.035em] mb-4 leading-[1.05]">
          Hablemos.
        </h2>
        <p className="text-[1rem] text-[#8888a0] mb-12 md:mb-14 max-w-[480px] leading-[1.8]">
          Contanos qué necesitás construir. Respondemos rápido y con ganas de entender bien lo que necesitás.
        </p>
      </FadeIn>

      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-14 items-start">

        {/* Columna izquierda */}
        <FadeIn direction="left" delay={0.05}>
          <div>
            <p className="font-mono text-[0.65rem] text-[#55556a] tracking-[0.14em] uppercase mb-5">
              Trabajamos con
            </p>
            <ul className="flex flex-col gap-4">
              {trabajamosConItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[0.95rem] text-[#8888a0] leading-[1.65]">
                  <span className="text-[#5b8bff] shrink-0 mt-[3px] text-sm">→</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 pt-8 border-t border-white/[0.055]">
              <p className="font-mono text-[0.65rem] text-[#55556a] tracking-[0.14em] uppercase mb-3">
                Tiempo de respuesta
              </p>
              <span className="text-[0.9rem] text-[#eaeaf0] font-medium">Menos de 24 horas</span>
            </div>
          </div>
        </FadeIn>

        {/* Columna derecha — canales directos */}
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-4">

            {/* WhatsApp CTA principal */}
            <a
              href="https://wa.me/543512762415?text=Hola%2C%20los%20contacto%20desde%20grupo3byte.com.%20Quisiera%20hablar%20sobre%20un%20proyecto."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between w-full px-7 py-6 bg-[#5b8bff] hover:bg-[#4a7aee] transition-colors"
            >
              <div>
                <div className="font-extrabold text-white text-[1.05rem] tracking-[-0.01em] leading-tight mb-0.5">
                  Escribinos por WhatsApp
                </div>
                <div className="font-mono text-[0.65rem] text-white/60 tracking-[0.08em]">
                  +54 351 276-2415
                </div>
              </div>
              <svg
                width="22" height="22" viewBox="0 0 24 24" fill="none"
                stroke="white" strokeWidth="1.5" strokeLinecap="square"
                className="shrink-0 opacity-70 group-hover:translate-x-1 transition-transform"
              >
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="13,6 19,12 13,18"/>
              </svg>
            </a>

            {/* Canales secundarios */}
            <div className="grid grid-cols-2 gap-px bg-white/[0.055] border border-white/[0.055]">
              {canales.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-[#0d0d11] px-5 py-5 flex flex-col gap-3 hover:bg-[#111118] transition-colors"
                >
                  <span className="text-[#5b8bff] opacity-60 group-hover:opacity-100 transition-opacity">
                    {c.icon}
                  </span>
                  <div>
                    <div className="font-mono text-[0.55rem] text-[#55556a] tracking-[0.12em] uppercase mb-1">
                      {c.label}
                    </div>
                    <div className="font-mono text-[0.7rem] text-[#8888a0] group-hover:text-[#eaeaf0] transition-colors truncate">
                      {c.handle}
                    </div>
                  </div>
                </a>
              ))}
            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}
