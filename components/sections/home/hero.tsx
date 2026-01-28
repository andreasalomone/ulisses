import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { ArrowRight, Download } from "lucide-react";
import { DICTIONARY } from "@/lib/dictionary";

export function Hero() {
    const d = DICTIONARY.home.hero;

    return (
        <SectionWrapper className="pt-32 pb-16 md:pt-48 md:pb-24 border-b overflow-hidden">
            <div className="relative z-10 max-w-4xl">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
                    {d.h1.split(d.h1Token).map((part, i, arr) => (
                        <React.Fragment key={i}>
                            {part}
                            {i < arr.length - 1 && <span className="text-primary italic">{d.h1Token}</span>}
                        </React.Fragment>
                    ))}
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mb-10">
                    {d.subheadline.split(d.subheadlineToken).map((part, i, arr) => (
                        <React.Fragment key={i}>
                            {part}
                            {i < arr.length - 1 && <span className="text-foreground font-bold">{d.subheadlineToken}</span>}
                        </React.Fragment>
                    ))}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                    <Button asChild size="lg" className="h-14 px-8 text-base font-bold rounded-full">
                        <Link href="/contatti">{DICTIONARY.common.demoCta}</Link>
                    </Button>
                    <Button variant="outline" size="lg" className="h-14 px-8 text-base font-bold rounded-full">
                        <Download className="mr-2 h-5 w-5" />
                        {DICTIONARY.common.onePagerCta}
                    </Button>
                </div>

                <Link href="/contatti" className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    {d.expertLink}
                    <ArrowRight className="h-4 w-4" />
                </Link>
            </div>

            {/* Proof Bar */}
            <div className="mt-20 md:mt-32 pt-8 border-t border-muted">
                <div className="flex flex-wrap items-center gap-x-12 gap-y-6">
                    {d.proofs.map((proof, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <div className="h-2 w-2 rounded-full bg-primary" />
                            <span className="text-sm font-bold tracking-wide uppercase text-muted-foreground">{proof}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Visual Background Placeholder */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full bg-linear-to-l from-primary/5 to-transparent -z-10 blur-3xl rounded-full" />
        </SectionWrapper>
    );
}
