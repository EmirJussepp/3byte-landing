export default function BackgroundOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {/* Orbe azul — arriba izquierda */}
      <div
        className="absolute rounded-full"
        style={{
          top: "-15vh",
          left: "-10vw",
          width: "60vw",
          height: "55vh",
          background: "radial-gradient(ellipse at center, rgba(167,139,250,0.07) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      {/* Orbe violeta — abajo derecha */}
      <div
        className="absolute rounded-full"
        style={{
          bottom: "-10vh",
          right: "-10vw",
          width: "50vw",
          height: "50vh",
          background: "radial-gradient(ellipse at center, rgba(167,139,250,0.055) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
    </div>
  );
}
