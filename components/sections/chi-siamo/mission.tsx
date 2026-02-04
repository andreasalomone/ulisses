"use client";

import React from "react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Flag } from "lucide-react";
import { BrandText } from "@/components/ui/brand";
import { useTranslations } from "next-intl";

export function MissionSection() {
    const t = useTranslations('azienda.mission');

    return (
        <SectionWrapper variant="primary">
            <div className="max-w-4xl mx-auto text-center space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-bold text-sm uppercase tracking-widest border border-white/20">
                    <Flag className="h-4 w-4" />
                    {t('title')}
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-[1.2] text-white">
                    <BrandText text={t('text')} brandClassName="text-white" />
                </h2>
            </div>
        </SectionWrapper>
    );
}
