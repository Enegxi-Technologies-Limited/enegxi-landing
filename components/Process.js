// TODO: confirm these steps and wording with the team
const steps = [
  {
    title: "Discovery call",
    text: "We start with a short call to understand your business, your goals and the problem you want solved.",
  },
  {
    title: "Project brief",
    text: "You share the details through our project form: scope, key features, timeline and budget range.",
  },
  {
    title: "Schedule a meeting",
    text: "We book a meeting to go through your brief, answer questions and agree on the approach.",
  },
  {
    title: "Project kick-off",
    text: "Once the plan is agreed, the team gets to work, with regular updates until launch.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16 md:py-28"
    >
      <p className="text-sm font-semibold uppercase tracking-widest text-brand-red">
        How we work
      </p>
      <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight md:text-4xl">
        From first call to launch.
      </h2>

      <ol className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <li key={step.title} className="border-t-2 border-ink pt-6">
            <span className="text-sm font-bold text-brand-red">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 text-lg font-bold">{step.title}</h3>
            <p className="mt-2 leading-relaxed text-muted">{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}