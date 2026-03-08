"use client";

import HeroSection from "@/components/home/HeroSection";
import FeaturedServices from "@/components/home/FeaturedServices";
import AboutPreview from "@/components/home/AboutPreview";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import GalleryPreview from "@/components/home/GalleryPreview";
import StatsSection from "@/components/home/StatsSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedServices />
      <AboutPreview />
      <StatsSection />
      <FeaturedProducts />
      <GalleryPreview />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
