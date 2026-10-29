export const themeIds = [
    "classic",
    "ocean",
    "forest",
    "royal",
] as const;

export type ThemeId = (typeof themeIds)[number];

export type Theme = {
    id: ThemeId;

    colors: {
        primary: string;
        primaryLight: string;
        glow: string;
        textOnPrimary: string;
    };

    preview: {
        left: string;
        right: string;
    };
};

export const themes: Theme[] = [
    {
        id: "classic",

        colors: {
            primary: "245 158 11",
            primaryLight: "251 191 36",
            glow: "245 158 11",
            textOnPrimary: "#000000",
        },

        preview: {
            left: "#f59e0b",
            right: "#18181b",
        },
    },

    {
        id: "ocean",

        colors: {
            primary: "59 130 246",
            primaryLight: "125 211 252",
            glow: "59 130 246",
            textOnPrimary: "#ffffff",
        },

        preview: {
            left: "#3b82f6",
            right: "#18181b",
        },
    },

    {
        id: "forest",

        colors: {
            primary: "16 185 129",
            primaryLight: "74 222 128",
            glow: "16 185 129",
            textOnPrimary: "#ffffff",
        },

        preview: {
            left: "#10b981",
            right: "#18181b",
        },
    },

    {
        id: "royal",

        colors: {
            primary: "139 92 246",
            primaryLight: "196 181 253",
            glow: "139 92 246",
            textOnPrimary: "#ffffff",
        },

        preview: {
            left: "#8b5cf6",
            right: "#18181b",
        },
    },
];