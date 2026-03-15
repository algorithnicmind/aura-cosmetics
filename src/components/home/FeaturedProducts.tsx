"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";

const products = [
    {
        id: 1,
        name: "Rose Glow Serum",
        category: "Skincare",
        price: 1299,
        originalPrice: 1599,
        rating: 4.8,
        reviews: 124,
        badge: "Bestseller",
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 2,
        name: "Velvet Matte Lipstick Set",
        category: "Makeup",
        price: 2499,
        originalPrice: 2999,
        rating: 4.9,
        reviews: 89,
        badge: "New",
        image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 3,
        name: "Radiance Foundation",
        category: "Makeup",
        price: 1899,
        originalPrice: 2199,
        rating: 4.7,
        reviews: 156,
        badge: "Popular",
        image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 4,
        name: "Hydrating Face Mask",
        category: "Skincare",
        price: 899,
        originalPrice: 1099,
        rating: 4.6,
        reviews: 78,
        badge: "Sale",
        image: "https://images.unsplash.com/photo-1567683930869-70bd9d8c47ff?q=80&w=800&auto=format&fit=crop",
    },
];

export default function FeaturedProducts() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

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
                    Our Products
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
                    Shop Bestsellers
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
                    Curated beauty essentials loved by thousands of beauty enthusiasts
                </motion.p>
            </div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                    gap: "2rem",
                }}
            >
                {products.map((product, i) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.15 }}
                        onMouseEnter={() => setHoveredId(product.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        style={{
                            background: "white",
                            borderRadius: "20px",
                            overflow: "hidden",
                            border: "1px solid rgba(240, 230, 224, 0.5)",
                            boxShadow:
                                hoveredId === product.id
                                    ? "0 12px 40px rgba(183, 110, 121, 0.15)"
                                    : "0 4px 20px rgba(183, 110, 121, 0.06)",
                            transform:
                                hoveredId === product.id ? "translateY(-8px)" : "none",
                            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                            cursor: "pointer",
                        }}
                    >
                        {/* Product Image Area */}
                        <div
                            style={{
                                height: "220px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                position: "relative",
                                overflow: "hidden"
                            }}
                        >
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                style={{ objectFit: "cover" }}
                            />

                            {/* Badge */}
                            <span
                                style={{
                                    position: "absolute",
                                    top: "1rem",
                                    left: "1rem",
                                    padding: "4px 12px",
                                    borderRadius: "9999px",
                                    background: "rgba(255,255,255,0.9)",
                                    fontSize: "0.7rem",
                                    fontWeight: 600,
                                    color: "#B76E79",
                                    letterSpacing: "0.5px",
                                }}
                            >
                                {product.badge}
                            </span>

                            {/* Wishlist Button */}
                            <motion.button
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                style={{
                                    position: "absolute",
                                    top: "1rem",
                                    right: "1rem",
                                    width: "36px",
                                    height: "36px",
                                    borderRadius: "50%",
                                    background: "rgba(255,255,255,0.9)",
                                    border: "none",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "1rem",
                                    cursor: "pointer",
                                }}
                            >
                                ♡
                            </motion.button>

                            {/* Quick Add */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{
                                    opacity: hoveredId === product.id ? 1 : 0,
                                    y: hoveredId === product.id ? 0 : 20,
                                }}
                                transition={{ duration: 0.3 }}
                                style={{
                                    position: "absolute",
                                    bottom: "1rem",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                }}
                            >
                                <button
                                    style={{
                                        padding: "10px 28px",
                                        background:
                                            "linear-gradient(135deg, #B76E79 0%, #D4A574 100%)",
                                        color: "white",
                                        border: "none",
                                        borderRadius: "9999px",
                                        fontSize: "0.8rem",
                                        fontWeight: 500,
                                        cursor: "pointer",
                                        fontFamily: "'Poppins', sans-serif",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    Add to Cart 🛒
                                </button>
                            </motion.div>
                        </div>

                        {/* Product Info */}
                        <div style={{ padding: "1.5rem" }}>
                            <span
                                style={{
                                    fontSize: "0.75rem",
                                    color: "#B76E79",
                                    fontWeight: 500,
                                    letterSpacing: "1px",
                                    textTransform: "uppercase",
                                }}
                            >
                                {product.category}
                            </span>

                            <h3
                                style={{
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: "1.1rem",
                                    fontWeight: 600,
                                    color: "#2D2D2D",
                                    margin: "0.5rem 0",
                                }}
                            >
                                {product.name}
                            </h3>

                            {/* Rating */}
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.25rem",
                                    marginBottom: "0.75rem",
                                }}
                            >
                                <span style={{ color: "#D4A574", fontSize: "0.8rem" }}>
                                    {"★".repeat(Math.floor(product.rating))}
                                </span>
                                <span
                                    style={{
                                        fontSize: "0.8rem",
                                        color: "#8A8A8A",
                                        marginLeft: "0.25rem",
                                    }}
                                >
                                    {product.rating} ({product.reviews})
                                </span>
                            </div>

                            {/* Price */}
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.75rem",
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: "1.2rem",
                                        fontWeight: 700,
                                        color: "#2D2D2D",
                                    }}
                                >
                                    ₹{product.price.toLocaleString()}
                                </span>
                                <span
                                    style={{
                                        fontSize: "0.9rem",
                                        color: "#8A8A8A",
                                        textDecoration: "line-through",
                                    }}
                                >
                                    ₹{product.originalPrice.toLocaleString()}
                                </span>
                                <span
                                    style={{
                                        fontSize: "0.75rem",
                                        color: "#4CAF50",
                                        fontWeight: 600,
                                    }}
                                >
                                    {Math.round(
                                        ((product.originalPrice - product.price) /
                                            product.originalPrice) *
                                        100
                                    )}
                                    % OFF
                                </span>
                            </div>
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
                <Link href="/shop">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary"
                    >
                        View All Products ✨
                    </motion.button>
                </Link>
            </motion.div>
        </SectionWrapper>
    );
}
