import LaptopIcon from "./LaptopIcon";

const items = [
  "Web Development",
  "AI Agents",
  "Next.js",
  "Automation",
  "LLM Apps",
  "API Design",
  "React",
  "Chatbots",
];

export default function Marquee() {
  return (
    <div className="overflow-hidden bg-coal py-4" aria-hidden="true">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {items.map((item) => (
              <span key={`${copy}-${item}`} className="flex items-center">
                <span className="px-6 text-lg font-semibold tracking-tight text-paper">
                  {item}
                </span>
                <LaptopIcon className="h-4 w-4 shrink-0 text-flame" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
