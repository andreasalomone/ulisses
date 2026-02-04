import React from "react";
import { VerticalHero } from "@/components/shared/vertical-hero";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { FileText, Download, ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { FaqSection } from "@/components/shared/faq-section";

import { BrandText } from "@/components/ui/brand";

const GRADIENTS = [
    // Premium Dark Blue / Primary
    "bg-linear-to-br from-primary/90 via-primary/70 to-slate-950 border border-primary/20",
    // Deep Teal / Secondary
    "bg-linear-to-br from-secondary/90 via-secondary/70 to-slate-950 border border-secondary/20",
    // Violet / Accent
    "bg-linear-to-br from-accent/90 via-accent/70 to-slate-950 border border-accent/20",
    // Indigo / Chart-1
    "bg-linear-to-br from-[oklch(0.45_0.14_260)]/90 via-[oklch(0.35_0.10_260)]/70 to-slate-950 border border-[oklch(0.45_0.14_260)]/20",
    // Deep Slate / Industrial
    "bg-linear-to-br from-slate-600 via-slate-800 to-slate-950 border border-slate-500/30",
    // Slate / Muted Luxury
    "bg-linear-to-br from-slate-700 via-slate-800 to-slate-950 border border-slate-600/30",
];

export default async function KnowledgeHubPage() {
    const t = await getTranslations('knowledgeHub');
    const sections = t.raw('stories.sections') as { vertical: string; items: { title: string; text: string; link: string }[] }[];
    const documentItems = t.raw('documents.items') as string[];

    return (
        <div className="flex flex-col">
            <VerticalHero
                title={t('hero.h1')}
                subtitle={t('hero.sub')}
                className="min-h-[40vh] border-none bg-linear-to-b from-muted/20 via-muted/10 to-background pb-0 md:pb-0"
                centered
            />

            {/* Stories Section */}
            <SectionWrapper className="pt-4 md:pt-8">
                <div className="space-y-24">
                    {sections.map((section, i) => (
                        <div key={i} className="relative">
                            <h3 className="text-3xl font-bold mb-10 flex items-center justify-center gap-4">
                                <span className="bg-primary/10 text-primary px-4 py-2 rounded-xl text-lg uppercase tracking-widest">{section.vertical}</span>
                            </h3>

                            {/* Grid wrapper for the "Book Covers" */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12 justify-center">
                                {section.items.map((item, j) => {
                                    // Deterministic gradient selection based on index
                                    const gradientIndex = (i * 3 + j) % GRADIENTS.length;
                                    const gradientClass = GRADIENTS[gradientIndex];

                                    return (
                                        <Link
                                            key={j}
                                            href={item.link as "/knowledge-hub"}
                                            className="group relative block aspect-[3/4.5] w-full max-w-[320px] mx-auto perspective-[1000px]"
                                        >
                                            <div
                                                className={`
                                                    relative h-full w-full rounded-tr-2xl rounded-bl-2xl rounded-tl-sm rounded-br-2xl
                                                    p-8 flex flex-col justify-between
                                                    transition-all duration-500 ease-out
                                                    shadow-xl group-hover:shadow-2xl group-hover:shadow-primary/20
                                                    group-hover:transform-[rotateY(-4deg)_translateY(-10px)]
                                                    overflow-hidden text-white
                                                    backdrop-blur-sm
                                                    ${gradientClass}
                                                `}
                                            >
                                                {/* Noise Texture Overlay */}
                                                <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
                                                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
                                                />
                                                {/* "Spine" effect overlay */}
                                                <div className="absolute left-0 top-0 bottom-0 w-4 bg-linear-to-r from-black/40 to-transparent z-10" />

                                                {/* Top Content: Title & Vertical Label */}
                                                <div className="relative z-20 space-y-4 ml-2">
                                                    {/* Decorative line */}
                                                    <div className="w-12 h-1 bg-white/30 rounded-full" />

                                                    <h3 className="text-2xl font-bold leading-tight tracking-tight drop-shadow-md">
                                                        <BrandText text={item.title} />
                                                    </h3>

                                                    <p className="text-sm font-medium text-white/80 line-clamp-3 leading-relaxed">
                                                        <BrandText text={item.text} />
                                                    </p>
                                                </div>

                                                {/* Bottom Content: CTA */}
                                                <div className="relative z-20 pt-6 border-t border-white/20 mt-auto ml-2">
                                                    <div className="flex items-center justify-between group/btn">
                                                        <span className="font-semibold text-white tracking-wide uppercase text-sm">
                                                            Scopri
                                                        </span>
                                                        <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm group-hover/btn:bg-white group-hover/btn:text-black transition-colors">
                                                            <ArrowRight className="h-4 w-4 transform group-hover:translate-x-0.5 transition-transform" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Shadow element for depth */}
                                            <div className="absolute inset-x-8 bottom-0 h-8 bg-black/40 blur-xl rounded-[100%]translate-y-4 opacity-0 group-hover:opacity-60 transition-all duration-500 z-[-1]" />
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </SectionWrapper>

            {/* Documents Section */}
            <SectionWrapper variant="muted">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8">
                            <BrandText text={t('documents.title')} />
                        </h2>
                        <div className="grid grid-cols-1 gap-4">
                            {documentItems.map((doc, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 bg-background rounded-xl border hover:border-primary/50 transition-colors group cursor-pointer">
                                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                        <FileText className="h-6 w-6" />
                                    </div>
                                    <span className="font-bold text-lg grow">
                                        <BrandText text={doc} />
                                    </span>
                                    <Download className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="bg-primary text-primary-foreground p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-3xl font-bold mb-6">{t('supportCta.title')}</h3>
                                <p className="text-xl opacity-90 mb-8 leading-relaxed">
                                    {t('supportCta.subtitle')}
                                </p>
                                <Button asChild variant="secondary" size="lg" className="h-14 px-8 text-base font-bold rounded-full w-full sm:w-auto">
                                    <Link href="/contatti">{t('supportCta.button')}</Link>
                                </Button>
                            </div>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            {/* FAQ Section */}
            <FaqSection />
        </div>
    );
}
