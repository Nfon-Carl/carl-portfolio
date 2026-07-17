import LaptopIcon from "./LaptopIcon";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "60+", label: "Projects Delivered" },
  { value: "40+", label: "Happy Clients" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative mx-auto">
          <div className="relative flex h-[310px] w-[280px] items-end justify-center sm:h-[380px] sm:w-[340px]">
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-1/2 h-[225px] w-[225px] -translate-x-1/2 rounded-full bg-flame sm:h-[280px] sm:w-[280px]"
            >
              <div className="absolute inset-0 rounded-full opacity-30 [background-image:radial-gradient(circle_at_center,rgb(251_250_247/0.5)_1px,transparent_1px)] [background-size:14px_14px]" />
            </div>
            <img
              src="/portrait.png"
              alt="Nfon Carl working"
              width={830}
              height={809}
              className="relative z-10 h-[290px] w-auto max-w-none -translate-x-[20%] object-contain object-bottom sm:h-[355px]"
            />
          </div>
          <span className="absolute top-4 right-2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-coal shadow-float">
            <LaptopIcon className="h-4 w-4 text-flame" />
          </span>
        </div>

        <div>
          <p className="flex items-center gap-2 text-[13px] font-medium text-ink">
            <span className="h-px w-4 bg-flame" aria-hidden="true" />
            About Me
          </p>
          <h2 className="mt-2 text-4xl font-bold tracking-[-0.03em] sm:text-5xl">
            Turning{" "}
            <span className="font-display italic font-normal text-flame">
              ideas
            </span>{" "}
            into intelligent Solutions
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-[1.7] text-ash">
            I&rsquo;m Nfon Carl, a web developer and AI specialist. I build
            modern web applications with Next.js and React, then make them
            smarter with custom AI agents, LLM integrations, and automation.
            Whether you need a polished marketing site, a full-stack product,
            or an AI copilot for your business, I ship work that performs.
          </p>

          <dl className="mt-8 flex flex-wrap gap-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-3xl font-bold tracking-tight text-flame">
                  {stat.value}
                </dd>
                <dd className="mt-1 text-xs font-medium text-ash">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>

          <a
            href="#contact"
            className="group mt-9 inline-flex items-center gap-2 rounded-full bg-coal py-2.5 pr-2 pl-6 text-sm font-semibold text-paper shadow-lift transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-flame focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-flame active:translate-y-0"
          >
            Let&rsquo;s Talk
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-flame text-paper transition-transform duration-200 group-hover:rotate-45">
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
                <path d="M4 12 12 4m0 0H6m6 0v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
