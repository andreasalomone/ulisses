import React from "react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { ScenarioCard } from "@/components/shared/scenario-card";
import { DICTIONARY } from "@/lib/dictionary";
import { BrandText } from "@/components/ui/brand";

export function VerticalSelector() {
    const d = DICTIONARY.home.selector;
    const { cards } = d;

    const scenarios = [
        { ...cards.logistica, href: "/logistica", resolutions: cards.logistica.resolutions, image: "/assets/stock.webp" },
        { ...cards.ferroviario, href: "/ferroviario", resolutions: cards.ferroviario.resolutions, image: "/assets/trains.webp" },
        { ...cards.parking, href: "/smart-parking", resolutions: cards.parking.resolutions, image: "/assets/parking.webp" }
    ];

    return (
        <SectionWrapper id="scenari" variant="muted">
            <div className="max-w-2xl mb-16">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 text-wrap-pretty md:whitespace-nowrap">
                    <BrandText text={d.title} />
                </h2>
                <p className="text-2xl text-muted-foreground leading-relaxed">
                    <BrandText text={d.subtitle} />
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {scenarios.map((scenario) => (
                    <ScenarioCard
                        key={scenario.href}
                        title={scenario.title}
                        image={scenario.image}
                        description={scenario.description}
                        href={scenario.href}
                        resolutions={scenario.resolutions}
                        linkText={scenario.cta}
                    />
                ))}
            </div>
        </SectionWrapper>
    );
}
