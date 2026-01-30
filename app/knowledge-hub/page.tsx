import React from "react";
import { VerticalHero } from "@/components/shared/vertical-hero";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileText, Download, ArrowRight } from "lucide-react";
import { DICTIONARY } from "@/lib/dictionary";
import { FaqSection } from "@/components/shared/faq-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrandText } from "@/components/ui/brand";

export default function KnowledgeHubPage() {
    const d = DICTIONARY.knowledgeHub;
    const { stories } = d;

    return (
        <div className="flex flex-col">
            <VerticalHero
                title={d.hero.h1}
                subtitle={d.hero.sub}
            >
                <Button asChild size="lg" className="h-14 px-8 text-base font-bold rounded-full">
                    <Link href="/contatti">{DICTIONARY.home.cta.button}</Link>
                </Button>
            </VerticalHero>

            {/* Stories Section */}
            <SectionWrapper>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
                        <BrandText text={stories.title} />
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        <BrandText text={stories.text} />
                    </p>
                </div>

                <div className="space-y-16">
                    {stories.sections.map((section, i) => (
                        <div key={i}>
                            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                <span className="bg-primary/10 text-primary px-3 py-1 rounded-md text-sm uppercase tracking-wider">{section.vertical}</span>
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {section.items.map((item, j) => (
                                    <Card key={j} className="bg-card hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary/20 hover:border-l-primary">
                                        <CardHeader>
                                            <CardTitle className="text-xl leading-tight">
                                                <BrandText text={item.title} />
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                                <BrandText text={item.text} />
                                            </p>
                                            <Button asChild variant="link" className="p-0 h-auto font-bold group">
                                                <Link href="/contatti">
                                                    Ricevi il Pilot Kit <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                                </Link>
                                            </Button>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </SectionWrapper>

            {/* Documents Section */}
            <SectionWrapper variant="muted">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8">
                            <BrandText text={d.documents.title} />
                        </h2>
                        <div className="grid grid-cols-1 gap-4">
                            {d.documents.items.map((doc, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 bg-background rounded-xl border hover:border-primary/50 transition-colors group cursor-pointer">
                                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                        <FileText className="h-6 w-6" />
                                    </div>
                                    <span className="font-bold text-lg grow">
                                        <BrandText text={doc} />
                                    </span>
                                    <Download className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="bg-primary text-primary-foreground p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-3xl font-bold mb-6">Serve supporto tecnico?</h3>
                                <p className="text-xl opacity-90 mb-8 leading-relaxed">
                                    I nostri esperti possono guidarti nella scelta dell&apos;architettura e nel dimensionamento del progetto.
                                </p>
                                <Button asChild variant="secondary" size="lg" className="h-14 px-8 text-base font-bold rounded-full w-full sm:w-auto">
                                    <Link href="/contatti">Parla con un esperto</Link>
                                </Button>
                            </div>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            {/* FAQ Section */}
            <FaqSection />
        </div>
    );
}
