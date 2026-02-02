import React from "react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Database, Network, LayoutDashboard, Share2, Cloud, Server, Cpu } from "lucide-react";
import { DICTIONARY } from "@/lib/dictionary";
import { BrandText } from "@/components/ui/brand";

export function HowItWorks() {
    const d = DICTIONARY.home.howItWorks;
    const icons = [Database, Network, LayoutDashboard, Share2];

    const steps = d.steps.map((step, i) => ({
        ...step,
        icon: icons[i]
    }));

    return (
        <SectionWrapper id="come-funziona" variant="secondary" className="relative overflow-hidden">
            <div className="max-w-3xl mb-16 relative z-10">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
                    <BrandText text={d.title} />
                </h2>
                <p className="text-xl opacity-80 leading-relaxed">
                    <BrandText text={d.subtitle} />
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="group p-8 rounded-3xl bg-white/10 border border-white/20 hover:border-white/40 hover:bg-white/20 backdrop-blur-md transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="h-14 w-14 rounded-2xl bg-white text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-xl transition-all duration-500 relative z-10">
                            <step.icon className="h-7 w-7" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 relative z-10">
                            <span className="text-white font-black opacity-20 text-3xl">0{index + 1}</span>
                            <BrandText text={step.title} />
                        </h3>
                        <p className="text-secondary-foreground/90 leading-relaxed relative z-10">
                            <BrandText text={step.text} />
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-24 space-y-12 relative z-10">
                <div className="text-center max-w-2xl mx-auto">
                    <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
                        Deployment Flessibile
                    </h3>
                    <p className="text-xl opacity-80">
                        Scegli la modalità più adatta alle tue esigenze.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Cloud",
                            icon: Cloud,
                            text: "Sfrutta la scalabilità della nostra infrastruttura cloud gestita, con update automatici e disponibilità garantita.",
                            delay: "delay-0"
                        },
                        {
                            title: "On-Premise",
                            icon: Server,
                            text: "Mantieni il controllo totale sui tuoi dati installando Ulisses direttamente nei tuoi data center o infrastruttura privata.",
                            delay: "delay-100"
                        },
                        {
                            title: "Edge",
                            icon: Cpu,
                            text: "Massimizza la velocità e riduci la latenza elaborando i dati direttamente sul campo, anche in assenza di connettività.",
                            delay: "delay-200"
                        },
                    ].map((item, i) => (
                        <div key={i} className="group p-6 transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center relative">
                            <div className="relative mb-8">
                                <div className="absolute inset-0 bg-primary blur-3xl opacity-20 group-hover:opacity-40 transition-opacity rounded-full scale-110" />
                                <div className="relative z-10 group-hover:scale-110 transition-transform duration-500">
                                    <item.icon className="h-14 w-14 text-white" />
                                </div>
                            </div>

                            <h4 className="text-2xl font-bold mb-3 relative z-10">
                                {item.title}
                            </h4>
                            <p className="text-secondary-foreground/70 leading-relaxed relative z-10 max-w-xs">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
