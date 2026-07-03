"use client";

import { motion } from "framer-motion";

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
    const duration = 6 + (delay % 2);

    return (
        <motion.div
            animate={
                featured
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
            className={`
                rounded-full
                cursor-default
                select-none
                transition-all
                duration-300

                ${featured
                    ? `
                            border border-amber-400/60
                            bg-amber-500/10
                            text-amber-300

                            px-7
                            py-3.5

                            text-lg
                            md:text-xl

                            font-semibold

                            shadow-lg
                            shadow-amber-500/10
                        `
                    : `
                            border border-zinc-700
                            bg-zinc-950/50

                            px-6
                            py-3

                            text-base
                            md:text-lg

                            font-medium

                            hover:scale-105
                            hover:border-amber-400
                            hover:bg-amber-500/10
                            hover:shadow-lg
                            hover:shadow-amber-500/20
                        `
                }
            `}
        >
            {children}
        </motion.div>
    );
}