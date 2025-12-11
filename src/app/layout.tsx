import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alexsandro — Desenvolvedor Full Stack",
  description: "Portfólio de Alexsandro — desenvolvedor Full Stack focado em Next.js, TypeScript e soluções web e mobile escaláveis.",
  openGraph: {
    title: "Alexsandro — Desenvolvedor Full Stack",
    description:
      "Portfólio com estudos de caso em Next.js, Node e mobile. Veja projetos e entre em contato.",
    url: "https://seu-dominio.com",
    siteName: "Alexsandro Dev",
    images: [
      {
        url: "https://devsilvan8n.com/",
        width: 1200,
        height: 630,
        alt: "Portfólio de Alexsandro — Desenvolvedor Full Stack",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider defaultTheme="system" storageKey="ui-theme">
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
