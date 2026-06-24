export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-zinc-800 z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <div className="font-bold text-white text-xl">
                    Štěpán Stehlík
                </div>

                <div className="flex gap-6 text-gray-300">
                    <a href="#sluzby" className="hover:text-white">
                        Služby
                    </a>

                    <a href="#o-mne" className="hover:text-white">
                        O mně
                    </a>

                    <a href="#technologie" className="hover:text-white">
                        Technologie
                    </a>

                    <a href="#kontakt" className="hover:text-white">
                        Kontakt
                    </a>
                </div>
            </div>
        </nav>
    );
}