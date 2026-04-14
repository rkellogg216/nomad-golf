const features = [
  {
    title: "Consistent Tee Height",
    description: "Notched design grips any standard tee head and sets it at the same depth every time. Dial it in once, repeat it forever.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v10M12 12l-3 3M12 12l3 3" />
        <circle cx="12" cy="20" r="2" />
        <path d="M8 6h8" />
        <path d="M9 9h6" />
      </svg>
    ),
  },
  {
    title: "Built-in Divot Tool",
    description: "A proper divot tool, not an afterthought. Fix your pitch marks without digging through your bag.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V12" />
        <path d="M9 15l3-3 3 3" />
        <path d="M7 8c0-2.8 2.2-5 5-5s5 2.2 5 5" />
        <path d="M6 11c-1.7.8-3 2.6-3 4.5C3 18 5.7 20 9 20" />
        <path d="M18 11c1.7.8 3 2.6 3 4.5C21 18 18.3 20 15 20" />
      </svg>
    ),
  },
  {
    title: "Ball Marker",
    description: "Mark your ball on the green without patting your pockets. It's right there, where it should be.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
      </svg>
    ),
  },
  {
    title: "2 Spare Tees",
    description: "Because tees disappear. Two spares held securely so you always have one when the course demands it.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 2v12M9 14l-2 8M9 14l2 8" />
        <path d="M15 2v12M15 14l-2 8M15 14l2 8" />
        <path d="M7 5h4M13 5h4" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="bg-[#FAF8F5] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-[#2D5016] text-sm font-medium tracking-widest uppercase mb-4">
            Everything In One
          </p>
          <h2 className="text-4xl font-bold text-[#1C1C1C] leading-tight max-w-lg">
            Four tools. One clip. Zero excuses.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => (
            <div key={f.title} className="group">
              <div className="w-12 h-12 bg-[#F0EDE8] rounded-2xl flex items-center justify-center text-[#1C1C1C] mb-5 group-hover:bg-[#1C1C1C] group-hover:text-[#FAF8F5] transition-colors duration-200">
                {f.icon}
              </div>
              <h3 className="font-semibold text-[#1C1C1C] mb-2 text-lg">{f.title}</h3>
              <p className="text-[#6B6B6B] text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
