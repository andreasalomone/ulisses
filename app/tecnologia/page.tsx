import React from "react";
import { VerticalHero } from "@/components/shared/vertical-hero";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HowItWorks } from "@/components/sections/home/how-it-works";
import { TechnologyPillars } from "@/components/sections/tecnologia/technology-pillars";
import { DataCenterVisualization } from "@/components/sections/tecnologia/data-center-visualization";
import {
    Download,
    Network,
    Database,
    ShieldCheck,
    Layers,
    Landmark,
    Microscope,
    Scale
} from "lucide-react";
import { DICTIONARY } from "@/lib/dictionary";
import { DemoCTA } from "@/components/sections/shared/demo-cta";

export default function TecnologiaPage() {
    const d = DICTIONARY.tecnologia;
    const rd = DICTIONARY.ricercaIp;



    return (
        <div className="flex flex-col">
            <VerticalHero
                title={d.hero.h1}
                subtitle={d.hero.sub}
                className="min-h-[60vh]"
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
            <TechnologyPillars
                title={d.pillars.title}
                text={d.pillars.text}
                items={d.pillars.items}
            />

            {/* Infrastructure - Replaced with HowItWorks */}
            <HowItWorks
                title={d.infrastructure.title}
                subtitle={d.infrastructure.subtitle}
                items={d.infrastructure.items}
                withDeployment={false}
            />

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
                            {d.itArchitecture.items.map((item: { title: string, text: string }, i: number) => {
                                // const icons = [Cloud, Server, LayoutPanelLeft]; // Need to ensure these are imported or use existing
                                const Icon = [Network, Database, Layers][i % 3];
                                return (
                                    <div key={i} className="flex gap-6 p-6 rounded-3xl bg-muted/30 border border-transparent hover:border-primary/10 hover:bg-card transition-all cursor-pointer group shadow-xs">
                                        <div className="mt-1 h-10 w-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                            <Icon className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                                            <p className="text-muted-foreground">{item.text}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="relative aspect-square bg-linear-to-br from-muted to-muted/30 rounded-[4rem] border shadow-inner flex items-center justify-center p-8 overflow-hidden group">
                        <DataCenterVisualization />
                        <div className="absolute inset-0 bg-radial-[at_50%_50%] from-primary/5 to-transparent pointer-events-none"></div>
                    </div>
                </div>
            </SectionWrapper>

            {/* Research & IP Section - Redesigned to remove confusion */}
            <SectionWrapper id="ricerca" variant="muted">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Header Block */}
                    <div className="lg:col-span-8">
                        <h2 className="text-3xl md:text-6xl font-extrabold tracking-tight mb-8">
                            {rd.hero.h1}
                        </h2>
                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12 max-w-3xl">
                            {rd.hero.sub}
                        </p>
                    </div>

                    {/* Left Column: Collaborations & IP */}
                    <div className="lg:col-span-7 space-y-8">
                        <div className="p-10 bg-card rounded-[2.5rem] border shadow-sm group hover:border-primary/20 transition-all">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                    <Landmark className="h-6 w-6" />
                                </div>
                                <h3 className="text-3xl font-bold">{rd.collaborations.title}</h3>
                            </div>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                {rd.collaborations.text}
                            </p>
                            <div className="p-5 bg-muted/50 rounded-2xl border border-primary/10 inline-flex items-center gap-4">
                                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                                <span className="font-bold text-lg">{rd.collaborations.partner.name}</span>
                            </div>
                        </div>

                        <div className="p-10 bg-card rounded-[2.5rem] border shadow-sm group hover:border-primary/20 transition-all">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                    <Scale className="h-6 w-6" />
                                </div>
                                <h3 className="text-3xl font-bold">{rd.ip.title}</h3>
                            </div>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                {rd.ip.text}
                            </p>
                            <div className="p-8 bg-linear-to-br from-primary/5 to-primary/10 rounded-3xl border border-primary/10 flex items-center gap-6">
                                <ShieldCheck className="text-primary h-12 w-12 shrink-0" />
                                <p className="text-xl font-bold leading-snug">
                                    Proteggiamo il valore dei nostri clienti attraverso asset tecnologici proprietari.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Innovation Lab - Sticky prominence */}
                    <div className="lg:col-span-5">
                        <div className="lg:sticky lg:top-32 h-fit p-10 bg-primary text-primary-foreground rounded-[3rem] shadow-2xl relative overflow-hidden group">
                            {/* Decorative background element */}
                            <div className="absolute -right-16 -bottom-16 opacity-10 group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-700 ease-out">
                                <Microscope className="h-64 w-64" />
                            </div>

                            <div className="relative z-10">
                                <div className="h-16 w-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-8">
                                    <Microscope className="h-9 w-9" />
                                </div>
                                <h3 className="text-4xl font-extrabold mb-6 tracking-tight">Innovation Lab</h3>
                                <p className="text-xl opacity-90 leading-relaxed mb-12">
                                    I nostri laboratori testano costantemente nuove tipologie di rete e algoritmi di filtraggio per garantire prestazioni stabili in ambienti metallici e densi.
                                </p>
                                <Button asChild variant="secondary" size="lg" className="w-full font-bold h-16 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]">
                                    <Link href="/contatti">{rd.hero.ctaTalk}</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
            <DemoCTA />
        </div>
    );
}
