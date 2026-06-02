import FadeIn from "./FadeIn";

const valores = [
  {
    n: "01",
    title: "Arrancamos y terminamos",
    desc: "No dejamos proyectos a medias. Si lo tomamos, lo entregamos. Eso diferencia a los que hacen software de los que hacen reuniones.",
  },
  {
    n: "02",
    title: "Hablamos directo",
    desc: "Sin tickets de soporte ni intermediarios. WhatsApp, llamada, lo que necesites. Sos el cliente, no un número de caso.",
  },
  {
    n: "03",
    title: "Código que el cliente entiende",
    desc: "Explicamos qué hace el sistema y por qué. No nos conviene que dependas de nosotros para siempre — nos conviene que quieras volver.",
  },
  {
    n: "04",
    title: "Escala cuando tiene sentido",
    desc: "Construimos pensando en crecer, sin sobrediseñar. El código de hoy tiene que aguantar el volumen de mañana sin reescribirse todo.",
  },
];

export default function Nosotros() {
  return (
    <section id="nosotros" className="px-8 py-4 max-w-[960px] mx-auto mb-24">
      <FadeIn direction="left">
        <div className="font-mono text-[0.65rem] text-[#a78bfa] tracking-[0.18em] uppercase mb-3">
          // quiénes somos
        </div>
        <h2 className="text-[2.2rem] font-extrabold tracking-[-0.03em] mb-2 leading-[1.1]">
          Un grupo chico<br />
          <span className="text-[#2e2e3a]">que hace las cosas bien.</span>
        </h2>
        <p className="font-mono text-[0.78rem] text-[#55556a] mb-14 max-w-[520px] leading-relaxed">
          Somos un grupo de San Francisco, Córdoba. Nos conocemos hace años,
          trabajamos juntos y respondemos con el nombre propio. Eso nos hace cuidar
          cada proyecto como si fuera el único.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.055] border border-white/[0.055]">
        {valores.map((v, i) => (
          <FadeIn key={i} delay={i * 0.07} className="bg-[#0d0d11] p-7 flex gap-5">
            <span className="font-mono text-[0.6rem] text-[#2e2e3a] mt-1 shrink-0 w-6">{v.n}</span>
            <div>
              <div className="text-[0.9rem] font-bold text-[#eaeaf0] mb-2">{v.title}</div>
              <p className="font-mono text-[0.72rem] text-[#8888a0] leading-[1.75]">{v.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
