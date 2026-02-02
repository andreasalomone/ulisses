import React from "react";
import { VerticalHero } from "@/components/shared/vertical-hero";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DICTIONARY } from "@/lib/dictionary";
import { BrandText } from "@/components/ui/brand";
import { DemoCTA } from "@/components/sections/shared/demo-cta";
import { ProcessUnlock } from "@/components/sections/ferroviario/process-unlock";
import { FerroviarioUseCases } from "@/components/sections/ferroviario/ferroviario-use-cases";

export default function FerroviarioPage() {
    const d = DICTIONARY.ferroviario;

    return (
        <div className="flex flex-col">
            <VerticalHero
                title={d.hero.h1}
                subtitle={d.hero.sub}
                titleToken={d.hero.h1Highlight}
                image="/assets/trains-iso.png"
            >
                <Button asChild size="lg" className="h-14 px-8 text-base font-bold rounded-full">
                    <Link href="/contatti">{d.hero.cta}</Link>
                </Button>
            </VerticalHero>

            {/* Cosa sblocchiamo */}
            <ProcessUnlock />

            {/* Use Cases */}
            <FerroviarioUseCases />

            {/* Dashboard Detail */}
            <SectionWrapper>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="aspect-video bg-muted rounded-2xl shadow-2xl border flex items-center justify-center">
                            <p className="text-muted-foreground italic">Dettaglio Dashboard</p>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8">
                            Cosa vedi nella Dashboard
                        </h2>
                        <ul className="space-y-4">
                            {d.dashboard.bullets.map((bullet, i) => (
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
            </SectionWrapper>

            {/* Final CTA */}
            <DemoCTA />
        </div>
    );
}
