import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LaptopIcon from "@/components/LaptopIcon";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects — Nfon Carl",
  description:
    "All projects by Nfon Carl — web apps, AI products, and automations built for real businesses.",
};

export default function ProjectsPage() {
  return (
    <main>
      <Navbar />
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <Link
          href="/#projects"
          className="group inline-flex items-center gap-2 rounded-full text-[13px] font-medium text-ash transition-colors duration-200 hover:text-flame focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-flame"
        >
          <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" fill="none" aria-hidden="true">
            <path d="M10 4 6 8l4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to Home
        </Link>

        <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="flex items-center gap-2 text-[13px] font-medium text-ink">
              <span className="h-px w-4 bg-flame" aria-hidden="true" />
              My Work
            </p>
            <h1 className="relative mt-2 text-4xl font-bold tracking-[-0.03em] sm:text-5xl">
              All{" "}
              <span className="font-display italic font-normal text-flame">
                projects
              </span>
              <LaptopIcon className="absolute -top-1 ml-1 inline h-4 w-4 text-flame" />
            </h1>
          </div>
          <p className="max-w-xs text-[13px] leading-[1.7] text-ash">
            The full archive — websites, software, AI integrations, and
            automations I&rsquo;ve shipped for clients.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
