import React from "react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function TestimonialSection() {
    const t = useTranslations('azienda.review');

    return (
        <SectionWrapper className="bg-primary text-primary-foreground py-24 md:py-32 relative overflow-hidden">
            {/* Abstract background pattern for depth */}
            <div className="absolute top-0 right-0 p-12 opacity-10">
                <Quote className="w-64 h-64 rotate-180" />
            </div>

            <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center text-center space-y-10">

                {/* Badge / Label */}
                <Badge variant="secondary" className="bg-white/10 text-white border-white/20 hover:bg-white/20 uppercase tracking-widest px-4 py-1.5 backdrop-blur-sm">
                    {t('label')}
                </Badge>

                {/* The Quote */}
                <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed tracking-tight font-serif">
                    &ldquo;{t('text')}.&rdquo;
                </blockquote>

                {/* Author & Logo */}
                <div className="flex flex-col items-center space-y-6 pt-4">
                    <div className="space-y-1">
                        <cite className="not-italic font-bold text-lg md:text-xl block">
                            {t('author')}
                        </cite>
                        <span className="text-primary-foreground/80 font-mono text-sm uppercase tracking-wider block">
                            {t('role')}
                        </span>
                    </div>

                    {/* Branding Divider */}
                    <div className="w-12 h-0.5 bg-white/20 my-4" />

                    <div className="relative h-12 w-48 grayscale brightness-0 invert opacity-90 transition-opacity hover:opacity-100">
                        <Image
                            src={t('logo')}
                            alt={`${t('role')} logo`}
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
