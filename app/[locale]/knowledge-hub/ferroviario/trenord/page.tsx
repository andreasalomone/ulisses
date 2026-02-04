import React from "react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, Database } from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function TrenordPage() {
    const t = await getTranslations('specialStories');
    const ts = await getTranslations('specialStories.trenord');

    return (
        <main className="flex flex-col min-h-screen bg-background text-foreground">
            <SectionWrapper className="pt-24 pb-8 md:pt-32">
                <Link href="/knowledge-hub" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8 font-bold group">
                    <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                    {t('backToHub')}
                </Link>

                <div className="max-w-4xl mx-auto">
                    {/* Header / Manifesto Title */}
                    <div className="mb-16 md:mb-24 animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-both">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="bg-white p-2 rounded-xl shadow-md border border-border/50">
                                <Image
                                    src="/partners/Trenord_Logo.png"
                                    alt="Trenord Logo"
                                    width={120}
                                    height={50}
                                    className="object-contain"
                                />
                            </div>
                            <div className="h-px bg-border flex-1 mx-4" />
                            <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{t('useCaseLabel')}</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[1.05] text-pretty">
                            {ts.rich('title', {
                                highlight: (chunks) => <span className="text-primary">{chunks}</span>
                            })}
                        </h1>
                    </div>

                    {/* Main Content Flow */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

                        {/* Left Column: Narrative Text */}
                        <div className="md:col-span-8 space-y-12 text-lg md:text-xl leading-relaxed text-muted-foreground">
                            <section className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-both">
                                <p className="first-letter:text-7xl first-letter:font-bold first-letter:text-foreground first-letter:mr-3 first-letter:float-left">
                                    {ts('narrative.p1')}
                                </p>
                                <p className="mt-6">
                                    {ts('narrative.p2')}
                                </p>
                                <p className="mt-6">
                                    {ts('narrative.p3')}
                                </p>
                            </section>

                            <section className="border-l-4 border-primary/20 pl-8 py-2 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
                                <h3 className="text-2xl font-bold text-foreground mb-4">{ts('challenge.title')}</h3>
                                <p>
                                    {ts('challenge.text')}
                                </p>
                            </section>

                            <section className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400 fill-mode-both">
                                <h3 className="text-2xl font-bold text-foreground mb-6">{ts('resolution.title')}</h3>
                                <p>
                                    {ts('resolution.text1')}
                                </p>
                                <p className="mt-6">
                                    {ts('resolution.text2')}
                                </p>
                            </section>
                        </div>

                        {/* Right Column: Key Stats / Highlights */}
                        <div className="md:col-span-4 space-y-8 sticky top-32 self-start animate-in fade-in slide-in-from-right-8 duration-1000 delay-500 fill-mode-both">
                            <div className="bg-muted/30 rounded-3xl p-6 border border-border/50 backdrop-blur-sm">
                                <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                                    <Database className="w-5 h-5 text-primary" />
                                    {ts('stats.title')}
                                </h4>
                                <ul className="space-y-4">
                                    <li className="flex justify-between items-center border-b border-border/40 pb-2 last:border-0 last:pb-0">
                                        <span className="text-sm">{ts('stats.convogliLabel')}</span>
                                        <span className="font-bold text-foreground">{ts('stats.convogli')}</span>
                                    </li>
                                    <li className="flex justify-between items-center border-b border-border/40 pb-2 last:border-0 last:pb-0">
                                        <span className="text-sm">{ts('stats.binariLabel')}</span>
                                        <span className="font-bold text-foreground">{ts('stats.binari')}</span>
                                    </li>
                                    <li className="flex justify-between items-center border-b border-border/40 pb-2 last:border-0 last:pb-0">
                                        <span className="text-sm">{ts('stats.precisionLabel')}</span>
                                        <span className="font-bold text-foreground">{ts('stats.precision')}</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-primary text-primary-foreground rounded-3xl p-6 shadow-lg">
                                <h4 className="font-bold mb-3 flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5" />
                                    {ts('results.title')}
                                </h4>
                                <ul className="space-y-2 text-sm/relaxed opacity-90">
                                    {(ts.raw('results.items') as string[]).map((item: string) => (
                                        <li key={item}>• {item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Footer Section: Needs to be distinct but connected */}
                    <div className="mt-24 pt-12 border-t border-border animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-both">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-3xl font-bold tracking-tight mb-4">{ts('footer.title')}</h3>
                                <p className="text-xl text-muted-foreground leading-relaxed">
                                    {ts('footer.text')}
                                </p>
                            </div>
                            <div className="bg-muted rounded-3xl p-8 flex flex-col items-start gap-6">
                                <h4 className="font-bold text-xl">{ts('cta.title')}</h4>
                                <p className="text-muted-foreground">{ts('cta.text')}</p>
                                <Button asChild size="lg" className="rounded-full font-bold px-8">
                                    <Link href="/contatti">
                                        {ts('cta.button')}
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>

                </div>
            </SectionWrapper>
        </main>
    );
}
