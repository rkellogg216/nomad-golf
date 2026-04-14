export default function Hero() {
  return (
    <section className="min-h-screen bg-[#FAF8F5] flex items-center pt-20">
      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <p className="text-[#2D5016] text-sm font-medium tracking-widest uppercase mb-6">
            Golf Gadget by Nomad Golf
          </p>
          <h1 className="text-5xl lg:text-6xl font-bold text-[#1C1C1C] leading-[1.1] tracking-tight mb-6">
            Same height.<br />
            Every tee.<br />
            Every hole.
          </h1>
          <p className="text-[#6B6B6B] text-xl leading-relaxed mb-10 max-w-md">
            The multitool that ends tee height guesswork — for good. Divot tool, ball marker, spare tees, and a consistent tee height every single time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#product"
              className="bg-[#1C1C1C] text-[#FAF8F5] text-base font-medium px-8 py-4 rounded-full hover:bg-[#2D5016] transition-colors duration-200 text-center"
            >
              Shop — $24.99
            </a>
            <a
              href="#how-it-works"
              className="text-[#1C1C1C] text-base font-medium px-8 py-4 rounded-full border border-[#E5E2DC] hover:border-[#1C1C1C] transition-colors duration-200 text-center"
            >
              See How It Works
            </a>
          </div>
        </div>

        {/* Product image placeholder */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-sm aspect-square bg-[#F0EDE8] rounded-3xl flex items-center justify-center border border-[#E5E2DC]">
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
        </div>
      </div>
    </section>
  );
}
