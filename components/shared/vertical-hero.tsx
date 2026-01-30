"use client";

import React from "react";
import { SectionWrapper } from "./section-wrapper";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface VerticalHeroProps {
    title: string;
    subtitle: string;
    titleToken?: string;
    description?: string;
    image?: string;
    children?: React.ReactNode;
}

export function VerticalHero({ title, subtitle, titleToken, description, image, children }: VerticalHeroProps) {
    const renderTitle = () => {
        if (!titleToken) return title;
        const parts = title.split(new RegExp(`(${titleToken})`, "gi"));
        return parts.map((part, i) =>
            part.toLowerCase() === titleToken.toLowerCase() ? (
                <span key={i} className="text-primary">{part}</span>
            ) : (
                part
            )
        );
    };

    return (
        <SectionWrapper className="pt-32 pb-16 md:pt-48 md:pb-32 border-b overflow-hidden bg-muted/20">
            <div className="container relative z-10">
                <div className={cn(
                    "grid grid-cols-1 gap-12 items-center",
                    image ? "lg:grid-cols-2" : "max-w-4xl"
                )}>
                    <div className="animate-in fade-in slide-in-from-left duration-1000 ease-out fill-mode-both">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-wrap-balance">
                            {renderTitle()}
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mb-10">
                            {subtitle}
                        </p>
                        {description && (
                            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-10">
                                {description}
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
                </div>
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
