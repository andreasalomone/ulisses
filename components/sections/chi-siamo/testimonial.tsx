"use client";

import React from "react";
import { ReviewSection } from "./review-section";
import { DICTIONARY } from "@/lib/dictionary";

export function TestimonialSection() {
    const d = DICTIONARY.azienda.review;

    if (!d) return null;

    return (
        <div className="py-12">
            <ReviewSection
                text={d.text}
                author={d.author}
                role={d.role}
            />
        </div>
    );
}
