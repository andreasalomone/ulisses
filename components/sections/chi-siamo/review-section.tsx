
import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";

interface ReviewSectionProps {
    text: string;
    author: string;
    role: string;
}

export const ReviewSection = ({ text, author, role }: ReviewSectionProps) => {
    return (
        <SectionWrapper variant="muted" className="relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none select-none">
                <Quote size={400} />
            </div>

            <div className="relative max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 space-y-8 text-center md:text-left">
                    <div className="inline-flex text-primary mb-4">
                        <Quote size={48} className="fill-primary/20" />
                    </div>
                    <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed italic text-foreground">
                        &quot;{text}&quot;
                    </blockquote>
                    <div>
                        <div className="font-bold text-lg">{author}</div>
                        <div className="text-muted-foreground">{role}</div>
                    </div>
                </div>

                {/* Trenord specific branding since it was requested explicitly */}
                <div className="shrink-0">
                    <div className="bg-white p-6 rounded-2xl shadow-sm">
                        <Image
                            src="/partners/Trenord_Logo.png"
                            alt="Trenord"
                            width={160}
                            height={80}
                            className="w-40 h-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};
