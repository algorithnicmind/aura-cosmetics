"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

const categories = ["All", "Bridal", "Party", "Editorial", "Natural"];

const galleryData = [
    { id: 1, category: "Bridal", label: "Classic Red Bride", icon: "👰", size: "large", bg: "linear-gradient(135deg, #B76E79, #D4A574)" },
    { id: 2, category: "Party", label: "Cocktail Glam", icon: "🎉", size: "medium", bg: "linear-gradient(135deg, #D4A574, #E8C9A0)" },
    { id: 3, category: "Natural", label: "Skin First", icon: "✨", size: "small", bg: "linear-gradient(135deg, #F5E6D3, #F2C4C4)" },
    { id: 4, category: "Editorial", label: "Bold Lips", icon: "💄", size: "large", bg: "linear-gradient(135deg, #FDF2F0, #B76E79)" },
    { id: 5, category: "Bridal", label: "Reception Look", icon: "🌸", size: "small", bg: "linear-gradient(135deg, #E8D5C4, #D4A574)" },
    { id: 6, category: "Party", label: "Smokey Eyes", icon: "👀", size: "medium", bg: "linear-gradient(135deg, #2D2D2D, #8A8A8A)" },
    { id: 7, category: "Natural", label: "Dewy Finish", icon: "💧", size: "large", bg: "linear-gradient(135deg, #FFF8F5, #E8C9A0)" },
    { id: 8, category: "Editorial", label: "Neon Liner", icon: "⚡", size: "small", bg: "linear-gradient(135deg, #F2C4C4, #B76E79)" },
];

export default function GalleryPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredGallery = galleryData.filter(item => activeCategory === "All" || item.category === activeCategory);

    return (
        <SectionWrapper background="linear-gradient(180deg, #FDF2F0 0%, #FFF8F5 100%)">
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
                    Our Portfolio
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
                        marginBottom: "3rem"
                    }}
                >
                    The Gallery
                </motion.h1>

                {/* Filter Buttons */}
                <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "4rem" }}>
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            style={{
                                padding: "10px 24px",
                                borderRadius: "9999px",
                                border: activeCategory === cat ? "none" : "1px solid #D4A574",
                                background: activeCategory === cat ? "linear-gradient(135deg, #B76E79, #D4A574)" : "transparent",
                                color: activeCategory === cat ? "white" : "#4A4A4A",
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "0.9rem",
                                fontWeight: 500,
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                                boxShadow: activeCategory === cat ? "0 4px 15px rgba(183, 110, 121, 0.2)" : "none"
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Masonry Layout Approximation */}
            <motion.div
                layout
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                    gap: "1.5rem",
                    maxWidth: "1280px",
                    margin: "0 auto"
                }}
            >
                <AnimatePresence>
                    {filteredGallery.map((item) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                            key={item.id}
                            style={{
                                gridRowEnd: `span ${item.size === 'large' ? 3 : item.size === 'medium' ? 2 : 1}`,
                                minHeight: item.size === 'large' ? "400px" : item.size === 'medium' ? "300px" : "200px",
                                background: item.bg,
                                borderRadius: "16px",
                                overflow: "hidden",
                                position: "relative",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: "0 8px 30px rgba(183, 110, 121, 0.1)",
                                cursor: "zoom-in"
                            }}
                            className="group"
                        >
                            <span style={{ fontSize: "4rem", opacity: 0.5 }}>{item.icon}</span>

                            <div style={{
                                position: "absolute",
                                inset: 0,
                                background: "rgba(0,0,0,0.4)",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                opacity: 0,
                                transition: "opacity 0.3s ease"
                            }}
                                className="overlay"
                            >
                                <span style={{ color: "white", fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 600 }}>{item.label}</span>
                                <span style={{ color: "#D4A574", fontSize: "0.9rem", marginTop: "0.5rem", textTransform: "uppercase", letterSpacing: "2px" }}>{item.category}</span>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            <style jsx>{`
        .group:hover .overlay {
          opacity: 1 !important;
        }
      `}</style>
        </SectionWrapper>
    );
}
