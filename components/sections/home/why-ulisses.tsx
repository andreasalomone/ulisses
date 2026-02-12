import React from "react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { BrandText } from "@/components/ui/brand";
import { Boxes, Radio, Unplug, XCircle, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

interface DifferentiatorCardProps {
    headline: string;
    description: string;
    effect: string;
    icon: React.ElementType;
    index: number;
    variant: "issue" | "solution";
}

function DifferentiatorCard({ headline, description, effect, icon: Icon, index, variant }: DifferentiatorCardProps) {
    const isSolution = variant === "solution";

    return (
        <div
            className={cn(
                "group relative h-full flex flex-col rounded-3xl border backdrop-blur-sm overflow-hidden transition-all duration-500 hover:shadow-2xl",
                isSolution
                    ? "border-primary/40 bg-primary/10 hover:border-primary/60 hover:shadow-primary/20 scale-105 z-20 shadow-xl ring-2 ring-primary/20"
                    : "border-primary/10 bg-card/40 hover:border-primary/30 hover:shadow-primary/5",
                "animate-in fade-in slide-in-from-bottom-8 fill-mode-both"
            )}
            style={{ animationDelay: `${(index + 1) * 150}ms` }}
        >
            {/* Spotlight Effect for Solution */}
            {isSolution && (
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-primary/20 blur-3xl rounded-full" />
            )}

            {/* Header with Icon */}
            <div className="p-8 pb-4">
                <div className={cn(
                    "mb-6 inline-flex p-3 rounded-2xl transition-transform duration-500 group-hover:scale-110",
                    isSolution ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" : "bg-primary/5 text-primary"
                )}>
                    <Icon className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                    <h3 className={cn(
                        "text-xl font-bold tracking-tight",
                        isSolution && "text-primary"
                    )}>
                        {headline}
                    </h3>
                    {/* Effect Section */}
                    {effect && (
                        <div className="flex items-center gap-2">
                            <div className={cn(
                                "h-1 w-1 rounded-full shrink-0",
                                isSolution ? "bg-primary" : "bg-destructive/60"
                            )} />
                            <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground/70">
                                {effect}
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Content Section */}
            <div className="px-8 pb-8 flex-1 flex flex-col justify-between relative z-10">
                <div className="space-y-4">
                    <div className={cn(
                        "flex items-start gap-4 p-5 rounded-2xl border transition-all duration-500",
                        isSolution
                            ? "bg-background/80 border-primary/30 group-hover:border-primary/50 shadow-sm"
                            : "bg-destructive/5 border-destructive/10 group-hover:bg-destructive/10"
                    )}>
                        {isSolution ? (
                            <CheckCircle2 className="h-6 w-6 text-emerald-500 shrink-0 mt-0.5" />
                        ) : (
                            <XCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                        )}
                        <p className={cn(
                            "text-sm leading-relaxed",
                            isSolution ? "text-foreground font-semibold text-base" : "text-muted-foreground"
                        )}>
                            {description}
                        </p>
                    </div>
                </div>
            </div>

            {/* Subtle background gradient on hover */}
            <div className={cn(
                "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none",
                isSolution
                    ? "bg-linear-to-br from-primary/5 via-primary/5 to-primary/20"
                    : "bg-linear-to-br from-primary/0 via-primary/0 to-primary/5"
            )} />
        </div>
    );
}

import CompareDemo from "@/components/compare-demo";

export function WhyUlisses() {
    const t = useTranslations('home.why');
    type ColumnType = {
        headline: string;
        description: string;
        effect: string;
    };
    const columns = t.raw('columns') as ColumnType[];
    const icons = [Boxes, Radio, Unplug];

    return (
        <SectionWrapper className="bg-background/50 overflow-hidden pb-8 md:pb-12">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-16 lg:mb-24">
                <div className="flex-1 max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8 leading-[1.1]">
                        <BrandText text={t('title')} />
                    </h2>
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                        <BrandText text={t('intro')} />
                    </p>
                </div>

                <div className="shrink-0 animate-in fade-in slide-in-from-inline-end-8 duration-1000 delay-300 overflow-visible">
                    <CompareDemo />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-12 relative z-10">
                {columns.map((col, i) => (
                    <DifferentiatorCard
                        key={i}
                        headline={col.headline}
                        description={col.description}
                        effect={col.effect}
                        icon={icons[i] || Boxes}
                        index={i}
                        variant={i === 2 ? "solution" : "issue"}
                    />
                ))}
            </div>
        </SectionWrapper>
    );
}
