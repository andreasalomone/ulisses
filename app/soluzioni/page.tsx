import React from "react";
import { VerticalHero } from "@/components/shared/vertical-hero";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { DICTIONARY } from "@/lib/dictionary";
import Image from "next/image";

export default function SoluzioniPage() {
    const d = DICTIONARY.solutions;
    const { common, home } = DICTIONARY;

    const cards = [
        {
            ...home.selector.cards.logistica,
            href: "/logistica",
            resolutions: home.selector.cards.logistica.resolutions,
            image: "/assets/stock.webp"
        },
        {
            ...home.selector.cards.ferroviario,
            href: "/ferroviario",
            resolutions: home.selector.cards.ferroviario.resolutions,
            image: "/assets/trains.webp"
        },
        {
            ...home.selector.cards.parking,
            href: "/smart-parking",
            resolutions: home.selector.cards.parking.resolutions,
            image: "/assets/parking.webp"
        }
    ];

    return (
        <div className="flex flex-col">
            <VerticalHero
                title={d.hero.h1}
                subtitle={d.hero.intro}
            >
                <Button asChild size="lg" className="h-14 px-8 text-base font-bold rounded-full">
                    <Link href="/contatti">{common.demoCta}</Link>
                </Button>
                <Button variant="outline" size="lg" className="h-14 px-8 text-base font-bold rounded-full">
                    <Download className="mr-2 h-5 w-5" />
                    {common.onePagerCta}
                </Button>
            </VerticalHero>

            {/* Scenario Selector */}
            <SectionWrapper>
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
                        {home.selector.title}
                    </h2>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                        {home.selector.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {cards.map((card, i) => (
                        <Card key={i} className="group overflow-hidden rounded-[2rem] border bg-card hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
                            <div className="relative h-64 w-full overflow-hidden">
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                            <CardContent className="p-8 md:p-10 flex flex-col grow">
                                <div className="grow">
                                    <h3 className="text-2xl md:text-3xl font-extrabold mb-4 group-hover:text-primary transition-colors">
                                        {card.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed mb-8">
                                        {card.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {card.resolutions.map((res, j) => (
                                            <span key={j} className="text-xs font-bold uppercase tracking-wider text-primary-foreground/60 px-3 py-1 rounded-full bg-muted border">
                                                {res}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <Button asChild variant="link" className="p-0 h-auto font-bold text-lg group/btn w-fit">
                                    <Link href={card.href} className="flex items-center gap-2">
                                        {card.cta}
                                        <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </SectionWrapper>

            {/* Metodo Ulisses */}
            <SectionWrapper variant="muted">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
                            {d.method.title}
                        </h2>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            {d.method.intro}
                        </p>
                    </div>

                    <div className="space-y-12">
                        {d.method.steps.map((step, i) => (
                            <div key={i} className="flex gap-8 items-start relative">
                                <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 font-bold text-lg shadow-lg relative z-10">
                                    {i + 1}
                                </div>
                                {i < d.method.steps.length - 1 && (
                                    <div className="absolute left-6 top-12 bottom-0 w-px bg-primary/20 -translate-x-1/2" />
                                )}
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold mb-3">{step.title}</h3>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        {step.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 p-10 rounded-[2.5rem] bg-card border border-primary/20 shadow-xl text-center">
                        <h4 className="text-2xl font-bold mb-8">{home.cta.title}</h4>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="h-14 px-8 font-bold rounded-full">
                                <Link href="/contatti">{common.expertCta}</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="h-14 px-8 font-bold rounded-full">
                                <Link href="/contatti">{common.demoCta}</Link>
                            </Button>
                        </div>
                        <p className="mt-6 text-sm text-muted-foreground italic">
                            {home.cta.formMicrocopy}
                        </p>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
}
