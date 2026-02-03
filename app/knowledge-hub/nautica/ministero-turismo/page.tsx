import React from "react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, Anchor } from "lucide-react";

export default function MinisteroTurismoPage() {
    return (
        <main className="flex flex-col min-h-screen bg-background text-foreground">

            <SectionWrapper className="pt-24 pb-8 md:pt-32">
                <Link href="/knowledge-hub" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8 font-bold group">
                    <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                    Torna al Knowledge Hub
                </Link>

                <div className="max-w-4xl mx-auto">
                    {/* Header / Manifesto Title */}
                    <div className="mb-16 md:mb-24 animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-both">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="bg-white p-2 rounded-xl shadow-md border border-border/50">
                                <Image
                                    src="/partners/logo_Ministero del Turismo.png"
                                    alt="Ministero del Turismo Logo"
                                    width={120}
                                    height={50}
                                    className="object-contain"
                                />
                            </div>
                            <div className="h-px bg-border flex-1 mx-4" />
                            <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Use Case</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[1.05] text-pretty">
                            Con il <span className="text-primary">Ministero del Turismo</span>, portare la gestione dei marina dal problema al dato operativo
                        </h1>
                    </div>

                    {/* Main Content Flow */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

                        {/* Left Column: Narrative Text */}
                        <div className="md:col-span-8 space-y-12 text-lg md:text-xl leading-relaxed text-muted-foreground">
                            <section className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-both">
                                <p className="first-letter:text-7xl first-letter:font-bold first-letter:text-foreground first-letter:mr-3 first-letter:float-left">
                                    In un porto turistico, la gestione quotidiana è fatta di arrivi e partenze, occupazione dei posti barca, accessi, mezzi di servizio e presenze da monitorare in tempo reale.
                                </p>
                                <p className="mt-6">
                                    Per i gestori di marina e per il Ministero del Turismo, avere una visione affidabile di ciò che accade in porto è un prerequisito per migliorare efficienza operativa, sicurezza e qualità dell’accoglienza.
                                </p>
                                <p className="mt-6">
                                    In contesti complessi come i porti turistici italiani, anche piccole inefficienze nella gestione dell’occupazione e delle presenze si traducono in perdite di tempo, utilizzo inefficiente delle risorse e difficoltà nel garantire controllo e tracciabilità.
                                </p>
                            </section>

                            <section className="border-l-4 border-primary/20 pl-8 py-2 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
                                <h3 className="text-2xl font-bold text-foreground mb-4">La Sfida Condivisa</h3>
                                <p>
                                    Non bastava censire i posti barca. La vera sfida era monitorare <strong>l&#39;occupazione effettiva in tempo reale</strong> e tracciare le movimentazioni di imbarcazioni e mezzi di servizio, ottenendo dati precisi per supportare decisioni strategiche e operative, sia a livello locale che nazionale.
                                </p>
                            </section>

                            <section className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400 fill-mode-both">
                                <h3 className="text-2xl font-bold text-foreground mb-6">Risoluzione Operativa</h3>
                                <p>
                                    Nell’ambito della collaborazione con il Ministero del Turismo, Ulisses ha avviato un progetto di digitalizzazione basato sulla <strong>localizzazione operativa</strong>.
                                    Il progetto ha previsto l&#39;installazione di una rete di sensori per il monitoraggio dell&#39;occupazione dei posti barca e il tracciamento dei mezzi di servizio.
                                </p>
                                <p className="mt-6">
                                    La soluzione ha permesso di raccogliere e analizzare dati su: occupazione real-time, storico presenze, flussi di accesso e utilizzo delle risorse, il tutto visualizzato su una dashboard unificata per una gestione data-driven.
                                </p>
                            </section>
                        </div>

                        {/* Right Column: Key Stats / Highlights */}
                        <div className="md:col-span-4 space-y-8 sticky top-32 self-start animate-in fade-in slide-in-from-right-8 duration-1000 delay-500 fill-mode-both">
                            <div className="bg-muted/30 rounded-3xl p-6 border border-border/50 backdrop-blur-sm">
                                <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                                    <Anchor className="w-5 h-5 text-primary" />
                                    Ambiti di Intervento
                                </h4>
                                <ul className="space-y-4">
                                    <li className="flex justify-between items-center border-b border-border/40 pb-2 last:border-0 last:pb-0">
                                        <span className="text-sm">Occupazione</span>
                                        <span className="font-bold text-foreground text-right text-xs">Real-time</span>
                                    </li>
                                    <li className="flex justify-between items-center border-b border-border/40 pb-2 last:border-0 last:pb-0">
                                        <span className="text-sm">Tracciamento</span>
                                        <span className="font-bold text-foreground text-right text-xs">Asset & Mezzi</span>
                                    </li>
                                    <li className="flex justify-between items-center border-b border-border/40 pb-2 last:border-0 last:pb-0">
                                        <span className="text-sm">Analisi</span>
                                        <span className="font-bold text-foreground text-right text-xs">Dati Storici</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-primary text-primary-foreground rounded-3xl p-6 shadow-lg">
                                <h4 className="font-bold mb-3 flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5" />
                                    Risultati Chiave
                                </h4>
                                <ul className="space-y-2 text-sm/relaxed opacity-90">
                                    <li>• Visibilità completa occupazione</li>
                                    <li>• Ottimizzazione spazi e risorse</li>
                                    <li>• Supporto decisionale data-driven</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Footer Section: Needs to be distinct but connected */}
                    <div className="mt-24 pt-12 border-t border-border animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-both">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-3xl font-bold tracking-tight mb-4">Production Ready</h3>
                                <p className="text-xl text-muted-foreground leading-relaxed">
                                    La soluzione consente ai gestori di marina di conoscere in tempo reale lo stato occupazionale del porto, senza interventi invasivi sull’infrastruttura e con dati pronti per l’integrazione nei sistemi esistenti.
                                </p>
                            </div>
                            <div className="bg-muted rounded-3xl p-8 flex flex-col items-start gap-6">
                                <h4 className="font-bold text-xl">Sei un gestore di porto turistico?</h4>
                                <p className="text-muted-foreground">Scopri come digitalizzare il tuo marina con Ulisses.</p>
                                <Button asChild size="lg" className="rounded-full font-bold px-8">
                                    <Link href="/contatti">
                                        Parla con un esperto
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
