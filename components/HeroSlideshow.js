"use client";

import { createContext, useContext, useEffect, useState } from "react";

// One shared timer for the hero, so the background photo and the
// headline always change at exactly the same moment.
const INTERVAL_MS = 5000;

const SlideshowContext = createContext(null);

export function HeroSlideshowProvider({ children }) {
  const [{ tick, previous }, setSlide] = useState({ tick: 0, previous: null });
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Restarts whenever the slide changes, so a manual jump gets a full interval.
    const timer = setTimeout(() => {
      setSlide({ tick: tick + 1, previous: tick });
    }, INTERVAL_MS);

    return () => clearTimeout(timer);
  }, [paused, tick]);

  function goTo(index) {
    if (index === tick) return;
    setSlide({ tick: index, previous: tick });
  }

  return (
    <SlideshowContext.Provider value={{ tick, previous, goTo, setPaused }}>
      {children}
    </SlideshowContext.Provider>
  );
}

export function useHeroSlideshow() {
  return useContext(SlideshowContext);
}
