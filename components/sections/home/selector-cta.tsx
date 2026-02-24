import React from "react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { BrandText } from "@/components/ui/brand";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export function SelectorCta() {
    const t = useTranslations('home.selectorCta');

    return (
        <SectionWrapper className="pt-0 pb-16">
            <div className="bg-primary/5 border border-primary/10 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                    <BrandText text={t('title')} />
                </h3>
                <p className="text-lg text-muted-foreground text-balance mx-auto max-w-2xl">
                    <BrandText text={t('text')} />
                </p>
                <div className="pt-4">
                    <Button asChild size="lg" className="rounded-full font-semibold group">
                        <Link href="/contatti">
                            <MessageSquare className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                            {t('cta')}
                        </Link>
                    </Button>
                </div>
            </div>
        </SectionWrapper>
    );
}
