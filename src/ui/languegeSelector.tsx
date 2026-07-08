"use client";

import { Check } from "lucide-react";

import { useLanguage } from "../providers/languageProvider";

type LanguageSelectorProps = {
    onSelect?: () => void;
};

const languages = [
    {
        id: "cs",
        label: "Čeština",
        short: "CZ",
    },
    {
        id: "en",
        label: "English",
        short: "EN",
    },
] as const;

export default function LanguageSelector({
    onSelect,
}: LanguageSelectorProps) {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="space-y-2">

            {languages.map((item) => {

                const active = language === item.id;

                return (

                    <button
                        key={item.id}
                        type="button"
                        onClick={() => {
                            setLanguage(item.id);
                            onSelect?.();
                        }}
                        className={`
                            w-full

                            flex
                            items-center
                            justify-between

                            rounded-xl

                            p-3

                            text-left

                            transition-all
                            duration-300

                            ${active
                                ? "border border-zinc-700 bg-zinc-800"
                                : "border border-transparent hover:bg-zinc-900"
                            }
                        `}
                    >

                        <div className="flex items-center gap-4">

                            <div
                                className={`
                                    flex
                                    h-11
                                    w-11
                                    shrink-0
                                    items-center
                                    justify-center

                                    rounded-xl

                                    border

                                    transition-all
                                    duration-300

                                    ${active
                                        ? "border-accent bg-accent-soft shadow-accent"
                                        : "border-zinc-700 bg-zinc-900"
                                    }
                                `}
                            >
                                <span className="text-lg font-semibold">
                                    {item.short}
                                </span>
                            </div>

                            <div>

                                <div className="font-medium text-white">
                                    {item.label}
                                </div>

                                <div className="text-sm text-zinc-400">
                                    {item.short}
                                </div>

                            </div>

                        </div>

                        <div className="flex w-5 justify-center">

                            {active && (
                                <Check
                                    size={18}
                                    className="text-accent"
                                />
                            )}

                        </div>

                    </button>

                );

            })}

        </div>
    );
}