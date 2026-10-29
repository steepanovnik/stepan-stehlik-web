"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

import {
    themes,
    Theme,
    ThemeId,
} from "@/design-system/themes";

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
    const [themeId, setThemeId] =
        useState<ThemeId>("classic");

    const theme =
        themes.find((t) => t.id === themeId) ?? themes[0];

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");

        if (
            savedTheme &&
            themes.some((t) => t.id === savedTheme)
        ) {
            setThemeId(savedTheme as ThemeId);
        }
    }, []);

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

        localStorage.setItem("theme", theme.id);
    }, [theme]);

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setTheme: setThemeId,
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