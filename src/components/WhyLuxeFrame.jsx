import useReveal from "../hooks/useReveal";

const REASONS = [
  { n: "01", title: "Authentic", copy: "Real moments, naturally captured." },
  { n: "02", title: "Cinematic", copy: "Images and films with intentional visual storytelling." },
  { n: "03", title: "Personal", copy: "Every project is tailored to the client." },
  { n: "04", title: "Professional", copy: "A polished experience from planning to delivery." },
];

export default function WhyLuxeFrame() {
  const revealRef = useReveal();

  return (
    <section className="bg-obsidian-soft py-24 md:py-36">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div ref={revealRef} className="reveal mb-14 md:mb-20 max-w-2xl">
          <p className="eyebrow mb-4">Why LuxeFrame</p>
          <h2 className="font-display text-4xl md:text-6xl text-ivory leading-[1.05]">
            What sets the work apart.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-ivory/10">
          {REASONS.map((reason) => (
            <div
              key={reason.n}
              className="border-r border-b border-ivory/10 p-8 md:p-14 group hover:bg-ivory/[0.02] transition-colors duration-500"
            >
              <span className="font-display text-sm text-bronze tracking-widest2">
                {reason.n}
              </span>
              <h3 className="font-display text-3xl md:text-4xl text-ivory mt-4 mb-3 group-hover:translate-x-1 transition-transform duration-500 ease-cinematic">
                {reason.title}
              </h3>
              <p className="text-stone text-base leading-relaxed max-w-xs">{reason.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
