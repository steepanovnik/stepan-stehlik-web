"use client";

import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useSyncExternalStore,
} from "react";

import {
    dictionaries,
    Dictionary,
    Language,
} from "@/i18n";

const STORAGE_KEY = "language";

const listeners = new Set<() => void>();

function getLanguageSnapshot(): Language {
    if (typeof window === "undefined") {
        return "cs";
    }

    const savedLanguage =
        window.localStorage.getItem(STORAGE_KEY);

    return savedLanguage && savedLanguage in dictionaries
        ? (savedLanguage as Language)
        : "cs";
}

function getServerLanguageSnapshot(): Language {
    return "cs";
}

function subscribeToLanguage(callback: () => void) {
    listeners.add(callback);
    window.addEventListener("storage", callback);

    return () => {
        listeners.delete(callback);
        window.removeEventListener("storage", callback);
    };
}

function setStoredLanguage(language: Language) {
    window.localStorage.setItem(STORAGE_KEY, language);

    listeners.forEach((listener) => listener());
}

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
    const language = useSyncExternalStore(
        subscribeToLanguage,
        getLanguageSnapshot,
        getServerLanguageSnapshot
    );

    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);

    const value = useMemo(
        () => ({
            language,
            setLanguage: setStoredLanguage,
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
