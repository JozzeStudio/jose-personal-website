"use client";

import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";

const META = [
  { school: "San Diego State University", location: "San Diego, CA", years: "2017 – 2021" },
  { school: "University of Amsterdam",    location: "Amsterdam, NL",  years: "2022 – 2023" },
];

export default function Education() {
  const { lang } = useLang();
  const t = translations[lang].education;

  return (
    <section id="education" className="bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#F5620F] mb-4">
          {t.label}
        </p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0a0a0a] mb-16">
          {t.heading}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {t.degrees.map((d, i) => (
            <div key={i} className="border-t-4 border-[#F5620F] pt-8 pr-8 pb-8">
              <p className="text-xs font-semibold tracking-widest uppercase text-gray-400">
                {META[i].years}
              </p>
              <h3 className="mt-3 text-2xl font-bold text-[#0a0a0a] leading-tight">
                {d.degree}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {META[i].school} · {META[i].location}
              </p>
              <p className="mt-6 text-sm text-gray-600 leading-relaxed">{d.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
