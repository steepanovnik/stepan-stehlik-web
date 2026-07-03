import FadeIn from "../ui/animations/fadeIn";
export default function Hero() {
    return (
        <section
            id="hero"
            className="
                min-h-[75svh]
                md:min-h-[85svh]
                lg:min-h-screen
                flex
                items-center
                justify-center
                px-6
                pb-20
            "
        >
            <div className="max-w-5xl mx-auto text-center">

                {/* Badge */}
                <FadeIn delay={0.4}>
                    <div className="inline-flex items-center rounded-full border border-amber-500/20 bg-amber-500/10 px-5 py-2 mb-8">
                        <span className="text-amber-400 text-sm md:text-base font-medium tracking-wide">
                            Senior QA Engineer
                        </span>
                    </div>
                </FadeIn>

                {/* Jméno */}
                <FadeIn delay={0.2}>
                    <h1
                        className="
                        text-5xl
                        sm:text-6xl
                        md:text-7xl
                        lg:text-8xl
                        font-bold
                        tracking-tight
                        leading-none
                        mb-8
                    "
                    >
                        Štěpán Stehlík
                    </h1>
                </FadeIn>

                {/* Popis */}
                <p
                    className="
                        max-w-3xl
                        mx-auto
                        text-lg
                        sm:text-xl
                        md:text-2xl
                        leading-relaxed
                        text-zinc-400
                        mb-12
                    "
                >
                    Pomáhám firmám zvyšovat kvalitu software pomocí
                    automatizace testů, API testování,
                    CI/CD integrací a tvorby moderních firemních webů.
                </p>

                {/* Tlačítka */}
                <FadeIn delay={0.6}>
                    <div
                        className="
                        flex
                        flex-col
                        sm:flex-row
                        justify-center
                        items-center
                        gap-4
                    "
                    >
                        <a
                            href="#kontakt"
                            className="
                            w-full
                            sm:w-auto
                            rounded-xl
                            bg-amber-500
                            hover:bg-amber-400
                            text-black
                            font-semibold
                            px-8
                            py-4
                            transition-all
                            duration-300
                            shadow-lg
                            shadow-amber-500/20
                            hover:shadow-xl
                            hover:shadow-amber-500/30
                            hover:-translate-y-0.5
                        "
                        >
                            Nezávazná konzultace
                        </a>

                        <a
                            href="#sluzby"
                            className="
                            w-full
                            sm:w-auto
                            rounded-xl
                            border
                            border-zinc-700
                            hover:border-white
                            hover:bg-zinc-900
                            px-8
                            py-4
                            font-semibold
                            transition-all
                            duration-300
                        "
                        >
                            Moje služby
                        </a>
                    </div>
                </FadeIn>

            </div>
        </section >
    );
}