import React from "react";
import { cn } from "@/lib/utils";

/**
 * Branded word "Ulisses" with the primary color.
 */
export function Brand({ className }: { className?: string }) {
    return (
        <span className={cn("text-primary font-bold", className)}>
            Ulisses
        </span>
    );
}

/**
 * Automatically highlights the word "Ulisses" in a string.
 */
export function BrandText({
    text,
    className,
    brandClassName
}: {
    text: string | undefined | null;
    className?: string;
    brandClassName?: string;
}) {
    if (!text) return null;
    if (typeof text !== "string") return text;
    if (!text.includes("Ulisses")) return <span className={className}>{text}</span>;

    const parts = text.split(/(Ulisses)/g);

    return (
        <span className={className}>
            {parts.map((part, i) => (
                <React.Fragment key={i}>
                    {part === "Ulisses" ? (
                        <Brand className={brandClassName} />
                    ) : (
                        part
                    )}
                </React.Fragment>
            ))}
        </span>
    );
}
