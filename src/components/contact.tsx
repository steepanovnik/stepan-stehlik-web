"use client";

import { Mail, ArrowRight } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";

import { useLanguage } from "@/providers/languageProvider";

export default function Contact() {
    const { t } = useLanguage();

    return (
        <section
            id="kontakt"
            className="bg-black py-24 px-6 text-white"
        >
            <div className="max-w-6xl mx-auto">

                <h2 className="mb-4 text-center text-4xl font-bold">
                    {t.contact.title}
                </h2>

                <p className="mx-auto mb-16 max-w-2xl text-center text-zinc-400">
                    {t.contact.description}
                </p>

                <div className="grid gap-8 md:grid-cols-3">

                    {/* EMAIL */}
                    <a
                        href="mailto:info@stepan-stehlik.cz"
                        className="
                            group

                            rounded-3xl

                            border
                            border-zinc-800

                            bg-zinc-950

                            p-10

                            transition-all
                            duration-300

                            hover:scale-[1.02]
                            hover:bg-zinc-900
                            hover:border-accent
                            hover:shadow-accent
                        "
                    >
                        <Mail className="mb-8 h-12 w-12 text-white" />

                        <h3 className="mb-3 text-3xl font-bold">
                            {t.contact.email.title}
                        </h3>

                        <p className="mb-10 text-zinc-400">
                            info@stepan-stehlik.cz
                        </p>

                        <div className="inline-flex items-center gap-2 font-semibold text-accent transition-all group-hover:gap-3">
                            {t.contact.email.action}
                            <ArrowRight size={20} />
                        </div>
                    </a>

                    {/* LINKEDIN */}
                    <a
                        href="https://www.linkedin.com/in/štěpán-stehlík-473383260/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            group

                            rounded-3xl

                            border
                            border-zinc-800

                            bg-zinc-950

                            p-10

                            transition-all
                            duration-300

                            hover:scale-[1.02]
                            hover:bg-zinc-900
                            hover:border-accent
                            hover:shadow-accent
                        "
                    >
                        <FaLinkedinIn className="mb-8 h-12 w-12 text-white" />

                        <h3 className="mb-3 text-3xl font-bold">
                            {t.contact.linkedin.title}
                        </h3>

                        <p className="mb-10 text-zinc-400">
                            {t.contact.linkedin.description}
                        </p>

                        <div className="inline-flex items-center gap-2 font-semibold text-accent transition-all group-hover:gap-3">
                            {t.contact.linkedin.action}
                            <ArrowRight size={20} />
                        </div>
                    </a>

                    {/* GITHUB */}
                    <a
                        href="https://github.com/steepanovnik"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            group

                            rounded-3xl

                            border
                            border-zinc-800

                            bg-zinc-950

                            p-10

                            transition-all
                            duration-300

                            hover:scale-[1.02]
                            hover:bg-zinc-900
                            hover:border-accent
                            hover:shadow-accent
                        "
                    >
                        <FaGithub className="mb-8 h-12 w-12 text-white" />

                        <h3 className="mb-3 text-3xl font-bold">
                            {t.contact.github.title}
                        </h3>

                        <p className="mb-10 text-zinc-400">
                            {t.contact.github.description}
                        </p>

                        <div className="inline-flex items-center gap-2 font-semibold text-accent transition-all group-hover:gap-3">
                            {t.contact.github.action}
                            <ArrowRight size={20} />
                        </div>
                    </a>

                </div>

            </div>
        </section>
    );
}