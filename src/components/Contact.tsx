import FadeIn from "./FadeIn";
import ContactForm from "./ContactForm";
import { JSX } from "react";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 shrink-0">
    <rect x="2.25" y="2.25" width="19.5" height="19.5" rx="5.25" strokeLinecap="round" strokeLinejoin="round" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
    <circle cx="17.25" cy="6.75" r="0.75" fill="currentColor" stroke="none" />
  </svg>
);

const links: { icon: JSX.Element; label: string; sub: string; href: string; hoverColor: string }[] = [
  {
    icon: <WhatsAppIcon />,
    label: "WhatsApp",
    sub: "+54 3564 301700",
    href: "https://wa.me/543564301700",
    hoverColor: "hover:border-[#34d399] hover:text-[#34d399]",
  },
  {
    icon: <EmailIcon />,
    label: "Email",
    sub: "grupo3byteapp@gmail.com",
    href: "mailto:grupo3byteapp@gmail.com",
    hoverColor: "hover:border-[#5b8bff] hover:text-[#5b8bff]",
  },
  {
    icon: <InstagramIcon />,
    label: "Instagram",
    sub: "@grupo3byte_",
    href: "https://instagram.com/grupo3byte_",
    hoverColor: "hover:border-[#a78bfa] hover:text-[#a78bfa]",
  },
];

export default function Contact() {
  return (
    <section id="contacto" className="px-5 md:px-8 py-4 max-w-[960px] mx-auto mb-20">
      <FadeIn direction="left">
        <div className="font-mono text-[0.65rem] text-[#a78bfa] tracking-[0.18em] uppercase mb-3">
          // contacto
        </div>
        <h2 className="text-[2rem] md:text-[2.2rem] font-extrabold tracking-[-0.03em] mb-2 leading-[1.1]">
          Hablemos.
        </h2>
        <p className="font-mono text-[0.78rem] text-[#55556a] mb-12 max-w-[480px] leading-relaxed">
          Contanos qué necesitás construir. Respondemos rápido y con ganas de entender bien lo que necesitás.
        </p>
      </FadeIn>

      <div className="flex flex-col gap-px">

        <FadeIn>
          <div className="bg-[#0d0d11] border border-white/[0.055] p-6 md:p-8 mb-px">
            <div className="font-mono text-[0.6rem] text-[#55556a] tracking-[0.1em] uppercase mb-6">
              Escribinos directamente
            </div>
            <ContactForm />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="bg-[#0d0d11] border border-white/[0.055] p-6 md:p-8 flex flex-wrap gap-8 items-start">

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
                  {l.icon}
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
