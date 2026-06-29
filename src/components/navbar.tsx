"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
    { label: "Služby", href: "#sluzby" },
    { label: "O mně", href: "#o-mne" },
    { label: "Technologie", href: "#technologie" },
    { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    return (
        <>
            <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-zinc-800 z-50">

                <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

                    <a
                        href="#hero"
                        className="font-bold text-2xl tracking-tight hover:text-amber-400 transition"
                        onClick={closeMenu}
                    >
                        Štěpán Stehlík
                    </a>

                    <div className="hidden md:flex gap-8 text-gray-300">

                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="hover:text-white transition"
                            >
                                {link.label}
                            </a>
                        ))}

                    </div>

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
                    fixed inset-0 bg-black/60 backdrop-blur-sm z-40
                    transition-opacity duration-300
                    ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
                `}
            />

            {/* Drawer */}
            <aside
                className={`
                    fixed top-0 right-0 h-screen w-72
                    bg-zinc-950 border-l border-zinc-800
                    z-50
                    transition-transform duration-300 ease-in-out
                    ${isOpen ? "translate-x-0" : "translate-x-full"}
                `}
            >

                <div className="flex justify-end p-6">

                    <button
                        onClick={closeMenu}
                        aria-label="Zavřít menu"
                    >
                        <X size={30} />
                    </button>

                </div>

                <div className="flex flex-col px-8 pt-10 gap-8 text-2xl">

                    {links.map((link) => (

                        <a
                            key={link.href}
                            href={link.href}
                            onClick={closeMenu}
                            className="hover:text-amber-400 transition"
                        >
                            {link.label}
                        </a>

                    ))}

                </div>

            </aside>
        </>
    );
}