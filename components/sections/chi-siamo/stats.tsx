"use client";

import React from "react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { DICTIONARY } from "@/lib/dictionary";

export function StatsSection() {
    const d = DICTIONARY.azienda.stats;

    if (!d) return null;

    return (
        <SectionWrapper>
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold tracking-tight mb-16">{d.title}</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {d.items.map((stat, i) => (
                        <div key={i} className="flex flex-col items-center space-y-2 p-6 rounded-2xl bg-card border shadow-sm hover:shadow-md transition-all">
                            <div className="text-4xl md:text-5xl font-black text-primary tracking-tighter">
                                {stat.value}
                            </div>
                            <div className="text-sm md:text-base font-bold text-muted-foreground uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
