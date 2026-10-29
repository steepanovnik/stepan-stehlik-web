"use client";

import { useEffect, useRef, useState } from "react";
import { Palette } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import ThemeSelector from "@/ui/themeSelector";
import { useLanguage } from "@/providers/languageProvider";

export default function ThemeMenu() {
    const { t } = useLanguage();
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
                aria-label={t.navbar.changeTheme}
                aria-expanded={open}
                aria-controls="theme-menu"
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
                    hover:scale-[1.02]

                    active:scale-[0.98]

                    focus:outline-none
                    focus:ring-2
                    focus:ring-white/20
                "
            >
                <motion.div
                    animate={{
                        rotate: open ? 180 : 0,
                    }}
                    transition={{
                        duration: 0.25,
                        ease: "easeInOut",
                    }}
                    style={{
                        color: "rgb(var(--accent))",
                    }}
                >
                    <Palette size={18} aria-hidden="true" />
                </motion.div>

                <span className="hidden lg:block font-medium">
                    {t.navbar.theme}
                </span>
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        id="theme-menu"
                        role="group"
                        aria-labelledby="theme-menu-title"
                        initial={
                            shouldReduceMotion
                                ? false
                                : {
                                    opacity: 0,
                                    y: -12,
                                    scale: 0.94,
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
                                    y: -8,
                                    scale: 0.98,
                                }
                        }
                        transition={
                            shouldReduceMotion
                                ? { duration: 0 }
                                : {
                                    type: "spring",
                                    stiffness: 420,
                                    damping: 30,
                                    mass: 0.7,
                                }
                        }
                        className="
                            absolute
                            right-0
                            mt-3

                            origin-top-right

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
                                id="theme-menu-title"
                                className="font-semibold text-white"
                            >
                                {t.navbar.theme}
                            </h3>

                            <p className="mt-1 text-sm text-zinc-400">
                                {t.navbar.themeMenuDescription}
                            </p>

                        </div>

                        <div className="p-5">
                            <ThemeSelector onSelect={handleSelect} />
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}