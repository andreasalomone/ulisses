"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { DICTIONARY } from "@/lib/dictionary";
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
    const pathname = usePathname();

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

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                scrolled
                    ? "bg-background/80 backdrop-blur-md py-3 border-border"
                    : "bg-transparent py-5 border-transparent"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="relative h-8 w-32 md:w-40 transition-transform hover:scale-105">
                    <Image
                        src="/logos/ulisses_trademark-oriz.svg"
                        alt="Ulisses Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-8">
                    {NAV_LINKS.map((link) => {
                        const isActive = isLinkActive(link);

                        if (link.subLinks) {
                            return (
                                <DropdownMenu key={link.label} modal={false}>
                                    <DropdownMenuTrigger className={cn(
                                        "flex items-center gap-1 text-lg font-semibold transition-colors hover:text-primary outline-none",
                                        isActive ? "text-primary" : "text-foreground/80"
                                    )}>
                                        {link.label}
                                        <ChevronDown className="size-4" />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="start" className="w-72 p-2">
                                        <DropdownMenuItem asChild className="py-3 px-4">
                                            <Link href={link.href} className="w-full cursor-pointer font-bold text-lg">
                                                Tutte le {link.label}
                                            </Link>
                                        </DropdownMenuItem>
                                        <div className="h-px bg-border my-2 mx-1" />
                                        {link.subLinks.map((sub) => (
                                            <DropdownMenuItem key={sub.href} asChild className="py-3 px-4">
                                                <Link
                                                    href={sub.href}
                                                    className={cn(
                                                        "w-full cursor-pointer text-lg",
                                                        pathname === sub.href ? "text-primary font-semibold" : ""
                                                    )}
                                                >
                                                    {sub.label}
                                                </Link>
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            );
                        }

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-lg font-semibold transition-colors hover:text-primary",
                                    pathname === link.href ? "text-primary" : "text-foreground/80"
                                )}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                    <Button asChild size="lg" className="text-lg font-bold">
                        <Link href="/contatti">{DICTIONARY.common.demoCta}</Link>
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-foreground p-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    "lg:hidden absolute top-full left-0 right-0 bg-background border-b shadow-xl transition-all duration-300 grid",
                    isOpen ? "grid-rows-[1fr] border-border" : "grid-rows-[0fr] border-transparent"
                )}
            >
                <div className="overflow-hidden">
                    <div className="flex flex-col p-6 gap-2">
                        {NAV_LINKS.map((link) => {
                            const isExpanded = !!openSubMenus[link.label];
                            const isActive = isLinkActive(link);

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
                                                    isActive ? "text-primary" : "text-foreground"
                                                )}
                                            >
                                                {link.label}
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
                                                <div className="overflow-hidden flex flex-col pl-4">
                                                    <Link
                                                        href={link.href}
                                                        className={cn(
                                                            "text-lg font-semibold py-4 border-b border-muted/50 last:border-0",
                                                            pathname === link.href ? "text-primary" : "text-foreground/70"
                                                        )}
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        Panoramica {link.label}
                                                    </Link>
                                                    {link.subLinks.map((sub) => (
                                                        <Link
                                                            key={sub.href}
                                                            href={sub.href}
                                                            className={cn(
                                                                "text-lg font-semibold py-4 border-b border-muted/50 last:border-0",
                                                                pathname === sub.href ? "text-primary" : "text-foreground/70"
                                                            )}
                                                            onClick={() => setIsOpen(false)}
                                                        >
                                                            {sub.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className={cn(
                                                "text-lg font-bold py-3 border-b border-muted",
                                                pathname === link.href ? "text-primary" : "text-foreground"
                                            )}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.label}
                                        </Link>
                                    )}
                                </div>
                            );
                        })}
                        <Button asChild className="mt-4 font-bold w-full h-12 text-lg">
                            <Link href="/contatti" onClick={() => setIsOpen(false)}>
                                {DICTIONARY.common.demoCta}
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
