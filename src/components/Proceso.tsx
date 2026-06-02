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
    <section id="proceso" className="px-5 md:px-8 py-4 max-w-[960px] mx-auto mb-24">
      <FadeIn direction="left">
        <div className="font-mono text-[0.65rem] text-[#a78bfa] tracking-[0.18em] uppercase mb-3">
          // cómo trabajamos
        </div>
        <h2 className="text-[2rem] md:text-[2.2rem] font-extrabold tracking-[-0.03em] mb-2 leading-[1.1]">
          Del primer llamado<br />
          <span className="text-[#2e2e3a]">al sistema en producción.</span>
        </h2>
        <p className="font-mono text-[0.78rem] text-[#55556a] mb-12 max-w-[480px] leading-relaxed">
          Cuatro pasos. Sin vueltas.
        </p>
      </FadeIn>

      {/* Grid con altura fija por fila para alinear todo */}
      <div className="grid grid-cols-1 md:grid-cols-4 border border-white/[0.055]">
        {pasos.map((p, i) => (
          <FadeIn
            key={i}
            delay={i * 0.08}
            className={`bg-[#0d0d11] p-6 flex flex-col border-white/[0.055] ${
              i < 3 ? "md:border-r" : ""
            } ${i < pasos.length - 1 ? "border-b md:border-b-0" : ""}`}
          >
            {/* Número — altura fija para alinear */}
            <div className="mb-5">
              <div className="w-8 h-8 rounded-full border border-[#a78bfa]/30 flex items-center justify-center">
                <span className="font-mono text-[0.6rem] text-[#a78bfa] font-bold">{p.n}</span>
              </div>
            </div>

            {/* Contenido */}
            <div className="flex-1 flex flex-col gap-2 mb-5">
              <div className="text-[0.88rem] font-bold text-[#eaeaf0] leading-snug">{p.title}</div>
              <p className="font-mono text-[0.7rem] text-[#8888a0] leading-[1.75]">{p.desc}</p>
            </div>

            {/* Detail — siempre al fondo */}
            <div className="pt-3 border-t border-white/[0.04]">
              <span className="font-mono text-[0.58rem] text-[#a78bfa] tracking-wide whitespace-nowrap">
                → {p.detail}
              </span>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
