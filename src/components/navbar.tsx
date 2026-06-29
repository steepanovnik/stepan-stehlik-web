"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-zinc-800 z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <a
                    href="#hero"
                    onClick={closeMenu}
                    className="font-bold text-2xl tracking-tight hover:text-amber-400 transition"
                >
                    Štěpán Stehlík
                </a>

                {/* Desktop menu */}
                <div className="hidden md:flex gap-8 text-gray-300 items-center">

                    <a href="#sluzby" className="hover:text-white transition">
                        Služby
                    </a>

                    <a href="#o-mne" className="hover:text-white transition">
                        O mně
                    </a>

                    <a href="#technologie" className="hover:text-white transition">
                        Technologie
                    </a>

                    <a href="#kontakt" className="hover:text-white transition">
                        Kontakt
                    </a>

                </div>

                {/* Mobile button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white"
                    aria-label="Menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-black border-t border-zinc-800">

                    <div className="flex flex-col px-6 py-6 text-lg">

                        <a
                            href="#sluzby"
                            onClick={closeMenu}
                            className="py-3 hover:text-amber-400 transition"
                        >
                            Služby
                        </a>

                        <a
                            href="#o-mne"
                            onClick={closeMenu}
                            className="py-3 hover:text-amber-400 transition"
                        >
                            O mně
                        </a>

                        <a
                            href="#technologie"
                            onClick={closeMenu}
                            className="py-3 hover:text-amber-400 transition"
                        >
                            Technologie
                        </a>

                        <a
                            href="#kontakt"
                            onClick={closeMenu}
                            className="py-3 hover:text-amber-400 transition"
                        >
                            Kontakt
                        </a>

                    </div>
                </div>
            )}
        </nav>
    );
}