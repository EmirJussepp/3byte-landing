import FadeIn from "./FadeIn";

const links = [
  {
    ico: "◎",
    label: "WhatsApp",
    sub: "+54 3564 301700",
    href: "https://wa.me/543564301700",
    hoverColor: "hover:border-[#34d399] hover:text-[#34d399]",
  },
  {
    ico: "✉",
    label: "Email",
    sub: "grupo3byteapp@gmail.com",
    href: "mailto:grupo3byteapp@gmail.com",
    hoverColor: "hover:border-[#5b8bff] hover:text-[#5b8bff]",
  },
  {
    ico: "◈",
    label: "Instagram",
    sub: "@grupo3byte_",
    href: "https://instagram.com/grupo3byte_",
    hoverColor: "hover:border-[#a78bfa] hover:text-[#a78bfa]",
  },
];

export default function Contact() {
  return (
    <section id="contacto" className="px-8 py-4 max-w-[960px] mx-auto mb-20">
      <FadeIn direction="left">
        <div className="font-mono text-[0.65rem] text-[#a78bfa] tracking-[0.18em] uppercase mb-3">
          // contacto
        </div>
        <h2 className="text-[2.2rem] font-extrabold tracking-[-0.03em] mb-2 leading-[1.1]">
          Hablemos.
        </h2>
        <p className="font-mono text-[0.78rem] text-[#55556a] mb-12 max-w-[480px] leading-relaxed">
          Contanos qué necesitás construir. Respondemos rápido — somos un grupo chico, no una mesa de ayuda.
        </p>
      </FadeIn>

      <FadeIn>
        <div className="bg-[#0d0d11] border border-white/[0.055] p-10 flex gap-16 flex-wrap items-start">

          {/* Izquierda: texto */}
          <div className="flex-1 min-w-[240px]">
            <div className="font-mono text-[0.65rem] text-[#55556a] tracking-[0.1em] uppercase mb-5">
              Trabajamos con
            </div>
            <ul className="flex flex-col gap-3 font-mono text-[0.75rem] text-[#8888a0] leading-relaxed">
              {[
                "Empresas que necesitan un sistema a medida",
                "Negocios que quieren integrarse con su e-commerce",
                "Clubes, gimnasios y asociaciones",
                "Emprendedores con un producto SaaS en mente",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="text-[#a78bfa] mt-0.5 shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Derecha: links */}
          <div className="flex flex-col gap-3 min-w-[240px]">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target={l.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className={`flex items-center gap-4 px-5 py-4 border border-white/[0.07] text-[#55556a] transition-all duration-200 group ${l.hoverColor}`}
              >
                <span className="text-[1rem] leading-none">{l.ico}</span>
                <div>
                  <div className="font-mono text-[0.62rem] tracking-[0.08em] uppercase opacity-50 mb-0.5">
                    {l.label}
                  </div>
                  <div className="font-mono text-[0.78rem] font-bold">
                    {l.sub}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
