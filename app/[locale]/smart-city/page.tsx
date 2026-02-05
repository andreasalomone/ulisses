import React from "react";
import { Metadata } from 'next';
import { getTranslations } from "next-intl/server";
import { getLocalizedAlternates } from '@/lib/i18n-metadata';
import { SITE_CONFIG } from '@/lib/constants';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'metadata' });

    return {
        title: t('smartCity.title'),
        alternates: {
            canonical: `${SITE_CONFIG.url}/${locale}/smart-city`,
            languages: getLocalizedAlternates('/smart-city', SITE_CONFIG.url)
        }
    };
}
import { VerticalHero } from "@/components/shared/vertical-hero";

import { Link } from "@/i18n/routing";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default async function SmartCityPage() {
    const t = await getTranslations("smartCity");
    const tA11y = await getTranslations("accessibility");

    return (
        <div className="flex flex-col">
            <VerticalHero
                title={t("hero.title")}
                subtitle={t("hero.subtitle")}
                titleToken={t("hero.titleToken")}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mt-12">
                    {/* Smart Parking Card */}
                    <Link
                        href="/smart-parking"
                        className="group relative overflow-hidden rounded-[2.5rem] bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 block h-[400px]"
                    >
                        <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="h-full flex flex-col items-center justify-center p-8 text-center relative z-10">
                            <div className="relative w-48 h-48 mb-6 transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                                <Image
                                    src="/assets/one-parking.png"
                                    alt={tA11y('smartParkingVisualization')}
                                    fill
                                    className="object-contain drop-shadow-lg"
                                />
                            </div>

                            <h3 className="text-2xl font-extrabold mb-3 group-hover:text-primary transition-colors duration-300">
                                Smart Parking
                            </h3>

                            <p className="text-muted-foreground text-sm max-w-[80%] mb-4 line-clamp-2">
                                {t("cards.parking.subtitle")}
                            </p>

                            <div className="flex items-center gap-2 text-primary font-semibold transition-all duration-300">
                                <span>{t("ui.discoverMore")}</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </Link>

                    {/* Smart Building Card */}
                    <Link
                        href="/smart-building"
                        className="group relative overflow-hidden rounded-[2.5rem] bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 block h-[400px]"
                    >
                        <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="h-full flex flex-col items-center justify-center p-8 text-center relative z-10">
                            <div className="relative w-48 h-48 mb-6 transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                                <Image
                                    src="/assets/building.png"
                                    alt={tA11y('smartBuildingVisualization')}
                                    fill
                                    className="object-contain drop-shadow-lg"
                                />
                            </div>

                            <h3 className="text-2xl font-extrabold mb-3 group-hover:text-primary transition-colors duration-300">
                                Smart Building
                            </h3>

                            <p className="text-muted-foreground text-sm max-w-[80%] mb-4 line-clamp-2">
                                {t("cards.building.subtitle")}
                            </p>

                            <div className="flex items-center gap-2 text-primary font-semibold transition-all duration-300">
                                <span>{t("ui.discoverMore")}</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </Link>
                </div>
            </VerticalHero>
        </div>
    );
}
