import FadeIn from "./FadeIn";

const valores = [
  {
    n: "01",
    title: "Comprometidos con cada proyecto",
    desc: "Cuando tomamos un proyecto, lo llevamos hasta el final. Nos involucramos desde el día uno y trabajamos para que el resultado sea algo que realmente sirva.",
  },
  {
    n: "02",
    title: "Comunicación directa y clara",
    desc: "Preferimos el contacto directo. Respondemos rápido, explicamos bien y mantenemos al cliente al tanto de cada avance sin vueltas innecesarias.",
  },
  {
    n: "03",
    title: "Código limpio y entendible",
    desc: "Escribimos software pensando en que alguien lo va a mantener y mejorar. Documentamos lo que hacemos y explicamos las decisiones técnicas.",
  },
  {
    n: "04",
    title: "Pensando en el crecimiento",
    desc: "Diseñamos los sistemas para que puedan crecer con el negocio. Lo que construimos hoy tiene que seguir funcionando bien cuando la escala cambie.",
  },
];

export default function Nosotros() {
  return (
    <section id="nosotros" className="px-5 md:px-8 py-8 md:py-14 max-w-[960px] mx-auto mb-28 md:mb-36">
      <FadeIn direction="left">
        <div className="inline-flex items-center font-mono text-[0.6rem] text-[#5b8bff] tracking-[0.18em] uppercase mb-5 px-3 py-1 rounded-none border border-[#5b8bff]/25 bg-[#5b8bff]/[0.06]">
          quiénes somos
        </div>
        <h2 className="text-[2.4rem] md:text-[3rem] font-extrabold tracking-[-0.035em] mb-4 leading-[1.05]">
          Un grupo pequeño<br />
          <span className="text-[#2e2e3a]">que hace las cosas bien.</span>
        </h2>
        <p className="font-mono text-[0.85rem] md:text-[0.9rem] text-[#8888a0] mb-14 md:mb-16 max-w-[520px] leading-[1.9]">
          Somos un equipo de San Francisco, Córdoba. Nos conocemos hace años
          y trabajamos juntos en cada proyecto. Eso nos permite cuidar los
          detalles y responder con nombre propio.
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
