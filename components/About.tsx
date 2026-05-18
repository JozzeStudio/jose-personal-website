"use client";

import { useState } from "react";
import Image from "next/image";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";

export default function About() {
  const { lang } = useLang();
  const t = translations[lang].about;
  const [imageError, setImageError] = useState(false);

  const [line1, line2] = t.heading.split("\n");

  return (
    <section id="about" className="bg-[#f0f0f0] py-20 md:py-28">
      <div className="px-6 md:px-10 grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        <div className="relative">
          <div className="aspect-[4/5] relative w-full overflow-hidden bg-[#d0d0d0]">
            {!imageError && (
              <Image
                src="/images/jose-portrait.jpg"
                alt="José C. Thompson"
                fill
                className="object-cover object-top grayscale"
                onError={() => setImageError(true)}
              />
            )}
          </div>
        </div>

        <div className="md:pt-4">
          <p className="font-light text-[10px] tracking-[0.25em] uppercase text-gray-400 mb-6">
            {t.label}
          </p>

          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-[#0a0a0a] leading-tight mb-4">
            {line1}
            <br />
            {line2}
          </h2>

          <p className="font-light text-[15px] text-gray-500 italic leading-relaxed mb-4">
            {t.italic}
          </p>

          <div className="space-y-4 text-[15px] font-light text-gray-600 leading-relaxed">
            <p>{t.para1}</p>
            <p>{t.para2}</p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-2">
            <div className="flex flex-col gap-2">
              {t.tagsLeft.map((tag) => (
                <span
                  key={tag}
                  className="font-medium text-[10px] tracking-[0.1em] uppercase text-[#0a0a0a] border border-gray-300 px-3 py-1 hover:text-[#F5620F] hover:border-[#F5620F] transition-colors duration-200 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              {t.tagsRight.map((tag) => (
                <span
                  key={tag}
                  className="font-medium text-[10px] tracking-[0.1em] uppercase text-[#0a0a0a] border border-gray-300 px-3 py-1 hover:text-[#F5620F] hover:border-[#F5620F] transition-colors duration-200 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
