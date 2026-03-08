"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const footerLinks = {
    services: [
        { label: "Bridal Makeup", href: "/services#bridal" },
        { label: "Party Makeup", href: "/services#party" },
        { label: "Skin Consultation", href: "/services#skin" },
        { label: "Hair Styling", href: "/services#hair" },
    ],
    quickLinks: [
        { label: "About Us", href: "/about" },
        { label: "Gallery", href: "/gallery" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
    ],
    legal: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms & Conditions", href: "/terms" },
        { label: "Cookie Policy", href: "/cookies" },
    ],
};

const socialLinks = [
    { label: "Instagram", icon: "📸", href: "https://instagram.com" },
    { label: "YouTube", icon: "🎬", href: "https://youtube.com" },
    { label: "Pinterest", icon: "📌", href: "https://pinterest.com" },
    { label: "TikTok", icon: "🎵", href: "https://tiktok.com" },
];

export default function Footer() {
    return (
        <footer
            style={{
                background: "linear-gradient(180deg, #FFF8F5 0%, #F5E6D3 100%)",
                borderTop: "1px solid rgba(240, 230, 224, 0.5)",
            }}
        >
            {/* Newsletter Section */}
            <div
                style={{
                    maxWidth: "1280px",
                    margin: "0 auto",
                    padding: "4rem 2rem 0",
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{
                        background:
                            "linear-gradient(135deg, #B76E79 0%, #D4A574 100%)",
                        borderRadius: "20px",
                        padding: "3rem",
                        textAlign: "center",
                        marginBottom: "4rem",
                        position: "relative",
                        overflow: "hidden",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            top: "-50%",
                            right: "-10%",
                            width: "300px",
                            height: "300px",
                            borderRadius: "50%",
                            background: "rgba(255,255,255,0.1)",
                        }}
                    />
                    <h3
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "clamp(1.5rem, 3vw, 2rem)",
                            color: "white",
                            marginBottom: "0.75rem",
                            position: "relative",
                        }}
                    >
                        Join Our Beauty Circle ✨
                    </h3>
                    <p
                        style={{
                            color: "rgba(255,255,255,0.85)",
                            marginBottom: "1.5rem",
                            fontSize: "0.95rem",
                            position: "relative",
                        }}
                    >
                        Get exclusive beauty tips, offers, and early access to new services
                    </p>
                    <div
                        style={{
                            display: "flex",
                            gap: "0.75rem",
                            justifyContent: "center",
                            flexWrap: "wrap",
                            position: "relative",
                        }}
                    >
                        <input
                            type="email"
                            placeholder="Enter your email"
                            style={{
                                padding: "14px 24px",
                                borderRadius: "9999px",
                                border: "none",
                                outline: "none",
                                fontSize: "0.9rem",
                                width: "300px",
                                maxWidth: "100%",
                                fontFamily: "'Poppins', sans-serif",
                                background: "rgba(255,255,255,0.95)",
                            }}
                        />
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                padding: "14px 32px",
                                borderRadius: "9999px",
                                border: "2px solid white",
                                background: "transparent",
                                color: "white",
                                fontSize: "0.9rem",
                                fontWeight: 600,
                                cursor: "pointer",
                                fontFamily: "'Poppins', sans-serif",
                                letterSpacing: "0.5px",
                            }}
                        >
                            Subscribe
                        </motion.button>
                    </div>
                </motion.div>

                {/* Footer Grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                        gap: "3rem",
                        paddingBottom: "3rem",
                    }}
                >
                    {/* Brand Column */}
                    <div>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                marginBottom: "1rem",
                            }}
                        >
                            <div
                                style={{
                                    width: "36px",
                                    height: "36px",
                                    borderRadius: "50%",
                                    background:
                                        "linear-gradient(135deg, #B76E79 0%, #D4A574 100%)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "1rem",
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
                                    fontSize: "1.3rem",
                                    fontWeight: 700,
                                    color: "#2D2D2D",
                                }}
                            >
                                Aura Cosmetics
                            </span>
                        </div>
                        <p
                            style={{
                                fontSize: "0.9rem",
                                color: "#8A8A8A",
                                lineHeight: 1.7,
                                marginBottom: "1.5rem",
                            }}
                        >
                            Where beauty meets elegance. Premium makeup services, skincare
                            consultations, and luxury cosmetics curated for the modern woman.
                        </p>
                        <div style={{ display: "flex", gap: "0.75rem" }}>
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.15, y: -3 }}
                                    style={{
                                        width: "40px",
                                        height: "40px",
                                        borderRadius: "50%",
                                        background: "rgba(183, 110, 121, 0.1)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "1.1rem",
                                        transition: "background 0.3s ease",
                                    }}
                                    title={social.label}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h4
                            style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: "1.1rem",
                                fontWeight: 600,
                                color: "#2D2D2D",
                                marginBottom: "1.25rem",
                            }}
                        >
                            Our Services
                        </h4>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                            {footerLinks.services.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    style={{
                                        fontSize: "0.9rem",
                                        color: "#8A8A8A",
                                        transition: "color 0.3s ease",
                                    }}
                                    onMouseEnter={(e) =>
                                        (e.currentTarget.style.color = "#B76E79")
                                    }
                                    onMouseLeave={(e) =>
                                        (e.currentTarget.style.color = "#8A8A8A")
                                    }
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links Column */}
                    <div>
                        <h4
                            style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: "1.1rem",
                                fontWeight: 600,
                                color: "#2D2D2D",
                                marginBottom: "1.25rem",
                            }}
                        >
                            Quick Links
                        </h4>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                            {footerLinks.quickLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    style={{
                                        fontSize: "0.9rem",
                                        color: "#8A8A8A",
                                        transition: "color 0.3s ease",
                                    }}
                                    onMouseEnter={(e) =>
                                        (e.currentTarget.style.color = "#B76E79")
                                    }
                                    onMouseLeave={(e) =>
                                        (e.currentTarget.style.color = "#8A8A8A")
                                    }
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Legal & Contact Column */}
                    <div>
                        <h4
                            style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: "1.1rem",
                                fontWeight: 600,
                                color: "#2D2D2D",
                                marginBottom: "1.25rem",
                            }}
                        >
                            Get in Touch
                        </h4>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.75rem",
                                fontSize: "0.9rem",
                                color: "#8A8A8A",
                            }}
                        >
                            <span>📍 Mumbai, India</span>
                            <span>📞 +91 98765 43210</span>
                            <span>✉️ hello@auracosmetics.com</span>
                            <span>🕐 Mon - Sat: 10AM - 7PM</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div
                style={{
                    borderTop: "1px solid rgba(240, 230, 224, 0.5)",
                    padding: "1.5rem 2rem",
                }}
            >
                <div
                    style={{
                        maxWidth: "1280px",
                        margin: "0 auto",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "1rem",
                    }}
                >
                    <p style={{ fontSize: "0.8rem", color: "#8A8A8A" }}>
                        © {new Date().getFullYear()} Aura Cosmetics. All rights reserved.
                    </p>
                    <div style={{ display: "flex", gap: "1.5rem" }}>
                        {footerLinks.legal.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                style={{
                                    fontSize: "0.8rem",
                                    color: "#8A8A8A",
                                    transition: "color 0.3s ease",
                                }}
                                onMouseEnter={(e) =>
                                    (e.currentTarget.style.color = "#B76E79")
                                }
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.color = "#8A8A8A")
                                }
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
