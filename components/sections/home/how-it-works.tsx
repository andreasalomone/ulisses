import React from "react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Database, Network, LayoutDashboard, Share2 } from "lucide-react";
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
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
                    <BrandText text={d.title} />
                </h2>
                <p className="text-xl opacity-80 leading-relaxed">
                    <BrandText text={d.subtitle} />
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                {steps.map((step, index) => (
                    <div key={index} className="group p-8 rounded-3xl bg-secondary-foreground/5 border border-secondary-foreground/10 hover:border-primary/50 transition-all duration-300">
                        <div className="h-14 w-14 rounded-2xl bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <step.icon className="h-7 w-7 text-primary-foreground" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                            <span className="text-primary font-black opacity-30 text-3xl">0{index + 1}</span>
                            <BrandText text={step.title} />
                        </h3>
                        <p className="text-secondary-foreground/70 leading-relaxed">
                            <BrandText text={step.text} />
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-16 lg:mt-24 p-8 md:p-12 rounded-3xl bg-primary text-primary-foreground relative overflow-hidden group">
                <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-8">
                    <div className="max-w-xl">
                        <h4 className="text-2xl font-extrabold mb-4">
                            <BrandText text={d.deployment.title} brandClassName="text-white" />
                        </h4>
                        <p className="text-lg opacity-90 leading-relaxed">
                            {d.deployment.text.split(d.deployment.tokens).map((part, i, arr) => (
                                <React.Fragment key={i}>
                                    <BrandText text={part} brandClassName="text-white" />
                                    {i < arr.length - 1 && <span className="font-bold">{d.deployment.tokens}</span>}
                                </React.Fragment>
                            ))}
                        </p>
                    </div>
                    <div className="px-8 py-4 bg-primary-foreground/10 rounded-full font-bold text-sm tracking-widest uppercase text-center md:text-left shrink-0">
                        {d.deployment.label}
                    </div>
                </div>
                <div className="absolute right-0 top-0 w-64 h-64 bg-white/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
            </div>
        </SectionWrapper>
    );
}
