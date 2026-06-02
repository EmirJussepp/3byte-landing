import FadeIn from "./FadeIn";
import ContactForm from "./ContactForm";

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
          Contanos qué necesitás construir. Respondemos rápido y con ganas de entender bien lo que necesitás.
        </p>
      </FadeIn>

      <div className="flex flex-col gap-px">

        {/* Formulario */}
        <FadeIn>
          <div className="bg-[#0d0d11] border border-white/[0.055] p-8 mb-px">
            <div className="font-mono text-[0.6rem] text-[#55556a] tracking-[0.1em] uppercase mb-6">
              Escribinos directamente
            </div>
            <ContactForm />
          </div>
        </FadeIn>

        {/* Links directos */}
        <FadeIn delay={0.1}>
          <div className="bg-[#0d0d11] border border-white/[0.055] p-8 flex flex-wrap gap-8 items-start">

            {/* Trabajamos con */}
            <div className="flex-1 min-w-[200px]">
              <div className="font-mono text-[0.6rem] text-[#55556a] tracking-[0.1em] uppercase mb-4">
                Trabajamos con
              </div>
              <ul className="flex flex-col gap-2.5 font-mono text-[0.72rem] text-[#8888a0] leading-relaxed">
                {[
                  "Empresas que necesitan un sistema a medida",
                  "Negocios que quieren integrarse con su e-commerce",
                  "Clubes, gimnasios y asociaciones",
                  "Emprendedores con un producto SaaS en mente",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[#a78bfa] shrink-0 mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-2.5 min-w-[220px]">
              <div className="font-mono text-[0.6rem] text-[#55556a] tracking-[0.1em] uppercase mb-1.5">
                O contactanos por
              </div>
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target={l.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 px-4 py-3 border border-white/[0.07] text-[#55556a] transition-all duration-200 ${l.hoverColor}`}
                >
                  <span className="text-[0.9rem] leading-none">{l.ico}</span>
                  <div>
                    <div className="font-mono text-[0.58rem] tracking-[0.08em] uppercase opacity-50 mb-0.5">
                      {l.label}
                    </div>
                    <div className="font-mono text-[0.72rem] font-bold">
                      {l.sub}
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
