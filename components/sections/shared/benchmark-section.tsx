import React from "react";
import Link from "next/link";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2 } from "lucide-react";
import { BrandText } from "@/components/ui/brand";

interface BenchmarkItem {
    title: string;
    context: string;
    challenge: string;
    solution: string;
    impact: string;
    link?: string;
}

interface BenchmarkSectionProps {
    title: string;
    items: BenchmarkItem[];
    extra?: {
        title: string;
        text: string;
    };
    variant?: "default" | "muted" | "primary" | "secondary";
}

export function BenchmarkSection({ title, items, extra, variant = "muted" }: BenchmarkSectionProps) {
    return (
        <SectionWrapper variant={variant}>
            <div className="mb-16">
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
                    <BrandText text={title} />
                </h2>
            </div>

            {/* [2026 Standard] Container context */}
            <div className="@container mb-16">
                <div className="grid grid-cols-1 @3xl:grid-cols-2 @5xl:grid-cols-3 gap-8">
                    {items.map((item, i) => (
                        <Card key={i} className="bg-background border-none shadow-lg hover:shadow-xl transition-all duration-300">
                            <CardHeader>
                                <CardTitle className="leading-tight text-xl">
                                    <BrandText text={item.title} />
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4 text-sm">
                                <div>
                                    <span className="font-bold text-primary block mb-1">Contesto</span>
                                    <p className="text-muted-foreground"><BrandText text={item.context} /></p>
                                </div>
                                <div>
                                    <span className="font-bold text-primary block mb-1">Sfida</span>
                                    <p className="text-muted-foreground"><BrandText text={item.challenge} /></p>
                                </div>
                                <div>
                                    <span className="font-bold text-primary block mb-1">Soluzione</span>
                                    <p className="text-muted-foreground"><BrandText text={item.solution} /></p>
                                </div>
                                <div className="pt-4 mt-4 border-t flex flex-col gap-4">
                                    <div>
                                        <span className="font-bold text-foreground block mb-1">Impatto</span>
                                        <p className="font-medium italic text-foreground/80"><BrandText text={item.impact} /></p>
                                    </div>
                                    {item.link && (
                                        <div className="pt-2">
                                            <Link
                                                href={item.link}
                                                className="text-primary font-bold hover:underline inline-flex items-center gap-1 group transition-all"
                                            >
                                                Scopri di più
                                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {extra && (
                <div className="bg-primary text-primary-foreground p-8 md:p-12 rounded-3xl relative overflow-hidden">
                    <div className="relative z-10 max-w-3xl">
                        <h3 className="text-2xl font-bold mb-4">
                            <BrandText text={extra.title} brandClassName="text-white" />
                        </h3>
                        <p className="text-lg opacity-90 leading-relaxed">
                            <BrandText text={extra.text} brandClassName="text-white" />
                        </p>
                    </div>
                    <Building2 className="absolute right-0 bottom-0 text-white/10 w-64 h-64 -translate-y-1/2 translate-x-1/4 rotate-12" />
                </div>
            )}
        </SectionWrapper>
    );
}
