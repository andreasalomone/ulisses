import React from "react";
import { VerticalHero } from "@/components/shared/vertical-hero";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Download, Landmark, Lightbulb, ShieldCheck, Microscope } from "lucide-react";
import { DICTIONARY } from "@/lib/dictionary";

export default function RicercaIpPage() {
    const d = DICTIONARY.ricercaIp;

    return (
        <div className="flex flex-col">
            <VerticalHero
                title={d.hero.h1}
                subtitle={d.hero.sub}
            >
                <Button asChild size="lg" className="h-14 px-8 text-base font-bold rounded-full">
                    <Link href="/contatti">{d.hero.ctaTalk}</Link>
                </Button>
                <Button variant="outline" size="lg" className="h-14 px-8 text-base font-bold rounded-full">
                    <Download className="mr-2 h-5 w-5" />
                    {d.hero.ctaSheet}
                </Button>
            </VerticalHero>

            {/* Collaborations */}
            <SectionWrapper>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8">
                            {d.collaborations.title}
                        </h2>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                            {d.collaborations.text}
                        </p>
                        <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10 inline-flex items-center gap-4">
                            <Landmark className="text-primary h-6 w-6" />
                            <span className="font-bold">{d.collaborations.partner.name}</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                        {/* Placeholder for University/Partner logos */}
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="aspect-video bg-muted/30 rounded-2xl border flex items-center justify-center p-8">
                                <Landmark className="text-muted-foreground/40 h-10 w-10" />
                            </div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>

            {/* IP & Methods */}
            <SectionWrapper variant="muted">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8">
                            {d.ip.title}
                        </h2>
                        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                            {d.ip.text}
                        </p>
                        <div className="p-8 bg-card rounded-3xl border shadow-sm inline-block">
                            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                                <ShieldCheck className="h-5 w-5" />
                            </div>
                            <p className="text-lg font-bold leading-relaxed max-w-sm">
                                Proteggiamo il valore dei nostri clienti attraverso asset tecnologici proprietari.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="sticky top-32 p-8 bg-primary text-primary-foreground rounded-[2rem] shadow-xl">
                            <Microscope className="h-12 w-12 mb-6 opacity-50" />
                            <h3 className="text-2xl font-bold mb-4">Innovation Lab</h3>
                            <p className="opacity-80 leading-relaxed mb-8">
                                I nostri laboratori testano costantemente nuove tipologie di rete e algoritmi di filtraggio per garantire prestazioni stabili in ambienti metallici e densi.
                            </p>
                            <Button asChild variant="secondary" className="w-full font-bold">
                                <Link href="/contatti">{d.hero.ctaTalk}</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            {/* Awards */}
            <SectionWrapper>
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8">{d.awards.title}</h2>
                    <p className="text-xl text-muted-foreground mb-16">{d.awards.text}</p>
                    <div className="flex flex-wrap justify-center gap-12">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex flex-col items-center gap-4">
                                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl">
                                    <Lightbulb />
                                </div>
                                <p className="font-bold text-muted-foreground">Premio Innovazione {2020 + i}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
}
