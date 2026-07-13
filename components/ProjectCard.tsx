import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const hasLiveSite = Boolean(project.url);

  return (
    <a
      href={hasLiveSite ? project.url : "/#contact"}
      rel={hasLiveSite ? "noopener" : undefined}
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
  );
}
