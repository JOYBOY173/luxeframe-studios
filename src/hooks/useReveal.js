import { useEffect, useRef } from "react";

/**
 * Attaches an IntersectionObserver to the returned ref and adds the
 * "is-visible" class (see .reveal in index.css) once the element scrolls
 * into view. Kept dependency-free on purpose — a full animation library
 * would be overkill for a handful of fade/slide reveals.
 */
export default function useReveal(threshold = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}
