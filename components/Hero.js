import HeroCarousel from "./HeroCarousel";
import HeroHeadline from "./HeroHeadline";
import { HeroSlideshowProvider } from "./HeroSlideshow";

const capabilities = ["Web apps", "Mobile apps", "Fintech platforms"];

export default function Hero() {
  return (
    <HeroSlideshowProvider>
    <section className="relative isolate overflow-hidden bg-ink">
      <HeroCarousel />
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-ink via-ink/85 to-ink/70 md:to-ink/50" />

      <div className="mx-auto flex min-h-[560px] max-w-6xl flex-col justify-center px-6 pb-20 pt-16 md:min-h-[640px] md:py-24">
        <p className="self-start rounded-btn border border-white/20 px-4 py-1.5 text-sm font-medium text-white/80">
          Enegxi Technologies
        </p>

        <HeroHeadline />

        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
          Enegxi Technologies provides custom software development solutions for businesses, corporations, startups, and busy executives.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#start"
            className="rounded-btn bg-brand-lime px-6 py-3 text-sm font-semibold text-ink transition-opacity hover:opacity-80"
          >
            Start a project
          </a>
          <a
            href="#products"
            className="rounded-btn border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white"
          >
            Our products
          </a>
        </div>

        <ul className="mt-10 flex flex-wrap gap-x-6 md:mt-12 gap-y-2 text-sm text-white/60">
          {capabilities.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-lime" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
    </HeroSlideshowProvider>
  );
}