import React from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    variant?: "default" | "muted" | "primary" | "secondary";
}

export function SectionWrapper({
    children,
    className,
    id,
    variant = "default",
}: SectionWrapperProps) {
    const variantStyles = {
        default: "bg-background",
        muted: "bg-muted/50",
        primary: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
    };

    return (
        <section
            id={id}
            className={cn("py-16 md:py-24", variantStyles[variant], className)}
        >
            <div className="container mx-auto px-4 md:px-6">{children}</div>
        </section>
    );
}
