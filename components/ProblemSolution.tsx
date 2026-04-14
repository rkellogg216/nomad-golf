export default function ProblemSolution() {
  return (
    <section className="bg-[#1C1C1C] text-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Problem */}
        <div className="lg:border-r border-[#333] pr-0 lg:pr-16 pb-16 lg:pb-0">
          <p className="text-[#6B6B6B] text-xs font-medium tracking-widest uppercase mb-6">
            The Problem
          </p>
          <h2 className="text-3xl font-bold mb-6 leading-tight">
            You&apos;re thinking about your tee height when you should be thinking about your shot.
          </h2>
          <p className="text-[#A0A0A0] text-lg leading-relaxed mb-4">
            Every golfer knows the feeling. You pull a tee out of your pocket, stick it in the ground, and immediately second-guess how deep it went. Too high and you balloon it. Too low and you top it.
          </p>
          <p className="text-[#A0A0A0] text-lg leading-relaxed">
            There&apos;s no standard. No reference point. Just a tee in the dirt and a nagging feeling that it&apos;s not quite right.
          </p>
        </div>

        {/* Solution */}
        <div className="pt-16 lg:pt-0 lg:pl-16">
          <p className="text-[#2D5016] text-xs font-medium tracking-widest uppercase mb-6">
            The Solution
          </p>
          <h2 className="text-3xl font-bold mb-6 leading-tight">
            A consistent reference point, every single time you tee it up.
          </h2>
          <p className="text-[#A0A0A0] text-lg leading-relaxed mb-4">
            Golf Gadget has a series of notches sized to grip any standard tee head snugly. Slide your tee in, push the whole thing into the ground, pull the tool away — your tee is set to the exact same depth every time.
          </p>
          <p className="text-[#A0A0A0] text-lg leading-relaxed">
            No more guessing. One less thing to think about before you swing.
          </p>
        </div>
      </div>
    </section>
  );
}
