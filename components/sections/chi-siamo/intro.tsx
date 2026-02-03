"use client";

import React from "react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { DICTIONARY } from "@/lib/dictionary";

export function IntroSection() {
    const d = DICTIONARY.azienda.hero;

    return (
        <SectionWrapper className="pt-0 pb-16 md:pb-24">
            <div className="max-w-5xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-foreground leading-[1.1]">
                    {d.h1}
                </h1>
                <p className="text-2xl md:text-4xl font-medium leading-relaxed text-muted-foreground text-balance max-w-4xl mx-auto">
                    {d.text}
                </p>
            </div>
        </SectionWrapper>
    );
}
