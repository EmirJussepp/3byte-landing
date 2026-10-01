"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { n: "+10",    label: "Sistemas\nen producción" },
  { n: "3",      label: "Años de\nexperiencia" },
  { n: "24hs",   label: "Tiempo de\nrespuesta" },
  { n: "100%",   label: "Código\npropio" },
];

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px" });

  return (
    <div
      ref={ref}
      className="max-w-[1040px] mx-auto px-5 md:px-8 mb-8 md:mb-20"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 border border-white/[0.08]">
        {stats.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
            className="px-7 py-8 border-r border-b border-white/[0.08] last:border-r-0 md:border-b-0 flex flex-col gap-3"
          >
            <div className="font-mono font-extrabold text-[2.8rem] md:text-[3.5rem] text-[#eaeaf0] leading-none tracking-[-0.04em]">
              <span className="text-[#5b8bff]">{s.n.startsWith("+") ? "+" : ""}</span>
              {s.n.startsWith("+") ? s.n.slice(1) : s.n}
            </div>
            <div className="font-mono text-[0.58rem] text-[#55556a] uppercase tracking-[0.14em] leading-[1.7] whitespace-pre-line">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
