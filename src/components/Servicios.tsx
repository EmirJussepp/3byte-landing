import FadeIn from "./FadeIn";

const servicios = [
  {
    n: "01",
    title: "Sistemas de gestión a medida",
    desc: "ERP, caja, socios, stock, reportes. Un sistema que se adapta a tu negocio y no al revés.",
  },
  {
    n: "02",
    title: "Productos SaaS propios",
    desc: "Plataformas multi-cliente listas para escalar, con acceso diferenciado por rol y administración centralizada.",
  },
  {
    n: "03",
    title: "Integraciones",
    desc: "Conectamos tu sistema con Tienda Nube, WhatsApp, APIs de pago y cualquier servicio externo que uses.",
  },
  {
    n: "04",
    title: "Desarrollo web",
    desc: "Sitios y aplicaciones web rápidos, responsivos y optimizados para buscadores.",
  },
];

export default function Servicios() {
  return (
    <section className="px-5 md:px-8 py-8 md:py-14 max-w-[1040px] mx-auto mb-28 md:mb-36">
      <FadeIn direction="left">
        <div className="inline-flex items-center font-mono text-[0.6rem] text-[#5b8bff] tracking-[0.18em] uppercase mb-5 px-3 py-1 rounded-none border border-[#5b8bff]/25 bg-[#5b8bff]/[0.06]">
          servicios
        </div>
        <h2 className="text-[2.4rem] md:text-[3rem] font-extrabold tracking-[-0.035em] mb-14 md:mb-16 leading-[1.05]">
          ¿Qué hacemos?
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.055] border border-white/[0.055]">
        {servicios.map((s, i) => (
          <FadeIn key={i} delay={i * 0.07} className="bg-[#0d0d11] p-7 flex gap-5">
            <span className="font-mono text-[0.6rem] text-[#2e2e3a] mt-1 shrink-0 w-6">{s.n}</span>
            <div>
              <div className="text-[0.9rem] font-bold text-[#eaeaf0] mb-2">{s.title}</div>
              <p className="font-mono text-[0.72rem] text-[#8888a0] leading-[1.75]">{s.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
