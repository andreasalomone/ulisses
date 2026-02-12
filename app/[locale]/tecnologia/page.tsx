import React from "react";
import { VerticalHero } from "@/components/shared/vertical-hero";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { HowItWorks } from "@/components/sections/home/how-it-works";
import { TechnologyPillars } from "@/components/sections/tecnologia/technology-pillars";
import { DataCenterVisualization } from "@/components/sections/tecnologia/data-center-visualization";
import {
    Download,
    Network,
    Database,
    ShieldCheck,
    Layers,
    Landmark,
    Microscope,
    Scale
} from "lucide-react";
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
        title: t('tecnologia.title'),
        alternates: {
            canonical: `${SITE_CONFIG.url}/${locale}/tecnologia`,
            languages: getLocalizedAlternates('/tecnologia', SITE_CONFIG.url)
        }
    };
}
import { DemoCTA } from "@/components/sections/shared/demo-cta";

export default async function TecnologiaPage() {
    const t = await getTranslations('tecnologia');
    const tResearch = await getTranslations('ricercaIp');

    const pillarsItems = t.raw('pillars.items') as string[];
    const infraItems = t.raw('infrastructure.items') as { title: string; text: string }[];
    const archItems = t.raw('itArchitecture.items') as { title: string; text: string }[];

    return (
        <div className="flex flex-col">
            <VerticalHero
                title={t('hero.h1')}
                subtitle={t('hero.sub')}
                className="min-h-[60vh]"
            >
                <Button asChild size="lg" className="h-14 px-8 text-base font-bold rounded-full">
                    <Link href="/contatti">{t('hero.ctaDemo')}</Link>
                </Button>
                <Button variant="outline" size="lg" className="h-14 px-8 text-base font-bold rounded-full">
                    <Download className="mr-2 h-5 w-5" />
                    {t('hero.ctaSheet')}
                </Button>
            </VerticalHero>

            {/* Pillars */}
            <TechnologyPillars
                title={t('pillars.title')}
                text={t('pillars.text')}
                items={pillarsItems}
            />

            {/* Infrastructure - Replaced with HowItWorks */}
            <HowItWorks
                title={t('infrastructure.title')}
                subtitle={t('infrastructure.subtitle')}
                items={infraItems}
                withDeployment={false}
            />

            {/* IT Architecture */}
            <SectionWrapper>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8">
                            {t('itArchitecture.title')}
                        </h2>
                        <p className="text-xl text-muted-foreground mb-12">
                            {t('itArchitecture.subtitle')}
                        </p>
                        <div className="space-y-6">
                            {archItems.map((item, i) => {
                                const Icon = [Network, Database, Layers][i % 3];
                                return (
                                    <div key={i} className="flex gap-6 p-6 rounded-3xl bg-muted/30 border border-transparent hover:border-primary/10 hover:bg-card transition-all cursor-pointer group shadow-xs">
                                        <div className="mt-1 h-10 w-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                            <Icon className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                                            <p className="text-muted-foreground">{item.text}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="relative aspect-square bg-linear-to-br from-muted to-muted/30 rounded-[4rem] border shadow-inner flex items-center justify-center p-8 overflow-hidden group">
                        <DataCenterVisualization />
                        <div className="absolute inset-0 bg-radial-[at_50%_50%] from-primary/5 to-transparent pointer-events-none"></div>
                    </div>
                </div>
            </SectionWrapper>

            {/* Research & IP Section - Redesigned to remove confusion */}
            <SectionWrapper id="ricerca" variant="muted">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Header Block */}
                    <div className="lg:col-span-8">
                        <h2 className="text-3xl md:text-6xl font-extrabold tracking-tight mb-8">
                            {tResearch('hero.h1')}
                        </h2>
                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12 max-w-3xl">
                            {tResearch('hero.sub')}
                        </p>
                    </div>

                    {/* Left Column: Collaborations & IP */}
                    <div className="lg:col-span-7 space-y-8">
                        <div className="p-10 bg-card rounded-[2.5rem] border shadow-sm group hover:border-primary/20 transition-all">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                    <Landmark className="h-6 w-6" />
                                </div>
                                <h3 className="text-3xl font-bold">{tResearch('collaborations.title')}</h3>
                            </div>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                {tResearch('collaborations.text')}
                            </p>
                        </div>

                        <div className="p-10 bg-card rounded-[2.5rem] border shadow-sm group hover:border-primary/20 transition-all">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                    <Scale className="h-6 w-6" />
                                </div>
                                <h3 className="text-3xl font-bold">{tResearch('ip.title')}</h3>
                            </div>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                {tResearch('ip.text')}
                            </p>
                            <div className="p-8 bg-linear-to-br from-primary/5 to-primary/10 rounded-3xl border border-primary/10 flex items-center gap-6">
                                <ShieldCheck className="text-primary h-12 w-12 shrink-0" />
                                <p className="text-xl font-bold leading-snug">
                                    Proteggiamo il valore dei nostri clienti attraverso asset tecnologici proprietari.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Innovation Lab - Sticky prominence */}
                    <div className="lg:col-span-5">
                        <div className="lg:sticky lg:top-32 h-fit p-10 bg-primary text-primary-foreground rounded-[3rem] shadow-2xl relative overflow-hidden group">
                            {/* Decorative background element */}
                            <div className="absolute -right-16 -bottom-16 opacity-10 group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-700 ease-out">
                                <Microscope className="h-64 w-64" />
                            </div>

                            <div className="relative z-10">
                                <div className="h-16 w-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-8">
                                    <Microscope className="h-9 w-9" />
                                </div>
                                <h3 className="text-4xl font-extrabold mb-6 tracking-tight">Innovation Lab</h3>
                                <p className="text-xl opacity-90 leading-relaxed mb-12">
                                    I nostri laboratori testano costantemente nuove tipologie di rete e algoritmi di filtraggio per garantire prestazioni stabili in ambienti metallici e densi.
                                </p>
                                <Button asChild variant="secondary" size="lg" className="w-full font-bold h-16 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]">
                                    <Link href="/contatti">{tResearch('hero.ctaTalk')}</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
            <DemoCTA />
        </div>
    );
}
