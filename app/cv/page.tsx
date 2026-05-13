export default function CVPage() {
  return (
    <div className="flex flex-col h-screen bg-[#0a0a0a]">
      {/* Top bar */}
      <header className="shrink-0 bg-[#0a0a0a] border-b border-white/10 h-10 flex items-center justify-between px-6 md:px-10">
        <a
          href="/"
          className="font-light text-white/50 text-[11px] tracking-[0.15em] uppercase hover:text-white transition-colors"
        >
          ← Back
        </a>
        <span className="font-medium text-white text-[11px] tracking-[0.15em] uppercase">
          José C. Thompson — CV
        </span>
        <a
          href="/jose-cv.pdf"
          download="Jose-Thompson-CV.pdf"
          type="application/pdf"
          className="font-medium text-[11px] tracking-[0.15em] uppercase text-white border border-white/20 px-4 py-1.5 hover:bg-white hover:text-[#0a0a0a] transition-colors"
        >
          Download PDF
        </a>
      </header>

      {/* PDF viewer */}
      <main className="flex-1 min-h-0">
        <iframe
          src="/jose-cv.pdf"
          title="José C. Thompson — Curriculum Vitae"
          className="w-full h-full"
        />
      </main>
    </div>
  );
}
