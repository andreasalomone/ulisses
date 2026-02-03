import React from "react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BrandText } from "@/components/ui/brand";

import { cn } from "@/lib/utils";

interface CTAButton {
    label: string;
    href: string;
    variant?: "default" | "secondary" | "outline" | "ghost" | "link";
}

interface FinalCTASectionProps {
    title: string;
    subtitle: string;
    buttons: CTAButton[];
}

export function FinalCTASection({ title, subtitle, buttons }: FinalCTASectionProps) {
    return (
        <SectionWrapper className="bg-primary text-primary-foreground text-center">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-wrap-balance whitespace-pre-line">
                    <BrandText text={title} brandClassName="text-white" />
                </h2>
                <p className="text-xl opacity-90 leading-relaxed mb-12 whitespace-pre-line">
                    <BrandText text={subtitle} brandClassName="text-white" />
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {buttons.map((btn, i) => {
                        const isPrimary = i === 0 && !btn.variant || btn.variant === "secondary";
                        return (
                            <Button
                                key={i}
                                asChild
                                size="lg"
                                variant={btn.variant || (i === 0 ? "secondary" : "outline")}
                                className={cn(
                                    "h-14 px-8 text-base font-bold rounded-full transition-all",
                                    isPrimary
                                        ? "bg-white text-primary hover:bg-white/90 border-transparent shadow-lg shadow-black/10"
                                        : "bg-transparent border-white text-white hover:bg-white hover:text-primary"
                                )}
                            >
                                <Link href={btn.href}>
                                    <BrandText text={btn.label} brandClassName={isPrimary ? "text-primary" : "text-white"} />
                                </Link>
                            </Button>
                        );
                    })}
                </div>
            </div>
        </SectionWrapper>
    );
}
