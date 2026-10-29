import { themes } from "@/design-system/themes";

const colorsByTheme = Object.fromEntries(
    themes.map((theme) => [theme.id, theme.colors])
);

export const themeInitScript = `
(function () {
    try {
        var themeColors = ${JSON.stringify(colorsByTheme)};
        var theme = window.localStorage.getItem("theme");

        if (theme && themeColors[theme]) {
            var colors = themeColors[theme];
            var root = document.documentElement;

            root.style.setProperty("--accent", colors.primary);
            root.style.setProperty("--accent-light", colors.primaryLight);
            root.style.setProperty("--accent-glow", colors.glow);
            root.style.setProperty("--accent-text", colors.textOnPrimary);
        }

        var language = window.localStorage.getItem("language");

        if (language === "cs" || language === "en") {
            document.documentElement.lang = language;
        }
    } catch (error) {
        // Ignore storage access errors (e.g. private browsing).
    }
})();
`;
