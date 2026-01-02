// Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-12 px-6 relative z-20">
      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We focus on quality, fast delivery, and eye-catching visuals that
          help creators grow faster and look more professional.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="/portfolio" className="hover:text-white transition">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p>Email: creationquark@gmail.com</p>
          <p>Phone: +977 9808476191</p>

          <div className="flex justify-center md:justify-start mt-4 space-x-4">
            <a href="https://www.instagram.com/sherpabishal147/" className="hover:text-white transition">Facebook</a>
            <a href="https://www.instagram.com/sherpabishal147/" className="hover:text-white transition">Instagram</a>
            <a href="#" className="hover:text-white transition">YouTube</a>
          </div>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p className="text-gray-400 leading-relaxed">
            Quark Creation helps creators, influencers, and brands grow with
            high-quality editing and modern content strategies.
          </p>
        </div>
      </div>

      <div className="text-center mt-12 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Quark Creation. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
