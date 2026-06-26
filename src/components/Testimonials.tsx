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
      "Nos ayudó a tener todo el tema de socios y pagos mucho más organizado. Hoy sabemos el estado de cada socio al instante y eso nos simplifica bastante la operación diaria.",
    author: "Aero Gym",
    role: "Gimnasio · San Francisco, Córdoba",
    logo: "https://aerogym.duckdns.org/logoaerogym.jpg",
  },
  {
    quote:
      "Tener los movimientos de caja y el registro de socios en un sistema propio le dio a la comisión directiva mucho más control y tranquilidad. Es simple de usar y confiable.",
    author: "Peña Boquense SF",
    role: "Asociación deportiva · San Francisco, Córdoba",
    logo: "https://pboquensesf.duckdns.org/assets/logo_pe%C3%B1a-BetDt1YW.png",
  },
];

const QuoteIcon = () => (
  <svg viewBox="0 0 32 24" fill="none" className="w-7 h-5 shrink-0" aria-hidden="true">
    <path
      d="M0 24V14.4C0 6.24 4.8 1.44 14.4 0l1.92 3.12C11.04 4.32 8.4 7.2 7.68 12H14.4V24H0ZM17.6 24V14.4C17.6 6.24 22.4 1.44 32 0l1.92 3.12C28.64 4.32 26 7.2 25.28 12H32V24H17.6Z"
      fill="#5b8bff"
      fillOpacity="0.35"
    />
  </svg>
);

export default function Testimonials() {
  return (
    <section className="px-5 md:px-8 py-8 md:py-14 max-w-[1040px] mx-auto mb-28 md:mb-36">
      <FadeIn direction="left">
        <div className="inline-flex items-center font-mono text-[0.6rem] text-[#a78bfa] tracking-[0.18em] uppercase mb-5 px-3 py-1 rounded-full border border-[#a78bfa]/25 bg-[#a78bfa]/[0.06]">
          clientes
        </div>
        <h2 className="text-[2.4rem] md:text-[3rem] font-extrabold tracking-[-0.035em] mb-4 leading-[1.05]">
          Lo que dicen{" "}
          <span className="text-[#4a4a62]">quienes lo usan.</span>
        </h2>
        <p className="text-[1rem] text-[#8888a0] mb-14 md:mb-16 leading-[1.8]">
          Negocios de San Francisco que trabajan con sistemas desarrollados por 3Byte.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        {testimonials.map((t, i) => (
          <FadeIn
            key={i}
            delay={i * 0.08}
            className="rounded-2xl border border-white/[0.07] bg-[#0d0d11] p-6 md:p-7 flex flex-col h-full"
          >
            {/* Comilla SVG real */}
            <div className="mb-5">
              <QuoteIcon />
            </div>

            {/* Quote — texto legible en font-syne */}
            <p className="flex-1 text-[0.95rem] text-[#b8b8cc] leading-[1.8] mb-7">
              {t.quote}
            </p>

            {/* Firma */}
            <div className="flex items-center gap-3 pt-5 border-t border-white/[0.06]">
              <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center overflow-hidden p-1 shrink-0">
                <Image
                  src={t.logo}
                  alt={t.author}
                  width={36}
                  height={36}
                  className="object-contain w-full h-full"
                  unoptimized
                />
              </div>
              <div>
                <div className="text-[0.88rem] font-semibold text-[#eaeaf0] leading-tight">{t.author}</div>
                <div className="text-[0.75rem] text-[#55556a] mt-0.5 leading-tight">{t.role}</div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
