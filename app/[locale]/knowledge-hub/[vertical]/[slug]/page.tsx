import React from "react";
import { VerticalHero } from "@/components/shared/vertical-hero";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Button } from "@/components/ui/button";
import { Link, getPathname } from "@/i18n/routing";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Metadata } from 'next';
import { getLocalizedAlternates } from '@/lib/i18n-metadata';
import { SITE_CONFIG } from '@/lib/constants';
import { Locale } from "@/i18n";

// Define simpler interface matching what we put in JSON
interface StoryContent {
    scenario: string;
    challenge: string;
    resolution: string;
    productionReady: string;
    result: string;
    introCTA?: string;
    cta: string;
}

interface StoryItem {
    title: string;
    text: string;
    link: string;
    fullContent?: StoryContent;
}

interface StorySection {
    vertical: string;
    items: StoryItem[];
}

interface StoryPageProps {
    params: Promise<{
        vertical: string;
        slug: string;
        locale: string;
    }>;
}

export async function generateMetadata({ params }: StoryPageProps): Promise<Metadata> {
    const { vertical, slug, locale } = await params;
    const t = await getTranslations({ locale, namespace: 'knowledgeHub' });
    const stories = t.raw('stories') as { sections: StorySection[] };

    const allItems = stories.sections.flatMap(s => s.items.map(item => ({ ...item, vertical: s.vertical })));

    const story = allItems.find((item) => {
        try {
            const localizedLink = getPathname({
                locale: locale as Locale,
                href: item.link as Parameters<typeof getPathname>[0]['href']
            });
            // Match against current full path
            const target = `/${locale}/knowledge-hub/${vertical}/${slug}`;
            return localizedLink === target;
        } catch {
            return item.link === `/knowledge-hub/${vertical}/${slug}`;
        }
    });

    if (!story) return {};

    return {
        title: story.title,
        alternates: {
            // Since slugs are currently shared, we can use the helper with the full path
            canonical: `${SITE_CONFIG.url}/${locale}/knowledge-hub/${vertical}/${slug}`,
            languages: getLocalizedAlternates(`/knowledge-hub/${vertical}/${slug}`, SITE_CONFIG.url)
        }
    };
}

export default async function StoryPage({ params }: StoryPageProps) {
    const resolvedParams = await params;
    const { vertical, slug } = resolvedParams;
    const t = await getTranslations('knowledgeHub');
    const stories = t.raw('stories') as { sections: StorySection[] };

    // Use flat-lookup across all sections for robustness against localized vertical params
    const allItems = stories.sections.flatMap(s => s.items.map(item => ({ ...item, vertical: s.vertical })));

    const story = allItems.find((item) => {
        try {
            const localizedLink = getPathname({
                locale: resolvedParams.locale as Locale,
                href: item.link as Parameters<typeof getPathname>[0]['href']
            });
            // Match against current full path
            const target = `/${resolvedParams.locale}/knowledge-hub/${vertical}/${slug}`;
            return localizedLink === target;
        } catch {
            return item.link === `/knowledge-hub/${vertical}/${slug}`;
        }
    });

    if (!story || !story.fullContent) {
        return notFound();
    }

    const content = story.fullContent;

    return (
        <div className="flex flex-col">
            <VerticalHero
                title={story.title}
                subtitle={content.scenario}
            >
                <div className="flex flex-col gap-6 items-start">
                    {content.introCTA && (
                        <p className="text-xl font-medium text-foreground max-w-2xl leading-relaxed whitespace-pre-line">
                            {content.introCTA}
                        </p>
                    )}
                    <Button asChild size="lg" className="h-14 px-8 text-base font-bold rounded-full">
                        <Link href="/contatti">{content.cta}</Link>
                    </Button>
                </div>
            </VerticalHero>

            <SectionWrapper>
                <Link href="/knowledge-hub" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8 font-bold">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    {t('ui.back')}
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <div className="mb-12">
                            <h3 className="text-2xl font-bold mb-4">{t('ui.challenge')}</h3>
                            <p className="text-xl text-muted-foreground leading-relaxed whitespace-pre-line">
                                {content.challenge}
                            </p>
                        </div>

                        <div className="mb-12">
                            <h3 className="text-2xl font-bold mb-4">{t('ui.resolution')}</h3>
                            <p className="text-lg leading-relaxed whitespace-pre-line">
                                {content.resolution}
                            </p>
                        </div>
                    </div>

                    <div className="bg-muted/30 rounded-[2.5rem] p-8 md:p-12 border">
                        <h3 className="text-2xl font-bold mb-6">{t('ui.productionReady')}</h3>
                        <p className="opacity-80 leading-relaxed mb-8 whitespace-pre-line">
                            {content.productionReady}
                        </p>

                        <div className="bg-background rounded-2xl p-6 shadow-sm border">
                            <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5" />
                                {t('ui.result')}
                            </h4>
                            <p className="text-lg font-medium whitespace-pre-line">
                                {content.result}
                            </p>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
}
