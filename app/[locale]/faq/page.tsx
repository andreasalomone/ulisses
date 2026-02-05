import React from "react";
import { FaqSection } from "@/components/shared/faq-section";

import { getTranslations } from "next-intl/server";
import { Metadata } from 'next';
import { getLocalizedAlternates } from '@/lib/i18n-metadata';
import { SITE_CONFIG } from '@/lib/constants';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'metadata' });

    return {
        title: t('faq.title'),
        alternates: {
            canonical: `${SITE_CONFIG.url}/${locale}/faq`,
            languages: getLocalizedAlternates('/faq', SITE_CONFIG.url)
        }
    };
}

export default function FaqPage() {
    return (
        <div className="flex flex-col">
            <FaqSection />
        </div>
    );
}
