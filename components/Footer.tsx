import LaptopIcon from "./LaptopIcon";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
];

export default function Footer() {
  return (
    <footer id="contact" className="mx-auto max-w-6xl px-5 pb-10 sm:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-coal px-6 py-16 text-center text-paper sm:px-12">
        <LaptopIcon className="absolute top-8 left-8 h-5 w-5 text-flame" />
        <LaptopIcon className="absolute right-10 bottom-10 h-4 w-4 text-flame" />
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
        <a
          href="mailto:hello@nfoncarl.dev"
          className="group mt-8 inline-flex items-center gap-2 rounded-full bg-flame py-3 pr-2.5 pl-7 text-sm font-semibold text-paper shadow-flame transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-flame-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper active:translate-y-0"
        >
          hello@nfoncarl.dev
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-paper text-flame transition-transform duration-200 group-hover:rotate-45">
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
              <path d="M4 12 12 4m0 0H6m6 0v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </a>
      </div>

      <div className="mt-8 flex flex-col items-center justify-between gap-5 sm:flex-row">
        <a
          href="#home"
          className="flex items-center gap-2 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-flame"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-flame text-[13px] font-bold text-paper">
            N
          </span>
          <span className="text-lg font-semibold tracking-tight">
            Nfon<span className="text-flame">.</span>
          </span>
        </a>

        <ul className="flex flex-wrap items-center justify-center gap-5">
          {footerLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="rounded-sm text-[13px] font-medium text-ink/70 transition-colors duration-200 hover:text-flame focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-flame active:text-flame-deep"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-xs text-ash">
          © 2026 Nfon Carl. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
