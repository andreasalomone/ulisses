"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import { useParams } from "next/navigation";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [openSubMenus, setOpenSubMenus] = useState<Record<string, boolean>>({});
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const closeTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
    const pathname = usePathname();
    const params = useParams();
    const tNav = useTranslations('navigation');
    const tCommon = useTranslations('common');
    const tA11y = useTranslations('accessibility');
    const locale = useLocale();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleSubMenu = (label: string) => {
        setOpenSubMenus(prev => ({
            ...prev,
            [label]: !prev[label]
        }));
    };

    const isLinkActive = (link: (typeof NAV_LINKS)[0]) => {
        if (pathname === link.href) return true;
        if (link.subLinks?.some(sub => pathname === sub.href)) return true;
        return false;
    };

    const handleMouseEnter = (label: string) => {
        if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
        setActiveDropdown(label);
    };

    const handleMouseLeave = () => {
        closeTimeoutRef.current = setTimeout(() => {
            setActiveDropdown(null);
        }, 120);
    };

    return (
        <nav
            className={cn(
                "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b",
                scrolled
                    ? "bg-background/80 backdrop-blur-md py-3 border-border"
                    : "bg-transparent py-5 border-transparent"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="relative h-8 w-32 md:w-40 transition-transform hover:scale-105">
                    <Image
                        src="/logos/ulisses_trademark-oriz.svg"
                        alt={tA11y('ulissesLogo')}
                        fill
                        className="object-contain"
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-8">
                    {NAV_LINKS.map((link) => {
                        const isActive = isLinkActive(link);
                        const isDropdownOpen = activeDropdown === link.label;
                        const label = tNav(link.label);

                        if (link.subLinks) {
                            return (
                                <DropdownMenu
                                    key={link.label}
                                    modal={false}
                                    open={isDropdownOpen}
                                    onOpenChange={(open) => !open && setActiveDropdown(null)}
                                >
                                    <div
                                        onMouseEnter={() => handleMouseEnter(link.label)}
                                        onMouseLeave={handleMouseLeave}
                                        className="relative"
                                    >
                                        <DropdownMenuTrigger className={cn(
                                            "flex items-center gap-1 text-lg font-semibold transition-colors hover:text-primary outline-none py-2",
                                            isActive ? "text-primary underline underline-offset-12 decoration-2 decoration-primary" : "text-foreground/80"
                                        )}>
                                            {label}
                                            <ChevronDown className={cn(
                                                "size-4 transition-transform duration-200",
                                                isDropdownOpen ? "rotate-180" : ""
                                            )} />
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent
                                            align="start"
                                            sideOffset={10}
                                            className="w-[400px] p-2 bg-background/90 backdrop-blur-xl border-border/50 rounded-2xl shadow-2xl"
                                            onMouseEnter={() => handleMouseEnter(link.label)}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <DropdownMenuItem asChild className="py-2.5 px-4 rounded-xl focus:bg-primary/5 focus:text-primary transition-colors cursor-pointer">
                                                <Link href={link.href as "/"} className="w-full font-black text-2xl tracking-tight">
                                                    {tNav('viewAll')} {label}
                                                </Link>
                                            </DropdownMenuItem>
                                            <div className="h-px bg-border/20 my-2 mx-2" />
                                            {link.subLinks.map((sub) => (
                                                <DropdownMenuItem
                                                    key={sub.href}
                                                    asChild
                                                    className="py-2.5 px-4 rounded-xl focus:bg-primary/5 focus:text-primary transition-colors cursor-pointer"
                                                >
                                                    <Link
                                                        href={sub.href as "/"}
                                                        className={cn(
                                                            "w-full text-2xl transition-colors",
                                                            pathname === sub.href ? "text-primary font-bold" : "text-foreground/80 font-semibold"
                                                        )}
                                                    >
                                                        {tNav(sub.label)}
                                                    </Link>
                                                </DropdownMenuItem>
                                            ))}
                                        </DropdownMenuContent>
                                    </div>
                                </DropdownMenu>
                            );
                        }

                        return (
                            <Link
                                key={link.href}
                                href={link.href as "/"}
                                className={cn(
                                    "text-lg font-semibold transition-colors hover:text-primary",
                                    isActive ? "text-primary underline underline-offset-12 decoration-2 decoration-primary" : "text-foreground/80"
                                )}
                            >
                                {label}
                            </Link>
                        );
                    })}

                    <div className="flex items-center gap-4">
                        <DropdownMenu
                            modal={false}
                            open={activeDropdown === 'language'}
                            onOpenChange={(open) => !open && setActiveDropdown(null)}
                        >
                            <div
                                onMouseEnter={() => handleMouseEnter('language')}
                                onMouseLeave={handleMouseLeave}
                                className="relative"
                            >
                                <DropdownMenuTrigger asChild>
                                    <button
                                        className={cn(
                                            "flex items-center gap-2 text-base font-semibold transition-all duration-200 hover:scale-110 px-2 py-1 rounded-lg hover:bg-muted/50 outline-none",
                                            activeDropdown === 'language' ? "text-primary bg-muted/50 scale-110" : "text-foreground/80 scale-100"
                                        )}
                                        aria-label={tA11y(locale === 'it' ? 'switchToEnglish' : 'switchToItalian')}
                                    >
                                        <span className="text-xl">{locale === 'it' ? '🇮🇹' : '🇬🇧'}</span>
                                        <ChevronDown className={cn(
                                            "h-4 w-4 transition-transform duration-200",
                                            activeDropdown === 'language' ? "rotate-180" : ""
                                        )} />
                                    </button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    align="end"
                                    sideOffset={10}
                                    className="w-[180px] p-1.5 bg-background/90 backdrop-blur-xl border-border/50 rounded-2xl shadow-2xl"
                                    onMouseEnter={() => handleMouseEnter('language')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <DropdownMenuItem asChild className="py-2.5 px-3 rounded-xl focus:bg-primary/5 focus:text-primary transition-colors cursor-pointer">
                                        <Link
                                            href={{ pathname: pathname as any, params: params as any }}
                                            locale="it"
                                            className={cn(
                                                "flex items-center gap-3 w-full font-semibold text-lg",
                                                locale === 'it' ? "text-primary" : "text-foreground/80"
                                            )}
                                        >
                                            <span className="text-xl">🇮🇹</span> {tNav('italian')}
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild className="py-2.5 px-3 rounded-xl focus:bg-primary/5 focus:text-primary transition-colors cursor-pointer">
                                        <Link
                                            href={{ pathname: pathname as any, params: params as any }}
                                            locale="en"
                                            className={cn(
                                                "flex items-center gap-3 w-full font-semibold text-lg",
                                                locale === 'en' ? "text-primary" : "text-foreground/80"
                                            )}
                                        >
                                            <span className="text-xl">🇬🇧</span> {tNav('english')}
                                        </Link>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </div>
                        </DropdownMenu>

                        <Button asChild size="lg" className="text-lg font-bold px-8 h-12 rounded-full">
                            <Link href="/contatti">{tCommon('demoCta')}</Link>
                        </Button>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <div className="lg:hidden flex items-center gap-4">
                    <Link
                        href={{ pathname: pathname as any, params: params as any }}
                        locale={locale === 'it' ? 'en' : 'it'}
                        className="flex items-center text-xl transition-all hover:scale-110"
                        aria-label={locale === 'it' ? tA11y('switchToEnglish') : tA11y('switchToItalian')}
                    >
                        {locale === 'it' ? '🇮🇹' : '🇬🇧'}
                    </Link>
                    <button
                        className="text-foreground p-2"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={tA11y('toggleMenu')}
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    "lg:hidden absolute top-full inset-x-0 bg-background border-b shadow-xl transition-all duration-300 grid",
                    isOpen ? "grid-rows-[1fr] border-border" : "grid-rows-[0fr] border-transparent"
                )}
            >
                <div className="overflow-hidden">
                    <div className="flex flex-col p-6 gap-2">
                        {NAV_LINKS.map((link) => {
                            const isExpanded = !!openSubMenus[link.label];
                            const isActive = isLinkActive(link);
                            const label = tNav(link.label);

                            return (
                                <div key={link.label} className="flex flex-col">
                                    {link.subLinks ? (
                                        <>
                                            <button
                                                onClick={() => toggleSubMenu(link.label)}
                                                aria-expanded={isExpanded}
                                                aria-controls={`submenu-${link.label.toLowerCase()}`}
                                                className={cn(
                                                    "flex items-center justify-between text-lg font-bold py-3 border-b border-muted",
                                                    isActive ? "text-primary underline underline-offset-12 decoration-2 decoration-primary" : "text-foreground"
                                                )}
                                            >
                                                {label}
                                                <ChevronDown className={cn(
                                                    "size-5 transition-transform duration-200",
                                                    isExpanded ? "rotate-180" : ""
                                                )} />
                                            </button>
                                            <div
                                                id={`submenu-${link.label.toLowerCase()}`}
                                                className={cn(
                                                    "grid transition-all duration-200",
                                                    isExpanded ? "grid-rows-[1fr] border-b border-muted" : "grid-rows-[0fr]"
                                                )}
                                            >
                                                <div className="overflow-hidden flex flex-col ps-4">
                                                    <Link
                                                        href={link.href as "/"}
                                                        className={cn(
                                                            "text-xl font-bold py-3 border-b border-muted/50 last:border-0",
                                                            pathname === link.href ? "text-primary underline underline-offset-12 decoration-2 decoration-primary" : "text-foreground/70"
                                                        )}
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        {tNav('viewAll')} {label}
                                                    </Link>
                                                    {link.subLinks.map((sub) => (
                                                        <Link
                                                            key={sub.href}
                                                            href={sub.href as "/"}
                                                            className={cn(
                                                                "text-xl font-bold py-3 border-b border-muted/50 last:border-0",
                                                                pathname === sub.href ? "text-primary underline underline-offset-12 decoration-2 decoration-primary" : "text-foreground/70"
                                                            )}
                                                            onClick={() => setIsOpen(false)}
                                                        >
                                                            {tNav(sub.label)}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <Link
                                            href={link.href as "/"}
                                            className={cn(
                                                "text-lg font-bold py-3 border-b border-muted",
                                                pathname === link.href ? "text-primary underline underline-offset-12 decoration-2 decoration-primary" : "text-foreground"
                                            )}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {label}
                                        </Link>
                                    )}
                                </div>
                            );
                        })}
                        <Button asChild className="mt-4 font-bold w-full h-12 text-lg rounded-full">
                            <Link href="/contatti" onClick={() => setIsOpen(false)}>
                                {tCommon('demoCta')}
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
