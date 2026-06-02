import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#08080b",
          borderRadius: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid rgba(167,139,250,0.3)",
        }}
      >
        <span
          style={{
            fontFamily: "monospace",
            fontWeight: 800,
            fontSize: 13,
            color: "#a78bfa",
            letterSpacing: "-0.05em",
            lineHeight: 1,
          }}
        >
          3b
        </span>
      </div>
    ),
    { ...size }
  );
}
