import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "길동무 | %s",
    default: "길동무 | 여행 친구를 구해봐요 ! 여행 정보 공유 플랫폼",
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="font-nanum-square-round">{children}</body>
    </html>
  );
}
