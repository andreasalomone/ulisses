import React from "react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { getTranslations } from "next-intl/server";
import { CONTACT_INFO } from "@/lib/constants";
import { Link } from "@/i18n/routing";

export default async function CookiePolicyPage() {
    const t = await getTranslations("cookiePolicy");
    const tLegal = await getTranslations("legal");

    return (
        <SectionWrapper className="py-24">
            <div className="max-w-4xl mx-auto">
                <div className="p-8 md:p-12 bg-background/60 backdrop-blur-xl rounded-[2.5rem] border shadow-2xl space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
                            {t("title")}
                        </h1>
                        <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">
                            {t("lastUpdated")}
                        </p>
                    </div>

                    <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">
                        <section>
                            <p className="text-lg text-foreground font-medium">
                                {t("intro")}
                            </p>
                            <p>
                                {t("readCarefully")}
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">{t("whatAreCookies.title")}</h2>
                            <p>
                                {t("whatAreCookies.text")}
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">{t("typesOfCookies.title")}</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>
                                    <span className="font-bold text-foreground">{t("typesOfCookies.technical.label")}</span> {t("typesOfCookies.technical.text")}
                                </li>
                                <li>
                                    <span className="font-bold text-foreground">{t("typesOfCookies.analytics.label")}</span> {t("typesOfCookies.analytics.text")}
                                </li>
                                <li>
                                    <span className="font-bold text-foreground">{t("typesOfCookies.marketing.label")}</span> {t("typesOfCookies.marketing.text")}
                                </li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">{t("management.title")}</h2>
                            <p>
                                {t("management.text")}
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">{t("privacyInfo.title")}</h2>
                            <p>
                                {t("privacyInfo.text")} <Link href="/privacy-policy" className="text-primary hover:underline">{t("privacyInfo.linkText")}</Link>.
                            </p>
                        </section>

                        <div className="pt-8 border-t border-primary/10">
                            <h3 className="text-xl font-bold text-foreground mb-4">{t("contact.title")}</h3>
                            <p>
                                {t("contact.text")} <a href="mailto:privacy@ulisses.it" className="text-primary hover:underline">privacy@ulisses.it</a>
                            </p>
                            <div className="mt-6 p-6 bg-muted/50 rounded-2xl border text-sm">
                                <p className="font-bold text-foreground">{CONTACT_INFO.address}</p>
                                <p className="mt-1">{tLegal("piva")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
