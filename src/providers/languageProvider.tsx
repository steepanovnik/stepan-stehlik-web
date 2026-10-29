"use client";

import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";

import {
    dictionaries,
    Dictionary,
    Language,
} from "@/i18n";

type LanguageContextType = {
    language: Language;
    setLanguage: (language: Language) => void;
    t: Dictionary;
};

const LanguageContext =
    createContext<LanguageContextType | null>(null);

export function LanguageProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [language, setLanguage] =
        useState<Language>("cs");

    useEffect(() => {
        const saved =
            localStorage.getItem("language") as Language | null;

        if (saved && saved in dictionaries) {
            setLanguage(saved);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("language", language);
        document.documentElement.lang = language;
    }, [language]);

    const value = useMemo(
        () => ({
            language,
            setLanguage,
            t: dictionaries[language],
        }),
        [language]
    );

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error(
            "useLanguage must be used inside LanguageProvider."
        );
    }

    return context;
}