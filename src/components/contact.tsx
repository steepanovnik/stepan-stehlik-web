export default function Contact() {
    return (
        <section
            id="kontakt"
            className="bg-black text-white py-24 px-6"
        >
            <div className="max-w-4xl mx-auto text-center">

                <h2 className="text-4xl font-bold mb-8">
                    Pojďme si promluvit o vašem projektu
                </h2>

                <p className="text-xl text-gray-400 mb-12">
                    Potřebujete automatizovat testy, otestovat API,
                    nastavit CI/CD pipeline nebo vytvořit moderní firemní web?
                </p>

                <div className="space-y-4 text-lg">

                    <p>
                        📧 info@stepan-stehlik.cz
                    </p>

                    <p>
                        💼 LinkedIn
                    </p>

                </div>

                <div className="mt-10">
                    <a
                        href="mailto:info@stepan-stehlik.cz"
                        className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition"
                    >
                        Nezávazná konzultace
                    </a>
                </div>

            </div>
        </section>
    );
}