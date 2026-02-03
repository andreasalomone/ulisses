"use client";

import React from "react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Flag } from "lucide-react";
import { BrandText } from "@/components/ui/brand";
import { DICTIONARY } from "@/lib/dictionary";

export function MissionSection() {
    const d = DICTIONARY.azienda.mission;

    return (
        <SectionWrapper>
            <div className="max-w-4xl mx-auto text-center space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm uppercase tracking-widest">
                    <Flag className="h-4 w-4" />
                    {d.title}
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                    <BrandText text={d.text} />
                </h2>
            </div>
        </SectionWrapper>
    );
}
