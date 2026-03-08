"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function AboutPage() {
    return (
        <>
            <SectionWrapper background="linear-gradient(135deg, #FDF2F0 0%, #FFF8F5 100%)">
                <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto", paddingTop: "6rem", paddingBottom: "3rem" }}>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
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
                        The Artist Behind The Art
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "clamp(2.5rem, 5vw, 4rem)",
                            fontWeight: 700,
                            color: "#2D2D2D",
                            marginBottom: "1.5rem"
                        }}
                    >
                        Aura Cosmetics
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{ fontSize: "1.1rem", color: "#8A8A8A", lineHeight: 1.8 }}
                    >
                        Founded by Priya Sharma, a certified celebrity makeup artist and beauty influencer with over 8 years of industry experience. Aura Cosmetics was born from a passion for enhancing natural beauty and empowering individuals to feel confident in their own skin.
                    </motion.p>
                </div>
            </SectionWrapper>

            {/* Timeline Section */}
            <SectionWrapper background="var(--color-warm-white)">
                <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", textAlign: "center", marginBottom: "3rem" }}>Our Journey</h2>

                    <div style={{ position: "relative", paddingLeft: "2rem" }}>
                        <div style={{ position: "absolute", top: 0, bottom: 0, left: "7px", width: "2px", background: "linear-gradient(to bottom, #B76E79, #D4A574)" }} />

                        {[
                            { year: "2015", title: "The Beginning", text: "Started as a freelance makeup artist passionate about bridal transformations." },
                            { year: "2018", title: "Certification & Growth", text: "Completed masterclasses internationally and worked with top regional celebrities." },
                            { year: "2020", title: "Aura Cosmetics Launch", text: "Officially launched the brand studio offering comprehensive beauty services." },
                            { year: "2024", title: "Award Winning", text: "Recognized as the 'Best Premium Beauty Studio' in the region with 500+ happy clients." }
                        ].map((event, i) => (
                            <motion.div
                                key={event.year}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.2 }}
                                style={{ position: "relative", marginBottom: "3rem" }}
                            >
                                <div style={{ position: "absolute", left: "-2rem", width: "16px", height: "16px", borderRadius: "50%", background: "#B76E79", border: "4px solid white", boxShadow: "0 0 0 2px rgba(183, 110, 121, 0.2)" }} />
                                <span style={{ fontSize: "0.9rem", fontWeight: 700, color: "#D4A574", letterSpacing: "2px" }}>{event.year}</span>
                                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", margin: "0.5rem 0", color: "#2D2D2D" }}>{event.title}</h3>
                                <p style={{ color: "#8A8A8A", lineHeight: 1.8 }}>{event.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>
        </>
    );
}
