
import React from "react";
import { VerticalHero } from "@/components/shared/vertical-hero";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Lightbulb } from "lucide-react";
import { DICTIONARY } from "@/lib/dictionary";
import { BrandText } from "@/components/ui/brand";
import { ReviewSection } from "@/components/sections/azienda/review-section";
import { TeamGrid } from "@/components/sections/azienda/team-grid";



export default function AziendaPage() {
    const d = DICTIONARY.azienda;

    return (
        <div className="flex flex-col">
            <VerticalHero
                title={d.hero.h1}
                subtitle={d.hero.text}
            >
                <Button asChild size="lg" className="h-14 px-8 text-base font-bold rounded-full">
                    <Link href="/contatti">{d.cta}</Link>
                </Button>
            </VerticalHero>

            {/* Mission */}
            <SectionWrapper>
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8">
                        <BrandText text={d.mission.title} />
                    </h2>
                    <p className="text-2xl md:text-3xl font-medium leading-relaxed text-muted-foreground italic">
                        &quot;<BrandText text={d.mission.text} />&quot;
                    </p>
                </div>
            </SectionWrapper>

            {/* Review Trenord */}
            {d.review && (
                <ReviewSection
                    text={d.review.text}
                    author={d.review.author}
                    role={d.review.role}
                />
            )}

            {/* Team & Board */}
            <SectionWrapper>
                <div className="max-w-5xl mx-auto space-y-12">
                    {/* Team */}
                    {d.team && <TeamGrid title="Questo il team 👇" members={d.team} />}

                    {/* Board */}
                    {d.board && <TeamGrid title="Questo il board 👇" members={d.board} />}
                </div>
            </SectionWrapper>

            {/* Awards - Re-styled for premium feel */}
            <SectionWrapper variant="muted">
                <div id="awards" className="">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6 uppercase tracking-widest">
                            <Lightbulb className="h-4 w-4" />
                            {d.awards.label}
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8">{d.awards.title}</h2>
                        <p className="text-xl text-muted-foreground">{d.awards.text}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {d.awards.items.map((item, i) => (
                            <div key={i} className="flex flex-col items-center text-center p-10 rounded-[3rem] bg-card border shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all hover:-translate-y-2 group">
                                <div className="h-20 w-20 rounded-full bg-primary/5 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                                    <Lightbulb className="h-10 w-10" />
                                </div>
                                <p className="font-extrabold text-2xl mb-2 tracking-tight">{item.title}</p>
                                <p className="text-primary font-bold text-xl">{item.year}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>

            {/* R&D Link Section */}
            <SectionWrapper className="text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6 text-wrap-balance">Investiamo nel futuro</h2>
                    <p className="text-lg text-muted-foreground mb-10">La nostra tecnologia evolve costantemente attraverso il reparto R&D e collaborazioni universitarie.</p>
                    <Button asChild variant="outline" size="lg" className="rounded-full px-8 font-bold">
                        <Link href="/tecnologia#ricerca">Scopri Ricerca & IP</Link>
                    </Button>
                </div>
            </SectionWrapper>
        </div>
    );
}
