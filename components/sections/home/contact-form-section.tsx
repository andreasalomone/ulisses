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
import { DICTIONARY } from "@/lib/dictionary";

export function ContactFormSection() {
    const d = DICTIONARY.home.cta;
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
                setServerMessage({ type: "success", text: result.message || "Successo!" });
                reset();
            } else {
                setServerMessage({ type: "error", text: result.error || "Errore durante l'invio." });
            }
        } catch (error) {
            setServerMessage({ type: "error", text: "Si è verificato un errore di rete." });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <SectionWrapper id="richiedi-demo" className="bg-primary text-primary-foreground relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                <div>
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
                        {d.title}
                    </h2>
                    <p className="text-xl opacity-90 leading-relaxed mb-8">
                        {d.formMicrocopy}
                    </p>

                    <div className="space-y-6">
                        {d.bullets.map((bullet, i) => (
                            <div key={i} className="flex gap-4 items-start">
                                <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 font-bold text-sm">{i + 1}</div>
                                <p className="text-lg font-medium opacity-80">{bullet}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-background text-foreground p-8 md:p-10 rounded-[2.5rem] shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="scenario">{d.scenariosTitle}</Label>
                                <Select onValueChange={(v) => setValue("scenario", v as "Logistica" | "Ferroviario" | "Smart Parking")}>
                                    <SelectTrigger className={cn(errors.scenario && "border-destructive")}>
                                        <SelectValue placeholder={DICTIONARY.navigation.soluzioni} />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Logistica">{DICTIONARY.navigation.logistica}</SelectItem>
                                        <SelectItem value="Ferroviario">{DICTIONARY.navigation.ferroviario}</SelectItem>
                                        <SelectItem value="Smart Parking">{DICTIONARY.navigation.smartParking}</SelectItem>
                                    </SelectContent>
                                </Select>
                                {errors.scenario && <p className="text-xs text-destructive font-bold">{errors.scenario.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="timing">{d.timingTitle}</Label>
                                <Select onValueChange={(v) => setValue("timing", v)}>
                                    <SelectTrigger className={cn(errors.timing && "border-destructive")}>
                                        <SelectValue placeholder="..." />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {d.timing.map((t) => (
                                            <SelectItem key={t} value={t}>{t}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                {errors.timing && <p className="text-xs text-destructive font-bold">{errors.timing.message}</p>}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="objective">{d.objectivesTitle}</Label>
                            <Select onValueChange={(v) => setValue("objective", v)}>
                                <SelectTrigger className={cn(errors.objective && "border-destructive")}>
                                    <SelectValue placeholder="..." />
                                </SelectTrigger>
                                <SelectContent>
                                    {d.objectives.map((obj) => (
                                        <SelectItem key={obj} value={obj}>{obj}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            {errors.objective && <p className="text-xs text-destructive font-bold">{errors.objective.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="size">{d.sizeLabel}</Label>
                            <Input
                                id="size"
                                placeholder={d.sizePlaceholder}
                                {...register("size")}
                                className={cn(errors.size && "border-destructive")}
                            />
                            {errors.size && <p className="text-xs text-destructive font-bold">{errors.size.message}</p>}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="email">{d.contactLabel}</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="name@company.com"
                                    {...register("email")}
                                    className={cn(errors.email && "border-destructive")}
                                />
                                {errors.email && <p className="text-xs text-destructive font-bold">{errors.email.message}</p>}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="phone">{d.phoneLabel}</Label>
                                <Input id="phone" placeholder="+39 ..." {...register("phone")} />
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
                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                    {DICTIONARY.common.sending}
                                </>
                            ) : (
                                <>
                                    {d.button}
                                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </>
                            )}
                        </Button>
                        <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest leading-relaxed">
                            {d.privacyNotice}
                        </p>
                    </form>
                </div>
            </div>

            {/* Decorative gradients */}
            <div className="absolute left-0 top-0 w-96 h-96 bg-white/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-black/10 blur-[80px] rounded-full translate-x-1/3 translate-y-1/3" />
        </SectionWrapper>
    );
}
