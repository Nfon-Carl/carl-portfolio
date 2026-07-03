import LaptopIcon from "./LaptopIcon";

const testimonials = [
  {
    quote:
      "Carl rebuilt our site in Next.js and added an AI assistant that now handles 70% of support tickets. The impact was immediate.",
    name: "Amara Jones",
    role: "Founder, Retail SaaS",
    avatar: "https://placehold.co/96x96/e8e4da/74736d?text=AJ",
  },
  {
    quote:
      "The automation workflows he set up saved our team dozens of hours every week. Clear communication, on-time delivery.",
    name: "David Okon",
    role: "Operations Lead, Logistics Co.",
    avatar: "https://placehold.co/96x96/ddd8ca/74736d?text=DO",
  },
  {
    quote:
      "Fast, thoughtful, and technically excellent. Our new dashboard is the best tool in our stack — the team uses it daily.",
    name: "Lena Fischer",
    role: "Product Manager, Fintech",
    avatar: "https://placehold.co/96x96/c9c2b0/74736d?text=LF",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-flame" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="text-center">
        <p className="flex items-center justify-center gap-2 text-[13px] font-medium text-ink">
          <span className="h-px w-4 bg-flame" aria-hidden="true" />
          Testimonials
        </p>
        <h2 className="relative mt-2 inline-block text-4xl font-bold tracking-[-0.03em] sm:text-5xl">
          What clients{" "}
          <span className="font-display italic font-normal text-flame">say</span>
          <LaptopIcon className="absolute -top-1 -right-6 h-4 w-4 text-flame" />
        </h2>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col rounded-3xl bg-paper p-7 shadow-lift"
          >
            <Stars />
            <blockquote className="mt-4 flex-1 text-sm leading-[1.7] text-ash">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <img
                src={t.avatar}
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-bold">{t.name}</p>
                <p className="text-xs text-ash">{t.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
