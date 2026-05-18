"use client";

import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";

const META = [
  { location: "Mexico City, MX", period: "2021 – 2023" },
  { location: "Amsterdam, NL",   period: "2023 – 2024" },
  { location: "Amsterdam, NL",   period: "2023 – 2024" },
];

export default function Experience() {
  const { lang } = useLang();
  const t = translations[lang].experience;

  return (
    <section id="experience" className="bg-[#F5F5F5] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#F5620F] mb-4">
          {t.label}
        </p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0a0a0a] mb-16">
          {t.heading}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {t.roles.map((role, i) => (
            <div key={i} className="bg-white p-8 flex flex-col gap-6">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-gray-400">
                  {META[i].period}
                </p>
                <h3 className="mt-2 text-xl font-bold text-[#0a0a0a]">{role.title}</h3>
                <p className="text-sm text-gray-500 mt-0.5">
                  {role.org} · {META[i].location}
                </p>
              </div>

              <div className="h-px bg-[#F5620F] w-8" />

              <ul className="space-y-3">
                {role.bullets.map((b, j) => (
                  <li key={j} className="text-sm text-gray-600 leading-relaxed flex gap-3">
                    <span className="text-[#1A4FEE] mt-1 shrink-0">—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
