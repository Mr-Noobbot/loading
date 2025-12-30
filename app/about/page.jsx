"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  const motives = [
    { title: "Our Mission", desc: "Empower creators and brands with high-quality content and creative strategies to amplify their voice." },
    { title: "Our Vision", desc: "Become a globally recognized creative agency inspiring audiences through captivating content." },
    { title: "Our Goals", desc: "Deliver exceptional visual content, expand client reach, and maintain consistent creativity." },
    { title: "Our Values", desc: "Innovation, professionalism, integrity, and collaboration are the core of our work culture." },
    { title: "Our Philosophy", desc: "Content should not just exist, it should resonate, engage, and leave a lasting impact." },
    { title: "Our Approach", desc: "We focus on understanding our clients’ needs and creating content that drives results while keeping creativity at the forefront." },
  ];

  const faqs = [
    { question: "What is the typical turnaround time?", answer: "For most projects, our turnaround time is 3-5 business days, depending on complexity." },
    { question: "Do you offer revisions?", answer: "Yes! We provide up to 3 revisions for each project to ensure it meets your expectations." },
    { question: "How do I submit my project details?", answer: "You can share your project details via email or our contact form on the website." },
    { question: "What are your pricing models?", answer: "We offer flexible pricing based on project size and type, from hourly rates to full-package deals." },
    { question: "Can you handle multiple projects at once?", answer: "Absolutely! We have a dedicated team to manage multiple projects efficiently." },
    { question: "Do you provide content strategy guidance?", answer: "Yes, we help clients plan content strategy for maximum engagement and growth." },
  ];

  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <main className="w-full bg-white text-gray-900 overflow-x-hidden relative">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center text-center bg-gray-800">
        <div className="text-white max-w-3xl px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Quark Creation</h1>
          <p className="text-lg md:text-xl">
            We help creators, influencers, and brands elevate their content with high-quality editing and creative strategies.
          </p>
        </div>
      </section>

      {/* Motives Section */}
      <section className="py-24 bg-gray-50 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 text-center">What We Stand For</h2>
        <div className="max-w-6xl grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
          {motives.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg flex flex-col justify-between hover:scale-105 transition transform">
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section with smooth animation */}
      <section className="py-24 bg-white flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 text-center">Frequently Asked Questions</h2>
        <div className="max-w-4xl w-full px-6 flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-6 rounded-xl shadow-lg cursor-pointer"
              onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
            >
              <h3 className="font-semibold text-lg text-gray-800 flex justify-between items-center">
                {faq.question}
                <span>{openFAQ === idx ? "-" : "+"}</span>
              </h3>
              <AnimatePresence>
                {openFAQ === idx && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-gray-600 mt-2 overflow-hidden"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
