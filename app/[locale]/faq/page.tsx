import React from "react";
import { FaqSection } from "@/components/shared/faq-section";

export const metadata = {
    title: "FAQ - Ulisses",
    description: "Domande frequenti su Ulisses: integrazioni, tecnologia, indoor/outdoor e molto altro.",
};

export default function FaqPage() {
    return (
        <div className="flex flex-col">
            <FaqSection />
        </div>
    );
}
