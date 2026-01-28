import React from "react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";
import { Button } from "@/components/ui/button";
import { Search, Map, BellRing, ArrowRight } from "lucide-react";
import Link from "next/link";
import { DICTIONARY } from "@/lib/dictionary";

export function DashboardPreview() {
    const d = DICTIONARY.home.app;
    const icons = [Search, Map, BellRing];

    const features = d.features.map((f, i) => ({
        ...f,
        icon: icons[i]
    }));

    return (
        <SectionWrapper id="dashboard">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                    <ImagePlaceholder
                        height="500px"
                        label="Dashboard Mockup - Real Time Asset Tracking"
                        className="shadow-2xl shadow-primary/20 border-primary/10"
                    />
                </div>

                <div className="order-1 lg:order-2">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">{d.label}</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
                        {d.title}
                    </h2>
                    <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                        {d.intro}
                    </p>

                    <div className="space-y-10">
                        {features.map((feature, index) => (
                            <div key={index} className="flex gap-6">
                                <div className="h-12 w-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                    <feature.icon className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {feature.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <Button asChild variant="ghost" className="mt-12 group font-bold">
                        <Link href="/tecnologia">
                            {d.cta}
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                </div>
            </div>
        </SectionWrapper>
    );
}
