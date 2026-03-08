"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background:
                            "linear-gradient(135deg, #FFF8F5 0%, #FDF2F0 50%, #F5E6D3 100%)",
                        zIndex: 9999,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "1.5rem",
                    }}
                >
                    {/* Logo */}
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        style={{
                            width: "80px",
                            height: "80px",
                            borderRadius: "50%",
                            background:
                                "linear-gradient(135deg, #B76E79 0%, #D4A574 100%)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 8px 40px rgba(183, 110, 121, 0.3)",
                        }}
                    >
                        <span
                            style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: "2.5rem",
                                fontWeight: 700,
                                color: "white",
                            }}
                        >
                            A
                        </span>
                    </motion.div>

                    {/* Brand Name */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    >
                        <h1
                            style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: "1.8rem",
                                fontWeight: 700,
                                color: "#2D2D2D",
                                letterSpacing: "3px",
                            }}
                        >
                            AURA
                        </h1>
                        <p
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "0.75rem",
                                color: "#B76E79",
                                letterSpacing: "5px",
                                textAlign: "center",
                                textTransform: "uppercase",
                                marginTop: "0.25rem",
                            }}
                        >
                            Cosmetics
                        </p>
                    </motion.div>

                    {/* Loading Bar */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        style={{
                            width: "120px",
                            height: "3px",
                            background: "rgba(183, 110, 121, 0.15)",
                            borderRadius: "10px",
                            overflow: "hidden",
                            marginTop: "1rem",
                        }}
                    >
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: "100%" }}
                            transition={{
                                repeat: Infinity,
                                duration: 1,
                                ease: "easeInOut",
                            }}
                            style={{
                                width: "60%",
                                height: "100%",
                                background:
                                    "linear-gradient(90deg, transparent, #B76E79, transparent)",
                                borderRadius: "10px",
                            }}
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
