"use client";

import { useState } from "react";

const colors = [
  { name: "White", bg: "#F5F5F5", border: "#D0D0D0" },
  { name: "Black", bg: "#1C1C1C", border: "#1C1C1C" },
];

export default function ProductSection() {
  const [selectedColor, setSelectedColor] = useState("White");
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <section id="product" className="bg-[#FAF8F5] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image placeholder */}
          <div className="w-full aspect-square bg-[#F0EDE8] rounded-3xl flex items-center justify-center border border-[#E5E2DC]">
            <div className="text-center text-[#6B6B6B]">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-[#E5E2DC] flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
              </div>
              <p className="text-sm">Product photo coming soon</p>
            </div>
          </div>

          {/* Product details */}
          <div>
            <p className="text-[#2D5016] text-sm font-medium tracking-widest uppercase mb-3">
              Nomad Golf
            </p>
            <h2 className="text-4xl font-bold text-[#1C1C1C] mb-2">Golf Gadget</h2>
            <p className="text-3xl font-semibold text-[#1C1C1C] mb-6">$24.99</p>

            <p className="text-[#6B6B6B] leading-relaxed mb-8">
              The golf multitool that eliminates tee height guesswork. Made from flexible TPU — durable, lightweight, and clips to your bag. Available in White and Black.
            </p>

            {/* Color selector */}
            <div className="mb-8">
              <p className="text-sm font-medium text-[#1C1C1C] mb-3">
                Color — <span className="text-[#6B6B6B] font-normal">{selectedColor}</span>
              </p>
              <div className="flex gap-3">
                {colors.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(c.name)}
                    className={`w-9 h-9 rounded-full border-2 transition-all duration-150 ${
                      selectedColor === c.name
                        ? "ring-2 ring-offset-2 ring-[#1C1C1C]"
                        : "ring-0"
                    }`}
                    style={{ backgroundColor: c.bg, borderColor: c.border }}
                    aria-label={c.name}
                  />
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-sm font-medium text-[#1C1C1C] mb-3">Quantity</p>
              <div className="flex items-center gap-4 w-fit border border-[#E5E2DC] rounded-full px-4 py-2">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="text-[#1C1C1C] w-6 h-6 flex items-center justify-center hover:text-[#2D5016] transition-colors"
                >
                  −
                </button>
                <span className="text-[#1C1C1C] font-medium w-4 text-center">{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="text-[#1C1C1C] w-6 h-6 flex items-center justify-center hover:text-[#2D5016] transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 rounded-full text-base font-medium transition-all duration-200 ${
                added
                  ? "bg-[#2D5016] text-[#FAF8F5]"
                  : "bg-[#1C1C1C] text-[#FAF8F5] hover:bg-[#2D5016]"
              }`}
            >
              {added ? "Added ✓" : "Add to Cart"}
            </button>

            <p className="text-[#6B6B6B] text-sm text-center mt-4">
              Free shipping on orders over $40 · Made in the USA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
