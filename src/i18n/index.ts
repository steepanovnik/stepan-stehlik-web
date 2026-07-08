import cs from "./cs";
import en from "./en";

export const dictionaries = {
    cs,
    en,
} as const;

export type Language = keyof typeof dictionaries;

export type Dictionary = typeof cs;