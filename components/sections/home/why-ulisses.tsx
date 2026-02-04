import React from "react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { BrandText } from "@/components/ui/brand";
import { Boxes, Radio, Unplug, XCircle, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

interface DifferentiatorCardProps {
    title: string;
    problem: string;
    solution: string;
    icon: React.ElementType;
    index: number;
}

function DifferentiatorCard({ title, problem, solution, icon: Icon, index }: DifferentiatorCardProps) {
    return (
        <div
            className={cn(
                "group relative h-full flex flex-col rounded-3xl border border-primary/10 bg-card/40 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5",
                "animate-in fade-in slide-in-from-bottom-8 fill-mode-both"
            )}
            style={{ animationDelay: `${(index + 1) * 150}ms` }}
        >
            {/* Header with Icon */}
            <div className="p-8 pb-4">
                <div className="mb-6 inline-flex p-3 rounded-2xl bg-primary/5 text-primary group-hover:scale-110 transition-transform duration-500">
                    <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold tracking-tight">Vs {title}</h3>
            </div>

            {/* Problem - The Status Quo */}
            <div className="px-8 pb-6 flex-1">
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-destructive/5 border border-destructive/10 mb-4 transition-colors group-hover:bg-destructive/10">
                    <XCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                    <p className="text-sm font-medium text-muted-foreground leading-snug">
                        {problem}
                    </p>
                </div>

                {/* Solution - The Ulisses Way */}
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-primary/5 border border-primary/20 transition-all duration-500 group-hover:border-primary group-hover:bg-primary/10">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm md:text-base font-bold text-foreground leading-snug">
                        {solution}
                    </p>
                </div>
            </div>

            {/* Subtle background gradient on hover */}
            <div className="absolute inset-0 bg-linear-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        </div>
    );
}

import CompareDemo from "@/components/compare-demo";

export function WhyUlisses() {
    const t = useTranslations('home.why');
    type ColumnType = {
        title: string;
        problem: string;
        solution: string;
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

                <div className="shrink-0 animate-in fade-in slide-in-from-right-8 duration-1000 delay-300 overflow-visible">
                    <CompareDemo />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-12 relative z-10">
                {columns.map((col, i) => (
                    <DifferentiatorCard
                        key={i}
                        title={col.title}
                        problem={col.problem}
                        solution={col.solution}
                        icon={icons[i] || Boxes}
                        index={i}
                    />
                ))}
            </div>
        </SectionWrapper>
    );
}
