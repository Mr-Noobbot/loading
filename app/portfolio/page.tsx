"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const portfolioData = [
  {
    title: "Video Editing",
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
    videos: [
      "/shorts/short1.mp4",
      "/shorts/short2.mp4",
      "/shorts/short3.mp4",
      "/shorts/short4.mp4",
      "/shorts/short5.mp4",
      "/shorts/short6.mp4",
    ],
    images: [],
  },
  {
    title: "Thumbnails & Graphics",
    videos: [],
    images: [
      "/images/t1.jpeg",
      "/images/t2.jpg",
      "/images/t3.jpg",
      "/images/t4.jpg",
      "/images/t5.jpeg",
      "/images/t6.jpeg",
    ],
  },
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState(portfolioData[0]);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      <section className="py-32">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800">Portfolio</h1>
          <p className="text-gray-500 mt-2 text-lg">
            Explore our videos and graphics work
          </p>
        </div>

        {/* Category Buttons */}
        <div className="flex justify-center gap-6 mb-12 flex-wrap">
          {portfolioData.map((cat) => (
            <button
              key={cat.title}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-3 rounded-full font-semibold transition ${
                selectedCategory.title === cat.title
                  ? "bg-yellow-400 text-gray-900"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <div className="max-w-6xl mx-auto px-4 md:px-0">
          <AnimatePresence>
            {selectedCategory && (
              <motion.div
                key={selectedCategory.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {/* Videos */}
                {selectedCategory.videos.map((video, i) => {
                  if (video.startsWith("https://www.youtube.com/embed/")) {
                    return (
                      <motion.div
                        key={i}
                        className="w-full aspect-video rounded-2xl shadow-lg border-2 border-gray-700 overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <iframe
                          src={video.split("?")[0]}
                          title={`${selectedCategory.title} Video ${i + 1}`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        />
                      </motion.div>
                    );
                  } else {
                    return (
                      <motion.video
                        key={i}
                        src={video}
                        controls
                        className="w-full rounded-2xl shadow-lg border-2 border-gray-700"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                    );
                  }
                })}

                {/* Images */}
                {selectedCategory.images.map((img, i) => (
                  <motion.img
                    key={i}
                    src={img}
                    alt={`${selectedCategory.title} ${i + 1}`}
                    className="w-full rounded-2xl shadow-lg border-2 border-gray-700 object-cover cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setLightboxImage(img)}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ================= Lightbox ================= */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              className="relative max-w-6xl w-full max-h-[90vh]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage}
                alt="Full screen"
                className="w-full h-auto rounded-lg object-contain"
              />

              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full px-3 py-1 text-2xl font-bold"
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
