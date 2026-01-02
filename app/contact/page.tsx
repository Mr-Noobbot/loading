"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<null | string>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      let data;
      try {
        data = await res.json();
      } catch {
        setStatus("Server error. Try again later.");
        return;
      }

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(data?.message || "Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Network error. Try again later.");
    }
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-20">
        <div className="text-center mb-16 px-4">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">Get in Touch</h1>
          <p className="text-gray-500 text-lg">Have a project in mind? Send us a message and we’ll get back to you promptly.</p>
        </div>

        <div className="flex justify-center px-4">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg bg-white p-10 rounded-3xl shadow-xl flex flex-col gap-6"
          >
            <div className="flex flex-col">
              <label className="mb-2 font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 transition text-black placeholder-gray-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-2 font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
                className="border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 transition text-black placeholder-gray-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-2 font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your Message"
                rows={6}
                className="border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 transition resize-none text-black placeholder-gray-400"
              />
            </div>

            <button
              type="submit"
              className="bg-yellow-400 text-gray-900 font-bold py-4 rounded-2xl hover:scale-105 transition transform shadow-lg hover:shadow-xl"
            >
              Send Message
            </button>

            {status && (
              <p className="text-center text-gray-600 mt-2 font-medium">{status}</p>
            )}
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
}
