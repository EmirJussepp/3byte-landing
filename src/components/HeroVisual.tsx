"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
  { src: "/projects/sportbyte.png",          url: "sportbyte.com.ar" },
  { src: "/projects/pena-dashboard-new.jpg", url: "pboquensesf.duckdns.org" },
  { src: "/projects/elite-dashboard.jpg",    url: "elitecarshopsf.duckdns.org" },
  { src: "/projects/elite-login.jpg",        url: "elitecarshopsf.duckdns.org · login" },
];

export default function HeroVisual() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full max-w-[480px] mx-auto lg:mx-0">
      {/* Glow */}
      <div aria-hidden className="absolute -inset-8 bg-[#5b8bff]/[0.05] blur-[60px] pointer-events-none" />

      {/* Browser mockup */}
      <div className="relative border border-white/[0.09] overflow-hidden shadow-2xl shadow-black/50">

        {/* Chrome bar */}
        <div className="bg-[#0f0f16] border-b border-white/[0.07] px-3 py-2.5 flex items-center gap-2.5">
          <div className="flex gap-1.5 shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-white/[0.07]" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/[0.07]" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/[0.07]" />
          </div>
          <div className="flex-1 bg-white/[0.04] border border-white/[0.06] px-2.5 py-[5px] font-mono text-[0.52rem] text-[#33334a] truncate">
            <AnimatePresence mode="wait">
              <motion.span
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                {slides[current].url}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        {/* Screenshot */}
        <div className="relative aspect-[16/10] bg-[#0d0d11]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={slides[current].src}
                alt={slides[current].url}
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover object-top"
                unoptimized
                priority
              />
              <div className="absolute inset-0 bg-[#08080b]/15" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Dots navegación */}
      <div className="flex gap-2 justify-center mt-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 ${i === current ? "w-4 h-1.5 bg-[#5b8bff]" : "w-1.5 h-1.5 bg-[#2e2e3a]"}`}
          />
        ))}
      </div>

      {/* Badge */}
      <div className="absolute -bottom-5 -right-3 sm:-right-5 border border-white/[0.09] bg-[#13131a]/95 backdrop-blur-xl px-4 py-3 shadow-xl shadow-black/40">
        <div className="font-mono text-[0.55rem] text-[#55556a] tracking-[0.1em] uppercase mb-0.5">Sistemas en uso</div>
        <div className="font-mono text-[1.1rem] font-bold text-[#eaeaf0] leading-none">
          <span className="text-[#5b8bff]">+</span>10
        </div>
      </div>
    </div>
  );
}
