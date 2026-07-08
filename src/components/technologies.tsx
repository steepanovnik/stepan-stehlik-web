"use client";

import FadeIn from "../ui/animations/fadeIn";
import FloatingBadge from "../ui/floatingBadge";
import { techCloud } from "../ui/data/techCloud";
import { useLanguage } from "../providers/languageProvider";

export default function Technologies() {
    const { t } = useLanguage();

    return (
        <section
            id="technologie"
            className="bg-zinc-900/25 py-24 px-6 text-white"
        >
            <div className="max-w-6xl mx-auto">

                <FadeIn>
                    <h2 className="mb-5 text-center text-4xl font-bold">
                        {t.technologies.title}
                    </h2>
                </FadeIn>

                <FadeIn delay={0.15}>
                    <p className="mx-auto mb-20 max-w-3xl text-center leading-relaxed text-zinc-400">
                        {t.technologies.description}
                    </p>
                </FadeIn>

                <div className="relative mx-auto max-w-5xl">

                    {/* Accent glow */}
                    <div
                        className="
                            pointer-events-none

                            absolute
                            left-1/2
                            top-1/2

                            h-[420px]
                            w-[420px]

                            -translate-x-1/2
                            -translate-y-1/2

                            rounded-full

                            blur-[170px]
                        "
                        style={{
                            background:
                                "radial-gradient(circle, rgb(var(--accent-glow) / 0.10) 0%, transparent 70%)",
                        }}
                    />

                    {/* Outer glow */}
                    <div
                        className="
                            pointer-events-none

                            absolute
                            left-1/2
                            top-1/2

                            h-[620px]
                            w-[620px]

                            -translate-x-1/2
                            -translate-y-1/2

                            rounded-full

                            blur-[220px]
                        "
                        style={{
                            background:
                                "radial-gradient(circle, rgb(var(--accent-glow) / 0.05) 0%, transparent 75%)",
                        }}
                    />

                    <div
                        className="
                            relative
                            z-10

                            flex
                            flex-wrap
                            items-center
                            justify-center

                            gap-x-5
                            gap-y-8
                        "
                    >
                        {techCloud.map((tech, index) => (
                            <FadeIn
                                key={tech.name}
                                delay={index * 0.05}
                            >
                                <div className={tech.className}>
                                    <FloatingBadge
                                        featured={tech.featured}
                                        delay={index * 0.08}
                                    >
                                        {tech.name}
                                    </FloatingBadge>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}