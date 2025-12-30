"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import ServiceSection from "./components/ServiceSection"; // TS
import Testimonial from "./components/Testimonial"; // JSX
import Footer from "./components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // end the animation after 1.2s
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="w-full bg-white text-gray-900 overflow-x-hidden relative">
      {/* Navbar */}
      <Navbar />

      {/* HERO Section (Fixed) */}
      <section className="fixed top-0 left-0 w-full h-screen z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Quark Creation
            </h1>
            <p className="text-lg md:text-xl mb-8">
              A modern video editing & creative agency helping brands grow with clean visuals and fast turnarounds.
            </p>
            <button className="px-8 py-4 rounded-2xl bg-yellow-400 text-gray-900 font-bold text-lg hover:scale-105 hover:shadow-xl transition transform">
              Get Started
            </button>
          </div>
        </div>

        {/* Curtain overlay animation */}
        {loading && (
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-white z-20"
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        )}
      </section>

      {/* Spacer for fixed hero */}
      <div className="h-screen"></div>

      {/* Service Section */}
      <div className="relative z-20 min-h-screen flex items-center justify-center py-32 bg-gray-50">
        <ServiceSection />
      </div>

      {/* Testimonials Section */}
      <div className="relative z-20 min-h-screen flex items-center justify-center py-32 bg-gray-900">
        <Testimonial />
      </div>

      {/* Footer */}
      <div className="relative z-20">
        <Footer />
      </div>
    </main>
  );
}
