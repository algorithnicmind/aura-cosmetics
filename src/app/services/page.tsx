"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Link from "next/link";

const serviceCategories = [
    {
        category: "Bridal Packages",
        items: [
            { name: "HD Bridal Makeup", price: "₹15,000", desc: "Long-lasting high-definition finishes perfect for cameras." },
            { name: "Airbrush Bridal", price: "₹20,000", desc: "Flawless silicone-based airbrush technique that lasts 16+ hours." },
            { name: "Engagement/Sangeet", price: "₹10,000", desc: "Soft glam and elegant looks for pre-wedding functions." }
        ]
    },
    {
        category: "Party Makeup",
        items: [
            { name: "Event Glam", price: "₹5,000", desc: "Full face makeup with premium lashes and contouring." },
            { name: "Soft Natural Look", price: "₹3,500", desc: "Minimalist glowing skin and soft lip." },
            { name: "Editorial/Photoshoot", price: "₹8,000", desc: "Creative and bold looks customized for studio lighting." }
        ]
    },
    {
        category: "Hair Styling",
        items: [
            { name: "Bridal Updo", price: "₹4,000", desc: "Intricate traditional buns with floral arrangements." },
            { name: "Hollywood Waves", price: "₹3,000", desc: "Classic glamorous waves down the back." },
            { name: "Textured Braids", price: "₹2,500", desc: "Messy boho braids and twists." }
        ]
    }
];

export default function ServicesPage() {
    return (
        <SectionWrapper background="linear-gradient(135deg, #FFF8F5 0%, #FDF2F0 100%)">
            <div style={{ textAlign: "center", paddingTop: "6rem", paddingBottom: "4rem" }}>
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
                    Signature Menu
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
                    Our Services
                </motion.h1>
            </div>

            <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
                {serviceCategories.map((category, i) => (
                    <motion.div
                        key={category.category}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.2 }}
                        style={{ marginBottom: "4rem" }}
                    >
                        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", color: "#B76E79", borderBottom: "1px solid rgba(183, 110, 121, 0.2)", paddingBottom: "1rem", marginBottom: "2rem" }}>
                            {category.category}
                        </h2>
                        <div style={{ display: "grid", gap: "2rem" }}>
                            {category.items.map((item) => (
                                <div key={item.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem" }}>
                                    <div style={{ flex: 1, minWidth: "250px" }}>
                                        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", color: "#2D2D2D", fontWeight: 600, marginBottom: "0.5rem" }}>
                                            {item.name}
                                        </h3>
                                        <p style={{ color: "#8A8A8A", fontSize: "0.95rem", lineHeight: 1.6 }}>{item.desc}</p>
                                    </div>
                                    <div style={{ fontSize: "1.25rem", fontWeight: 700, color: "#D4A574" }}>
                                        {item.price}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            <div style={{ textAlign: "center", marginTop: "4rem" }}>
                <Link href="/booking">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary"
                    >
                        Book an Appointment ✨
                    </motion.button>
                </Link>
            </div>
        </SectionWrapper>
    );
}
