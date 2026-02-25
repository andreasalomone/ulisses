import React from "react";
import { Check } from "lucide-react";
import { VerticalHero } from "@/components/shared/vertical-hero";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { BenchmarkSection } from "@/components/sections/shared/benchmark-section";
import { DemoCTA } from "@/components/sections/shared/demo-cta";
import { ProcessUnlock } from "@/components/sections/logistica/process-unlock";
import { LogisticsUseCases } from "@/components/sections/logistica/logistics-use-cases";
import { IntegrationHub } from "@/components/sections/logistica/integration-hub";
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
        title: t('logistica.title'),
        alternates: {
            canonical: `${SITE_CONFIG.url}/${locale}/logistica`,
            languages: getLocalizedAlternates('/logistica', SITE_CONFIG.url)
        }
    };
}

export default async function LogisticaPage() {
    const t = await getTranslations('logistica');

    const dashboardBullets = t.raw('dashboard.bullets') as string[];
    const benchmarkItems = t.raw('benchmarks.items') as {
        title: string;
        context: string;
        challenge: string;
        solution: string;
        impact: string;
        link?: string;
    }[];

    return (
        <div className="flex flex-col">
            <VerticalHero
                title={t('hero.h1')}
                subtitle={t('hero.sub')}
                titleToken={t('hero.h1Highlight')}
                image="/assets/stock-iso.png"
                brandClassName="text-white"
            >
                <Button asChild size="lg" className="h-14 px-8 text-base font-bold rounded-full">
                    <Link href="/contatti">{t('hero.cta')}</Link>
                </Button>
            </VerticalHero>

            {/* Cosa sblocchiamo */}
            <ProcessUnlock />

            {/* Use Cases */}
            <LogisticsUseCases />

            {/* Dashboard Detail */}
            {/* <SectionWrapper>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="aspect-video bg-muted rounded-2xl shadow-2xl border flex items-center justify-center">
                            <p className="text-muted-foreground italic">Dettaglio Dashboard</p>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8">
                            {t('dashboard.title')}
                        </h2>
                        <ul className="space-y-4">
                            {dashboardBullets.map((bullet, i) => (
                                <li key={i} className="flex gap-4 items-start">
                                    <div className="mt-1.5 shrink-0">
                                        <Check className="h-5 w-5 text-primary" />
                                    </div>
                                    <span className="text-lg text-muted-foreground leading-relaxed">{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </SectionWrapper> */}

            {/* Integrazione */}
            <IntegrationHub />

            {/* Benchmarks */}
            <BenchmarkSection
                title={t('benchmarks.title')}
                items={benchmarkItems}
                variant="default"
            />

            {/* Final CTA */}
            <DemoCTA
                title={t('finalCta.title')}
                subtitle={t('finalCta.subtitle')}
                ctaLabel={t('finalCta.ctaExpert')}
            />
        </div>
    );
}
