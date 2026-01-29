import React from "react";
import { VerticalHero } from "@/components/shared/vertical-hero";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { DICTIONARY } from "@/lib/dictionary";
import { notFound } from "next/navigation";

// Define the type for the dictionary structure
type VerticalKey = 'Logistica' | 'Ferroviario' | 'Smart Parking';

interface StoryPageProps {
    params: Promise<{
        vertical: string;
        slug: string;
    }>;
}

export default async function StoryPage({ params }: StoryPageProps) {
    const resolvedParams = await params;
    const { vertical, slug } = resolvedParams;

    // Find the story in the dictionary
    const verticalData = DICTIONARY.knowledgeHub.stories.sections.find(
        (s) => s.vertical.toLowerCase().replace(/ /g, "-") === vertical
    );

    if (!verticalData) {
        return notFound();
    }

    const story = verticalData.items.find((item) => item.link.endsWith(`/${slug}`));

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
                <Button asChild size="lg" className="h-14 px-8 text-base font-bold rounded-full">
                    <Link href="/contatti">{content.cta}</Link>
                </Button>
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
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                {content.challenge}
                            </p>
                        </div>

                        <div className="mb-12">
                            <h3 className="text-2xl font-bold mb-4">Risoluzione Operativa</h3>
                            <p className="text-lg leading-relaxed">
                                {content.resolution}
                            </p>
                        </div>
                    </div>

                    <div className="bg-muted/30 rounded-[2.5rem] p-8 md:p-12 border">
                        <h3 className="text-2xl font-bold mb-6">Production Ready</h3>
                        <p className="opacity-80 leading-relaxed mb-8">
                            {content.productionReady}
                        </p>

                        <div className="bg-background rounded-2xl p-6 shadow-sm border">
                            <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5" />
                                Risultato Atteso
                            </h4>
                            <p className="text-lg font-medium">
                                {content.result}
                            </p>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
}
