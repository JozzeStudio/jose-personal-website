"use client";

import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";

const works = [
  { number: "01", title: "Beyond Bounds", href: "https://beyond-bounds.nl/", external: true },
  { number: "02", title: "IKEA", href: null, external: false },
  { number: "03", title: "Serport", href: "https://serport.com/", external: true },
];

function Arrow() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="shrink-0 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200"
    >
      <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function SelectedWork() {
  const { lang } = useLang();
  const t = translations[lang].work;

  return (
    <section id="work" className="bg-white py-20 md:py-28">
      <div className="px-6 md:px-10">
        <div className="flex items-center justify-between mb-10 border-b border-gray-100 pb-4">
          <p className="text-[10px] tracking-[0.25em] uppercase text-gray-400">
            {t.label}
          </p>
          <span className="text-[10px] text-gray-400">[{works.length}]</span>
        </div>

        <div>
          {works.map((work, i) => {
            const item = t.items[i];
            const inner = (
              <div className="group flex items-center justify-between py-6 border-b border-gray-100 cursor-pointer">
                <div className="flex items-start gap-6 md:gap-10">
                  <span className="text-[11px] text-gray-400 mt-1 shrink-0 w-6">
                    {work.number}
                  </span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-[#0a0a0a] group-hover:text-[#1A4FEE] transition-colors">
                      {work.title}
                    </h3>
                    <p className="text-sm text-gray-400 mt-0.5">{item.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 md:gap-8 ml-4">
                  <div className="hidden md:flex gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] tracking-[0.12em] uppercase text-gray-400 bg-gray-50 px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {work.href && <Arrow />}
                </div>
              </div>
            );

            if (!work.href) return <div key={work.number}>{inner}</div>;

            return work.external ? (
              <a key={work.number} href={work.href} target="_blank" rel="noopener noreferrer">
                {inner}
              </a>
            ) : (
              <a key={work.number} href={work.href}>{inner}</a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
