"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  { name: "John Doe", role: "Content Creator", message: "Quark Creation helped me take my videos to the next level. Highly recommend!", avatar: "/avatars/avatar1.jpg" },
  { name: "Jane Smith", role: "Influencer", message: "Amazing service and fast delivery. The team is super professional.", avatar: "/avatars/avatar2.jpg" },
  { name: "Alex Johnson", role: "Brand Manager", message: "High-quality visuals and excellent communication. I’ll work with them again!", avatar: "/avatars/avatar3.jpg" },
  { name: "Emily Clark", role: "Social Media Manager", message: "Fantastic creative team. My brand looks amazing now!", avatar: "/avatars/avatar4.jpg" },
  { name: "Michael Brown", role: "Entrepreneur", message: "Superb service, creative, and professional team.", avatar: "/avatars/avatar5.jpg" },
  { name: "Sophia Lee", role: "Influencer", message: "Fast delivery and amazing visuals. Highly recommend!", avatar: "/avatars/avatar6.jpg" },
];

// Duplicate for seamless loop
const loopTestimonials = [...testimonials, ...testimonials];

const TestimonialSnakeCarousel = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-20 relative z-20 bg-gray-900">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Testimonials</h2>
        <p className="text-gray-300 mt-2">See what our clients say about our work</p>
      </div>

      {/* Scrolling container */}
      <div className="relative w-full overflow-hidden h-80">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 40, // slower speed
            ease: "linear",
          }}
        >
          {loopTestimonials.map((testi, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 w-80 h-80 p-6 shadow-lg text-center flex-shrink-0 flex flex-col items-center justify-between cursor-pointer overflow-hidden rounded-lg"
              whileHover={{ scale: 1.05, borderRadius: "50%" }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelected(testi)}
            >
              <img
                src={testi.avatar}
                alt={testi.name}
                className="w-24 h-24 rounded-full object-cover border-2 border-yellow-400"
              />
              <p className="text-gray-200 text-sm mt-2 text-center overflow-hidden">
                "{testi.message}"
              </p>
              <div>
                <h4 className="font-semibold text-white mt-2">{testi.name}</h4>
                <p className="text-gray-400 text-sm">{testi.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="modal"
            className="fixed inset-0 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <motion.div
              className="bg-white p-10 rounded-2xl max-w-lg w-full text-center relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 font-bold text-xl"
                onClick={() => setSelected(null)}
              >
                ×
              </button>
              <img
                src={selected.avatar}
                alt={selected.name}
                className="w-24 h-24 mx-auto rounded-full mb-6 border-2 border-yellow-400"
              />
              <p className="text-gray-700 mb-6">"{selected.message}"</p>
              <h4 className="text-gray-900 font-semibold text-lg">{selected.name}</h4>
              <p className="text-gray-500 text-sm">{selected.role}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TestimonialSnakeCarousel;
