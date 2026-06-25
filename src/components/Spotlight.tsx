"use client";
import { useEffect, useRef } from "react";

/**
 * Efecto firma de 3Byte: combina el "spotlight" estilo Aceternity con el
 * dot-grid propio del sitio. La grilla de puntos se ILUMINA en azul de marca
 * alrededor del cursor (vía mask radial que sigue al mouse), más una aurora
 * animada arriba. Solo en desktop.
 */
export default function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight * 0.3;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
    };

    const loop = () => {
      if (ref.current) {
        ref.current.style.setProperty("--mx", `${x}px`);
        ref.current.style.setProperty("--my", `${y}px`);
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0, ["--mx" as string]: "50%", ["--my" as string]: "30%" } as React.CSSProperties}
    >
      {/* Aurora animada arriba (estilo premium) */}
      <div className="spotlight-aurora" />

      {/* FIRMA 3Byte: dot-grid iluminado en azul de marca bajo el cursor */}
      <div
        className="hidden md:block absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(91,139,255,0.55) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          WebkitMaskImage:
            "radial-gradient(200px circle at var(--mx) var(--my), #000 0%, transparent 62%)",
          maskImage:
            "radial-gradient(200px circle at var(--mx) var(--my), #000 0%, transparent 62%)",
        }}
      />

      {/* Glow suave del spotlight siguiendo el cursor */}
      <div
        className="hidden md:block absolute inset-0"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx) var(--my), rgba(91,139,255,0.06), transparent 70%)",
        }}
      />
    </div>
  );
}
