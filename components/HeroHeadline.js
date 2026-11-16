"use client";

import { useHeroSlideshow } from "./HeroSlideshow";

// Each headline: text before the highlight, the highlighted word, text after.
const headlines = [
  ["We turn ideas into software that", "works", ""],
  ["We build software your business can", "grow", "with"],
  ["From first idea to", "launch,", "we build it right"],
  ["Custom software, engineered to", "scale", ""],
  ["We build apps your customers", "love", ""],
  ["Bring us the problem. We'll ship the", "solution", ""],
];

const WORD_STAGGER_MS = 70;

// "in": on screen. "out": leaving (rises and blurs away).
// "idle": hidden below, ready to rise in next time.
const stateClasses = {
  in: "translate-y-0 opacity-100 blur-none duration-700",
  out: "-translate-y-3 opacity-0 blur-sm duration-500",
  idle: "translate-y-5 opacity-0 blur-sm duration-0",
};

function Headline({ parts, state }) {
  const [before, word, after] = parts;
  const beforeWords = before.split(" ");
  const afterWords = after ? after.split(" ") : [];
  const highlightIndex = beforeWords.length;
  const sweepDelay = (highlightIndex + 1) * WORD_STAGGER_MS + 250;

  // Words enter one after another; they all leave together.
  const delayFor = (i) =>
    state === "in" ? `${i * WORD_STAGGER_MS}ms` : "0ms";

  const wordClass = `inline-block transition-all ease-out motion-reduce:transition-none ${stateClasses[state]}`;

  const plainWord = (text, i) => (
    <span key={i} className={wordClass} style={{ transitionDelay: delayFor(i) }}>
      {text}
    </span>
  );

  const swept = state === "in";

  return (
    <>
      {beforeWords.map((w, i) => [plainWord(w, i), " "])}

      <span
        className={`${wordClass} relative isolate px-2`}
        style={{ transitionDelay: delayFor(highlightIndex) }}
      >
        {/* Highlighter sweep behind the key word */}
        <span
          aria-hidden="true"
          className={`absolute inset-0 -z-10 origin-left rounded-btn bg-brand-lime transition-transform ease-out motion-reduce:transition-none ${
            swept ? "scale-x-100 duration-500" : "scale-x-0 duration-0"
          }`}
          style={{ transitionDelay: swept ? `${sweepDelay}ms` : "0ms" }}
        />
        <span
          className={`transition-colors motion-reduce:transition-none ${
            swept ? "text-ink duration-300" : "text-white duration-0"
          }`}
          style={{ transitionDelay: swept ? `${sweepDelay + 100}ms` : "0ms" }}
        >
          {word}
        </span>
      </span>

      {afterWords.map((w, i) => [" ", plainWord(w, highlightIndex + 1 + i)])}
    </>
  );
}

export default function HeroHeadline() {
  const { tick, previous: previousTick } = useHeroSlideshow();
  const active = tick % headlines.length;
  const previous =
    previousTick === null ? null : previousTick % headlines.length;

  const [before, word, after] = headlines[0];

  return (
    <h1 className="mt-6 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-6xl">
      {/* Screen readers and search engines get the main headline once */}
      <span className="sr-only">
        {before} {word} {after}
      </span>

      {/* All headlines share one grid cell, so the height never jumps */}
      <span aria-hidden="true" className="grid">
        {headlines.map((parts, index) => {
          const state =
            index === active ? "in" : index === previous ? "out" : "idle";

          return (
            <span
              key={parts[1]}
              className={`[grid-area:1/1] ${state === "in" ? "" : "pointer-events-none"}`}
            >
              <Headline parts={parts} state={state} />
            </span>
          );
        })}
      </span>
    </h1>
  );
}
