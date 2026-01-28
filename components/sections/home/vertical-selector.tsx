import React from "react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { ScenarioCard } from "@/components/shared/scenario-card";
import { DICTIONARY } from "@/lib/dictionary";

export function VerticalSelector() {
    const d = DICTIONARY.home.selector;
    const cards = d.cards;

    const scenarios = [
        { ...cards.logistica, href: "/logistica", resolutions: cards.logistica.resolutions },
        { ...cards.ferroviario, href: "/ferroviario", resolutions: cards.ferroviario.resolutions },
        { ...cards.parking, href: "/smart-parking", resolutions: cards.parking.resolutions }
    ];

    return (
        <SectionWrapper id="scenari" variant="muted">
            <div className="max-w-2xl mb-16">
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
                    {d.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    {d.subtitle}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {scenarios.map((scenario) => (
                    <ScenarioCard
                        key={scenario.href}
                        title={scenario.title}
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
