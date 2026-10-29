"use client";

import {
    createContext,
    useContext,
    useEffect,
    useSyncExternalStore,
} from "react";

import {
    themes,
    Theme,
    ThemeId,
} from "@/design-system/themes";

const STORAGE_KEY = "theme";

const listeners = new Set<() => void>();

function getThemeSnapshot(): ThemeId {
    if (typeof window === "undefined") {
        return themes[0].id;
    }

    const savedTheme = window.localStorage.getItem(STORAGE_KEY);

    return themes.some((theme) => theme.id === savedTheme)
        ? (savedTheme as ThemeId)
        : themes[0].id;
}

function getServerThemeSnapshot(): ThemeId {
    return themes[0].id;
}

function subscribeToTheme(callback: () => void) {
    listeners.add(callback);
    window.addEventListener("storage", callback);

    return () => {
        listeners.delete(callback);
        window.removeEventListener("storage", callback);
    };
}

function setStoredTheme(themeId: ThemeId) {
    window.localStorage.setItem(STORAGE_KEY, themeId);

    listeners.forEach((listener) => listener());
}

type ThemeContextType = {
    theme: Theme;
    setTheme: (id: ThemeId) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const themeId = useSyncExternalStore(
        subscribeToTheme,
        getThemeSnapshot,
        getServerThemeSnapshot
    );

    const theme =
        themes.find((item) => item.id === themeId) ?? themes[0];

    useEffect(() => {
        document.documentElement.style.setProperty(
            "--accent",
            theme.colors.primary
        );

        document.documentElement.style.setProperty(
            "--accent-light",
            theme.colors.primaryLight
        );

        document.documentElement.style.setProperty(
            "--accent-glow",
            theme.colors.glow
        );

        document.documentElement.style.setProperty(
            "--accent-text",
            theme.colors.textOnPrimary
        );
    }, [theme]);

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setTheme: setStoredTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error(
            "useTheme must be used inside ThemeProvider."
        );
    }

    return context;
}
