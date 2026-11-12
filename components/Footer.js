import Link from "next/link";
import { SITE } from "../lib/site";

const explore = [
  { label: "Products", href: "#products" },
  { label: "Clients", href: "#clients" },
  { label: "How we work", href: "#process" },
  { label: "Start a project", href: "#start" },
];

const products = [
  { label: "Enegxi Institute", href: SITE.instituteUrl },
  { label: "Payyng", href: "https://payyng.com" },
  { label: "iRevault", href: "https://irevault.com" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link
            href="/"
            aria-label="Enegxi Technologies home"
            className="flex items-center gap-2"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-btn bg-brand-lime text-sm font-extrabold text-ink">
              &lt;/&gt;
            </span>
            <span className="text-lg font-extrabold tracking-tight">
              Enegxi{" "}
              <span className="font-medium text-muted">Technologies</span>
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            custom software development solutions for businesses, corporations, startups, and busy executives.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Explore</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            {explore.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-ink">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Our products</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            {products.map((product) => (
              <li key={product.label}>
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-ink"
                >
                  {product.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Get in touch</h3>
          <ul className="mt-4 space-y-3 break-words text-sm text-muted">
            <li>
              <a
                href={SITE.phoneLink}
                className="transition-colors hover:text-ink"
              >
                {SITE.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="transition-colors hover:text-ink"
              >
                {SITE.email}
              </a>
            </li>
            <li>
              <address className="not-italic leading-relaxed">
                {SITE.address}
              </address>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink/10">
        <p className="mx-auto max-w-6xl px-6 py-6 text-sm text-muted">
          &copy; {year} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}