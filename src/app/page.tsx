import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Footer from "@/components/sections/Footer";
import Navigation from "@/components/ui/Navigation";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import ScrollContainer from "@/components/ui/ScrollContainer";

const sectionIds = ["home", "about", "experience", "projects", "skills", "contact"];

export default function Home() {
  return (
    <>
      <Navigation />
      <ScrollContainer sectionIds={sectionIds}>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Footer />
      </ScrollContainer>
    </>
  );
}
