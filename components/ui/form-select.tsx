"use client";

import { useTranslations } from "next-intl";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface FormSelectProps {
    id: string;
    label: string;
    placeholder?: string;
    options: readonly string[];
    translationPrefix: string;
    value?: string;
    onValueChange: (value: string) => void;
    error?: string;
    className?: string;
}

export function FormSelect({
    id,
    label,
    placeholder = "...",
    options,
    translationPrefix,
    onValueChange,
    error,
    className,
}: FormSelectProps) {
    const t = useTranslations("contactForm");

    return (
        <div className={cn("space-y-2", className)}>
            <Label htmlFor={`${id}-trigger`}>{label}</Label>
            <Select onValueChange={onValueChange}>
                <SelectTrigger
                    id={`${id}-trigger`}
                    className={cn(
                        "h-14 cursor-pointer",
                        error && "border-destructive"
                    )}
                    aria-invalid={!!error}
                    aria-describedby={error ? `${id}-error` : undefined}
                >
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    {options.map((key) => (
                        <SelectItem key={key} value={key} className="h-12 cursor-pointer">
                            {t(`${translationPrefix}.${key}`)}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            {error && (
                <p id={`${id}-error`} className="text-xs text-destructive font-bold">
                    {error}
                </p>
            )}
        </div>
    );
}
