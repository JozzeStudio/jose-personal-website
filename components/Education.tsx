const degrees = [
  {
    degree: "BSc Mechanical Engineering",
    school: "San Diego State University",
    location: "San Diego, CA",
    years: "2017 – 2021",
    note: "Foundation in thermodynamics, machine design, and manufacturing.",
  },
  {
    degree: "MSc Entrepreneurship",
    school: "University of Amsterdam",
    location: "Amsterdam, NL",
    years: "2022 – 2023",
    note: "Focus on venture creation, innovation management, and growth strategy.",
  },
];

export default function Education() {
  return (
    <section id="education" className="bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#F5620F] mb-4">
          Education
        </p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0a0a0a] mb-16">
          Education
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {degrees.map((d) => (
            <div
              key={d.degree}
              className="border-t-4 border-[#F5620F] pt-8 pr-8 pb-8"
            >
              <p className="text-xs font-semibold tracking-widest uppercase text-gray-400">
                {d.years}
              </p>
              <h3 className="mt-3 text-2xl font-bold text-[#0a0a0a] leading-tight">
                {d.degree}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {d.school} · {d.location}
              </p>
              <p className="mt-6 text-sm text-gray-600 leading-relaxed">{d.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
