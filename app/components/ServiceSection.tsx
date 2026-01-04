"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ===================== Data =====================
const servicesData = [
  {
    title: "Video Editing",
    description: "High-quality editing to make your videos stand out.",
    videos: [
      "https://www.youtube.com/embed/47tFospd3jE",
      "https://www.youtube.com/embed/drk5Hqe16FU",
      "https://www.youtube.com/embed/E70BH9MwrZo",
      "https://www.youtube.com/embed/A_nciRCXH3c",
      "https://www.youtube.com/embed/3x3KEd28IyA",
      "https://www.youtube.com/embed/v-KiN_vInj8",
    ],
    images: [],
  },
  {
    title: "Short Form Content",
    description: "Snappy, engaging videos perfect for social media.",
    videos: [
      "/short3.mp4",
      "/short1.mp4",
      "/short4.mov",
      "/short5.mp4",
      "/short6.mp4",
      "/short2.mp4",
    ],
    images: [],
  },
  {
    title: "Thumbnails & Graphics",
    description: "Custom thumbnails and graphics to boost clicks and engagement.",
    videos: [],
    images: [
      "/images/t1.jpeg",
      "/images/t2.jpg",
      "/images/t3.jpg",
      "/images/t4.jpg",
      "/images/t5.jpeg",
      "/images/t6.jpeg",
      "/images/t7.jpeg",
      "/images/t8.jpeg",
      "/images/t9.jpg",
    ],
  },
];

// ===================== Component =====================
const ServiceSection = () => {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [lightboxContent, setLightboxContent] = useState<string | null>(null);

  // Auto-open Video Editing if URL has #portfolio
  useEffect(() => {
    if (window.location.hash === "#portfolio") {
      setSelectedService(servicesData[0]);
    }
  }, []);

  // Load Instagram embed script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, [selectedService]);

  return (
    <section id="services" className="py-32 bg-gray-50">
      {/* Section Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
        <p className="text-gray-500 mt-2 text-lg">Click a service to see sample work</p>
      </div>

      {/* Service Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-4 md:px-0">
        {servicesData.map((service, i) => (
          <motion.div
            key={service.title}
            onClick={() => setSelectedService(service)}
            className="bg-white p-8 rounded-3xl shadow-xl cursor-pointer"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.08, boxShadow: "0px 25px 45px rgba(0,0,0,0.2)" }}
          >
            <motion.div
              animate={{ y: ["0%", "3%", "0%"] }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <button className="px-6 py-3 rounded-full bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300 transition transform hover:scale-105">
                View Samples
              </button>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* ================= PORTFOLIO ================= */}
      <div id="portfolio" className="max-w-6xl mx-auto mt-20 scroll-mt-28">
        <AnimatePresence>
          {selectedService && (
            <motion.div
              key={selectedService.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h3 className="text-3xl font-bold text-center mb-10">
                {selectedService.title} Portfolio
              </h3>

              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className={`grid gap-6 px-4 md:px-0 ${
                  selectedService.title === "Short Form Content"
                    ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
                    : "grid-cols-1 md:grid-cols-3"
                }`}
              >
                {/* Videos */}
                {selectedService.videos.map((video: string, index: number) => {
                  if (video.startsWith("https://www.youtube.com/embed/")) {
                    return (
                      <motion.div
                        key={index}
                        className="w-full aspect-video rounded-2xl shadow-lg border-2 border-gray-700 overflow-hidden cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setLightboxContent(video)}
                      >
                        <iframe
                          src={video.split("?")[0]}
                          title={`${selectedService.title} Video ${index + 1}`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        />
                      </motion.div>
                    );
                  } else if (video.includes("instagram.com")) {
                    return (
                      <motion.div
                        key={index}
                        className="w-full aspect-[9/16] rounded-2xl shadow-lg border-2 border-gray-700 overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <blockquote
                          className="instagram-media w-full h-full"
                          data-instgrm-permalink={video}
                          data-instgrm-version="14"
                          style={{
                            background: "#FFF",
                            border: 0,
                            borderRadius: "12px",
                            margin: "0 auto",
                            padding: 0,
                            width: "100%",
                            height: "100%",
                          }}
                        >
                          <a href={video} target="_blank" rel="noreferrer">
                            View on Instagram
                          </a>
                        </blockquote>
                      </motion.div>
                    );
                  } else {
                    return (
                      <motion.video
                        key={index}
                        src={video}
                        controls
                        className="w-full aspect-[9/16] rounded-2xl shadow-lg border-2 border-gray-700 cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setLightboxContent(video)}
                      />
                    );
                  }
                })}

                {/* Images */}
                {selectedService.images.map((img: string, index: number) => (
                  <motion.img
                    key={index}
                    src={img}
                    alt={`${selectedService.title} ${index + 1}`}
                    className="w-full rounded-2xl shadow-lg border-2 border-gray-700 object-cover cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setLightboxContent(img)}
                  />
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ================= Lightbox Modal ================= */}
      <AnimatePresence>
        {lightboxContent && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxContent(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full max-h-[90vh]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              {lightboxContent.endsWith(".jpg") ||
              lightboxContent.endsWith(".jpeg") ||
              lightboxContent.endsWith(".png") ? (
                <img
                  src={lightboxContent}
                  alt="Large view"
                  className="w-full h-auto rounded-lg"
                />
              ) : lightboxContent.startsWith("https://www.youtube.com/embed/") ? (
                <iframe
                  src={lightboxContent.split("?")[0]}
                  title="Lightbox Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-[60vh] md:h-[80vh] rounded-lg"
                />
              ) : (
                <video
                  src={lightboxContent}
                  controls
                  autoPlay
                  className="w-full h-auto rounded-lg"
                />
              )}

              <button
                onClick={() => setLightboxContent(null)}
                className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full px-3 py-1 text-2xl font-bold"
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServiceSection;
