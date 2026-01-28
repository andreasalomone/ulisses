import React from "react";
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
    width?: number | string;
    height?: number | string;
    label?: string;
    className?: string;
}

export function ImagePlaceholder({
    width = "100%",
    height = "400px",
    label = "Image Placeholder",
    className,
}: ImagePlaceholderProps) {
    return (
        <div
            style={{ width, height }}
            className={cn(
                "flex items-center justify-center bg-muted border-2 border-dashed border-muted-foreground/20 rounded-xl overflow-hidden text-muted-foreground/50 font-medium",
                className
            )}
        >
            <div className="flex flex-col items-center gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-20"
                >
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                    <circle cx="9" cy="9" r="2" />
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                </svg>
                <span className="text-xs uppercase tracking-wider">{label}</span>
            </div>
        </div>
    );
}
