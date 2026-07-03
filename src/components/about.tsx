import FadeIn from "../ui/animations/fadeIn";

export default function About() {
    return (
        <section id="o-mne" className="bg-black text-white py-24 px-6">
            <div className="max-w-4xl mx-auto">
                <FadeIn>
                    <h2 className="text-4xl font-bold mb-10 text-center">
                        O mně
                    </h2>
                </FadeIn>

                <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                    <FadeIn delay={0.15}><p>
                        Jsem Senior QA Engineer se zaměřením na backend testování,
                        API automatizaci a kvalitu software.
                    </p>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <p>
                            Mám zkušenosti s návrhem testovacích scénářů,
                            automatizací testů v Postmanu,
                            validací XML a JSON dat a integrací testů do CI/CD pipeline.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.45}>
                        <p>
                            V posledních letech se věnuji především automatizaci,
                            testování API rozhraní a nastavování procesů,
                            které pomáhají týmům dodávat kvalitnější software rychleji.
                        </p>


                        <p>
                            Vedle QA pomáhám podnikatelům vytvářet
                            moderní firemní weby postavené na moderních technologiích.
                        </p>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}