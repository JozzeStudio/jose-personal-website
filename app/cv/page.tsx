"use client";

import { useState } from "react";
import { useLang, type Lang } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";

const LANGUAGES: { code: Lang; label: string }[] = [
  { code: "en", label: "English" },
  { code: "nl", label: "Nederlands" },
  { code: "es", label: "Español" },
];

const META = {
  experience: [
    { location: "Mexico City, MX", period: "2021 – 2023" },
    { location: "Amsterdam, NL",   period: "2023 – 2024" },
    { location: "Amsterdam, NL",   period: "2023 – 2024" },
  ],
  education: [
    { school: "San Diego State University", location: "San Diego, CA", years: "2017 – 2021" },
    { school: "University of Amsterdam",    location: "Amsterdam, NL",  years: "2022 – 2023" },
  ],
};

function CVHtml() {
  const { lang } = useLang();
  const t = translations[lang];
  const cv = t.cv;

  return (
    <div className="bg-white text-[#0a0a0a] max-w-3xl mx-auto px-8 py-12 text-sm leading-relaxed">
      <div className="border-b border-gray-200 pb-6 mb-8">
        <h1 className="text-3xl font-black uppercase tracking-tight mb-1">José C. Thompson</h1>
        <p className="text-xs text-gray-500 tracking-wide">
          jcthompson209@gmail.com · +31 683 83 78 60 · linkedin.com/in/jose-c-thompson
        </p>
      </div>

      <div className="mb-8">
        <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#F5620F] mb-3">
          {cv.profileLabel}
        </p>
        <p className="text-gray-600 leading-relaxed">{cv.profileText}</p>
      </div>

      <div className="mb-8">
        <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#F5620F] mb-4">
          {t.experience.label}
        </p>
        {t.experience.roles.map((role, i) => (
          <div key={i} className="mb-6">
            <div className="flex items-baseline justify-between">
              <div>
                <span className="font-bold">{role.title}</span>
                <span className="text-gray-500"> · {role.org} · {META.experience[i].location}</span>
              </div>
              <span className="text-xs text-gray-400 shrink-0 ml-4">{META.experience[i].period}</span>
            </div>
            <ul className="mt-2 space-y-1">
              {role.bullets.map((b, j) => (
                <li key={j} className="text-gray-600 flex gap-2">
                  <span className="text-[#1A4FEE] shrink-0">—</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mb-8">
        <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#F5620F] mb-4">
          {t.education.label}
        </p>
        {t.education.degrees.map((d, i) => (
          <div key={i} className="mb-4">
            <div className="flex items-baseline justify-between">
              <div>
                <span className="font-bold">{d.degree}</span>
                <span className="text-gray-500"> · {META.education[i].school} · {META.education[i].location}</span>
              </div>
              <span className="text-xs text-gray-400 shrink-0 ml-4">{META.education[i].years}</span>
            </div>
            <p className="text-gray-600 mt-1">{d.note}</p>
          </div>
        ))}
      </div>

      <div>
        <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#F5620F] mb-4">
          {cv.skillsLabel}
        </p>
        <div className="space-y-2">
          <div className="flex gap-2">
            <span className="text-[10px] font-semibold tracking-widest uppercase text-gray-400 w-24 shrink-0 mt-0.5">
              {cv.techLabel}
            </span>
            <span className="text-gray-600">{cv.skillsTech}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-[10px] font-semibold tracking-widests uppercase text-gray-400 w-24 shrink-0 mt-0.5">
              {cv.commLabel}
            </span>
            <span className="text-gray-600">{cv.skillsComm}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-[10px] font-semibold tracking-widest uppercase text-gray-400 w-24 shrink-0 mt-0.5">
              {cv.langLabel}
            </span>
            <span className="text-gray-600">{cv.skillsLang}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CVPage() {
  const { lang, setLang } = useLang();
  const t = translations[lang].cv;
  const [langOpen, setLangOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-[#0a0a0a]">
      <header className="shrink-0 bg-[#0a0a0a] border-b border-white/10 h-10 flex items-center justify-between px-6 md:px-10">
        <a
          href="/"
          className="font-light text-white/50 text-[11px] tracking-[0.15em] uppercase hover:text-white transition-colors"
        >
          {t.back}
        </a>
        <span className="font-medium text-white text-[11px] tracking-[0.15em] uppercase">
          José C. Thompson — CV
        </span>
        <div className="flex items-center gap-4">
          <div className="relative">
            <button
              onClick={() => setLangOpen((o) => !o)}
              className="flex items-center gap-1 font-light text-white/70 text-[11px] tracking-[0.15em] uppercase hover:text-white transition-colors"
            >
              {translations[lang].nav.language}
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                className={`transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}>
                <path d="M1 2.5L4 5.5L7 2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {langOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setLangOpen(false)} />
                <div className="absolute right-0 top-full mt-2 bg-[#0a0a0a] border border-white/10 z-20 min-w-[130px]">
                  {LANGUAGES.map(({ code, label }) => (
                    <button
                      key={code}
                      onClick={() => { setLang(code); setLangOpen(false); }}
                      className={`w-full text-left px-4 py-2.5 text-[11px] tracking-[0.12em] uppercase transition-colors ${
                        lang === code
                          ? "text-[#F5620F] font-medium"
                          : "text-white/70 font-light hover:text-white"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          <a
            href="/jose-cv.pdf"
            download="Jose-Thompson-CV.pdf"
            type="application/pdf"
            className="font-medium text-[11px] tracking-[0.15em] uppercase text-white border border-white/20 px-4 py-1.5 hover:bg-white hover:text-[#0a0a0a] transition-colors"
          >
            {t.download}
          </a>
        </div>
      </header>

      <main className="flex-1 min-h-0 overflow-auto">
        {lang === "en" ? (
          <iframe
            src="/jose-cv.pdf"
            title="José C. Thompson — Curriculum Vitae"
            className="w-full h-full"
          />
        ) : (
          <CVHtml />
        )}
      </main>
    </div>
  );
}
