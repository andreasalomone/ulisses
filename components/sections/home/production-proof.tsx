import React from "react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { CheckCircle2, ShieldCheck, Zap, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DICTIONARY } from "@/lib/dictionary";

export function ProductionProof() {
    const d = DICTIONARY.home.proof;
    const icons = [CheckCircle2, ShieldCheck, Zap, BarChart3];

    const proofs = d.items.map((item, i) => ({
        ...item,
        icon: icons[i]
    }));

    return (
        <SectionWrapper id="produzione" variant="muted" className="relative overflow-hidden">
            {/* [2026 Standard] Container query wrapper */}
            <div className="@container">
                {/* [2026 Standard] Use @3xl (approx 768px) for main split */}
                <div className="grid grid-cols-1 @3xl:grid-cols-2 gap-16 items-start relative z-10">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8">
                            {d.title}
                        </h2>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                            {d.subtitle}
                        </p>
                        <p className="text-lg font-bold text-foreground leading-relaxed italic border-l-4 border-primary pl-6 py-2 mb-10 bg-primary/5 rounded-r-xl">
                            {DICTIONARY.home.why.closure}
                        </p>
                        <Button asChild className="rounded-full h-12 px-8 font-bold group">
                            <Link href="/contatti">
                                Approfondisci il Metodo
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                    </div>

                    {/* [2026 Standard] Use @lg (approx 512px) for card grid */}
                    <div className="grid grid-cols-1 @lg:grid-cols-2 gap-6">
                        {proofs.map((proof, index) => (
                            <div key={index} className="p-6 rounded-2xl bg-card border hover:border-primary/30 transition-all duration-300 shadow-sm group">
                                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <proof.icon className="h-5 w-5" />
                                </div>
                                <h3 className="text-lg font-bold mb-2">{proof.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {proof.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Abstract Background Detail */}
            <div className="absolute left-0 bottom-0 w-full h-1/2 bg-linear-to-t from-primary/3 to-transparent -z-10" />
        </SectionWrapper>
    );
}
