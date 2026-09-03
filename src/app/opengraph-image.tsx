import { ImageResponse } from "next/og";

export const alt = "박하란, 전환을 설계하는 퍼포먼스 숏폼 마케터";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "62px 72px",
          background: "#070707",
          color: "#F8F7F4",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, fontWeight: 700 }}>
          <span>HARAN PARK</span>
          <span>PERFORMANCE SHORT-FORM MARKETER</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 74, fontWeight: 800, lineHeight: 1.16 }}>예쁜 영상에서 끝나지 않게,</span>
          <span style={{ fontSize: 74, fontWeight: 800, lineHeight: 1.16 }}>팔릴 이유까지 설계합니다.</span>
        </div>
        <div style={{ display: "flex", height: 20, width: "100%" }}>
          <span style={{ flex: 5, background: "#47131C" }} />
          <span style={{ flex: 2, background: "#FF669B" }} />
        </div>
      </div>
    ),
    size,
  );
}
