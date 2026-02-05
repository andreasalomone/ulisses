"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormValues } from "@/lib/validations/contact";
import { submitContactForm } from "@/app/actions/contact";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations, useLocale } from "next-intl";

export function ContactFormSection() {
    const t = useTranslations("contactForm");
    const tCommon = useTranslations("common");
    const locale = useLocale();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [serverMessage, setServerMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
        reset,
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            platforms: [],
        },
    });

    const onSubmit = async (data: ContactFormValues) => {
        setIsSubmitting(true);
        setServerMessage(null);

        try {
            const result = await submitContactForm(data, locale);
            if (result.success) {
                setServerMessage({ type: "success", text: result.message || tCommon("success") });
                reset();
            } else {
                setServerMessage({ type: "error", text: result.error || tCommon("error") });
            }
        } catch {
            setServerMessage({ type: "error", text: tCommon("networkError") });
        } finally {
            setIsSubmitting(false);
        }
    };

    const scenarioOptions = t.raw("fields.scenario.options") as Record<string, string>;
    const objectiveOptions = t.raw("fields.objective.options") as Record<string, string>;
    const platformOptions = t.raw("fields.platforms.options") as Record<string, string>;
    const timingOptions = t.raw("fields.timing.options") as Record<string, string>;

    return (
        <SectionWrapper id="richiedi-demo" className="bg-primary text-primary-foreground relative overflow-hidden">
            {/* [2026 Standard] Define container context for fluid layout */}
            <div className="@container">
                {/* [2026 Standard] Use @lg (approx 32rem/512px) for safer container split */}
                <div className="grid grid-cols-1 @lg:grid-cols-[1.3fr_0.7fr] gap-16 items-center relative z-10">
                    <div className="animate-in fade-in slide-in-from-left-8 duration-700">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                            {t("title")}
                        </h2>
                        <p className="text-xl opacity-90 leading-relaxed mb-8">
                            {t("intro")}
                        </p>
                    </div>

                    <div className="bg-background text-foreground p-8 md:p-10 rounded-[2.5rem] border border-white/10 shadow-xl animate-in fade-in slide-in-from-right-8 duration-700 delay-200 fill-mode-both">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            {/* [2026 Standard] Nested container queries for form internal layout */}
                            <div className="@container/form">
                                <div className="grid grid-cols-1 @lg:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="scenario-trigger">{t("fields.scenario.label")}</Label>
                                        <Select onValueChange={(v) => setValue("scenario", v as ContactFormValues["scenario"])}>
                                            <SelectTrigger
                                                id="scenario-trigger"
                                                className={cn("h-14 cursor-pointer", errors.scenario && "border-destructive")}
                                                aria-invalid={!!errors.scenario}
                                                aria-describedby={errors.scenario ? "scenario-error" : undefined}
                                            >
                                                <SelectValue placeholder="..." />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {Object.entries(scenarioOptions).map(([id, label]) => (
                                                    <SelectItem key={id} value={id} className="h-12 cursor-pointer">{label}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        {errors.scenario && <p id="scenario-error" className="text-xs text-destructive font-bold">{errors.scenario.message}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="timing-trigger">{t("fields.timing.label")}</Label>
                                        <Select onValueChange={(v) => setValue("timing", v as ContactFormValues["timing"])}>
                                            <SelectTrigger
                                                id="timing-trigger"
                                                className={cn("h-14 cursor-pointer", errors.timing && "border-destructive")}
                                                aria-invalid={!!errors.timing}
                                                aria-describedby={errors.timing ? "timing-error" : undefined}
                                            >
                                                <SelectValue placeholder="..." />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {Object.entries(timingOptions).map(([key, label]) => (
                                                    <SelectItem key={key} value={key} className="h-12 cursor-pointer">{label}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        {errors.timing && <p id="timing-error" className="text-xs text-destructive font-bold">{errors.timing.message}</p>}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="objective-trigger">{t("fields.objective.label")}</Label>
                                <Select onValueChange={(v) => setValue("objective", v as ContactFormValues["objective"])}>
                                    <SelectTrigger
                                        id="objective-trigger"
                                        className={cn("h-14 cursor-pointer", errors.objective && "border-destructive")}
                                        aria-invalid={!!errors.objective}
                                        aria-describedby={errors.objective ? "objective-error" : undefined}
                                    >
                                        <SelectValue placeholder="..." />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {Object.entries(objectiveOptions).map(([key, label]) => (
                                            <SelectItem key={key} value={key} className="h-12 cursor-pointer">{label}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                {errors.objective && <p id="objective-error" className="text-xs text-destructive font-bold">{errors.objective.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="size">{t("fields.size.label")}</Label>
                                <Input
                                    id="size"
                                    placeholder={t("fields.size.placeholder")}
                                    {...register("size")}
                                    className={cn("h-14 text-base", errors.size && "border-destructive")}
                                    inputMode="text"
                                    aria-invalid={!!errors.size}
                                    aria-describedby={errors.size ? "size-error" : undefined}
                                />
                                {errors.size && <p id="size-error" className="text-xs text-destructive font-bold">{errors.size.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="platforms-trigger">{t("fields.platforms.label")}</Label>
                                <Select onValueChange={(v) => setValue("platforms", [v as NonNullable<ContactFormValues["platforms"]>[number]])}>
                                    <SelectTrigger
                                        id="platforms-trigger"
                                        className={cn("h-14 cursor-pointer", errors.platforms && "border-destructive")}
                                        aria-invalid={!!errors.platforms}
                                        aria-describedby={errors.platforms ? "platforms-error" : undefined}
                                    >
                                        <SelectValue placeholder="..." />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {Object.entries(platformOptions).map(([key, label]) => (
                                            <SelectItem key={key} value={key} className="h-12 cursor-pointer">{label}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                {errors.platforms && <p id="platforms-error" className="text-xs text-destructive font-bold">{errors.platforms.message}</p>}
                            </div>

                            <div className="@container/contact">
                                <div className="grid grid-cols-1 @lg:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="email">{t("fields.email.label")}</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder={t("fields.email.placeholder")}
                                            {...register("email")}
                                            className={cn("h-14 text-base", errors.email && "border-destructive")}
                                            inputMode="email"
                                            autoComplete="email"
                                            aria-invalid={!!errors.email}
                                            aria-describedby={errors.email ? "email-error" : undefined}
                                        />
                                        {errors.email && <p id="email-error" className="text-xs text-destructive font-bold">{errors.email.message}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">{t("fields.phone.label")}</Label>
                                        <Input
                                            id="phone"
                                            type="tel"
                                            inputMode="tel"
                                            autoComplete="tel"
                                            placeholder={t.has("fields.phone.placeholder") ? t("fields.phone.placeholder") : "+39 ..."}
                                            {...register("phone")}
                                            className={cn("h-14 text-base", errors.phone && "border-destructive")}
                                            aria-invalid={!!errors.phone}
                                            aria-describedby={errors.phone ? "phone-error" : undefined}
                                        />
                                        {errors.phone && <p id="phone-error" className="text-xs text-destructive font-bold">{errors.phone.message}</p>}
                                    </div>
                                </div>
                            </div>

                            {serverMessage && (
                                <div className={cn(
                                    "p-4 rounded-xl flex items-center gap-3 text-sm font-bold animate-in fade-in slide-in-from-top-2",
                                    serverMessage.type === "success" ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"
                                )}>
                                    {serverMessage.type === "success" ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                                    {serverMessage.text}
                                </div>
                            )}

                            <Button
                                type="submit"
                                className="w-full h-14 rounded-xl text-lg font-bold group"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="me-2 h-5 w-5 animate-spin" />
                                        {tCommon("sending")}
                                    </>
                                ) : (
                                    <>
                                        {t("submitButton")}
                                        <Send className="ms-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </>
                                )}
                            </Button>
                            <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest leading-relaxed">
                                {t("noSpam")}
                            </p>
                        </form>
                    </div>
                </div>

                {/* Decorative gradients */}
                <div className="absolute inset-inline-start-0 top-0 w-96 h-96 bg-white/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute inset-inline-end-0 bottom-0 w-64 h-64 bg-black/10 blur-[80px] rounded-full translate-x-1/3 translate-y-1/3" />
            </div>
        </SectionWrapper>
    );
}
