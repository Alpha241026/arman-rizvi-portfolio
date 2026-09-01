import { useEffect } from "react";

/**
 * Lightweight motion director for the field-record interface.
 * Uses the browser's native IntersectionObserver instead of a motion library,
 * keeping the visual language quiet, responsive and dependency-free.
 */
export function MotionSystem() {
  useEffect(() => {
    document.documentElement.classList.add("motion-enabled");

    const motionTargets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-motion]"),
    );

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
      );

      motionTargets.forEach((target) => observer.observe(target));

      return () => {
        observer.disconnect();
        document.documentElement.classList.remove("motion-enabled");
      };
    }

    motionTargets.forEach((target) => target.classList.add("is-visible"));
    document.documentElement.classList.remove("motion-enabled");
    return undefined;
  }, []);

  useEffect(() => {
    let frame = 0;

    const updateScroll = () => {
      frame = 0;
      document.documentElement.style.setProperty(
        "--motion-scroll",
        `${window.scrollY * 0.018}px`,
      );
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateScroll);
    };

    updateScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
