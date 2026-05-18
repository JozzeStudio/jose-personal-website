"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLang } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";

type Slide = { src: string; position?: string };

const technicalSlides: Slide[] = [
  { src: "/skills/tech-1.jpg",  position: "center 35%" },
  { src: "/skills/tech-2.jpg",  position: "center 45%" },
  { src: "/skills/tech-3.jpg",  position: "center center" },
  { src: "/skills/tech-4.jpg",  position: "center 60%" },
  { src: "/skills/tech-5.jpg",  position: "center center" },
  { src: "/skills/tech-6.jpg",  position: "right 30%" },
  { src: "/skills/tech-7.jpg",  position: "center 35%" },
  { src: "/skills/tech-9.jpg",  position: "center 10%" },
  { src: "/skills/tech-10.jpg", position: "center 50%" },
];

const commercialSlides: Slide[] = [
  { src: "/skills/com-1.jpg", position: "center 75%" },
  { src: "/skills/com-2.jpg", position: "center 35%" },
  { src: "/skills/com-3.jpg", position: "center 80%" },
  { src: "/skills/com-4.jpg", position: "center 72%" },
  { src: "/skills/com-5.jpg", position: "center 55%" },
  { src: "/skills/com-6.jpg", position: "center 50%" },
  { src: "/skills/com-7.jpg", position: "left 25%" },
  { src: "/skills/com-8.jpg", position: "center 45%" },
  { src: "/skills/com-9.jpg", position: "center center" },
];

function Carousel({ slides, labels, title }: { slides: Slide[]; labels: string[]; title: string }) {
  const [index, setIndex] = useState(0);
  const [labelKey, setLabelKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
      setLabelKey((k) => k + 1);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="flex flex-col gap-5">
      <h3 className="font-semibold text-[11px] tracking-[0.2em] uppercase text-white/80 text-center">
        {title}
      </h3>

      <div className="relative w-full aspect-[4/3.45] bg-white/5 overflow-hidden">
        {slides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === index ? 1 : 0, zIndex: i === index ? 1 : 0 }}
          >
            <Image
              src={slide.src}
              alt={labels[i] ?? ""}
              fill
              className="object-cover"
              style={{ objectPosition: slide.position ?? "center" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ))}
      </div>

      <p
        key={labelKey}
        className="bg-[#F5620F] text-white font-medium text-sm tracking-wide animate-fade-in text-center px-3 py-2"
      >
        {labels[index]}
      </p>
    </div>
  );
}

export default function Skills() {
  const { lang } = useLang();
  const t = translations[lang].skills;

  return (
    <section id="skills">
      <div className="bg-[#1A4FEE] py-20 md:py-28">
        <div className="px-6 md:px-10">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-16">
            {t.heading}
          </h2>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <Carousel slides={technicalSlides} labels={t.slidesT} title={t.technical} />
            <Carousel slides={commercialSlides} labels={t.slidesC} title={t.commercial} />
          </div>
        </div>
      </div>
    </section>
  );
}
