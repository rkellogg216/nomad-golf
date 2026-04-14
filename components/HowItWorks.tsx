import { content } from "@/content";
const { howItWorks: hiw } = content;

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#F0EDE8] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-[#2D5016] text-sm font-medium tracking-widest uppercase mb-4">{hiw.eyebrow}</p>
          <h2 className="text-4xl font-bold text-[#1C1C1C] leading-tight">
            {hiw.headline.map((line, i) => (<span key={i}>{line}<br /></span>))}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {hiw.steps.map((step, idx) => (
            <div
              key={step.title}
              className="bg-[#FAF8F5] rounded-3xl p-8 border border-[#E5E2DC]"
            >
              <p className="text-5xl font-bold text-[#E5E2DC] mb-6 leading-none">
                {String(idx + 1).padStart(2, "0")}
              </p>
              <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">
                {step.title}
              </h3>
              <p className="text-[#6B6B6B] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
