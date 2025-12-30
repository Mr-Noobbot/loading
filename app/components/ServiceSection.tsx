"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Data for each service
const servicesData = [
  {
    title: "Video Editing",
    description: "High-quality editing to make your videos stand out.",
    videos: [
      "/videos/video1.mp4",
      "/videos/video2.mp4",
      "/videos/video3.mp4",
      "/videos/video4.mp4",
      "/videos/video5.mp4",
      "/videos/video6.mp4",
    ],
    images: [],
  },
  {
    title: "Short Form Content",
    description: "Snappy, engaging videos perfect for social media.",
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
    description: "Custom thumbnails and graphics to boost clicks and engagement.",
    videos: [],
    images: [
      "/images/thumb1.jpg",
      "/images/thumb2.jpg",
      "/images/thumb3.jpg",
      "/images/thumb4.jpg",
      "/images/thumb5.jpg",
      "/images/thumb6.jpg",
    ],
  },
];

const ServiceSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="py-32 bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
        <p className="text-gray-500 mt-2 text-lg">
          Click a service to see sample work
        </p>
      </div>

      {/* Service Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-4 md:px-0">
        {servicesData.map((service, i) => (
          <motion.div
            key={service.title}
            onClick={() => setSelectedService(service)}
            className="bg-white p-8 rounded-3xl shadow-xl cursor-pointer relative"
            initial={{ opacity: 0, y: 50, scale: 0.9 }} // Initial entrance
            animate={{ opacity: 1, y: 0, scale: 1 }} // Animate in
            transition={{
              duration: 0.8,
              delay: i * 0.2, // Stagger cards
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 25px 45px rgba(0,0,0,0.2)",
            }}
          >
            {/* Floating animation inside */}
            <motion.div
              animate={{ y: ["0%", "3%", "0%"] }}
              transition={{
                duration: 4 + i, // slight variation for each card
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <button className="px-6 py-3 rounded-full bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300 transition transform hover:scale-105">
                View Samples
              </button>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Media Gallery */}
      <div className="max-w-6xl mx-auto mt-16">
        <AnimatePresence>
          {selectedService && (
            <motion.div
              key={selectedService.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-0"
            >
              {selectedService.videos.map((video, index) => (
                <motion.video
                  key={index}
                  src={video}
                  controls
                  className="w-full rounded-2xl shadow-lg border-2 border-gray-700"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              ))}
              {selectedService.images.map((img, index) => (
                <motion.img
                  key={index}
                  src={img}
                  alt={`${selectedService.title} ${index + 1}`}
                  className="w-full rounded-2xl shadow-lg border-2 border-gray-700 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ServiceSection;
