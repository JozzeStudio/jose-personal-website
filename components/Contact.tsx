const contactItems = [
  {
    label: "Email",
    value: "jcthompson209@gmail.com",
    href: null,
  },
  {
    label: "Phone",
    value: "+31 683 83 78 60",
    href: null,
  },
  {
    label: "LinkedIn",
    value: "Jose C. Thompson",
    href: "https://www.linkedin.com/in/jose-c-thompson/",
  },
];

function Arrow() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      className="opacity-30 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
    >
      <path
        d="M3 13L13 3M13 3H5M13 3V11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="bg-[#0a0a0a] py-20 md:py-28">
      <div className="px-6 md:px-10 grid md:grid-cols-2 gap-12 items-start">
        {/* Left */}
        <div>
          <p className="font-medium text-[10px] tracking-[0.25em] uppercase text-white/70 mb-6">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">
            Get in Touch
          </h2>
          <p className="mt-6 font-light text-white/50 text-[15px] leading-relaxed max-w-xs">
            Building something technical, something commercial, or something in between?
            Let&apos;s talk.
          </p>
        </div>

        {/* Right */}
        <div className="md:pt-12 flex flex-col">
          {contactItems.map((item) => {
            const inner = (
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-light text-[10px] tracking-[0.2em] uppercase text-white/30 mb-1">
                    {item.label}
                  </p>
                  <p className="text-white text-sm group-hover:text-[#F5620F] transition-colors duration-200 select-all">
                    {item.value}
                  </p>
                </div>
                {item.href && <Arrow />}
              </div>
            );

            const rowClass =
              "group border-b border-white/10 pb-5 mb-5 hover:border-[#F5620F] transition-colors duration-200";

            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={rowClass}
              >
                {inner}
              </a>
            ) : (
              <div key={item.label} className={`${rowClass} cursor-text`}>
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
