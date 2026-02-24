import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeToggle from "@/components/theme-toggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Boring projects — автоматизация и ИИ для бизнеса",
  description: "Комплексные AI-решения: Computer Vision, OCR, RAG, low-code платформы и on-premise архитектура.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => { try { const t = localStorage.getItem('theme') || 'dark'; document.documentElement.setAttribute('data-theme', t); } catch(e){} })();`,
          }}
        />
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
