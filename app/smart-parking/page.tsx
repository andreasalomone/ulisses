import React from "react";
import { VerticalHero } from "@/components/shared/vertical-hero";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SmartParkingUseCases } from "@/components/sections/parking/smart-parking-use-cases";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Signal, HardDrive, Zap } from "lucide-react";
import { DICTIONARY } from "@/lib/dictionary";
import { BenchmarkSection } from "@/components/sections/shared/benchmark-section";
import { DemoCTA } from "@/components/sections/shared/demo-cta";

export default function SmartParkingPage() {
    const d = DICTIONARY.parking;

    return (
        <div className="flex flex-col">
            <VerticalHero
                title={d.hero.h1}
                subtitle={d.hero.sub}
                titleToken={d.hero.h1Highlight}
                image="/assets/parking-iso.png"
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
                        Esplora come Ulisses Smart Parking risolve sfide specifiche per la tua organizzazione.
                    </p>
                </div>
                <SmartParkingUseCases />
            </SectionWrapper>

            {/* Rete Privata */}
            <SectionWrapper>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8">
                            {d.privateNetwork.title}
                        </h2>
                        <div className="space-y-6">
                            {d.privateNetwork.bullets.map((bullet, i) => (
                                <div key={i} className="flex gap-4 items-start p-4 rounded-2xl hover:bg-muted/50 transition-colors duration-200">
                                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        {i === 0 ? <Signal className="h-6 w-6" /> : i === 1 ? <HardDrive className="h-6 w-6" /> : <Zap className="h-6 w-6" />}
                                    </div>
                                    <div>
                                        <p className="text-lg font-medium text-foreground">{bullet}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 flex justify-center items-center">
                        <div className="relative w-7/12 max-w-lg lg:max-w-full aspect-square md:aspect-auto rounded-2xl overflow-hidden">
                            <Image
                                src="/assets/mockup-parking.png"
                                alt="Smart Parking Network Visualization"
                                width={450}
                                height={338}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            {/* Dashboard detail */}
            <SectionWrapper variant="muted">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="aspect-video bg-card rounded-2xl shadow-2xl border flex items-center justify-center">
                            <p className="text-muted-foreground italic">Dashboard Smart Parking</p>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8">
                            Dashboard e Insights
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

            {/* Benchmarks */}
            <BenchmarkSection
                title={d.benchmarks.title}
                items={d.benchmarks.items}
                extra={d.benchmarks.extra}
            />

            {/* Final CTA */}
            <DemoCTA />
        </div>
    );
}
