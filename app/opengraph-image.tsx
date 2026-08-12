import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Centro Medsport Temuco - Kinesiología, rehabilitación y entrenamiento";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#081521",
          color: "white"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 30, fontWeight: 800 }}>
          <div style={{ width: 52, height: 52, borderRadius: 999, background: "#35D4E6", color: "#081521", display: "flex", alignItems: "center", justifyContent: "center" }}>M</div>
          MEDSPORT · TEMUCO
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 72, lineHeight: 1.02, fontWeight: 800, letterSpacing: "-3px" }}>Kinesiología + entrenamiento</div>
          <div style={{ marginTop: 24, fontSize: 30, color: "#35D4E6" }}>Evaluar. Planificar. Avanzar.</div>
        </div>
        <div style={{ fontSize: 24, color: "rgba(255,255,255,.68)" }}>Av. Alemania 0425, local 205 · Paseo Los Suizos · Temuco</div>
      </div>
    ),
    size
  );
}
