import cs from "@/i18n/cs";
import en from "@/i18n/en";

export const dictionaries = {
    cs,
    en,
} as const;

export type Language = keyof typeof dictionaries;

export type Dictionary = typeof cs;