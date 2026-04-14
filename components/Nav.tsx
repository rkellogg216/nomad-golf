"use client";

import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#FAF8F5]/95 backdrop-blur-sm border-b border-[#E5E2DC]" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-[#1C1C1C] font-semibold tracking-tight text-lg">
          Nomad Golf
        </a>
        <a
          href="#product"
          className="bg-[#1C1C1C] text-[#FAF8F5] text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#2D5016] transition-colors duration-200"
        >
          Shop Now
        </a>
      </div>
    </nav>
  );
}
