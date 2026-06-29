export default function About() {
    return (
        <section id="o-mne" className="bg-black text-white py-24 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-10 text-center">
                    O mně
                </h2>

                <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                    <p>
                        Jsem Senior QA Engineer se zaměřením na backend testování,
                        API automatizaci a kvalitu software.
                    </p>

                    <p>
                        Mám zkušenosti s návrhem testovacích scénářů,
                        automatizací testů v Postmanu a Playwright,
                        validací XML a JSON dat a integrací testů do CI/CD pipeline.
                    </p>

                    <p>
                        V posledních letech se věnuji především automatizaci,
                        testování API rozhraní a nastavování procesů,
                        které pomáhají týmům dodávat kvalitnější software rychleji.
                    </p>

                    <p>
                        Vedle QA pomáhám podnikatelům a menším firmám vytvářet
                        moderní firemní weby postavené na moderních technologiích.
                    </p>
                </div>
            </div>
        </section>
    );
}