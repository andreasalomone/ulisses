import React from "react";
import { VerticalHero } from "@/components/shared/vertical-hero";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { ContactFormSection } from "@/components/sections/home/contact-form-section";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function ContattiPage() {

    return (
        <div className="flex flex-col">
            <VerticalHero
                title="Siamo pronti ad ascoltare la tua sfida"
                subtitle="Dalla demo tecnica alla messa a terra del progetto: il nostro team è a tua disposizione."
            />

            <SectionWrapper className="pt-0 -mt-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <ContactFormSection />
                    </div>

                    <div className="space-y-12 lg:pt-20">
                        <div>
                            <h2 className="text-2xl font-bold mb-8">Contatti Diretti</h2>
                            <div className="space-y-6">
                                <div className="flex gap-4 items-center">
                                    <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center text-primary">
                                        <Mail className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground font-bold uppercase tracking-wider">Email</p>
                                        <p className="text-lg font-medium">{CONTACT_INFO.email}</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center text-primary">
                                        <Phone className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground font-bold uppercase tracking-wider">Telefono</p>
                                        <p className="text-lg font-medium">{CONTACT_INFO.phone}</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center text-primary">
                                        <MapPin className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground font-bold uppercase tracking-wider">Sede</p>
                                        <p className="text-lg font-medium">{CONTACT_INFO.address}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-6">Social</h2>
                            <a href="https://linkedin.com/company/ulisses" className="flex gap-4 items-center group text-muted-foreground hover:text-primary transition-colors">
                                <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                    <Linkedin className="h-5 w-5" />
                                </div>
                                <span className="text-lg font-medium">LinkedIn</span>
                            </a>
                        </div>

                        <div className="p-8 bg-muted/30 rounded-3xl border">
                            <h3 className="font-bold mb-4">Supporto Tecnico</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Se sei già un cliente e hai bisogno di supporto per la tua installazione, scrivi a <span className="text-foreground font-medium">support@ulisses.com</span>
                            </p>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
}
