"use client";

import { useLanguage } from "../providers/languageProvider";

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="mt-16 pb-8">
            <p className="text-center text-sm text-zinc-500">
                © {new Date().getFullYear()} {t.footer.copyright}
            </p>
        </footer>
    );
}