import React from "react";
import { VerticalHero } from "@/components/shared/vertical-hero";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { UseCaseCards } from "@/components/shared/use-case-cards";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Download, LayoutDashboard, Bell, Activity, Layers, Signal, HardDrive, Zap } from "lucide-react";
import { DICTIONARY } from "@/lib/dictionary";
import { BenchmarkSection } from "@/components/sections/shared/benchmark-section";
import { FinalCTASection } from "@/components/sections/shared/final-cta-section";

export default function SmartParkingPage() {
    const d = DICTIONARY.parking;
    const icons = [LayoutDashboard, Bell, Activity, Layers];

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
                <Button variant="outline" size="lg" className="h-14 px-8 text-base font-bold rounded-full">
                    <Download className="mr-2 h-5 w-5" />
                    {d.hero.onePager}
                </Button>
            </VerticalHero>

            {/* Per chi è */}
            <SectionWrapper>
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8">
                        Per chi è Ulisses Smart Parking
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {d.segments.map((segment, i) => (
                        <div key={i} className="p-8 rounded-[2rem] bg-muted/30 border shadow-sm">
                            <h3 className="text-xl font-bold mb-4">{segment.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{segment.text}</p>
                        </div>
                    ))}
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

            {/* Rete Privata */}
            <SectionWrapper>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8">
                            {d.privateNetwork.title}
                        </h2>
                        <ul className="space-y-6">
                            {d.privateNetwork.bullets.map((bullet, i) => (
                                <li key={i} className="flex gap-4 items-start">
                                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        {i === 0 ? <Signal className="h-5 w-5" /> : i === 1 ? <HardDrive className="h-5 w-5" /> : <Zap className="h-5 w-5" />}
                                    </div>
                                    <p className="text-lg text-muted-foreground leading-relaxed">{bullet}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative">
                        <div className="aspect-square bg-primary/5 rounded-[3rem] border-2 border-dashed border-primary/20 flex items-center justify-center">
                            <p className="text-muted-foreground italic">Visual Rete Privata / Gateway</p>
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
            <FinalCTASection
                title={d.finalCta.title}
                subtitle={d.finalCta.subtitle}
                buttons={[
                    { label: d.finalCta.ctaExpert, href: "/contatti" },
                    { label: d.finalCta.ctaDemo, href: "/contatti", variant: "outline" },
                    { label: d.finalCta.ctaOnePager, href: "/contatti", variant: "ghost" }
                ]}
            />
        </div>
    );
}
