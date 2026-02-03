"use client";

import React from "react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Users } from "lucide-react";
import { DICTIONARY } from "@/lib/dictionary";

export function StorySection() {
    const d = DICTIONARY.azienda.story;

    if (!d) return null;

    return (
        <SectionWrapper variant="muted">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">{d.title}</h2>
                    <p className="text-xl font-medium text-foreground">{d.spark}</p>
                    <p className="text-lg text-muted-foreground leading-relaxed">{d.narrative}</p>
                    <p className="text-lg text-muted-foreground leading-relaxed">{d.evolution}</p>
                </div>
                <div className="relative aspect-square md:aspect-4/5 bg-linear-to-br from-primary/20 to-secondary/20 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center p-8">
                    {/* Placeholder for Origin Story Visual - Abstract or Team Photo */}
                    <div className="text-center space-y-4">
                        <Users className="w-24 h-24 text-primary/40 mx-auto" />
                        <p className="text-muted-foreground font-semibold">Ulisses Team & Culture</p>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
