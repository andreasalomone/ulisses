import React from "react";
import { VerticalHero } from "@/components/shared/vertical-hero";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { BrandText } from "@/components/ui/brand";
import { DemoCTA } from "@/components/sections/shared/demo-cta";
import { CommercialiUseCases } from "@/components/sections/porti-commerciali/commerciali-use-cases";
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
        title: t('portiCommerciali.title'),
        alternates: {
            canonical: `${SITE_CONFIG.url}/${locale}/porti-commerciali`,
            languages: getLocalizedAlternates('/porti-commerciali', SITE_CONFIG.url)
        }
    };
}

export default async function PortiCommercialiPage() {
    const t = await getTranslations('portiCommerciali');

    return (
        <div className="flex flex-col">
            <VerticalHero
                title={t('hero.h1')}
                subtitle={t('hero.sub')}
                titleToken={t('hero.h1Highlight')}
                image="/assets/porto-commerciale.png"
            >
                <Button asChild size="lg" className="h-14 px-8 text-base font-bold rounded-full">
                    <Link href="/contatti">{t('hero.cta')}</Link>
                </Button>
            </VerticalHero>

            {/* Intro Section */}
            <SectionWrapper variant="muted" className="pt-24 pb-24 border-b border-border/50">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                        <BrandText text={t('hero.unlockTitle')} />
                    </h2>
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                        <BrandText text={t('hero.unlockSubtitle')} />
                    </p>
                    <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto mt-8 font-medium">
                        {t('intro.text')}
                    </p>
                </div>
            </SectionWrapper>

            {/* Use Cases */}
            <CommercialiUseCases />

            {/* Final CTA */}
            <DemoCTA />
        </div>
    );
}
