import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import SelectedWork from "@/components/SelectedWork";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <SelectedWork />
        <About />
        <Skills />
        <Contact />
      </main>
      <footer className="bg-[#0a0a0a] border-t border-white/10 py-6 px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <span className="text-[11px] text-white/30 tracking-[0.15em] uppercase">
            Jose Thompson
          </span>
          <span className="text-[11px] text-white/20">© 2025</span>
        </div>
      </footer>
    </>
  );
}
