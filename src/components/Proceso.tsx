import FadeIn from "./FadeIn";

const pasos = [
  {
    n: "01",
    title: "Llamada de 30 min",
    desc: "Entendemos tu negocio, qué hacés y qué necesitás resolver. Una charla sin tecnicismos para arrancar con el pie derecho.",
    detail: "Sin costo · Sin compromiso",
  },
  {
    n: "02",
    title: "Propuesta en 48hs",
    desc: "Precio fijo, alcance claro y plazo real. Si no llegamos a un acuerdo, no hay ningún problema — no cobramos por cotizar.",
    detail: "Precio fijo · Sin sorpresas",
  },
  {
    n: "03",
    title: "Desarrollo con seguimiento",
    desc: "Avance visible desde el día uno. Podés ver el sistema funcionando en cada etapa, dar feedback y ajustar sobre la marcha.",
    detail: "Acceso al avance en tiempo real",
  },
  {
    n: "04",
    title: "Entrega y soporte continuo",
    desc: "Cuando el sistema sale, seguimos disponibles. Acompañamos la puesta en marcha y atendemos cualquier ajuste que surja.",
    detail: "Soporte por WhatsApp incluido",
  },
];

export default function Proceso() {
  return (
    <section id="proceso" className="px-5 md:px-8 py-8 md:py-14 max-w-[1040px] mx-auto mb-28 md:mb-36">
      <FadeIn direction="left">
        <div className="inline-flex items-center font-mono text-[0.6rem] text-[#a78bfa] tracking-[0.18em] uppercase mb-5 px-3 py-1 rounded-sm border border-[#a78bfa]/25 bg-[#a78bfa]/[0.06]">
          cómo trabajamos
        </div>
        <h2 className="text-[2.4rem] md:text-[3rem] font-extrabold tracking-[-0.035em] mb-4 leading-[1.05]">
          Del primer llamado<br />
          <span className="text-[#4a4a62]">al sistema en producción.</span>
        </h2>
        <p className="text-[1rem] text-[#8888a0] mb-14 md:mb-16 max-w-[480px] leading-[1.8]">
          Cuatro pasos. Sin vueltas.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {pasos.map((p, i) => (
          <FadeIn
            key={i}
            delay={i * 0.08}
            className="rounded-md border border-white/[0.07] bg-[#0d0d11] p-6 flex flex-col"
          >
            {/* Número */}
            <div className="mb-5">
              <div className="w-9 h-9 rounded-sm border border-[#a78bfa]/30 bg-[#a78bfa]/[0.06] flex items-center justify-center">
                <span className="font-mono text-[0.62rem] text-[#a78bfa] font-bold tracking-wider">{p.n}</span>
              </div>
            </div>

            {/* Contenido */}
            <div className="flex-1 flex flex-col gap-2.5 mb-6">
              <div className="text-[1rem] font-semibold text-[#eaeaf0] leading-snug">{p.title}</div>
              <p className="text-[0.88rem] text-[#8888a0] leading-[1.75]">{p.desc}</p>
            </div>

            {/* Detail — siempre al fondo */}
            <div className="pt-4 border-t border-white/[0.06]">
              <span className="font-mono text-[0.62rem] text-[#a78bfa] tracking-wide">
                → {p.detail}
              </span>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
