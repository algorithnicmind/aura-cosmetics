"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (data.success) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
                setErrorMessage(data.error || "Something went wrong.");
            }
        } catch (error) {
            setStatus("error");
            setErrorMessage("Failed to send message. Please try again later.");
        }
    };

    return (
        <SectionWrapper background="linear-gradient(135deg, #FDF2F0 0%, #FFF8F5 100%)">
            <div style={{ textAlign: "center", paddingTop: "6rem", paddingBottom: "3rem" }}>
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
                    Get In Touch
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
                    Contact Support
                </motion.h1>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", maxWidth: "1000px", margin: "0 auto" }} className="contact-grid">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", color: "#2D2D2D", marginBottom: "1rem" }}>Let's Talk</h2>
                    <p style={{ color: "#8A8A8A", fontSize: "1.1rem", marginBottom: "2rem", lineHeight: 1.8 }}>Have questions about our services or want to collaborate? Reach out to our team below.</p>

                    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                            <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "rgba(183, 110, 121, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", color: "#B76E79" }}>📍</div>
                            <div>
                                <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", color: "#2D2D2D", margin: 0 }}>Studio Address</h4>
                                <p style={{ color: "#8A8A8A", margin: "0.25rem 0 0", fontSize: "0.9rem" }}>123 Beauty Blvd, Mumbai, India</p>
                            </div>
                        </div>

                        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                            <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "rgba(183, 110, 121, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", color: "#B76E79" }}>📞</div>
                            <div>
                                <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", color: "#2D2D2D", margin: 0 }}>Phone</h4>
                                <p style={{ color: "#8A8A8A", margin: "0.25rem 0 0", fontSize: "0.9rem" }}>+91 98765 43210</p>
                            </div>
                        </div>

                        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                            <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "rgba(183, 110, 121, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", color: "#B76E79" }}>✉️</div>
                            <div>
                                <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", color: "#2D2D2D", margin: 0 }}>Email</h4>
                                <p style={{ color: "#8A8A8A", margin: "0.25rem 0 0", fontSize: "0.9rem" }}>hello@auracosmetics.com</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    style={{
                        background: "white",
                        padding: "2.5rem",
                        borderRadius: "20px",
                        boxShadow: "0 10px 40px rgba(183, 110, 121, 0.08)",
                        border: "1px solid rgba(240, 230, 224, 0.5)"
                    }}
                >
                    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        {status === "success" && (
                            <div style={{ padding: "12px", background: "#E8F5E9", color: "#2E7D32", borderRadius: "8px", fontSize: "0.9rem", textAlign: "center", border: "1px solid #C8E6C9" }}>
                                ✨ Thank you! Your message has been sent successfully.
                            </div>
                        )}
                        {status === "error" && (
                            <div style={{ padding: "12px", background: "#FFEBEE", color: "#C62828", borderRadius: "8px", fontSize: "0.9rem", textAlign: "center", border: "1px solid #FFCDD2" }}>
                                ⚠️ {errorMessage}
                            </div>
                        )}
                        <div>
                            <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem", color: "#4A4A4A", fontWeight: 500 }}>Name</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} required style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", border: "1px solid #F0E6E0", outline: "none", fontFamily: "'Poppins', sans-serif" }} placeholder="Your name" />
                        </div>
                        <div>
                            <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem", color: "#4A4A4A", fontWeight: 500 }}>Email</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", border: "1px solid #F0E6E0", outline: "none", fontFamily: "'Poppins', sans-serif" }} placeholder="Your email" />
                        </div>
                        <div>
                            <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem", color: "#4A4A4A", fontWeight: 500 }}>Message</label>
                            <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", border: "1px solid #F0E6E0", outline: "none", fontFamily: "'Poppins', sans-serif", resize: "none" }} placeholder="How can we help?" />
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={status === "loading"}
                            style={{ padding: "14px", background: "linear-gradient(135deg, #B76E79, #D4A574)", color: "white", border: "none", borderRadius: "8px", fontWeight: 600, fontFamily: "'Poppins', sans-serif", marginTop: "0.5rem", cursor: status === "loading" ? "not-allowed" : "pointer", opacity: status === "loading" ? 0.7 : 1 }}
                        >
                            {status === "loading" ? "Sending..." : "Send Message"}
                        </motion.button>
                    </form>
                </motion.div>
            </div>

            <style jsx>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
        </SectionWrapper>
    );
}
