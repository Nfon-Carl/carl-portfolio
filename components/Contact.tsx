"use client";

import { useState, type FormEvent } from "react";
import LaptopIcon from "./LaptopIcon";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Nfon-Carl/",
    path: "M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 6.8 9.7.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.4-3.4-1.4-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 2.9.9.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5.1 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.3 4.8-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5a10.2 10.2 0 0 0 6.8-9.7C22 6.6 17.5 2 12 2z",
  },
  {
    label: "X",
    href: "https://x.com",
    path: "M17.2 3H20l-6.6 7.5L21 21h-6.1l-4.8-6.2L4.6 21H1.8l7-8L1 3h6.3l4.3 5.7L17.2 3zm-1.1 16.3h1.7L6.4 4.6H4.6l11.5 14.7z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nfon-carl",
    path: "M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.2 8.2h4.6V23H.2V8.2zm7.7 0h4.4v2h.1c.6-1.2 2.1-2.4 4.4-2.4 4.7 0 5.5 3.1 5.5 7.1V23h-4.6v-7.2c0-1.7 0-3.9-2.4-3.9s-2.8 1.9-2.8 3.8V23H7.9V8.2z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/mayorcarl48/",
    path: "M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.4-.7.7-1 .3-.3.6-.5 1-.7.3-.1.6-.3 1.7-.3 1.3-.1 1.7-.1 4.8-.1zm0 2c-3.1 0-3.5 0-4.8.1-1.1.1-1.4.2-1.7.3-.4.2-.7.4-1 .7-.3.3-.5.6-.7 1-.1.3-.3.6-.3 1.7-.1 1.3-.1 1.7-.1 4.8s0 3.5.1 4.8c.1 1.1.2 1.4.3 1.7.2.4.4.7.7 1 .3.3.6.5 1 .7.3.1.6.3 1.7.3 1.3.1 1.7.1 4.8.1s3.5 0 4.8-.1c1.1-.1 1.4-.2 1.7-.3.4-.2.7-.4 1-.7.3-.3.5-.6.7-1 .1-.3.3-.6.3-1.7.1-1.3.1-1.7.1-4.8s0-3.5-.1-4.8c-.1-1.1-.2-1.4-.3-1.7-.2-.4-.4-.7-.7-1-.3-.3-.6-.5-1-.7-.3-.1-.6-.3-1.7-.3-1.3-.1-1.7-.1-4.8-.1zm0 3.4a5.1 5.1 0 1 1 0 10.2 5.1 5.1 0 0 1 0-10.2zm0 8.4a3.3 3.3 0 1 0 0-6.6 3.3 3.3 0 0 0 0 6.6zm6.5-8.6a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z",
  },
];

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL!, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          message: data.get("message"),
        }),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-coal px-6 py-14 text-paper shadow-float sm:px-12 sm:py-16">
        <LaptopIcon className="absolute top-8 left-8 h-5 w-5 text-flame" />
        <LaptopIcon className="absolute right-10 bottom-10 h-4 w-4 text-flame" />

        <div className="text-center">
          <p className="flex items-center justify-center gap-2 text-[13px] font-medium text-paper/70">
            <span className="h-px w-4 bg-flame" aria-hidden="true" />
            Have a project in mind?
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl text-4xl font-bold tracking-[-0.03em] sm:text-5xl">
            Let&rsquo;s{" "}
            <span className="font-display italic font-normal text-flame">
              build
            </span>{" "}
            something intelligent together
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-[1.7] text-paper/60">
            Tell me about your idea — I&rsquo;ll reply within 24 hours with a
            plan for how we can ship it.
          </p>
        </div>

        <div className="relative mx-auto mt-12 grid max-w-4xl gap-10 text-left lg:grid-cols-[0.85fr_1.15fr]">
          <div className="flex flex-col justify-between gap-10">
            <div>
              <p className="text-[11px] font-medium tracking-wide text-paper/50 uppercase">
                Email
              </p>
              <a
                href="mailto:hello@nfoncarl.dev"
                className="group mt-2 inline-flex items-center gap-2 text-lg font-semibold text-paper transition-colors duration-200 hover:text-flame focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-flame"
              >
                hello@nfoncarl.dev
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" aria-hidden="true">
                  <path d="M4 12 12 4m0 0H6m6 0v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            <div>
              <p className="text-[11px] font-medium tracking-wide text-paper/50 uppercase">
                Follow Me On
              </p>
              <ul className="mt-3 flex items-center gap-2">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      aria-label={social.label}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-paper/10 text-paper transition-[background-color,color,transform] duration-200 hover:-translate-y-0.5 hover:bg-flame focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame active:translate-y-0"
                    >
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
                        <path d={social.path} />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl bg-paper p-6 text-ink shadow-lift sm:p-8">
            {status === "sent" ? (
              <div className="flex min-h-[280px] flex-col items-center justify-center text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-flame text-paper shadow-flame">
                  <svg viewBox="0 0 16 16" className="h-5 w-5" fill="none" aria-hidden="true">
                    <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <h3 className="mt-4 text-lg font-bold tracking-tight">
                  Message sent
                </h3>
                <p className="mt-1 max-w-xs text-sm leading-[1.7] text-ash">
                  Thanks for reaching out — I&rsquo;ll get back to you within
                  24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="text-[11px] font-medium tracking-wide text-ash uppercase"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="mt-2 w-full rounded-xl border border-ink/10 bg-cream px-4 py-3 text-sm text-ink placeholder:text-ash/70 transition-colors duration-200 focus:border-flame focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="text-[11px] font-medium tracking-wide text-ash uppercase"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="mt-2 w-full rounded-xl border border-ink/10 bg-cream px-4 py-3 text-sm text-ink placeholder:text-ash/70 transition-colors duration-200 focus:border-flame focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="text-[11px] font-medium tracking-wide text-ash uppercase"
                  >
                    WhatsApp Number
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+237 6XX XXX XXX"
                    className="mt-2 w-full rounded-xl border border-ink/10 bg-cream px-4 py-3 text-sm text-ink placeholder:text-ash/70 transition-colors duration-200 focus:border-flame focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="text-[11px] font-medium tracking-wide text-ash uppercase"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell me a bit about your project..."
                    className="mt-2 w-full resize-none rounded-xl border border-ink/10 bg-cream px-4 py-3 text-sm text-ink placeholder:text-ash/70 transition-colors duration-200 focus:border-flame focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group mt-1 inline-flex items-center justify-center gap-2 self-start rounded-full bg-flame py-3 pr-2.5 pl-7 text-sm font-semibold text-paper shadow-flame transition-[transform,background-color,opacity] duration-200 hover:-translate-y-0.5 hover:bg-flame-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-flame active:translate-y-0 disabled:pointer-events-none disabled:opacity-60"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-paper text-flame transition-transform duration-200 group-hover:rotate-45">
                    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
                      <path d="M4 12 12 4m0 0H6m6 0v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>

                {status === "error" && (
                  <p className="text-[13px] font-medium text-flame">
                    Couldn&rsquo;t send your message — please email me directly
                    at hello@nfoncarl.dev.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
