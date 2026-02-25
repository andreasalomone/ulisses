import React from "react";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { BrandText } from "@/components/ui/brand";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export function FeaturedStory() {
    const t = useTranslations('portiTuristici.featuredStory');
    const tA11y = useTranslations('accessibility');

    return (
        <SectionWrapper className="py-20">
            <div className="group relative overflow-hidden rounded-[2.5rem] border border-border/50 bg-muted/30">
                <div className="absolute inset-0 bg-linear-to-br from-background/50 to-transparent pointer-events-none" />

                <div className="relative z-10 grid gap-12 p-8 md:p-12 lg:grid-cols-12 lg:items-center">
                    {/* Text Column */}
                    <div className="order-2 lg:col-span-7 lg:order-1 space-y-8">
                        {/* Editorial Badge */}
                        <div className="inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary shadow-sm hover:bg-primary/10 transition-colors">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Case Study
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
                                <BrandText text={t('title')} />
                            </h2>
                            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl whitespace-pre-line">
                                <BrandText text={t('text')} />
                            </p>
                        </div>

                        {/* Link Style Button */}
                        <Button asChild variant="link" className="group/btn h-auto p-0 text-lg font-bold text-foreground hover:no-underline">
                            <Link href={t('link') as "/knowledge-hub"} className="inline-flex items-center gap-3">
                                {t('cta')}
                                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition-all group-hover/btn:border-primary group-hover/btn:bg-primary group-hover/btn:text-primary-foreground group-hover/btn:scale-110 shadow-sm">
                                    <ArrowRight className="h-5 w-5" />
                                </div>
                            </Link>
                        </Button>
                    </div>

                    {/* Image Column */}
                    <div className="order-1 flex justify-center lg:col-span-5 lg:justify-center lg:order-2">
                        <div className="relative aspect-3/2 w-full max-w-[320px] transition-all duration-500 hover:scale-105">
                            <Image
                                src="/partners/logo_Ministero del Turismo.png"
                                alt={tA11y('ministryLogo')}
                                fill
                                className="object-contain drop-shadow-sm"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
