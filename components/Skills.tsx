"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type Slide = { src: string; label: string; position?: string };

const technical: Slide[] = [
  { src: "/skills/tech-1.jpg", label: "At sea, Mexico",        position: "center 20%" },
  { src: "/skills/tech-2.jpg", label: "Maritime engineering",   position: "center 15%" },
  { src: "/skills/tech-3.jpg", label: "3D design & printing",   position: "right 25%" },
  { src: "/skills/tech-4.jpg", label: "Offshore operations",    position: "center center" },
  { src: "/skills/tech-5.jpg", label: "Heavy manufacturing",    position: "center center" },
];

const commercial: Slide[] = [
  { src: "/skills/com-1.jpg", label: "Pitching to investors",  position: "center 60%" },
  { src: "/skills/com-2.jpg", label: "Public speaking",         position: "center 55%" },
  { src: "/skills/com-3.jpg", label: "Workshop facilitation",   position: "left 20%" },
  { src: "/skills/com-4.jpg", label: "Consultative selling",    position: "center 55%" },
  { src: "/skills/com-5.jpg", label: "€150K in sales",          position: "center 15%" },
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
      <h3 className="font-semibold text-[11px] tracking-[0.2em] uppercase text-white/80 text-center">
        {title}
      </h3>

      {/* Fixed-size image area — all slides stacked, active one fades in */}
      <div className="relative w-full aspect-[4/3] bg-white/5 overflow-hidden">
        {slides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === index ? 1 : 0, zIndex: i === index ? 1 : 0 }}
          >
            <Image
              src={slide.src}
              alt={slide.label}
              fill
              className="object-cover"
              style={{ objectPosition: slide.position ?? "center" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ))}
      </div>

      {/* Label fades with the image — orange background, same width as image */}
      <p
        key={labelKey}
        className="bg-[#F5620F] text-white font-medium text-sm tracking-wide animate-fade-in text-center px-3 py-2"
      >
        {slides[index].label}
      </p>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills">
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
