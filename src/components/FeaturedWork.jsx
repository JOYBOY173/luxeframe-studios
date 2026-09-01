import { useState } from "react";
import useReveal from "../hooks/useReveal";
import ViewfinderCorners from "./ViewfinderCorners";

const WORK = [
  {
    category: "Weddings",
    title: "Held, Lekki",
    img: "photo-1460978812857-470ed1c77af0",
    span: "md:col-span-7 md:row-span-2",
    alt: "Grayscale portrait of a bride and groom",
  },
  {
    category: "Portraits",
    title: "Unfiltered",
    img: "photo-1567226028173-20eb319d0bac",
    span: "md:col-span-5",
    alt: "Grayscale editorial portrait of a woman",
  },
  {
    category: "Brands",
    title: "Behind the Frame",
    img: "photo-1636540661852-5fbbbffd2c2f",
    span: "md:col-span-5",
    alt: "A photography studio set up with lighting and a tripod",
  },
  {
    category: "Events",
    title: "In the Room",
    img: "photo-1689783101582-98feb9393a57",
    span: "md:col-span-7",
    alt: "Grayscale photo of a crowd at a live event",
  },
];

function GalleryTile({ item }) {
  const [hovered, setHovered] = useState(false);
  const src = `https://images.unsplash.com/${item.img}?auto=format&fit=crop&w=1400&q=80`;

  return (
    <div
      className={`group relative overflow-hidden bg-obsidian-soft cursor-pointer ${item.span}`}
      style={{ minHeight: "18rem" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={src}
        alt={item.alt}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-cinematic group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/0 to-obsidian/10 opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
      <ViewfinderCorners active={hovered} />
      <div className="relative h-full flex flex-col justify-end p-6 md:p-8">
        <span className="eyebrow mb-2">{item.category}</span>
        <h3 className="font-display text-xl md:text-2xl text-ivory">{item.title}</h3>
      </div>
    </div>
  );
}

export default function FeaturedWork() {
  const revealRef = useReveal();

  return (
    <section id="work" className="bg-obsidian py-24 md:py-36">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div ref={revealRef} className="reveal flex flex-col md:flex-row md:items-end md:justify-between mb-14 md:mb-20 gap-6">
          <div>
            <p className="eyebrow mb-4">Selected Work</p>
            <h2 className="font-display text-4xl md:text-6xl text-ivory max-w-xl leading-[1.05]">
              A portfolio built on real moments.
            </h2>
          </div>
          <p className="text-stone max-w-xs text-sm md:text-base leading-relaxed">
            Weddings, portraits, brand campaigns and live events — captured with the same
            editorial eye across every category.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4">
          {WORK.map((item) => (
            <GalleryTile key={item.category} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
