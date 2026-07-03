"use client";

import { useState } from "react";
import LaptopIcon from "./LaptopIcon";

const services = [
  {
    title: "Website Development",
    tags: ["Next.js & React", "Full-Stack Apps", "Performance", "SEO-Ready"],
    description:
      "Fast, accessible, production-grade websites and web apps built with modern frameworks and clean, maintainable code.",
    image: "https://placehold.co/640x360/e8e4da/74736d?text=Website+Development",
  },
  {
    title: "Software Development",
    tags: ["Custom Software", "Internal Tools", "System Architecture", "Scripting"],
    description:
      "End-to-end software built around how your business actually works — internal tools, systems, and utilities designed to last.",
    image: "https://placehold.co/640x360/e8e4da/74736d?text=Software+Development",
  },
  {
    title: "AI Integration & Agents",
    tags: ["Custom AI Agents", "LLM Integration", "RAG Pipelines", "Chatbots"],
    description:
      "Practical AI woven into your product — agents, assistants, and retrieval pipelines that automate real work and delight users.",
    image: "https://placehold.co/640x360/e8e4da/74736d?text=AI+Integration",
  },
  {
    title: "Automation & Workflows",
    tags: ["Process Automation", "Integrations", "Zapier & n8n", "Data Sync"],
    description:
      "Connect your tools and eliminate repetitive work with reliable automations that run quietly in the background.",
    image: "https://placehold.co/640x360/e8e4da/74736d?text=Automation",
  },
];

export default function Services() {
  const [open, setOpen] = useState(0);

  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="flex items-center gap-2 text-[13px] font-medium text-ink">
            <span className="h-px w-4 bg-flame" aria-hidden="true" />
            My Specialization
          </p>
          <h2 className="relative mt-2 text-4xl font-bold tracking-[-0.03em] sm:text-5xl">
            <span className="font-display italic font-normal text-flame">
              Services
            </span>{" "}
            I Provide
            <LaptopIcon className="absolute -top-1 ml-1 inline h-4 w-4 text-flame" />
          </h2>
        </div>
        <p className="max-w-xs text-[13px] leading-[1.7] text-ash">
          From first commit to deployed product — development, AI, and
          automation services that move your business forward.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-3">
        {services.map((service, i) => {
          const isOpen = open === i;
          const number = String(i + 1).padStart(2, "0");
          const panelId = `service-panel-${i}`;

          return (
            <div
              key={service.title}
              className={`rounded-2xl shadow-lift transition-colors duration-300 ${
                isOpen ? "bg-coal" : "bg-paper"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className={`group flex w-full items-center gap-6 px-6 py-5 text-left transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame active:translate-y-0 sm:px-8 ${
                  isOpen ? "text-paper" : "text-ink"
                }`}
              >
                <span
                  className={`text-sm font-semibold ${isOpen ? "text-paper/60" : "text-ash"}`}
                >
                  {number}.
                </span>
                <span
                  className={`flex-1 text-base font-bold tracking-tight transition-colors duration-200 sm:text-lg ${
                    isOpen ? "" : "group-hover:text-flame"
                  }`}
                >
                  {service.title}
                </span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-[background-color,color] duration-200 ${
                    isOpen
                      ? "bg-flame text-paper"
                      : "bg-ink/8 text-ash group-hover:bg-flame group-hover:text-paper"
                  }`}
                >
                  <svg
                    viewBox="0 0 16 16"
                    className={`h-3.5 w-3.5 transition-transform duration-300 ease-out ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 6l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>

              <div
                id={panelId}
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-8 sm:px-8">
                    <ul className="flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full bg-paper/10 px-3 py-1 text-[11px] font-medium text-paper/90"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 max-w-md text-[13px] leading-[1.7] text-paper/60">
                      {service.description}
                    </p>
                    <img
                      src={service.image}
                      alt=""
                      width={640}
                      height={360}
                      className="mt-6 w-full max-w-md rounded-2xl object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href="#projects"
          className="group flex items-center gap-2 rounded-full bg-flame py-2.5 pr-2 pl-6 text-sm font-semibold text-paper shadow-flame transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-flame-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-flame active:translate-y-0"
        >
          View All Services
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-paper text-flame transition-transform duration-200 group-hover:rotate-45">
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
              <path d="M4 12 12 4m0 0H6m6 0v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}
