"use client";

import { useState } from "react";
import { SITE } from "../lib/site";

const FORM_URL = "/api/contact";

const projectTypes = [
  "Web app",
  "Mobile app",
  "Fintech platform",
  "Something else",
];

const inputClass =
  "mt-2 w-full rounded-btn border border-ink/15 bg-white px-4 py-3 text-base text-ink md:text-sm outline-none transition-colors placeholder:text-muted focus:border-ink";

export default function ProjectForm() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();

    setStatus("sending");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const response = await fetch(FORM_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-card bg-white p-6 text-ink md:p-8"
    >
      <input
        type="text"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="text-sm font-semibold">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-semibold">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-semibold">
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="0803 000 0000"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="type" className="text-sm font-semibold">
            What do you want to build?
          </label>
          <select
            id="type"
            name="projectType"
            required
            defaultValue=""
            className={inputClass}
          >
            <option value="" disabled>
              Select a project type
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="details" className="text-sm font-semibold">
            Project details
          </label>
          <textarea
            id="details"
            name="details"
            rows={4}
            required
            placeholder="Tell us about your idea, your timeline and who it's for."
            className={inputClass}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 w-full rounded-btn bg-brand-lime px-6 py-3 text-sm font-semibold text-ink transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send project brief"}
      </button>

      <p aria-live="polite" className="mt-4 text-sm">
        {status === "success" && (
          <span className="font-semibold">
            Thank you. We have your brief and will be in touch shortly.
          </span>
        )}
        {status === "error" && (
          <span className="font-semibold text-brand-red">
            Something went wrong. Please try again, or email
            {SITE.email}.
          </span>
        )}
      </p>
    </form>
  );
}