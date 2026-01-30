import React from "react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { DICTIONARY } from "@/lib/dictionary";
import { BrandText } from "@/components/ui/brand";
import { Boxes, Radio, Unplug, Quote, XCircle, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

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

export function WhyUlisses() {
    const d = DICTIONARY.home.why;
    const icons = [Boxes, Radio, Unplug];

    return (
        <SectionWrapper className="bg-background/50 overflow-hidden">
            <div className="max-w-3xl mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                <h2 className="text-3xl md:text-5xl lg:text-7xl font-black tracking-tighter mb-8 leading-[0.9]">
                    <BrandText text={d.title} />
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl font-medium">
                    <BrandText text={d.intro} />
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-24 relative z-10">
                {d.columns.map((col, i) => (
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

            {/* Social Proof Quote */}
            <div className="mb-24 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-700 fill-mode-both">
                <div className="relative p-10 md:p-16 rounded-[2.5rem] bg-primary/5 border border-primary/10 overflow-hidden group">
                    <Quote className="absolute -top-6 -left-6 h-32 w-32 text-primary/5 -rotate-12 transition-transform duration-1000 group-hover:rotate-0 group-hover:scale-110" />
                    <Quote className="absolute -bottom-6 -right-6 h-32 w-32 text-primary/5 rotate-168 transition-transform duration-1000 group-hover:rotate-180 group-hover:scale-110" />
                    <p className="text-2xl md:text-4xl font-extrabold italic text-center text-primary/90 tracking-tight leading-tight relative z-10">
                        {d.quote}
                    </p>
                </div>
            </div>

            {/* Closure / Conclusion */}
            <div className="relative p-1 md:p-1.5 rounded-[2rem] bg-linear-to-r from-primary/20 via-primary/40 to-primary/20 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-1000 fill-mode-both">
                <div className="bg-primary text-primary-foreground p-10 md:p-14 rounded-[1.8rem] text-center shadow-2xl">
                    <p className="text-xl md:text-3xl font-black tracking-tight leading-tight mb-4">
                        <BrandText text={d.closure} />
                    </p>
                </div>
            </div>
        </SectionWrapper>
    );
}
