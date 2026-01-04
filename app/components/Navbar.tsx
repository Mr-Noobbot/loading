"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" }, // just an id
    { name: "Contact", href: "/contact" },
  ];

  // ✅ Smooth scroll function
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -100; // adjust for fixed navbar height
      const y =
        el.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsOpen(false); // close mobile menu if open
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold">
         <img
        src="/textlogo.png" // replace with your actual logo path
        alt="QuarkCreation Logo"
        className="h-12 w-auto transform scale-400 md:scale-500 origin-left -translate-x-4 md:-translate-x-20"
      />
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() =>
                link.href.startsWith("#") || link.href === "portfolio"
                  ? handleScroll("portfolio")
                  : (window.location.href = link.href)
              }
              className="hover:text-gray-300 font-medium"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 bg-gray-800 px-4 py-6">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() =>
                link.href.startsWith("#") || link.href === "portfolio"
                  ? handleScroll("portfolio")
                  : (window.location.href = link.href)
              }
              className="hover:text-gray-300 font-medium text-left"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
