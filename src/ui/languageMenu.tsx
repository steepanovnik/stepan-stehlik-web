"use client";

import { useEffect, useRef, useState } from "react";
import { Languages } from "lucide-react";
import {
    AnimatePresence,
    motion,
    useReducedMotion,
} from "framer-motion";

import LanguageSelector from "@/ui/languageSelector";
import { useLanguage } from "@/providers/languageProvider";

export default function LanguageMenu() {
    const { language, t } = useLanguage();
    const shouldReduceMotion = useReducedMotion();

    const [open, setOpen] = useState(false);

    const triggerRef = useRef<HTMLButtonElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () =>
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
    }, []);

    useEffect(() => {
        if (!open) return;

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setOpen(false);
                triggerRef.current?.focus();
            }
        }

        document.addEventListener("keydown", handleKeyDown);

        return () =>
            document.removeEventListener("keydown", handleKeyDown);
    }, [open]);

    const handleSelect = () => {
        setOpen(false);
        triggerRef.current?.focus();
    };

    return (
        <div
            ref={menuRef}
            className="relative"
        >
            <button
                ref={triggerRef}
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                aria-label={t.navbar.changeLanguage}
                aria-expanded={open}
                aria-controls="language-menu"
                className="
                    flex
                    items-center
                    gap-2

                    rounded-xl

                    border
                    border-zinc-700

                    px-3
                    py-2

                    transition-all
                    duration-300

                    hover:border-white
                    hover:bg-zinc-900

                    focus:outline-none
                    focus:ring-2
                    focus:ring-white/20
                "
            >
                <Languages size={18} aria-hidden="true" />

                <span className="hidden lg:block font-medium">
                    {language.toUpperCase()}
                </span>
            </button>

            <AnimatePresence>

                {open && (

                    <motion.div
                        id="language-menu"
                        role="group"
                        aria-labelledby="language-menu-title"
                        initial={
                            shouldReduceMotion
                                ? false
                                : {
                                    opacity: 0,
                                    y: -10,
                                    scale: 0.96,
                                }
                        }
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                        }}
                        exit={
                            shouldReduceMotion
                                ? { opacity: 0 }
                                : {
                                    opacity: 0,
                                    y: -10,
                                    scale: 0.96,
                                }
                        }
                        transition={
                            shouldReduceMotion
                                ? { duration: 0 }
                                : { duration: 0.18 }
                        }
                        className="
                            absolute
                            right-0
                            mt-3

                            w-72

                            overflow-hidden

                            rounded-2xl

                            border
                            border-zinc-800

                            bg-zinc-950/95
                            backdrop-blur-xl

                            shadow-2xl
                        "
                    >
                        <div className="border-b border-zinc-800 px-5 py-4">

                            <h3
                                id="language-menu-title"
                                className="font-semibold"
                            >
                                {t.navbar.language}
                            </h3>

                            <p className="mt-1 text-sm text-zinc-400">
                                {t.navbar.languageMenuDescription}
                            </p>

                        </div>

                        <div className="p-5">

                            <LanguageSelector onSelect={handleSelect} />

                        </div>

                    </motion.div>

                )}

            </AnimatePresence>

        </div>
    );
}