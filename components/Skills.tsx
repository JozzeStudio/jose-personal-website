"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type Slide = { src: string; label: string };

const technical: Slide[] = [
  { src: "/skills/tech-1.jpg", label: "At sea, Mexico" },
  { src: "/skills/tech-2.jpg", label: "Maritime engineering" },
  { src: "/skills/tech-3.jpg", label: "3D design & printing" },
  { src: "/skills/tech-4.jpg", label: "Offshore operations" },
  { src: "/skills/tech-5.jpg", label: "Heavy manufacturing" },
];

const commercial: Slide[] = [
  { src: "/skills/com-1.jpg", label: "Pitching to investors" },
  { src: "/skills/com-2.jpg", label: "Public speaking" },
  { src: "/skills/com-3.jpg", label: "Workshop facilitation" },
  { src: "/skills/com-4.jpg", label: "Consultative selling" },
  { src: "/skills/com-5.jpg", label: "€150K in sales" },
];

function Carousel({ slides, title }: { slides: Slide[]; title: string }) {
  const [index, setIndex] = useState(0);
  const [labelKey, setLabelKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
      setLabelKey((k) => k + 1);
    }, 2800);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="flex flex-col gap-5">
      <h3 className="font-light text-[11px] tracking-[0.2em] uppercase text-white/50">
        {title}
      </h3>

      {/* Fixed-size image area — all slides stacked, active one fades in */}
      <div className="relative w-full aspect-[4/3] bg-white/5 overflow-hidden">
        {slides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === index ? 1 : 0 }}
          >
            <Image
              src={slide.src}
              alt={slide.label}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ))}
      </div>

      {/* Label fades with the image */}
      <p
        key={labelKey}
        className="text-white font-medium text-sm tracking-wide animate-fade-in"
      >
        {slides[index].label}
      </p>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills">
      {/* Static header bar */}
      <div className="bg-white py-5 flex items-center justify-center border-b border-gray-100">
        <p className="font-light text-[10px] tracking-[0.35em] uppercase text-gray-400 text-center">
          Skills
        </p>
      </div>

      {/* Main block */}
      <div className="bg-[#1A4FEE] py-20 md:py-28">
        <div className="px-6 md:px-10">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-16">
            What I Bring
          </h2>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <Carousel slides={technical} title="Technical" />
            <Carousel slides={commercial} title="Commercial" />
          </div>
        </div>
      </div>
    </section>
  );
}
