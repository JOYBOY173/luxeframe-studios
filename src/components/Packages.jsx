import useReveal from "../hooks/useReveal";

const PACKAGES = [
  {
    name: "Essential",
    price: "₦150,000",
    unit: "per session",
    desc: "For smaller portrait or photography sessions.",
    features: ["1-hour session", "1 location", "30 edited images", "Online gallery"],
    featured: false,
  },
  {
    name: "Signature",
    price: "₦350,000",
    unit: "per session",
    desc: "Our most-booked package — full coverage with room to breathe.",
    features: [
      "4-hour session",
      "Up to 2 locations",
      "120 edited images",
      "Highlight film (2–3 min)",
      "Online gallery + prints credit",
    ],
    featured: true,
  },
  {
    name: "Premium",
    price: "₦650,000",
    unit: "per project",
    desc: "A complete photography + videography experience.",
    features: [
      "Full-day coverage",
      "Unlimited locations",
      "300+ edited images",
      "Cinematic film (5–8 min)",
      "Dedicated second shooter",
    ],
    featured: false,
  },
];

export default function Packages() {
  const revealRef = useReveal();

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-obsidian-soft py-24 md:py-36 border-t border-ivory/10">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div ref={revealRef} className="reveal mb-16 md:mb-24 max-w-2xl">
          <p className="eyebrow mb-4">Packages</p>
          <h2 className="font-display text-4xl md:text-6xl text-ivory leading-[1.05]">
            Investment, made clear.
          </h2>
          <p className="text-stone mt-5 text-base leading-relaxed">
            Fictional portfolio pricing shown in Nigerian naira. Every package can be
            tailored — get in touch for a custom quote.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className={`flex flex-col h-full p-8 md:p-10 border transition-all duration-500 ease-cinematic ${
                pkg.featured
                  ? "border-bronze bg-obsidian md:-translate-y-6 shadow-[0_30px_60px_-15px_rgba(167,139,104,0.25)]"
                  : "border-ivory/10 bg-obsidian/40"
              }`}
            >
              {pkg.featured && (
                <span className="eyebrow mb-4 inline-block w-fit">Most Booked</span>
              )}
              <h3 className="font-display text-2xl md:text-3xl text-ivory mb-2">{pkg.name}</h3>
              <p className="text-stone text-sm leading-relaxed mb-6">{pkg.desc}</p>

              <div className="mb-8">
                <span className="font-display text-3xl md:text-4xl text-ivory">{pkg.price}</span>
                <span className="text-stone text-sm ml-2">{pkg.unit}</span>
              </div>

              <ul className="space-y-3 mb-10 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-stone">
                    <span className="text-bronze mt-1">—</span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className={pkg.featured ? "btn-primary w-full" : "btn-ghost w-full"}
              >
                Enquire Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
