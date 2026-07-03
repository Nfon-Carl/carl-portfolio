const links = [
  { label: "Home", href: "#home", active: true },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-cream/90 backdrop-blur-md">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
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
          className="rounded-full bg-coal px-5 py-2.5 text-[13px] font-semibold text-paper shadow-lift transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-flame focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-flame active:translate-y-0"
        >
          Contact Me
        </a>
      </nav>
    </header>
  );
}
