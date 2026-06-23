import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

export const alt = "കനിവ് ചാരിറ്റി ട്രസ്റ്റ് മുണ്ടംപറമ്പ്"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  const [logoData, regularFontData, boldFontData, extraboldFontData] =
    await Promise.all([
      readFile(join(process.cwd(), "public/images/kaniv/kaniv-logo.png"), "base64"),
      readFile(
        join(process.cwd(), "fonts/NotoSansMalayalam-Regular.ttf")
      ),
      readFile(join(process.cwd(), "fonts/NotoSansMalayalam-Bold.ttf")),
      readFile(
        join(process.cwd(), "fonts/NotoSansMalayalam-ExtraBold.ttf")
      ),
    ])

  const logoSrc = `data:image/png;base64,${logoData}`

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1a7fa8 0%, #1CA3D8 40%, #56c4f0 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "160px",
              height: "160px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.95)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
            }}
          >
            <img
              src={logoSrc}
              width={140}
              height={140}
              style={{
                objectFit: "contain",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span
              style={{
                fontSize: "72px",
                fontWeight: 800,
                color: "#FFFFFF",
                letterSpacing: "0.02em",
                textShadow: "0 2px 8px rgba(0,0,0,0.15)",
                lineHeight: 1.1,
                textAlign: "center",
              }}
            >
              കനിവ് ചാരിറ്റി ട്രസ്റ്റ്
            </span>
            <span
              style={{
                fontSize: "36px",
                fontWeight: 400,
                color: "rgba(255,255,255,0.9)",
                letterSpacing: "0.04em",
                lineHeight: 1.2,
                textAlign: "center",
              }}
            >
              മുണ്ടംപറമ്പ്
            </span>
          </div>
          <div
            style={{
              height: "2px",
              width: "200px",
              background: "rgba(255,255,255,0.4)",
              borderRadius: "1px",
            }}
          />
          <span
            style={{
              fontSize: "24px",
              fontWeight: 400,
              color: "rgba(255,255,255,0.85)",
              letterSpacing: "0.06em",
              lineHeight: 1.3,
              textAlign: "center",
            }}
          >
            കയ്യെത്തും ദൂരത്തൊരു കൈത്താങ്ങ്
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "NotoSansMalayalam",
          data: regularFontData.buffer,
          style: "normal",
          weight: 400,
        },
        {
          name: "NotoSansMalayalam",
          data: boldFontData.buffer,
          style: "normal",
          weight: 700,
        },
        {
          name: "NotoSansMalayalam",
          data: extraboldFontData.buffer,
          style: "normal",
          weight: 800,
        },
      ],
    }
  )
}
