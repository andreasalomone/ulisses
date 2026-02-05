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
import { FormSelect } from "@/components/ui/form-select";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations, useLocale } from "next-intl";
import { SCENARIO_KEYS, OBJECTIVE_KEYS, PLATFORM_KEYS, TIMING_KEYS } from "@/lib/constants";

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
        setError,
        formState: { errors },
        reset,
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            platforms: undefined,
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
                setServerMessage({ type: "error", text: result.message || tCommon("error") });

                // Handle field-specific server errors
                if (result.errors) {
                    Object.entries(result.errors).forEach(([key, msgs]) => {
                        // Cast key safe as we trust the backend to return valid keys for our form
                        setError(key as keyof ContactFormValues, {
                            type: 'server',
                            message: msgs[0]
                        });
                    });
                }
            }
        } catch {
            setServerMessage({ type: "error", text: tCommon("networkError") });
        } finally {
            setIsSubmitting(false);
        }
    };

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
                                    <FormSelect
                                        id="scenario"
                                        label={t("fields.scenario.label")}
                                        options={SCENARIO_KEYS}
                                        translationPrefix="fields.scenario.options"
                                        onValueChange={(v) => setValue("scenario", v as ContactFormValues["scenario"])}
                                        error={errors.scenario?.message}
                                    />

                                    <FormSelect
                                        id="timing"
                                        label={t("fields.timing.label")}
                                        options={TIMING_KEYS}
                                        translationPrefix="fields.timing.options"
                                        onValueChange={(v) => setValue("timing", v as ContactFormValues["timing"])}
                                        error={errors.timing?.message}
                                    />
                                </div>
                            </div>

                            <FormSelect
                                id="objective"
                                label={t("fields.objective.label")}
                                options={OBJECTIVE_KEYS}
                                translationPrefix="fields.objective.options"
                                onValueChange={(v) => setValue("objective", v as ContactFormValues["objective"])}
                                error={errors.objective?.message}
                            />

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

                            <FormSelect
                                id="platforms"
                                label={t("fields.platforms.label")}
                                options={PLATFORM_KEYS}
                                translationPrefix="fields.platforms.options"
                                /* UI restriction: Single select for now. Schema supports multiple. */
                                onValueChange={(v) => setValue("platforms", v as ContactFormValues["platforms"])}
                                error={errors.platforms?.message}
                            />

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

                            {/* Honeypot field for spam protection */}
                            <input
                                type="text"
                                className="hidden"
                                style={{ display: "none" }}
                                tabIndex={-1}
                                autoComplete="off"
                                {...register("_gotcha")}
                            />

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
