import React from "react";
import { VerticalHero } from "@/components/shared/vertical-hero";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SmartParkingUseCases } from "@/components/sections/parking/smart-parking-use-cases";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { Signal, HardDrive, Zap } from "lucide-react";
import { BenchmarkSection } from "@/components/sections/shared/benchmark-section";
import { DemoCTA } from "@/components/sections/shared/demo-cta";
import { getTranslations } from "next-intl/server";
import { Metadata } from 'next';
import { getLocalizedAlternates } from '@/lib/i18n-metadata';
import { SITE_CONFIG } from '@/lib/constants';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'metadata' });

    return {
        title: t('parking.title'),
        alternates: {
            canonical: `${SITE_CONFIG.url}/${locale}/smart-parking`,
            languages: getLocalizedAlternates('/smart-parking', SITE_CONFIG.url)
        }
    };
}

export default async function SmartParkingPage() {
    const t = await getTranslations('parking');
    const tA11y = await getTranslations('accessibility');

    const privateNetworkBullets = t.raw('privateNetwork.bullets') as string[];
    const dashboardBullets = t.raw('dashboard.bullets') as string[];
    const benchmarkItems = t.raw('benchmarks.items') as { title: string; context: string; challenge: string; solution: string; impact: string; link?: string }[];
    const benchmarkExtra = t.raw('benchmarks.extra') as { title: string; text: string };

    return (
        <div className="flex flex-col">
            <VerticalHero
                title={t('hero.h1')}
                subtitle={t('hero.sub')}
                titleToken={t('hero.h1Highlight')}
                image="/assets/parking-iso.png"
            >
                <Button asChild size="lg" className="h-14 px-8 text-base font-bold rounded-full">
                    <Link href="/contatti">{t('hero.cta')}</Link>
                </Button>
            </VerticalHero>

            {/* Interactive Explorer */}
            <SectionWrapper>
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8">
                        {t('customSolutions.title')}
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl">
                        {t('customSolutions.text')}
                    </p>
                </div>
                <SmartParkingUseCases />
            </SectionWrapper>

            {/* Rete Privata */}
            <SectionWrapper>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8">
                            {t('privateNetwork.title')}
                        </h2>
                        <div className="space-y-6">
                            {privateNetworkBullets.map((bullet, i) => (
                                <div key={i} className="flex gap-4 items-start p-4 rounded-2xl hover:bg-muted/50 transition-colors duration-200">
                                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        {i === 0 ? <Signal className="h-6 w-6" /> : i === 1 ? <HardDrive className="h-6 w-6" /> : <Zap className="h-6 w-6" />}
                                    </div>
                                    <div>
                                        <p className="text-lg font-medium text-foreground">{bullet}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 flex justify-center items-center">
                        <div className="relative w-7/12 max-w-lg lg:max-w-full aspect-square md:aspect-auto rounded-2xl overflow-hidden">
                            <Image
                                src="/assets/mockup-parking.png"
                                alt={tA11y('smartParkingNetwork')}
                                width={450}
                                height={338}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            {/* Dashboard detail */}
            <SectionWrapper variant="muted">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="aspect-video bg-card rounded-2xl shadow-2xl border flex items-center justify-center">
                            <p className="text-muted-foreground italic">Dashboard Smart Parking</p>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8">
                            {t('dashboard.title')}
                        </h2>
                        <ul className="space-y-4">
                            {dashboardBullets.map((bullet, i) => (
                                <li key={i} className="flex gap-3 items-center">
                                    <div className="h-2 w-2 rounded-full bg-primary" />
                                    <span className="text-lg text-muted-foreground">{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </SectionWrapper>

            {/* Benchmarks */}
            <BenchmarkSection
                title={t('benchmarks.title')}
                items={benchmarkItems}
                extra={benchmarkExtra}
            />

            {/* Final CTA */}
            <DemoCTA
                title={t('finalCta.title')}
                subtitle={t('finalCta.subtitle')}
                ctaLabel={t('finalCta.ctaExpert')}
                ctaLink="/contatti"
            />
        </div>
    );
}
