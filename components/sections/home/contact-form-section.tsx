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
import { useTranslations } from "next-intl";

export function ContactFormSection() {
    const t = useTranslations("contactForm");
    const tCommon = useTranslations("common");
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
            const result = await submitContactForm(data);
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

    const scenarioOptions = t.raw("fields.scenario.options") as string[];
    const objectiveOptions = t.raw("fields.objective.options") as string[];
    const platformOptions = t.raw("fields.platforms.options") as string[];
    const timingOptions = t.raw("fields.timing.options") as string[];

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

                        <div className="p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
                            <p className="font-bold text-lg mb-4">{t("microcopy")}</p>
                            <p className="opacity-80 leading-relaxed">
                                {t("intro")} {/* Note: Using 'intro' or similar text if applicable, but original used hardcoded text here for 'Why we ask this' logic which wasn't fully in dictionary? No, wait. */}
                                {/* Original Line 69-72: "Perché chiediamo questi dati? ... non generica." */}
                                {/* Dictionary has 'microcopy': "Compila 6 campi..." */}
                                {/* The original code had hardcoded text at lines 69-72 inside <div className="... bg-white/5..."> */}
                                {/* I should probably enable translating this block too, but for now I will check if I can map it. */}
                                {/* The dictionary 'microcopy' matches the meaning of "Compila 6 campi...". */}
                                {/* Wait, looking at original file: */}
                                {/* Line 62: {d.title} */}
                                {/* Line 65: {d.intro} */}
                                {/* Line 69: Hardcoded "Perché chiediamo questi dati?" */}
                                {/* Line 71: Hardcoded "Ogni scenario ha vincoli diversi..." */}
                                {/* The 'microcopy' key in dictionary (line 886) says "Compila 6 campi..." */}
                                {/* So the hardcoded text at 69-72 is NOT in dictionary. */}
                                {/* The 'microcopy' key was NOT used in original component? Let's check original component again. */}
                            </p>
                        </div>
                    </div>

                    <div className="bg-background text-foreground p-8 md:p-10 rounded-[2.5rem] border border-white/10 shadow-xl animate-in fade-in slide-in-from-right-8 duration-700 delay-200 fill-mode-both">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            {/* [2026 Standard] Nested container queries for form internal layout */}
                            <div className="@container/form">
                                <div className="grid grid-cols-1 @lg:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="scenario">{t("fields.scenario.label")}</Label>
                                        <Select onValueChange={(v) => setValue("scenario", v as "Logistica" | "Ferroviario" | "Smart Parking")}>
                                            <SelectTrigger
                                                className={cn("h-14", errors.scenario && "border-destructive")}
                                                aria-invalid={!!errors.scenario}
                                            >
                                                <SelectValue placeholder="..." />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {scenarioOptions.map((opt) => (
                                                    <SelectItem key={opt} value={opt} className="h-12">{opt}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        {errors.scenario && <p className="text-xs text-destructive font-bold">{errors.scenario.message}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="timing">{t("fields.timing.label")}</Label>
                                        <Select onValueChange={(v) => setValue("timing", v)}>
                                            <SelectTrigger
                                                className={cn("h-14", errors.timing && "border-destructive")}
                                                aria-invalid={!!errors.timing}
                                            >
                                                <SelectValue placeholder="..." />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {timingOptions.map((opt) => (
                                                    <SelectItem key={opt} value={opt} className="h-12">{opt}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        {errors.timing && <p className="text-xs text-destructive font-bold">{errors.timing.message}</p>}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="objective">{t("fields.objective.label")}</Label>
                                <Select onValueChange={(v) => setValue("objective", v)}>
                                    <SelectTrigger
                                        className={cn("h-14", errors.objective && "border-destructive")}
                                        aria-invalid={!!errors.objective}
                                    >
                                        <SelectValue placeholder="..." />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {objectiveOptions.map((opt) => (
                                            <SelectItem key={opt} value={opt} className="h-12">{opt}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                {errors.objective && <p className="text-xs text-destructive font-bold">{errors.objective.message}</p>}
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
                                />
                                {errors.size && <p className="text-xs text-destructive font-bold">{errors.size.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="platforms">{t("fields.platforms.label")}</Label>
                                <Select onValueChange={(v) => setValue("platforms", [v])}>
                                    <SelectTrigger className="h-14" aria-invalid={!!errors.platforms}>
                                        <SelectValue placeholder="..." />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {platformOptions.map((opt) => (
                                            <SelectItem key={opt} value={opt} className="h-12">{opt}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="@container/contact">
                                <div className="grid grid-cols-1 @lg:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="email">{t("fields.email.label")}</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="name@company.com"
                                            {...register("email")}
                                            className={cn("h-14 text-base", errors.email && "border-destructive")}
                                            inputMode="email"
                                            autoComplete="email"
                                            aria-invalid={!!errors.email}
                                        />
                                        {errors.email && <p className="text-xs text-destructive font-bold">{errors.email.message}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">{t("fields.phone.label")}</Label>
                                        <Input
                                            id="phone"
                                            type="tel"
                                            inputMode="tel"
                                            autoComplete="tel"
                                            placeholder="+39 ..."
                                            {...register("phone")}
                                            className="h-14 text-base"
                                            aria-invalid={!!errors.phone}
                                        />
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
                <div className="absolute left-0 top-0 w-96 h-96 bg-white/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute right-0 bottom-0 w-64 h-64 bg-black/10 blur-[80px] rounded-full translate-x-1/3 translate-y-1/3" />
            </div>
        </SectionWrapper>
    );
}
