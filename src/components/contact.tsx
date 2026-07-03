import { Mail, ArrowRight } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";

export default function Contact() {
    return (
        <section
            id="kontakt"
            className="bg-black text-white py-24 px-6"
        >
            <div className="max-w-6xl mx-auto">

                <h2 className="text-4xl font-bold text-center mb-4">
                    Pojďme si promluvit o vašem projektu
                </h2>

                <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-16">
                    Potřebujete automatizovat testy, otestovat API,
                    manuální FE testování nebo vytvořit moderní web
                    pro živnostníky poskytující služby?
                </p>

                <div className="grid gap-8 md:grid-cols-3">

                    {/* EMAIL */}
                    <a
                        href="mailto:info@stepan-stehlik.cz"
                        className="group rounded-3xl border border-zinc-800 bg-zinc-950 p-10 transition-all duration-300 hover:bg-zinc-900 hover:border-zinc-700 hover:scale-[1.02]"
                    >
                        <Mail className="w-12 h-12 text-white mb-8" />

                        <h3 className="text-3xl font-bold mb-3">
                            E-mail
                        </h3>

                        <p className="text-zinc-400 mb-10">
                            info@stepan-stehlik.cz
                        </p>

                        <div className="inline-flex items-center gap-2 text-amber-400 font-semibold group-hover:gap-3 transition-all">
                            Napsat e-mail
                            <ArrowRight size={20} />
                        </div>
                    </a>

                    {/* LINKEDIN */}
                    <a
                        href="https://www.linkedin.com/in/štěpán-stehlík-473383260/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group rounded-3xl border border-zinc-800 bg-zinc-950 p-10 transition-all duration-300 hover:bg-zinc-900 hover:border-zinc-700 hover:scale-[1.02]"
                    >
                        <FaLinkedinIn className="w-12 h-12 text-white mb-8" />

                        <h3 className="text-3xl font-bold mb-3">
                            LinkedIn
                        </h3>

                        <p className="text-zinc-400 mb-10">
                            Spojme se profesně.
                        </p>

                        <div className="inline-flex items-center gap-2 text-amber-400 font-semibold group-hover:gap-3 transition-all">
                            Otevřít profil
                            <ArrowRight size={20} />
                        </div>
                    </a>

                    {/* GITHUB */}
                    <a
                        href="https://github.com/steepanovnik"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group rounded-3xl border border-zinc-800 bg-zinc-950 p-10 transition-all duration-300 hover:bg-zinc-900 hover:border-zinc-700 hover:scale-[1.02]"
                    >
                        <FaGithub className="w-12 h-12 text-white mb-8" />

                        <h3 className="text-3xl font-bold mb-3">
                            GitHub
                        </h3>

                        <p className="text-zinc-400 mb-10">
                            Ukázky projektů a zdrojové kódy.
                        </p>

                        <div className="inline-flex items-center gap-2 text-amber-400 font-semibold group-hover:gap-3 transition-all">
                            Zobrazit GitHub
                            <ArrowRight size={20} />
                        </div>
                    </a>

                </div>

            </div>
        </section>
    );
}