import FadeIn from "./FadeIn";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "El sistema nos dio una visión mucho más clara del negocio. Podemos ver ventas, stock y caja en tiempo real, y la sincronización con Tienda Nube nos ahorró un montón de trabajo manual.",
    author: "Elite Car-Shop",
    role: "Autodetailing · San Francisco, Córdoba",
    logo: "https://elitecarshopsf.duckdns.org/assets/logoelite-W4eZvBtv.jpg",
  },
  {
    quote:
      "La profe arma la rutina desde el celular y se ve directo en la TV durante la clase, con el cronómetro corriendo solo. Nos ahorra mucho tiempo.",
    author: "Defyne Center",
    role: "Gimnasio · San Francisco, Córdoba",
    logo: "/defyne-logo.jpeg",
  },
  {
    quote:
      "Tener los movimientos de caja y el registro de socios en un sistema propio le dio a la comisión directiva mucho más control y tranquilidad. Es simple de usar y confiable.",
    author: "Peña Boquense SF",
    role: "Asociación deportiva · San Francisco, Córdoba",
    logo: "https://pboquensesf.duckdns.org/assets/logo_pe%C3%B1a-BetDt1YW.png",
  },
];

export default function Testimonials() {
  return (
    <section className="px-5 md:px-8 py-8 md:py-14 max-w-[1040px] mx-auto mb-8 md:mb-20">
      <FadeIn direction="left">
        <div className="inline-flex items-center font-mono text-[0.6rem] text-[#5b8bff] tracking-[0.18em] uppercase mb-5 px-3 py-1 border border-[#5b8bff]/25 bg-[#5b8bff]/[0.06]">
          clientes
        </div>
        <h2 className="text-[clamp(2.8rem,7vw,5.5rem)] font-extrabold tracking-[-0.05em] mb-12 md:mb-16 leading-[0.94]">
          Lo que dicen<br />
          <span className="bg-gradient-to-r from-[#c8daf8] to-[#5b8bff] bg-clip-text text-transparent">
            quienes lo usan.
          </span>
        </h2>
      </FadeIn>

      <div className="flex flex-col border-t border-white/[0.07]">
        {testimonials.map((t, i) => (
          <FadeIn
            key={i}
            delay={i * 0.09}
            className="group flex flex-col md:flex-row gap-8 md:gap-14 py-10 border-b border-white/[0.07] relative"
          >
            {/* Línea azul vertical en hover */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#5b8bff]/0 to-transparent group-hover:via-[#5b8bff]/35 transition-all duration-500" />

            {/* Cita — protagonista */}
            <p className="flex-1 text-[1rem] md:text-[1.08rem] text-[#8888a0] leading-[1.82] group-hover:text-[#b0b0c4] transition-colors duration-300 italic">
              "{t.quote}"
            </p>

            {/* Firma */}
            <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-3 md:w-[160px] shrink-0 md:pt-1">
              <div className="w-10 h-10 border border-white/[0.08] flex items-center justify-center overflow-hidden p-1 shrink-0 bg-white/[0.02]">
                <Image
                  src={t.logo}
                  alt={t.author}
                  width={40}
                  height={40}
                  className="object-contain w-full h-full"
                  unoptimized
                />
              </div>
              <div>
                <div className="text-[0.82rem] font-bold text-[#c0c0d8] leading-tight group-hover:text-white transition-colors">
                  {t.author}
                </div>
                <div className="font-mono text-[0.6rem] text-[#44445a] mt-1 leading-snug">
                  {t.role}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
