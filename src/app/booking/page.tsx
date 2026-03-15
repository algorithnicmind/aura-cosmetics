"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function BookingPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        time: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage("");

        try {
            const response = await fetch('/api/booking', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                setIsSubmitting(false);
                setIsSuccess(true);
                setFormData({ name: "", email: "", phone: "", service: "", date: "", time: "", message: "" });
                setTimeout(() => setIsSuccess(false), 5000);
            } else {
                setIsSubmitting(false);
                setErrorMessage(data.error || "Failed to submit booking.");
            }
        } catch (error) {
            setIsSubmitting(false);
            setErrorMessage("An unexpected error occurred. Please try again.");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <SectionWrapper background="linear-gradient(135deg, #FDF2F0 0%, #FFF8F5 50%, #F5E6D3 100%)">
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
                    Secure Your Spot
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
                    Book Appointment
                </motion.h1>
            </div>

            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{
                        background: "rgba(255, 255, 255, 0.8)",
                        backdropFilter: "blur(20px)",
                        borderRadius: "24px",
                        padding: "3rem",
                        boxShadow: "0 10px 40px rgba(183, 110, 121, 0.1)",
                        border: "1px solid rgba(255, 255, 255, 0.5)"
                    }}
                >
                    {isSuccess ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            style={{ textAlign: "center", padding: "4rem 0" }}
                        >
                            <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>✨</div>
                            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", color: "#2D2D2D", marginBottom: "1rem" }}>Booking Confirmed!</h2>
                            <p style={{ color: "#8A8A8A", fontSize: "1.1rem" }}>Thank you for choosing Aura. We will contact you shortly to confirm details.</p>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} style={{ display: "grid", gap: "1.5rem" }}>
                            {errorMessage && (
                                <div style={{ padding: "12px", background: "#FFEBEE", color: "#C62828", borderRadius: "8px", fontSize: "0.9rem", textAlign: "center", border: "1px solid #FFCDD2" }}>
                                    ⚠️ {errorMessage}
                                </div>
                            )}
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }} className="form-grid">
                                <div>
                                    <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem", color: "#4A4A4A", fontWeight: 500 }}>Full Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", border: "1px solid #F0E6E0", background: "white", outline: "none", fontSize: "0.95rem", fontFamily: "'Poppins', sans-serif" }}
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div>
                                    <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem", color: "#4A4A4A", fontWeight: 500 }}>Email Address *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", border: "1px solid #F0E6E0", background: "white", outline: "none", fontSize: "0.95rem", fontFamily: "'Poppins', sans-serif" }}
                                        placeholder="Enter your email"
                                    />
                                </div>
                            </div>

                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }} className="form-grid">
                                <div>
                                    <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem", color: "#4A4A4A", fontWeight: 500 }}>Phone Number *</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", border: "1px solid #F0E6E0", background: "white", outline: "none", fontSize: "0.95rem", fontFamily: "'Poppins', sans-serif" }}
                                        placeholder="+91..."
                                    />
                                </div>
                                <div>
                                    <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem", color: "#4A4A4A", fontWeight: 500 }}>Select Service *</label>
                                    <select
                                        name="service"
                                        required
                                        value={formData.service}
                                        onChange={handleChange}
                                        style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", border: "1px solid #F0E6E0", background: "white", outline: "none", fontSize: "0.95rem", fontFamily: "'Poppins', sans-serif", color: formData.service ? "#2D2D2D" : "#8A8A8A" }}
                                    >
                                        <option value="" disabled>Choose a service</option>
                                        <option value="bridal">Bridal Makeup</option>
                                        <option value="party">Party Glam</option>
                                        <option value="skin">Skin Consultation</option>
                                        <option value="hair">Hair Styling</option>
                                    </select>
                                </div>
                            </div>

                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }} className="form-grid">
                                <div>
                                    <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem", color: "#4A4A4A", fontWeight: 500 }}>Date *</label>
                                    <input
                                        type="date"
                                        name="date"
                                        required
                                        value={formData.date}
                                        onChange={handleChange}
                                        style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", border: "1px solid #F0E6E0", background: "white", outline: "none", fontSize: "0.95rem", fontFamily: "'Poppins', sans-serif" }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem", color: "#4A4A4A", fontWeight: 500 }}>Preferred Time *</label>
                                    <select
                                        name="time"
                                        required
                                        value={formData.time}
                                        onChange={handleChange}
                                        style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", border: "1px solid #F0E6E0", background: "white", outline: "none", fontSize: "0.95rem", fontFamily: "'Poppins', sans-serif", color: formData.time ? "#2D2D2D" : "#8A8A8A" }}
                                    >
                                        <option value="" disabled>Choose time</option>
                                        <option value="morning">Morning (10AM - 1PM)</option>
                                        <option value="afternoon">Afternoon (2PM - 5PM)</option>
                                        <option value="evening">Evening (5PM - 8PM)</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem", color: "#4A4A4A", fontWeight: 500 }}>Additional Details</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    style={{ width: "100%", padding: "12px 16px", borderRadius: "8px", border: "1px solid #F0E6E0", background: "white", outline: "none", fontSize: "0.95rem", fontFamily: "'Poppins', sans-serif", resize: "none" }}
                                    placeholder="Tell us more about your event..."
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={isSubmitting}
                                style={{
                                    padding: "16px 32px",
                                    background: "linear-gradient(135deg, #B76E79 0%, #D4A574 100%)",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "8px",
                                    fontSize: "1rem",
                                    fontWeight: 600,
                                    cursor: isSubmitting ? "not-allowed" : "pointer",
                                    fontFamily: "'Poppins', sans-serif",
                                    marginTop: "1rem",
                                    opacity: isSubmitting ? 0.7 : 1,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                            >
                                {isSubmitting ? "Processing..." : "Confirm Booking ✨"}
                            </motion.button>
                        </form>
                    )}
                </motion.div>
            </div>

            <style jsx>{`
        @media (max-width: 600px) {
          .form-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </SectionWrapper>
    );
}
