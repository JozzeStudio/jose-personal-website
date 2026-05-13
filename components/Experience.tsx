const roles = [
  {
    title: "Mechanical Engineer",
    org: "Maritime Industry",
    location: "Mexico City, MX",
    period: "2021 – 2023",
    bullets: [
      "Designed and maintained mechanical systems for commercial vessels",
      "Produced 3D models and technical documentation in SolidWorks and Fusion 360",
      "Coordinated with cross-functional teams on safety and compliance specs",
    ],
  },
  {
    title: "Co-Founder",
    org: "3D Printing Studio",
    location: "Amsterdam, NL",
    period: "2023 – 2024",
    bullets: [
      "Built and ran a product-to-print studio from zero to operational",
      "Secured €25,000 RVO innovation subsidy and won a pitch competition",
      "Led business development, client relationships, and production workflow",
    ],
  },
  {
    title: "Kitchen Sales Consultant",
    org: "IKEA",
    location: "Amsterdam, NL",
    period: "2023 – 2024",
    bullets: [
      "Generated over €150,000 in kitchen sales through consultative selling",
      "Operated across Dutch, English, and Spanish with diverse clientele",
      "Managed the full customer journey from design session to close",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-[#F5F5F5] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#F5620F] mb-4">
          Experience
        </p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0a0a0a] mb-16">
          Where I&apos;ve Worked
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {roles.map((role) => (
            <div
              key={role.title}
              className="bg-white p-8 flex flex-col gap-6"
            >
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-gray-400">
                  {role.period}
                </p>
                <h3 className="mt-2 text-xl font-bold text-[#0a0a0a]">{role.title}</h3>
                <p className="text-sm text-gray-500 mt-0.5">
                  {role.org} · {role.location}
                </p>
              </div>

              <div className="h-px bg-[#F5620F] w-8" />

              <ul className="space-y-3">
                {role.bullets.map((b) => (
                  <li key={b} className="text-sm text-gray-600 leading-relaxed flex gap-3">
                    <span className="text-[#1A4FEE] mt-1 shrink-0">—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
