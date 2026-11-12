"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { label: "Products", href: "#products" },
  { label: "Clients", href: "#clients" },
  { label: "How we work", href: "#process" },
  { label: "Contact", href: "#start" },
];

const START_URL = "#start";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          aria-label="Enegxi Technologies home"
          className="flex items-center gap-2"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-btn bg-brand-lime text-sm font-extrabold text-ink">
            &lt;/&gt;
          </span>
          <span className="whitespace-nowrap text-lg font-extrabold tracking-tight">
            Enegxi{" "}
            <span className="font-medium text-muted">Technologies</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={START_URL}
          className="hidden rounded-btn bg-brand-lime px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-brand-lime md:inline-block"
        >
          Start a project
        </a>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="-mr-2 rounded-btn p-2.5 text-ink md:hidden"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-black/5 bg-white px-6 pb-6 md:hidden">
          <ul className="flex flex-col py-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={START_URL}
            onClick={() => setOpen(false)}
            className="block rounded-btn bg-brand-lime px-5 py-3 text-center text-sm font-semibold text-ink"
          >
            Start a project
          </a>
        </div>
      )}
    </header>
  );
}