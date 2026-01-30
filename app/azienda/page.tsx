import React from "react";
import { VerticalHero } from "@/components/shared/vertical-hero";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Shield, Target, Zap, Users } from "lucide-react";
import { DICTIONARY } from "@/lib/dictionary";
import { BrandText } from "@/components/ui/brand";

export default function AziendaPage() {
    const d = DICTIONARY.azienda;
    const values = DICTIONARY.azienda.values;
    const icons = [Shield, Zap, Target];

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

            {/* Values */}
            <SectionWrapper variant="muted">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
                        I nostri valori
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((value, i) => {
                        const Icon = icons[i];
                        return (
                            <div key={i} className="p-10 rounded-[2.5rem] bg-card border shadow-sm text-center group hover:border-primary/30 transition-all">
                                <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-8 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                    <Icon className="h-8 w-8" />
                                </div>
                                <h3 className="text-2xl font-bold">
                                    <BrandText text={value} />
                                </h3>
                            </div>
                        );
                    })}
                </div>
            </SectionWrapper>

            {/* Team Placeholder */}
            <SectionWrapper>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8 text-wrap-balance">
                            Un ecosistema di competenze
                        </h2>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                            <BrandText text="Ulisses nasce dall'unione di esperti in radiofrequenza, data science e gestione dei processi industriali. Non siamo solo fornitori di tecnologia, ma partner nel percorso di digitalizzazione." />
                        </p>
                        <div className="flex items-center gap-4 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                            <Users className="text-primary h-8 w-8" />
                            <p className="font-bold">Team multidisciplinare dal go-live alla produzione.</p>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            {/* R&D Link Section */}
            <SectionWrapper variant="muted" className="text-center">
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
