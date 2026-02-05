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
        title: t('smartBuilding.title'),
        alternates: {
            canonical: `${SITE_CONFIG.url}/${locale}/smart-building`,
            languages: getLocalizedAlternates('/smart-building', SITE_CONFIG.url)
        }
    };
}
import { VerticalHero } from "@/components/shared/vertical-hero";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SmartBuildingExplorer } from "@/components/sections/smart-building/smart-building-explorer";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { DemoCTA } from "@/components/sections/shared/demo-cta";

export default async function SmartBuildingPage() {
    const t = await getTranslations("smartBuilding");

    return (
        <div className="flex flex-col">
            <VerticalHero
                title={t("hero.h1")}
                subtitle={t("hero.sub")}
                titleToken={t("hero.h1Highlight")}
                image="/assets/building.png"
            >
                <Button asChild size="lg" className="h-14 px-8 text-base font-bold rounded-full">
                    <Link href="/contatti">{t("hero.cta")}</Link>
                </Button>
            </VerticalHero>

            {/* Interactive Explorer */}
            <SectionWrapper>
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8">
                        {t("explorer.title")}
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl">
                        {t("explorer.description")}
                    </p>
                </div>
                <SmartBuildingExplorer
                    segments={t.raw("segments")}
                    useCases={t.raw("useCases")}
                    mapping={t.raw("useCaseMapping")}
                />
            </SectionWrapper>

            {/* Dashboard detail */}
            <SectionWrapper variant="muted">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="aspect-video bg-card rounded-2xl shadow-2xl border flex items-center justify-center">
                            <p className="text-muted-foreground italic">Dashboard Smart Building</p>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8">
                            {t("dashboard.title")}
                        </h2>
                        <ul className="space-y-4">
                            {t.raw("dashboard.bullets").map((bullet: string, i: number) => (
                                <li key={i} className="flex gap-3 items-center">
                                    <div className="h-2 w-2 rounded-full bg-primary" />
                                    <span className="text-lg text-muted-foreground">{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </SectionWrapper>

            {/* Final CTA */}
            <DemoCTA />
        </div>
    );
}
