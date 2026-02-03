"use client";

import React from "react";
import { DICTIONARY } from "@/lib/dictionary";
import { FinalCTASection } from "@/components/sections/shared/final-cta-section";

export function FinalCtaSection() {
    const d = DICTIONARY.azienda.cta;

    return (
        <FinalCTASection
            title={d.title.replace("? ", "?\n")}
            subtitle={d.text}
            buttons={[
                { label: d.button, href: "/contatti" }
            ]}
        />
    );
}
