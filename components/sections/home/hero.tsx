"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { BrandText } from "@/components/ui/brand";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export function Hero() {
    const t = useTranslations('home.hero');
    const tCommon = useTranslations('common');
    const tA11y = useTranslations('accessibility');
    const h1 = t('h1');
    const h1Token = t('h1Token');
    const proofs = t.raw('proofs') as string[];

    return (
        <SectionWrapper className="min-h-[95vh] flex items-center pt-32 pb-20 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 w-full flex flex-col lg:flex-row lg:items-center items-start gap-12 lg:gap-8">
                {/* Left Content - 60% */}
                <div className="relative z-10 w-full lg:w-[70%]">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
                        {h1.split(h1Token).map((part, i, arr) => (
                            <React.Fragment key={i}>
                                {part}
                                {i < arr.length - 1 && <span className="text-primary italic">{h1Token}</span>}
                            </React.Fragment>
                        ))}
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mb-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150 fill-mode-both">
                        <BrandText text={t('subheadline')} />
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both">
                        <Button asChild size="lg" className="h-14 px-8 text-base font-bold rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all">
                            <Link href="/contatti">{tCommon('demoCta')}</Link>
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="h-14 px-8 text-base font-bold rounded-full hover:bg-muted/50 transition-colors cursor-pointer"
                            onClick={() => document.getElementById("scenari")?.scrollIntoView({ behavior: "smooth" })}
                        >
                            {tCommon('learnMore')}
                        </Button>
                    </div>
                </div>

                {/* Right Image - 40% */}
                <div className="w-full lg:w-[40%] animate-in fade-in slide-in-from-right-8 duration-700 delay-300 fill-mode-both">
                    <Image
                        src="/assets/hero.png"
                        alt={tA11y('ulissesPlatform')}
                        width={900}
                        height={900}
                        className="w-[150%] h-auto object-contain"
                        priority
                    />
                    {/* Production Proof Badges */}
                    <div className="flex flex-col items-center gap-2 mt-6">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 border border-border/50 hover:border-primary/30 transition-colors">
                            <ShieldCheck className="h-3.5 w-3.5 text-primary shrink-0" />
                            <span className="text-xs font-medium">{proofs[0]}</span>
                        </div>
                        <div className="flex flex-wrap justify-center gap-2">
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 border border-border/50 hover:border-primary/30 transition-colors">
                                <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                                <span className="text-xs font-medium">{proofs[1]}</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 border border-border/50 hover:border-primary/30 transition-colors">
                                <Zap className="h-3.5 w-3.5 text-primary shrink-0" />
                                <span className="text-xs font-medium">{proofs[2]}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
