import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const runtime = "edge";
export const alt = "Primenet Systems software company preview";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          position: "relative",
          background:
            "linear-gradient(135deg, #031633 0%, #0d47c9 45%, #42a5ff 100%)",
          color: "white",
          fontFamily: "sans-serif",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top right, rgba(255,255,255,0.24), transparent 34%), radial-gradient(circle at bottom left, rgba(255,255,255,0.14), transparent 28%)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "60px",
            width: "100%",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <div
              style={{
                width: 74,
                height: 74,
                borderRadius: 18,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.18)",
                fontSize: 34,
                fontWeight: 800,
              }}
            >
              P
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ fontSize: 44, fontWeight: 800 }}>
                {siteConfig.name}
              </div>
              <div
                style={{
                  fontSize: 22,
                  opacity: 0.85,
                }}
              >
                Software Solutions for Modern Businesses
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 860,
              gap: 18,
            }}
          >
            <div
              style={{
                fontSize: 66,
                lineHeight: 1.05,
                fontWeight: 900,
                letterSpacing: "-0.03em",
              }}
            >
              Websites, Mobile Apps, and Custom Software That Help Businesses
              Grow
            </div>
            <div
              style={{
                fontSize: 28,
                lineHeight: 1.35,
                opacity: 0.94,
              }}
            >
              Trusted digital product support for companies in Ghana and beyond.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: "18px",
              flexWrap: "wrap",
            }}
          >
            {["Web Development", "Mobile Apps", "Custom Software"].map(
              (item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    padding: "14px 22px",
                    borderRadius: 9999,
                    background: "rgba(255,255,255,0.14)",
                    border: "1px solid rgba(255,255,255,0.20)",
                    fontSize: 22,
                    fontWeight: 700,
                  }}
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    ),
    size
  );
}

