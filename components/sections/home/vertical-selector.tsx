import React from "react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { ScenarioCard } from "@/components/shared/scenario-card";
import { BrandText } from "@/components/ui/brand";
import { useTranslations } from "next-intl";
import { HorizontalScrollArea } from "@/components/ui/horizontal-scroller";

export function VerticalSelector() {
    const t = useTranslations('home.selector');
    type CardData = {
        title: string;
        description: string;
        cta: string;
        resolutions: string[];
    };

    // Explicitly type the structure we expect from translations
    const cards = t.raw('cards') as Record<string, CardData>;

    const scenarios = [
        { ...cards.logistica, href: "/logistica", resolutions: cards.logistica.resolutions, image: "/assets/stock.webp" },
        { ...cards.ferroviario, href: "/ferroviario", resolutions: cards.ferroviario.resolutions, image: "/assets/trains.webp" },
        { ...cards.parking, href: "/smart-parking", resolutions: cards.parking.resolutions, image: "/assets/parking.webp" },
        // Fallback for missing translation during layout switch, using partial check
        ...(cards.nautica ? [{ ...cards.nautica, href: "/nautica", resolutions: cards.nautica.resolutions, image: "/assets/smart-port.jpg" }] : [])
    ];

    return (
        <SectionWrapper id="scenari" variant="muted">
            <div className="max-w-2xl mb-16">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 text-balance">
                    <BrandText text={t('title')} />
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-balance">
                    <BrandText text={t('subtitle')} />
                </p>
            </div>

            <HorizontalScrollArea>
                {scenarios.map((scenario) => (
                    <div key={scenario.href} className="w-[85vw] sm:w-[50vw] md:w-[calc(33.333%-16px)] shrink-0 snap-center md:snap-start">
                        <ScenarioCard
                            title={scenario.title}
                            image={scenario.image}
                            description={scenario.description}
                            href={scenario.href}
                            resolutions={scenario.resolutions}
                            linkText={scenario.cta}
                        />
                    </div>
                ))}
            </HorizontalScrollArea>
        </SectionWrapper>
    );
}
