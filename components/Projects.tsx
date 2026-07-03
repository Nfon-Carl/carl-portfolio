import LaptopIcon from "./LaptopIcon";

const projects = [
  {
    title: "AI Customer Support Platform",
    tag: "AI Agents · Next.js",
    image: "https://placehold.co/800x520/e8e4da/74736d?text=Support+Platform",
  },
  {
    title: "SaaS Analytics Dashboard",
    tag: "Full-Stack · Data Viz",
    image: "https://placehold.co/800x520/ddd8ca/74736d?text=Analytics+Dashboard",
  },
  {
    title: "E-commerce with Smart Recommendations",
    tag: "Next.js · LLM Integration",
    image: "https://placehold.co/800x520/e8e4da/74736d?text=E-commerce",
  },
  {
    title: "Real-Estate Assistant Chatbot",
    tag: "RAG · Automation",
    image: "https://placehold.co/800x520/ddd8ca/74736d?text=Assistant+Chatbot",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="flex items-center gap-2 text-[13px] font-medium text-ink">
            <span className="h-px w-4 bg-flame" aria-hidden="true" />
            Recent Work
          </p>
          <h2 className="relative mt-2 text-4xl font-bold tracking-[-0.03em] sm:text-5xl">
            Featured{" "}
            <span className="font-display italic font-normal text-flame">
              projects
            </span>
            <LaptopIcon className="absolute -top-1 ml-1 inline h-4 w-4 text-flame" />
          </h2>
        </div>
        <p className="max-w-xs text-[13px] leading-[1.7] text-ash">
          A selection of shipped work — web apps, AI products, and automations
          built for real businesses.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.title}
            href="#contact"
            className="group rounded-3xl bg-paper p-3 shadow-lift transition-transform duration-200 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame active:translate-y-0"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={project.image}
                alt={project.title}
                width={800}
                height={520}
                className="aspect-[8/5] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-flame/15 mix-blend-multiply"
              />
              <span className="absolute right-3 bottom-3 flex h-9 w-9 items-center justify-center rounded-full bg-paper text-ink transition-transform duration-200 group-hover:rotate-45">
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
                  <path d="M4 12 12 4m0 0H6m6 0v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
            <div className="px-3 py-4">
              <p className="text-[11px] font-medium tracking-wide text-flame">
                {project.tag}
              </p>
              <h3 className="mt-1 text-lg font-bold tracking-tight">
                {project.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
