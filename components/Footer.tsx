const footerLinks = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Blog", href: "/#blog" },
];

export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-5 pb-10 sm:px-8">
      <div className="flex flex-col items-center justify-between gap-5 border-t border-ink/10 pt-8 sm:flex-row">
        <a
          href="/#home"
          className="flex items-center gap-2 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-flame"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-flame text-[13px] font-bold text-paper">
            C
          </span>
          <span className="text-lg font-semibold tracking-tight">
            Carl<span className="text-flame">.</span>
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
