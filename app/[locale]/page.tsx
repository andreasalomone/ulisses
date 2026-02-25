import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Hero } from "@/components/sections/home/hero";
import { Partners } from "@/components/sections/home/partners";
import { TechnologyPillars } from "@/components/sections/home/technology-pillars";
import { VerticalSelector } from "@/components/sections/home/vertical-selector";
import { SelectorCta } from "@/components/sections/home/selector-cta";
import { WhyUlisses } from "@/components/sections/home/why-ulisses";
import { HowItWorks } from "@/components/sections/home/how-it-works";
import { DemoCTA } from "@/components/sections/shared/demo-cta";

/**
 * Home Page (Section A)
 * Strictly follows struttura.md for Ulisses Website.
 * Built with shared premium components and server-side robustness.
 */
export default async function Page({
    params
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    const t = await getTranslations('home');

    return (
        <div className="flex flex-col">
            <Hero />
            <TechnologyPillars />
            <VerticalSelector />
            <SelectorCta />
            <WhyUlisses />
            <HowItWorks />
            {/* <DashboardPreview /> */}
            <DemoCTA
                title={t('cta.title')}
                subtitle={t('cta.text')}
                ctaLabel={t('cta.button')}
            />
            <Partners />
        </div>
    );
}
