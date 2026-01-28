import React from "react";
import { SectionWrapper } from "./section-wrapper";

interface VerticalHeroProps {
    title: string;
    subtitle: string;
    description?: string;
    children?: React.ReactNode;
}

export function VerticalHero({ title, subtitle, description, children }: VerticalHeroProps) {
    return (
        <SectionWrapper className="pt-32 pb-16 md:pt-48 md:pb-24 border-b overflow-hidden bg-muted/20">
            <div className="relative z-10 max-w-4xl">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
                    {title}
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mb-10">
                    {subtitle}
                </p>
                {description && (
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-10">
                        {description}
                    </p>
                )}
                {children && (
                    <div className="flex flex-col sm:flex-row gap-4">
                        {children}
                    </div>
                )}
            </div>

            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full bg-linear-to-l from-primary/5 to-transparent -z-10 blur-3xl rounded-full" />
        </SectionWrapper>
    );
}
