export default function Hero() {
    return (
        <section className="min-h-screen pt-24 flex items-center justify-center bg-black text-white px-6">
            <div className="max-w-4xl text-center">
                <p className="text-blue-500 text-xl mb-4">
                    🚀 Senior QA Engineer 🚀
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
                        className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition"
                    >
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