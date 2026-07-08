"use client";

import FadeIn from "../ui/animations/fadeIn";
import { useLanguage } from "../providers/languageProvider";

export default function Services() {
    const { t } = useLanguage();

    return (
        <section
            id="sluzby"
            className="bg-zinc-900/25 py-24 px-6 text-white"
        >
            <div className="max-w-6xl mx-auto">

                <FadeIn>
                    <h2 className="mb-12 text-center text-4xl font-bold">
                        {t.services.title}
                    </h2>
                </FadeIn>

                <div className="grid gap-6 md:grid-cols-2">

                    {t.services.items.map((service, index) => (
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

                                    bg-zinc-950/20

                                    p-6

                                    transition-all
                                    duration-300

                                    hover:-translate-y-1
                                    hover:bg-zinc-900
                                    hover:border-accent
                                    hover:shadow-accent
                                "
                            >
                                <h3 className="mb-4 text-2xl font-semibold">
                                    {service.title}
                                </h3>

                                <p className="leading-relaxed text-zinc-400">
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