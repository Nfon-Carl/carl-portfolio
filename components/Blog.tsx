import LaptopIcon from "./LaptopIcon";

const posts = [
  {
    date: "Jun 18, 2026",
    title: "Shipping AI agents that actually help your users",
    excerpt:
      "Most chatbots disappoint. Here's the playbook I use to build agents that resolve real tasks instead of deflecting them.",
    image: "https://placehold.co/720x440/e8e4da/74736d?text=AI+Agents",
  },
  {
    date: "May 30, 2026",
    title: "Next.js 15 in production: what actually matters",
    excerpt:
      "Server components, caching, and the handful of decisions that make or break performance on real projects.",
    image: "https://placehold.co/720x440/ddd8ca/74736d?text=Next.js",
  },
  {
    date: "May 09, 2026",
    title: "Automate the boring 40% of your business",
    excerpt:
      "A practical guide to finding the workflows worth automating — and the ones you should leave alone.",
    image: "https://placehold.co/720x440/c9c2b0/74736d?text=Automation",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="flex items-center gap-2 text-[13px] font-medium text-ink">
            <span className="h-px w-4 bg-flame" aria-hidden="true" />
            Blog
          </p>
          <h2 className="relative mt-2 text-4xl font-bold tracking-[-0.03em] sm:text-5xl">
            Latest{" "}
            <span className="font-display italic font-normal text-flame">
              insights
            </span>
            <LaptopIcon className="absolute -top-1 ml-1 inline h-4 w-4 text-flame" />
          </h2>
        </div>
        <p className="max-w-xs text-[13px] leading-[1.7] text-ash">
          Notes from the workshop — practical writing on web development, AI,
          and automation.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <a
            key={post.title}
            href="#blog"
            className="group rounded-3xl bg-paper p-3 shadow-lift transition-transform duration-200 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame active:translate-y-0"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={post.image}
                alt=""
                width={720}
                height={440}
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
            </div>
            <div className="px-3 py-4">
              <p className="text-[11px] font-medium tracking-wide text-flame">
                {post.date}
              </p>
              <h3 className="mt-1 text-base font-bold tracking-tight">
                {post.title}
              </h3>
              <p className="mt-2 text-[13px] leading-[1.7] text-ash">
                {post.excerpt}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
