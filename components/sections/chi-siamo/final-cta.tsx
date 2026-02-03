"use client";

import React from "react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DICTIONARY } from "@/lib/dictionary";

export function FinalCtaSection() {
    const d = DICTIONARY.azienda.cta;

    return (
        <SectionWrapper variant="muted" className="text-center py-24">
            <div className="max-w-2xl mx-auto space-y-8">
                <h2 className="text-3xl md:text-4xl font-extrabold text-wrap-balance leading-tight">
                    {d.text}
                </h2>
                <Button asChild size="lg" className="h-16 px-10 text-lg font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105">
                    <Link href="/contatti">{d.button}</Link>
                </Button>
            </div>
        </SectionWrapper>
    );
}
