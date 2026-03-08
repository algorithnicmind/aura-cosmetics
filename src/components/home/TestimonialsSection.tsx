"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

const testimonials = [
    {
        id: 1,
        name: "Priya Sharma",
        role: "Bride",
        text: "Aura made my wedding day absolutely magical! The makeup lasted all day and I felt like a queen. Every detail was perfect - from the subtle contouring to the stunning eye look. Highly recommend!",
        rating: 5,
        image: "👰",
    },
    {
        id: 2,
        name: "Ananya Patel",
        role: "Fashion Blogger",
        text: "I've worked with many MUAs but Aura is on another level. The attention to detail, the product quality, and the final result is always Instagram-worthy. My go-to for every shoot!",
        rating: 5,
        image: "💫",
    },
    {
        id: 3,
        name: "Meera Kapoor",
        role: "Corporate Professional",
        text: "The skin consultation changed my entire routine! My skin has never looked better. The team is knowledgeable, patient, and truly cares about your skin health. Worth every penny.",
        rating: 5,
        image: "✨",
    },
    {
        id: 4,
        name: "Riya Desai",
        role: "Model",
        text: "Working with Aura Cosmetics for my portfolio shoot was an incredible experience. They understood my vision perfectly and delivered beyond expectations. Truly professional!",
        rating: 5,
        image: "🌟",
    },
];

export default function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
    };

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
                    Testimonials
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
                    What Our Clients Say
                </motion.h2>
            </div>

            <div
                style={{
                    maxWidth: "700px",
                    margin: "0 auto",
                    position: "relative",
                    minHeight: "320px",
                }}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.4 }}
                        style={{
                            background:
                                "linear-gradient(145deg, #FFFFFF 0%, #FFF8F5 100%)",
                            borderRadius: "24px",
                            padding: "3rem",
                            textAlign: "center",
                            border: "1px solid rgba(240, 230, 224, 0.5)",
                            boxShadow: "0 8px 40px rgba(183, 110, 121, 0.08)",
                        }}
                    >
                        {/* Avatar */}
                        <div
                            style={{
                                width: "70px",
                                height: "70px",
                                borderRadius: "50%",
                                background:
                                    "linear-gradient(135deg, #B76E79, #D4A574)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "2rem",
                                margin: "0 auto 1.5rem",
                                boxShadow: "0 4px 20px rgba(183, 110, 121, 0.2)",
                            }}
                        >
                            {testimonials[currentIndex].image}
                        </div>

                        {/* Stars */}
                        <div style={{ marginBottom: "1.25rem" }}>
                            {"⭐".repeat(testimonials[currentIndex].rating)}
                        </div>

                        {/* Quote */}
                        <p
                            style={{
                                fontSize: "1.05rem",
                                color: "#4A4A4A",
                                lineHeight: 1.8,
                                fontStyle: "italic",
                                marginBottom: "1.5rem",
                            }}
                        >
                            &ldquo;{testimonials[currentIndex].text}&rdquo;
                        </p>

                        {/* Name */}
                        <h4
                            style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: "1.1rem",
                                fontWeight: 600,
                                color: "#2D2D2D",
                            }}
                        >
                            {testimonials[currentIndex].name}
                        </h4>
                        <p
                            style={{
                                fontSize: "0.85rem",
                                color: "#B76E79",
                                fontWeight: 500,
                            }}
                        >
                            {testimonials[currentIndex].role}
                        </p>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "1rem",
                        marginTop: "2rem",
                        alignItems: "center",
                    }}
                >
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={prevTestimonial}
                        style={{
                            width: "44px",
                            height: "44px",
                            borderRadius: "50%",
                            background: "white",
                            border: "1px solid #F0E6E0",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            fontSize: "1.2rem",
                            color: "#B76E79",
                            boxShadow: "0 2px 10px rgba(183, 110, 121, 0.1)",
                        }}
                    >
                        ←
                    </motion.button>

                    <div style={{ display: "flex", gap: "0.5rem" }}>
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                style={{
                                    width: i === currentIndex ? "24px" : "8px",
                                    height: "8px",
                                    borderRadius: "9999px",
                                    background:
                                        i === currentIndex
                                            ? "linear-gradient(135deg, #B76E79, #D4A574)"
                                            : "#E8D5C4",
                                    border: "none",
                                    cursor: "pointer",
                                    transition: "all 0.3s ease",
                                }}
                            />
                        ))}
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={nextTestimonial}
                        style={{
                            width: "44px",
                            height: "44px",
                            borderRadius: "50%",
                            background:
                                "linear-gradient(135deg, #B76E79 0%, #D4A574 100%)",
                            border: "none",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            fontSize: "1.2rem",
                            color: "white",
                            boxShadow: "0 4px 15px rgba(183, 110, 121, 0.3)",
                        }}
                    >
                        →
                    </motion.button>
                </div>
            </div>
        </SectionWrapper>
    );
}
