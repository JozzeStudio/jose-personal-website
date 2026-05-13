"use client";

export default function Nav() {
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
          {[
            { label: "Work", href: "#work" },
            { label: "About", href: "#about" },
            { label: "CV", href: "/cv" },
            { label: "Contact", href: "#contact" },
          ].map((link) => (
            <a
              key={link.label}
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
