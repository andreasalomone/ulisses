import React from "react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
                    {title}
                </h2>
                <p className="text-xl opacity-90 leading-relaxed mb-12">
                    {subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {buttons.map((btn, i) => (
                        <Button
                            key={i}
                            asChild
                            size="lg"
                            variant={btn.variant || (i === 0 ? "secondary" : "outline")}
                            className={`h-14 px-8 text-base font-bold rounded-full ${btn.variant === "outline" || (!btn.variant && i !== 0)
                                    ? "bg-transparent border-white text-white hover:bg-white hover:text-primary"
                                    : ""
                                }`}
                        >
                            <Link href={btn.href}>{btn.label}</Link>
                        </Button>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
