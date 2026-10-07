import { ImageResponse } from "next/og";
import type { ImageResponse as ImageResponseType } from "next/og";

export const alt = "HDX — Aman, developer from Kolkata";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Generated social card: charcoal background, cream type, orange gradient bar. */
export default function OpengraphImage(): ImageResponseType {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#1B1918",
          color: "#F2E5DC",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#E8342A",
              color: "#F4F1EC",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 2,
            }}
          >
            HDX
          </div>
          <div style={{ fontSize: 30, fontWeight: 600, letterSpacing: 1 }}>HDX — AMAN</div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: -2,
            }}
          >
            Because boring is bad for software.
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "rgba(242,229,220,0.65)" }}>
            Full-stack web applications · custom digital tools · Android diagnostics · server
            integrations
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: "100%",
            height: 12,
            borderRadius: 6,
            backgroundImage: "linear-gradient(135deg, #FF6B3D 0%, #F0402B 100%)",
          }}
        />
      </div>
    ),
    size
  );
}
