import React from "react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Separator } from "@/components/ui/separator";
import { DICTIONARY } from "@/lib/dictionary";

export function WhyUlisses() {
    const d = DICTIONARY.home.why;

    return (
        <SectionWrapper>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div>
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8">
                        {d.title}
                    </h2>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        {d.intro}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-12">
                    {d.columns.map((col, i) => (
                        <div key={i} className="space-y-4">
                            <h3 className="text-xl font-bold text-primary italic">Vs {col.title}</h3>
                            <p className="text-muted-foreground leading-relaxed italic">
                                {col.text}
                            </p>
                            {i < d.columns.length - 1 && <Separator />}
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-20 p-8 md:p-12 rounded-3xl bg-secondary/5 border border-primary/10 flex flex-col md:flex-row justify-between items-center gap-8">
                <p className="text-xl font-bold text-center md:text-left leading-snug">
                    {d.closure}
                </p>
            </div>
        </SectionWrapper>
    );
}
