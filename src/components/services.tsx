import FadeIn from "../ui/animations/fadeIn";

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
                "Zapojení automatických testů do GitHub Actions nebo GitLab CI/CD.",
        },
        {
            title: "Moderní firemní weby",
            description:
                "Rychlé a moderní webové prezentace pro podnikatele nabízející služby.",
        },
    ];

    return (
        <section
            id="sluzby"
            className="bg-zinc-900/25 text-white py-24 px-6"
        >
            <div className="max-w-6xl mx-auto">

                <FadeIn>
                    <h2 className="text-4xl font-bold text-center mb-12">
                        Služby
                    </h2>
                </FadeIn>

                <div className="grid md:grid-cols-2 gap-6">

                    {services.map((service, index) => (
                        <FadeIn
                            key={service.title}
                            delay={index * 0.15}
                        >
                            <div
                                className="
                                    h-full
                                    rounded-xl
                                    border
                                    border-zinc-800
                                    p-6
                                    transition-all
                                    duration-300
                                    hover:border-zinc-700
                                    hover:bg-zinc-900
                                    hover:-translate-y-1
                                "
                            >
                                <h3 className="text-2xl font-semibold mb-4">
                                    {service.title}
                                </h3>

                                <p className="text-zinc-400 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </FadeIn>
                    ))}

                </div>

            </div>
        </section>
    );
}