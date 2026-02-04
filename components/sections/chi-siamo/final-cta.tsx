import React from "react";
import { useTranslations } from "next-intl";
import { FinalCTASection } from "@/components/sections/shared/final-cta-section";

export function FinalCtaSection() {
    const t = useTranslations('azienda.cta');

    return (
        <FinalCTASection
            title={t('title').replace("? ", "?\n")}
            subtitle={t('text')}
            buttons={[
                { label: t('button'), href: "/contatti" }
            ]}
        />
    );
}
