import React from "react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";
import { Button } from "@/components/ui/button";
import { Search, Map, BellRing, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export function DashboardPreview() {
    const t = useTranslations('home.app');
    const icons = [Search, Map, BellRing];

    const featuresRaw = t.raw('features') as { title: string; text: string }[];
    const features = featuresRaw.map((f, i) => ({
        ...f,
        icon: icons[i]
    }));

    return (
        <SectionWrapper id="dashboard">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1 animate-in fade-in slide-in-from-left-8 duration-1000 delay-200 fill-mode-both">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-linear-to-r from-primary to-secondary rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <ImagePlaceholder
                            height="500px"
                            label="Dashboard Mockup - Real Time Asset Tracking"
                            className="shadow-2xl shadow-primary/20 border-primary/10 relative"
                        />
                    </div>
                </div>

                <div className="order-1 lg:order-2">
                    <div className="animate-in fade-in slide-in-from-right-8 duration-700">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">{t('label')}</span>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                            {t('title')}
                        </h2>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                            {t('intro')}
                        </p>

                        <div className="space-y-10">
                            {features.map((feature, index) => (
                                <div key={index} className="flex gap-6 group">
                                    <div className="h-12 w-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
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
                                {t('cta')}
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
