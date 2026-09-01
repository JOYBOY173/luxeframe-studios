import ViewfinderCorners from "./ViewfinderCorners";

const HERO_IMG =
  "https://images.unsplash.com/photo-1521544213200-ee65f73b6238?auto=format&fit=crop&w=2400&q=80";

export default function Hero() {
  const scrollToWork = () => {
    document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <img
        src={HERO_IMG}
        alt="Grayscale portrait of a couple holding hands, representing LuxeFrame's cinematic wedding photography"
        className="absolute inset-0 w-full h-full object-cover object-[65%_30%] animate-fadeIn"
        loading="eager"
      />
      {/* Editorial overlay for legibility, kept subtle so the image still leads */}
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-obsidian/50" />
      <div className="absolute inset-0 bg-obsidian/10" />

      <ViewfinderCorners size={28} />

      {/* Location tag — quiet editorial device, grounds the brand in Lagos */}
      <div className="hidden md:block absolute top-28 right-10 font-sans text-[11px] tracking-widest2 uppercase text-ivory/60 [writing-mode:vertical-rl]">
        Lagos, Nigeria — N 6.5244° E 3.3792°
      </div>

      <div className="relative h-full max-w-content mx-auto px-6 md:px-10 flex flex-col justify-end pb-20 md:pb-24">
        <p className="reveal is-visible eyebrow mb-5">Photography &amp; Film · Est. Lagos</p>

        <h1 className="reveal is-visible font-display font-normal text-ivory text-[13vw] leading-[0.98] sm:text-6xl md:text-7xl lg:text-[6.2rem] max-w-4xl [animation-delay:120ms]">
          Stories Worth
          <br />
          Remembering.
        </h1>

        <p
          className="reveal is-visible mt-7 max-w-md text-stone text-base md:text-lg leading-relaxed [animation-delay:260ms]"
        >
          Premium photography and cinematic films for weddings, brands, portraits and
          life&apos;s unforgettable moments.
        </p>

        <div className="reveal is-visible mt-10 flex flex-wrap items-center gap-5 [animation-delay:380ms]">
          <button
            onClick={() =>
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-primary"
          >
            Book a Session
          </button>
          <button
            onClick={scrollToWork}
            className="text-ivory text-sm uppercase tracking-wider border-b border-ivory/40 pb-1 hover:border-bronze hover:text-bronze transition-colors duration-300"
          >
            View Our Work ↓
          </button>
        </div>
      </div>
    </section>
  );
}
