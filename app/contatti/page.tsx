import React from "react";
import { VerticalHero } from "@/components/shared/vertical-hero";
import { ContactFormSection } from "@/components/sections/home/contact-form-section";
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook, MessageSquare } from "lucide-react";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/lib/constants";

export default function ContattiPage() {

    return (
        <div className="flex flex-col">
            <VerticalHero
                title="Siamo pronti ad ascoltare la tua sfida"
                subtitle="Dalla demo tecnica alla messa a terra del progetto: il nostro team è a tua disposizione."
                sideContent={
                    <div className="w-fit lg:ml-auto p-8 bg-background/60 backdrop-blur-md rounded-[2.5rem] border shadow-2xl space-y-8 animate-in fade-in slide-in-from-right-12 duration-1000 delay-300">
                        <div className="space-y-6">
                            <div className="flex gap-4 items-center group">
                                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <div className="">
                                    <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mb-0.5">Scrivici</p>
                                    <p className="text-base font-bold truncate">{CONTACT_INFO.email}</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-center group">
                                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                                    <Phone className="h-5 w-5" />
                                </div>
                                <div className="">
                                    <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mb-0.5">Chiamaci</p>
                                    <p className="text-base font-bold">{CONTACT_INFO.phone}</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-center group">
                                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                                    <MapPin className="h-5 w-5" />
                                </div>
                                <div className="">
                                    <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mb-0.5">Vienici a trovare</p>
                                    <p className="text-base font-bold leading-tight whitespace-pre-line">{CONTACT_INFO.address}</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-primary/10">
                            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mb-4">Social & Chat</p>
                            <div className="grid grid-cols-2 gap-x-3 gap-y-4">
                                <a
                                    href={SOCIAL_LINKS.whatsapp}
                                    className="flex items-center gap-3 group"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="h-10 w-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-all duration-300">
                                        <MessageSquare className="h-5 w-5" />
                                    </div>
                                    <p className="text-xs font-bold group-hover:text-primary transition-colors">WhatsApp</p>
                                </a>
                                <a
                                    href={SOCIAL_LINKS.linkedin}
                                    className="flex items-center gap-3 group"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="h-10 w-10 rounded-xl bg-[#0A66C2]/10 flex items-center justify-center text-[#0A66C2] group-hover:bg-[#0A66C2] group-hover:text-white transition-all duration-300">
                                        <Linkedin className="h-5 w-5" />
                                    </div>
                                    <p className="text-xs font-bold group-hover:text-primary transition-colors">LinkedIn</p>
                                </a>
                                <a
                                    href={SOCIAL_LINKS.instagram}
                                    className="flex items-center gap-3 group"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="h-10 w-10 rounded-xl bg-[#E4405F]/10 flex items-center justify-center text-[#E4405F] group-hover:bg-[#E4405F] group-hover:text-white transition-all duration-300">
                                        <Instagram className="h-5 w-5" />
                                    </div>
                                    <p className="text-xs font-bold group-hover:text-primary transition-colors">Instagram</p>
                                </a>
                                <a
                                    href={SOCIAL_LINKS.facebook}
                                    className="flex items-center gap-3 group"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="h-10 w-10 rounded-xl bg-[#1877F2]/10 flex items-center justify-center text-[#1877F2] group-hover:bg-[#1877F2] group-hover:text-white transition-all duration-300">
                                        <Facebook className="h-5 w-5" />
                                    </div>
                                    <p className="text-xs font-bold group-hover:text-primary transition-colors">Facebook</p>
                                </a>
                            </div>
                        </div>
                    </div>
                }
            />

            <div className="-mt-20 relative z-10">
                <ContactFormSection />
            </div>
        </div>
    );
}
