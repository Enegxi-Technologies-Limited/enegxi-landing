"use client";

import Image from "next/image";
import { useHeroSlideshow } from "./HeroSlideshow";

// `position` keeps each photo's subject in frame when it's cropped
// to fill the hero (tall on phones, wide on desktop).
const slides = [
  { src: "/Hero1.jpg", position: "object-right" },
  { src: "/benzene.jpg", position: "object-[55%_35%]" },
  { src: "/enginners.png", position: "object-center" },
  { src: "/hyce.jpg", position: "object-[50%_55%]" },
  { src: "/laide.jpg", position: "object-[62%_30%]" },
];

export default function HeroCarousel() {
  const { tick, goTo, setPaused } = useHeroSlideshow();
  const active = tick % slides.length;

  return (
    <>
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        {slides.map((slide, index) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt=""
            fill
            preload={index === 0}
            sizes="100vw"
            className={`object-cover ${slide.position} transition-opacity duration-1000 ease-in-out motion-reduce:transition-none ${
              index === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div
        className="absolute inset-x-0 bottom-5 flex justify-center gap-2 md:bottom-8 md:right-8 md:left-auto md:justify-end"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`Show photo ${index + 1} of ${slides.length}`}
            aria-current={index === active}
            className="flex h-6 items-center"
          >
            <span
              className={`block h-1.5 rounded-full transition-all duration-300 ${
                index === active
                  ? "w-6 bg-brand-lime"
                  : "w-1.5 bg-white/50 hover:bg-white"
              }`}
            />
          </button>
        ))}
      </div>
    </>
  );
}
