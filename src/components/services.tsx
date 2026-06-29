export default function Services() {
    const services = [
        {
            title: "Test Automation",
            description:
                "Automatizace API a backend testů pomocí Postmanu, Newmanu.",
        },
        {
            title: "API Testing",
            description:
                "Návrh testovacích scénářů, validace dat a kontrola integrací.",
        },
        {
            title: "CI/CD Integrace",
            description:
                "Zapojení automatických testů do GitHub Actions, GitLab CI nebo Jenkins.",
        },
        {
            title: "Moderní firemní weby",
            description:
                "Rychlé a moderní webové prezentace pro podnikatele a malé firmy.",
        },
    ];

    return (
        <section id="sluzby" className="bg-zinc-900/25 text-white py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">
                    Služby
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="border border-zinc-800 rounded-xl p-6"
                        >
                            <h3 className="text-2xl font-semibold mb-4">
                                {service.title}
                            </h3>

                            <p className="text-gray-400">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}