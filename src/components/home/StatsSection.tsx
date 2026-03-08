"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

const stats = [
    { number: 500, suffix: "+", label: "Happy Clients", icon: "😊" },
    { number: 8, suffix: "+", label: "Years Experience", icon: "⭐" },
    { number: 50, suffix: "K+", label: "Social Followers", icon: "📱" },
    { number: 100, suffix: "+", label: "Brand Collabs", icon: "🤝" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    let start = 0;
                    const duration = 2000;
                    const startTime = performance.now();

                    const animate = (currentTime: number) => {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        start = Math.floor(eased * target);
                        setCount(start);
                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        }
                    };
                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target]);

    return (
        <div ref={ref}>
            <span
                style={{
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    fontWeight: 700,
                    fontFamily: "'Playfair Display', serif",
                    background: "linear-gradient(135deg, #B76E79, #D4A574)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
            >
                {count}
                {suffix}
            </span>
        </div>
    );
}

export default function StatsSection() {
    return (
        <SectionWrapper
            background="linear-gradient(135deg, #2D2D2D 0%, #1a1a1a 100%)"
        >
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "2rem",
                    textAlign: "center",
                }}
            >
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.15 }}
                        style={{
                            padding: "2rem",
                            position: "relative",
                        }}
                    >
                        <span
                            style={{
                                fontSize: "2rem",
                                display: "block",
                                marginBottom: "1rem",
                            }}
                        >
                            {stat.icon}
                        </span>
                        <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                        <p
                            style={{
                                fontSize: "0.9rem",
                                color: "rgba(255,255,255,0.6)",
                                marginTop: "0.5rem",
                                letterSpacing: "1px",
                            }}
                        >
                            {stat.label}
                        </p>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
