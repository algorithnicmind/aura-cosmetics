"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";

const galleryItems = [
    { image: "https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?q=80&w=800&auto=format&fit=crop", label: "Bridal" },
    { image: "https://images.unsplash.com/photo-1512496115851-a1c8eacb9136?q=80&w=800&auto=format&fit=crop", label: "Party" },
    { image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop", label: "Editorial" },
    { image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=800&auto=format&fit=crop", label: "Glam" },
    { image: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=800&auto=format&fit=crop", label: "Celebrity" },
    { image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop", label: "Natural" },
];

export default function GalleryPreview() {
    return (
        <SectionWrapper
            background="linear-gradient(135deg, #FDF2F0 0%, #FFF8F5 100%)"
        >
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
                    Our Portfolio
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
                    Our Stunning Work
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
                    A glimpse into our world of beauty transformations
                </motion.p>
            </div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gridTemplateRows: "repeat(2, 240px)",
                    gap: "1.25rem",
                }}
                className="gallery-grid"
            >
                {galleryItems.map((item, i) => (
                    <motion.div
                        key={item.label}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        whileHover={{ scale: 1.03 }}
                        style={{
                            borderRadius: "16px",
                            overflow: "hidden",
                            cursor: "pointer",
                            position: "relative",
                            gridColumn: i === 0 ? "span 2" : "span 1",
                            gridRow: i === 0 ? "span 1" : "span 1",
                        }}
                    >
                        <Image
                            src={item.image}
                            alt={item.label}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                            className="gallery-img"
                        />
                        <div style={{
                            position: "absolute",
                            inset: 0,
                            background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)",
                            display: "flex",
                            alignItems: "flex-end",
                            padding: "1.5rem"
                        }}>
                            <span
                                style={{
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: "1.2rem",
                                    color: "white",
                                    fontWeight: 600,
                                }}
                            >
                                {item.label}
                            </span>
                        </div>

                        {/* Hover Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            style={{
                                position: "absolute",
                                inset: 0,
                                background: "rgba(45, 45, 45, 0.5)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: "16px",
                            }}
                        >
                            <span
                                style={{
                                    color: "white",
                                    fontSize: "0.9rem",
                                    fontWeight: 500,
                                    letterSpacing: "1px",
                                }}
                            >
                                View →
                            </span>
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                style={{ textAlign: "center", marginTop: "3rem" }}
            >
                <Link href="/gallery">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-secondary"
                    >
                        View Full Gallery
                    </motion.button>
                </Link>
            </motion.div>

            <style jsx>{`
        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: 1fr 1fr !important;
            grid-template-rows: repeat(3, 180px) !important;
          }
        }
        @media (max-width: 480px) {
          .gallery-grid {
            grid-template-columns: 1fr !important;
            grid-template-rows: repeat(6, 160px) !important;
          }
        }
        .gallery-grid > div:hover .gallery-img {
            transform: scale(1.05);
        }
      `}</style>
        </SectionWrapper>
    );
}
