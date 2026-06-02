"use client";
import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    // Solo en desktop
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!visible) setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const onDown = () => setClicked(true);
    const onUp = () => setClicked(false);

    const onHoverIn = () => setHovered(true);
    const onHoverOut = () => setHovered(false);

    // Detectar hover sobre interactivos
    const addHoverListeners = () => {
      document.querySelectorAll("a, button, [role='button']").forEach((el) => {
        el.addEventListener("mouseenter", onHoverIn);
        el.addEventListener("mouseleave", onHoverOut);
      });
    };

    const animate = () => {
      // Dot sigue exacto
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
      }

      // Ring sigue con lag suave
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;
      }

      raf = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    addHoverListeners();

    raf = requestAnimationFrame(animate);

    // Re-bind cuando cambia el DOM
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [visible]);

  return (
    <>
      {/* Dot central — exacto */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none will-change-transform"
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "#a78bfa",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.2s, background 0.2s, transform 0.05s linear",
          mixBlendMode: "normal",
        }}
      />

      {/* Ring exterior — lag suave */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none will-change-transform"
        style={{
          width: clicked ? 32 : hovered ? 48 : 40,
          height: clicked ? 32 : hovered ? 48 : 40,
          borderRadius: "50%",
          border: `1px solid #a78bfa`,
          opacity: visible ? (hovered ? 0.6 : 0.3) : 0,
          transition: "opacity 0.2s, width 0.2s, height 0.2s, border-color 0.2s",
          marginTop: clicked ? 4 : hovered ? -4 : 0,
          marginLeft: clicked ? 4 : hovered ? -4 : 0,
        }}
      />
    </>
  );
}
