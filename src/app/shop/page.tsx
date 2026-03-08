"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FeaturedProducts from "@/components/home/FeaturedProducts";

export default function ShopPage() {
    return (
        <>
            <SectionWrapper background="linear-gradient(135deg, #FDF2F0 0%, #FFF8F5 100%)">
                <div style={{ textAlign: "center", paddingTop: "6rem", paddingBottom: "2rem" }}>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "0.85rem",
                            fontWeight: 600,
                            letterSpacing: "4px",
                            textTransform: "uppercase",
                            color: "#B76E79",
                            display: "block",
                            marginBottom: "1rem"
                        }}
                    >
                        Aura Boutique
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "clamp(2.5rem, 5vw, 4rem)",
                            fontWeight: 700,
                            color: "#2D2D2D",
                            marginBottom: "1.5rem"
                        }}
                    >
                        Shop Essentials
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        style={{ fontSize: "1.1rem", color: "#8A8A8A", maxWidth: "600px", margin: "0 auto" }}
                    >
                        Curated skincare and makeup essentials recommended by top artists
                    </motion.p>
                </div>
            </SectionWrapper>

            {/* Reusing Featured Products component for Shop Grid */}
            <div style={{ paddingBottom: "4rem" }}>
                <FeaturedProducts />
            </div>
        </>
    );
}
