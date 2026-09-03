import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl || "http://localhost:3000"),
  title: "박하란 | 전환을 설계하는 퍼포먼스 숏폼 마케터",
  description:
    "브랜드·타깃 분석부터 후킹·카피·편집·수정까지 한 사람이 전 과정을 책임합니다. 인하우스의 밀착감과 외부 파트너의 유연함을 갖춘 퍼포먼스 숏폼.",
  alternates: siteUrl ? { canonical: "/" } : undefined,
  openGraph: {
    type: "website",
    locale: "ko_KR",
    title: "박하란 | 전환을 설계하는 퍼포먼스 숏폼 마케터",
    description: "예쁜 영상에서 끝나지 않게, 팔릴 이유까지 설계합니다.",
    siteName: "HARAN PARK",
    url: siteUrl || undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: "박하란 | 전환을 설계하는 퍼포먼스 숏폼 마케터",
    description: "예쁜 영상에서 끝나지 않게, 팔릴 이유까지 설계합니다.",
  },
};

export const viewport: Viewport = {
  themeColor: "#070707",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
