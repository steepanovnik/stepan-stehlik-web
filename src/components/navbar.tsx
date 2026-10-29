"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import ThemeMenu from "@/ui/themeMenu";
import ThemeSelector from "@/ui/themeSelector";

import LanguageMenu from "@/ui/languageMenu";
import LanguageSelector from "@/ui/languageSelector";

import { useLanguage } from "@/providers/languageProvider";

export default function Navbar() {
    const { t } = useLanguage();

    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    const links = [
        {
            label: t.navbar.services,
            href: "#sluzby",
        },
        {
            label: t.navbar.about,
            href: "#o-mne",
        },
        {
            label: t.navbar.technologies,
            href: "#technologie",
        },
        {
            label: t.navbar.contact,
            href: "#kontakt",
        },
    ];

    return (
        <>
            <nav className="fixed top-0 left-0 z-50 w-full border-b border-zinc-800 bg-black/80 backdrop-blur-md">

                <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

                    <a
                        href="#hero"
                        onClick={closeMenu}
                        className="text-2xl font-bold tracking-tight transition hover-accent"
                    >
                        Štěpán Stehlík
                    </a>

                    {/* Desktop */}
                    <div className="hidden items-center gap-8 md:flex">

                        <div className="flex gap-8 text-zinc-300">

                            {links.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="transition hover:text-white"
                                >
                                    {link.label}
                                </a>
                            ))}

                        </div>

                        <div className="flex items-center gap-3">

                            <LanguageMenu />

                            <ThemeMenu />

                        </div>

                    </div>

                    {/* Mobile */}
                    <button
                        onClick={() => setIsOpen(true)}
                        className="md:hidden"
                        aria-label="Otevřít menu"
                    >
                        <Menu size={28} />
                    </button>

                </div>

            </nav>

            {/* Overlay */}
            <div
                onClick={closeMenu}
                className={`
                    fixed inset-0 z-40 bg-black/60 backdrop-blur-sm
                    transition-opacity duration-300
                    ${isOpen ? "visible opacity-100" : "invisible opacity-0"}
                `}
            />

            {/* Drawer */}
            <aside
                className={`
                    fixed right-0 top-0 z-50 h-screen w-72
                    overflow-y-auto

                    border-l border-zinc-800
                    bg-zinc-950

                    transition-transform duration-300 ease-in-out

                    ${isOpen ? "translate-x-0" : "translate-x-full"}
                `}
            >

                {/* Close */}
                <div className="flex justify-end px-6 pt-6 pb-2">

                    <button
                        onClick={closeMenu}
                        aria-label="Zavřít menu"
                    >
                        <X size={30} />
                    </button>

                </div>

                {/* Navigation */}
                <div className="flex flex-col gap-8 px-8 py-8 text-2xl">

                    {links.map((link) => (

                        <a
                            key={link.href}
                            href={link.href}
                            onClick={closeMenu}
                            className="transition hover-accent"
                        >
                            {link.label}
                        </a>

                    ))}

                </div>

                {/* Settings */}
                <div className="mx-6 mt-2 border-t border-zinc-800 pt-6 pb-8">

                    {/* Language */}
                    <div className="mb-8">

                        <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                            {t.navbar.language}
                        </h3>

                        <LanguageSelector
                            onSelect={closeMenu}
                        />

                    </div>

                    {/* Theme */}
                    <div>

                        <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                            {t.navbar.theme}
                        </h3>

                        <ThemeSelector
                            onSelect={closeMenu}
                        />

                    </div>

                </div>

            </aside>

        </>
    );
}