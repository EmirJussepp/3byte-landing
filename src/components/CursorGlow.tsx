"use client";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const x = useMotionValue(-1000);
  const y = useMotionValue(-1000);
  const sx = useSpring(x, { stiffness: 100, damping: 22, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 100, damping: 22, mass: 0.6 });

  useEffect(() => {
    const move = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      style={{ mixBlendMode: "normal" }}
    >
      <motion.div
        style={{
          position: "absolute",
          width: 640,
          height: 640,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(91,139,255,0.055) 0%, transparent 68%)",
          x: sx,
          y: sy,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </motion.div>
  );
}
