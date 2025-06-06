import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Multidev Station | Central de Desarrollo",
  description:
    "Tu estación central de desarrollo. Explora tecnologías, frameworks y herramientas para crear proyectos increíbles.",
  keywords: [
    "desarrollo",
    "programación",
    "frameworks",
    "tecnologías",
    "herramientas",
    "web",
    "mobile",
    "backend",
  ],
  authors: [{ name: "Multidev Station" }],
  creator: "Multidev Station",
  publisher: "Multidev Station",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://multidevstation.com",
    title: "Multidev Station | Central de Desarrollo",
    description:
      "Tu estación central de desarrollo. Explora tecnologías, frameworks y herramientas para crear proyectos increíbles.",
    siteName: "Multidev Station",
  },
  twitter: {
    card: "summary_large_image",
    title: "Multidev Station | Central de Desarrollo",
    description:
      "Tu estación central de desarrollo. Explora tecnologías, frameworks y herramientas para crear proyectos increíbles.",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)] antialiased`}
      >
        <div className="min-h-screen bg-background text-text">{children}</div>
      </body>
    </html>
  );
}
