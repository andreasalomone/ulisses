"use client";

import React from "react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Trophy } from "lucide-react";
import { DICTIONARY } from "@/lib/dictionary";

export function AwardsSection() {
    const d = DICTIONARY.azienda.awards;

    return (
        <SectionWrapper>
            <div id="awards" className="">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6 uppercase tracking-widest">
                        <Trophy className="h-4 w-4" />
                        {d.label}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8">{d.title}</h2>
                    <p className="text-xl text-muted-foreground">{d.text}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {d.items.map((item, i) => (
                        <div key={i} className="flex flex-col items-center text-center p-10 rounded-[3rem] bg-card border shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all hover:-translate-y-2 group">
                            <div className="h-20 w-20 rounded-full bg-primary/5 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                                <Trophy className="h-10 w-10" />
                            </div>
                            <p className="font-extrabold text-2xl mb-2 tracking-tight">{item.title}</p>
                            <p className="text-primary font-bold text-xl">{item.year}</p>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
