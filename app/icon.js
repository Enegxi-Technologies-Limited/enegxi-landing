import { ImageResponse } from "next/og";

// Browser-tab favicon: the Enegxi Technologies "</>" mark from the navbar
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#bff01e",
          borderRadius: 14,
          color: "#0d0d0d",
          fontSize: 30,
          fontWeight: 800,
          letterSpacing: -2,
        }}
      >
        &lt;/&gt;
      </div>
    ),
    size,
  );
}
