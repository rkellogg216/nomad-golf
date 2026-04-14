import { content } from "@/content";
const { problemSolution: ps } = content;

export default function ProblemSolution() {
  return (
    <section className="bg-[#1C1C1C] text-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Problem */}
        <div className="lg:border-r border-[#333] pr-0 lg:pr-16 pb-16 lg:pb-0">
          <p className="text-[#6B6B6B] text-xs font-medium tracking-widest uppercase mb-6">{ps.problem.label}</p>
          <h2 className="text-3xl font-bold mb-6 leading-tight">{ps.problem.headline}</h2>
          {ps.problem.body.map((p, i) => (
            <p key={i} className="text-[#A0A0A0] text-lg leading-relaxed mb-4">{p}</p>
          ))}
        </div>

        {/* Solution */}
        <div className="pt-16 lg:pt-0 lg:pl-16">
          <p className="text-[#2D5016] text-xs font-medium tracking-widest uppercase mb-6">{ps.solution.label}</p>
          <h2 className="text-3xl font-bold mb-6 leading-tight">{ps.solution.headline}</h2>
          {ps.solution.body.map((p, i) => (
            <p key={i} className="text-[#A0A0A0] text-lg leading-relaxed mb-4">{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
