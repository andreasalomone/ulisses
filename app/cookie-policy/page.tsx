import React from "react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { DICTIONARY } from "@/lib/dictionary";
import { CONTACT_INFO } from "@/lib/constants";

export default function CookiePolicyPage() {
    return (
        <SectionWrapper className="py-24">
            <div className="max-w-4xl mx-auto">
                <div className="p-8 md:p-12 bg-background/60 backdrop-blur-xl rounded-[2.5rem] border shadow-2xl space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
                            {DICTIONARY.legal.cookie}
                        </h1>
                        <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">
                            Ultimo aggiornamento: 09/01/2025
                        </p>
                    </div>

                    <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">
                        <section>
                            <p className="text-lg text-foreground font-medium">
                                La presente Cookie Policy spiega come utilizziamo i cookie e altre tecnologie di tracciamento simili sul nostro sito web www.ulisses.it.
                            </p>
                            <p>
                                Ti preghiamo di leggere attentamente questa informativa per comprendere come vengono utilizzati i cookie sul nostro sito e come puoi gestirli.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">Cosa sono i cookie?</h2>
                            <p>
                                I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo quando visiti un sito web. Sono ampiamente utilizzati per consentire al sito di funzionare correttamente, migliorare l’esperienza di navigazione dell’utente, fornire informazioni ai proprietari del sito e per scopi statistici.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">Tipi di cookie utilizzati</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>
                                    <span className="font-bold text-foreground">Cookie tecnici:</span> Questi cookie sono essenziali per consentire il corretto funzionamento del nostro sito web. Vengono utilizzati, ad esempio, per memorizzare le tue preferenze di lingua o per consentire l’accesso a determinate funzionalità del sito.
                                </li>
                                <li>
                                    <span className="font-bold text-foreground">Cookie di analisi:</span> Utilizziamo i cookie di analisi per raccogliere informazioni sull’utilizzo del nostro sito web, come il numero di visitatori e le pagine più visitate. Queste informazioni ci aiutano a migliorare il sito e a fornire un’esperienza di navigazione ottimale per gli utenti.
                                </li>
                                <li>
                                    <span className="font-bold text-foreground">Cookie di marketing:</span> Questi cookie vengono utilizzati per mostrararti annunci pubblicitari pertinenti in base ai tuoi interessi. Possono essere utilizzati anche per limitare il numero di volte in cui visualizzi un annuncio e per misurare l’efficacia delle campagne pubblicitarie.
                                </li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">Gestione dei cookie</h2>
                            <p>
                                Puoi gestire le tue preferenze sui cookie modificando le impostazioni del tuo browser. La maggior parte dei browser consente di accettare, rifiutare o eliminare i cookie. Tieni presente che la disabilitazione dei cookie potrebbe influire sul corretto funzionamento del sito web e limitare alcune funzionalità.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">Informativa sulla privacy</h2>
                            <p>
                                Per ulteriori informazioni su come gestiamo i dati personali degli utenti e per conoscere i tuoi diritti in materia di privacy, ti invitiamo a leggere la nostra <a href="/privacy-policy" className="text-primary hover:underline">Informativa sulla privacy</a>.
                            </p>
                        </section>

                        <div className="pt-8 border-t border-primary/10">
                            <h3 className="text-xl font-bold text-foreground mb-4">Contatti</h3>
                            <p>
                                Se hai domande, dubbi o richieste riguardanti la presente Cookie Policy, ti preghiamo di contattarci all’indirizzo mail: <a href="mailto:privacy@ulisses.it" className="text-primary hover:underline">privacy@ulisses.it</a>
                            </p>
                            <div className="mt-6 p-6 bg-muted/50 rounded-2xl border text-sm">
                                <p className="font-bold text-foreground">{CONTACT_INFO.address}</p>
                                <p className="mt-1">{DICTIONARY.legal.piva}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
