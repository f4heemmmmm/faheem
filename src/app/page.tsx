import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <div className="page-shell bg-white">
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
      </main>
    </div>
  );
}
