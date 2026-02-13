import React from "react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Scale, Target, BatteryCharging, LucideIcon } from "lucide-react";
import { BrandText } from "@/components/ui/brand";
import { useTranslations } from "next-intl";

// Map icon strings to components
const ICON_MAP: Record<string, LucideIcon> = {
    "Scale": Scale,
    "Target": Target,
    "BatteryCharging": BatteryCharging
};

export function TechnologyPillars() {
    const t = useTranslations('home.technologyPillars');
    const cards = t.raw('cards') as { title: string; subtitle: string; icon: string }[];
    const title = t('title');

    return (
        <SectionWrapper id="technology-pillars" variant="primary" className="py-20 relative overflow-hidden">
            {/* Background enhancement */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-50 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 px-4">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-balance">
                        <BrandText text={title} />
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, index) => {
                        const Icon = ICON_MAP[card.icon];

                        return (
                            <div
                                key={index}
                                className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
                            >
                                {/* Glow Effect */}
                                <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 rounded-3xl" />

                                <div className="relative flex flex-col items-center text-center z-10">
                                    <div className="mb-6 p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors duration-500">
                                        {Icon && <Icon className="w-10 h-10 text-primary-foreground group-hover:text-primary transition-colors duration-500" />}
                                    </div>

                                    <h3 className="text-2xl font-bold mb-3 text-white">
                                        {card.title}
                                    </h3>

                                    <p className="text-xl text-white/70 font-medium">
                                        {card.subtitle}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </SectionWrapper>
    );
}
