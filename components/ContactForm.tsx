"use client";

import type { FormEvent } from "react";
import { EMAIL_PRIMARY } from "@/lib/data";

/**
 * Minimal contact form. On submit it opens the visitor's mail client with a
 * prefilled mailto: to the primary HDX address (subject + body composed from
 * the form fields). Underline-only inputs, serif placeholders.
 */
export default function ContactForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = `Message from ${name || "your website"}`;
    const body = `${message}\n\n— ${name}${email ? ` (${email})` : ""}`;

    window.location.href = `mailto:${EMAIL_PRIMARY}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="form" onSubmit={handleSubmit} aria-label="Contact form">
      <div className="form__field">
        <label className="form__label" htmlFor="contact-name">
          Name
        </label>
        <input
          className="form__input"
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="What should we call you?"
          required
        />
      </div>
      <div className="form__field">
        <label className="form__label" htmlFor="contact-email">
          Email
        </label>
        <input
          className="form__input"
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          required
        />
      </div>
      <div className="form__field">
        <label className="form__label" htmlFor="contact-message">
          Message
        </label>
        <textarea
          className="form__input"
          id="contact-message"
          name="message"
          placeholder="Tell us what you want to build..."
          required
        />
      </div>
      <button className="form__send" type="submit">
        Send
      </button>
    </form>
  );
}
