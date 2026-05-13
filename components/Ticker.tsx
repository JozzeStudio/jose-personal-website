const ITEMS = [
  "SolidWorks",
  "Fusion 360",
  "HubSpot",
  "Bambu Studio",
  "Claude Code",
  "ChatGPT",
  "Perplexity",
  "Microsoft Office",
  "Notion",
  "CRM",
  "3D Printing",
  "Product Developer",
  "Product Designer",
  "Spanish",
  "English",
  "Dutch",
  "Amsterdam",
  "San Diego",
  "Ensenada",
];

const text = ITEMS.join(" · ") + " · ";

export default function Ticker() {
  return (
    <div className="bg-[#F5620F] overflow-hidden py-3 select-none">
      <div className="flex whitespace-nowrap animate-ticker">
        <span className="font-medium text-white text-[11px] tracking-[0.15em] uppercase shrink-0">
          {text}
          {text}
          {text}
          {text}
        </span>
      </div>
    </div>
  );
}
