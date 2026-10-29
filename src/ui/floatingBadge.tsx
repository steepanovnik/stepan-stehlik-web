"use client";

import { motion, useReducedMotion } from "framer-motion";

type FloatingBadgeProps = {
    children: React.ReactNode;
    delay?: number;
    featured?: boolean;
};

export default function FloatingBadge({
    children,
    delay = 0,
    featured = false,
}: FloatingBadgeProps) {
    const shouldReduceMotion = useReducedMotion();
    const duration = 6 + (delay % 2);

    return (
        <motion.div
            animate={
                featured || shouldReduceMotion
                    ? {}
                    : {
                        y: [0, -5, 0, 4, 0],
                        rotate: [0, 1, 0, -1, 0],
                        scale: [1, 1.01, 1],
                    }
            }
            transition={{
                duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay,
            }}
        >
            <div
                className={`
                    rounded-full
                    cursor-default
                    select-none
                    transition-all
                    duration-300

                    ${featured
                        ? `
                                border

                                px-7
                                py-3.5

                                text-lg
                                md:text-xl

                                font-semibold
                              `
                        : `
                                border
                                border-zinc-700
                                bg-zinc-950/50

                                px-6
                                py-3

                                text-base
                                md:text-lg

                                font-medium

                                hover:scale-105
                              `
                    }
                `}
                style={
                    featured
                        ? {
                            borderColor: "rgb(var(--accent) / .60)",
                            background: "rgb(var(--accent) / .12)",
                            color: "rgb(var(--accent-light))",
                            boxShadow:
                                "0 0 24px rgb(var(--accent-glow) / .20)",
                        }
                        : undefined
                }
                onMouseEnter={(e) => {
                    if (featured) return;

                    e.currentTarget.style.borderColor =
                        "rgb(var(--accent))";

                    e.currentTarget.style.background =
                        "rgb(var(--accent) / .08)";

                    e.currentTarget.style.boxShadow =
                        "0 0 20px rgb(var(--accent-glow) / .18)";
                }}
                onMouseLeave={(e) => {
                    if (featured) return;

                    e.currentTarget.style.borderColor = "";

                    e.currentTarget.style.background = "";

                    e.currentTarget.style.boxShadow = "";
                }}
            >
                {children}
            </div>
        </motion.div>
    );
}