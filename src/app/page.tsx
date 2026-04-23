import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <div className="bg-white md:ml-[92px] md:mr-[32px]">
      <main>
        <Hero />
        <About />
        <Skills />
      </main>
    </div>
  );
}
