"use client";

import { useEffect, useRef, useState } from "react";
import { Palette } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import ThemeSelector from "@/ui/themeSelector";

export default function ThemeMenu() {
    const [open, setOpen] = useState(false);

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

    return (
        <div
            ref={menuRef}
            className="relative"
        >
            <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                aria-label="Změnit motiv"
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
                    <Palette size={18} />
                </motion.div>

                <span className="hidden lg:block font-medium">
                    Motiv
                </span>
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: -12,
                            scale: 0.94,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                        }}
                        exit={{
                            opacity: 0,
                            y: -8,
                            scale: 0.98,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 420,
                            damping: 30,
                            mass: 0.7,
                        }}
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

                            <h3 className="font-semibold text-white">
                                Motiv
                            </h3>

                            <p className="mt-1 text-sm text-zinc-400">
                                Vyberte si barevné schéma webu.
                            </p>

                        </div>

                        <div className="p-5">
                            <ThemeSelector
                                onSelect={() => setOpen(false)}
                            />
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}