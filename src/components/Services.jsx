import useReveal from "../hooks/useReveal";

const SERVICES = [
  {
    n: "01",
    title: "Photography",
    copy: "Professional photography for portraits, events and special occasions — composed with an editorial eye.",
  },
  {
    n: "02",
    title: "Videography",
    copy: "Cinematic films that capture moments and stories, shot and graded with a consistent visual language.",
  },
  {
    n: "03",
    title: "Weddings",
    copy: "Complete visual coverage for wedding celebrations, from first light to last dance.",
  },
  {
    n: "04",
    title: "Brand & Commercial",
    copy: "Visual content designed for businesses and brands that need imagery as considered as their product.",
  },
];

export default function Services() {
  const revealRef = useReveal();

  return (
    <section id="services" className="bg-obsidian py-24 md:py-36 border-t border-ivory/10">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div ref={revealRef} className="reveal mb-16 md:mb-20">
          <p className="eyebrow mb-4">What We Do</p>
          <h2 className="font-display text-4xl md:text-6xl text-ivory max-w-2xl leading-[1.05]">
            Four disciplines, one visual standard.
          </h2>
        </div>

        <div>
          {SERVICES.map((service) => (
            <div
              key={service.n}
              className="group grid grid-cols-[3rem,1fr] md:grid-cols-[6rem,1fr,2fr] items-start md:items-center gap-x-6 md:gap-x-12 py-8 md:py-10 border-t border-ivory/10 last:border-b transition-colors duration-500 hover:bg-ivory/[0.03]"
            >
              <span className="font-display text-stone text-lg md:text-xl">{service.n}</span>
              <h3 className="font-display text-2xl md:text-4xl text-ivory group-hover:text-bronze transition-colors duration-400">
                {service.title}
              </h3>
              <p className="hidden md:block text-stone text-base leading-relaxed max-w-md md:justify-self-end">
                {service.copy}
              </p>
              <p className="md:hidden col-span-2 text-stone text-sm leading-relaxed mt-2">
                {service.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
