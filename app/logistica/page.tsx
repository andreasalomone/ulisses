import React from "react";
import { Check } from "lucide-react";
import { VerticalHero } from "@/components/shared/vertical-hero";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DICTIONARY } from "@/lib/dictionary";
import { BenchmarkSection } from "@/components/sections/shared/benchmark-section";
import { DemoCTA } from "@/components/sections/shared/demo-cta";
import { ProcessUnlock } from "@/components/sections/logistica/process-unlock";
import { LogisticsUseCases } from "@/components/sections/logistica/logistics-use-cases";
import { IntegrationHub } from "@/components/sections/logistica/integration-hub";

export default function LogisticaPage() {
    const d = DICTIONARY.logistica;

    return (
        <div className="flex flex-col">
            <VerticalHero
                title={d.hero.h1}
                subtitle={d.hero.sub}
                titleToken={d.hero.h1Highlight}
                image="/assets/stock-iso.png"
            >
                <Button asChild size="lg" className="h-14 px-8 text-base font-bold rounded-full">
                    <Link href="/contatti">{d.hero.cta}</Link>
                </Button>
            </VerticalHero>

            {/* Cosa sblocchiamo */}
            <ProcessUnlock />

            {/* Use Cases */}
            <LogisticsUseCases />

            {/* Dashboard Detail */}
            <SectionWrapper>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="aspect-video bg-muted rounded-2xl shadow-2xl border flex items-center justify-center">
                            <p className="text-muted-foreground italic">Dettaglio Dashboard</p>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8">
                            {d.dashboard.title}
                        </h2>
                        <ul className="space-y-4">
                            {d.dashboard.bullets.map((bullet, i) => (
                                <li key={i} className="flex gap-4 items-start">
                                    <div className="mt-1.5 shrink-0">
                                        <Check className="h-5 w-5 text-primary" />
                                    </div>
                                    <span className="text-lg text-muted-foreground leading-relaxed">{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </SectionWrapper>

            {/* Integrazione */}
            <IntegrationHub />

            {/* Benchmarks */}
            <BenchmarkSection
                title={d.benchmarks.title}
                items={d.benchmarks.items}
                variant="default"
            />

            {/* Final CTA */}
            <DemoCTA />
        </div>
    );
}
