import React from "react";
import { VerticalHero } from "@/components/shared/vertical-hero";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { UseCaseCards } from "@/components/shared/use-case-cards";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Download, Wrench, Package, Cpu, FileCheck } from "lucide-react";
import { DICTIONARY } from "@/lib/dictionary";
import { FinalCTASection } from "@/components/sections/shared/final-cta-section";

export default function FerroviarioPage() {
    const d = DICTIONARY.ferroviario;
    const icons = [Wrench, Package, Cpu, FileCheck];

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
                <Button variant="outline" size="lg" className="h-14 px-8 text-base font-bold rounded-full">
                    <Download className="mr-2 h-5 w-5" />
                    {d.hero.onePager}
                </Button>
            </VerticalHero>

            {/* Cosa sblocchiamo */}
            <SectionWrapper>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8">
                            Cosa sblocchiamo nel processo
                        </h2>
                        <ul className="space-y-6">
                            {d.process.map((item, i) => (
                                <li key={i} className="flex gap-4 items-start">
                                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                                        <div className="h-2 w-2 rounded-full bg-primary" />
                                    </div>
                                    <p className="text-lg text-muted-foreground leading-relaxed">{item}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-muted/30 rounded-[2.5rem] p-8 md:p-12 border">
                        <div className="aspect-square bg-card rounded-2xl shadow-inner flex items-center justify-center border-2 border-dashed border-primary/20">
                            <p className="text-muted-foreground italic">Mockup Dashboard Ferroviario</p>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            {/* Use Cases */}
            <SectionWrapper variant="muted">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
                        Use case operativi
                    </h2>
                </div>
                <UseCaseCards items={d.useCases} icons={icons} />
            </SectionWrapper>

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
                                    <span className="text-lg text-muted-foreground">{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </SectionWrapper>

            {/* Final CTA */}
            <FinalCTASection
                title={d.finalCta.title}
                subtitle={d.finalCta.subtitle}
                buttons={[
                    { label: d.finalCta.ctaPilot, href: "/contatti" },
                    { label: d.finalCta.ctaExpert, href: "/contatti", variant: "outline" }
                ]}
            />
        </div>
    );
}
