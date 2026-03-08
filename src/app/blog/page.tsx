"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";

const posts = [
    {
        id: 1,
        title: "The Ultimate Pre-Wedding Skincare Routine",
        date: "Dec 12, 2023",
        category: "Skincare",
        readTime: "5 min read",
        imageBg: "linear-gradient(135deg, #FDF2F0, #B76E79)",
        icon: "🧖‍♀️"
    },
    {
        id: 2,
        title: "How to Keep Your Makeup Flawless All Day",
        date: "Jan 05, 2024",
        category: "Makeup Tips",
        readTime: "4 min read",
        imageBg: "linear-gradient(135deg, #E8D5C4, #D4A574)",
        icon: "💄"
    },
    {
        id: 3,
        title: "5 Common Foundation Mistakes to Avoid",
        date: "Jan 22, 2024",
        category: "Tutorials",
        readTime: "6 min read",
        imageBg: "linear-gradient(135deg, #FFF8F5, #E8C9A0)",
        icon: "🎨"
    }
];

export default function BlogPage() {
    return (
        <SectionWrapper background="linear-gradient(135deg, #FDF2F0 0%, #FFF8F5 100%)">
            <div style={{ textAlign: "center", paddingTop: "6rem", paddingBottom: "3rem" }}>
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
                    Beauty Secrets & Tips
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
                    Aura Blog
                </motion.h1>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2.5rem", maxWidth: "1280px", margin: "0 auto" }}>
                {posts.map((post, i) => (
                    <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.15 }}
                        whileHover={{ y: -8 }}
                        style={{
                            background: "white",
                            borderRadius: "20px",
                            overflow: "hidden",
                            border: "1px solid rgba(240, 230, 224, 0.5)",
                            boxShadow: "0 4px 20px rgba(183, 110, 121, 0.06)",
                            transition: "all 0.4s ease",
                            cursor: "pointer",
                            display: "flex",
                            flexDirection: "column"
                        }}
                    >
                        <div style={{ height: "240px", background: post.imageBg, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                            <span style={{ fontSize: "5rem" }}>{post.icon}</span>
                            <span style={{ position: "absolute", top: "1rem", left: "1rem", padding: "4px 12px", background: "rgba(255,255,255,0.9)", borderRadius: "9999px", fontSize: "0.75rem", fontWeight: 600, color: "#B76E79", textTransform: "uppercase", letterSpacing: "1px" }}>
                                {post.category}
                            </span>
                        </div>
                        <div style={{ padding: "2rem", flex: 1, display: "flex", flexDirection: "column" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem", fontSize: "0.85rem", color: "#8A8A8A" }}>
                                <span>📅 {post.date}</span>
                                <span>⏱️ {post.readTime}</span>
                            </div>
                            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.35rem", fontWeight: 600, color: "#2D2D2D", marginBottom: "1rem", lineHeight: 1.4, flex: 1 }}>
                                {post.title}
                            </h3>
                            <div style={{ marginTop: "auto" }}>
                                <span style={{ color: "#B76E79", fontWeight: 500, fontSize: "0.95rem" }}>Read Article →</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
