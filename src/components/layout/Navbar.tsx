"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/shop", label: "Shop" },
    { href: "/gallery", label: "Gallery" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMobileMenuOpen]);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    padding: isScrolled ? "0.75rem 0" : "1.25rem 0",
                    background: isScrolled
                        ? "rgba(255, 248, 245, 0.95)"
                        : "transparent",
                    backdropFilter: isScrolled ? "blur(20px)" : "none",
                    borderBottom: isScrolled
                        ? "1px solid rgba(240, 230, 224, 0.5)"
                        : "none",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
            >
                <div
                    style={{
                        maxWidth: "1280px",
                        margin: "0 auto",
                        padding: "0 2rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    {/* Logo */}
                    <Link href="/" style={{ textDecoration: "none" }}>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
                        >
                            <div
                                style={{
                                    width: "40px",
                                    height: "40px",
                                    borderRadius: "50%",
                                    background:
                                        "linear-gradient(135deg, #B76E79 0%, #D4A574 100%)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "1.2rem",
                                    fontFamily: "'Playfair Display', serif",
                                    fontWeight: 700,
                                    color: "white",
                                }}
                            >
                                A
                            </div>
                            <span
                                style={{
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: "1.5rem",
                                    fontWeight: 700,
                                    color: "#2D2D2D",
                                    letterSpacing: "1px",
                                }}
                            >
                                Aura
                            </span>
                        </motion.div>
                    </Link>

                    {/* Desktop Nav Links */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "2rem",
                        }}
                        className="desktop-nav"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                style={{
                                    fontSize: "0.9rem",
                                    fontWeight: 500,
                                    color: "#4A4A4A",
                                    position: "relative",
                                    letterSpacing: "0.5px",
                                    transition: "color 0.3s ease",
                                }}
                                onMouseEnter={(e) =>
                                    (e.currentTarget.style.color = "#B76E79")
                                }
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.color = "#4A4A4A")
                                }
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Buttons Desktop */}
                    <div
                        style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                        className="desktop-nav"
                    >
                        <Link href="/booking">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    padding: "10px 24px",
                                    background:
                                        "linear-gradient(135deg, #B76E79 0%, #D4A574 100%)",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "9999px",
                                    fontSize: "0.85rem",
                                    fontWeight: 500,
                                    cursor: "pointer",
                                    fontFamily: "'Poppins', sans-serif",
                                    letterSpacing: "0.5px",
                                }}
                            >
                                Book Now ✨
                            </motion.button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="mobile-menu-btn"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        style={{
                            display: "none",
                            flexDirection: "column",
                            gap: "5px",
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            padding: "5px",
                            zIndex: 1001,
                        }}
                    >
                        <motion.span
                            animate={
                                isMobileMenuOpen
                                    ? { rotate: 45, y: 8 }
                                    : { rotate: 0, y: 0 }
                            }
                            style={{
                                width: "24px",
                                height: "2px",
                                background: "#2D2D2D",
                                borderRadius: "2px",
                                display: "block",
                            }}
                        />
                        <motion.span
                            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                            style={{
                                width: "18px",
                                height: "2px",
                                background: "#2D2D2D",
                                borderRadius: "2px",
                                display: "block",
                            }}
                        />
                        <motion.span
                            animate={
                                isMobileMenuOpen
                                    ? { rotate: -45, y: -8 }
                                    : { rotate: 0, y: 0 }
                            }
                            style={{
                                width: "24px",
                                height: "2px",
                                background: "#2D2D2D",
                                borderRadius: "2px",
                                display: "block",
                            }}
                        />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background:
                                "linear-gradient(135deg, #FFF8F5 0%, #FDF2F0 50%, #F5E6D3 100%)",
                            zIndex: 999,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "2rem",
                        }}
                    >
                        {navLinks.map((link, i) => (
                            <motion.div
                                key={link.href}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.08 + 0.2 }}
                            >
                                <Link
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    style={{
                                        fontSize: "1.5rem",
                                        fontFamily: "'Playfair Display', serif",
                                        fontWeight: 600,
                                        color: "#2D2D2D",
                                    }}
                                >
                                    {link.label}
                                </Link>
                            </motion.div>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                        >
                            <Link href="/booking" onClick={() => setIsMobileMenuOpen(false)}>
                                <button
                                    style={{
                                        marginTop: "1rem",
                                        padding: "14px 40px",
                                        background:
                                            "linear-gradient(135deg, #B76E79 0%, #D4A574 100%)",
                                        color: "white",
                                        border: "none",
                                        borderRadius: "9999px",
                                        fontSize: "1rem",
                                        fontWeight: 500,
                                        cursor: "pointer",
                                        fontFamily: "'Poppins', sans-serif",
                                    }}
                                >
                                    Book Now ✨
                                </button>
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx global>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
        </>
    );
}
