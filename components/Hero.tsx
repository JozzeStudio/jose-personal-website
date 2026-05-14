"use client";

import { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative h-screen bg-[#0a0a0a] flex flex-col overflow-hidden">
      {/* Speech photo background — shown only if it loads */}
      {!imageError && (
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: imageLoaded ? 1 : 0 }}
        >
          <Image
            src="/jose-speech.jpg"
            alt=""
            fill
            priority
            className="object-cover grayscale"
            style={{ objectPosition: "center 30%" }}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        </div>
      )}

      {/* Dark overlay — always present, ensures legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-[#0a0a0a]/40" />

      {/* Name block */}
      <div className="relative z-10 flex flex-col justify-end h-full px-6 md:px-10 pb-16">
        <p className="font-light text-white/80 text-[10px] tracking-[0.3em] uppercase mb-5">
          Mechanical Engineer &amp; Entrepreneur
        </p>

        <h1
          className="text-white font-black leading-[0.88] tracking-tight uppercase"
          style={{ fontSize: "clamp(4.5rem, 14vw, 11rem)" }}
        >
          <span className="block">Jose</span>
          <span className="block">Thompson</span>
        </h1>
      </div>

      {/* Scroll indicator — centered at bottom, line reaches orange ticker */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center">
        <p className="font-light text-white/70 text-[10px] tracking-[0.3em] uppercase mb-2">
          Scroll
        </p>
        <div className="w-px h-10 bg-white/50" />
      </div>
    </section>
  );
}
