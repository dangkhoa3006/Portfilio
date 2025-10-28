import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GridBackground from "@/components/GridBackground";
import NetworkBackground from "@/components/NetworkBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - Khoa",
  description: "Personal portfolio of Khoa - Full Stack Developer & UI/UX Designer",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 2,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning className="bg-[#0b0b0f]">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0b0b0f] text-white`}
        suppressHydrationWarning
      >
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <GridBackground />
          <NetworkBackground />
        </div>
        {children}
      </body>
    </html>
  );
}
