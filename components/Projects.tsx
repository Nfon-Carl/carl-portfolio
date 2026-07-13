import Link from "next/link";
import LaptopIcon from "./LaptopIcon";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/projects";

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
        {projects.slice(0, 4).map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="/projects"
          className="group flex items-center gap-2 rounded-full bg-flame py-2.5 pr-2 pl-6 text-sm font-semibold text-paper shadow-flame transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-flame-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-flame active:translate-y-0"
        >
          View More
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-paper text-flame transition-transform duration-200 group-hover:rotate-45">
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
              <path d="M4 12 12 4m0 0H6m6 0v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </Link>
      </div>
    </section>
  );
}
