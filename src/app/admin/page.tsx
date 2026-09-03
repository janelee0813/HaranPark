import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "관리자 페이지",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminPage() {
  return (
    <main className="admin-page">
      <div className="admin-page__inner">
        <p>HARAN PARK</p>
        <h1>관리자 페이지</h1>
        <span>관리 기능을 준비하고 있습니다.</span>
        <Link href="/">
          <ArrowLeft aria-hidden="true" />
          홈페이지로 돌아가기
        </Link>
      </div>
    </main>
  );
}
