import React from "react";
import { Metadata } from 'next';
import { getTranslations } from "next-intl/server";
import { getLocalizedAlternates } from '@/lib/i18n-metadata';
import { SITE_CONFIG } from '@/lib/constants';
import { VerticalHero } from "@/components/shared/vertical-hero";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'metadata' });

    return {
        title: t('smartPort.title'),
        alternates: {
            canonical: `${SITE_CONFIG.url}/${locale}/smart-port`,
            languages: getLocalizedAlternates('/smart-port', SITE_CONFIG.url)
        }
    };
}

export default async function SmartPortPage() {
    const t = await getTranslations("smartPort");
    const tA11y = await getTranslations("accessibility");

    const SUB_PAGES = [
        {
            href: "/porti-commerciali" as const,
            imageSrc: "/assets/porto-commerciale.png",
            a11yKey: "commercialPortsVisualization" as const,
            titleKey: "cards.commerciali.title" as const,
            subtitleKey: "cards.commerciali.subtitle" as const,
            ctaKey: "cards.commerciali.cta" as const,
        },
        {
            href: "/porti-turistici" as const,
            imageSrc: "/assets/nautica.png",
            a11yKey: "marinasVisualization" as const,
            titleKey: "cards.turistici.title" as const,
            subtitleKey: "cards.turistici.subtitle" as const,
            ctaKey: "cards.turistici.cta" as const,
        }
    ];

    return (
        <div className="flex flex-col">
            <VerticalHero
                title={t("hero.title")}
                subtitle={t("hero.subtitle")}
                titleToken={t("hero.titleToken")}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mt-12">
                    {SUB_PAGES.map((page) => (
                        <Link
                            key={page.href}
                            href={page.href}
                            className="group relative overflow-hidden rounded-[2.5rem] bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 block h-[400px]"
                        >
                            <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="h-full flex flex-col items-center justify-center p-8 text-center relative z-10">
                                <div className="relative w-48 h-48 mb-6 transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                                    <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                                    <Image
                                        src={page.imageSrc}
                                        alt={tA11y(page.a11yKey)}
                                        fill
                                        className="object-contain drop-shadow-lg"
                                    />
                                </div>

                                <h3 className="text-2xl font-extrabold mb-3 group-hover:text-primary transition-colors duration-300">
                                    {t(page.titleKey)}
                                </h3>

                                <p className="text-muted-foreground text-sm max-w-[80%] mb-4 line-clamp-2">
                                    {t(page.subtitleKey)}
                                </p>

                                <div className="flex items-center gap-2 text-primary font-semibold transition-all duration-300">
                                    <span>{t(page.ctaKey)}</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </VerticalHero>
        </div>
    );
}
