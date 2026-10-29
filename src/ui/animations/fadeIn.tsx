"use client";

import { motion, useReducedMotion } from "framer-motion";

type FadeInProps = {
    children: React.ReactNode;
    delay?: number;
};

export default function FadeIn({
    children,
    delay = 0,
}: FadeInProps) {
    const shouldReduceMotion = useReducedMotion();

    return (
        <motion.div
            initial={
                shouldReduceMotion
                    ? false
                    : { opacity: 0, y: 30 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: shouldReduceMotion ? 0 : 0.6,
                delay: shouldReduceMotion ? 0 : delay,
                ease: "easeOut",
            }}
        >
            {children}
        </motion.div>
    );
}