import { useState } from "react";
import useReveal from "../hooks/useReveal";

const TESTIMONIALS = [
  {
    quote:
      "They disappeared into the background of our wedding day and somehow still caught every moment that mattered. Watching the film back felt like reliving it.",
    name: "Amara & Chidi Eze",
    context: "Wedding, Victoria Island",
  },
  {
    quote:
      "Our brand shoot needed to feel premium without feeling stiff. LuxeFrame understood the brief in one call and delivered images we're still using a year later.",
    name: "Tobi Adeyemi",
    context: "Founder, Adeyemi & Co.",
  },
  {
    quote:
      "I've never enjoyed being photographed until this session. Patient, unhurried, and the final portraits genuinely looked like me on a good day.",
    name: "Folake Ogunleye",
    context: "Portrait Session",
  },
];

export default function Testimonials() {
  const revealRef = useReveal();
  const [active, setActive] = useState(0);
  const current = TESTIMONIALS[active];

  return (
    <section className="bg-obsidian py-24 md:py-36 border-t border-ivory/10">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div ref={revealRef} className="reveal max-w-3xl mx-auto text-center">
          <p className="eyebrow mb-8">Client Words</p>

          <blockquote
            key={active}
            className="animate-fadeUp font-display text-2xl md:text-4xl text-ivory leading-[1.35] mb-10"
          >
            &ldquo;{current.quote}&rdquo;
          </blockquote>

          <p className="text-bronze text-sm uppercase tracking-wider">{current.name}</p>
          <p className="text-stone text-sm mt-1">{current.context}</p>

          <div className="flex items-center justify-center gap-3 mt-10">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setActive(i)}
                aria-label={`Show testimonial from ${t.name}`}
                className={`h-1.5 rounded-full transition-all duration-500 ease-cinematic ${
                  i === active ? "w-8 bg-bronze" : "w-1.5 bg-ivory/25 hover:bg-ivory/50"
                }`}
              />
            ))}
          </div>
        </div>

        <p className="text-center text-stone/50 text-xs mt-14">
          Testimonials are illustrative content created for this portfolio project.
        </p>
      </div>
    </section>
  );
}
