const technical = [
  "SolidWorks",
  "Fusion 360",
  "CAD / 3D Modeling",
  "Additive Manufacturing",
  "CE Testing",
  "Technical Documentation",
];

const commercial = [
  "HubSpot CRM",
  "Consultative Sales",
  "B2B Outbound",
  "Pitch & Fundraising",
  "Product Strategy",
  "EN / ES / NL",
];

export default function Skills() {
  return (
    <section id="skills">
      {/* Static header bar — centered, non-scrolling */}
      <div className="bg-white py-5 flex items-center justify-center border-b border-gray-100">
        <p className="font-light text-[10px] tracking-[0.35em] uppercase text-gray-400 text-center">
          Skills
        </p>
      </div>

      {/* Main skills block */}
      <div className="bg-[#1A4FEE] py-20 md:py-28">
        <div className="px-6 md:px-10">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-16">
            What I Bring
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Technical */}
            <div>
              <h3 className="font-light text-[11px] tracking-[0.2em] uppercase text-white/50 mb-6">
                Technical
              </h3>
              <ul>
                {technical.map((skill, i) => (
                  <li
                    key={skill}
                    className={`py-4 text-white text-lg font-medium flex items-center justify-between ${
                      i !== technical.length - 1 ? "border-b border-white/10" : ""
                    }`}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Commercial */}
            <div>
              <h3 className="font-light text-[11px] tracking-[0.2em] uppercase text-white/50 mb-6">
                Commercial
              </h3>
              <ul>
                {commercial.map((skill, i) => (
                  <li
                    key={skill}
                    className={`py-4 text-white text-lg font-medium flex items-center justify-between ${
                      i !== commercial.length - 1 ? "border-b border-white/10" : ""
                    }`}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
