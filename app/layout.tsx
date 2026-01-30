import type { Metadata, Viewport } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://ulisses.it"),
  title: {
    default: "Ulisses - Intelligent Asset Tracking",
    template: "%s | Ulisses"
  },
  description: "Advanced real-time asset tracking and monitoring solutions for Logistics, Smart Parking, and Industrial applications.",
  keywords: ["Asset Tracking", "Logistics", "IoT", "Smart Parking", "Industrial AI", "Ulisses", "Real-time Monitoring"],
  authors: [{ name: "Ulisses Team" }],
  creator: "Ulisses",
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "/",
    title: "Ulisses - Intelligent Asset Tracking",
    description: "Advanced real-time asset tracking and monitoring solutions for Logistics, Smart Parking, and Industrial applications.",
    siteName: "Ulisses",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ulisses Intelligent Asset Tracking",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ulisses - Intelligent Asset Tracking",
    description: "Advanced real-time asset tracking and monitoring solutions.",
    images: ["/og-image.jpg"],
    creator: "@ulisses_ai",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logos/ulisses_logotipe.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/logos/ulisses_logotipe.svg",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={inter.variable} suppressHydrationWarning>
      <body
        className={`${geistMono.variable} antialiased min-h-screen flex flex-col font-sans`}
      >
        <Navbar />
        <main className="grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
