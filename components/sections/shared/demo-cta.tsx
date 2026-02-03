import React from "react";
import { FinalCTASection } from "./final-cta-section";
import { DICTIONARY } from "@/lib/dictionary";

export function DemoCTA() {
    const d = DICTIONARY.logistica;

    return (
        <FinalCTASection
            title={d.finalCta.title}
            subtitle={d.finalCta.subtitle}
            buttons={[
                { label: d.finalCta.ctaExpert, href: "/contatti" },
            ]}
        />
    );
}
