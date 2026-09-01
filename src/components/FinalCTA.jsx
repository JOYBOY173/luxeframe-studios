import useReveal from "../hooks/useReveal";

export default function FinalCTA() {
  const revealRef = useReveal();

  return (
    <section className="relative h-[80vh] min-h-[520px] w-full overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1504227986464-b07ae4f486f4?auto=format&fit=crop&w=2400&q=80"
        alt="Grayscale photo of a couple walking, evoking a cinematic film still"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-obsidian/70" />

      <div
        ref={revealRef}
        className="reveal relative h-full max-w-content mx-auto px-6 md:px-10 flex flex-col items-center justify-center text-center"
      >
        <p className="eyebrow mb-6">Ready When You Are</p>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ivory leading-[1.05] max-w-3xl">
          Your story deserves more than a snapshot.
        </h2>
        <p className="text-stone text-base md:text-lg mt-7 max-w-lg leading-relaxed">
          Let&apos;s plan a session that feels like you — unhurried, honest and worth
          remembering.
        </p>
        <button
          onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          className="btn-primary mt-10"
        >
          Book Your Session →
        </button>
      </div>
    </section>
  );
}
