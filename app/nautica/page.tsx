import React from "react";
import { VerticalHero } from "@/components/shared/vertical-hero";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DICTIONARY } from "@/lib/dictionary";
import { DemoCTA } from "@/components/sections/shared/demo-cta";
import { ProcessUnlock } from "@/components/sections/nautica/process-unlock";
import { FeaturedStory } from "@/components/sections/nautica/featured-story";

export default function NauticaPage() {
    const d = DICTIONARY.nautica;

    return (
        <div className="flex flex-col">
            <VerticalHero
                title={d.hero.h1}
                subtitle={d.hero.sub}
                titleToken={d.hero.h1Highlight}
                image="/assets/nautica.png"
            >
                <Button asChild size="lg" className="h-14 px-8 text-base font-bold rounded-full">
                    <Link href="/contatti">{d.hero.cta}</Link>
                </Button>
            </VerticalHero>

            {/* Cosa sblocchiamo */}
            <ProcessUnlock />

            {/* Featured Story: Ministero del Turismo */}
            <FeaturedStory />

            {/* Diportista CTA */}
            {d.diportistaCta && (
                <SectionWrapper>
                    <div className="relative overflow-hidden rounded-[2.5rem] bg-linear-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 p-12 md:p-24 text-center">
                        <div className="max-w-2xl mx-auto space-y-8 relative z-10">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                                {d.diportistaCta.title}
                            </h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                {d.diportistaCta.subtitle}
                            </p>
                            <Button asChild size="lg" className="h-14 px-8 text-lg font-bold rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all hover:scale-105">
                                <Link href="https://app.ulisses.it">{d.diportistaCta.cta}</Link>
                            </Button>
                        </div>

                        {/* Background Accents */}
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-50">
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                        </div>
                    </div>
                </SectionWrapper>
            )}

            {/* Final CTA */}
            <DemoCTA />
        </div>
    );
}
