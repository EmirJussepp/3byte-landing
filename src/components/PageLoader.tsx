"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const done = () => setTimeout(() => setVisible(false), 350);
    if (document.readyState === "complete") {
      done();
    } else {
      window.addEventListener("load", done, { once: true });
      const fallback = setTimeout(() => setVisible(false), 3500);
      return () => clearTimeout(fallback);
    }
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.65, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#08080b] flex flex-col items-center justify-center gap-5 select-none"
        >
          <div className="relative flex items-center justify-center">
            {/* Anillo base — muy tenue */}
            <svg className="absolute" width={116} height={116} viewBox="0 0 116 116">
              <circle cx="58" cy="58" r="52" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
            </svg>

            {/* Arco girando */}
            <svg
              className="absolute animate-spin"
              width={116}
              height={116}
              viewBox="0 0 116 116"
              style={{ animationDuration: "1.4s", animationTimingFunction: "linear" }}
            >
              <defs>
                <linearGradient id="arc-g" x1="0%" y1="0%" x2="80%" y2="100%">
                  <stop offset="0%" stopColor="#5b8bff" stopOpacity="0" />
                  <stop offset="100%" stopColor="#5b8bff" stopOpacity="1" />
                </linearGradient>
              </defs>
              <circle
                cx="58" cy="58" r="52"
                fill="none"
                stroke="url(#arc-g)"
                strokeWidth="1.5"
                strokeDasharray="65 262"
                strokeLinecap="round"
              />
            </svg>

            {/* Logo */}
            <div
              className="w-[76px] h-[76px] rounded-full bg-[#0c0c18] border border-white/[0.07] flex items-center justify-center"
              style={{ boxShadow: "0 0 32px rgba(91,139,255,0.07)" }}
            >
              <Image
                src="https://pboquensesf.duckdns.org/assets/logochico-DCu-UpDX.png"
                alt="3Byte"
                width={42}
                height={42}
                className="object-contain"
                unoptimized
              />
            </div>
          </div>

          <span className="font-mono text-[0.52rem] text-white/18 tracking-[0.28em] uppercase">
            grupo3byte
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
