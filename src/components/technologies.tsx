import FadeIn from "../ui/animations/fadeIn";
import FloatingBadge from "../ui/floatingBadge";
import { techCloud } from "../ui/data/techCloud";

export default function Technologies() {
    return (
        <section
            id="technologie"
            className="bg-zinc-900/25 py-24 px-6 text-white"
        >
            <div className="max-w-6xl mx-auto">

                <FadeIn>
                    <h2 className="text-4xl font-bold text-center mb-5">
                        Expertiza
                    </h2>
                </FadeIn>

                <FadeIn delay={0.15}>
                    <p className="text-center text-zinc-400 max-w-3xl mx-auto mb-20 leading-relaxed">
                        Specializuji se na automatizaci API testů a tvorbu
                        moderních prezentačních webů pro podnikatele a menší firmy.
                    </p>
                </FadeIn>

                <div className="relative max-w-5xl mx-auto group">

                    {/* Amber glow */}
                    <div
                        className="
                            absolute
                            left-1/2
                            top-1/2
                            -translate-x-1/2
                            -translate-y-1/2

                            w-[420px]
                            h-[420px]

                            md:w-[550px]
                            md:h-[550px]

                            rounded-full
                            bg-amber-500/5
                            blur-[170px]

                            pointer-events-none
                        "
                    />

                    {/* Blue glow */}
                    <div
                        className="
                            absolute
                            left-1/2
                            top-1/2
                            -translate-x-1/2
                            -translate-y-1/2

                            w-[550px]
                            h-[550px]

                            md:w-[700px]
                            md:h-[700px]

                            rounded-full
                            bg-sky-500/5
                            blur-[220px]

                            pointer-events-none
                        "
                    />

                    <div
                        className="
                            relative
                            z-10

                            flex
                            flex-wrap
                            justify-center
                            items-center

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