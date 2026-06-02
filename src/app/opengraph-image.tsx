import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "3Byte — Software que funciona";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#08080b",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: logo + ubicación */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{
            width: "10px", height: "10px",
            borderRadius: "50%",
            background: "#34d399",
            boxShadow: "0 0 8px #34d399",
          }} />
          <span style={{ color: "#55556a", fontSize: "14px", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            SAN FRANCISCO, CÓRDOBA · ARGENTINA
          </span>
        </div>

        {/* Centro: headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ fontSize: "80px", fontWeight: 800, color: "#eaeaf0", lineHeight: 1, letterSpacing: "-0.04em" }}>
            Tu negocio merece
          </div>
          <div style={{ fontSize: "80px", fontWeight: 800, color: "#5b8bff", lineHeight: 1, letterSpacing: "-0.04em" }}>
            un sistema propio.
          </div>
          <div style={{ fontSize: "20px", color: "#8888a0", marginTop: "8px", maxWidth: "600px", lineHeight: 1.6 }}>
            Software a medida para PyMEs argentinas. Sin agencias, sin plantillas.
          </div>
        </div>

        {/* Bottom: nombre + dominio */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "28px", fontWeight: 800, color: "#eaeaf0" }}>3</span>
            <span style={{ fontSize: "28px", fontWeight: 800, color: "#a78bfa" }}>byte</span>
          </div>
          <span style={{ color: "#55556a", fontSize: "16px", letterSpacing: "0.04em" }}>
            grupo3byte.com
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
