import React from "react";
import { VerticalHero } from "@/components/shared/vertical-hero";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { VerticalSelector } from "@/components/sections/home/vertical-selector";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { OnePagerDialog } from "@/components/shared/one-pager-dialog";
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
        title: t('soluzioni.title'),
        alternates: {
            canonical: `${SITE_CONFIG.url}/${locale}/soluzioni`,
            languages: getLocalizedAlternates('/soluzioni', SITE_CONFIG.url)
        }
    };
}

export default async function SoluzioniPage() {
    const t = await getTranslations('solutions');
    const tCommon = await getTranslations('common');
    const tHome = await getTranslations('home');

    type MethodStep = {
        title: string;
        text: string;
    };
    const steps = t.raw('method.steps') as MethodStep[];

    return (
        <div className="flex flex-col">
            <VerticalHero
                title={t('hero.h1')}
                subtitle={t('hero.intro')}
                image="/assets/soluzioni.png"
            >
                <Button asChild size="lg" className="h-14 px-8 text-base font-bold rounded-full">
                    <Link href="/contatti">{tCommon('demoCta')}</Link>
                </Button>
                <OnePagerDialog
                    onePagerType="Generale"
                    triggerLabel={tCommon('onePagerCta')}
                />
            </VerticalHero>

            {/* Scenario Selector */}
            <VerticalSelector />

            {/* Metodo Ulisses */}
            <SectionWrapper variant="muted">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
                            {t('method.title')}
                        </h2>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            {t('method.intro')}
                        </p>
                    </div>

                    <div className="space-y-12">
                        {steps.map((step, i) => (
                            <div key={i} className="flex gap-8 items-start relative">
                                <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 font-bold text-lg shadow-lg relative z-10">
                                    {i + 1}
                                </div>
                                {i < steps.length - 1 && (
                                    <div className="absolute left-6 top-12 bottom-0 w-px bg-primary/20 -translate-x-1/2" />
                                )}
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold mb-3">{step.title}</h3>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        {step.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 p-10 rounded-[2.5rem] bg-card border border-primary/20 shadow-xl text-center">
                        <h4 className="text-2xl font-bold mb-8">{tHome('cta.title')}</h4>
                        <div className="flex justify-center">
                            <Button asChild size="lg" className="h-14 px-10 text-xl font-bold rounded-full">
                                <Link href="/contatti">{tCommon('expertCta')}</Link>
                            </Button>
                        </div>
                        <p className="mt-6 text-sm text-muted-foreground italic">
                            {tHome('cta.formMicrocopy')}
                        </p>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
}
