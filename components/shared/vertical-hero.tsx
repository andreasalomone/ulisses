"use client";

import React from "react";
import { SectionWrapper } from "./section-wrapper";
import Image from "next/image";
import { cn } from "@/lib/utils";

import { BrandText } from "@/components/ui/brand";

interface VerticalHeroProps {
    title: string;
    subtitle: string;
    titleToken?: string;
    description?: string;
    image?: string;
    children?: React.ReactNode;
    footer?: React.ReactNode;
    sideContent?: React.ReactNode;
}

export function VerticalHero({ title, subtitle, titleToken, description, image, children, footer, sideContent }: VerticalHeroProps) {
    return (
        <SectionWrapper className="min-h-[90vh] pt-32 pb-16 md:pt-48 md:pb-32 border-b overflow-hidden bg-muted/20">
            <div className="container relative z-10">
                <div className={cn(
                    "grid grid-cols-1 gap-12 items-center",
                    (image || sideContent) ? "lg:grid-cols-2" : "max-w-4xl"
                )}>
                    <div className="animate-in fade-in slide-in-from-left duration-1000 ease-out fill-mode-both">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-wrap-pretty">
                            {titleToken ? (
                                title.split(new RegExp(`(${titleToken})`, "gi")).map((part, i) =>
                                    part.toLowerCase() === titleToken.toLowerCase() ? (
                                        <span key={i} className="text-primary">{part}</span>
                                    ) : (
                                        <BrandText key={i} text={part} />
                                    )
                                )
                            ) : (
                                <BrandText text={title} />
                            )}
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mb-10">
                            <BrandText text={subtitle} />
                        </p>
                        {description && (
                            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-10">
                                <BrandText text={description} />
                            </p>
                        )}
                        {children && (
                            <div className="flex flex-col sm:flex-row gap-4">
                                {children}
                            </div>
                        )}
                    </div>

                    {image && (
                        <div className="relative animate-in fade-in slide-in-from-right duration-1000 delay-300 ease-out fill-mode-both">
                            <div className="relative aspect-square lg:aspect-auto lg:h-[500px] w-full flex items-center justify-center">
                                {/* Floating animation using a simple CSS keyframe defined or utility if available */}
                                <div className="relative w-full h-full motion-safe:animate-bounce-slow">
                                    <Image
                                        src={image}
                                        alt={title}
                                        fill
                                        priority
                                        className="object-contain"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                                {/* Background glow for the image */}
                                <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full -z-10 animate-pulse pointer-events-none" />
                            </div>
                        </div>
                    )}

                    {sideContent && (
                        <div className="animate-in fade-in slide-in-from-right-8 duration-1000 delay-300 ease-out fill-mode-both">
                            {sideContent}
                        </div>
                    )}
                </div>

                {footer && (
                    <div className="mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-both">
                        {footer}
                    </div>
                )}
            </div>

            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full bg-linear-to-l from-primary/5 to-transparent -z-10 blur-3xl rounded-full" />

            <style jsx global>{`
                @keyframes bounce-slow {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                }
                .animate-bounce-slow {
                    animation: bounce-slow 6s ease-in-out infinite;
                }
            `}</style>
        </SectionWrapper>
    );
}
