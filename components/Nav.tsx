"use client";

import { useState } from "react";
import { useLang, type Lang } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";

const LANGUAGES: { code: Lang; label: string }[] = [
  { code: "en", label: "English" },
  { code: "nl", label: "Nederlands" },
  { code: "es", label: "Español" },
  { code: "ja", label: "日本語" },
];

export default function Nav() {
  const { lang, setLang } = useLang();
  const t = translations[lang].nav;
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a] border-b border-white/10">
      <div className="px-6 md:px-10 flex items-center justify-between h-10">
        <a
          href="/"
          className="text-white font-medium text-[11px] tracking-[0.18em] uppercase"
        >
          Jose Thompson
        </a>

        <div className="flex items-center gap-8">
          {/* Language picker */}
          <div className="relative">
            <button
              onClick={() => setOpen((o) => !o)}
              className="flex items-center gap-1 font-light text-white/70 text-[11px] tracking-[0.12em] uppercase hover:text-white transition-colors"
            >
              {t.language}
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
              >
                <path d="M1 2.5L4 5.5L7 2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {open && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
                <div className="absolute right-0 top-full mt-2 bg-[#0a0a0a] border border-white/10 z-20 min-w-[130px]">
                  {LANGUAGES.map(({ code, label }) => (
                    <button
                      key={code}
                      onClick={() => { setLang(code); setOpen(false); }}
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

          {[
            { label: t.work, href: "#work" },
            { label: t.about, href: "#about" },
            { label: t.cv, href: "/cv" },
            { label: t.contact, href: "#contact" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-light text-white/70 text-[11px] tracking-[0.12em] uppercase hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
