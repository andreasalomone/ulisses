import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { ArrowRight, Download, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { DICTIONARY } from "@/lib/dictionary";
import { BrandText } from "@/components/ui/brand";

export function Hero() {
    const d = DICTIONARY.home.hero;

    return (
        <SectionWrapper className="pt-32 pb-16 md:pt-48 md:pb-24 border-b overflow-hidden">
            <div className="flex flex-col lg:flex-row lg:items-center items-start gap-12 lg:gap-8">
                {/* Left Content - 60% */}
                <div className="relative z-10 w-full lg:w-[50%]">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
                        {d.h1.split(d.h1Token).map((part, i, arr) => (
                            <React.Fragment key={i}>
                                {part}
                                {i < arr.length - 1 && <span className="text-primary italic">{d.h1Token}</span>}
                            </React.Fragment>
                        ))}
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mb-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150 fill-mode-both">
                        <BrandText text={d.subheadline} />
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both">
                        <Button asChild size="lg" className="h-14 px-8 text-base font-bold rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all">
                            <Link href="/contatti">{DICTIONARY.common.demoCta}</Link>
                        </Button>
                        <Button variant="outline" size="lg" className="h-14 px-8 text-base font-bold rounded-full hover:bg-muted/50 transition-colors">
                            <Download className="mr-2 h-5 w-5" />
                            {DICTIONARY.common.onePagerCta}
                        </Button>
                    </div>

                    <Link href="/contatti" className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 fill-mode-both w-fit">
                        {d.expertLink}
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                {/* Right Image - 40% */}
                <div className="w-full lg:w-[50%] animate-in fade-in slide-in-from-right-8 duration-700 delay-300 fill-mode-both">
                    <Image
                        src="/assets/hero.png"
                        alt="Ulisses AI Platform"
                        width={900}
                        height={900}
                        className="w-[150%] h-auto object-contain"
                        priority
                    />
                    {/* Production Proof Badges */}
                    <div className="flex flex-col items-center gap-2 mt-6">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 border border-border/50 hover:border-primary/30 transition-colors">
                            <ShieldCheck className="h-3.5 w-3.5 text-primary shrink-0" />
                            <span className="text-xs font-medium">Planning & commissioning integrati</span>
                        </div>
                        <div className="flex flex-wrap justify-center gap-2">
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 border border-border/50 hover:border-primary/30 transition-colors">
                                <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                                <span className="text-xs font-medium">Brevetto tecnologico</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 border border-border/50 hover:border-primary/30 transition-colors">
                                <Zap className="h-3.5 w-3.5 text-primary shrink-0" />
                                <span className="text-xs font-medium">Integrazioni IT/OT con SLA end-to-end</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
