const steps = [
  {
    number: "01",
    title: "Slide your tee in",
    description: "Drop any standard tee head into the notch. The TPU grips it snug — no rattling, no falling out.",
  },
  {
    number: "02",
    title: "Push it into the ground",
    description: "Press the tool into the turf until it stops. The notch depth sets your tee at exactly the right height.",
  },
  {
    number: "03",
    title: "Pull away and play",
    description: "Remove the tool. Your tee is set. Same height as the last hole. Same height as the next one. Step up and swing.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#F0EDE8] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-[#2D5016] text-sm font-medium tracking-widest uppercase mb-4">
            How It Works
          </p>
          <h2 className="text-4xl font-bold text-[#1C1C1C] leading-tight">
            Three steps.<br />One less variable.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-[#FAF8F5] rounded-3xl p-8 border border-[#E5E2DC]"
            >
              <p className="text-5xl font-bold text-[#E5E2DC] mb-6 leading-none">
                {step.number}
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
