import FadeIn from "./FadeIn";
import Image from "next/image";

const diferenciales = [
  {
    title: "Asesoramiento operativo",
    desc: "Recomendaciones para mejorar la organización y los procesos internos, más allá del software que entregamos.",
  },
  {
    title: "Experiencia de mercado",
    desc: "Observaciones y criterios construidos desde el trabajo con distintas empresas, rubros y actividades.",
  },
  {
    title: "Optimización continua",
    desc: "Identificamos oportunidades de mejora y adaptación a medida que el negocio evoluciona.",
  },
];

const valores = [
  {
    title: "Comprometidos con cada proyecto",
    desc: "Cuando tomamos un proyecto, lo llevamos hasta el final. Nos involucramos desde el día uno y trabajamos para que el resultado sea algo que realmente sirva.",
  },
  {
    title: "Comunicación directa y clara",
    desc: "Preferimos el contacto directo. Respondemos rápido, explicamos bien y mantenemos al cliente al tanto de cada avance sin vueltas innecesarias.",
  },
  {
    title: "Código limpio y entendible",
    desc: "Escribimos software pensando en que alguien lo va a mantener y mejorar. Documentamos lo que hacemos y explicamos las decisiones técnicas.",
  },
  {
    title: "Pensando en el crecimiento",
    desc: "Diseñamos los sistemas para que puedan crecer con el negocio. Lo que construimos hoy tiene que seguir funcionando bien cuando la escala cambie.",
  },
];

export default function Nosotros() {
  return (
    <section id="nosotros" className="px-5 md:px-8 py-8 md:py-14 max-w-[960px] mx-auto mb-8 md:mb-20">
      <FadeIn direction="left">
        <div className="inline-flex items-center font-mono text-[0.6rem] text-[#5b8bff] tracking-[0.18em] uppercase mb-5 px-3 py-1 rounded-none border border-[#5b8bff]/25 bg-[#5b8bff]/[0.06]">
          quiénes somos
        </div>
        <h2 className="text-[clamp(2.8rem,7vw,5.5rem)] font-extrabold tracking-[-0.05em] mb-4 leading-[0.94]">
          Un grupo pequeño<br />
          <span className="bg-gradient-to-r from-[#c8daf8] to-[#5b8bff] bg-clip-text text-transparent">
            que hace las cosas bien.
          </span>
        </h2>
        <p className="font-mono text-[0.85rem] md:text-[0.9rem] text-[#8888a0] mb-10 max-w-[520px] leading-[1.9]">
          Somos un equipo de San Francisco, Córdoba. Nos conocemos hace años
          y trabajamos juntos en cada proyecto. Eso nos permite cuidar los
          detalles y responder con nombre propio.
        </p>
      </FadeIn>

      {/* Bloque de imágenes: oficina + comentarios */}
      <FadeIn>
        {/* Oficina — banner superior */}
        <div className="relative w-full overflow-hidden border border-b-0 border-white/[0.07]">
          <Image
            src="/oficina-3byte.jpg"
            alt="Espacio de trabajo de Grupo 3Byte"
            width={960}
            height={480}
            className="w-full h-[140px] md:h-[180px] object-cover object-[center_30%]"
            unoptimized
          />
          <div className="absolute inset-0 bg-[#09090c]/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090c] via-transparent to-[#09090c]/40" />
        </div>

        {/* Comentarios reales — dos capturas pegadas */}
        <div className="grid grid-cols-2 border border-white/[0.07] mb-px">
          <div className="relative overflow-hidden border-r border-white/[0.07]">
            <Image
              src="/social-1.jpg"
              alt="Comentarios de clientes"
              width={480}
              height={700}
              className="w-full h-[220px] md:h-[290px] object-cover object-top"
              unoptimized
            />
            <div className="absolute inset-0 bg-[#09090c]/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090c]/60 via-transparent to-[#09090c]/10" />
          </div>
          <div className="relative overflow-hidden">
            <Image
              src="/social-2.jpg"
              alt="Comentarios de clientes"
              width={480}
              height={700}
              className="w-full h-[220px] md:h-[290px] object-cover object-top"
              unoptimized
            />
            <div className="absolute inset-0 bg-[#09090c]/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090c]/60 via-transparent to-[#09090c]/10" />
          </div>
        </div>
      </FadeIn>

      <div className="flex flex-col border-t border-white/[0.07]">
        {valores.map((v, i) => (
          <FadeIn
            key={i}
            delay={i * 0.07}
            className="group flex flex-col md:flex-row md:items-start gap-3 md:gap-16 py-8 border-b border-white/[0.07] relative"
          >
            {/* Acento hover izquierda */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#5b8bff]/0 to-transparent group-hover:via-[#5b8bff]/40 transition-all duration-500" />

            <h3 className="md:w-[300px] shrink-0 text-[1.15rem] md:text-[1.3rem] font-bold tracking-[-0.03em] text-[#9090a8] group-hover:text-white transition-colors duration-250 leading-snug">
              {v.title}
            </h3>
            <p className="flex-1 font-mono text-[0.75rem] text-[#4a4a60] leading-[1.92] group-hover:text-[#7a7a90] transition-colors duration-300 md:pt-1">
              {v.desc}
            </p>
          </FadeIn>
        ))}
      </div>

      {/* También brindamos */}
      <FadeIn>
        <div className="mt-14 md:mt-16 border-t border-white/[0.07] pt-10">
          <div className="font-mono text-[0.6rem] text-[#5b8bff] tracking-[0.18em] uppercase mb-8 px-3 py-1 border border-[#5b8bff]/25 bg-[#5b8bff]/[0.06] inline-flex">
            también brindamos
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-t border-white/[0.07]">
            {diferenciales.map((d, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div className="group border-r border-b border-white/[0.07] px-6 py-7 relative overflow-hidden">
                  {/* Acento hover */}
                  <div className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full bg-gradient-to-r from-[#a78bfa]/50 to-transparent transition-all duration-500 ease-out" />

                  <h4 className="text-[0.95rem] font-bold tracking-[-0.02em] text-[#9090a8] group-hover:text-white transition-colors duration-250 leading-snug mb-3">
                    {d.title}
                  </h4>
                  <p className="font-mono text-[0.68rem] text-[#44445a] leading-[1.9] group-hover:text-[#6a6a80] transition-colors duration-300">
                    {d.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
