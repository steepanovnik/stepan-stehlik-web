export default function Hero() {
    return (
        <section className="min-h-[75vh] flex flex-col items-center justify-center pb-16">
            <div className="max-w-4xl text-center">
                <p className="text-sky-400 text-xl mb-4">
                    Senior QA Engineer
                </p>

                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                    Štěpán Stehlík
                </h1>

                <p className="text-xl md:text-2xl text-gray-400 mb-8">
                    Pomáhám firmám zvyšovat kvalitu software pomocí automatizace testů,
                    API testování, CI/CD integrací a moderních firemních webů.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="#kontakt"
                        className="bg-amber-500 hover:bg-amber-400 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-amber-500/20">
                        Nezávazná konzultace
                    </a>

                    <a
                        href="#sluzby"
                        className="border border-gray-600 hover:border-white px-8 py-4 rounded-lg font-semibold transition"
                    >
                        Moje služby
                    </a>
                </div>
            </div>
        </section>
    );
}