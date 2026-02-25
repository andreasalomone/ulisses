import React from "react";
import { VerticalHero } from "@/components/shared/vertical-hero";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { DemoCTA } from "@/components/sections/shared/demo-cta";
import { ProcessUnlock } from "@/components/sections/ferroviario/process-unlock";
import { FerroviarioUseCases } from "@/components/sections/ferroviario/ferroviario-use-cases";
import { FeaturedStory } from "@/components/sections/ferroviario/featured-story";
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
        title: t('ferroviario.title'),
        alternates: {
            canonical: `${SITE_CONFIG.url}/${locale}/ferroviario`,
            languages: getLocalizedAlternates('/ferroviario', SITE_CONFIG.url)
        }
    };
}

export default async function FerroviarioPage() {
    const t = await getTranslations('ferroviario');

    return (
        <div className="flex flex-col">
            <VerticalHero
                title={t('hero.h1')}
                subtitle={t('hero.sub')}
                titleToken={t('hero.h1Highlight')}
                image="/assets/trains-iso.png"
            >
                <Button asChild size="lg" className="h-14 px-8 text-base font-bold rounded-full">
                    <Link href="/contatti">{t('hero.cta')}</Link>
                </Button>
            </VerticalHero>

            {/* Cosa sblocchiamo */}
            <ProcessUnlock />

            {/* Featured Story: Trenord */}
            <FeaturedStory />

            {/* Use Cases */}
            <FerroviarioUseCases />

            {/* Dashboard Detail */}
            {/* <SectionWrapper>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="relative aspect-video rounded-2xl shadow-2xl border-2 border-primary overflow-hidden">
                            <Image
                                src="/assets/dashboard-ferroviario.png"
                                alt={tA11y('dashboardFerroviario')}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8">
                            Cosa vedi nella Dashboard
                        </h2>
                        <ul className="space-y-4">
                            {dashboardBullets.map((bullet, i) => (
                                <li key={i} className="flex gap-3 items-center">
                                    <div className="h-2 w-2 rounded-full bg-primary" />
                                    <span className="text-lg text-muted-foreground">
                                        <BrandText text={bullet} />
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </SectionWrapper> */}


            {/* Final CTA */}
            <DemoCTA
                title={t('finalCta.title')}
                subtitle={t('finalCta.subtitle')}
                ctaLabel={t('finalCta.ctaExpert')}
            />
        </div>
    );
}
