"use client";

import { useEffect } from "react";

export function ScrollEffects() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const repeats = entry.target.hasAttribute("data-reveal-repeat");
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            if (!repeats) observer.unobserve(entry.target);
          } else if (repeats) {
            entry.target.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -20px 0px" }
    );

    const observeTargets = () => {
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((target) => observer.observe(target));
    };

    observeTargets();
    const mutationObserver = new MutationObserver(observeTargets);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
