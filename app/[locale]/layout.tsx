import type { Metadata, Viewport } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "../globals.css";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type Props = {
  params: Promise<{ locale: string }>;
};

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://ulisses.it";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  // Generate hreflang alternate links
  const alternates: Record<string, string> = {};
  for (const loc of locales) {
    alternates[loc] = `${baseUrl}/${loc}`;
  }

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: t('title'),
      template: `%s | ${t('siteName')}`
    },
    description: t('description'),
    keywords: [
      t('keywords.assetTracking'),
      t('keywords.logistics'),
      t('keywords.iot'),
      t('keywords.smartParking'),
      t('keywords.industrialAI'),
      t('keywords.ulisses'),
      t('keywords.realTimeMonitoring')
    ],
    authors: [{ name: "Ulisses Team" }],
    creator: "Ulisses",
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: alternates
    },
    openGraph: {
      type: "website",
      locale: locale === 'it' ? 'it_IT' : 'en_US',
      alternateLocale: locale === 'it' ? ['en_US'] : ['it_IT'],
      url: "/",
      title: t('title'),
      description: t('description'),
      siteName: t('siteName'),
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: t('ogImageAlt'),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t('title'),
      description: t('twitterDescription'),
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
}

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

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!locales.includes(locale as typeof locales[number])) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} className={inter.variable} suppressHydrationWarning>
      <body
        className={`${geistMono.variable} antialiased min-h-screen flex flex-col font-sans`}
      >
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="grow">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
