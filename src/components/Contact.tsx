import FadeIn from "./FadeIn";
import ContactForm from "./ContactForm";

const trabajamosConItems = [
  "Empresas que necesitan un sistema a medida",
  "Negocios que quieren integrarse con su e-commerce",
  "Clubes, gimnasios y asociaciones",
  "Emprendedores con un producto SaaS en mente",
];

export default function Contact() {
  return (
    <section id="contacto" className="px-5 md:px-8 py-8 md:py-14 max-w-[1040px] mx-auto mb-24 md:mb-32">

      <FadeIn direction="left">
        <div className="inline-flex items-center font-mono text-[0.6rem] text-[#a78bfa] tracking-[0.18em] uppercase mb-5 px-3 py-1 rounded-sm border border-[#a78bfa]/25 bg-[#a78bfa]/[0.06]">
          contacto
        </div>
        <h2 className="text-[2.4rem] md:text-[3rem] font-extrabold tracking-[-0.035em] mb-4 leading-[1.05]">
          Hablemos.
        </h2>
        <p className="text-[1rem] text-[#8888a0] mb-12 md:mb-14 max-w-[480px] leading-[1.8]">
          Contanos qué necesitás construir. Respondemos rápido y con ganas de entender bien lo que necesitás.
        </p>
      </FadeIn>

      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-14 items-start">

        {/* Columna izquierda — con quiénes trabajamos */}
        <FadeIn direction="left" delay={0.05}>
          <div>
            <p className="font-mono text-[0.65rem] text-[#55556a] tracking-[0.14em] uppercase mb-5">
              Trabajamos con
            </p>
            <ul className="flex flex-col gap-4">
              {trabajamosConItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[0.95rem] text-[#8888a0] leading-[1.65]">
                  <span className="text-[#a78bfa] shrink-0 mt-[3px] text-sm">→</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 pt-8 border-t border-white/[0.055]">
              <p className="font-mono text-[0.65rem] text-[#55556a] tracking-[0.14em] uppercase mb-3">
                Tiempo de respuesta
              </p>
              <div className="flex items-center gap-2.5">
                <span className="dot-live shrink-0" />
                <span className="text-[0.9rem] text-[#eaeaf0] font-medium">Menos de 24 horas</span>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Columna derecha — formulario */}
        <FadeIn delay={0.1}>
          <div className="rounded-md border border-white/[0.07] bg-[#0d0d11] p-6 md:p-8">
            <ContactForm />
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
