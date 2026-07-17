export type Project = {
  title: string;
  tag: string;
  image: string;
  /** Live site — opens in a new tab. Cards without a url link to the contact section. */
  url?: string;
};

export const projects: Project[] = [
  {
    title: "Legacy Royale Hotel",
    tag: "Landing / Booking Page",
    image: "/royal-legacy.webp",
    url: "https://legacy-royal.vercel.app/",
  },
  {
    title: "Get Fit With Steppa",
    tag: "Gym/Fitness Coach",
    image: "/steppa.webp",
    url: "https://steppa-vert.vercel.app/",
  },
  {
    title: "K & Q Movers",
    tag: "Cleaning & Moving Services",
    image: "/moving-site.webp",
    url: "https://k-qmovinghaulingservicellc.com/",
  },
  {
    title: "Braids By Estefania",
    tag: "Bookings / Scheduling",
    image: "/estefania.webp",
    url: "https://braidbyestefania.hair/",
  },
  {
    title: "Hotel Management System",
    tag: "Full-Stack · Dashboards",
    image: "https://placehold.co/800x520/e8e4da/74736d?text=Hotel+Management",
  },
  {
    title: "Barbershop Booking Platform",
    tag: "Next.js · Scheduling",
    image: "https://placehold.co/800x520/ddd8ca/74736d?text=Barbershop+Booking",
  },
  {
    title: "Cleaning Services Website",
    tag: "Web Design · SEO",
    image: "https://placehold.co/800x520/e8e4da/74736d?text=Cleaning+Services",
  },
  {
    title: "Lead-Gen Outreach Automation",
    tag: "Automation · n8n",
    image: "https://placehold.co/800x520/ddd8ca/74736d?text=Outreach+Automation",
  },
];
