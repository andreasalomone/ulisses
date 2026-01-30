import React from "react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { DICTIONARY } from "@/lib/dictionary";
import { CONTACT_INFO } from "@/lib/constants";

export default function PrivacyPolicyPage() {
    return (
        <SectionWrapper className="py-24">
            <div className="max-w-4xl mx-auto">
                <div className="p-8 md:p-12 bg-background/60 backdrop-blur-xl rounded-[2.5rem] border shadow-2xl space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
                            {DICTIONARY.legal.privacy}
                        </h1>
                        <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">
                            Ultimo aggiornamento: 09/01/2025
                        </p>
                    </div>

                    <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">
                        <section>
                            <p className="text-lg text-foreground font-medium">
                                Gentile Utente, grazie per aver scelto di utilizzare il nostro sito web. In qualità di Ulisses, ci impegniamo a proteggere la tua privacy e a garantire la sicurezza delle informazioni personali che ci fornisci.
                            </p>
                            <p>
                                La presente informativa sulla privacy illustra come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali durante la tua visita al nostro sito web.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">Raccolta delle informazioni personali</h2>
                            <p>
                                Durante la tua visita al nostro sito web, potremmo raccogliere alcune informazioni personali, come nome, indirizzo email, numero di telefono e altre informazioni di contatto, solo se fornite volontariamente da te attraverso i moduli di contatto o la registrazione al sito.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">Utilizzo delle informazioni personali</h2>
                            <p>
                                Le informazioni personali che raccogliamo vengono utilizzate per fornire i servizi richiesti, rispondere alle tue domande o fornire assistenza, personalizzare la tua esperienza sul nostro sito web, inviare comunicazioni di marketing (se hai dato il consenso) e migliorare i nostri servizi.
                            </p>
                            <p>
                                Non venderemo, affitteremo o forniremo le tue informazioni personali a terzi senza il tuo consenso, tranne nei casi previsti dalla legge o in ottemperanza a obblighi legali.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">Protezione dei dati personali</h2>
                            <p>
                                Adottiamo misure di sicurezza adeguate per proteggere i tuoi dati personali da accessi non autorizzati, modifiche, divulgazioni o distruzioni. Tuttavia, non possiamo garantire la sicurezza completa delle informazioni trasmesse attraverso Internet. Sebbene facciamo del nostro meglio per proteggere i tuoi dati personali, l’invio di informazioni personali avviene a tuo rischio.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">Cookie e tecnologie simili</h2>
                            <p>
                                Utilizziamo i cookie e altre tecnologie simili per raccogliere informazioni sulle tue preferenze e migliorare la tua esperienza sul nostro sito web. Puoi gestire le impostazioni dei cookie attraverso le impostazioni del tuo browser. Tieni presente che la disabilitazione dei cookie potrebbe limitare alcune funzionalità del nostro sito web.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">Collegamenti a siti di terze parti</h2>
                            <p>
                                Il nostro sito web potrebbe contenere collegamenti a siti di terze parti. Non siamo responsabili delle pratiche sulla privacy o del contenuto di tali siti web. Ti consigliamo di leggere le informative sulla privacy dei siti web di terze parti che visiti.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">Modifiche all’informativa sulla privacy</h2>
                            <p>
                                Ci riserviamo il diritto di apportare modifiche a questa informativa sulla privacy. Le modifiche verranno pubblicate su questa pagina e la data di entrata in vigore verrà aggiornata di conseguenza. Ti consigliamo di controllare periodicamente questa pagina per verificare eventuali aggiornamenti.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">Consenso</h2>
                            <p>
                                Utilizzando il nostro sito web, acconsenti alla raccolta e all’utilizzo delle tue informazioni personali come descritto nella presente informativa sulla privacy.
                            </p>
                        </section>

                        <div className="pt-8 border-t border-primary/10">
                            <h3 className="text-xl font-bold text-foreground mb-4">Contatti</h3>
                            <p>
                                Se hai domande o dubbi riguardo alla nostra politica sulla privacy o al trattamento delle tue informazioni personali, ti preghiamo di contattarci attraverso l’indirizzo mail: <a href="mailto:privacy@ulisses.it" className="text-primary hover:underline">privacy@ulisses.it</a>
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
