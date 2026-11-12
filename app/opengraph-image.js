import { ImageResponse } from "next/og";

export const alt = "Enegxi Technologies";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0d0d0d",
          color: "white",
          padding: 80,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 72,
              height: 72,
              borderRadius: 16,
              background: "#bff01e",
              color: "#0d0d0d",
              fontSize: 36,
              fontWeight: 800,
            }}
          >
            {"</>"}
          </div>
          <div style={{ display: "flex", fontSize: 40, fontWeight: 700 }}>
            Enegxi Technologies
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 800,
            lineHeight: 1.1,
          }}
        >
          We turn ideas into software that works
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#bbbbbb" }}>
          Akure, Nigeria
        </div>
      </div>
    ),
    { ...size },
  );
}