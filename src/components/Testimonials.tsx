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

export default function Testimonials() {
  return (
    <section className="px-5 md:px-8 py-8 md:py-14 max-w-[960px] mx-auto mb-28 md:mb-36">
      <FadeIn direction="left">
        <div className="inline-flex items-center font-mono text-[0.6rem] text-[#a78bfa] tracking-[0.18em] uppercase mb-5 px-3 py-1 rounded-full border border-[#a78bfa]/25 bg-[#a78bfa]/[0.06]">
          // clientes
        </div>
        <h2 className="text-[2.4rem] md:text-[3rem] font-extrabold tracking-[-0.035em] mb-4 leading-[1.05]">
          Lo que dicen{" "}
          <span className="text-[#2e2e3a]">quienes lo usan.</span>
        </h2>
        <p className="font-mono text-[0.85rem] md:text-[0.9rem] text-[#8888a0] mb-14 md:mb-16 leading-[1.9]">
          Negocios de San Francisco que trabajan con sistemas desarrollados por 3Byte.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.055] border border-white/[0.055]">
        {testimonials.map((t, i) => (
          <FadeIn key={i} delay={i * 0.08} className="bg-[#0d0d11] p-7 flex flex-col h-full">
            {/* Quote — crece para ocupar el espacio disponible */}
            <div className="flex-1 mb-6">
              <div className="text-[#5b8bff] text-2xl font-serif mb-4 leading-none">"</div>
              <p className="font-mono text-[0.73rem] text-[#8888a0] leading-[1.85] italic">
                {t.quote}
              </p>
            </div>

            {/* Firma — siempre al fondo */}
            <div className="flex items-center gap-3 pt-4 border-t border-white/[0.055] mt-auto">
              <div className="w-9 h-9 rounded-[3px] bg-white/[0.04] border border-white/[0.07] flex items-center justify-center overflow-hidden p-1 shrink-0">
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
                <div className="text-[0.8rem] font-bold text-[#eaeaf0]">{t.author}</div>
                <div className="font-mono text-[0.6rem] text-[#55556a] mt-0.5">{t.role}</div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
