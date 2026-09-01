import useReveal from "../hooks/useReveal";

const STATS = [
  { value: "8+", label: "Years Experience" },
  { value: "250+", label: "Sessions Delivered" },
  { value: "98%", label: "Client Satisfaction" },
];

export default function About() {
  const revealRef = useReveal();

  return (
    <section id="about" className="bg-obsidian py-24 md:py-36 border-t border-ivory/10">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div ref={revealRef} className="reveal grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-center">
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1621024994326-91782bb4a5ba?auto=format&fit=crop&w=1200&q=80"
                alt="A LuxeFrame photographer holding a camera on location"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 border border-bronze/30 m-4" />
            </div>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <p className="eyebrow mb-4">About LuxeFrame</p>
            <h2 className="font-display text-3xl md:text-5xl text-ivory leading-[1.1] mb-6">
              Built on a simple belief: your story deserves care, not just coverage.
            </h2>
            <p className="text-stone text-base md:text-lg leading-relaxed mb-4">
              LuxeFrame Studios began in Lagos with a small team of photographers and
              filmmakers who felt that most photography treated people as subjects rather
              than as the story itself. We build every session around the people in front
              of the lens — the way they move, the way a room feels, the details that
              won&apos;t happen twice.
            </p>
            <p className="text-stone text-base md:text-lg leading-relaxed">
              Every project, from an intimate portrait to a full wedding weekend, follows the
              same philosophy: observe first, direct gently, and edit with restraint.
            </p>

            <div className="mt-12 grid grid-cols-3 gap-6 md:gap-10 border-t border-ivory/10 pt-8">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl md:text-5xl text-bronze">{stat.value}</p>
                  <p className="mt-2 text-xs md:text-sm uppercase tracking-wider text-stone">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-stone/60">
              Figures reflect a portfolio project and are illustrative, not audited claims.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
