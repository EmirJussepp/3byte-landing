"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Props {
  images: string[];
  title: string;
  onClose: () => void;
}

export default function ProjectModal({ images, title, onClose }: Props) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setCurrent((c) => (c + 1) % images.length);
      if (e.key === "ArrowLeft") setCurrent((c) => (c - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [images.length, onClose]);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-[#05050a]/90 backdrop-blur-md" />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.94 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-[420px] flex flex-col gap-4"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[0.58rem] text-[#5b8bff] tracking-[0.16em] uppercase">{title}</span>
              <span className="font-mono text-[0.55rem] text-[#2e2e3a]">{current + 1} / {images.length}</span>
            </div>
            <button
              onClick={onClose}
              className="text-[#55556a] hover:text-[#eaeaf0] transition-colors p-1"
              aria-label="Cerrar"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
                <line x1="2" y1="2" x2="14" y2="14"/><line x1="14" y1="2" x2="2" y2="14"/>
              </svg>
            </button>
          </div>

          {/* Imagen */}
          <div className="relative overflow-hidden border border-white/[0.08]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
              >
                <Image
                  src={images[current]}
                  alt={`${title} — imagen ${current + 1}`}
                  width={420}
                  height={560}
                  className="w-full h-auto object-cover"
                  unoptimized
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controles */}
          {images.length > 1 && (
            <div className="flex items-center justify-between">
              <button
                onClick={prev}
                className="font-mono text-[0.6rem] text-[#55556a] hover:text-[#eaeaf0] tracking-[0.1em] uppercase transition-colors flex items-center gap-2"
              >
                ← Anterior
              </button>
              <div className="flex gap-1.5">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-1.5 h-1.5 transition-colors ${i === current ? "bg-[#5b8bff]" : "bg-[#2e2e3a]"}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="font-mono text-[0.6rem] text-[#55556a] hover:text-[#eaeaf0] tracking-[0.1em] uppercase transition-colors flex items-center gap-2"
              >
                Siguiente →
              </button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
