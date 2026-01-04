"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Shaun Holden",
    role: "Self-Sabotage Coach",
    message:
      "Quark Creation helped me take my social media videos to the next level. Highly recommend! Their editing is clean, fast, and professional.",
    avatar: "/avatars/avatar1.jpg",
  },
  {
    name: "Trav White",
    role: "Founder | Mannered Manes,Inc",
    message:
      "Amazing service and fast delivery. Super professional team, really helped me create amazing YouTube content and grow my channel’s reach.",
    avatar: "/avatars/avatar2.jpg",
  },
  {
    name: "Matthew Sinclair",
    role: "Health & Nutrition Coach",
    message:
      "The team provided high-quality visuals and excellent communication. They helped me create social media content that performed really well and designed ads that brought in more leads.",
    avatar: "/avatars/avatar3.jpg",
  },
  {
    name: "cory englehardt",
    role: "Founder | quantumcreations",
    message:
      "Amazing team of editors! They really helped elevate my work, improved my branding, and handled all the editing perfectly. My content looks professional and stands out now.",
    avatar: "/avatars/avatar4.jpg",
  },
  {
    name: "Meaghan Janisse",
    role: "Women’s Fitness Coach",
    message:
      "Fast, reliable, and professional service. The results were exactly what we needed for our social media campaigns.",
    avatar: "/avatars/avatar5.jpg",
  },
  {
    name: "Segun Duyile",
    role: "Founder | Remote Closing Club",
    message:
      "The team really helped us organize our social media. Everything looks professional now, from the content to the branding. They provided great ideas, scheduled posts efficiently, and planned everything perfectly. Highly recommend!",
    avatar: "/avatars/avatar6.jpg",
  },
];

// Duplicate testimonials for smooth snake effect
const loopTestimonials = [...testimonials, ...testimonials];

export default function SnakeTestimonialCarousel() {
  const [selected, setSelected] = useState(null);
  const [paused, setPaused] = useState(false);

  return (
    <section className="bg-transparent py-20 text-white overflow-hidden relative">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Testimonials</h2>
        <p className="text-gray-300 mt-2">
          See what our clients say about our work
        </p>
      </div>

      {/* Snake carousel */}
      <div
        className="overflow-hidden relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <motion.div
          className="flex gap-6 w-max cursor-grab"
          animate={{ x: paused ? undefined : ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 80, // slow snake movement
            ease: "linear",
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2} // smooth elastic feel
        >
          {loopTestimonials.map((t, i) => (
            <div
              key={i}
              onClick={() => setSelected(t)}
              className="bg-gray-800/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 w-[300px] h-[350px] md:w-[340px] md:h-[380px] flex flex-col justify-between items-center cursor-pointer hover:scale-105 transition-transform shadow-lg"
            >
              {/* Message */}
              <p className="text-gray-300 text-center mb-4 flex-grow flex items-center justify-center whitespace-pre-wrap">
                “{t.message}”
              </p>

              {/* Client Info */}
              <div className="flex flex-col items-center gap-2 mt-2">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-16 h-16 rounded-full border-2 border-yellow-400 object-cover"
                />
                <h4 className="font-semibold text-white text-base md:text-lg">{t.name}</h4>
                <p className="text-gray-400 text-sm md:text-base">{t.role}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="modal"
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-900/80 backdrop-blur-md rounded-2xl p-8 max-w-md w-full text-center relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold"
                onClick={() => setSelected(null)}
              >
                ×
              </button>
              <img
                src={selected.avatar}
                alt={selected.name}
                className="w-20 h-20 rounded-full border-2 border-yellow-400 mx-auto mb-4 object-cover"
              />
              <p className="text-gray-300 mb-4 text-center">{selected.message}</p>
              <h4 className="text-white font-semibold text-lg">{selected.name}</h4>
              <p className="text-gray-400">{selected.role}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
