import React from "react";
import { FinalCTASection } from "./final-cta-section";
import { useTranslations } from "next-intl";

interface DemoCTAProps {
    title?: string;
    subtitle?: string;
    ctaLabel?: string;
    ctaLink?: string;
}

export function DemoCTA({ title, subtitle, ctaLabel, ctaLink = "/contatti" }: DemoCTAProps) {
    const t = useTranslations('common');

    return (
        <FinalCTASection
            title={title || t('callToAction.title')}
            subtitle={subtitle || t('callToAction.subtitle')}
            buttons={[
                { label: ctaLabel || t('callToAction.button'), href: ctaLink },
            ]}
        />
    );
}
