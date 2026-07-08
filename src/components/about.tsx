"use client";

import FadeIn from "../ui/animations/fadeIn";
import { useLanguage } from "../providers/languageProvider";

export default function About() {
    const { t } = useLanguage();

    return (
        <section
            id="o-mne"
            className="bg-black py-24 px-6 text-white"
        >
            <div className="max-w-4xl mx-auto">

                <FadeIn>
                    <h2 className="mb-10 text-center text-4xl font-bold">
                        {t.about.title}
                    </h2>
                </FadeIn>

                <div className="space-y-6 text-lg leading-relaxed text-zinc-300">

                    <FadeIn delay={0.15}>
                        <p>
                            {t.about.paragraphs[0]}
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <p>
                            {t.about.paragraphs[1]}
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.45}>
                        <p>
                            {t.about.paragraphs[2]}
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.6}>
                        <p>
                            {t.about.paragraphs[3]}
                        </p>
                    </FadeIn>

                </div>

            </div>
        </section>
    );
}