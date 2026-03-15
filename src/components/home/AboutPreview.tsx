"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function AboutPreview() {
    return (
        <SectionWrapper
            background="linear-gradient(135deg, #FDF2F0 0%, #FFF8F5 100%)"
        >
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "4rem",
                    alignItems: "center",
                }}
                className="about-grid"
            >
                {/* Left Visual */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ position: "relative" }}
                >
                    <div
                        style={{
                            width: "100%",
                            maxWidth: "450px",
                            aspectRatio: "4/5",
                            borderRadius: "20px",
                            background:
                                "linear-gradient(135deg, #E8D5C4 0%, #B76E79 50%, #D4A574 100%)",
                            position: "relative",
                            overflow: "hidden",
                            boxShadow: "0 20px 60px rgba(183, 110, 121, 0.2)",
                        }}
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=800&auto=format&fit=crop"
                            alt="Makeup Artist at work"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            style={{ objectFit: "cover" }}
                        />
                    </div>

                    {/* Experience Badge */}
                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        style={{
                            position: "absolute",
                            bottom: "10%",
                            right: "-5%",
                            background: "white",
                            padding: "1.25rem 1.5rem",
                            borderRadius: "16px",
                            boxShadow: "0 8px 30px rgba(183, 110, 121, 0.15)",
                            textAlign: "center",
                        }}
                    >
                        <p
                            style={{
                                fontSize: "1.8rem",
                                fontWeight: 700,
                                fontFamily: "'Playfair Display', serif",
                                background:
                                    "linear-gradient(135deg, #B76E79, #D4A574)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            8+
                        </p>
                        <p
                            style={{
                                fontSize: "0.7rem",
                                color: "#8A8A8A",
                                fontWeight: 500,
                                letterSpacing: "1px",
                                textTransform: "uppercase",
                            }}
                        >
                            Years Experience
                        </p>
                    </motion.div>
                </motion.div>

                {/* Right Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span
                        style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "0.82rem",
                            fontWeight: 500,
                            letterSpacing: "3px",
                            textTransform: "uppercase",
                            color: "#B76E79",
                            display: "block",
                            marginBottom: "0.75rem",
                        }}
                    >
                        About Us
                    </span>

                    <h2
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                            fontWeight: 700,
                            color: "#2D2D2D",
                            marginBottom: "1.25rem",
                            lineHeight: 1.3,
                        }}
                    >
                        The Art of Beauty,{" "}
                        <span
                            style={{
                                background:
                                    "linear-gradient(135deg, #B76E79, #D4A574)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                fontStyle: "italic",
                            }}
                        >
                            Perfected
                        </span>
                    </h2>

                    <p
                        style={{
                            fontSize: "1rem",
                            color: "#8A8A8A",
                            lineHeight: 1.8,
                            marginBottom: "1.5rem",
                        }}
                    >
                        With over 8 years of experience in the beauty industry, Aura
                        Cosmetics has transformed thousands of faces and lives. Our founder,
                        a certified makeup artist and beauty influencer, brings passion,
                        precision, and premium techniques to every client.
                    </p>

                    <p
                        style={{
                            fontSize: "1rem",
                            color: "#8A8A8A",
                            lineHeight: 1.8,
                            marginBottom: "2rem",
                        }}
                    >
                        From intimate bridal sessions to grand celebrity events, we deliver
                        nothing short of perfection. Every stroke, every shade, every detail
                        is crafted to enhance your natural beauty.
                    </p>

                    {/* Highlight Points */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "1rem",
                            marginBottom: "2rem",
                        }}
                    >
                        {[
                            "Certified MAC Artist",
                            "500+ Happy Brides",
                            "Premium Products",
                            "Award Winning",
                        ].map((item, i) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 + 0.3 }}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    fontSize: "0.9rem",
                                    color: "#4A4A4A",
                                }}
                            >
                                <span
                                    style={{
                                        width: "8px",
                                        height: "8px",
                                        borderRadius: "50%",
                                        background:
                                            "linear-gradient(135deg, #B76E79, #D4A574)",
                                        flexShrink: 0,
                                    }}
                                />
                                {item}
                            </motion.div>
                        ))}
                    </div>

                    <Link href="/about">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-primary"
                        >
                            Our Story →
                        </motion.button>
                    </Link>
                </motion.div>
            </div>

            <style jsx>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
        </SectionWrapper>
    );
}
