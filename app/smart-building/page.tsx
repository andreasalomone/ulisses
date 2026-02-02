import React from "react";
import { VerticalHero } from "@/components/shared/vertical-hero";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SmartBuildingExplorer } from "@/components/sections/smart-building/smart-building-explorer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DICTIONARY } from "@/lib/dictionary";
import { DemoCTA } from "@/components/sections/shared/demo-cta";

export default function SmartBuildingPage() {
    const d = DICTIONARY.smartBuilding;

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

            {/* Interactive Explorer */}
            <SectionWrapper>
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8">
                        Soluzioni su misura per ogni scenario
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl">
                        Il monitoraggio di asset critici, insieme alla gestione sicura di ingressi e uscite, è spesso frammentato tra sistemi disparati.
                    </p>
                </div>
                <SmartBuildingExplorer
                    segments={d.segments}
                    useCases={d.useCases}
                    mapping={d.useCaseMapping}
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
                            {d.dashboard.title}
                        </h2>
                        <ul className="space-y-4">
                            {d.dashboard.bullets.map((bullet, i) => (
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
