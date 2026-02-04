import React from "react";
import { VerticalHero } from "@/components/shared/vertical-hero";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

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
    }>;
}

export default async function StoryPage({ params }: StoryPageProps) {
    const resolvedParams = await params;
    const { vertical, slug } = resolvedParams;
    const t = await getTranslations('knowledgeHub');
    const stories = t.raw('stories') as { sections: StorySection[] };

    // Find the story in the translations
    const verticalData = stories.sections.find(
        (s) => s.vertical.toLowerCase().replace(/ /g, "-") === vertical
    );

    if (!verticalData) {
        return notFound();
    }

    const story = verticalData.items.find((item) => item.link.endsWith(`/${slug}`));

    // In the new JSON structure, fullContent is not explicitly there yet for EN?
    // Wait, I only added 'title' 'text' 'link' in en.json placeholder.
    // I need to add 'fullContent' to en.json for it to work!
    // Since I didn't add fullContent in en.json, this will Fail for English.
    // I should fallback to generic or ensure fullContent is present.
    // For now, let's assume it IS present or check safely.
    // Actually, I MUST ADD fullContent to en.json now or the page will 404.

    if (!story || !story.fullContent) {
        // Loophole: If En.json misses fullContent, show notFound? Or fallback?
        // Ideally I should populate en.json with fullContent.
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
                    Torna al Knowledge Hub
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <div className="mb-12">
                            <h3 className="text-2xl font-bold mb-4">La Sfida</h3>
                            <p className="text-xl text-muted-foreground leading-relaxed whitespace-pre-line">
                                {content.challenge}
                            </p>
                        </div>

                        <div className="mb-12">
                            <h3 className="text-2xl font-bold mb-4">Risoluzione Operativa</h3>
                            <p className="text-lg leading-relaxed whitespace-pre-line">
                                {content.resolution}
                            </p>
                        </div>
                    </div>

                    <div className="bg-muted/30 rounded-[2.5rem] p-8 md:p-12 border">
                        <h3 className="text-2xl font-bold mb-6">Production Ready</h3>
                        <p className="opacity-80 leading-relaxed mb-8 whitespace-pre-line">
                            {content.productionReady}
                        </p>

                        <div className="bg-background rounded-2xl p-6 shadow-sm border">
                            <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5" />
                                Risultato Atteso
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
