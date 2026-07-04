"use client";

import { useState } from "react";

const links = [
  { label: "Home", href: "#home", active: true },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-cream/90 backdrop-blur-md">
      <nav
        aria-label="Main"
        className="mx-auto grid h-16 max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-5 sm:px-8 lg:flex lg:justify-between"
      >
        <a
          href="#home"
          className="flex items-center gap-2 justify-self-start rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-flame"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-flame text-[13px] font-bold text-paper">
            N
          </span>
          <span className="text-lg font-semibold tracking-tight">
            Nfon<span className="text-flame">.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`rounded-sm text-[13px] font-medium transition-colors duration-200 hover:text-flame focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-flame active:text-flame-deep ${
                  link.active ? "text-flame" : "text-ink/70"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="justify-self-center rounded-full bg-coal px-5 py-2.5 text-[13px] font-semibold text-paper shadow-lift transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-flame focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-flame active:translate-y-0 lg:justify-self-auto"
        >
          Contact Me
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          className="flex h-9 w-9 items-center justify-center justify-self-end rounded-full text-ink transition-colors duration-200 hover:bg-ink/8 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame active:bg-ink/12 lg:hidden"
        >
          <span className="relative flex h-3.5 w-4 flex-col justify-between">
            <span
              className={`h-[1.8px] w-full rounded-full bg-ink transition-transform duration-200 ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[1.8px] w-full rounded-full bg-ink transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-[1.8px] w-full rounded-full bg-ink transition-transform duration-200 ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`grid transition-[grid-template-rows] duration-300 ease-out lg:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden border-t border-ink/10">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-3 sm:px-8">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-sm py-2.5 text-sm font-semibold transition-colors duration-200 hover:text-flame focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-flame active:text-flame-deep ${
                    link.active ? "text-flame" : "text-ink/80"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
