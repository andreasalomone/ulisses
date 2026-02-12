"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, CheckCircle2, Download } from "lucide-react";
import { requestOnePager } from "@/app/actions/one-pager";

interface OnePagerDialogProps {
    onePagerType: string;
    triggerLabel?: string;
    triggerClassName?: string;
    variant?: "default" | "outline" | "secondary" | "ghost" | "link";
    children?: React.ReactNode;
}

export function OnePagerDialog({
    onePagerType,
    triggerLabel,
    triggerClassName = "h-14 px-8 text-base font-bold rounded-full",
    variant = "outline",
    children,
}: OnePagerDialogProps) {
    const t = useTranslations("common.onePagerDialog");
    const [open, setOpen] = useState(false);
    const [step, setStep] = useState<"form" | "success">("form");
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleOpenChange = (nextOpen: boolean) => {
        setOpen(nextOpen);
        if (!nextOpen) {
            // Reset after close animation
            setTimeout(() => {
                setStep("form");
                setEmail("");
                setIsSubmitting(false);
            }, 300);
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!email) return;

        setIsSubmitting(true);
        await requestOnePager(email, onePagerType);
        setIsSubmitting(false);
        setStep("success");
    };

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>
                {children ?? (
                    <Button
                        variant={variant}
                        size="lg"
                        className={triggerClassName}
                    >
                        <Download className="mr-2 h-5 w-5" />
                        {triggerLabel ?? t("title")}
                    </Button>
                )}
            </DialogTrigger>

            <DialogContent className="sm:max-w-md">
                {step === "form" ? (
                    <>
                        <DialogHeader>
                            <DialogTitle className="text-xl">
                                {t("title")}
                            </DialogTitle>
                            <DialogDescription className="text-lg">
                                {t("description")}
                            </DialogDescription>
                        </DialogHeader>

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-4 pt-2"
                        >
                            <div className="space-y-2">
                                <Label
                                    htmlFor="one-pager-email"
                                    className="text-sm"
                                >
                                    {t("emailLabel")}
                                </Label>
                                <Input
                                    id="one-pager-email"
                                    type="email"
                                    placeholder={t("emailPlaceholder")}
                                    value={email}
                                    onChange={(event) =>
                                        setEmail(event.target.value)
                                    }
                                    required
                                    autoFocus
                                />
                            </div>

                            <DialogFooter>
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full sm:w-auto"
                                >
                                    {isSubmitting && (
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    )}
                                    {isSubmitting
                                        ? t("submitting")
                                        : t("confirm")}
                                </Button>
                            </DialogFooter>
                        </form>
                    </>
                ) : (
                    <>
                        <div className="flex flex-col items-center justify-center py-6 space-y-4">
                            <div className="h-16 w-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400">
                                <CheckCircle2 className="h-8 w-8" />
                            </div>
                            <DialogHeader className="items-center text-center">
                                <DialogTitle className="text-lg">
                                    {t("successTitle")}
                                </DialogTitle>
                                <DialogDescription className="text-sm">
                                    {t("successMessage")}
                                </DialogDescription>
                            </DialogHeader>
                        </div>
                        <DialogFooter>
                            <Button
                                className="w-full"
                                onClick={() => setOpen(false)}
                            >
                                {t("close")}
                            </Button>
                        </DialogFooter>
                    </>
                )}
            </DialogContent>
        </Dialog>
    );
}
