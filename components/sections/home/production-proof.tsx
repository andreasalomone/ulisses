import React from "react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { CheckCircle2, ShieldCheck, Zap, BarChart3 } from "lucide-react";
import { DICTIONARY } from "@/lib/dictionary";

export function ProductionProof() {
    const d = DICTIONARY.home.proof;
    const icons = [CheckCircle2, ShieldCheck, Zap, BarChart3];

    const proofs = d.items.map((item, i) => ({
        ...item,
        icon: icons[i]
    }));

    return (
        <SectionWrapper id="produzione" className="py-8 md:py-12">
            <div className="flex justify-end">
                <div className="w-full lg:w-[40%] lg:pr-4">
                    <div className="flex flex-wrap gap-3">
                        {proofs.map((proof, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50 hover:border-primary/30 transition-colors"
                            >
                                <proof.icon className="h-4 w-4 text-primary shrink-0" />
                                <span className="text-sm font-medium">{proof.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
