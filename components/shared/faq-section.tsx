"use client";

import React from "react";
import { HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionWrapper } from "./section-wrapper";
import { DICTIONARY } from "@/lib/dictionary";

interface FaqSectionProps {
    variant?: "default" | "muted";
}

export function FaqSection({ variant = "default" }: FaqSectionProps) {
    const { faq } = DICTIONARY.knowledgeHub;

    return (
        <SectionWrapper variant={variant}>
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-6">
                        <HelpCircle className="h-8 w-8" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">{faq.title}</h2>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    {faq.items.map((item, i) => (
                        <AccordionItem key={i} value={`item-${i}`} className="border-b-muted">
                            <AccordionTrigger className="text-left text-lg font-bold py-6 hover:text-primary transition-colors">
                                {item.q}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-lg leading-relaxed pb-6">
                                {item.a}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </SectionWrapper>
    );
}
