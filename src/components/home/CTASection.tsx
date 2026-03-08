"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function CTASection() {
    return (
        <SectionWrapper background="var(--color-warm-white)">
            <div
                style={{
                    position: "relative",
                    borderRadius: "30px",
                    background: "linear-gradient(135deg, #B76E79 0%, #D4A574 100%)",
                    overflow: "hidden",
                    padding: "5rem 2rem",
                    textAlign: "center",
                    boxShadow: "0 20px 60px rgba(183, 110, 121, 0.2)",
                }}
            >
                {/* Background Decorative Rings */}
                <div
                    style={{
                        position: "absolute",
                        top: "-50%",
                        left: "-10%",
                        width: "500px",
                        height: "500px",
                        borderRadius: "50%",
                        border: "2px solid rgba(255,255,255,0.1)",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        bottom: "-30%",
                        right: "-5%",
                        width: "400px",
                        height: "400px",
                        borderRadius: "50%",
                        border: "2px solid rgba(255,255,255,0.1)",
                    }}
                />

                {/* Floating elements */}
                {[...Array(4)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
                        style={{
                            position: "absolute",
                            top: `${20 + i * 20}%`,
                            left: i % 2 === 0 ? `${10 + i * 5}%` : `auto`,
                            right: i % 2 !== 0 ? `${10 + i * 5}%` : `auto`,
                            fontSize: "1.5rem",
                            color: "white",
                            opacity: 0.5,
                        }}
                    >
                        ✦
                    </motion.div>
                ))}

                <div style={{ position: "relative", zIndex: 1, maxWidth: "700px", margin: "0 auto" }}>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "0.85rem",
                            fontWeight: 600,
                            letterSpacing: "4px",
                            textTransform: "uppercase",
                            color: "rgba(255,255,255,0.8)",
                            display: "block",
                            marginBottom: "1rem",
                        }}
                    >
                        Your Beauty Journey Begins Here
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "clamp(2.5rem, 5vw, 4rem)",
                            fontWeight: 700,
                            color: "white",
                            marginBottom: "1.5rem",
                            lineHeight: 1.2,
                        }}
                    >
                        Ready to Glow?
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{
                            fontSize: "1.1rem",
                            color: "rgba(255,255,255,0.9)",
                            marginBottom: "2.5rem",
                            lineHeight: 1.8,
                        }}
                    >
                        Book your exclusive session today and let us unveil the most radiant version of you. Limited slots available for this month.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
                    >
                        <Link href="/booking">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    padding: "16px 40px",
                                    background: "white",
                                    color: "#B76E79",
                                    border: "none",
                                    borderRadius: "9999px",
                                    fontSize: "1rem",
                                    fontWeight: 600,
                                    cursor: "pointer",
                                    fontFamily: "'Poppins', sans-serif",
                                    boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
                                }}
                            >
                                Book Appointment
                            </motion.button>
                        </Link>
                        <Link href="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    padding: "16px 40px",
                                    background: "transparent",
                                    color: "white",
                                    border: "2px solid white",
                                    borderRadius: "9999px",
                                    fontSize: "1rem",
                                    fontWeight: 600,
                                    cursor: "pointer",
                                    fontFamily: "'Poppins', sans-serif",
                                }}
                            >
                                Contact Us
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </SectionWrapper>
    );
}
