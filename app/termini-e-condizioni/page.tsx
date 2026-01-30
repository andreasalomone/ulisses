import React from "react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { DICTIONARY } from "@/lib/dictionary";
import { CONTACT_INFO } from "@/lib/constants";

export default function TermsPage() {
    return (
        <SectionWrapper className="py-24">
            <div className="max-w-4xl mx-auto">
                <div className="p-8 md:p-12 bg-background/60 backdrop-blur-xl rounded-[2.5rem] border shadow-2xl space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
                            {DICTIONARY.legal.terms}
                        </h1>
                        <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">
                            Ultimo aggiornamento: 09/01/2025
                        </p>
                    </div>

                    <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">
                        <section>
                            <p className="text-lg text-foreground font-medium">
                                Benvenuto sul sito web di Ulisses. L&apos;accesso e l&apos;uso di questo sito sono soggetti ai seguenti Termini e Condizioni.
                            </p>
                            <p>
                                Utilizzando questo sito web, l&apos;utente accetta di essere vincolato dai presenti termini. Se non si accettano integralmente questi termini, si è pregati di non utilizzare il sito.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">Proprietà Intellettuale</h2>
                            <p>
                                Tutti i contenuti, i marchi, i loghi e i dati presenti su questo sito sono di proprietà di Ulisses o sono utilizzati su licenza. È vietata qualsiasi riproduzione, distribuzione o utilizzo non autorizzato di tali materiali.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">Utilizzo del Sito</h2>
                            <p>
                                L&apos;utente si impegna a utilizzare il sito esclusivamente per scopi leciti e in modo da non violare i diritti di terzi o limitare l&apos;uso del sito da parte di altri utenti.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">Limitazione di Responsabilità</h2>
                            <p>
                                Ulisses non garantisce che il sito sia privo di errori o interruzioni. Le informazioni contenute nel sito sono fornite &quot;così come sono&quot; e possono essere soggette a modifiche senza preavviso. Ulisses non sarà responsabile per eventuali danni derivanti dall&apos;uso o dall&apos;impossibilità di usare il sito.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">Privacy e Cookie</h2>
                            <p>
                                L&apos;uso del sito è disciplinato anche dalla nostra <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a> e dalla nostra <a href="/cookie-policy" className="text-primary hover:underline">Cookie Policy</a>, che si intendono qui integralmente richiamate.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">Modifiche ai Termini</h2>
                            <p>
                                Ulisses si riserva il diritto di modificare i presenti Termini e Condizioni in qualsiasi momento. Le modifiche saranno efficaci dal momento della loro pubblicazione sul sito.
                            </p>
                        </section>

                        <div className="pt-8 border-t border-primary/10">
                            <h3 className="text-xl font-bold text-foreground mb-4">Contatti</h3>
                            <p>
                                Per qualsiasi domanda relativa ai presenti Termini e Condizioni, contattateci:
                            </p>
                            <div className="mt-6 p-6 bg-muted/50 rounded-2xl border text-sm">
                                <p className="font-bold text-foreground">{CONTACT_INFO.address}</p>
                                <p className="mt-1">{DICTIONARY.legal.piva}</p>
                                <p className="mt-1">Email: <a href="mailto:info@ulisses.it" className="text-primary hover:underline">info@ulisses.it</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
