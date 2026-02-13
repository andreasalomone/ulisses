import React from "react";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { NAV_LINKS, CONTACT_INFO, SOCIAL_LINKS } from "@/lib/constants";
import { Separator } from "@/components/ui/separator";
import { Instagram, Linkedin, Facebook } from "lucide-react";
import { BrandText } from "@/components/ui/brand";
import { getTranslations } from "next-intl/server";

export async function Footer() {
    const tLegal = await getTranslations('legal');
    const tNav = await getTranslations('navigation');
    const tA11y = await getTranslations('accessibility');

    return (
        <footer className="bg-muted/30 pt-16 pb-8 border-t">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Logo and Tagline */}
                    <div className="space-y-6">
                        <Link href="/" className="relative h-8 w-32 block">
                            <Image
                                src="/logos/ulisses_trademark-oriz.svg"
                                alt={tA11y('ulissesLogo')}
                                fill
                                className="object-contain"
                            />
                        </Link>
                        <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                            <BrandText text={tLegal('description')} />
                        </p>
                        <div className="flex gap-4">
                            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-wider mb-6">{tLegal('menuHeader')}</h4>
                        <ul className="space-y-4">
                            {NAV_LINKS.map((link) => (
                                <React.Fragment key={link.href}>
                                    <li key={link.href}>
                                        <Link
                                            href={link.href as "/"}
                                            className="text-sm text-muted-foreground hover:text-primary transition-colors font-semibold"
                                        >
                                            {tNav(link.label)}
                                        </Link>
                                    </li>
                                    {link.subLinks?.map((sub) => (
                                        <li key={sub.href} className="ps-3">
                                            <Link
                                                href={sub.href as "/"}
                                                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                            >
                                                {tNav(sub.label)}
                                            </Link>
                                        </li>
                                    ))}
                                </React.Fragment>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-wider mb-6">{tNav('contatti')}</h4>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li className="whitespace-pre-line">{CONTACT_INFO.address}</li>
                            <li>
                                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-primary transition-colors">
                                    {CONTACT_INFO.email}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal / Social Placeholder */}
                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-wider mb-6">{tLegal('legalHeader')}</h4>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li>
                                <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                                    {tLegal('privacy')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/termini-e-condizioni" className="hover:text-primary transition-colors">
                                    {tLegal('terms')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/cookie-policy" className="hover:text-primary transition-colors">
                                    {tLegal('cookie')}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <Separator className="my-12 opacity-50" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
                    <p> {tLegal('copyright')} {tLegal('rightsReserved')}</p>
                    <div className="flex gap-6">
                        <p>{tLegal('piva')}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
