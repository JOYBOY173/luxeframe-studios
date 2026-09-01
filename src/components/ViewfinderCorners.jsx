/**
 * The studio's signature visual motif: thin corner brackets that evoke a
 * camera viewfinder. Used on hover states throughout the gallery, and as a
 * quiet frame around the hero image. Deliberately restrained — one accent
 * color, hairline weight, no fill.
 */
export default function ViewfinderCorners({ className = "", size = 22, active = true }) {
  const strokeClass = active ? "stroke-bronze" : "stroke-ivory/0";

  return (
    <div className={`pointer-events-none absolute inset-3 md:inset-4 ${className}`}>
      {[
        "top-0 left-0",
        "top-0 right-0 -scale-x-100",
        "bottom-0 left-0 -scale-y-100",
        "bottom-0 right-0 -scale-x-100 -scale-y-100",
      ].map((pos, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          className={`absolute ${pos} transition-all duration-700 ease-cinematic ${strokeClass}`}
          style={{ opacity: active ? 1 : 0 }}
        >
          <path d="M2 9V2H9" strokeWidth="1.5" />
        </svg>
      ))}
    </div>
  );
}
