import LaptopIcon from "./LaptopIcon";

const tags = [
  { label: "Softwares", accent: false },
  { label: "Websites", accent: true },
  { label: "Booking Applications", accent: false },
  { label: "Ai Automations", accent: false },
  { label: "Google Setup", accent: false },
];

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
    path: "M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4 1.3-.1 1.7-.1 4.9-.1zm0 2c-3.1 0-3.5 0-4.8.1-1.1.1-1.4.2-1.7.3-.4.2-.7.4-1 .7-.3.3-.5.6-.7 1-.1.3-.3.6-.3 1.7-.1 1.3-.1 1.7-.1 4.8s0 3.5.1 4.8c.1 1.1.2 1.4.3 1.7.2.4.4.7.7 1 .3.3.6.5 1 .7.3.1.6.3 1.7.3 1.3.1 1.7.1 4.8.1s3.5 0 4.8-.1c1.1-.1 1.4-.2 1.7-.3.4-.2.7-.4 1-.7.3-.3.5-.6.7-1 .1-.3.3-.6.3-1.7.1-1.3.1-1.7.1-4.8s0-3.5-.1-4.8c-.1-1.1-.2-1.4-.3-1.7-.2-.4-.4-.7-.7-1-.3-.3-.6-.5-1-.7-.3-.1-.6-.3-1.7-.3-1.3-.1-1.7-.1-4.8-.1zm0 3.4a5.1 5.1 0 1 1 0 10.2 5.1 5.1 0 0 1 0-10.2zm0 8.4a3.3 3.3 0 1 0 0-6.6 3.3 3.3 0 0 0 0 6.6zm6.5-8.6a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z",
  },
];

const avatarTints = ["e8e4da", "d9d4c5", "c9c2b0", "b5ad99"];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-6xl flex-col justify-center px-5 pt-8 pb-2 sm:px-8">
        {/* Heading block */}
        <div className="relative flex flex-col items-center text-center">
          <span className="flex items-center gap-2 rounded-full bg-paper px-4 py-1.5 text-[13px] font-medium text-ink shadow-lift">
            <span className="h-px w-4 bg-flame" aria-hidden="true" />
            Hello There!
          </span>

          <h1 className="mt-4 text-[44px] leading-[1.05] font-bold tracking-[-0.03em] sm:text-6xl lg:text-7xl">
            I&rsquo;m{" "}
            <span className="relative font-display italic font-normal text-flame">
              Nfon Carl
              <LaptopIcon className="absolute -top-2 -right-6 h-5 w-5 text-flame sm:-right-8 sm:h-6 sm:w-6" />
            </span>
          </h1>

          <p className="mt-4 text-sm text-ash sm:text-[15px]">
            Web Developer &amp; AI Specialist
          </p>

          {/* Rotating hire-me badge */}
          <div className="absolute -top-2 right-0 hidden lg:block" aria-hidden="true">
            <div className="relative h-24 w-24">
              <svg viewBox="0 0 100 100" className="h-full w-full animate-spin-slow">
                <defs>
                  <path
                    id="badge-circle"
                    d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0"
                  />
                </defs>
                <text className="fill-ink text-[11px] font-semibold tracking-[0.28em]">
                  <textPath href="#badge-circle">
                    HIRE ME • HIRE ME • HIRE ME •
                  </textPath>
                </text>
              </svg>
              <span className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-flame shadow-flame">
                <LaptopIcon className="h-4 w-4 text-paper" />
              </span>
            </div>
          </div>
        </div>

        {/* Photo + side columns */}
        <div className="relative mt-6 grid items-end gap-10 pb-16 lg:grid-cols-[1fr_auto_1fr] lg:gap-6 lg:pb-20">
          {/* Left: quote + reviews */}
          <div className="order-2 mx-auto max-w-xs text-center lg:order-1 lg:self-center lg:text-left">
            <span className="font-display text-5xl leading-none text-flame" aria-hidden="true">
              &ldquo;
            </span>
            <p className="mt-1 text-sm leading-[1.7] text-ash">
              Carl&rsquo;s rebuild of our platform doubled our client acquisition —
              highly recommended!
            </p>
            <div className="mt-5 flex items-center justify-center gap-3 lg:justify-start">
              <div className="flex -space-x-2.5">
                {avatarTints.map((tint, i) => (
                  <img
                    key={tint}
                    src={`https://placehold.co/56x56/${tint}/74736d?text=${i + 1}`}
                    alt=""
                    width={28}
                    height={28}
                    className="h-7 w-7 rounded-full border-2 border-cream object-cover"
                  />
                ))}
              </div>
            </div>
            <p className="mt-2 text-sm font-bold">
              120+ Reviews <span className="font-medium text-ash">(4.9 of 5)</span>
            </p>
            <p className="mt-0.5 text-[11px] text-ash/70">
              Reviews from valued clients
            </p>
          </div>

          {/* Center: portrait on orange circle */}
          <div className="relative order-1 mx-auto lg:order-2">
            <div className="relative flex h-[330px] w-[300px] items-end justify-center sm:h-[410px] sm:w-[360px]">
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-1/2 h-[240px] w-[240px] -translate-x-1/2 rounded-full bg-flame sm:h-[300px] sm:w-[300px]"
              >
                <div className="absolute inset-0 rounded-full opacity-30 [background-image:radial-gradient(circle_at_center,rgb(251_250_247/0.5)_1px,transparent_1px)] [background-size:14px_14px]" />
              </div>
              <img
                src="/portrait.png"
                alt="Portrait of Nfon Carl"
                width={830}
                height={809}
                className="relative z-10 h-[310px] w-auto max-w-none -translate-x-[20%] object-contain object-bottom sm:h-[385px]"
              />
            </div>

            {/* CTA buttons overlapping photo bottom */}
            <div className="absolute -bottom-6 left-1/2 z-20 flex w-max -translate-x-1/2 items-center gap-2 rounded-full bg-paper p-1.5 shadow-float">
              <a
                href="#contact"
                className="group flex items-center gap-2 rounded-full bg-coal py-2.5 pr-2 pl-5 text-sm font-semibold text-paper transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-flame-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame active:translate-y-0"
              >
                Hire Me
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-flame text-paper transition-transform duration-200 group-hover:rotate-45">
                  <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" aria-hidden="true">
                    <path d="M4 12 12 4m0 0H6m6 0v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
              <a
                href="#projects"
                className="rounded-full border border-ink/15 px-5 py-2.5 text-sm font-semibold text-ink transition-[transform,background-color,color] duration-200 hover:-translate-y-0.5 hover:bg-coal hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame active:translate-y-0"
              >
                View Recent Projects
              </a>
            </div>
          </div>

          {/* Right: tags + socials */}
          <div className="order-3 flex flex-col items-center gap-6 lg:items-end lg:self-center">
            <div className="flex flex-wrap justify-center gap-2 lg:max-w-[240px] lg:justify-end">
              {tags.map((tag) => (
                <span
                  key={tag.label}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-medium shadow-lift ${
                    tag.accent ? "bg-flame text-paper" : "bg-coal text-paper"
                  }`}
                >
                  {tag.label}
                </span>
              ))}
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-flame shadow-flame">
                <LaptopIcon className="h-3.5 w-3.5 text-paper" />
              </span>
            </div>

            <div className="flex flex-col items-center gap-3 lg:items-end">
              <p className="text-[11px] font-medium tracking-wide text-ash">
                Follow Me On
              </p>
              <ul className="flex items-center gap-2">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      aria-label={social.label}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-ink/8 text-ink transition-[background-color,color,transform] duration-200 hover:-translate-y-0.5 hover:bg-flame hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame active:translate-y-0"
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
        </div>
      </div>
    </section>
  );
}
