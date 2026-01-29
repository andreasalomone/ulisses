import React from "react";
import { VerticalHero } from "@/components/shared/vertical-hero";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Download, Cpu, Network, Database, ShieldCheck, Activity, Layers } from "lucide-react";
import { DICTIONARY } from "@/lib/dictionary";

export default function TecnologiaPage() {
    const d = DICTIONARY.tecnologia;

    return (
        <div className="flex flex-col">
            <VerticalHero
                title={d.hero.h1}
                subtitle={d.hero.sub}
            >
                <Button asChild size="lg" className="h-14 px-8 text-base font-bold rounded-full">
                    <Link href="/contatti">{d.hero.ctaDemo}</Link>
                </Button>
                <Button variant="outline" size="lg" className="h-14 px-8 text-base font-bold rounded-full">
                    <Download className="mr-2 h-5 w-5" />
                    {d.hero.ctaSheet}
                </Button>
            </VerticalHero>

            {/* Pillars */}
            <SectionWrapper>
                <div className="max-w-4xl mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8">
                        {d.pillars.title}
                    </h2>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        {d.pillars.text}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {d.pillars.items.map((pillar: string, i: number) => (
                        <div key={i} className="p-8 rounded-3xl bg-muted/30 border border-transparent hover:border-primary/20 transition-all group">
                            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                <Cpu className="h-6 w-6" />
                            </div>
                            <p className="text-lg font-bold leading-snug">{pillar}</p>
                        </div>
                    ))}
                </div>
            </SectionWrapper>

            {/* Infrastructure */}
            <SectionWrapper variant="muted">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">{d.infrastructure.title}</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{d.infrastructure.subtitle}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {d.infrastructure.items.map((item: { title: string, text: string }, i: number) => (
                        <div key={i} className="p-8 bg-card rounded-[2rem] border shadow-sm">
                            <h3 className="text-xl font-bold mb-4 capitalize">{item.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                </div>
            </SectionWrapper>

            {/* IT Architecture */}
            <SectionWrapper>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8">
                            {d.itArchitecture.title}
                        </h2>
                        <p className="text-xl text-muted-foreground mb-12">
                            {d.itArchitecture.subtitle}
                        </p>
                        <div className="space-y-6">
                            {d.itArchitecture.items.map((item: { title: string, text: string }, i: number) => (
                                <div key={i} className="flex gap-6 p-6 rounded-2xl bg-muted/30 border border-transparent hover:border-muted-foreground/10 transition-colors">
                                    <div className="mt-1 h-6 w-6 text-primary shrink-0">
                                        <Network />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                                        <p className="text-muted-foreground">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative aspect-square bg-linear-to-br from-muted to-muted/30 rounded-[3.5rem] border shadow-inner flex items-center justify-center p-12 overflow-hidden">
                        <Database className="w-1/2 h-1/2 text-primary/10" />
                        <div className="absolute inset-0 bg-radial-[at_50%_50%] from-primary/5 to-transparent"></div>
                    </div>
                </div>
            </SectionWrapper>

            {/* Integrations & Observability */}
            <SectionWrapper variant="muted">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="p-10 bg-card rounded-[2.5rem] border shadow-sm flex flex-col justify-between">
                        <div>
                            <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8">
                                <Layers className="h-7 w-7" />
                            </div>
                            <h3 className="text-3xl font-bold mb-4">{d.integrations.title}</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{d.integrations.subtitle}</p>
                        </div>
                        <div className="p-6 bg-muted/50 rounded-2xl border border-muted-foreground/5 italic text-muted-foreground">
                            {d.integrations.common}
                        </div>
                    </div>

                    <div className="p-10 bg-card rounded-[2.5rem] border shadow-sm">
                        <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8">
                            <Activity className="h-7 w-7" />
                        </div>
                        <h3 className="text-3xl font-bold mb-4">{d.observability.title}</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">{d.observability.subtitle}</p>
                        <ul className="space-y-4">
                            {d.observability.items.map((item: string, i: number) => (
                                <li key={i} className="flex items-start gap-3">
                                    <ShieldCheck className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                                    <span className="font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
}
