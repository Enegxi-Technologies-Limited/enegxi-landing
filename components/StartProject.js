import ProjectForm from "./ProjectForm";
import { SITE } from "../lib/site";

const contacts = [
  { label: "Call us", value: SITE.phone, href: SITE.phoneLink },
  { label: "Email us", value: SITE.email, href: `mailto:${SITE.email}` },
  { label: "Visit us", value: SITE.address },
];

export default function StartProject() {
  return (
    <section id="start" className="scroll-mt-16 bg-ink text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-16 md:py-28 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-lime">
            Start a project
          </p>
          <h2 className="mt-3 max-w-xl text-3xl font-extrabold tracking-tight md:text-4xl">
            Tell us what you want to build.
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-white/70">
            Send us a short brief and we&apos;ll get back to you to book a
            discovery call.
          </p>

          <ul className="mt-10 space-y-6">
            {contacts.map((item) => (
              <li key={item.label}>
                <p className="text-sm font-semibold text-white/50">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-1 inline-block break-all font-semibold transition-colors hover:text-brand-lime"
                  >
                    {item.value}
                  </a>
                ) : (
                  <address className="mt-1 max-w-xs font-semibold not-italic leading-relaxed">
                    {item.value}
                  </address>
                )}
              </li>
            ))}
          </ul>
        </div>

        <ProjectForm />
      </div>
    </section>
  );
}
