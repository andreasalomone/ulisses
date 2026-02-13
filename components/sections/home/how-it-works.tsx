import React from "react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Cloud, Server, Cpu } from "lucide-react";
import Image from "next/image";
import { BrandText } from "@/components/ui/brand";
import { useTranslations } from "next-intl";

interface HowItWorksProps {
    title?: string;
    subtitle?: string;
    items?: { title: string; text: string }[];
    withDeployment?: boolean;
}

export function HowItWorks({ title, subtitle, items, withDeployment = true }: HowItWorksProps) {
    const t = useTranslations('home.howItWorks');

    // Default data from translations
    const defaultSteps = t.raw('steps') as { title: string; text: string }[];
    const finalTitle = title || t('title');
    const finalSubtitle = subtitle || t('subtitle');

    // Use passed items or default items
    const sourceItems = items || defaultSteps;

    const images = [
        "/assets/tag.png",
        "/assets/network.png",
        "/assets/tablet.png",
        "/assets/api.png"
    ];

    const steps = sourceItems.map((step, i) => ({
        ...step,
        image: images[i % images.length] // Cycle images just in case
    }));

    const deploymentCards = t.raw('deploymentCards') as { title: string; text: string }[];
    const deploymentIcons = [Cloud, Server, Cpu];

    return (
        <SectionWrapper id="come-funziona" variant="secondary" className="relative overflow-hidden">
            <div className="max-w-3xl mb-16 relative z-10">
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8 text-balance">
                    <BrandText text={finalTitle} />
                </h2>
                <p className="text-xl opacity-80 leading-relaxed text-balance">
                    <BrandText text={finalSubtitle} />
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="group p-8 rounded-3xl bg-white/10 border border-white/20 hover:border-white/40 hover:bg-white/20 backdrop-blur-md transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative h-48 w-full flex items-center justify-center mb-8 z-10">
                            <Image
                                src={step.image}
                                alt={step.title}
                                width={300}
                                height={300}
                                priority={index < 2}
                                className="object-contain group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 relative z-10">
                            <span className="text-white font-black opacity-20 text-3xl">0{index + 1}</span>
                            <BrandText text={step.title} />
                        </h3>
                        <p className="text-secondary-foreground/90 leading-relaxed relative z-10">
                            <BrandText text={step.text} />
                        </p>
                    </div>
                ))}
            </div>

            {withDeployment && (
                <div className="mt-24 space-y-12 relative z-10">
                    <div className="text-center max-w-2xl mx-auto">
                        <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
                            {t('deployment.title')}
                        </h3>
                        <p className="text-xl opacity-80">
                            {t('deployment.label')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {deploymentCards.map((item, i) => {
                            const Icon = deploymentIcons[i] || Cloud;
                            return (
                                <div key={i} className="group p-6 transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center relative">
                                    <div className="relative mb-8">
                                        <div className="absolute inset-0 bg-primary blur-3xl opacity-20 group-hover:opacity-40 transition-opacity rounded-full scale-110" />
                                        <div className="relative z-10 group-hover:scale-110 transition-transform duration-500">
                                            <Icon className="h-14 w-14 text-white" />
                                        </div>
                                    </div>

                                    <h4 className="text-2xl font-bold mb-3 relative z-10">
                                        {item.title}
                                    </h4>
                                    <p className="text-secondary-foreground/70 leading-relaxed relative z-10 max-w-xs">
                                        {item.text}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )}
        </SectionWrapper>
    );
}
