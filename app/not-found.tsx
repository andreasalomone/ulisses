"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { ArrowLeft } from "lucide-react";
import { Geist_Mono, Inter } from "next/font/google";

// Fonts must be loaded here if this page renders without the root layout
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' });

const translations = {
    it: {
        title: "Pagina non trovata",
        description: "Sembra che tu ti sia perso nella rete. La pagina che cerchi non esiste o è stata spostata.",
        back: "Torna alla Home"
    },
    en: {
        title: "Page Not Found",
        description: "It seems you are lost in the net. The page you are looking for does not exist or has been moved.",
        back: "Back to Home"
    }
};

export default function NotFound() {
    const pathname = usePathname();
    // Simple heuristic: if path starts with /en, use English. Otherwise Italian.
    const isEnglish = pathname?.startsWith('/en');
    const t = isEnglish ? translations.en : translations.it;
    const homeLink = isEnglish ? '/en' : '/it';

    return (
        <html lang={isEnglish ? 'en' : 'it'} className={inter.variable}>
            <body className={`${geistMono.variable} antialiased min-h-screen flex flex-col font-sans`}>
                <SectionWrapper className="min-h-[80vh] flex items-center justify-center text-center">
                    <div className="max-w-2xl mx-auto space-y-8">
                        <h1 className="text-6xl md:text-9xl font-extrabold text-primary opacity-20">404</h1>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                            {t.title}
                        </h2>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            {t.description}
                        </p>
                        <div className="pt-8">
                            <Button asChild size="lg" className="rounded-full px-8 h-12">
                                <Link href={homeLink}>
                                    <ArrowLeft className="mr-2 h-4 w-4" />
                                    {t.back}
                                </Link>
                            </Button>
                        </div>
                    </div>
                </SectionWrapper>
            </body>
        </html>
    );
}
