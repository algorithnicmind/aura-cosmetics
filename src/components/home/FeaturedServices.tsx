"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";

const services = [
    {
        icon: "👰",
        title: "Bridal Makeup",
        description:
            "Transform into the most beautiful bride with our expert bridal artistry. HD & Airbrush techniques.",
        price: "From ₹15,000",
        color: "#B76E79",
    },
    {
        icon: "🎉",
        title: "Party Makeup",
        description:
            "Glamorous looks for every occasion. From cocktails to red carpet events.",
        price: "From ₹5,000",
        color: "#D4A574",
    },
    {
        icon: "✨",
        title: "Skin Consultation",
        description:
            "Personalized skincare analysis and routine recommendations by certified dermatologists.",
        price: "From ₹2,000",
        color: "#E8C9A0",
    },
    {
        icon: "💇‍♀️",
        title: "Hair Styling",
        description:
            "Trendy hairstyles, color treatments, and hair care services by top stylists.",
        price: "From ₹3,000",
        color: "#F2C4C4",
    },
];

export default function FeaturedServices() {
    return (
        <SectionWrapper background="var(--color-warm-white)">
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
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
                    What We Offer
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "clamp(2rem, 4vw, 3rem)",
                        fontWeight: 700,
                        color: "#2D2D2D",
                        marginBottom: "1rem",
                    }}
                >
                    Our Premium Services
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{
                        fontSize: "1.05rem",
                        color: "#8A8A8A",
                        maxWidth: "600px",
                        margin: "0 auto",
                    }}
                >
                    Experience luxury beauty services crafted with premium products and
                    expert techniques
                </motion.p>
            </div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
                    gap: "2rem",
                }}
            >
                {services.map((service, i) => (
                    <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.15 }}
                        whileHover={{ y: -8 }}
                        style={{
                            background: "linear-gradient(145deg, #FFFFFF 0%, #FFF8F5 100%)",
                            borderRadius: "20px",
                            padding: "2.5rem 2rem",
                            border: "1px solid rgba(240, 230, 224, 0.5)",
                            boxShadow: "0 4px 20px rgba(183, 110, 121, 0.06)",
                            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                            cursor: "pointer",
                            position: "relative",
                            overflow: "hidden",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow =
                                "0 12px 40px rgba(183, 110, 121, 0.15)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow =
                                "0 4px 20px rgba(183, 110, 121, 0.06)";
                        }}
                    >
                        {/* Accent Line */}
                        <div
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "3px",
                                background: `linear-gradient(90deg, ${service.color}, transparent)`,
                            }}
                        />

                        <div
                            style={{
                                width: "60px",
                                height: "60px",
                                borderRadius: "16px",
                                background: `${service.color}15`,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "1.8rem",
                                marginBottom: "1.5rem",
                            }}
                        >
                            {service.icon}
                        </div>

                        <h3
                            style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: "1.25rem",
                                fontWeight: 600,
                                color: "#2D2D2D",
                                marginBottom: "0.75rem",
                            }}
                        >
                            {service.title}
                        </h3>

                        <p
                            style={{
                                fontSize: "0.9rem",
                                color: "#8A8A8A",
                                lineHeight: 1.7,
                                marginBottom: "1.5rem",
                            }}
                        >
                            {service.description}
                        </p>

                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <span
                                style={{
                                    fontSize: "1rem",
                                    fontWeight: 600,
                                    color: service.color,
                                }}
                            >
                                {service.price}
                            </span>
                            <motion.span
                                whileHover={{ x: 5 }}
                                style={{
                                    fontSize: "0.85rem",
                                    color: "#B76E79",
                                    fontWeight: 500,
                                    cursor: "pointer",
                                }}
                            >
                                Learn More →
                            </motion.span>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                style={{ textAlign: "center", marginTop: "3rem" }}
            >
                <Link href="/services">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-secondary"
                    >
                        View All Services
                    </motion.button>
                </Link>
            </motion.div>
        </SectionWrapper>
    );
}
