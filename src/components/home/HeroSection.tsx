"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                background:
                    "linear-gradient(135deg, #FDF2F0 0%, #FFF8F5 30%, #F5E6D3 70%, #F2C4C4 100%)",
                position: "relative",
                overflow: "hidden",
                padding: "0 2rem",
            }}
        >
            {/* Decorative Elements */}
            <div
                style={{
                    position: "absolute",
                    top: "10%",
                    right: "5%",
                    width: "400px",
                    height: "400px",
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle, rgba(183, 110, 121, 0.08) 0%, transparent 70%)",
                    animation: "float 6s ease-in-out infinite",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    bottom: "15%",
                    left: "3%",
                    width: "300px",
                    height: "300px",
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle, rgba(212, 165, 116, 0.08) 0%, transparent 70%)",
                    animation: "float 8s ease-in-out infinite reverse",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: "600px",
                    height: "600px",
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle, rgba(242, 196, 196, 0.06) 0%, transparent 70%)",
                    transform: "translate(-50%, -50%)",
                }}
            />

            {/* Small floating sparkles */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.4,
                    }}
                    style={{
                        position: "absolute",
                        top: `${15 + i * 12}%`,
                        left: `${10 + i * 15}%`,
                        fontSize: "0.8rem",
                        opacity: 0.4,
                    }}
                >
                    ✦
                </motion.div>
            ))}

            <div
                style={{
                    maxWidth: "1280px",
                    margin: "0 auto",
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "4rem",
                    alignItems: "center",
                    paddingTop: "5rem",
                }}
                className="hero-grid"
            >
                {/* Left Content */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <span
                            style={{
                                fontFamily: "'Inter', sans-serif",
                                fontSize: "0.8rem",
                                fontWeight: 500,
                                letterSpacing: "4px",
                                textTransform: "uppercase",
                                color: "#B76E79",
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                marginBottom: "1rem",
                            }}
                        >
                            <span
                                style={{
                                    width: "30px",
                                    height: "1px",
                                    background: "#B76E79",
                                    display: "inline-block",
                                }}
                            />
                            Premium Beauty
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                            fontWeight: 700,
                            color: "#2D2D2D",
                            lineHeight: 1.15,
                            marginBottom: "1.5rem",
                        }}
                    >
                        Where Beauty
                        <br />
                        Meets{" "}
                        <span
                            style={{
                                background:
                                    "linear-gradient(135deg, #B76E79 0%, #D4A574 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                fontStyle: "italic",
                            }}
                        >
                            Elegance
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        style={{
                            fontSize: "1.1rem",
                            color: "#8A8A8A",
                            lineHeight: 1.8,
                            marginBottom: "2.5rem",
                            maxWidth: "480px",
                        }}
                    >
                        Discover luxury beauty services, expert makeup artistry, and
                        premium skincare solutions crafted to unveil your most radiant
                        self.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
                    >
                        <Link href="/booking">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-primary"
                            >
                                Book Now ✨
                            </motion.button>
                        </Link>
                        <Link href="/shop">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-secondary"
                            >
                                Explore Shop
                            </motion.button>
                        </Link>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        style={{
                            marginTop: "3rem",
                            display: "flex",
                            gap: "2rem",
                            alignItems: "center",
                            flexWrap: "wrap",
                        }}
                    >
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            <span style={{ fontSize: "1.2rem" }}>⭐</span>
                            <div>
                                <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "#2D2D2D" }}>
                                    4.9 Rating
                                </p>
                                <p style={{ fontSize: "0.7rem", color: "#8A8A8A" }}>
                                    500+ Reviews
                                </p>
                            </div>
                        </div>
                        <div
                            style={{
                                width: "1px",
                                height: "30px",
                                background: "#E8D5C4",
                            }}
                        />
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            <span style={{ fontSize: "1.2rem" }}>💎</span>
                            <div>
                                <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "#2D2D2D" }}>
                                    Premium
                                </p>
                                <p style={{ fontSize: "0.7rem", color: "#8A8A8A" }}>
                                    Certified Artists
                                </p>
                            </div>
                        </div>
                        <div
                            style={{
                                width: "1px",
                                height: "30px",
                                background: "#E8D5C4",
                            }}
                        />
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            <span style={{ fontSize: "1.2rem" }}>🌸</span>
                            <div>
                                <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "#2D2D2D" }}>
                                    Organic
                                </p>
                                <p style={{ fontSize: "0.7rem", color: "#8A8A8A" }}>
                                    Products Used
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Side - Hero Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: 50 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    style={{
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                    }}
                    className="hero-visual"
                >
                    {/* Main Image Container */}
                    <div
                        style={{
                            position: "relative",
                            width: "420px",
                            height: "520px",
                            borderRadius: "200px 200px 30px 30px",
                            overflow: "hidden",
                            background:
                                "linear-gradient(135deg, #E8D5C4 0%, #F2C4C4 100%)",
                            boxShadow: "0 20px 60px rgba(183, 110, 121, 0.2)",
                        }}
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=1000&auto=format&fit=crop"
                            alt="Beautiful bride makeup"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            style={{ objectFit: "cover" }}
                            priority
                        />
                    </div>

                    {/* Floating Card 1 */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        style={{
                            position: "absolute",
                            top: "15%",
                            left: "-10%",
                            padding: "1rem 1.5rem",
                            background: "rgba(255,255,255,0.9)",
                            backdropFilter: "blur(10px)",
                            borderRadius: "16px",
                            boxShadow: "0 8px 30px rgba(183, 110, 121, 0.15)",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.75rem",
                        }}
                    >
                        <span style={{ fontSize: "1.5rem" }}>💅</span>
                        <div>
                            <p
                                style={{
                                    fontSize: "0.8rem",
                                    fontWeight: 600,
                                    color: "#2D2D2D",
                                }}
                            >
                                Bridal Makeup
                            </p>
                            <p style={{ fontSize: "0.7rem", color: "#B76E79" }}>Book Now</p>
                        </div>
                    </motion.div>

                    {/* Floating Card 2 */}
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        style={{
                            position: "absolute",
                            bottom: "20%",
                            right: "-5%",
                            padding: "1rem 1.5rem",
                            background: "rgba(255,255,255,0.9)",
                            backdropFilter: "blur(10px)",
                            borderRadius: "16px",
                            boxShadow: "0 8px 30px rgba(183, 110, 121, 0.15)",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.75rem",
                        }}
                    >
                        <span style={{ fontSize: "1.5rem" }}>⭐</span>
                        <div>
                            <p
                                style={{
                                    fontSize: "0.8rem",
                                    fontWeight: 600,
                                    color: "#2D2D2D",
                                }}
                            >
                                500+ Happy Clients
                            </p>
                            <p style={{ fontSize: "0.7rem", color: "#D4A574" }}>
                                ★★★★★
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1.5, y: { duration: 2, repeat: Infinity } }}
                style={{
                    position: "absolute",
                    bottom: "2rem",
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0.5rem",
                }}
            >
                <span
                    style={{
                        fontSize: "0.7rem",
                        color: "#8A8A8A",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                    }}
                >
                    Scroll
                </span>
                <div
                    style={{
                        width: "1px",
                        height: "30px",
                        background:
                            "linear-gradient(to bottom, #B76E79, transparent)",
                    }}
                />
            </motion.div>

            <style jsx>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            padding-top: 7rem !important;
            gap: 2rem !important;
          }
          .hero-visual {
            display: none !important;
          }
        }
      `}</style>
        </section>
    );
}
