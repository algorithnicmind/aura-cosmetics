"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
    children: ReactNode;
    className?: string;
    background?: string;
    id?: string;
}

export default function SectionWrapper({
    children,
    background = "transparent",
    id,
}: SectionWrapperProps) {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            style={{
                padding: "6rem 2rem",
                background,
                position: "relative",
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    maxWidth: "1280px",
                    margin: "0 auto",
                }}
            >
                {children}
            </div>
        </motion.section>
    );
}
